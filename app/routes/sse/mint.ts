import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getMintPromoTxId } from "~/models/promo.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const uuid = url.searchParams.get("uuid");
  if (!uuid) {
    throw json({ error: "uuid not provided as search parameter" }, 400);
  }

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let txId = await getMintPromoTxId(uuid);
      if (txId) {
        send({ data: txId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
