import { getProxyImgSrc, purgeImgix, type imageSpec } from "~/utils/imgx";
import { LinkIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { IMerchantItem } from "~/models/merchant.server";

const merchantImageSpec: imageSpec = {
  width: 256,
  height: 256,
  params: [
    { key: "fit", value: "crop" },
    { key: "q", value: "100" },
    // { key: "blur", value: "20" },
    // { key: "blend-color", value: "60000000" }
  ],
};

export interface MerchantProps {
  merchant: IMerchantItem;
}

export default function Merchant({ merchant }: MerchantProps) {
  let src = getProxyImgSrc(merchant.metadataJson!.image!, merchantImageSpec);

  return (
    <div className="flex w-64 flex-shrink-0 flex-col items-start gap-2 rounded-md border shadow-sm shadow-slate-300">
      <div className="flex w-full items-center justify-between border-b px-2 pt-1">
        <h3 className="self-start rounded font-semibold">{merchant.name}</h3>
        <a
          href={`https://explorer.solana.com/address/${merchant.id}?cluster=devnet`}
          title="View on Explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>

      <Link to={`/merchants/${merchant.id}`} className="mx-auto">
        <img
          src={src}
          className="w-58 mx-auto h-60 rounded-md border"
          alt={merchant.name}
          onError={() => purgeImgix(src)}
        />
      </Link>
      <p className="mx-2 text-sm">{merchant.metadataJson.description}</p>
    </div>
  );
}
