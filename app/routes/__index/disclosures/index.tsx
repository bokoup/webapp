import { json } from "react-router";
import { MetaFunction } from "@remix-run/server-runtime";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader() {
  const disclosures = [
    {
      disclosure: "Clover App Privacy Policy",
      effectiveDate: "2023-04-10",
      to: "/disclosures/clover-app-privacy-policy",
    },
    {
      disclosure: "Clover App License Agreement",
      effectiveDate: "2023-04-10",
      to: "clover-app-license-agreement",
    },
  ];
  return json({ disclosures });
}

export const meta: MetaFunction = () => ({
  title: "Disclosures",
  description:
    "Disclosures, privacy policy, terms of service, end user license agreements, and other legal information.",
});

export default function Disclosures() {
  const { disclosures } = useLoaderData();
  return (
    <div className="container mx-auto mb-auto p-2 lg:py-4">
      <div className="flex justify-between">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Disclosures
        </h2>
      </div>
      <div className="w-full max-w-3xl px-4 pt-4">
        <table className="mb-6 w-full table-auto">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Document</th>
              <th className="border border-gray-400 px-4 py-2">
                Effective Date
              </th>
            </tr>
          </thead>
          <tbody>
            {disclosures.map(
              ({ disclosure, effectiveDate, to }: Record<any, string>) => (
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    <Link
                      to={to}
                      className="font-heading text-bokoupBlue2-700 hover:underline"
                    >
                      {disclosure}
                    </Link>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {effectiveDate}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
