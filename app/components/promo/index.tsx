import { imageSpec } from "~/utils";
import { getProxyImgSrc } from "~/utils/imgx";
import { type PromoItem } from "~/models/promo.server";
import { QrCodeIcon } from "@heroicons/react/20/solid";

const promoImageSpec: imageSpec = {
    width: 160,
    height: 160,
    params: [
        { key: "fit", value: "crop" },
        // { key: "blur", value: "20" },
        // { key: "blend-color", value: "60000000" }
    ]
};

interface PromoProps {
    promo: PromoItem,
    onClick: CallableFunction
}

export default function Promo({ promo, onClick }: PromoProps) {
    const src = getProxyImgSrc(promo.image, promoImageSpec);

    return (
        <div className="w-64 border rounded-md flex flex-col items-start p-2 gap-2 shadow-sm shadow-slate-300 flex-shrink-0">
            <h3 className="rounded self-start font-semibold" >{promo.name}</h3>
            <img src={src} className="h-60 w-60 border rounded-md mx-auto" />
            <p className="text-xs">{promo.description}</p>
            <div className="flex flex-col w-full">
                <div className="flex justify-between"><span className="w-1/2 text-xs font-semibold">Issued:</span><span className="w-1/2 text-xs font-semibold text-right">{promo.mintCount} / {promo.maxMint}</span></div>
                <div className="flex justify-between"><span className="w-1/2 text-xs font-semibold">Redeemed:</span><span className="w-1/2 text-xs font-semibold text-right">{promo.burnCount} / {promo.maxBurn}</span></div>
            </div>
            <button onClick={() => onClick(promo.name, promo.mintId)} disabled={promo.mintCount == promo.maxMint} className="m-auto py-2 px-8 bg-bokoupGreen2-400 disabled:bg-slate-200 disabled:hover:brightness-100 rounded-full text-center text-sm font-semibold hover:brightness-90 flex items-center">
                <QrCodeIcon className="h-4 w-4" aria-hidden="true" />
            </button>
        </div>
    )
};