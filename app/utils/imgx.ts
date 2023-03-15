import ImgixClient from "@imgix/js-core";

const IMGIX_URL_TOKEN = "XFMyH6RvjfpQMdMg";
const IMGIX_PROXY_URL = "bokoup-proxy.imgix.net";

const client = new ImgixClient({
  domain: IMGIX_PROXY_URL,
  secureURLToken: IMGIX_URL_TOKEN,
});

export function getProxyImgSrc(path: string, imageSpec: imageSpec) {
  let params: Record<string, any> = {
    w: imageSpec.width,
  };

  if (imageSpec.height) {
    params["h"] = imageSpec.height;
  }

  imageSpec.params.forEach(({ key, value }) => (params[key] = value));

  return client.buildURL(path, params);
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

// export const imageSizes = `
//   calc(100vw - 48px)
//   `;

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
