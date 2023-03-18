import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getSignMemo } from "~/models/signmemo.server";
import { getUserId } from "~/session.server";

// interval set to 2000 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  let { visitId } = await getUserId(request);

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let signMemoItem = await getSignMemo(visitId);

      if (signMemoItem) {
        send({ data: JSON.stringify(signMemoItem) });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
