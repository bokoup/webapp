import { FaDiscord, FaFacebookSquare, FaTwitter, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navItems } from './navbar';

export default function Footer() {
    return (
        <footer className="bg-bokoupDark-500">
            {/* <!-- Flex Container --> */}
            <div
                className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
            >
                {/* <!-- Logo and social links container --> */}
                <div
                    className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
                >
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        <p className="text-xs">Copyright &copy; 2023, All Rights Reserved</p>
                    </div>
                    {/* <!-- Logo --> */}
                    <div>
                        <Link to="/">
                            <img src="images/logo-light.svg" className="h-12 w-12 hover:brightness-110" alt="bokoup logo" />
                        </Link>

                    </div>
                    {/* <!-- Social Links Container --> */}
                    <div className="flex justify-center space-x-4 items-center">
                        {([
                            { icon: <FaTwitter />, url: "https://twitter.com/bokoup" },
                            { icon: <FaDiscord />, url: "https://www.discord.com/" },
                            { icon: <FaFacebookSquare />, url: "https://www.facebook.com/" },
                            { icon: <FaInstagramSquare />, url: "https://www.instagram.com" },
                            { icon: <FaYoutube />, url: "https://www.youtube.com/@bokoup" }]).map(({ icon, url }) => <a key={url} href={url} className="text-white hover:text-bokoupBlue2-700">{icon}</a>)}
                    </div>
                </div>
                {/* <!-- List Container --> */}

                <div className="h-48 flex flex-col gap-3 flex-wrap text-white">
                    {navItems.map(n => <Link key={n.label} to={n.pathname} className="font-heading hover:text-bokoupBlue2-700 pr-10">{n.label}</Link>)}
                    {["About", "Careers", "Privacy Policy"].map(text => <Link key={text} to={`/${text.toLowerCase()}`} className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                </div>



                {/* <!-- Input Container --> */}
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                className="flex-1 px-4 rounded-full focus:outline-none"
                                placeholder="Updated in your inbox"
                            />
                            <Link
                                to="/"
                                className="px-6 py-2 rounded-full bg-bokoupBlue2-500 hover:brightness-90 font-semibold"
                            >
                                Go
                            </Link>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        <p className="text-xs">Copyright &copy; 2023, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
