import { type imageSpec } from "~/utils";
import Hero from "~/components/hero";
import PromoSkeleton from "~/components/promo/skeleton";
import { getPromoItems } from "~/models/promo.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import Promo from "~/components/promo";

export async function loader() {
  return await getPromoItems();
}

// TODO: use imgx client library instead
const imageSpecs: imageSpec[] = [
  {
    width: 480,
    height: 480,
    params: [
      { key: "fit", value: "crop" },
      { key: "ar", value: "1:1" },
      { key: "crop", value: "focalpoint" },
      { key: "fp-x", value: "0.35" },
      { key: "fp-y", value: "0.5" },
      { key: "blur", value: "20" },
      // { key: "blend-color", value: "60000000" }
      // { key: "fp-debug", value: "true" },
    ],
  },
  {
    width: 768,
    height: 284,
    params: [
      { key: "fit", value: "crop" },
      { key: "blur", value: "20" },
      // { key: "blend-color", value: "60000000" }
    ],
  },
  {
    width: 976,
    height: 284,
    params: [
      { key: "fit", value: "crop" },
      { key: "blur", value: "20" },
      // { key: "blend-color", value: "80000000" }
    ],
  },
  {
    width: 1440,
    height: 284,
    params: [
      { key: "fit", value: "crop" },
      { key: "blur", value: "20" },
      // { key: "blend-color", value: "80000000" }
    ],
  },
];

const heroPath = "checkout.jpg";

export default function Home() {
  const promoItems = useLoaderData<typeof loader>();

  return (
    <>
      <Outlet />
      <Hero imageSpecs={imageSpecs} path={heroPath} />
      {/* <!-- Featured Promos --> */}
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Featured Promos
        </h2>
        <p>
          Collect promos with your phone. Scan the QR code to get a token.
          Present it where you shop to get a discount.
        </p>
        <div className="flex justify-between gap-4 overflow-hidden overflow-x-auto py-4">
          {promoItems
            .filter((promoItem) => promoItem.maxMint > promoItem.mintCount)
            .map((promoItem) => (
              <Promo key={promoItem.id} promo={promoItem} />
            ))}
        </div>
      </div>
      {/* <!-- Featured Loyalty Programs --> */}
      <div className="container relative mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Featured Loyalty Programs
        </h2>
        <p>
          Joining a rewards program has never been easier. Scan the QR code to
          get a token. Show your token where you shop to earn points and get
          discounts.
        </p>
        <div className="flex gap-4 overflow-x-auto pt-4">
          {Array(5)
            .fill(1)
            .map((a, b) => (
              <PromoSkeleton key={a + b} />
            ))}
        </div>
      </div>
    </>
  );
}
