import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { v4 as uuidv4 } from "uuid";
import { getSignMemo } from "./models/signmemo.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export const VISIT_SESSION_KEY = "visitId";
const USER_SESSION_KEY = "userId";
export const TXID_SESSION_KEY = "txId";
const MERCHANT_SESSION_KEY = "merchantId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export interface User {
  userId: string | undefined;
  visitId: string | undefined;
  merchantId: string | undefined;
}

export async function getUserId(request: Request): Promise<User> {
  const session = await getSession(request);
  const visitId = session.get(VISIT_SESSION_KEY);
  let userId = session.get(USER_SESSION_KEY);
  if (userId) {
    userId = userId.replace(/(^"|"$)/g, "");
  }
  const merchantId = session.get(MERCHANT_SESSION_KEY);
  return { userId, visitId, merchantId };
}

export async function getTxId(request: Request): Promise<string> {
  const session = await getSession(request);
  const txId = session.get(TXID_SESSION_KEY);
  return txId;
}

export async function setUserId(request: Request, userId: User["userId"]) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
}

export async function getUser(request: Request) {
  const { userId, visitId } = await getUserId(request);
  if (userId === undefined) return null;

  const signMemo = await getSignMemo(visitId);
  if (signMemo) return signMemo.userId;

  throw await logout(request);
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<User> {
  const { userId, visitId, merchantId } = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return { userId, visitId, merchantId };
}

export async function requireUser(request: Request) {
  const { visitId } = await requireUserId(request);

  const user = await getSignMemo(visitId);
  if (user) return user;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userId,
  merchantId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  merchantId: string | null;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  if (merchantId) {
    session.set(MERCHANT_SESSION_KEY, merchantId);
  }
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function createVisitSession({
  request,
  remember,
  redirectTo,
}: {
  request: Request;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  const visitId = uuidv4().replaceAll("-", "");
  session.set(VISIT_SESSION_KEY, visitId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 10 // 10 minutes - if userId not added to extend
          : undefined,
      }),
    },
  });
}

export async function createTxIdSession({
  request,
  txId,
  redirectTo,
}: {
  request: Request;
  txId: string;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(TXID_SESSION_KEY, txId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function deleteTxIdSession({
  request,
  redirectTo,
}: {
  request: Request;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.unset(TXID_SESSION_KEY);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  session.unset(USER_SESSION_KEY);
  session.unset(VISIT_SESSION_KEY);
  await sessionStorage.commitSession(session);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
