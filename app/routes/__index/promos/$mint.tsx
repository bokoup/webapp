import { ActionArgs, json, redirect } from "@remix-run/node";
import QRCode from "qrcode";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { API_TX } from "~/models/constants";
import { useEventSource } from "remix-utils";
import { useEffect, useRef } from "react";
import { requireUserId } from "~/session.server";
import { v4 as uuidv4 } from "uuid";

export const getMintPromoDataUrl = async (
  promoName: string,
  mintId: string,
  deviceId: string,
  deviceOwner: string,
  locationId: string,
  campaignId: string,
  memo: string
): Promise<string> => {
  const message = `Approve to receive ${promoName}`;
  let text = `solana:${`${API_TX}/promo/mint/${mintId}/${deviceId}/${deviceOwner}/${locationId}/${campaignId}/${message}/${memo}`}`;
  return await QRCode.toDataURL(text);
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const redirectTo = safeRedirect(url.searchParams.get("redirectTo"));
  const { userId } = await requireUserId(request, redirectTo);

  const promoName = url.searchParams.get("promoName");
  const mintId = url.searchParams.get("mintId");
  const deviceId = url.searchParams.get("deviceId");
  const deviceOwner = url.searchParams.get("deviceOwner");
  const locationId = url.searchParams.get("locationId");
  const campaignId = url.searchParams.get("campaignId");

  if (
    !mintId ||
    !promoName ||
    !deviceId ||
    !deviceOwner ||
    !locationId ||
    !campaignId
  ) {
    throw json({
      error: "Missing userId or mintId",
    });
  }

  const source = url.pathname.toString().replaceAll("/", "__");
  const uuid = uuidv4().replaceAll("-", "");

  const memo = JSON.stringify({ source, uuid });

  const dataUrl = await getMintPromoDataUrl(
    promoName,
    mintId,
    deviceId,
    deviceOwner,
    locationId,
    campaignId,
    memo
  );
  const title = `Scan to receive ${promoName}.`;
  const description = `Scan with your phone and approve to receive ${promoName}.`;

  return json({
    props: {
      dataUrl,
      title,
      description,
      redirectTo,
    },
    uuid,
  });
};

export async function action({ request }: ActionArgs) {
  await requireUserId(request);
  const data = await request.formData();
  const txId = data.get("txId")?.toString();

  if (txId && txId != "") {
    return redirect(`/promos`);
  }

  return null;
}

export default function QrCodeMintPromo() {
  const data = useLoaderData<typeof loader>();
  const searchParams = new URLSearchParams([["uuid", data.uuid]]);
  const txId = useEventSource(`/sse/mint?${searchParams}`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (txId) {
      submit(formRef.current, { replace: true });
    }
  }, [txId, submit]);

  return (
    <>
      <QRCodeModal {...data.props} />
      <Form ref={formRef} method="post">
        <input type="hidden" name="txId" value={txId ? txId : ""} />
      </Form>
    </>
  );
}
