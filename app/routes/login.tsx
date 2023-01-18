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

export const getSignMemoDataUrl = async (visitId: string): Promise<string> => {
  const message = `Approve to sign in to bokoup.dev`;
  const memo = JSON.stringify({ visitId });

  let text = `solana:${`https://tx.api.bokoup.dev/signmemo/${message}/${memo}`}`;
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
  let redirectTo = url.searchParams.get("redirectTo");

  let { userId, visitId } = await getUserId(request);
  if (userId && visitId) return redirect(redirectTo || "/");

  if (!visitId) {
    return await createVisitSession({
      request,
      remember: false,
      redirectTo: `/login${redirectTo ? `?${redirectTo}` : ""}`,
    });
  }

  const dataUrl = await getSignMemoDataUrl(visitId!);

  const title = `Scan to sign in.`;
  const description = `Scan with your phone to approve sign in transaction.`;
  const mintPromoData: SignMemoData = { dataUrl, title, description };

  return json(mintPromoData);
};

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const userId = data.get("userId")?.toString();
  const redirectTo = safeRedirect(data.get("redirectTo"), "/");
  if (userId && userId != "" && redirectTo) {
    return createUserSession({
      request,
      userId,
      remember: false,
      redirectTo,
    });
  }

  return null;
}

export default function QrCodeMintPromo() {
  const [searchParams] = useSearchParams();
  const redirectTo = safeRedirect(searchParams.get("redirectTo") || "/");

  const data = useLoaderData<typeof loader>();
  const userId = useEventSource(`/sse/signmemo`);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  useEffect(() => {
    if (userId != "") {
      console.log("login:", userId);
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
        <input type="hidden" name="redirectTo" value={redirectTo} />
      </Form>
    </>
  );
}
