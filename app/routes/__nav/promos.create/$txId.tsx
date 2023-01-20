import { json, type TypedResponse } from "@remix-run/node";
import QRCode from "qrcode";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { requireUserId } from "~/session.server";
import type { QRCodeModalProps } from "~/components/QRCodeModal";

export const getCreatePromoDataUrl = async (txId: string): Promise<string> => {
  let text = `solana:${`https://bokoup.dev/tx/${txId}`}`;
  return await QRCode.toDataURL(text);
};

export const loader = async ({
  request,
  params,
}: LoaderArgs): Promise<
  TypedResponse<QRCodeModalProps | Record<string, any>>
> => {
  await requireUserId(request);
  const txId = params.txId;

  if (!txId) {
    return json({ error: "Saved transaction id not found" });
  }

  const url = new URL(request.url);
  const promoName = url.searchParams.get("promoName");
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreatePromoDataUrl(txId);
  const title = `Scan to create ${promoName}.`;
  const description = `Scan with your phone and approve the creation of ${promoName}.`;

  return json({ dataUrl, title, description, redirectTo } as QRCodeModalProps);
};

export default function QrCodeSavedTransactionPromo() {
  const data = useLoaderData<typeof loader>();

  return (
    <QRCodeModal
      dataUrl={data.dataUrl}
      title={data.title}
      description={data.description}
      redirectTo={data.redirectTo}
    />
  );
}
