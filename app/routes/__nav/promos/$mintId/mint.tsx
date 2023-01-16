import { json, type TypedResponse } from "@remix-run/node";
import QRCode from "qrcode";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";

export const getMintPromoDataUrl = async (
  promoName: string,
  mintId: string,
  source: string
): Promise<string> => {
  const message = `Approve to receive ${promoName}`;
  const memo = encodeURIComponent(JSON.stringify({ source }));
  let text = `solana:${`https://tx.api.bokoup.dev/promo/mint/${mintId}/${message}/${memo}`}`;
  return await QRCode.toDataURL(text);
};

interface MintPromoData {
  dataUrl: string;
  title: string;
  description: string;
}
export const loader = async ({
  request,
  params,
}: LoaderArgs): Promise<TypedResponse<MintPromoData>> => {
  const mintId = params.mintId;
  const url = new URL(request.url);
  const promoName = url.searchParams.get("promoName");

  const dataUrl = await getMintPromoDataUrl(promoName!, mintId!, url.pathname);
  const title = `Scan to receive ${promoName}.`;
  const description = `Scan with your phone and approve to receive ${promoName}.`;
  const mintPromoData: MintPromoData = { dataUrl, title, description };

  return json(mintPromoData);
};

export default function QrCodeMintPromo() {
  const data = useLoaderData<typeof loader>();

  return (
    <QRCodeModal
      dataUrl={data.dataUrl}
      title={data.title}
      description={data.description}
    />
  );
}
