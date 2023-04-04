import {
  FaDiscord,
  FaFacebookSquare,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { navItems } from "./navbar";

export default function Footer() {
  return (
    <footer className="bg-bokoupDark-500">
      {/* <!-- Flex Container --> */}
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            <p className="text-xs">
              Copyright &copy; 2023, All Rights Reserved
            </p>
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Link to="/">
              <img
                src="/images/logo-light.svg"
                className="h-12 w-12 hover:brightness-110"
                alt="bokoup logo"
              />
            </Link>
          </div>
          {/* <!-- Social Links Container --> */}
          <div className="flex items-center justify-center space-x-4">
            {[
              { icon: <FaTwitter />, url: "https://twitter.com/bokoup" },
              { icon: <FaDiscord />, url: "https://www.discord.com/" },
              { icon: <FaFacebookSquare />, url: "https://www.facebook.com/" },
              { icon: <FaInstagramSquare />, url: "https://www.instagram.com" },
              { icon: <FaYoutube />, url: "https://www.youtube.com/@bokoup" },
            ].map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                className="text-white hover:text-bokoupBlue2-700"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        {/* <!-- List Container --> */}

        <div className="flex h-48 flex-col flex-wrap gap-3 text-white">
          {navItems.map((n) => (
            <Link
              key={n.label}
              to={n.pathname}
              className="pr-10 font-heading hover:text-bokoupBlue2-700"
            >
              {n.label}
            </Link>
          ))}
          {["About", "Careers", "Privacy Policy"].map((text) => (
            <Link
              key={text}
              to={`/`}
              className="font-heading hover:text-bokoupBlue2-700"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 rounded-full px-4 focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <Link
                to="/"
                className="rounded-full bg-bokoupBlue2-500 px-6 py-2 font-semibold hover:brightness-90"
              >
                Go
              </Link>
            </div>
          </form>
          <div className="hidden text-white md:block">
            <p className="text-xs">
              Copyright &copy; 2023, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
