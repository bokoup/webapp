import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";

export interface SignMemoItem {
  signature: string;
  signer: string;
  secret: string;
}

function get_endpoint() {
  let endpoint: string;

  if (process.env.NODE_ENV === "production" || true) {
    endpoint = process.env.GRAPHQL_API_DEVNET || "";
  } else {
    endpoint = process.env.GRAPHQL_API_LOCALNET || "";
  }
  return endpoint;
}

export async function getSignMemo(secret: string): Promise<SignMemoItem[]> {
  const endpoint = get_endpoint();

  const query = graphql(`
    query SignMemoQueryDocument($memo: jsonb) {
      signMemo(where: { memo: { _contains: $memo } }) {
        secret: memo(path: "secret")
        signer
        signature
      }
    }
  `);

  const variables = {
    memo: {
      secret,
    },
  };

  let data: SignMemoItem[] = (
    await request(endpoint, query, variables)
  ).signMemo.map((item) => {
    return {
      signature: item.signature,
      signer: item.signer,
      secret: item.secret,
    } as SignMemoItem;
  });

  return data;
}
