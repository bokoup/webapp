import { ActionArgs, json, redirect } from "@remix-run/node";
import QRCode from "qrcode";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { requireMerchantId, requireUserId } from "~/session.server";
import { APP_URL } from "~/models/constants";
import { useEventSource } from "remix-utils";
import { useEffect, useRef } from "react";

export const getCreateMerchantDataUrl = async (
  txId: string
): Promise<string> => {
  let text = `solana:${`${APP_URL}/tx/${txId}`}`;
  return await QRCode.toDataURL(text);
};

export const loader = async ({ request, params }: LoaderArgs) => {
  await requireUserId(request);
  const txId = params.txId;

  if (!txId) {
    throw json({ error: "Saved transaction id not found" });
  }

  const url = new URL(request.url);
  const campaignName = url.searchParams.get("campaignName");
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreateMerchantDataUrl(txId);
  const title = `Scan to create ${campaignName}.`;
  const description = `Scan with your phone to approve the creation of ${campaignName}.`;

  return json({
    props: { dataUrl, title, description, redirectTo },
    campaignName,
  });
};

export async function action({ request }: ActionArgs) {
  const { merchantId } = await requireMerchantId(request);
  const data = await request.formData();
  const campaignId = data.get("campaignId")?.toString();

  if (campaignId && campaignId != "") {
    return redirect(`/merchants/${merchantId}`);
  }

  return null;
}

export default function QrCodeSavedTransactionPromo() {
  const data = useLoaderData<typeof loader>();

  const searchParams = new URLSearchParams([
    ["campaignName", data.campaignName!],
  ]);
  const campaignId = useEventSource(`/sse/campaign?${searchParams}`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (campaignId) {
      submit(formRef.current, { replace: true });
    }
  }, [campaignId, submit]);

  return (
    <>
      <QRCodeModal {...data.props} />
      <Form ref={formRef} method="post">
        <input
          type="hidden"
          name="campaignId"
          value={campaignId ? campaignId : ""}
        />
      </Form>
    </>
  );
}
