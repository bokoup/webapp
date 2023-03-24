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
    "\n    query MerchantItemQueryDocument($id: String!) {\n      merchantByPk(id: $id) {\n        id\n        owner\n        name\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            metadataJson\n            active\n          }\n        }\n        campaigns(orderBy: { createdAt: ASC }) {\n          id\n          merchant\n          name\n          locations\n          active\n          promos(orderBy: { createdAt: DESC }) {\n            id\n            campaign\n            maxMint\n            maxBurn\n            mintCount\n            burnCount\n            active\n            createdAt\n            metadataObject {\n              id\n              name\n              symbol\n              uri\n              metadataJson\n            }\n            mintObject {\n              id\n              supply\n            }\n          }\n          metadataJson\n        }\n      }\n    }\n  ": types.MerchantItemQueryDocumentDocument,
    "\n    query MerchantListQueryDocument {\n      merchant(orderBy: { name: ASC }) {\n        id\n        name\n        owner\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            active\n            metadataJson\n          }\n        }\n        campaigns {\n          id\n          merchant\n          name\n          locations\n          active\n          metadataJson\n        }\n      }\n    }\n  ": types.MerchantListQueryDocumentDocument,
    "\n    query MerchantIdQueryDocument($owner: String!) {\n      merchant(where: { owner: { _eq: $owner } }) {\n        id\n      }\n    }\n  ": types.MerchantIdQueryDocumentDocument,
    "\n    query LocationIdQueryDocument($merchant: String!, $name: String!) {\n      location(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  ": types.LocationIdQueryDocumentDocument,
    "\n    query DeviceIdQueryDocument($location: String!, $name: String!) {\n      device(\n        where: { _and: { location: { _eq: $location } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  ": types.DeviceIdQueryDocumentDocument,
    "\n    query DeviceIdByOwnerQueryDocument($locations: [String!], $owner: String!) {\n      device(\n        where: {\n          _and: { location: { _in: $locations } }\n          owner: { _eq: $owner }\n        }\n      ) {\n        id\n      }\n    }\n  ": types.DeviceIdByOwnerQueryDocumentDocument,
    "\n    query CampaignIdQueryDocument($merchant: String!, $name: String!) {\n      campaign(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  ": types.CampaignIdQueryDocumentDocument,
    "\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n  ": types.PromoQueryDocumentDocument,
    "\n    query PromoListQueryDocument {\n      promo(orderBy: { createdAt: DESC }) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        mint\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  ": types.PromoListQueryDocumentDocument,
    "\n    query MerchantPromoListQueryDocument($merchant: String!) {\n      promo(\n        where: { campaignObject: { merchant: { _eq: $merchant } } }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  ": types.MerchantPromoListQueryDocumentDocument,
    "\n    query PromoIdQueryDocument($campaign: String!, $name: String!) {\n      promo(\n        where: {\n          _and: { campaign: { _eq: $campaign } }\n          metadataObject: { name: { _eq: $name } }\n        }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n      }\n    }\n  ": types.PromoIdQueryDocumentDocument,
    "\n    query MintPromoTxIdQueryDocument($memo: jsonb) {\n      mintPromoToken(where: { memo: { _contains: $memo } }) {\n        signature\n      }\n    }\n  ": types.MintPromoTxIdQueryDocumentDocument,
    "\n    query SignMemoQueryDocument($memo: jsonb) {\n      signMemo(where: { memo: { _contains: $memo } }) {\n        visitId: memo(path: \"visitId\")\n        signer\n        signature\n        merchantObject {\n          id\n        }\n      }\n    }\n  ": types.SignMemoQueryDocumentDocument,
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
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MerchantItemQueryDocument($id: String!) {\n      merchantByPk(id: $id) {\n        id\n        owner\n        name\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            metadataJson\n            active\n          }\n        }\n        campaigns(orderBy: { createdAt: ASC }) {\n          id\n          merchant\n          name\n          locations\n          active\n          promos(orderBy: { createdAt: DESC }) {\n            id\n            campaign\n            maxMint\n            maxBurn\n            mintCount\n            burnCount\n            active\n            createdAt\n            metadataObject {\n              id\n              name\n              symbol\n              uri\n              metadataJson\n            }\n            mintObject {\n              id\n              supply\n            }\n          }\n          metadataJson\n        }\n      }\n    }\n  "): (typeof documents)["\n    query MerchantItemQueryDocument($id: String!) {\n      merchantByPk(id: $id) {\n        id\n        owner\n        name\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            metadataJson\n            active\n          }\n        }\n        campaigns(orderBy: { createdAt: ASC }) {\n          id\n          merchant\n          name\n          locations\n          active\n          promos(orderBy: { createdAt: DESC }) {\n            id\n            campaign\n            maxMint\n            maxBurn\n            mintCount\n            burnCount\n            active\n            createdAt\n            metadataObject {\n              id\n              name\n              symbol\n              uri\n              metadataJson\n            }\n            mintObject {\n              id\n              supply\n            }\n          }\n          metadataJson\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MerchantListQueryDocument {\n      merchant(orderBy: { name: ASC }) {\n        id\n        name\n        owner\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            active\n            metadataJson\n          }\n        }\n        campaigns {\n          id\n          merchant\n          name\n          locations\n          active\n          metadataJson\n        }\n      }\n    }\n  "): (typeof documents)["\n    query MerchantListQueryDocument {\n      merchant(orderBy: { name: ASC }) {\n        id\n        name\n        owner\n        active\n        metadataJson\n        locations {\n          id\n          merchant\n          name\n          active\n          metadataJson\n          devicesAggregate {\n            aggregate {\n              count\n            }\n          }\n          devices {\n            id\n            owner\n            location\n            name\n            active\n            metadataJson\n          }\n        }\n        campaigns {\n          id\n          merchant\n          name\n          locations\n          active\n          metadataJson\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MerchantIdQueryDocument($owner: String!) {\n      merchant(where: { owner: { _eq: $owner } }) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query MerchantIdQueryDocument($owner: String!) {\n      merchant(where: { owner: { _eq: $owner } }) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query LocationIdQueryDocument($merchant: String!, $name: String!) {\n      location(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query LocationIdQueryDocument($merchant: String!, $name: String!) {\n      location(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query DeviceIdQueryDocument($location: String!, $name: String!) {\n      device(\n        where: { _and: { location: { _eq: $location } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query DeviceIdQueryDocument($location: String!, $name: String!) {\n      device(\n        where: { _and: { location: { _eq: $location } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query DeviceIdByOwnerQueryDocument($locations: [String!], $owner: String!) {\n      device(\n        where: {\n          _and: { location: { _in: $locations } }\n          owner: { _eq: $owner }\n        }\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query DeviceIdByOwnerQueryDocument($locations: [String!], $owner: String!) {\n      device(\n        where: {\n          _and: { location: { _in: $locations } }\n          owner: { _eq: $owner }\n        }\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query CampaignIdQueryDocument($merchant: String!, $name: String!) {\n      campaign(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query CampaignIdQueryDocument($merchant: String!, $name: String!) {\n      campaign(\n        where: { _and: { merchant: { _eq: $merchant } }, name: { _eq: $name } }\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n  "): (typeof documents)["\n    query PromoQueryDocument($id: String!) {\n      promoByPk(id: $id) {\n        id\n        maxBurn\n        maxMint\n        burnCount\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PromoListQueryDocument {\n      promo(orderBy: { createdAt: DESC }) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        mint\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  "): (typeof documents)["\n    query PromoListQueryDocument {\n      promo(orderBy: { createdAt: DESC }) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        mint\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MerchantPromoListQueryDocument($merchant: String!) {\n      promo(\n        where: { campaignObject: { merchant: { _eq: $merchant } } }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  "): (typeof documents)["\n    query MerchantPromoListQueryDocument($merchant: String!) {\n      promo(\n        where: { campaignObject: { merchant: { _eq: $merchant } } }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n        campaignObject {\n          merchant\n          locations\n        }\n        campaign\n        maxMint\n        maxBurn\n        mintCount\n        burnCount\n        active\n        createdAt\n        metadataObject {\n          id\n          name\n          symbol\n          uri\n          metadataJson\n        }\n        mintObject {\n          id\n          supply\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PromoIdQueryDocument($campaign: String!, $name: String!) {\n      promo(\n        where: {\n          _and: { campaign: { _eq: $campaign } }\n          metadataObject: { name: { _eq: $name } }\n        }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query PromoIdQueryDocument($campaign: String!, $name: String!) {\n      promo(\n        where: {\n          _and: { campaign: { _eq: $campaign } }\n          metadataObject: { name: { _eq: $name } }\n        }\n        orderBy: { createdAt: DESC }\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query MintPromoTxIdQueryDocument($memo: jsonb) {\n      mintPromoToken(where: { memo: { _contains: $memo } }) {\n        signature\n      }\n    }\n  "): (typeof documents)["\n    query MintPromoTxIdQueryDocument($memo: jsonb) {\n      mintPromoToken(where: { memo: { _contains: $memo } }) {\n        signature\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SignMemoQueryDocument($memo: jsonb) {\n      signMemo(where: { memo: { _contains: $memo } }) {\n        visitId: memo(path: \"visitId\")\n        signer\n        signature\n        merchantObject {\n          id\n        }\n      }\n    }\n  "): (typeof documents)["\n    query SignMemoQueryDocument($memo: jsonb) {\n      signMemo(where: { memo: { _contains: $memo } }) {\n        visitId: memo(path: \"visitId\")\n        signer\n        signature\n        merchantObject {\n          id\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;