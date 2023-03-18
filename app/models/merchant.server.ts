import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { API_DATA } from "~/models/urls";
import {
  MerchantItemQueryDocumentQuery,
  MerchantListQueryDocumentQuery,
} from "~/graphql/graphql";
import { User } from "~/session.server";

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
  locations: string[];
  active: boolean;
  metadataJson: ICampaignMetadataJson;
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
        locations: campaign.locations,
        active: campaign.active,
        metadataJson: campaign.metadataJson,
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
          locations: campaign.locations,
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
            metadataJson
            active
          }
        }
        campaigns {
          id
          merchant
          name
          locations
          active
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
            metadataJson
            active
          }
        }
        campaigns {
          id
          merchant
          name
          locations
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
  name: string
): Promise<string | null> {
  if (!location || !name) return null;

  const query = graphql(`
    query DeviceIdQueryDocument($location: String!, $name: String!) {
      device(
        where: { _and: { location: { _eq: $location } }, name: { _eq: $name } }
      ) {
        id
      }
    }
  `);

  const variables = { location, name };
  const data = (await request(API_DATA!, query, variables)).device.map(
    (item) => {
      return item.id;
    }
  );

  return data ? data[0] : null;
}
