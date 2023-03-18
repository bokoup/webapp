import { PlusIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import Merchant from "~/components/Merchant";
import { getMerchantList } from "~/models/merchant.server";
import { getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const merchantList = await getMerchantList();
  const { userId, merchantId } = await getUserId(request);

  return { userId, merchantId, merchantList };
}

export default function Merchants() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-heading text-2xl font-medium lg:text-3xl">
              Merchants
            </h2>
          </div>
          <Link
            to="/merchants/create"
            title={`${
              !data.userId ? "Log in to enable" : "create a new merchant"
            }`}
            className={`${
              !data.userId || data.merchantId
                ? "disabled-link pointer-events-none bg-slate-200"
                : "bg-bokoupGreen2-400 hover:brightness-90"
            } m-2 flex flex-shrink items-center rounded-full py-5 px-5 text-center text-sm font-semibold shadow`}
          >
            <PlusIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex flex-wrap gap-4 pt-4">
            {data.merchantList.map((merchantItem) => (
              <Merchant key={merchantItem.id} merchant={merchantItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
