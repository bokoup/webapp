import { json, redirect } from "@remix-run/node";
import QRCode from "qrcode";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
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
  const name = url.searchParams.get("name");
  const location = url.searchParams.get("location")?.toString();
  const timestamp = url.searchParams.get("timestamp")?.toString();
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreateMerchantDataUrl(txId);
  const title = `Scan to update ${name}.`;
  const description = `Scan with your phone to approve the update of ${name}.`;

  return json({
    props: { dataUrl, title, description, redirectTo },
    location,
    name,
    timestamp,
  });
};

export async function action({ request }: ActionArgs) {
  const { merchantId } = await requireMerchantId(request);
  const data = await request.formData();
  const deviceId = data.get("deviceId")?.toString();

  if (deviceId && deviceId != "") {
    return redirect(`/merchants/${merchantId}`);
  }

  return null;
}

export default function QrCodeSavedTransactionPromo() {
  const data = useLoaderData<typeof loader>();

  const searchParams = new URLSearchParams([
    ["location", data.location!],
    ["name", data.name!],
    ["timestamp", data.timestamp!],
  ]);
  const deviceId = useEventSource(`/sse/device?${searchParams}`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (deviceId) {
      submit(formRef.current, { replace: true });
    }
  }, [deviceId, submit]);

  return (
    <>
      <QRCodeModal {...data.props} />;
      <Form ref={formRef} method="post">
        <input type="hidden" name="deviceId" value={deviceId ? deviceId : ""} />
      </Form>
    </>
  );
}
