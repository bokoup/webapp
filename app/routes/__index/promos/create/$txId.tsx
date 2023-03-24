import { ActionArgs, json, redirect } from "@remix-run/node";
import QRCode from "qrcode";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { requireMerchantId } from "~/session.server";
import { APP_URL } from "~/models/constants";
import { useEventSource } from "remix-utils";
import { useEffect, useRef } from "react";

export const getCreatePromoDataUrl = async (txId: string): Promise<string> => {
  let text = `solana:${`${APP_URL}/tx/${txId}`}`;
  return await QRCode.toDataURL(text);
};

export const loader = async ({ request, params }: LoaderArgs) => {
  await requireMerchantId(request);
  const txId = params.txId;

  if (!txId) {
    throw json({ error: "Saved transaction id not found" });
  }

  const url = new URL(request.url);
  const promoName = url.searchParams.get("promoName");
  const campaignId = url.searchParams.get("campaignId");
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreatePromoDataUrl(txId);
  const title = `Scan to create ${promoName}.`;
  const description = `Scan with your phone to approve the creation of ${promoName}.`;

  return json({
    props: { dataUrl, title, description, redirectTo },
    promoName,
    campaignId,
  });
};

export async function action({ request }: ActionArgs) {
  const { merchantId } = await requireMerchantId(request);
  const data = await request.formData();
  const promoId = data.get("promoId")?.toString();

  if (promoId && promoId != "") {
    return redirect(`/merchants/${merchantId}`);
  }

  return null;
}

export default function QrCodeSavedTransactionPromo() {
  const data = useLoaderData<typeof loader>();
  const searchParams = new URLSearchParams([
    ["promoName", data.promoName!],
    ["campaignId", data.campaignId!],
  ]);
  const promoId = useEventSource(`/sse/promo?${searchParams}`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (promoId) {
      submit(formRef.current, { replace: true });
    }
  }, [promoId, submit]);

  return (
    <>
      <QRCodeModal {...data.props} />
      <Form ref={formRef} method="post">
        <input type="hidden" name="promoId" value={promoId ? promoId : ""} />
      </Form>
    </>
  );
}
