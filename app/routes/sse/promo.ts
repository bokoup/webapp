import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getPromoId } from "~/models/promo.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const promoName = url.searchParams.get("promoName");
  const campaignId = url.searchParams.get("campaignId");
  if (!promoName) {
    throw json({ error: "promoName not provided as search parameter" }, 400);
  }
  if (!campaignId) {
    throw json({ error: "campaignId not provided as search parameter" }, 400);
  }

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let promoId = await getPromoId(campaignId, promoName);
      if (promoId) {
        send({ data: promoId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
