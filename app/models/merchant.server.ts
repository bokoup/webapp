import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { API_DATA } from "~/models/urls";
import {
  MerchantItemQueryDocumentQuery,
  MerchantListQueryDocumentQuery,
} from "~/graphql/graphql";

export interface IMerchantItem {
  id: string;
  owner: string;
  name: string;
  active: boolean;
  metadataJson: IMerchantMetadataJson;
  locations: ILocationItem[];
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
          name
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
          name
        }
      }
    }
  `);

  return await request(API_DATA!, query).then((data) =>
    merchantListAdapter(data.merchant)
  );
}
