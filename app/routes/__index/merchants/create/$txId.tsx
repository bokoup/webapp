import {
  ActionArgs,
  json,
  redirect,
  type TypedResponse,
} from "@remix-run/node";
import QRCode from "qrcode";
import {
  Form,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import QRCodeModal from "~/components/QRCodeModal";
import { safeRedirect } from "~/utils";
import { createUserSession, getUserId, requireUserId } from "~/session.server";
import type { QRCodeModalProps } from "~/components/QRCodeModal";
import { APP_URL } from "~/models/constants";
import { useEventSource } from "remix-utils";
import { useEffect, useRef } from "react";

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
    throw json({ error: "Saved transaction id not found" }, 404);
  }

  const url = new URL(request.url);
  const merchantName = url.searchParams.get("merchantName");
  const redirectTo = safeRedirect("/merchants/create" || "/");

  let { userId, merchantId } = await getUserId(request);
  if (userId && merchantId) return redirect(redirectTo!);

  const dataUrl = await getCreateMerchantDataUrl(txId);
  const title = `Scan to create ${merchantName}.`;
  const description = `Scan with your phone to approve the creation of ${merchantName}.`;

  return json({ dataUrl, title, description, redirectTo } as QRCodeModalProps);
};

export async function action({ request }: ActionArgs) {
  const { userId } = await requireUserId(request);
  const data = await request.formData();
  const merchantId = data.get("merchantId")?.toString();
  const redirectTo = safeRedirect(`/merchants/${merchantId}`, "/");
  if (userId && merchantId && merchantId != "" && redirectTo) {
    return createUserSession({
      request,
      userId,
      merchantId,
      remember: false,
      redirectTo,
    });
  }

  return null;
}

export default function QrCodeSavedTransaction() {
  const data = useLoaderData<typeof loader>();
  const merchantId = useEventSource(`/sse/merchant`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (merchantId) {
      submit(formRef.current, { replace: true });
    }
  }, [merchantId, submit]);

  return (
    <>
      <QRCodeModal
        dataUrl={data.dataUrl}
        title={data.title}
        description={data.description}
        redirectTo={data.redirectTo}
      />
      <Form ref={formRef} method="post">
        <input
          type="hidden"
          name="merchantId"
          value={merchantId ? merchantId : ""}
        />
      </Form>
    </>
  );
}
