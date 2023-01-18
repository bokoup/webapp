import { Link, useLocation } from "@remix-run/react";
import { safeRedirect } from "~/utils";

export interface NavItem {
  label: string;
  pathname: string;
}

export const navItems: NavItem[] = [
  { label: "Promos", pathname: "/promos" },
  { label: "Loyalty", pathname: "/loyalty" },
  { label: "Merchants", pathname: "/merchants" },
  { label: "Trade", pathname: "/trade" },
  { label: "Pricing", pathname: "/pricing" },
  { label: "FAQ", pathname: "/FAQ" },
];

export default function NavBar({ userId }: { userId: string | undefined }) {
  const location = useLocation();
  const searchParams = new URLSearchParams([
    ["redirectTo", safeRedirect(location.pathname)],
  ]);
  return (
    <nav className="container relative mx-auto p-2 lg:py-4">
      {/* <!-- Flex container --> */}
      <div className="flex items-center justify-between">
        {/* <!-- Logo --> */}
        <Link
          to="/"
          className="flex items-center hover:text-bokoupDark-400 hover:brightness-110"
        >
          <img
            src="/images/logo-light.svg"
            alt="bokoup logo"
            className="h-6 w-6 lg:h-10 lg:w-10"
          />
          <h2 className="hidden font-logo text-3xl font-semibold tracking-tight lg:block">
            bokoup
          </h2>
        </Link>
        <div className="hidden items-center space-x-6 lg:flex">
          {navItems.map(({ label, pathname }) => (
            <Link
              key={label}
              to={pathname}
              className="font-heading hover:text-bokoupDark-400"
            >
              {label}
            </Link>
          ))}
          {!userId ? (
            <Link
              to={`/login?${searchParams}`}
              className="m-auto rounded-full bg-bokoupGreen2-400 py-2 px-6 text-center font-semibold hover:brightness-90"
            >
              Log In
            </Link>
          ) : (
            <Link
              to={`/logout`}
              className="m-auto rounded-full bg-bokoupBlue2-400 py-2 px-6 text-center font-semibold hover:brightness-90"
            >
              Log Out
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
