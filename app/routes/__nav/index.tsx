
import { Fragment, useState } from 'react';
import { type imageSpec } from '~/utils';
import Hero from '~/components/hero';
import PromoSkeleton from "~/components/promo/skeleton";
import { type LoaderArgs } from '@remix-run/server-runtime';
import { getPromoItems } from '~/models/promo.server';
import { useFetcher, useLoaderData } from '@remix-run/react';
import Promo from '~/components/promo';
import QRCodeModal from '~/components/QRCodeModal';

export async function loader({ request }: LoaderArgs) {
    return await getPromoItems();
}

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
    const promoItems = useLoaderData<typeof loader>();
    const fetcher = useFetcher();
    const [open, setOpen] = useState(false);

    const handleClick = (promoName: string, mintId: string) => {
        let url = new URL("https://www.bokoup.dev/qrcode");
        const message = `Approve to receive ${promoName}`;
        const memo = JSON.stringify({ source: "bokoup.dev" });
        url.searchParams.set("promoName", promoName);
        url.searchParams.set("text", `https://tx.api.bokoup.dev/promo/mint/${mintId}/${message}/${memo}`);
        fetcher.load(`${url.pathname}${url.search}`);
        setOpen(true);
    };

    return (
        <Fragment>
            <Hero imageSpecs={imageSpecs} path={heroPath} />
            {/* <!-- Featured Promos --> */}
            <div className="mx-auto p-2 lg:py-4 mb-auto container">
                <h2 className="font-heading font-medium text-2xl lg:text-3xl">Featured Promos</h2>
                <p>Collect valuable promos with your phone. Just scan the QR code to get a token and then present it when you shop to get a discount.</p>
                <div className="overflow-x-auto flex gap-4 py-4 overflow-hidden justify-between">
                    {promoItems.map((promoItem) => <Promo key={promoItem.id} promo={promoItem} onClick={handleClick} />)}
                </div>
                <QRCodeModal data={fetcher.data} open={open} setOpen={setOpen} />
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