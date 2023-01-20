import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getStoredTransaction } from "~/models/savedtx.server";
import { getUserId } from "~/session.server";
import type { TransactionResponse } from "./__nav/promos.create";

export async function loader({ request, params }: LoaderArgs) {
  const id = params.id;
  const { userId } = await getUserId(request);

  if (!userId || !id) {
    return json({ error: "Payer and id required" }, 404);
  }

  switch (request.method) {
    case "GET": {
      return json({
        label: "bokoup",
        icon: "https://arweave.net/wrKmRzr2KhH92c1iyFeUqkB-AHjYlE7Md7U5rK4qA8M",
      });
    }
    case "POST": {
      const savedTx = await getStoredTransaction({ payer: userId, id });
      if (savedTx) {
        return json({
          transaction: savedTx.tx,
          message: savedTx.message,
        } as TransactionResponse);
      } else {
        return json({ error: "Saved transaction not found" });
      }
    }
    default: {
      return json({ error: "Method not supported" });
    }
  }
}
