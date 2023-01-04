import { Fragment } from "react";
import { Link } from "@remix-run/react";
import { imgixSrc, imageSpec } from "~/utils";



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
                        {["Offers", "Merchants", "FAQ"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                        <Link to="/" className="text-white m-auto py-2 px-4 bg-bokoupGreen2-400 rounded-full text-center font-semibold hover:brightness-90">Sign In</Link>
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
                    bg-clip-text bg-gradient-to-l from-bokoupBlue2-500 to-bokoupGreen2-500 font-semibold">Get Offers Delivered to Your Phone</h2>
                    <Link
                        to="/"
                        className="text-white font-semibold px-10 py-3 bg-bokoupGreen2-400 rounded-full text-center hover:brightness-90"
                    >View Offers</Link>

                </div>
            </div>
            {/* <!-- Featured Offers --> */}
            <div className="relative container mx-auto p-2 lg:py-4 mb-auto">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Offers</h2>
                <p>This is where you will see a list of featured offers. They will be selected across all participating merchants and eventually will be tailored to the user if logged in.</p>
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
                            Copyright &copy; 2022, All Rights Reserved
                        </div>
                        {/* <!-- Logo --> */}
                        <div>
                            <img src="images/logo-light.svg" className="h-12" alt="" />
                        </div>
                        {/* <!-- Social Links Container --> */}
                        <div className="flex justify-center space-x-4 items-center">
                            {["gg-twitter", "gg-facebook", "gg-instagram", "gg-youtube",].map(text => <Link to="/" className=" text-white hover:text-bokoupBlue2-700"><i className={text} /></Link>)}
                        </div>
                    </div>
                    {/* <!-- List Container --> */}
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            {["Home", "Offers", "Merchants", "Pricing", "About"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            {["Careers", "Community", "Privacy Policy"].map(text => <Link to="/" className="font-heading hover:text-bokoupBlue2-700">{text}</Link>)}
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
                                    className="px-6 py-2 text-white rounded-full bg-bokoupGreen2-500 hover:brightness-90 font-semibold"
                                >
                                    Go
                                </Link>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">
                            Copyright &copy; 2022, All Rights Reserved
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
            <div className="h-2 w-64 bg-slate-100 rounded" />
            <div className="h-2 w-64 bg-slate-100 rounded" />
            <div className="h-2 w-64 bg-slate-100 rounded" />
        </div>
    )
}