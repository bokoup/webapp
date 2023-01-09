/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n": types.PromoQueryDocumentDocument,
    "    \n        query PromoListQueryDocument {\n            promo {\n                id\n                owner\n                maxMint\n                maxBurn\n                mintCount\n                burnCount\n                createdAt\n                metadataObject {\n                    id\n                    name\n                    symbol\n                    uri\n                    image: metadataJson(path: \"image\")\n                    description: metadataJson(path: \"description\")\n                    attributes: metadataJson(path: \"attributes\")\n                }\n                mintObject {\n                    id\n                    supply\n                }\n            }\n    }\n  ": types.PromoListQueryDocumentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n"): (typeof documents)["\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "    \n        query PromoListQueryDocument {\n            promo {\n                id\n                owner\n                maxMint\n                maxBurn\n                mintCount\n                burnCount\n                createdAt\n                metadataObject {\n                    id\n                    name\n                    symbol\n                    uri\n                    image: metadataJson(path: \"image\")\n                    description: metadataJson(path: \"description\")\n                    attributes: metadataJson(path: \"attributes\")\n                }\n                mintObject {\n                    id\n                    supply\n                }\n            }\n    }\n  "): (typeof documents)["    \n        query PromoListQueryDocument {\n            promo {\n                id\n                owner\n                maxMint\n                maxBurn\n                mintCount\n                burnCount\n                createdAt\n                metadataObject {\n                    id\n                    name\n                    symbol\n                    uri\n                    image: metadataJson(path: \"image\")\n                    description: metadataJson(path: \"description\")\n                    attributes: metadataJson(path: \"attributes\")\n                }\n                mintObject {\n                    id\n                    supply\n                }\n            }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;