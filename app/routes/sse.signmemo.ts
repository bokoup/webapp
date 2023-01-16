import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { getSignMemo } from "~/models/signmemo.server";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  return eventStream(request.signal, function setup(send) {
    const interval = setInterval(async () => {
      let SignMemoItems = await getSignMemo(secret!);
      console.log(SignMemoItems);
      if (SignMemoItems) {
        send({ data: JSON.stringify(SignMemoItems[0]) });
        clearInterval(interval);
      }
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  });
}
