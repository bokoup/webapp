/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "burn_delegated_promo_token" */
export type BurnDelegatedPromoToken = {
  __typename?: 'BurnDelegatedPromoToken';
  adminSettings: Scalars['String'];
  authority: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  memo?: Maybe<Scalars['jsonb']>;
  mint: Scalars['String'];
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  platform: Scalars['String'];
  promo: Scalars['String'];
  promoGroup: Scalars['String'];
  /** An object relationship */
  promoObject?: Maybe<Promo>;
  signature: Scalars['String'];
  slot: Scalars['bigint'];
  tokenAccount: Scalars['String'];
  /** An object relationship */
  tokenAccountObject?: Maybe<TokenAccount>;
};


/** columns and relationships of "burn_delegated_promo_token" */
export type BurnDelegatedPromoTokenMemoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "burn_delegated_promo_token". All fields are combined with a logical 'AND'. */
export type BurnDelegatedPromoTokenBoolExp = {
  _and?: InputMaybe<Array<BurnDelegatedPromoTokenBoolExp>>;
  _not?: InputMaybe<BurnDelegatedPromoTokenBoolExp>;
  _or?: InputMaybe<Array<BurnDelegatedPromoTokenBoolExp>>;
  adminSettings?: InputMaybe<StringComparisonExp>;
  authority?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  platform?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  promoGroup?: InputMaybe<StringComparisonExp>;
  promoObject?: InputMaybe<PromoBoolExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenAccountObject?: InputMaybe<TokenAccountBoolExp>;
};

/** Ordering options when selecting data from "burn_delegated_promo_token". */
export type BurnDelegatedPromoTokenOrderBy = {
  adminSettings?: InputMaybe<OrderBy>;
  authority?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  platform?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
  promoGroup?: InputMaybe<OrderBy>;
  promoObject?: InputMaybe<PromoOrderBy>;
  signature?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenAccountObject?: InputMaybe<TokenAccountOrderBy>;
};

/** select columns of table "burn_delegated_promo_token" */
export enum BurnDelegatedPromoTokenSelectColumn {
  /** column name */
  AdminSettings = 'adminSettings',
  /** column name */
  Authority = 'authority',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Memo = 'memo',
  /** column name */
  Mint = 'mint',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Payer = 'payer',
  /** column name */
  Platform = 'platform',
  /** column name */
  Promo = 'promo',
  /** column name */
  PromoGroup = 'promoGroup',
  /** column name */
  Signature = 'signature',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount'
}

/** Streaming cursor of the table "burn_delegated_promo_token" */
export type BurnDelegatedPromoTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: BurnDelegatedPromoTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BurnDelegatedPromoTokenStreamCursorValueInput = {
  adminSettings?: InputMaybe<Scalars['String']>;
  authority?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  promoGroup?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "delegate_promo_token" */
export type DelegatePromoToken = {
  __typename?: 'DelegatePromoToken';
  createdAt: Scalars['timestamptz'];
  delegate: Scalars['String'];
  memo?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  promo: Scalars['String'];
  promoGroup: Scalars['String'];
  /** An object relationship */
  promoObject?: Maybe<Promo>;
  signature: Scalars['String'];
  slot: Scalars['bigint'];
  tokenAccount: Scalars['String'];
  /** An object relationship */
  tokenAccountObject?: Maybe<TokenAccount>;
  tokenOwner: Scalars['String'];
};


/** columns and relationships of "delegate_promo_token" */
export type DelegatePromoTokenMemoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "delegate_promo_token". All fields are combined with a logical 'AND'. */
export type DelegatePromoTokenBoolExp = {
  _and?: InputMaybe<Array<DelegatePromoTokenBoolExp>>;
  _not?: InputMaybe<DelegatePromoTokenBoolExp>;
  _or?: InputMaybe<Array<DelegatePromoTokenBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  delegate?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  promoGroup?: InputMaybe<StringComparisonExp>;
  promoObject?: InputMaybe<PromoBoolExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenAccountObject?: InputMaybe<TokenAccountBoolExp>;
  tokenOwner?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "delegate_promo_token". */
export type DelegatePromoTokenOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  delegate?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
  promoGroup?: InputMaybe<OrderBy>;
  promoObject?: InputMaybe<PromoOrderBy>;
  signature?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenAccountObject?: InputMaybe<TokenAccountOrderBy>;
  tokenOwner?: InputMaybe<OrderBy>;
};

/** select columns of table "delegate_promo_token" */
export enum DelegatePromoTokenSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Delegate = 'delegate',
  /** column name */
  Memo = 'memo',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Payer = 'payer',
  /** column name */
  Promo = 'promo',
  /** column name */
  PromoGroup = 'promoGroup',
  /** column name */
  Signature = 'signature',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount',
  /** column name */
  TokenOwner = 'tokenOwner'
}

/** Streaming cursor of the table "delegate_promo_token" */
export type DelegatePromoTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DelegatePromoTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DelegatePromoTokenStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  delegate?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  promoGroup?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  tokenOwner?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "metadata" */
export type Metadata = {
  __typename?: 'Metadata';
  collectionKey?: Maybe<Scalars['String']>;
  collectionVerified?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['timestamptz'];
  editionNonce?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isMutable: Scalars['Boolean'];
  key: Scalars['String'];
  metadataJson?: Maybe<Scalars['jsonb']>;
  mint: Scalars['String'];
  modifiedAt: Scalars['timestamptz'];
  name: Scalars['String'];
  primarySaleHappened: Scalars['Boolean'];
  sellerFeeBasisPoints: Scalars['Int'];
  slot: Scalars['bigint'];
  symbol: Scalars['String'];
  tokenStandard?: Maybe<Scalars['String']>;
  updateAuthority: Scalars['String'];
  uri: Scalars['String'];
  usesRemaining?: Maybe<Scalars['bigint']>;
  usesTotal?: Maybe<Scalars['bigint']>;
  usesUseMethod?: Maybe<Scalars['String']>;
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "metadata" */
export type MetadataMetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "metadata". All fields are combined with a logical 'AND'. */
export type MetadataBoolExp = {
  _and?: InputMaybe<Array<MetadataBoolExp>>;
  _not?: InputMaybe<MetadataBoolExp>;
  _or?: InputMaybe<Array<MetadataBoolExp>>;
  collectionKey?: InputMaybe<StringComparisonExp>;
  collectionVerified?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  editionNonce?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isMutable?: InputMaybe<BooleanComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  metadataJson?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  primarySaleHappened?: InputMaybe<BooleanComparisonExp>;
  sellerFeeBasisPoints?: InputMaybe<IntComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  symbol?: InputMaybe<StringComparisonExp>;
  tokenStandard?: InputMaybe<StringComparisonExp>;
  updateAuthority?: InputMaybe<StringComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
  usesRemaining?: InputMaybe<BigintComparisonExp>;
  usesTotal?: InputMaybe<BigintComparisonExp>;
  usesUseMethod?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "metadata". */
export type MetadataOrderBy = {
  collectionKey?: InputMaybe<OrderBy>;
  collectionVerified?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  editionNonce?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isMutable?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  metadataJson?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  primarySaleHappened?: InputMaybe<OrderBy>;
  sellerFeeBasisPoints?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  symbol?: InputMaybe<OrderBy>;
  tokenStandard?: InputMaybe<OrderBy>;
  updateAuthority?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  usesRemaining?: InputMaybe<OrderBy>;
  usesTotal?: InputMaybe<OrderBy>;
  usesUseMethod?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "metadata" */
export enum MetadataSelectColumn {
  /** column name */
  CollectionKey = 'collectionKey',
  /** column name */
  CollectionVerified = 'collectionVerified',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EditionNonce = 'editionNonce',
  /** column name */
  Id = 'id',
  /** column name */
  IsMutable = 'isMutable',
  /** column name */
  Key = 'key',
  /** column name */
  MetadataJson = 'metadataJson',
  /** column name */
  Mint = 'mint',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Name = 'name',
  /** column name */
  PrimarySaleHappened = 'primarySaleHappened',
  /** column name */
  SellerFeeBasisPoints = 'sellerFeeBasisPoints',
  /** column name */
  Slot = 'slot',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenStandard = 'tokenStandard',
  /** column name */
  UpdateAuthority = 'updateAuthority',
  /** column name */
  Uri = 'uri',
  /** column name */
  UsesRemaining = 'usesRemaining',
  /** column name */
  UsesTotal = 'usesTotal',
  /** column name */
  UsesUseMethod = 'usesUseMethod',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "metadata" */
export type MetadataStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MetadataStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MetadataStreamCursorValueInput = {
  collectionKey?: InputMaybe<Scalars['String']>;
  collectionVerified?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  editionNonce?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  isMutable?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  metadataJson?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  primarySaleHappened?: InputMaybe<Scalars['Boolean']>;
  sellerFeeBasisPoints?: InputMaybe<Scalars['Int']>;
  slot?: InputMaybe<Scalars['bigint']>;
  symbol?: InputMaybe<Scalars['String']>;
  tokenStandard?: InputMaybe<Scalars['String']>;
  updateAuthority?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  usesRemaining?: InputMaybe<Scalars['bigint']>;
  usesTotal?: InputMaybe<Scalars['bigint']>;
  usesUseMethod?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "mint" */
export type Mint = {
  __typename?: 'Mint';
  createdAt?: Maybe<Scalars['timestamptz']>;
  decimals: Scalars['Int'];
  freezeAuthority?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isInitialized: Scalars['Boolean'];
  mintAuthority?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  promoObject?: Maybe<Promo>;
  slot: Scalars['bigint'];
  supply: Scalars['bigint'];
  /** An array relationship */
  tokenAccounts: Array<TokenAccount>;
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "mint" */
export type MintTokenAccountsArgs = {
  distinctOn?: InputMaybe<Array<TokenAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenAccountOrderBy>>;
  where?: InputMaybe<TokenAccountBoolExp>;
};

/** Boolean expression to filter rows from the table "mint". All fields are combined with a logical 'AND'. */
export type MintBoolExp = {
  _and?: InputMaybe<Array<MintBoolExp>>;
  _not?: InputMaybe<MintBoolExp>;
  _or?: InputMaybe<Array<MintBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  decimals?: InputMaybe<IntComparisonExp>;
  freezeAuthority?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isInitialized?: InputMaybe<BooleanComparisonExp>;
  mintAuthority?: InputMaybe<StringComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  promoObject?: InputMaybe<PromoBoolExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  supply?: InputMaybe<BigintComparisonExp>;
  tokenAccounts?: InputMaybe<TokenAccountBoolExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "mint". */
export type MintOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  freezeAuthority?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isInitialized?: InputMaybe<OrderBy>;
  mintAuthority?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  promoObject?: InputMaybe<PromoOrderBy>;
  slot?: InputMaybe<OrderBy>;
  supply?: InputMaybe<OrderBy>;
  tokenAccountsAggregate?: InputMaybe<TokenAccountAggregateOrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** columns and relationships of "mint_promo_token" */
export type MintPromoToken = {
  __typename?: 'MintPromoToken';
  authority: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  memo?: Maybe<Scalars['jsonb']>;
  mint: Scalars['String'];
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  promo: Scalars['String'];
  promoGroup: Scalars['String'];
  /** An object relationship */
  promoObject?: Maybe<Promo>;
  signature: Scalars['String'];
  slot: Scalars['bigint'];
  tokenAccount: Scalars['String'];
  tokenOwner: Scalars['String'];
};


/** columns and relationships of "mint_promo_token" */
export type MintPromoTokenMemoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "mint_promo_token". All fields are combined with a logical 'AND'. */
export type MintPromoTokenBoolExp = {
  _and?: InputMaybe<Array<MintPromoTokenBoolExp>>;
  _not?: InputMaybe<MintPromoTokenBoolExp>;
  _or?: InputMaybe<Array<MintPromoTokenBoolExp>>;
  authority?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  promoGroup?: InputMaybe<StringComparisonExp>;
  promoObject?: InputMaybe<PromoBoolExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenOwner?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "mint_promo_token". */
export type MintPromoTokenOrderBy = {
  authority?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
  promoGroup?: InputMaybe<OrderBy>;
  promoObject?: InputMaybe<PromoOrderBy>;
  signature?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenOwner?: InputMaybe<OrderBy>;
};

/** select columns of table "mint_promo_token" */
export enum MintPromoTokenSelectColumn {
  /** column name */
  Authority = 'authority',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Memo = 'memo',
  /** column name */
  Mint = 'mint',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Payer = 'payer',
  /** column name */
  Promo = 'promo',
  /** column name */
  PromoGroup = 'promoGroup',
  /** column name */
  Signature = 'signature',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount',
  /** column name */
  TokenOwner = 'tokenOwner'
}

/** Streaming cursor of the table "mint_promo_token" */
export type MintPromoTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MintPromoTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MintPromoTokenStreamCursorValueInput = {
  authority?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  promoGroup?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  tokenOwner?: InputMaybe<Scalars['String']>;
};

/** select columns of table "mint" */
export enum MintSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FreezeAuthority = 'freezeAuthority',
  /** column name */
  Id = 'id',
  /** column name */
  IsInitialized = 'isInitialized',
  /** column name */
  MintAuthority = 'mintAuthority',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Slot = 'slot',
  /** column name */
  Supply = 'supply',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "mint" */
export type MintStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MintStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MintStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  decimals?: InputMaybe<Scalars['Int']>;
  freezeAuthority?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isInitialized?: InputMaybe<Scalars['Boolean']>;
  mintAuthority?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  slot?: InputMaybe<Scalars['bigint']>;
  supply?: InputMaybe<Scalars['bigint']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "promo" */
export type Promo = {
  __typename?: 'Promo';
  burnCount: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  groupObject?: Maybe<PromoGroup>;
  id: Scalars['String'];
  maxBurn?: Maybe<Scalars['Int']>;
  maxMint?: Maybe<Scalars['Int']>;
  metadata: Scalars['String'];
  /** An object relationship */
  metadataObject?: Maybe<Metadata>;
  mint: Scalars['String'];
  mintCount: Scalars['Int'];
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt: Scalars['timestamptz'];
  owner: Scalars['String'];
  slot: Scalars['bigint'];
  writeVersion: Scalars['bigint'];
};

/** order by aggregate values of table "promo" */
export type PromoAggregateOrderBy = {
  avg?: InputMaybe<Promo_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Promo_Max_Order_By>;
  min?: InputMaybe<Promo_Min_Order_By>;
  stddev?: InputMaybe<Promo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Promo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Promo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Promo_Sum_Order_By>;
  var_pop?: InputMaybe<Promo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Promo_Var_Samp_Order_By>;
  variance?: InputMaybe<Promo_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "promo". All fields are combined with a logical 'AND'. */
export type PromoBoolExp = {
  _and?: InputMaybe<Array<PromoBoolExp>>;
  _not?: InputMaybe<PromoBoolExp>;
  _or?: InputMaybe<Array<PromoBoolExp>>;
  burnCount?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  groupObject?: InputMaybe<PromoGroupBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxBurn?: InputMaybe<IntComparisonExp>;
  maxMint?: InputMaybe<IntComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  metadataObject?: InputMaybe<MetadataBoolExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintCount?: InputMaybe<IntComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** columns and relationships of "promo_group" */
export type PromoGroup = {
  __typename?: 'PromoGroup';
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  members: Scalars['jsonb'];
  modifiedAt: Scalars['timestamptz'];
  nonce: Scalars['Int'];
  owner: Scalars['String'];
  /** An array relationship */
  promos: Array<Promo>;
  seed: Scalars['String'];
  slot: Scalars['bigint'];
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "promo_group" */
export type PromoGroupMembersArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "promo_group" */
export type PromoGroupPromosArgs = {
  distinctOn?: InputMaybe<Array<PromoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoOrderBy>>;
  where?: InputMaybe<PromoBoolExp>;
};

/** Boolean expression to filter rows from the table "promo_group". All fields are combined with a logical 'AND'. */
export type PromoGroupBoolExp = {
  _and?: InputMaybe<Array<PromoGroupBoolExp>>;
  _not?: InputMaybe<PromoGroupBoolExp>;
  _or?: InputMaybe<Array<PromoGroupBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  members?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  nonce?: InputMaybe<IntComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  promos?: InputMaybe<PromoBoolExp>;
  seed?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "promo_group". */
export type PromoGroupOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  members?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  promosAggregate?: InputMaybe<PromoAggregateOrderBy>;
  seed?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "promo_group" */
export enum PromoGroupSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Members = 'members',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  Owner = 'owner',
  /** column name */
  Seed = 'seed',
  /** column name */
  Slot = 'slot',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "promo_group" */
export type PromoGroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PromoGroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PromoGroupStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  nonce?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "promo". */
export type PromoOrderBy = {
  burnCount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  groupObject?: InputMaybe<PromoGroupOrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataObject?: InputMaybe<MetadataOrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "promo" */
export enum PromoSelectColumn {
  /** column name */
  BurnCount = 'burnCount',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MaxBurn = 'maxBurn',
  /** column name */
  MaxMint = 'maxMint',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Mint = 'mint',
  /** column name */
  MintCount = 'mintCount',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Owner = 'owner',
  /** column name */
  Slot = 'slot',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "promo" */
export type PromoStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PromoStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PromoStreamCursorValueInput = {
  burnCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  maxBurn?: InputMaybe<Scalars['Int']>;
  maxMint?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['String']>;
  mint?: InputMaybe<Scalars['String']>;
  mintCount?: InputMaybe<Scalars['Int']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "promo_transactions" */
export type PromoTransactions = {
  __typename?: 'PromoTransactions';
  authority?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['jsonb']>;
  mint?: Maybe<Scalars['String']>;
  payer?: Maybe<Scalars['String']>;
  promo?: Maybe<Scalars['String']>;
  promoGroup?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  tokenAccount?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
};


/** columns and relationships of "promo_transactions" */
export type PromoTransactionsMemoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "promo_transactions". All fields are combined with a logical 'AND'. */
export type PromoTransactionsBoolExp = {
  _and?: InputMaybe<Array<PromoTransactionsBoolExp>>;
  _not?: InputMaybe<PromoTransactionsBoolExp>;
  _or?: InputMaybe<Array<PromoTransactionsBoolExp>>;
  authority?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  promoGroup?: InputMaybe<StringComparisonExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  transactionType?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "promo_transactions". */
export type PromoTransactionsOrderBy = {
  authority?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
  promoGroup?: InputMaybe<OrderBy>;
  signature?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  transactionType?: InputMaybe<OrderBy>;
};

/** select columns of table "promo_transactions" */
export enum PromoTransactionsSelectColumn {
  /** column name */
  Authority = 'authority',
  /** column name */
  Memo = 'memo',
  /** column name */
  Mint = 'mint',
  /** column name */
  Payer = 'payer',
  /** column name */
  Promo = 'promo',
  /** column name */
  PromoGroup = 'promoGroup',
  /** column name */
  Signature = 'signature',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount',
  /** column name */
  TransactionType = 'transactionType'
}

/** Streaming cursor of the table "promo_transactions" */
export type PromoTransactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PromoTransactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PromoTransactionsStreamCursorValueInput = {
  authority?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  payer?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  promoGroup?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  transactionType?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "sign_memo" */
export type SignMemo = {
  __typename?: 'SignMemo';
  createdAt: Scalars['timestamptz'];
  memo?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  signature: Scalars['String'];
  signer: Scalars['String'];
  slot: Scalars['bigint'];
};


/** columns and relationships of "sign_memo" */
export type SignMemoMemoArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "sign_memo". All fields are combined with a logical 'AND'. */
export type SignMemoBoolExp = {
  _and?: InputMaybe<Array<SignMemoBoolExp>>;
  _not?: InputMaybe<SignMemoBoolExp>;
  _or?: InputMaybe<Array<SignMemoBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  signature?: InputMaybe<StringComparisonExp>;
  signer?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "sign_memo". */
export type SignMemoOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  signature?: InputMaybe<OrderBy>;
  signer?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
};

/** select columns of table "sign_memo" */
export enum SignMemoSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Memo = 'memo',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Payer = 'payer',
  /** column name */
  Signature = 'signature',
  /** column name */
  Signer = 'signer',
  /** column name */
  Slot = 'slot'
}

/** Streaming cursor of the table "sign_memo" */
export type SignMemoStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SignMemoStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SignMemoStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  signer?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "token_account" */
export type TokenAccount = {
  __typename?: 'TokenAccount';
  amount: Scalars['bigint'];
  closeAuthority?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  delegate?: Maybe<Scalars['String']>;
  delegatedAmount?: Maybe<Scalars['bigint']>;
  id: Scalars['String'];
  isNative?: Maybe<Scalars['bigint']>;
  mint: Scalars['String'];
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt: Scalars['timestamptz'];
  owner: Scalars['String'];
  slot: Scalars['bigint'];
  state: Scalars['String'];
  writeVersion: Scalars['bigint'];
};

/** order by aggregate values of table "token_account" */
export type TokenAccountAggregateOrderBy = {
  avg?: InputMaybe<Token_Account_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Token_Account_Max_Order_By>;
  min?: InputMaybe<Token_Account_Min_Order_By>;
  stddev?: InputMaybe<Token_Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Account_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Account_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "token_account". All fields are combined with a logical 'AND'. */
export type TokenAccountBoolExp = {
  _and?: InputMaybe<Array<TokenAccountBoolExp>>;
  _not?: InputMaybe<TokenAccountBoolExp>;
  _or?: InputMaybe<Array<TokenAccountBoolExp>>;
  amount?: InputMaybe<BigintComparisonExp>;
  closeAuthority?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  delegate?: InputMaybe<StringComparisonExp>;
  delegatedAmount?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isNative?: InputMaybe<BigintComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  state?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "token_account". */
export type TokenAccountOrderBy = {
  amount?: InputMaybe<OrderBy>;
  closeAuthority?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  delegate?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  state?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "token_account" */
export enum TokenAccountSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CloseAuthority = 'closeAuthority',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Delegate = 'delegate',
  /** column name */
  DelegatedAmount = 'delegatedAmount',
  /** column name */
  Id = 'id',
  /** column name */
  IsNative = 'isNative',
  /** column name */
  Mint = 'mint',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Owner = 'owner',
  /** column name */
  Slot = 'slot',
  /** column name */
  State = 'state',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "token_account" */
export type TokenAccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TokenAccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenAccountStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['bigint']>;
  closeAuthority?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegatedAmount?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  isNative?: InputMaybe<Scalars['bigint']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  state?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** order by avg() on columns of table "promo" */
export type Promo_Avg_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "promo" */
export type Promo_Max_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "promo" */
export type Promo_Min_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "promo" */
export type Promo_Stddev_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "promo" */
export type Promo_Stddev_Pop_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "promo" */
export type Promo_Stddev_Samp_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "promo" */
export type Promo_Sum_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "promo" */
export type Promo_Var_Pop_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "promo" */
export type Promo_Var_Samp_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "promo" */
export type Promo_Variance_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "burn_delegated_promo_token" */
  burnDelegatedPromoToken: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "burn_delegated_promo_token" using primary key columns */
  burnDelegatedPromoTokenByPk?: Maybe<BurnDelegatedPromoToken>;
  /** fetch data from the table: "delegate_promo_token" */
  delegatePromoToken: Array<DelegatePromoToken>;
  /** fetch data from the table: "delegate_promo_token" using primary key columns */
  delegatePromoTokenByPk?: Maybe<DelegatePromoToken>;
  /** fetch data from the table: "metadata" */
  metadata: Array<Metadata>;
  /** fetch data from the table: "metadata" using primary key columns */
  metadataByPk?: Maybe<Metadata>;
  /** fetch data from the table: "mint" */
  mint: Array<Mint>;
  /** fetch data from the table: "mint" using primary key columns */
  mintByPk?: Maybe<Mint>;
  /** fetch data from the table: "mint_promo_token" */
  mintPromoToken: Array<MintPromoToken>;
  /** fetch data from the table: "mint_promo_token" using primary key columns */
  mintPromoTokenByPk?: Maybe<MintPromoToken>;
  /** fetch data from the table: "promo" */
  promo: Array<Promo>;
  /** fetch data from the table: "promo" using primary key columns */
  promoByPk?: Maybe<Promo>;
  /** fetch data from the table: "promo_group" */
  promoGroup: Array<PromoGroup>;
  /** fetch data from the table: "promo_group" using primary key columns */
  promoGroupByPk?: Maybe<PromoGroup>;
  /** fetch data from the table: "promo_transactions" */
  promoTransactions: Array<PromoTransactions>;
  /** fetch data from the table: "sign_memo" */
  signMemo: Array<SignMemo>;
  /** fetch data from the table: "sign_memo" using primary key columns */
  signMemoByPk?: Maybe<SignMemo>;
  /** fetch data from the table: "token_account" */
  tokenAccount: Array<TokenAccount>;
  /** fetch data from the table: "token_account" using primary key columns */
  tokenAccountByPk?: Maybe<TokenAccount>;
};


export type Query_RootBurnDelegatedPromoTokenArgs = {
  distinctOn?: InputMaybe<Array<BurnDelegatedPromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BurnDelegatedPromoTokenOrderBy>>;
  where?: InputMaybe<BurnDelegatedPromoTokenBoolExp>;
};


export type Query_RootBurnDelegatedPromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Query_RootDelegatePromoTokenArgs = {
  distinctOn?: InputMaybe<Array<DelegatePromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DelegatePromoTokenOrderBy>>;
  where?: InputMaybe<DelegatePromoTokenBoolExp>;
};


export type Query_RootDelegatePromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Query_RootMetadataArgs = {
  distinctOn?: InputMaybe<Array<MetadataSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MetadataOrderBy>>;
  where?: InputMaybe<MetadataBoolExp>;
};


export type Query_RootMetadataByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootMintArgs = {
  distinctOn?: InputMaybe<Array<MintSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MintOrderBy>>;
  where?: InputMaybe<MintBoolExp>;
};


export type Query_RootMintByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootMintPromoTokenArgs = {
  distinctOn?: InputMaybe<Array<MintPromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MintPromoTokenOrderBy>>;
  where?: InputMaybe<MintPromoTokenBoolExp>;
};


export type Query_RootMintPromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Query_RootPromoArgs = {
  distinctOn?: InputMaybe<Array<PromoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoOrderBy>>;
  where?: InputMaybe<PromoBoolExp>;
};


export type Query_RootPromoByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootPromoGroupArgs = {
  distinctOn?: InputMaybe<Array<PromoGroupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoGroupOrderBy>>;
  where?: InputMaybe<PromoGroupBoolExp>;
};


export type Query_RootPromoGroupByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootPromoTransactionsArgs = {
  distinctOn?: InputMaybe<Array<PromoTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoTransactionsOrderBy>>;
  where?: InputMaybe<PromoTransactionsBoolExp>;
};


export type Query_RootSignMemoArgs = {
  distinctOn?: InputMaybe<Array<SignMemoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SignMemoOrderBy>>;
  where?: InputMaybe<SignMemoBoolExp>;
};


export type Query_RootSignMemoByPkArgs = {
  signature: Scalars['String'];
};


export type Query_RootTokenAccountArgs = {
  distinctOn?: InputMaybe<Array<TokenAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenAccountOrderBy>>;
  where?: InputMaybe<TokenAccountBoolExp>;
};


export type Query_RootTokenAccountByPkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "burn_delegated_promo_token" */
  burnDelegatedPromoToken: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "burn_delegated_promo_token" using primary key columns */
  burnDelegatedPromoTokenByPk?: Maybe<BurnDelegatedPromoToken>;
  /** fetch data from the table in a streaming manner: "burn_delegated_promo_token" */
  burnDelegatedPromoTokenStream: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "delegate_promo_token" */
  delegatePromoToken: Array<DelegatePromoToken>;
  /** fetch data from the table: "delegate_promo_token" using primary key columns */
  delegatePromoTokenByPk?: Maybe<DelegatePromoToken>;
  /** fetch data from the table in a streaming manner: "delegate_promo_token" */
  delegatePromoTokenStream: Array<DelegatePromoToken>;
  /** fetch data from the table: "metadata" */
  metadata: Array<Metadata>;
  /** fetch data from the table: "metadata" using primary key columns */
  metadataByPk?: Maybe<Metadata>;
  /** fetch data from the table in a streaming manner: "metadata" */
  metadataStream: Array<Metadata>;
  /** fetch data from the table: "mint" */
  mint: Array<Mint>;
  /** fetch data from the table: "mint" using primary key columns */
  mintByPk?: Maybe<Mint>;
  /** fetch data from the table: "mint_promo_token" */
  mintPromoToken: Array<MintPromoToken>;
  /** fetch data from the table: "mint_promo_token" using primary key columns */
  mintPromoTokenByPk?: Maybe<MintPromoToken>;
  /** fetch data from the table in a streaming manner: "mint_promo_token" */
  mintPromoTokenStream: Array<MintPromoToken>;
  /** fetch data from the table in a streaming manner: "mint" */
  mintStream: Array<Mint>;
  /** fetch data from the table: "promo" */
  promo: Array<Promo>;
  /** fetch data from the table: "promo" using primary key columns */
  promoByPk?: Maybe<Promo>;
  /** fetch data from the table: "promo_group" */
  promoGroup: Array<PromoGroup>;
  /** fetch data from the table: "promo_group" using primary key columns */
  promoGroupByPk?: Maybe<PromoGroup>;
  /** fetch data from the table in a streaming manner: "promo_group" */
  promoGroupStream: Array<PromoGroup>;
  /** fetch data from the table in a streaming manner: "promo" */
  promoStream: Array<Promo>;
  /** fetch data from the table: "promo_transactions" */
  promoTransactions: Array<PromoTransactions>;
  /** fetch data from the table in a streaming manner: "promo_transactions" */
  promoTransactionsStream: Array<PromoTransactions>;
  /** fetch data from the table: "sign_memo" */
  signMemo: Array<SignMemo>;
  /** fetch data from the table: "sign_memo" using primary key columns */
  signMemoByPk?: Maybe<SignMemo>;
  /** fetch data from the table in a streaming manner: "sign_memo" */
  signMemoStream: Array<SignMemo>;
  /** fetch data from the table: "token_account" */
  tokenAccount: Array<TokenAccount>;
  /** fetch data from the table: "token_account" using primary key columns */
  tokenAccountByPk?: Maybe<TokenAccount>;
  /** fetch data from the table in a streaming manner: "token_account" */
  tokenAccountStream: Array<TokenAccount>;
};


export type Subscription_RootBurnDelegatedPromoTokenArgs = {
  distinctOn?: InputMaybe<Array<BurnDelegatedPromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BurnDelegatedPromoTokenOrderBy>>;
  where?: InputMaybe<BurnDelegatedPromoTokenBoolExp>;
};


export type Subscription_RootBurnDelegatedPromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Subscription_RootBurnDelegatedPromoTokenStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<BurnDelegatedPromoTokenStreamCursorInput>>;
  where?: InputMaybe<BurnDelegatedPromoTokenBoolExp>;
};


export type Subscription_RootDelegatePromoTokenArgs = {
  distinctOn?: InputMaybe<Array<DelegatePromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DelegatePromoTokenOrderBy>>;
  where?: InputMaybe<DelegatePromoTokenBoolExp>;
};


export type Subscription_RootDelegatePromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Subscription_RootDelegatePromoTokenStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<DelegatePromoTokenStreamCursorInput>>;
  where?: InputMaybe<DelegatePromoTokenBoolExp>;
};


export type Subscription_RootMetadataArgs = {
  distinctOn?: InputMaybe<Array<MetadataSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MetadataOrderBy>>;
  where?: InputMaybe<MetadataBoolExp>;
};


export type Subscription_RootMetadataByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMetadataStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<MetadataStreamCursorInput>>;
  where?: InputMaybe<MetadataBoolExp>;
};


export type Subscription_RootMintArgs = {
  distinctOn?: InputMaybe<Array<MintSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MintOrderBy>>;
  where?: InputMaybe<MintBoolExp>;
};


export type Subscription_RootMintByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMintPromoTokenArgs = {
  distinctOn?: InputMaybe<Array<MintPromoTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MintPromoTokenOrderBy>>;
  where?: InputMaybe<MintPromoTokenBoolExp>;
};


export type Subscription_RootMintPromoTokenByPkArgs = {
  signature: Scalars['String'];
};


export type Subscription_RootMintPromoTokenStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<MintPromoTokenStreamCursorInput>>;
  where?: InputMaybe<MintPromoTokenBoolExp>;
};


export type Subscription_RootMintStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<MintStreamCursorInput>>;
  where?: InputMaybe<MintBoolExp>;
};


export type Subscription_RootPromoArgs = {
  distinctOn?: InputMaybe<Array<PromoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoOrderBy>>;
  where?: InputMaybe<PromoBoolExp>;
};


export type Subscription_RootPromoByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPromoGroupArgs = {
  distinctOn?: InputMaybe<Array<PromoGroupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoGroupOrderBy>>;
  where?: InputMaybe<PromoGroupBoolExp>;
};


export type Subscription_RootPromoGroupByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPromoGroupStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PromoGroupStreamCursorInput>>;
  where?: InputMaybe<PromoGroupBoolExp>;
};


export type Subscription_RootPromoStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PromoStreamCursorInput>>;
  where?: InputMaybe<PromoBoolExp>;
};


export type Subscription_RootPromoTransactionsArgs = {
  distinctOn?: InputMaybe<Array<PromoTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoTransactionsOrderBy>>;
  where?: InputMaybe<PromoTransactionsBoolExp>;
};


export type Subscription_RootPromoTransactionsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PromoTransactionsStreamCursorInput>>;
  where?: InputMaybe<PromoTransactionsBoolExp>;
};


export type Subscription_RootSignMemoArgs = {
  distinctOn?: InputMaybe<Array<SignMemoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SignMemoOrderBy>>;
  where?: InputMaybe<SignMemoBoolExp>;
};


export type Subscription_RootSignMemoByPkArgs = {
  signature: Scalars['String'];
};


export type Subscription_RootSignMemoStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<SignMemoStreamCursorInput>>;
  where?: InputMaybe<SignMemoBoolExp>;
};


export type Subscription_RootTokenAccountArgs = {
  distinctOn?: InputMaybe<Array<TokenAccountSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenAccountOrderBy>>;
  where?: InputMaybe<TokenAccountBoolExp>;
};


export type Subscription_RootTokenAccountByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTokenAccountStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<TokenAccountStreamCursorInput>>;
  where?: InputMaybe<TokenAccountBoolExp>;
};

/** order by avg() on columns of table "token_account" */
export type Token_Account_Avg_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "token_account" */
export type Token_Account_Max_Order_By = {
  amount?: InputMaybe<OrderBy>;
  closeAuthority?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  delegate?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  state?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "token_account" */
export type Token_Account_Min_Order_By = {
  amount?: InputMaybe<OrderBy>;
  closeAuthority?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  delegate?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  state?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "token_account" */
export type Token_Account_Stddev_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "token_account" */
export type Token_Account_Stddev_Pop_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "token_account" */
export type Token_Account_Stddev_Samp_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "token_account" */
export type Token_Account_Sum_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "token_account" */
export type Token_Account_Var_Pop_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "token_account" */
export type Token_Account_Var_Samp_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "token_account" */
export type Token_Account_Variance_Order_By = {
  amount?: InputMaybe<OrderBy>;
  delegatedAmount?: InputMaybe<OrderBy>;
  isNative?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

export type PromoQueryDocumentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PromoQueryDocumentQuery = { __typename?: 'query_root', promoByPk?: { __typename?: 'Promo', id: string, maxBurn?: number | null, maxMint?: number | null, burnCount: number } | null };

export type PromoListQueryDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type PromoListQueryDocumentQuery = { __typename?: 'query_root', promo: Array<{ __typename?: 'Promo', id: string, owner: string, maxMint?: number | null, maxBurn?: number | null, mintCount: number, burnCount: number, createdAt: any, metadataObject?: { __typename?: 'Metadata', id: string, name: string, symbol: string, uri: string, image?: any | null, description?: any | null, attributes?: any | null } | null, mintObject?: { __typename?: 'Mint', id: string, supply: any } | null }> };

export type SignMemoQueryDocumentQueryVariables = Exact<{
  memo?: InputMaybe<Scalars['jsonb']>;
}>;


export type SignMemoQueryDocumentQuery = { __typename?: 'query_root', signMemo: Array<{ __typename?: 'SignMemo', signer: string, signature: string, secret?: any | null }> };


export const PromoQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PromoQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promoByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"maxBurn"}},{"kind":"Field","name":{"kind":"Name","value":"maxMint"}},{"kind":"Field","name":{"kind":"Name","value":"burnCount"}}]}}]}}]} as unknown as DocumentNode<PromoQueryDocumentQuery, PromoQueryDocumentQueryVariables>;
export const PromoListQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PromoListQueryDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"maxMint"}},{"kind":"Field","name":{"kind":"Name","value":"maxBurn"}},{"kind":"Field","name":{"kind":"Name","value":"mintCount"}},{"kind":"Field","name":{"kind":"Name","value":"burnCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadataObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"metadataJson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"image","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"metadataJson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"description","block":false}}]},{"kind":"Field","alias":{"kind":"Name","value":"attributes"},"name":{"kind":"Name","value":"metadataJson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"attributes","block":false}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"mintObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"supply"}}]}}]}}]}}]} as unknown as DocumentNode<PromoListQueryDocumentQuery, PromoListQueryDocumentQueryVariables>;
export const SignMemoQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SignMemoQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signMemo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"secret"},"name":{"kind":"Name","value":"memo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"secret","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"signer"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}}]}}]}}]} as unknown as DocumentNode<SignMemoQueryDocumentQuery, SignMemoQueryDocumentQueryVariables>;