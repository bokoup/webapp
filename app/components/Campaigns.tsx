import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { ICampaignItem } from "~/models/merchant.server";

export default function Campaigns({
  campaigns,
  locationsExist,
}: {
  campaigns: ICampaignItem[];
  locationsExist: boolean;
}) {
  return (
    <div className=" mt-4 rounded-md border p-2 shadow-sm">
      <div className="justify-between sm:flex sm:items-center">
        <h3 className="font-heading text-lg font-medium lg:text-2xl">
          Campaigns
        </h3>
        <Link
          to={`/campaigns/create`}
          title={`${
            locationsExist
              ? "Location must exist to create campaign"
              : "Create new campaign"
          }`}
          className={`${
            !locationsExist
              ? "disabled-link pointer-events-none bg-slate-200"
              : "bg-bokoupGreen2-400 hover:brightness-90"
          } flex flex-shrink items-center rounded-full py-3 px-3 text-center text-sm font-semibold shadow`}
        >
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="justify-between sm:flex sm:items-center">
        <p>
          Campaigns have a unique name and include one or more locations. Promos
          can be redeemed by any device assigned to any location included in a
          campaign.
        </p>
      </div>
      {campaigns.length > 0 ? (
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Location Count
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Device Count
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Promo Count
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
                  {campaigns.map((campaign) => (
                    <tr key={campaign.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {campaign.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {campaign.metadataJson.description}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {campaign.locations ? campaign.locations.length : 0}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {campaign.locations
                            ?.map((location) => location.deviceCount)
                            .reduce((total, count) => total + count, 0)}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {campaign.promos ? campaign.promos.length : 0}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {campaign.active ? "Active" : "Inactive"}
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
