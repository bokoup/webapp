import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  getStoredTransaction,
  deleteStoredTransaction,
} from "~/models/savedtx.server";
import type { TransactionResponse } from "./__nav/promos.create";

export async function action({ request, params }: LoaderArgs) {
  const id = params.id;

  if (!id) {
    return json({ error: "Id required" }, 404);
  }

  switch (request.method) {
    case "GET": {
      return json({
        label: "bokoup",
        icon: "https://arweave.net/wrKmRzr2KhH92c1iyFeUqkB-AHjYlE7Md7U5rK4qA8M",
      });
    }
    case "POST": {
      const account = (await request.json()).account;
      const savedTx = await getStoredTransaction({ payer: account, id });
      if (savedTx) {
        // const delTx = await deleteStoredTransaction({ id });
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
