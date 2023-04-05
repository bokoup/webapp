import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import type { IPromoItem } from "~/models/promo.server";
import { purgeImgix } from "~/utils/imgx";

export default function Promos({
  promos,
  campaignsExist,
  merchantLoggedIn,
}: {
  promos: IPromoItem[];
  campaignsExist: boolean;
  merchantLoggedIn: boolean;
}) {
  return (
    <div className=" mt-4 rounded-md border p-2 shadow-sm">
      <div className="justify-between sm:flex sm:items-center">
        <h3 className="font-heading text-lg font-medium lg:text-2xl">Promos</h3>
        {merchantLoggedIn ? (
          <Link
            to={`/promos/create`}
            title={`${
              campaignsExist
                ? "Campaigns must exist to create promo"
                : "Create new promo"
            }`}
            className={`${
              !campaignsExist
                ? "disabled-link pointer-events-none bg-slate-200"
                : "bg-bokoupGreen2-400 hover:brightness-90"
            } flex flex-shrink items-center rounded-full py-3 px-3 text-center text-sm font-semibold shadow`}
          >
            <PlusIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
      <div className="justify-between sm:flex sm:items-center">
        <p>Promos are assigned to a campaign owned by a merchant.</p>
      </div>
      {promos.length > 0 ? (
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Campaign
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Issued
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Redeemed
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {promos.map((promo) => (
                    <tr key={promo.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <img
                              className="h-12 w-12 rounded-md"
                              src={promo.metadataJson.image}
                              alt=""
                              onError={() => {
                                if (promo.metadataJson.image) {
                                  purgeImgix(promo.metadataJson.image);
                                }
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {promo.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {promo.campaignName}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {promo.metadataJson.description}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{promo.promoType}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{`${promo.mintCount} / ${promo.maxMint}`}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{`${promo.burnCount} / ${promo.maxBurn}`}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {promo.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
