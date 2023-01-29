import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

import type { User } from "~/models/user.server";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.email === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// export interface imageSpec {
//   width: number
//   height: number | null
//   aspectRatio: string | null
//   fit: string | null
// }

export interface imageParam {
  key: string;
  value: string | number;
}

export interface imageSpec {
  width: number;
  params: imageParam[];
  height: number | null;
}

export const imageSizes = `
calc(100vw - 48px)
`;

// export const defaultImageSpecs: imageSpec[] = [
//   { width: 480, height: null, aspectRatio: '5:4', fit: "clip" },
//   { width: 768, height: null, aspectRatio: "16:9", fit: "crop" },
//   { width: 976, height: null, aspectRatio: "16:9", fit: "crop" },
//   { width: 1440, height: null, aspectRatio: "16:9", fit: "crop" }
// ];

const BASE_URL: string = "https://bokoup.imgix.net";

export function imgixSrc(path: string, imageSpec: imageSpec): string {
  let url = new URL(path, BASE_URL);
  url.searchParams.set("w", imageSpec.width.toString());
  if (imageSpec.height) {
    url.searchParams.set("w", imageSpec.width.toString());
  }
  imageSpec.params.forEach(({ key, value }) => {
    url.searchParams.set(key, value.toString());
  });
  url.searchParams.set("auto", "format");
  return url.toString();
}

export function imgixSrcSet(path: string, imageSpecs: imageSpec[]): string {
  return imageSpecs
    .map((imageSpec) => {
      const normalRes = `${imgixSrc(path, imageSpec)} ${imageSpec.width}w`;
      return `${normalRes}`;
    })
    .join(", ");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
