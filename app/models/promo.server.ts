import { request } from 'graphql-request'
import { graphql } from '../graphql/gql'

export interface PromoItem {
  id: string
  name: string
  image: string
  description: string,
  maxMint: number,
  maxBurn: number,
  mintCount: number,
  burnCount: number,
  mintId: string
}


export async function getPromoItem(id: string) {
  const endpoint = process.env.GRAPHQL_API || "";

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

  const variables = { id }
  return await request(endpoint, query, variables)
}

export async function getPromoItems() {
  const endpoint = process.env.GRAPHQL_API || "";

  const query = graphql(`    
        query PromoListQueryDocument {
            promo {
                id
                owner
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
                    image: metadataJson(path: "image")
                    description: metadataJson(path: "description")
                    attributes: metadataJson(path: "attributes")
                }
                mintObject {
                    id
                    supply
                }
            }
    }
  `);

  let data: PromoItem[] = (await request(endpoint, query)).promo.map(item => {
    return {
      id: item.id,
      name: item.metadataObject?.name,
      image: item.metadataObject?.image,
      description: item.metadataObject?.description,
      maxMint: item.maxMint,
      maxBurn: item.maxBurn,
      mintCount: item.mintCount,
      burnCount: item.burnCount,
      mintId: item.mintObject?.id
    } as PromoItem
  });

  return data
}

