import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getDeviceId } from "~/models/merchant.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const location = url.searchParams.get("location");
  const name = url.searchParams.get("name");

  if (!location) {
    throw json({ error: "location not provided as search parameter" }, 400);
  }

  if (!name) {
    throw json({ error: "name not provided as search parameter" }, 400);
  }

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let deviceId = await getDeviceId(location, name);
      if (deviceId) {
        send({ data: deviceId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
