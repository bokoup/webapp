import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { Promo } from "~/graphql/graphql";
import { API_DATA, PLATFORM_SIGNER_ADDRESS } from "~/models/constants";

export interface IPromoItem {
  id: string;
  merchantId: string;
  campaignId: string;
  campaignName: string;
  mintId: string;
  name: string;
  symbol: string;
  maxMint: number | null;
  maxBurn: number | null;
  mintCount: number;
  burnCount: number;
  promoType: PromoType;
  active: boolean;
  metadataJson: IPromoMetadataJson;
  platformDevice: IPlatformDevice | null;
}

type PromoType = "buyXProductGetYFree" | "buyXCurrencyGetYPercent";

export interface IPromoAttribute {
  trait_type: string;
  value: string | number;
}

export interface IPlatformDevice {
  id: string;
  owner: string;
  location: string;
}

export interface IPromoCollection {
  name: string;
  family: string;
}

export interface IPromoFileSpec {
  uri: string;
  type: string | number;
}

export interface IPromoMetadataJson {
  name: string;
  symbol: string;
  description: string;
  image?: string;
  attributes: IPromoAttribute[];
  collection: IPromoCollection;
  properties?: {
    files: IPromoFileSpec[];
    category: string;
  };
  active: boolean;
}

export async function getPromoItem(id: string) {
  const query = graphql(`
    query PromoQueryDocument($id: String!) {
      promoByPk(id: $id) {
        id
        maxBurn
        maxMint
        burnCount
      }
    }
  `);

  const variables = { id };
  return await request(API_DATA!, query, variables);
}

export async function getPromoItems() {
  const query = graphql(`
    query PromoListQueryDocument {
      promo(orderBy: { createdAt: DESC }) {
        id
        mint
        campaign
        campaignObject {
          merchant
          campaignLocations {
            location
            locationObject {
              name
              devices {
                id
                name
                owner
                location
              }
            }
          }
        }
        maxMint
        maxBurn
        mintCount
        burnCount
        active
        createdAt
        metadataObject {
          id
          name
          symbol
          uri
          metadataJson
        }
        mintObject {
          id
          supply
        }
      }
    }
  `);

  let data: IPromoItem[] = (await request(API_DATA!, query)).promo.map(
    (item) => {
      console.log(item);
      return promoAdapter(item);
    }
  );
  return data;
}

export async function getMerchantPromoItems(merchant: string) {
  const query = graphql(`
    query MerchantPromoListQueryDocument($merchant: String!) {
      promo(
        where: { campaignObject: { merchant: { _eq: $merchant } } }
        orderBy: { createdAt: DESC }
      ) {
        id
        campaign
        campaignObject {
          merchant
          name
        }
        maxMint
        maxBurn
        mintCount
        burnCount
        active
        createdAt
        metadataObject {
          id
          name
          symbol
          uri
          metadataJson
        }
        mintObject {
          id
          supply
        }
      }
    }
  `);

  const variables = { merchant };

  let data: IPromoItem[] = (
    await request(API_DATA!, query, variables)
  ).promo.map((item) => promoAdapter(item));
  return data;
}

export async function getPromoId(campaign: string, name: string) {
  const query = graphql(`
    query PromoIdQueryDocument($campaign: String!, $name: String!) {
      promo(
        where: {
          _and: { campaign: { _eq: $campaign } }
          metadataObject: { name: { _eq: $name } }
        }
        orderBy: { createdAt: DESC }
      ) {
        id
      }
    }
  `);

  const variables = { campaign, name };

  let data: string[] = (await request(API_DATA!, query, variables)).promo.map(
    (item) => item.id
  );
  return data[0];
}

export async function getMintPromoTxId(uuid: string) {
  const query = graphql(`
    query MintPromoTxIdQueryDocument($memo: jsonb) {
      mintPromoToken(where: { memo: { _contains: $memo } }) {
        signature
      }
    }
  `);

  const variables = {
    memo: {
      uuid,
    },
  };

  let data: string[] = (
    await request(API_DATA!, query, variables)
  ).mintPromoToken.map((item) => item.signature);
  return data[0];
}

export async function getDeviceIdByOwner(
  mint: string,
  owner: string
): Promise<Record<string, any> | null> {
  const query = graphql(`
    query DeviceIdByOwnerQueryDocument($mint: String!, $owner: String!) {
      promo(where: { mint: { _eq: $mint } }) {
        metadataObject {
          name
        }
        campaign
        campaignObject {
          campaignLocations {
            location
            locationObject {
              devices(where: { owner: { _eq: $owner } }) {
                id
                owner
                location
              }
            }
          }
        }
      }
    }
  `);

  const variables = { mint, owner };
  const data = (await request(API_DATA!, query, variables)).promo.map(
    (item) => {
      return {
        promoName: item.metadataObject!.name,
        campaignId: item.campaign,
        device: item.campaignObject?.campaignLocations.flatMap(
          (campaignLocation) => {
            return campaignLocation.locationObject?.devices.map((device) => {
              return {
                id: device.id,
                owner: device.owner,
                location: device.location,
              } as IPlatformDevice;
            });
          }
        )[0],
      };
    }
  );

  return data ? data[0] : null;
}

export function promoAdapter(item: Promo | Record<string, any>) {
  const promoType = item.metadataObject?.metadataJson.attributes.filter(
    (attribute: IPromoAttribute) => attribute.trait_type == "promoType"
  )[0].value;

  const platformDevices: IPlatformDevice[] =
    item.campaignObject?.campaignLocations?.flatMap(
      (campaignLocation: Record<string, any>) => {
        return campaignLocation.locationObject?.devices.flatMap(
          (device: Record<string, any>) => {
            if (device.owner == PLATFORM_SIGNER_ADDRESS) {
              return [
                {
                  id: device.id,
                  owner: device.owner,
                  location: device.location,
                },
              ] as IPlatformDevice[];
            }
            return [];
          }
        );
      }
    );

  return {
    id: item.id,
    merchantId: item.campaignObject?.merchant,
    campaignId: item.campaign,
    campaignName: item.campaignObject?.name,
    mintId: item.mint,
    name: item.metadataObject?.name,
    symbol: item.metadataObject?.symbol,
    maxMint: item.maxMint,
    maxBurn: item.maxBurn,
    mintCount: item.mintCount,
    burnCount: item.burnCount,
    promoType,
    active: item.active,
    metadataJson: item.metadataObject?.metadataJson,
    platformDevice: platformDevices ? platformDevices[0] : null,
  } as IPromoItem;
}
