
import { Fragment } from 'react';
import { type imageSpec } from '~/utils';
import Hero from '~/components/hero';
import PromoSkeleton from "~/components/promo/skeleton";

const imageSpecs: imageSpec[] = [
    {
        width: 480,
        height: 480,
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

const heroPath = "checkout.jpg";

export default function Home() {
    return (
        <Fragment>
            <Hero imageSpecs={imageSpecs} path={heroPath} />
            {/* <!-- Featured Promos --> */}
            <div className="relative container mx-auto p-2 lg:py-4 mb-auto">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Promos</h2>
                <p>Collect valuable promos with your phone. Just scan the QR code to get a token and then present it when you shop to get a discount.</p>
                <div className="flex gap-4 overflow-x-auto pt-4">
                    {Array(5).fill(1).map((a, b) => <PromoSkeleton key={a + b} />)}
                </div>
            </div>
            {/* <!-- Featured Loyalty Programs --> */}
            <div className="relative container mx-auto p-2 lg:py-4 mb-auto">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Loyalty Programs</h2>
                <p>Joining a rewards program has never been easier. Just scan the QR code to get a token and you are joined. Show your token when you shop to earn points and get discounts.</p>
                <div className="flex gap-4 overflow-x-auto pt-4">
                    {Array(5).fill(1).map((a, b) => <PromoSkeleton key={a + b} />)}
                </div>
            </div>
        </Fragment>
    )
}