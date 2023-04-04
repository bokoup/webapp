import { json, redirect } from "@remix-run/node";
import QRCode from "qrcode";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { LoaderArgs , ActionArgs} from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { requireMerchantId } from "~/session.server";
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
  await requireMerchantId(request);
  const txId = params.txId;

  if (!txId) {
    throw json({ error: "Saved transaction id not found" });
  }

  const url = new URL(request.url);
  const locationName = url.searchParams.get("locationName");
  if (!locationName) {
    throw json({ error: "locationName not provided as search parameter" }, 400);
  }

  const redirectTo = safeRedirect(url.searchParams.get("redirectTo") || "/");

  const dataUrl = await getCreateMerchantDataUrl(txId);
  const title = `Scan to create ${locationName}.`;
  const description = `Scan with your phone to approve the creation of ${locationName}.`;

  return json({
    props: { dataUrl, title, description, redirectTo },
    locationName,
  });
};

export async function action({ request }: ActionArgs) {
  const { merchantId } = await requireMerchantId(request);
  const data = await request.formData();
  const locationId = data.get("locationId")?.toString();

  if (locationId && locationId != "") {
    return redirect(`/merchants/${merchantId}`);
  }

  return null;
}

export default function QrCodeSavedTransactionPromo() {
  const data = useLoaderData<typeof loader>();
  const searchParams = new URLSearchParams([
    ["locationName", data.locationName!],
  ]);
  const locationId = useEventSource(`/sse/location?${searchParams}`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (locationId) {
      submit(formRef.current, { replace: true });
    }
  }, [locationId, submit]);

  return (
    <>
      <QRCodeModal {...data.props} />{" "}
      <Form ref={formRef} method="post">
        <input
          type="hidden"
          name="locationId"
          value={locationId ? locationId : ""}
        />
      </Form>
    </>
  );
}
