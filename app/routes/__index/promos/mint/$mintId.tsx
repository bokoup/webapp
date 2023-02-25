import { json, type TypedResponse } from "@remix-run/node";
import QRCode from "qrcode";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import type { QRCodeModalProps } from "~/components/QRCodeModal";
import { API_TX } from "~/models/urls";

export const getMintPromoDataUrl = async (
  promoName: string,
  mintId: string,
  source: string
): Promise<string> => {
  const message = `Approve to receive ${promoName}`;
  const memo = JSON.stringify({ source });
  let text = `solana:${`${API_TX}/promo/mint/${mintId}/${message}/${memo}`}`;
  return await QRCode.toDataURL(text);
};

export const loader = async ({
  request,
  params,
}: LoaderArgs): Promise<TypedResponse<QRCodeModalProps>> => {
  const mintId = params.mintId;
  const url = new URL(request.url);
  const promoName = url.searchParams.get("promoName");
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getMintPromoDataUrl(
    promoName!,
    mintId!,
    url.pathname.toString().replaceAll("/", "__")
  );
  const title = `Scan to receive ${promoName}.`;
  const description = `Scan with your phone and approve to receive ${promoName}.`;

  return json({
    dataUrl,
    title,
    description,
    redirectTo,
  });
};

export default function QrCodeMintPromo() {
  const data = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";

  return (
    <QRCodeModal
      dataUrl={data.dataUrl}
      title={data.title}
      description={data.description}
      redirectTo={redirectTo}
    />
  );
}
