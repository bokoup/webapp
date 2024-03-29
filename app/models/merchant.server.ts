import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { API_DATA } from "~/models/constants";
import type {
  MerchantItemQueryDocumentQuery,
  MerchantListQueryDocumentQuery,
} from "~/graphql/graphql";
import type { User } from "~/session.server";
import type { IPromoItem } from "./promo.server";
import { promoAdapter } from "./promo.server";

export interface IMerchantItem {
  id: string;
  owner: string;
  name: string;
  active: boolean;
  metadataJson: IMerchantMetadataJson;
  locations: ILocationItem[];
  campaigns: ICampaignItem[];
}

export interface ILocationItem {
  id: string;
  merchant: string;
  name: string;
  active: boolean;
  metadataJson: ILocationMetadataJson;
  deviceCount: number;
  devices: IDeviceItem[];
}

export interface ILocationItemSummary {
  deviceCount: number;
}

export interface IDeviceItem {
  id: string;
  owner: string;
  location: string;
  locationName: string;
  name: string;
  active: boolean;
  metadataJson: ILocationMetadataJson;
}

export interface ICampaignItem {
  id: string;
  merchant: string;
  name: string;
  active: boolean;
  metadataJson: ICampaignMetadataJson;
  promos?: IPromoItem[];
  locations?: ILocationItem[] | ILocationItemSummary[];
}

export interface IAttribute {
  trait_type: string;
  value: string | number;
}

export interface IPromoFileSpec {
  uri: string;
  type: string | number;
}

export interface IMerchantMetadataJson {
  name: string;
  description: string;
  website: string;
  image?: string;
  active: boolean;
  attributes?: IAttribute[];
}

export interface ILocationMetadataJson {
  name: string;
  description: string;
  image?: string;
  address: string;
  active: boolean;
  attributes?: IAttribute[];
}

export interface IDeviceMetadataJson {
  name: string;
  description: string;
  active: boolean;
  attributes?: IAttribute[];
}

export interface ICampaignMetadataJson {
  name: string;
  description: string;
  active: boolean;
  attributes?: IAttribute[];
}

function merchantItemAdapter(
  data: MerchantItemQueryDocumentQuery["merchantByPk"]
): IMerchantItem {
  return {
    id: data!.id,
    owner: data!.owner,
    name: data!.name,
    active: data!.active,
    metadataJson: data!.metadataJson,
    locations: data!.locations.map((location) => {
      return {
        id: location.id,
        merchant: location.merchant,
        name: location.name,
        active: location.active,
        metadataJson: location.metadataJson,
        deviceCount: location.devicesAggregate.aggregate!.count,
        devices: location.devices.map((device) => {
          return {
            id: device.id,
            owner: device.owner,
            location: device.location,
            locationName: location.name,
            name: device.name,
            active: device.active,
            metadataJson: device.metadataJson,
          };
        }),
      };
    }),
    campaigns: data!.campaigns.map((campaign) => {
      return {
        id: campaign.id,
        merchant: campaign.merchant,
        name: campaign.name,
        metadataJson: campaign.metadataJson,
        active: campaign.active,
        promos: campaign.promos.map((promo) => {
          return promoAdapter(promo);
        }),
        locations: campaign.campaignLocations.map((campaignLocation) => {
          const location = campaignLocation.locationObject!;
          return {
            deviceCount: location.devicesAggregate.aggregate!.count,
          };
        }),
      };
    }),
  };
}

function merchantListAdapter(
  data: MerchantListQueryDocumentQuery["merchant"]
): IMerchantItem[] {
  const merchantList = data.map((m) => {
    return {
      id: m.id,
      owner: m.owner,
      name: m.name,
      active: m.active,
      metadataJson: m.metadataJson,
      locations: m.locations.map((location) => {
        return {
          id: location.id,
          merchant: location.merchant,
          name: location.name,
          active: location.active,
          metadataJson: location.metadataJson,
          deviceCount: location.devicesAggregate.aggregate!.count,
          devices: location.devices.map((device) => {
            return {
              id: device.id,
              owner: device.owner,
              location: device.location,
              locationName: location.name,
              name: device.name,
              active: device.active,
              metadataJson: device.metadataJson,
            };
          }),
        };
      }),
      campaigns: m.campaigns.map((campaign) => {
        return {
          id: campaign.id,
          merchant: campaign.merchant,
          name: campaign.name,
          active: campaign.active,
          metadataJson: campaign.metadataJson,
        };
      }),
    };
  });
  return merchantList;
}

export async function getMerchantItem(id: string): Promise<IMerchantItem> {
  const query = graphql(`
    query MerchantItemQueryDocument($id: String!) {
      merchantByPk(id: $id) {
        id
        owner
        name
        active
        metadataJson
        locations {
          id
          merchant
          name
          active
          metadataJson
          devicesAggregate {
            aggregate {
              count
            }
          }
          devices {
            id
            owner
            location
            name
            active
            metadataJson
          }
        }
        campaigns(orderBy: { createdAt: ASC }) {
          id
          merchant
          name
          active
          campaignLocations {
            locationObject {
              devicesAggregate {
                aggregate {
                  count
                }
              }
            }
          }
          promos(orderBy: { createdAt: DESC }) {
            id
            mint
            campaign
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
            campaignObject {
              campaignLocations {
                locationObject {
                  devices {
                    id
                    owner
                    location
                  }
                }
              }
            }
          }

          metadataJson
        }
      }
    }
  `);

  const variables = { id };
  const data = await request(API_DATA!, query, variables);

  return merchantItemAdapter(data.merchantByPk);
}

export async function getMerchantList(): Promise<IMerchantItem[]> {
  const query = graphql(`
    query MerchantListQueryDocument {
      merchant(orderBy: { name: ASC }) {
        id
        name
        owner
        active
        metadataJson
        locations {
          id
          merchant
          name
          active
          metadataJson
          devicesAggregate {
            aggregate {
              count
            }
          }
          devices {
            id
            owner
            location
            name
            active
            metadataJson
          }
        }
        campaigns {
          id
          merchant
          name
          active
          metadataJson
        }
      }
    }
  `);

  return await request(API_DATA!, query).then((data) =>
    merchantListAdapter(data.merchant)
  );
}

export async function getDeviceItem(id: string): Promise<IDeviceItem | null> {
  const query = graphql(`
    query DeviceItemQueryDocument($id: String!) {
      deviceByPk(id: $id) {
        id
        name
        owner
        uri
        active
        metadataJson
        locationObject {
          id
          metadataJson
        }
      }
    }
  `);

  const variables = { id };
  const data = await request(API_DATA!, query, variables);

  return await request(API_DATA!, query, variables).then((data) => {
    const device = data.deviceByPk;
    if (device != null) {
      return {
        id: device.id,
        owner: device.owner,
        location: device.locationObject!.id,
        locationName: device.locationObject!.metadataJson.name,
        name: device.name,
        active: device.active,
        metadataJson: device.metadataJson,
      };
    } else {
      return null;
    }
  });
}

export async function getMerchantId(
  userId: User["userId"]
): Promise<string | null> {
  if (!userId) return null;

  const query = graphql(`
    query MerchantIdQueryDocument($owner: String!) {
      merchant(where: { owner: { _eq: $owner } }) {
        id
      }
    }
  `);

  const variables = { owner: userId };
  const data = (await request(API_DATA!, query, variables)).merchant.map(
    (item) => {
      return item.id;
    }
  );

  return data ? data[0] : null;
}

export async function getLocationId(
  merchant: User["merchantId"],
  name: string
): Promise<string | null> {
  if (!merchant || !name) return null;

  const query = graphql(`
    query LocationIdQueryDocument($merchant: String!, $name: String!) {
      location(
        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }
      ) {
        id
      }
    }
  `);

  const variables = { merchant, name };
  const data = (await request(API_DATA!, query, variables)).location.map(
    (item) => {
      return item.id;
    }
  );

  return data ? data[0] : null;
}

export async function getDeviceId(
  location: string,
  name: string,
  timestamp: string
): Promise<string | null> {
  if (!location || !name) return null;

  const query = graphql(`
    query DeviceIdQueryDocument(
      $location: String!
      $name: String!
      $timestamp: timestamptz!
    ) {
      device(
        where: {
          _and: { location: { _eq: $location } }
          name: { _eq: $name }
          modifiedAt: { _gt: $timestamp }
        }
      ) {
        id
      }
    }
  `);

  const variables = { location, name, timestamp };
  const data = (await request(API_DATA!, query, variables)).device.map(
    (item) => {
      return item.id;
    }
  );

  return data ? data[0] : null;
}

export async function getCampaignId(
  merchant: User["merchantId"],
  name: string
): Promise<string | null> {
  if (!merchant || !name) return null;

  const query = graphql(`
    query CampaignIdQueryDocument($merchant: String!, $name: String!) {
      campaign(
        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }
      ) {
        id
      }
    }
  `);

  const variables = { merchant, name };
  const data = (await request(API_DATA!, query, variables)).campaign.map(
    (item) => {
      return item.id;
    }
  );

  return data ? data[0] : null;
}
