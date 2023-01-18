import NavBar from "~/components/navbar";
import { Outlet, useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";
import { getUserId } from "~/session.server";
import { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getUserId(request);
  console.log(userId);
  return json({ userId });
}

export default function Nav() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen flex-col justify-between">
      <NavBar userId={data.userId} />
      <Outlet />
      <Footer />
    </div>
  );
}
