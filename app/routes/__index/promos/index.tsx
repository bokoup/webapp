import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import Promo from "~/components/promo";
import { getPromoItems } from "~/models/promo.server";
import { getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getUserId(request);
  const promoItems = await getPromoItems();

  return { promoItems, userId };
}

export default function PromosPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-heading text-2xl font-medium lg:text-3xl">
              Promos
            </h2>
            <p>
              Collect promos with your phone. Just scan a QR code to get a token
              and then present it where you shop to get a discount.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          {data.promoItems.map((promoItem) => (
            <Promo key={promoItem.id} promo={promoItem} />
          ))}
        </div>
      </div>
    </>
  );
}
