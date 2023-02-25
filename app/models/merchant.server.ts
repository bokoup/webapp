import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { API_DATA } from "~/models/urls";
import {
  Merchant,
  MerchantItemQueryDocumentQuery,
  MerchantListQueryDocumentQuery,
} from "~/graphql/graphql";

export interface IMerchantItem {
  id: string;
  name: string;
  metadataJson: IMerchantMetadataJson;
}

function merchantItemAdapter(
  data: MerchantItemQueryDocumentQuery["merchantByPk"]
): IMerchantItem {
  return {
    id: data!.id,
    name: data!.name,
    metadataJson: data!.metadataJson,
  };
}

function merchantListAdapter(
  data: MerchantListQueryDocumentQuery["merchant"]
): IMerchantItem[] {
  const merchantList = data.map((m) => {
    return { id: m.id, name: m.name, metadataJson: m.metadataJson };
  });
  return merchantList;
}

export interface IMerchantAttribute {
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
  attributes?: IMerchantAttribute[];
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
        campaigns {
          id
          name
        }
        locations {
          id
          name
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
      }
    }
  `);

  return await request(API_DATA!, query).then((data) =>
    merchantListAdapter(data.merchant)
  );
}
