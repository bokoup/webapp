import { json, type TypedResponse } from "@remix-run/node";
import QRCode from "qrcode";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { requireUserId } from "~/session.server";
import type { QRCodeModalProps } from "~/components/QRCodeModal";
import { APP_URL } from "~/models/urls";

export const getCreateMerchantDataUrl = async (
  txId: string
): Promise<string> => {
  let text = `solana:${`${APP_URL}/tx/${txId}`}`;
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
  const campaignName = url.searchParams.get("campaignName");
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreateMerchantDataUrl(txId);
  const title = `Scan to create ${campaignName}.`;
  const description = `Scan with your phone to approve the creation of ${campaignName}.`;

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
