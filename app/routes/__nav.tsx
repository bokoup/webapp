import NavBar from "~/components/navbar";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";

export default function Nav() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
