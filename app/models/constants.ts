import invariant from "tiny-invariant";

export const API_TX =
  process.env.NODE_ENV == "production"
    ? process.env.API_TX_DEVNET
    : process.env.API_TX_LOCALNET;
invariant(API_TX, "API_TX must be set");

export const API_DATA =
  process.env.NODE_ENV == "production"
    ? process.env.GRAPHQL_API_DEVNET
    : process.env.GRAPHQL_API_LOCALNET;
invariant(API_DATA, "API_DATA must be set");

export const APP_URL =
  process.env.NODE_ENV == "production"
    ? process.env.APP_URL_DEVNET
    : process.env.APP_URL_LOCALNET;
invariant(APP_URL, "APP_URL must be set");

export const PLATFORM_SIGNER_ADDRESS = process.env.PLATFORM_SIGNER_PUBLIC_KEY;
invariant(
  process.env.PLATFORM_SIGNER_PUBLIC_KEY,
  "PLATFORM_SIGNER_PUBLIC_KEY must be set"
);
