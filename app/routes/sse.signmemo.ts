import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getSignMemo } from "~/models/signmemo.server";
import { getUserId } from "~/session.server";

// interval set to 200 to stay within 60 req per sec limit on free tier
export async function loader({ request }: LoaderArgs) {
  let { userId, visitId } = await getUserId(request);

  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let SignMemoItem = await getSignMemo(visitId);
      console.log(visitId, userId, SignMemoItem);
      if (SignMemoItem) {
        send({ data: JSON.stringify(SignMemoItem.signer) });
        clearInterval(interval);
      }
    }, 2000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
