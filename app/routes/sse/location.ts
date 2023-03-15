import { json, LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getLocationId } from "~/models/merchant.server";
import { getUserId } from "~/session.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  let { merchantId } = await getUserId(request);
  const url = new URL(request.url);
  const locationName = url.searchParams.get("locationName");
  if (!locationName) {
    throw json({ error: "locationName not provided as search parameter" }, 400);
  }

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let locationId = await getLocationId(merchantId, locationName);
      if (locationId) {
        send({ data: locationId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
