import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEventSource } from "remix-utils";

export function loader() {
  return json({ initialData: "hello" });
}

export default function Component() {
  const { initialData } = useLoaderData<typeof loader>();
  const data = useEventSource("/sse/promos") ?? initialData;
  return <div>{data}</div>;
}
