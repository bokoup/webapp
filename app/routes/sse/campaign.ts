import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getCampaignId } from "~/models/merchant.server";
import { getUserId } from "~/session.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  let { merchantId } = await getUserId(request);
  const url = new URL(request.url);
  const campaignName = url.searchParams.get("campaignName");
  if (!campaignName) {
    throw json({ error: "campaignName not provided as search parameter" }, 400);
  }

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let campaignId = await getCampaignId(merchantId, campaignName);
      if (campaignId) {
        send({ data: campaignId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
