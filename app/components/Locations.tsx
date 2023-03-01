import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { ILocationItem } from "~/models/merchant.server";

export default function Locations({
  locations,
}: {
  locations: ILocationItem[];
}) {
  return (
    <div className="">
      <h3 className="font-heading text-lg font-medium lg:text-2xl">
        Locations
      </h3>
      <div className="justify-between sm:flex sm:items-center">
        <p>These are the merchant's locations.</p>
        <Link
          to="/locations/create"
          title={`${false ? "Log in to enable" : "Create a new location"}`}
          className={`${
            false ? "disabled-link pointer-events-none bg-slate-200" : ""
          } flex flex-shrink items-center rounded-full bg-bokoupGreen2-400 py-3 px-3 text-center text-sm font-semibold shadow hover:brightness-90`}
        >
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
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
                    Address
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {locations.map((location) => (
                  <tr key={location.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-md"
                            src={location.metadataJson.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {location.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">
                        {location.metadataJson.address}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {location.deviceCount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {location.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
