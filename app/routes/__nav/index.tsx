import { Fragment, useState } from "react";
import { type imageSpec } from "~/utils";
import Hero from "~/components/hero";
import PromoSkeleton from "~/components/promo/skeleton";
import { type LoaderArgs } from "@remix-run/server-runtime";
import { getPromoItems } from "~/models/promo.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import Promo from "~/components/promo";
import QRCodeModal from "~/components/QRCodeModal";
import { getQrCodePathPromoMint } from "./promos";

export async function loader({ request }: LoaderArgs) {
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
  const fetcher = useFetcher();
  const [open, setOpen] = useState(false);

  const handleClick = (promoName: string, mintId: string) => {
    const qrCodePath = getQrCodePathPromoMint(promoName, mintId, "bokoup.dev");
    fetcher.load(qrCodePath);
    setOpen(true);
  };

  return (
    <Fragment>
      <Hero imageSpecs={imageSpecs} path={heroPath} />
      {/* <!-- Featured Promos --> */}
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Featured Promos
        </h2>
        <p>
          Collect promos with your phone. Scan the QR code to get a token.
          Present it when you shop to get a discount.
        </p>
        <div className="flex justify-between gap-4 overflow-hidden overflow-x-auto py-4">
          {promoItems
            .filter((promoItem) => promoItem.maxMint > promoItem.mintCount)
            .map((promoItem) => (
              <Promo key={promoItem.id} promo={promoItem} />
            ))}
        </div>
        {/* <QRCodeModal data={fetcher.data} open={open} setOpen={setOpen} /> */}
      </div>
      {/* <!-- Featured Loyalty Programs --> */}
      <div className="container relative mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          Featured Loyalty Programs
        </h2>
        <p>
          Joining a rewards program has never been easier. Scan the QR code to
          get a token. Show your token when you shop to earn points and get
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
    </Fragment>
  );
}
