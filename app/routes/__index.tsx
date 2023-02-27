import NavBar from "~/components/navbar";
import { Outlet, useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";
import { getUserId } from "~/session.server";
import { type LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import Loading from "~/components/loading";

export async function loader({ request }: LoaderArgs) {
  const { userId, merchantId } = await getUserId(request);
  return json({ userId, merchantId });
}

export default function Nav() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen flex-col justify-between">
      <Loading />
      <NavBar userId={data.userId} merchantId={data.merchantId} />
      <Outlet />
      <Footer />
    </div>
  );
}
