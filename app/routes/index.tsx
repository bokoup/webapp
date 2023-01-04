import { FaDiscord, FaFacebookSquare, FaTwitter, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from "@remix-run/react";
import { imgixSrc, imageSpec } from "~/utils";
import { FC } from 'react';

interface Social {
    icon: FC
    url: string
}


export default function Bokoup() {
    const heroPath = "checkout.jpg";

    const imageSizes = `
    (max-width: 480px) 480px
    768px
    `;

    const imageSpecs: imageSpec[] = [
        {
            width: 480,
            height: null,
            params: [
                { key: "fit", value: "crop" },
                { key: "ar", value: "1:1" },
                { key: "crop", value: "focalpoint" },
                { key: "fp-x", value: "0.35" },
                { key: "fp-y", value: "0.5" },
                { key: "blur", value: "20" },
                // { key: "blend-color", value: "60000000" }
                // { key: "fp-debug", value: "true" },
            ],

        },
        {
            width: 768,
            height: 284,
            params: [
                { key: "fit", value: "crop" },
                { key: "blur", value: "20" },
                // { key: "blend-color", value: "60000000" }
            ]
        },
        {
            width: 976,
            height: 284,
            params: [
                { key: "fit", value: "crop" },
                { key: "blur", value: "20" },
                // { key: "blend-color", value: "80000000" }
            ]
        },
        {
            width: 1440,
            height: 284,
            params: [
                { key: "fit", value: "crop" },
                { key: "blur", value: "20" },
                // { key: "blend-color", value: "80000000" }
            ]
        },
    ];

    return (
        <div className="flex flex-col h-screen justify-between">
            {/* <!-- Navbar --> */}
            <nav className="relative container mx-auto p-2 lg:py-4">
                {/* <!-- Flex container --> */}
                <div className="flex items-center justify-between">
                    {/* <!-- Logo --> */}
                    <div className="flex items-center">
                        <img src="./images/logo-light.svg" alt="" className="w-6 lg:w-10" />
                        <h2 className="hidden lg:block text-3xl font-logo font-semibold tracking-tight">bokoup</h2>
                    </div>
                    <div className="hidden space-x-6 lg:flex items-center">
                        {["Promos", "Loyalty", "Merchants", "Trade", "Pricing", "FAQ"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                        <Link to="/" className="m-auto py-2 px-4 bg-bokoupGreen2-400 rounded-full text-center font-semibold hover:brightness-90">Sign In</Link>
                    </div>
                </div>
            </nav>
            {/* <!-- Hero --> */}
            <div className="relative">
                <picture>
                    <source media="(max-width: 480px)" srcSet={imgixSrc(heroPath, imageSpecs[0])} />
                    <source media="(max-width: 768px)" srcSet={imgixSrc(heroPath, imageSpecs[1])} />
                    <source media="(max-width: 976px)" srcSet={imgixSrc(heroPath, imageSpecs[2])} />
                    <source media="(max-width: 1440px)" srcSet={imgixSrc(heroPath, imageSpecs[3])} />
                    <img className="object-cover w-full md:max-h-72 lg:max-h-96 brightness-75"
                        alt={"Woman paying with a mobile device at a coffee shop"}
                        src={imgixSrc(heroPath, imageSpecs[3])}
                    />
                </picture>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center gap-7 items-center">
                    <h2 className="font-heading text-4xl md:text-[2.6rem] lg:text-6xl xl:text-7xl text-center text-transparent
                    bg-clip-text bg-gradient-to-l from-bokoupBlue2-500 to-bokoupGreen2-500 font-semibold">Collect Digital Promos With Your Phone</h2>
                    <Link
                        to="/"
                        className="font-semibold px-10 py-3 bg-bokoupGreen2-400 rounded-full text-center hover:brightness-90"
                    >Get Promos</Link>

                </div>
            </div>
            {/* <!-- Featured Promos --> */}
            <div className="relative container mx-auto p-2 lg:py-4 mb-auto">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Promos</h2>
                <p>Check out these valuable promos you can collect with your phone. Just scan the QR code to get a token and then present it when you shop to get a discount.</p>
                <div className="flex gap-4 overflow-x-auto pt-4">
                    {Array(5).fill(1).map((a, b) => <FeaturedOfferSkeleton key={a + b} />)}
                </div>
            </div>
            {/* <!-- Featured Loyalty Programs --> */}
            <div className="relative container mx-auto p-2 lg:py-4 mb-auto">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Loyalty Programs</h2>
                <p>Joining a rewards program has never been easier. Just scan the QR code to get a token and you are joined! Show your token when you shop to earn points and get discounts.</p>
                <div className="flex gap-4 overflow-x-auto pt-4">
                    {Array(5).fill(1).map((a, b) => <FeaturedOfferSkeleton key={a + b} />)}
                </div>
            </div>

            {/* <!-- Footer --> */}
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
                            <p className="text-xs">Copyright &copy; 2022, All Rights Reserved</p>
                        </div>
                        {/* <!-- Logo --> */}
                        <div>
                            <Link to="/">
                                <img src="images/logo-light.svg" className="h-12" alt="" />
                            </Link>

                        </div>
                        {/* <!-- Social Links Container --> */}
                        <div className="flex justify-center space-x-4 items-center">
                            {[
                                { icon: <FaTwitter />, url: "https://twitter.com/bokoup" },
                                { icon: <FaDiscord />, url: "https://www.discord.com/" },
                                { icon: <FaFacebookSquare />, url: "https://www.facebook.com/" },
                                { icon: <FaInstagramSquare />, url: "https://www.instagram.com" },
                                { icon: <FaYoutube />, url: "https://www.youtube.com/@bokoup" }].map(social => <a href={social.url} className="text-white hover:text-bokoupBlue2-700">{social.icon}</a>)}
                        </div>
                    </div>
                    {/* <!-- List Container --> */}
                    <div className="flex justify-around space-x-16">
                        <div className="flex flex-col space-y-3 text-white">
                            {["Promos", "Loyalty", "Merchants", "Pricing", "Trade"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            {["About", "Careers", "Privacy Policy"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                        </div>
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
                                    className="px-6 py-2 text-white rounded-full bg-bokoupBlue2-500 hover:brightness-90 font-semibold"
                                >
                                    Go
                                </Link>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">
                            <p className="text-xs">Copyright &copy; 2022, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export function FeaturedOfferSkeleton() {
    return (
        <div className="h-80 w-72 border rounded-md flex flex-col items-center pt-6 gap-2">
            <div className="ml-4 h-4 w-32 bg-slate-100 rounded self-start" />
            <div className="bg-slate-100 h-48 w-64 rounded-md mb-2" />
            {Array(3).fill(1).map((a, b) => <div key={a + b} className="h-2 w-56 bg-slate-100 rounded" />)}
        </div>
    )
}