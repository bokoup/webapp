import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { TransactionResponse } from "~/components/form";
import {
  getStoredTransaction,
  deleteStoredTransaction,
} from "~/models/savedtx.server";

export async function loader({ params }: LoaderArgs) {
  const id = params.id;

  if (!id) {
    return json({ error: "id required" }, 404);
  }

  return json({
    label: "bokoup",
    icon: "https://arweave.net/wrKmRzr2KhH92c1iyFeUqkB-AHjYlE7Md7U5rK4qA8M",
  });
}

export async function action({ request, params }: LoaderArgs) {
  const id = params.id;

  if (!id) {
    return json({ error: "id required" }, 404);
  }

  switch (request.method) {
    case "POST": {
      const account = (await request.json()).account;
      if (!account) {
        return json({ error: "account must be included in body" }, 404);
      }

      const savedTx = await getStoredTransaction({ payer: account, id });
      if (savedTx) {
        await deleteStoredTransaction({ id });
        return json({
          transaction: savedTx.tx,
          message: savedTx.message,
        } as TransactionResponse);
      } else {
        return json({ error: "Saved transaction not found" }, 404);
      }
    }
    default: {
      return json({ error: "Method not supported" }, 405);
    }
  }
}
