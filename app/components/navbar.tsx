
import { Link } from "@remix-run/react";

interface NavItem {
    label: string
    pathname: string
}

export default function NavBar() {
    const navItems: NavItem[] = [
        { label: "Promos", pathname: "/promos" },
        { label: "Loyalty", pathname: "/loyalty" },
        { label: "Merchants", pathname: "/merchants" },
        { label: "Trade", pathname: "/trade" },
        { label: "Pricing", pathname: "/pricing" },
        { label: "FAQ", pathname: "/FAQ" }
    ]
    return (
        <nav className="relative container mx-auto p-2 lg:py-4">
            {/* <!-- Flex container --> */}
            <div className="flex items-center justify-between">
                {/* <!-- Logo --> */}
                <Link to="/" className="flex items-center hover:brightness-110 hover:text-bokoupDark-400">
                    <img src="./images/logo-light.svg" alt="bokoup logo" className="w-6 h-6 lg:w-10 lg:h-10" />
                    <h2 className="hidden lg:block text-3xl font-logo font-semibold tracking-tight">bokoup</h2>
                </Link>
                <div className="hidden space-x-6 lg:flex items-center">
                    {navItems.map(({ label, pathname }) => <Link key={label} to={pathname} className="font-heading hover:text-bokoupDark-400">{label}</Link>)}
                    <Link key="SignIn" to="/" className="m-auto py-2 px-4 bg-bokoupGreen2-400 rounded-full text-center font-semibold hover:brightness-90">Sign In</Link>
                </div>
            </div>
        </nav>
    )
}