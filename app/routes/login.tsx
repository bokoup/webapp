import {
  type ActionArgs,
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
import {
  createUserSession,
  createVisitSession,
  getUserId,
} from "~/session.server";
import { useEventSource } from "remix-utils";
import { useEffect, useRef } from "react";
import { safeRedirect } from "~/utils";
import { API_TX } from "~/models/urls";

export const getSignMemoDataUrl = async (visitId: string): Promise<string> => {
  const message = `Approve to sign in to bokoup`;
  const memo = JSON.stringify({ visitId });

  let text = `solana:${`${API_TX}/signmemo/${encodeURIComponent(
    message
  )}/${encodeURIComponent(memo)}`}`;
  return QRCode.toDataURL(text);
};

interface SignMemoData {
  dataUrl: string | null;
  title: string;
  description: string;
}

export const loader = async ({
  request,
}: LoaderArgs): Promise<TypedResponse<SignMemoData>> => {
  let url = new URL(request.url);
  let redirectTo = url.searchParams.get("redirectTo") || "/";
  let searchParams = new URLSearchParams([
    ["redirectTo", safeRedirect(redirectTo)],
  ]);

  let { userId, visitId } = await getUserId(request);
  if (userId && visitId) return redirect(redirectTo!);

  if (!visitId) {
    return await createVisitSession({
      request,
      remember: false,
      redirectTo: `/login?${searchParams}`,
    });
  }

  const dataUrl = await getSignMemoDataUrl(visitId!);

  const title = `Scan to sign in.`;
  const description = `Scan with your phone to approve sign in transaction.`;
  const signMemoData: SignMemoData = { dataUrl, title, description };

  return json(signMemoData);
};

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const userId = data.get("userId")?.toString();
  const merchantVal = data.get("merchantId")?.toString();
  const redirectTo = safeRedirect(data.get("redirectTo")?.toString(), "/");
  const merchantId = !merchantVal || merchantVal == "" ? null : merchantVal;

  if (userId && userId != "" && redirectTo) {
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

export default function QrCodeLogin() {
  const [searchParams] = useSearchParams();
  const redirectTo = safeRedirect(searchParams.get("redirectTo") || "/");

  const data = useLoaderData<typeof loader>();
  const signMemoItem = useEventSource(`/sse/signmemo`);
  const { userId, merchantId } = signMemoItem
    ? JSON.parse(signMemoItem)
    : { userId: "", merchantId: "" };
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (userId != "") {
      submit(formRef.current, { replace: true });
    }
  }, [userId, submit]);

  return (
    <>
      <QRCodeModal
        dataUrl={data.dataUrl ? data.dataUrl : "null"}
        title={data.title}
        description={data.description}
        redirectTo={redirectTo}
      />
      <Form ref={formRef} method="post">
        <input type="hidden" name="userId" value={userId ? userId : ""} />
        <input
          type="hidden"
          name="merchantId"
          value={merchantId ? merchantId : ""}
        />
        <input type="hidden" name="redirectTo" value={redirectTo} />
      </Form>
    </>
  );
}
