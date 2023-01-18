import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { type User } from "~/session.server";

export interface SignMemoItem {
  signature: string;
  signer: string;
  visitId: string;
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

export async function getSignMemo(
  visitId: User["visitId"]
): Promise<SignMemoItem | null> {
  if (!visitId) return null;

  const endpoint = get_endpoint();

  const query = graphql(`
    query SignMemoQueryDocument($memo: jsonb) {
      signMemo(where: { memo: { _contains: $memo } }) {
        visitId: memo(path: "visitId")
        signer
        signature
      }
    }
  `);

  const variables = {
    memo: {
      visitId,
    },
  };

  let data: SignMemoItem[] = (
    await request(endpoint, query, variables)
  ).signMemo.map((item) => {
    return {
      signature: item.signature,
      signer: item.signer,
      visitId: item.visitId,
    } as SignMemoItem;
  });

  return data ? data[0] : null;
}
