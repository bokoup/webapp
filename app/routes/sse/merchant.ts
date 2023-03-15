import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getMerchantId } from "~/models/merchant.server";
import { getUserId } from "~/session.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  let { userId } = await getUserId(request);

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let merchantId = await getMerchantId(userId);
      if (userId && merchantId) {
        send({ data: merchantId });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
