import { request } from "graphql-request";
import { graphql } from "~/graphql/gql";
import { type User } from "~/session.server";
import { API_DATA } from "~/models/urls";

export interface SignMemoItem {
  signature: string;
  signer: string;
  visitId: string;
}

export async function getSignMemo(
  visitId: User["visitId"]
): Promise<SignMemoItem | null> {
  if (!visitId) return null;

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
    await request(API_DATA!, query, variables)
  ).signMemo.map((item) => {
    return {
      signature: item.signature,
      signer: item.signer,
      visitId: item.visitId,
    } as SignMemoItem;
  });

  return data ? data[0] : null;
}
