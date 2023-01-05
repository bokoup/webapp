import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PromoSkeleton from "~/components/promo/skeleton";

import { getPromoListItems } from "~/models/promo.server";

export async function loader({ request }: LoaderArgs) {
    const promoListItems = await getPromoListItems();
    return json({ promoListItems });
}

export default function PromoPage() {
    const data = useLoaderData<typeof loader>();
    console.log(data);

    return (
        <div className="container mx-auto p-2 lg:py-4 mb-auto">
            <h2 className="font-heading font-medium text-2xl lg:text-3xl">Promos</h2>
            <p>Collect valuable promos with your phone. Just scan the QR code to get a token and then present it when you shop to get a discount.</p>
            <div className="flex gap-4 overflow-x-auto pt-4">
                {Array(5).fill(1).map((a, b) => <PromoSkeleton key={a + b} />)}
            </div>
        </div>
    );
}
