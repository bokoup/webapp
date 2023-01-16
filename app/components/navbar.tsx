import { Link, useFetcher } from "@remix-run/react";
import { useState } from "react";
import { getQrCodePath } from "./QRCodeModal";

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

export const getQrCodeSignIn = (secret: string): string => {
  const message = encodeURIComponent(`Approve to sign in to bokoup.dev`);
  const memo = encodeURIComponent(JSON.stringify({ secret }));
  const title = `Scan to sign in.`;
  const description = `Scan with your phone to approve sign in transaction.`;
  let text = `solana:${`https://tx.api.bokoup.dev/signmemo/${message}/${memo}`}`;
  return getQrCodePath(text, title, description);
};

// const fetcher = useFetcher();
//   const [open, setOpen] = useState(false);
//   let secret = Math.random().toString(36).slice(2, 18);
//   console.log(secret);

//   const handleClick = () => {
//     const qrCodePath = getQrCodeSignIn(secret);
//     fetcher.load(qrCodePath);
//     setOpen(true);
//   };

export default function NavBar() {
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
          <button
            key="SignIn"
            className="m-auto rounded-full bg-bokoupGreen2-400 py-2 px-4 text-center font-semibold hover:brightness-90"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
