import { Outlet, useLoaderData } from "@remix-run/react";
import Promo from "~/components/promo";
import { getPromoItems } from "~/models/promo.server";

export async function loader() {
  return await getPromoItems();
}

export default function PromoPage() {
  const promoItems = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Promos
        </h2>
        <p>
          Collect valuable promos with your phone. Just scan the QR code to get
          a token and then present it when you shop to get a discount.
        </p>
        <div className="flex flex-wrap justify-around gap-4 pt-4">
          {promoItems.map((promoItem) => (
            <Promo key={promoItem.id} promo={promoItem} />
          ))}
        </div>
      </div>
    </>
  );
}
