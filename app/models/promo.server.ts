import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { API_DATA } from "~/models/urls";

export interface IPromoItem {
  id: string;
  mintId: string;
  name: string;
  symbol: string;
  maxMint: number | null;
  maxBurn: number | null;
  mintCount: number;
  burnCount: number;
  promoType: PromoType;
  metadataJson: IPromoMetadataJson;
}

type PromoType = "buyXProductGetYFree" | "buyXCurrencyGetYPercent";

export interface IPromoAttribute {
  trait_type: string;
  value: string | number;
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
      promo(
        orderBy: { createdAt: DESC }
        where: { createdAt: { _gte: "2023-01-21T03:37" } }
      ) {
        id
        campaign
        maxMint
        maxBurn
        mintCount
        burnCount
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
      const promoType = item.metadataObject?.metadataJson.attributes.filter(
        (attribute: IPromoAttribute) => attribute.trait_type == "promoType"
      )[0].value;
      return {
        id: item.id,
        mintId: item.mintObject?.id,
        name: item.metadataObject?.name,
        symbol: item.metadataObject?.symbol,
        maxMint: item.maxMint,
        maxBurn: item.maxBurn,
        mintCount: item.mintCount,
        burnCount: item.burnCount,
        promoType,
        metadataJson: item.metadataObject?.metadataJson,
      } as IPromoItem;
    }
  );
  return data;
}
