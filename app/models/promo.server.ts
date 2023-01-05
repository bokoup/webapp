import { request, gql } from 'graphql-request'

export async function getPromoItem(id: string) {
    const endpoint = process.env.GRAPHQL_API || "";

    const query = gql`
    query getPromo($id: String!) {
      Movie(title: $title) {
        releaseDate
        actors {
          name
        }
      }
    }
  `
    const variables = { id }
    return await request(endpoint, query, variables)
}

export async function getPromoListItems() {
    const endpoint = process.env.GRAPHQL_API || "";

    const query = gql`    
        query PromoListQuery {
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
  `
    return await request(endpoint, query)
}

