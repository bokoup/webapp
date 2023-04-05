import { getProxyImgSrc, type imageSpec } from "~/utils/imgx";
import { type IPromoItem } from "~/models/promo.server";
import { LinkIcon, QrCodeIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "@remix-run/react";

const promoImageSpec: imageSpec = {
  width: 512,
  height: 512,
  params: [
    { key: "fit", value: "crop" },
    { key: "q", value: "100" },
    // { key: "blur", value: "20" },
    // { key: "blend-color", value: "60000000" }
  ],
};

const merchantImageSpec: imageSpec = {
  width: 72,
  height: 72,
  params: [
    { key: "fit", value: "crop" },
    { key: "q", value: "100" },
    // { key: "blur", value: "20" },
    // { key: "blend-color", value: "60000000" }
  ],
};

interface PromoProps {
  promo: IPromoItem;
  nodeEnv: string;
}

export default function Promo({ promo, nodeEnv }: PromoProps) {
  // const src = promo.metadataJson!.image!;
  const srcPromo = getProxyImgSrc(promo.metadataJson!.image!, promoImageSpec);
  const srcMerchant = getProxyImgSrc(
    promo.merchantMetadataJson!.image!,
    merchantImageSpec
  );
  const location = useLocation();
  let searchParams = new URLSearchParams([
    ["promoName", promo.name],
    ["mintId", promo.mintId],
    ["campaignId", promo.campaignId],
    ["redirectTo", location.pathname],
  ]);
  if (promo.platformDevice) {
    searchParams.append("deviceId", promo.platformDevice.id);
    searchParams.append("deviceOwner", promo.platformDevice.owner);
    searchParams.append("locationId", promo.platformDevice.location);
  }

  const explorerCluster =
    nodeEnv == "production"
      ? "devnet"
      : "custom&customUrl=http%3A%2F%2Flocalhost%3A8899";

  return (
    <div className="flex w-64 flex-shrink-0 flex-col items-start gap-2 rounded-md border shadow-sm shadow-slate-300">
      <Link
        className="flex w-full items-center border-b px-2 py-1"
        to={`/merchants/${promo.merchantId}`}
      >
        <img
          src={srcMerchant}
          className="h-6 w-6 rounded-md border"
          alt={promo.name}
        />
        <div className="px-2 text-xs font-semibold">
          {promo.merchantMetadataJson.name}
        </div>
      </Link>
      <div className="flex w-full items-center justify-between px-2">
        <h3 className="rounde self-start font-semibold">{promo.name}</h3>
        <a
          href={`https://explorer.solana.com/address/${promo.mintId}?cluster=${explorerCluster}`}
          title="View on Explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
      <img
        src={srcPromo}
        className="w-58 mx-auto h-60 rounded-md border"
        alt={promo.name}
      />
      <p className="mx-2 text-xs">{promo.metadataJson.description}</p>
      <div className="flex w-full flex-grow flex-col border-b">
        <div className="flex justify-between px-2">
          <span className="w-1/2 text-xs font-semibold">Issued:</span>
          <span className="w-1/2 text-right text-xs font-semibold">
            {promo.mintCount}
            {promo.maxMint ? ` / ${promo.maxMint}` : ""}
          </span>
        </div>
        <div className="flex justify-between px-2 pb-2">
          <span className="w-1/2 text-xs font-semibold">Redeemed:</span>
          <span className="w-1/2 text-right text-xs font-semibold">
            {promo.burnCount}
            {promo.maxBurn ? ` / ${promo.maxBurn}` : ""}
          </span>
        </div>
      </div>

      <Link
        title={
          promo.platformDevice
            ? "Get Promo"
            : "Promo not available on this device"
        }
        to={`/promos/mint?${searchParams}`}
        className={`${
          promo.mintCount == promo.maxMint || promo.platformDevice == null
            ? "disabled-link pointer-events-none bg-slate-200"
            : "bg-bokoupGreen2-400 hover:brightness-90"
        } m-auto mb-2 flex items-center rounded-full  py-2 px-8 text-center text-sm font-semibold`}
      >
        <QrCodeIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
