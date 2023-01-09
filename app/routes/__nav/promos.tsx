import type { LoaderArgs } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Promo from "~/components/promo";
import QRCodeModal from "~/components/QRCodeModal";
import { getPromoItems } from "~/models/promo.server";

export async function loader({ request }: LoaderArgs) {
    return await getPromoItems();
}

export default function PromoPage() {
    const promoItems = useLoaderData<typeof loader>();
    const fetcher = useFetcher();
    const [open, setOpen] = useState(false);

    const handleClick = (promoName: string, mintId: string) => {
        let url = new URL("https://www.bokoup.dev/qrcode");
        const message = `Approve to receive ${promoName}`;
        const memo = JSON.stringify({ source: "bokoup.dev/promos" });
        url.searchParams.set("promoName", promoName);
        url.searchParams.set("text", `https://tx.api.bokoup.dev/promo/mint/${mintId}/${message}/${memo}`);
        fetcher.load(`${url.pathname}${url.search}`);
        setOpen(true);
    };

    return (
        <div className="container mx-auto p-2 lg:py-4 mb-auto">
            <h2 className="font-heading font-medium text-2xl lg:text-3xl">Promos</h2>
            <p>Collect valuable promos with your phone. Just scan the QR code to get a token and then present it when you shop to get a discount.</p>
            <div className="flex justify-around flex-wrap gap-4 pt-4">
                {promoItems.map((promoItem) => <Promo key={promoItem.id} promo={promoItem} onClick={handleClick} />)}
            </div>
            <QRCodeModal data={fetcher.data} open={open} setOpen={setOpen} />
        </div>
    );
}
