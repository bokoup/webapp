import { type imageSpec } from "~/utils";
import { getProxyImgSrc } from "~/utils/imgx";
import { type PromoItem } from "~/models/promo.server";
import { QrCodeIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "@remix-run/react";

const promoImageSpec: imageSpec = {
  width: 160,
  height: 160,
  params: [
    { key: "fit", value: "crop" },
    // { key: "blur", value: "20" },
    // { key: "blend-color", value: "60000000" }
  ],
};

interface PromoProps {
  promo: PromoItem;
}

export default function Promo({ promo }: PromoProps) {
  const src = getProxyImgSrc(promo.image, promoImageSpec);
  const location = useLocation();
  const searchParams = new URLSearchParams([
    ["promoName", promo.name],
    ["redirectTo", location.pathname],
  ]);

  return (
    <div className="flex w-64 flex-shrink-0 flex-col items-start gap-2 rounded-md border p-2 shadow-sm shadow-slate-300">
      <h3 className="self-start rounded font-semibold">{promo.name}</h3>
      <img
        src={src}
        className="mx-auto h-60 w-60 rounded-md border"
        alt={promo.name}
      />
      <p className="text-xs">{promo.description}</p>
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <span className="w-1/2 text-xs font-semibold">Issued:</span>
          <span className="w-1/2 text-right text-xs font-semibold">
            {promo.mintCount} / {promo.maxMint}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="w-1/2 text-xs font-semibold">Redeemed:</span>
          <span className="w-1/2 text-right text-xs font-semibold">
            {promo.burnCount} / {promo.maxBurn}
          </span>
        </div>
      </div>
      <Link
        to={`/promos/${promo.mintId}/mint?${searchParams}`}
        className={`${
          promo.mintCount == promo.maxMint
            ? "disabled-link pointer-events-none bg-slate-200"
            : ""
        } m-auto flex items-center rounded-full bg-bokoupGreen2-400 py-2 px-8 text-center text-sm font-semibold hover:brightness-90`}
      >
        <QrCodeIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
