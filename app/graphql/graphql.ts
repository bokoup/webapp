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

/** columns and relationships of "bid_receipt" */
export type BidReceipt = {
  __typename?: 'BidReceipt';
  auctionHouse: Scalars['String'];
  bookkeeper: Scalars['String'];
  bump: Scalars['Int'];
  buyer: Scalars['String'];
  canceledAtOnChain?: Maybe<Scalars['bigint']>;
  createdAt: Scalars['timestamptz'];
  createdAtOnChain: Scalars['bigint'];
  id: Scalars['String'];
  metadata: Scalars['String'];
  /** An object relationship */
  metadataObject?: Maybe<Metadata>;
  modifiedAt: Scalars['timestamptz'];
  price: Scalars['bigint'];
  purchaseReceipt?: Maybe<Scalars['String']>;
  slot: Scalars['bigint'];
  tokenAccount?: Maybe<Scalars['String']>;
  tokenSize: Scalars['bigint'];
  tradeState: Scalars['String'];
  tradeStateBump: Scalars['Int'];
  writeVersion: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "bid_receipt". All fields are combined with a logical 'AND'. */
export type BidReceiptBoolExp = {
  _and?: InputMaybe<Array<BidReceiptBoolExp>>;
  _not?: InputMaybe<BidReceiptBoolExp>;
  _or?: InputMaybe<Array<BidReceiptBoolExp>>;
  auctionHouse?: InputMaybe<StringComparisonExp>;
  bookkeeper?: InputMaybe<StringComparisonExp>;
  bump?: InputMaybe<IntComparisonExp>;
  buyer?: InputMaybe<StringComparisonExp>;
  canceledAtOnChain?: InputMaybe<BigintComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAtOnChain?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  metadataObject?: InputMaybe<MetadataBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  price?: InputMaybe<BigintComparisonExp>;
  purchaseReceipt?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenSize?: InputMaybe<BigintComparisonExp>;
  tradeState?: InputMaybe<StringComparisonExp>;
  tradeStateBump?: InputMaybe<IntComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "bid_receipt". */
export type BidReceiptOrderBy = {
  auctionHouse?: InputMaybe<OrderBy>;
  bookkeeper?: InputMaybe<OrderBy>;
  bump?: InputMaybe<OrderBy>;
  buyer?: InputMaybe<OrderBy>;
  canceledAtOnChain?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdAtOnChain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataObject?: InputMaybe<MetadataOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  purchaseReceipt?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenSize?: InputMaybe<OrderBy>;
  tradeState?: InputMaybe<OrderBy>;
  tradeStateBump?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "bid_receipt" */
export enum BidReceiptSelectColumn {
  /** column name */
  AuctionHouse = 'auctionHouse',
  /** column name */
  Bookkeeper = 'bookkeeper',
  /** column name */
  Bump = 'bump',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  CanceledAtOnChain = 'canceledAtOnChain',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedAtOnChain = 'createdAtOnChain',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Price = 'price',
  /** column name */
  PurchaseReceipt = 'purchaseReceipt',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount',
  /** column name */
  TokenSize = 'tokenSize',
  /** column name */
  TradeState = 'tradeState',
  /** column name */
  TradeStateBump = 'tradeStateBump',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "bid_receipt" */
export type BidReceiptStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: BidReceiptStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BidReceiptStreamCursorValueInput = {
  auctionHouse?: InputMaybe<Scalars['String']>;
  bookkeeper?: InputMaybe<Scalars['String']>;
  bump?: InputMaybe<Scalars['Int']>;
  buyer?: InputMaybe<Scalars['String']>;
  canceledAtOnChain?: InputMaybe<Scalars['bigint']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdAtOnChain?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  price?: InputMaybe<Scalars['bigint']>;
  purchaseReceipt?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  tokenSize?: InputMaybe<Scalars['bigint']>;
  tradeState?: InputMaybe<Scalars['String']>;
  tradeStateBump?: InputMaybe<Scalars['Int']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
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
  campaign: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  device: Scalars['String'];
  location: Scalars['String'];
  memo?: Maybe<Scalars['jsonb']>;
  mint: Scalars['String'];
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  platform: Scalars['String'];
  promo: Scalars['String'];
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
  campaign?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  device?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  platform?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
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
  campaign?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  device?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  platform?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
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
  Campaign = 'campaign',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Device = 'device',
  /** column name */
  Location = 'location',
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
  campaign?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  __typename?: 'Campaign';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  locations: Scalars['jsonb'];
  merchant: Scalars['String'];
  metadataJson?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  name: Scalars['String'];
  /** An array relationship */
  promos: Array<Promo>;
  slot: Scalars['bigint'];
  uri: Scalars['String'];
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "campaign" */
export type CampaignLocationsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignMetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignPromosArgs = {
  distinctOn?: InputMaybe<Array<PromoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoOrderBy>>;
  where?: InputMaybe<PromoBoolExp>;
};

/** order by aggregate values of table "campaign" */
export type CampaignAggregateOrderBy = {
  avg?: InputMaybe<Campaign_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Campaign_Max_Order_By>;
  min?: InputMaybe<Campaign_Min_Order_By>;
  stddev?: InputMaybe<Campaign_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Campaign_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Campaign_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Campaign_Sum_Order_By>;
  var_pop?: InputMaybe<Campaign_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Campaign_Var_Samp_Order_By>;
  variance?: InputMaybe<Campaign_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type CampaignBoolExp = {
  _and?: InputMaybe<Array<CampaignBoolExp>>;
  _not?: InputMaybe<CampaignBoolExp>;
  _or?: InputMaybe<Array<CampaignBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  locations?: InputMaybe<JsonbComparisonExp>;
  merchant?: InputMaybe<StringComparisonExp>;
  metadataJson?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  promos?: InputMaybe<PromoBoolExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "campaign". */
export type CampaignOrderBy = {
  active?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  locations?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  metadataJson?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  promosAggregate?: InputMaybe<PromoAggregateOrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "campaign" */
export enum CampaignSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Locations = 'locations',
  /** column name */
  Merchant = 'merchant',
  /** column name */
  MetadataJson = 'metadataJson',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Uri = 'uri',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "campaign" */
export type CampaignStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CampaignStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CampaignStreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  locations?: InputMaybe<Scalars['jsonb']>;
  merchant?: InputMaybe<Scalars['String']>;
  metadataJson?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  uri?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
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
  campaign: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  device: Scalars['String'];
  deviceOwner: Scalars['String'];
  location: Scalars['String'];
  memo?: Maybe<Scalars['jsonb']>;
  mint: Scalars['String'];
  modifiedAt: Scalars['timestamptz'];
  payer: Scalars['String'];
  promo: Scalars['String'];
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
  campaign?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  device?: InputMaybe<StringComparisonExp>;
  deviceOwner?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  promoObject?: InputMaybe<PromoBoolExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenAccountObject?: InputMaybe<TokenAccountBoolExp>;
  tokenOwner?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "delegate_promo_token". */
export type DelegatePromoTokenOrderBy = {
  campaign?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  device?: InputMaybe<OrderBy>;
  deviceOwner?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
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
  Campaign = 'campaign',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Device = 'device',
  /** column name */
  DeviceOwner = 'deviceOwner',
  /** column name */
  Location = 'location',
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
  campaign?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Scalars['String']>;
  deviceOwner?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  tokenOwner?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "device" */
export type Device = {
  __typename?: 'Device';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  location: Scalars['String'];
  /** An object relationship */
  locationObject?: Maybe<Location>;
  metadataJson?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  name: Scalars['String'];
  owner: Scalars['String'];
  slot: Scalars['bigint'];
  uri: Scalars['String'];
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "device" */
export type DeviceMetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "device" */
export type DeviceAggregate = {
  __typename?: 'DeviceAggregate';
  aggregate?: Maybe<DeviceAggregateFields>;
  nodes: Array<Device>;
};

/** aggregate fields of "device" */
export type DeviceAggregateFields = {
  __typename?: 'DeviceAggregateFields';
  avg?: Maybe<DeviceAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<DeviceMaxFields>;
  min?: Maybe<DeviceMinFields>;
  stddev?: Maybe<DeviceStddevFields>;
  stddevPop?: Maybe<DeviceStddev_PopFields>;
  stddevSamp?: Maybe<DeviceStddev_SampFields>;
  sum?: Maybe<DeviceSumFields>;
  varPop?: Maybe<DeviceVar_PopFields>;
  varSamp?: Maybe<DeviceVar_SampFields>;
  variance?: Maybe<DeviceVarianceFields>;
};


/** aggregate fields of "device" */
export type DeviceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DeviceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device" */
export type DeviceAggregateOrderBy = {
  avg?: InputMaybe<Device_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Device_Max_Order_By>;
  min?: InputMaybe<Device_Min_Order_By>;
  stddev?: InputMaybe<Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Variance_Order_By>;
};

/** aggregate avg on columns */
export type DeviceAvgFields = {
  __typename?: 'DeviceAvgFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type DeviceBoolExp = {
  _and?: InputMaybe<Array<DeviceBoolExp>>;
  _not?: InputMaybe<DeviceBoolExp>;
  _or?: InputMaybe<Array<DeviceBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  locationObject?: InputMaybe<LocationBoolExp>;
  metadataJson?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type DeviceMaxFields = {
  __typename?: 'DeviceMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  uri?: Maybe<Scalars['String']>;
  writeVersion?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type DeviceMinFields = {
  __typename?: 'DeviceMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  uri?: Maybe<Scalars['String']>;
  writeVersion?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "device". */
export type DeviceOrderBy = {
  active?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  locationObject?: InputMaybe<LocationOrderBy>;
  metadataJson?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "device" */
export enum DeviceSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MetadataJson = 'metadataJson',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Slot = 'slot',
  /** column name */
  Uri = 'uri',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** aggregate stddev on columns */
export type DeviceStddevFields = {
  __typename?: 'DeviceStddevFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type DeviceStddev_PopFields = {
  __typename?: 'DeviceStddev_popFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type DeviceStddev_SampFields = {
  __typename?: 'DeviceStddev_sampFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "device" */
export type DeviceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DeviceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DeviceStreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  metadataJson?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  uri?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type DeviceSumFields = {
  __typename?: 'DeviceSumFields';
  slot?: Maybe<Scalars['bigint']>;
  writeVersion?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type DeviceVar_PopFields = {
  __typename?: 'DeviceVar_popFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type DeviceVar_SampFields = {
  __typename?: 'DeviceVar_sampFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type DeviceVarianceFields = {
  __typename?: 'DeviceVarianceFields';
  slot?: Maybe<Scalars['Float']>;
  writeVersion?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "listing_receipt" */
export type ListingReceipt = {
  __typename?: 'ListingReceipt';
  auctionHouse: Scalars['String'];
  bookkeeper: Scalars['String'];
  bump: Scalars['Int'];
  canceledAtOnChain?: Maybe<Scalars['bigint']>;
  createdAt: Scalars['timestamptz'];
  createdAtOnChain: Scalars['bigint'];
  id: Scalars['String'];
  metadata: Scalars['String'];
  modifiedAt: Scalars['timestamptz'];
  price: Scalars['bigint'];
  purchaseReceipt?: Maybe<Scalars['String']>;
  seller: Scalars['String'];
  slot: Scalars['bigint'];
  tokenSize: Scalars['bigint'];
  tradeState: Scalars['String'];
  tradeStateBump: Scalars['Int'];
  writeVersion: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "listing_receipt". All fields are combined with a logical 'AND'. */
export type ListingReceiptBoolExp = {
  _and?: InputMaybe<Array<ListingReceiptBoolExp>>;
  _not?: InputMaybe<ListingReceiptBoolExp>;
  _or?: InputMaybe<Array<ListingReceiptBoolExp>>;
  auctionHouse?: InputMaybe<StringComparisonExp>;
  bookkeeper?: InputMaybe<StringComparisonExp>;
  bump?: InputMaybe<IntComparisonExp>;
  canceledAtOnChain?: InputMaybe<BigintComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAtOnChain?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  price?: InputMaybe<BigintComparisonExp>;
  purchaseReceipt?: InputMaybe<StringComparisonExp>;
  seller?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenSize?: InputMaybe<BigintComparisonExp>;
  tradeState?: InputMaybe<StringComparisonExp>;
  tradeStateBump?: InputMaybe<IntComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "listing_receipt". */
export type ListingReceiptOrderBy = {
  auctionHouse?: InputMaybe<OrderBy>;
  bookkeeper?: InputMaybe<OrderBy>;
  bump?: InputMaybe<OrderBy>;
  canceledAtOnChain?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdAtOnChain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  purchaseReceipt?: InputMaybe<OrderBy>;
  seller?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenSize?: InputMaybe<OrderBy>;
  tradeState?: InputMaybe<OrderBy>;
  tradeStateBump?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "listing_receipt" */
export enum ListingReceiptSelectColumn {
  /** column name */
  AuctionHouse = 'auctionHouse',
  /** column name */
  Bookkeeper = 'bookkeeper',
  /** column name */
  Bump = 'bump',
  /** column name */
  CanceledAtOnChain = 'canceledAtOnChain',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedAtOnChain = 'createdAtOnChain',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Price = 'price',
  /** column name */
  PurchaseReceipt = 'purchaseReceipt',
  /** column name */
  Seller = 'seller',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenSize = 'tokenSize',
  /** column name */
  TradeState = 'tradeState',
  /** column name */
  TradeStateBump = 'tradeStateBump',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "listing_receipt" */
export type ListingReceiptStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ListingReceiptStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ListingReceiptStreamCursorValueInput = {
  auctionHouse?: InputMaybe<Scalars['String']>;
  bookkeeper?: InputMaybe<Scalars['String']>;
  bump?: InputMaybe<Scalars['Int']>;
  canceledAtOnChain?: InputMaybe<Scalars['bigint']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdAtOnChain?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  price?: InputMaybe<Scalars['bigint']>;
  purchaseReceipt?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenSize?: InputMaybe<Scalars['bigint']>;
  tradeState?: InputMaybe<Scalars['String']>;
  tradeStateBump?: InputMaybe<Scalars['Int']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "listing_with_token" */
export type ListingWithToken = {
  __typename?: 'ListingWithToken';
  createdAtOnChain?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  price?: Maybe<Scalars['bigint']>;
  seller?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  tokenAccount?: Maybe<Scalars['String']>;
  tokenSize?: Maybe<Scalars['bigint']>;
};

/** Boolean expression to filter rows from the table "listing_with_token". All fields are combined with a logical 'AND'. */
export type ListingWithTokenBoolExp = {
  _and?: InputMaybe<Array<ListingWithTokenBoolExp>>;
  _not?: InputMaybe<ListingWithTokenBoolExp>;
  _or?: InputMaybe<Array<ListingWithTokenBoolExp>>;
  createdAtOnChain?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  price?: InputMaybe<BigintComparisonExp>;
  seller?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenSize?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "listing_with_token". */
export type ListingWithTokenOrderBy = {
  createdAtOnChain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  price?: InputMaybe<OrderBy>;
  seller?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenSize?: InputMaybe<OrderBy>;
};

/** select columns of table "listing_with_token" */
export enum ListingWithTokenSelectColumn {
  /** column name */
  CreatedAtOnChain = 'createdAtOnChain',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Mint = 'mint',
  /** column name */
  Price = 'price',
  /** column name */
  Seller = 'seller',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenAccount = 'tokenAccount',
  /** column name */
  TokenSize = 'tokenSize'
}

/** Streaming cursor of the table "listing_with_token" */
export type ListingWithTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ListingWithTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ListingWithTokenStreamCursorValueInput = {
  createdAtOnChain?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  mint?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['bigint']>;
  seller?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  tokenSize?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'Location';
  active: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devicesAggregate: DeviceAggregate;
  id: Scalars['String'];
  merchant: Scalars['String'];
  /** An object relationship */
  merchantObject?: Maybe<Merchant>;
  metadataJson?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  name: Scalars['String'];
  slot: Scalars['bigint'];
  uri: Scalars['String'];
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "location" */
export type LocationDevicesArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


/** columns and relationships of "location" */
export type LocationDevicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


/** columns and relationships of "location" */
export type LocationMetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "location" */
export type LocationAggregateOrderBy = {
  avg?: InputMaybe<Location_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Location_Max_Order_By>;
  min?: InputMaybe<Location_Min_Order_By>;
  stddev?: InputMaybe<Location_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Location_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Location_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Location_Sum_Order_By>;
  var_pop?: InputMaybe<Location_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Location_Var_Samp_Order_By>;
  variance?: InputMaybe<Location_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type LocationBoolExp = {
  _and?: InputMaybe<Array<LocationBoolExp>>;
  _not?: InputMaybe<LocationBoolExp>;
  _or?: InputMaybe<Array<LocationBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  devices?: InputMaybe<DeviceBoolExp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<StringComparisonExp>;
  merchant?: InputMaybe<StringComparisonExp>;
  merchantObject?: InputMaybe<MerchantBoolExp>;
  metadataJson?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "location". */
export type LocationOrderBy = {
  active?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  devicesAggregate?: InputMaybe<DeviceAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  merchantObject?: InputMaybe<MerchantOrderBy>;
  metadataJson?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "location" */
export enum LocationSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Merchant = 'merchant',
  /** column name */
  MetadataJson = 'metadataJson',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Uri = 'uri',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "location" */
export type LocationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: LocationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type LocationStreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  merchant?: InputMaybe<Scalars['String']>;
  metadataJson?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  uri?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "merchant" */
export type Merchant = {
  __typename?: 'Merchant';
  active: Scalars['Boolean'];
  /** An array relationship */
  campaigns: Array<Campaign>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  locations: Array<Location>;
  metadataJson?: Maybe<Scalars['jsonb']>;
  modifiedAt: Scalars['timestamptz'];
  name: Scalars['String'];
  owner: Scalars['String'];
  slot: Scalars['bigint'];
  uri: Scalars['String'];
  writeVersion: Scalars['bigint'];
};


/** columns and relationships of "merchant" */
export type MerchantCampaignsArgs = {
  distinctOn?: InputMaybe<Array<CampaignSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CampaignOrderBy>>;
  where?: InputMaybe<CampaignBoolExp>;
};


/** columns and relationships of "merchant" */
export type MerchantLocationsArgs = {
  distinctOn?: InputMaybe<Array<LocationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LocationOrderBy>>;
  where?: InputMaybe<LocationBoolExp>;
};


/** columns and relationships of "merchant" */
export type MerchantMetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "merchant". All fields are combined with a logical 'AND'. */
export type MerchantBoolExp = {
  _and?: InputMaybe<Array<MerchantBoolExp>>;
  _not?: InputMaybe<MerchantBoolExp>;
  _or?: InputMaybe<Array<MerchantBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  campaigns?: InputMaybe<CampaignBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  locations?: InputMaybe<LocationBoolExp>;
  metadataJson?: InputMaybe<JsonbComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  uri?: InputMaybe<StringComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "merchant". */
export type MerchantOrderBy = {
  active?: InputMaybe<OrderBy>;
  campaignsAggregate?: InputMaybe<CampaignAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  locationsAggregate?: InputMaybe<LocationAggregateOrderBy>;
  metadataJson?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "merchant" */
export enum MerchantSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataJson = 'metadataJson',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Slot = 'slot',
  /** column name */
  Uri = 'uri',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "merchant" */
export type MerchantStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MerchantStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MerchantStreamCursorValueInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  metadataJson?: InputMaybe<Scalars['jsonb']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  uri?: InputMaybe<Scalars['String']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
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
  /** An object relationship */
  mintObject?: Maybe<Mint>;
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
  mintObject?: InputMaybe<MintBoolExp>;
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
  mintObject?: InputMaybe<MintOrderBy>;
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
  active: Scalars['Boolean'];
  burnCount: Scalars['Int'];
  campaign: Scalars['String'];
  /** An object relationship */
  campaignObject?: Maybe<Campaign>;
  createdAt: Scalars['timestamptz'];
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
  active?: InputMaybe<BooleanComparisonExp>;
  burnCount?: InputMaybe<IntComparisonExp>;
  campaign?: InputMaybe<StringComparisonExp>;
  campaignObject?: InputMaybe<CampaignBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxBurn?: InputMaybe<IntComparisonExp>;
  maxMint?: InputMaybe<IntComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  metadataObject?: InputMaybe<MetadataBoolExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintCount?: InputMaybe<IntComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "promo". */
export type PromoOrderBy = {
  active?: InputMaybe<OrderBy>;
  burnCount?: InputMaybe<OrderBy>;
  campaign?: InputMaybe<OrderBy>;
  campaignObject?: InputMaybe<CampaignOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataObject?: InputMaybe<MetadataOrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "promo" */
export enum PromoSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  BurnCount = 'burnCount',
  /** column name */
  Campaign = 'campaign',
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
  active?: InputMaybe<Scalars['Boolean']>;
  burnCount?: InputMaybe<Scalars['Int']>;
  campaign?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  maxBurn?: InputMaybe<Scalars['Int']>;
  maxMint?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['String']>;
  mint?: InputMaybe<Scalars['String']>;
  mintCount?: InputMaybe<Scalars['Int']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  slot?: InputMaybe<Scalars['bigint']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "promo_transactions" */
export type PromoTransactions = {
  __typename?: 'PromoTransactions';
  authority?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  device?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['jsonb']>;
  mint?: Maybe<Scalars['String']>;
  /** An object relationship */
  mintObject?: Maybe<Mint>;
  modifiedAt?: Maybe<Scalars['timestamptz']>;
  payer?: Maybe<Scalars['String']>;
  promo?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  tokenAccount?: Maybe<Scalars['String']>;
  /** An object relationship */
  tokenAccountObject?: Maybe<TokenAccount>;
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
  campaign?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  device?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<JsonbComparisonExp>;
  mint?: InputMaybe<StringComparisonExp>;
  mintObject?: InputMaybe<MintBoolExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  payer?: InputMaybe<StringComparisonExp>;
  promo?: InputMaybe<StringComparisonExp>;
  signature?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenAccount?: InputMaybe<StringComparisonExp>;
  tokenAccountObject?: InputMaybe<TokenAccountBoolExp>;
  transactionType?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "promo_transactions". */
export type PromoTransactionsOrderBy = {
  authority?: InputMaybe<OrderBy>;
  campaign?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  device?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintObject?: InputMaybe<MintOrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  payer?: InputMaybe<OrderBy>;
  promo?: InputMaybe<OrderBy>;
  signature?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenAccount?: InputMaybe<OrderBy>;
  tokenAccountObject?: InputMaybe<TokenAccountOrderBy>;
  transactionType?: InputMaybe<OrderBy>;
};

/** select columns of table "promo_transactions" */
export enum PromoTransactionsSelectColumn {
  /** column name */
  Authority = 'authority',
  /** column name */
  Campaign = 'campaign',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Device = 'device',
  /** column name */
  Location = 'location',
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
  campaign?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['jsonb']>;
  mint?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  payer?: InputMaybe<Scalars['String']>;
  promo?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenAccount?: InputMaybe<Scalars['String']>;
  transactionType?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "purchase_receipt" */
export type PurchaseReceipt = {
  __typename?: 'PurchaseReceipt';
  auctionHouse: Scalars['String'];
  bookkeeper: Scalars['String'];
  bump: Scalars['Int'];
  buyer: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  createdAtOnChain: Scalars['bigint'];
  id: Scalars['String'];
  metadata: Scalars['String'];
  modifiedAt: Scalars['timestamptz'];
  price: Scalars['bigint'];
  seller: Scalars['String'];
  slot: Scalars['bigint'];
  tokenSize: Scalars['bigint'];
  writeVersion: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "purchase_receipt". All fields are combined with a logical 'AND'. */
export type PurchaseReceiptBoolExp = {
  _and?: InputMaybe<Array<PurchaseReceiptBoolExp>>;
  _not?: InputMaybe<PurchaseReceiptBoolExp>;
  _or?: InputMaybe<Array<PurchaseReceiptBoolExp>>;
  auctionHouse?: InputMaybe<StringComparisonExp>;
  bookkeeper?: InputMaybe<StringComparisonExp>;
  bump?: InputMaybe<IntComparisonExp>;
  buyer?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdAtOnChain?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<StringComparisonExp>;
  modifiedAt?: InputMaybe<TimestamptzComparisonExp>;
  price?: InputMaybe<BigintComparisonExp>;
  seller?: InputMaybe<StringComparisonExp>;
  slot?: InputMaybe<BigintComparisonExp>;
  tokenSize?: InputMaybe<BigintComparisonExp>;
  writeVersion?: InputMaybe<BigintComparisonExp>;
};

/** Ordering options when selecting data from "purchase_receipt". */
export type PurchaseReceiptOrderBy = {
  auctionHouse?: InputMaybe<OrderBy>;
  bookkeeper?: InputMaybe<OrderBy>;
  bump?: InputMaybe<OrderBy>;
  buyer?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdAtOnChain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  seller?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  tokenSize?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select columns of table "purchase_receipt" */
export enum PurchaseReceiptSelectColumn {
  /** column name */
  AuctionHouse = 'auctionHouse',
  /** column name */
  Bookkeeper = 'bookkeeper',
  /** column name */
  Bump = 'bump',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedAtOnChain = 'createdAtOnChain',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ModifiedAt = 'modifiedAt',
  /** column name */
  Price = 'price',
  /** column name */
  Seller = 'seller',
  /** column name */
  Slot = 'slot',
  /** column name */
  TokenSize = 'tokenSize',
  /** column name */
  WriteVersion = 'writeVersion'
}

/** Streaming cursor of the table "purchase_receipt" */
export type PurchaseReceiptStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PurchaseReceiptStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PurchaseReceiptStreamCursorValueInput = {
  auctionHouse?: InputMaybe<Scalars['String']>;
  bookkeeper?: InputMaybe<Scalars['String']>;
  bump?: InputMaybe<Scalars['Int']>;
  buyer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  createdAtOnChain?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  modifiedAt?: InputMaybe<Scalars['timestamptz']>;
  price?: InputMaybe<Scalars['bigint']>;
  seller?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['bigint']>;
  tokenSize?: InputMaybe<Scalars['bigint']>;
  writeVersion?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "sign_memo" */
export type SignMemo = {
  __typename?: 'SignMemo';
  createdAt: Scalars['timestamptz'];
  memo?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  merchantObject?: Maybe<Merchant>;
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
  merchantObject?: InputMaybe<MerchantBoolExp>;
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
  merchantObject?: InputMaybe<MerchantOrderBy>;
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

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

export type Device_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Device_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Device_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Device_Aggregate_Bool_Exp_Count>;
};

export type Device_Aggregate_Bool_Exp_Bool_And = {
  arguments: Device_Select_Column_Device_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DeviceBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Device_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Device_Select_Column_Device_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DeviceBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Device_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DeviceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DeviceBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "device" */
export type Device_Avg_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "device" */
export type Device_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "device" */
export type Device_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** select "device_aggregate_bool_exp_bool_and_arguments_columns" columns of table "device" */
export enum Device_Select_Column_Device_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "device_aggregate_bool_exp_bool_or_arguments_columns" columns of table "device" */
export enum Device_Select_Column_Device_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** order by stddev() on columns of table "device" */
export type Device_Stddev_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "device" */
export type Device_Stddev_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "device" */
export type Device_Stddev_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "device" */
export type Device_Sum_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "device" */
export type Device_Var_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "device" */
export type Device_Var_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "device" */
export type Device_Variance_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by avg() on columns of table "location" */
export type Location_Avg_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  merchant?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  uri?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "location" */
export type Location_Stddev_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "location" */
export type Location_Stddev_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "location" */
export type Location_Stddev_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "location" */
export type Location_Sum_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "location" */
export type Location_Var_Pop_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "location" */
export type Location_Var_Samp_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "location" */
export type Location_Variance_Order_By = {
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
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
  campaign?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  writeVersion?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "promo" */
export type Promo_Min_Order_By = {
  burnCount?: InputMaybe<OrderBy>;
  campaign?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxBurn?: InputMaybe<OrderBy>;
  maxMint?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  mint?: InputMaybe<OrderBy>;
  mintCount?: InputMaybe<OrderBy>;
  modifiedAt?: InputMaybe<OrderBy>;
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
  /** fetch data from the table: "bid_receipt" */
  bidReceipt: Array<BidReceipt>;
  /** fetch data from the table: "bid_receipt" using primary key columns */
  bidReceiptByPk?: Maybe<BidReceipt>;
  /** fetch data from the table: "burn_delegated_promo_token" */
  burnDelegatedPromoToken: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "burn_delegated_promo_token" using primary key columns */
  burnDelegatedPromoTokenByPk?: Maybe<BurnDelegatedPromoToken>;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch data from the table: "campaign" using primary key columns */
  campaignByPk?: Maybe<Campaign>;
  /** fetch data from the table: "delegate_promo_token" */
  delegatePromoToken: Array<DelegatePromoToken>;
  /** fetch data from the table: "delegate_promo_token" using primary key columns */
  delegatePromoTokenByPk?: Maybe<DelegatePromoToken>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  deviceAggregate: DeviceAggregate;
  /** fetch data from the table: "device" using primary key columns */
  deviceByPk?: Maybe<Device>;
  /** fetch data from the table: "listing_receipt" */
  listingReceipt: Array<ListingReceipt>;
  /** fetch data from the table: "listing_receipt" using primary key columns */
  listingReceiptByPk?: Maybe<ListingReceipt>;
  /** fetch data from the table: "listing_with_token" */
  listingWithToken: Array<ListingWithToken>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch data from the table: "location" using primary key columns */
  locationByPk?: Maybe<Location>;
  /** fetch data from the table: "merchant" */
  merchant: Array<Merchant>;
  /** fetch data from the table: "merchant" using primary key columns */
  merchantByPk?: Maybe<Merchant>;
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
  /** fetch data from the table: "promo_transactions" */
  promoTransactions: Array<PromoTransactions>;
  /** fetch data from the table: "purchase_receipt" */
  purchaseReceipt: Array<PurchaseReceipt>;
  /** fetch data from the table: "purchase_receipt" using primary key columns */
  purchaseReceiptByPk?: Maybe<PurchaseReceipt>;
  /** fetch data from the table: "sign_memo" */
  signMemo: Array<SignMemo>;
  /** fetch data from the table: "sign_memo" using primary key columns */
  signMemoByPk?: Maybe<SignMemo>;
  /** fetch data from the table: "token_account" */
  tokenAccount: Array<TokenAccount>;
  /** fetch data from the table: "token_account" using primary key columns */
  tokenAccountByPk?: Maybe<TokenAccount>;
};


export type Query_RootBidReceiptArgs = {
  distinctOn?: InputMaybe<Array<BidReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BidReceiptOrderBy>>;
  where?: InputMaybe<BidReceiptBoolExp>;
};


export type Query_RootBidReceiptByPkArgs = {
  id: Scalars['String'];
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


export type Query_RootCampaignArgs = {
  distinctOn?: InputMaybe<Array<CampaignSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CampaignOrderBy>>;
  where?: InputMaybe<CampaignBoolExp>;
};


export type Query_RootCampaignByPkArgs = {
  id: Scalars['String'];
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


export type Query_RootDeviceArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type Query_RootDeviceAggregateArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type Query_RootDeviceByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootListingReceiptArgs = {
  distinctOn?: InputMaybe<Array<ListingReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ListingReceiptOrderBy>>;
  where?: InputMaybe<ListingReceiptBoolExp>;
};


export type Query_RootListingReceiptByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootListingWithTokenArgs = {
  distinctOn?: InputMaybe<Array<ListingWithTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ListingWithTokenOrderBy>>;
  where?: InputMaybe<ListingWithTokenBoolExp>;
};


export type Query_RootLocationArgs = {
  distinctOn?: InputMaybe<Array<LocationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LocationOrderBy>>;
  where?: InputMaybe<LocationBoolExp>;
};


export type Query_RootLocationByPkArgs = {
  id: Scalars['String'];
};


export type Query_RootMerchantArgs = {
  distinctOn?: InputMaybe<Array<MerchantSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MerchantOrderBy>>;
  where?: InputMaybe<MerchantBoolExp>;
};


export type Query_RootMerchantByPkArgs = {
  id: Scalars['String'];
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


export type Query_RootPromoTransactionsArgs = {
  distinctOn?: InputMaybe<Array<PromoTransactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PromoTransactionsOrderBy>>;
  where?: InputMaybe<PromoTransactionsBoolExp>;
};


export type Query_RootPurchaseReceiptArgs = {
  distinctOn?: InputMaybe<Array<PurchaseReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PurchaseReceiptOrderBy>>;
  where?: InputMaybe<PurchaseReceiptBoolExp>;
};


export type Query_RootPurchaseReceiptByPkArgs = {
  id: Scalars['String'];
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
  /** fetch data from the table: "bid_receipt" */
  bidReceipt: Array<BidReceipt>;
  /** fetch data from the table: "bid_receipt" using primary key columns */
  bidReceiptByPk?: Maybe<BidReceipt>;
  /** fetch data from the table in a streaming manner: "bid_receipt" */
  bidReceiptStream: Array<BidReceipt>;
  /** fetch data from the table: "burn_delegated_promo_token" */
  burnDelegatedPromoToken: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "burn_delegated_promo_token" using primary key columns */
  burnDelegatedPromoTokenByPk?: Maybe<BurnDelegatedPromoToken>;
  /** fetch data from the table in a streaming manner: "burn_delegated_promo_token" */
  burnDelegatedPromoTokenStream: Array<BurnDelegatedPromoToken>;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch data from the table: "campaign" using primary key columns */
  campaignByPk?: Maybe<Campaign>;
  /** fetch data from the table in a streaming manner: "campaign" */
  campaignStream: Array<Campaign>;
  /** fetch data from the table: "delegate_promo_token" */
  delegatePromoToken: Array<DelegatePromoToken>;
  /** fetch data from the table: "delegate_promo_token" using primary key columns */
  delegatePromoTokenByPk?: Maybe<DelegatePromoToken>;
  /** fetch data from the table in a streaming manner: "delegate_promo_token" */
  delegatePromoTokenStream: Array<DelegatePromoToken>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  deviceAggregate: DeviceAggregate;
  /** fetch data from the table: "device" using primary key columns */
  deviceByPk?: Maybe<Device>;
  /** fetch data from the table in a streaming manner: "device" */
  deviceStream: Array<Device>;
  /** fetch data from the table: "listing_receipt" */
  listingReceipt: Array<ListingReceipt>;
  /** fetch data from the table: "listing_receipt" using primary key columns */
  listingReceiptByPk?: Maybe<ListingReceipt>;
  /** fetch data from the table in a streaming manner: "listing_receipt" */
  listingReceiptStream: Array<ListingReceipt>;
  /** fetch data from the table: "listing_with_token" */
  listingWithToken: Array<ListingWithToken>;
  /** fetch data from the table in a streaming manner: "listing_with_token" */
  listingWithTokenStream: Array<ListingWithToken>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch data from the table: "location" using primary key columns */
  locationByPk?: Maybe<Location>;
  /** fetch data from the table in a streaming manner: "location" */
  locationStream: Array<Location>;
  /** fetch data from the table: "merchant" */
  merchant: Array<Merchant>;
  /** fetch data from the table: "merchant" using primary key columns */
  merchantByPk?: Maybe<Merchant>;
  /** fetch data from the table in a streaming manner: "merchant" */
  merchantStream: Array<Merchant>;
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
  /** fetch data from the table in a streaming manner: "promo" */
  promoStream: Array<Promo>;
  /** fetch data from the table: "promo_transactions" */
  promoTransactions: Array<PromoTransactions>;
  /** fetch data from the table in a streaming manner: "promo_transactions" */
  promoTransactionsStream: Array<PromoTransactions>;
  /** fetch data from the table: "purchase_receipt" */
  purchaseReceipt: Array<PurchaseReceipt>;
  /** fetch data from the table: "purchase_receipt" using primary key columns */
  purchaseReceiptByPk?: Maybe<PurchaseReceipt>;
  /** fetch data from the table in a streaming manner: "purchase_receipt" */
  purchaseReceiptStream: Array<PurchaseReceipt>;
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


export type Subscription_RootBidReceiptArgs = {
  distinctOn?: InputMaybe<Array<BidReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BidReceiptOrderBy>>;
  where?: InputMaybe<BidReceiptBoolExp>;
};


export type Subscription_RootBidReceiptByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBidReceiptStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<BidReceiptStreamCursorInput>>;
  where?: InputMaybe<BidReceiptBoolExp>;
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


export type Subscription_RootCampaignArgs = {
  distinctOn?: InputMaybe<Array<CampaignSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CampaignOrderBy>>;
  where?: InputMaybe<CampaignBoolExp>;
};


export type Subscription_RootCampaignByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCampaignStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<CampaignStreamCursorInput>>;
  where?: InputMaybe<CampaignBoolExp>;
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


export type Subscription_RootDeviceArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type Subscription_RootDeviceAggregateArgs = {
  distinctOn?: InputMaybe<Array<DeviceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DeviceOrderBy>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type Subscription_RootDeviceByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootDeviceStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<DeviceStreamCursorInput>>;
  where?: InputMaybe<DeviceBoolExp>;
};


export type Subscription_RootListingReceiptArgs = {
  distinctOn?: InputMaybe<Array<ListingReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ListingReceiptOrderBy>>;
  where?: InputMaybe<ListingReceiptBoolExp>;
};


export type Subscription_RootListingReceiptByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootListingReceiptStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ListingReceiptStreamCursorInput>>;
  where?: InputMaybe<ListingReceiptBoolExp>;
};


export type Subscription_RootListingWithTokenArgs = {
  distinctOn?: InputMaybe<Array<ListingWithTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ListingWithTokenOrderBy>>;
  where?: InputMaybe<ListingWithTokenBoolExp>;
};


export type Subscription_RootListingWithTokenStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ListingWithTokenStreamCursorInput>>;
  where?: InputMaybe<ListingWithTokenBoolExp>;
};


export type Subscription_RootLocationArgs = {
  distinctOn?: InputMaybe<Array<LocationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LocationOrderBy>>;
  where?: InputMaybe<LocationBoolExp>;
};


export type Subscription_RootLocationByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLocationStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<LocationStreamCursorInput>>;
  where?: InputMaybe<LocationBoolExp>;
};


export type Subscription_RootMerchantArgs = {
  distinctOn?: InputMaybe<Array<MerchantSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MerchantOrderBy>>;
  where?: InputMaybe<MerchantBoolExp>;
};


export type Subscription_RootMerchantByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMerchantStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<MerchantStreamCursorInput>>;
  where?: InputMaybe<MerchantBoolExp>;
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


export type Subscription_RootPurchaseReceiptArgs = {
  distinctOn?: InputMaybe<Array<PurchaseReceiptSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PurchaseReceiptOrderBy>>;
  where?: InputMaybe<PurchaseReceiptBoolExp>;
};


export type Subscription_RootPurchaseReceiptByPkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPurchaseReceiptStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PurchaseReceiptStreamCursorInput>>;
  where?: InputMaybe<PurchaseReceiptBoolExp>;
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

export type MerchantItemQueryDocumentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MerchantItemQueryDocumentQuery = { __typename?: 'query_root', merchantByPk?: { __typename?: 'Merchant', id: string, owner: string, name: string, active: boolean, metadataJson?: any | null, locations: Array<{ __typename?: 'Location', id: string, merchant: string, name: string, active: boolean, metadataJson?: any | null, devicesAggregate: { __typename?: 'DeviceAggregate', aggregate?: { __typename?: 'DeviceAggregateFields', count: number } | null }, devices: Array<{ __typename?: 'Device', id: string, owner: string, location: string, name: string, metadataJson?: any | null, active: boolean }> }>, campaigns: Array<{ __typename?: 'Campaign', id: string, merchant: string, name: string, locations: any, active: boolean, metadataJson?: any | null }> } | null };

export type MerchantListQueryDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type MerchantListQueryDocumentQuery = { __typename?: 'query_root', merchant: Array<{ __typename?: 'Merchant', id: string, name: string, owner: string, active: boolean, metadataJson?: any | null, locations: Array<{ __typename?: 'Location', id: string, merchant: string, name: string, active: boolean, metadataJson?: any | null, devicesAggregate: { __typename?: 'DeviceAggregate', aggregate?: { __typename?: 'DeviceAggregateFields', count: number } | null }, devices: Array<{ __typename?: 'Device', id: string, owner: string, location: string, name: string, metadataJson?: any | null, active: boolean }> }>, campaigns: Array<{ __typename?: 'Campaign', id: string, merchant: string, name: string, locations: any, active: boolean, metadataJson?: any | null }> }> };

export type MerchantIdQueryDocumentQueryVariables = Exact<{
  owner: Scalars['String'];
}>;


export type MerchantIdQueryDocumentQuery = { __typename?: 'query_root', merchant: Array<{ __typename?: 'Merchant', id: string }> };

export type LocationIdQueryDocumentQueryVariables = Exact<{
  merchant: Scalars['String'];
  name: Scalars['String'];
}>;


export type LocationIdQueryDocumentQuery = { __typename?: 'query_root', location: Array<{ __typename?: 'Location', id: string }> };

export type DeviceIdQueryDocumentQueryVariables = Exact<{
  location: Scalars['String'];
  name: Scalars['String'];
}>;


export type DeviceIdQueryDocumentQuery = { __typename?: 'query_root', device: Array<{ __typename?: 'Device', id: string }> };

export type PromoQueryDocumentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PromoQueryDocumentQuery = { __typename?: 'query_root', promoByPk?: { __typename?: 'Promo', id: string, maxBurn?: number | null, maxMint?: number | null, burnCount: number } | null };

export type PromoListQueryDocumentQueryVariables = Exact<{ [key: string]: never; }>;


export type PromoListQueryDocumentQuery = { __typename?: 'query_root', promo: Array<{ __typename?: 'Promo', id: string, campaign: string, maxMint?: number | null, maxBurn?: number | null, mintCount: number, burnCount: number, createdAt: any, metadataObject?: { __typename?: 'Metadata', id: string, name: string, symbol: string, uri: string, metadataJson?: any | null } | null, mintObject?: { __typename?: 'Mint', id: string, supply: any } | null }> };

export type SignMemoQueryDocumentQueryVariables = Exact<{
  memo?: InputMaybe<Scalars['jsonb']>;
}>;


export type SignMemoQueryDocumentQuery = { __typename?: 'query_root', signMemo: Array<{ __typename?: 'SignMemo', signer: string, signature: string, visitId?: any | null, merchantObject?: { __typename?: 'Merchant', id: string } | null }> };


export const MerchantItemQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantItemQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"devicesAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantItemQueryDocumentQuery, MerchantItemQueryDocumentQueryVariables>;
export const MerchantListQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantListQueryDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"devicesAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantListQueryDocumentQuery, MerchantListQueryDocumentQueryVariables>;
export const MerchantIdQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantIdQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MerchantIdQueryDocumentQuery, MerchantIdQueryDocumentQueryVariables>;
export const LocationIdQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LocationIdQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchant"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"merchant"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchant"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LocationIdQueryDocumentQuery, LocationIdQueryDocumentQueryVariables>;
export const DeviceIdQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeviceIdQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeviceIdQueryDocumentQuery, DeviceIdQueryDocumentQueryVariables>;
export const PromoQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PromoQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promoByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"maxBurn"}},{"kind":"Field","name":{"kind":"Name","value":"maxMint"}},{"kind":"Field","name":{"kind":"Name","value":"burnCount"}}]}}]}}]} as unknown as DocumentNode<PromoQueryDocumentQuery, PromoQueryDocumentQueryVariables>;
export const PromoListQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PromoListQueryDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"campaign"}},{"kind":"Field","name":{"kind":"Name","value":"maxMint"}},{"kind":"Field","name":{"kind":"Name","value":"maxBurn"}},{"kind":"Field","name":{"kind":"Name","value":"mintCount"}},{"kind":"Field","name":{"kind":"Name","value":"burnCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"metadataObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"metadataJson"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mintObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"supply"}}]}}]}}]}}]} as unknown as DocumentNode<PromoListQueryDocumentQuery, PromoListQueryDocumentQueryVariables>;
export const SignMemoQueryDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SignMemoQueryDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signMemo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"memo"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"visitId"},"name":{"kind":"Name","value":"memo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"visitId","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"signer"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"merchantObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SignMemoQueryDocumentQuery, SignMemoQueryDocumentQueryVariables>;