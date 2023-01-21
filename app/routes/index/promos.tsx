import { PlusIcon } from "@heroicons/react/24/solid";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { LoaderArgs } from "@remix-run/server-runtime";
import Promo from "~/components/promo";
import { getPromoItems } from "~/models/promo.server";
import { getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const promoItems = await getPromoItems();
  const { userId } = await getUserId(request);

  return { promoItems, userId };
}

export default function PromoPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
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
          <Link
            to="/promos/create"
            title={`${
              !data.userId ? "Log in to enable" : "create a new promo"
            }`}
            className={`${
              !data.userId
                ? "disabled-link pointer-events-none bg-slate-200"
                : ""
            } m-2 flex flex-shrink items-center rounded-full bg-bokoupGreen2-400 py-5 px-5 text-center text-sm font-semibold shadow hover:brightness-90`}
          >
            <PlusIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
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
