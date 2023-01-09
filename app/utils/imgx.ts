import ImgixClient from '@imgix/js-core';
import { type imageSpec } from '.';

const IMGIX_URL_TOKEN = "XFMyH6RvjfpQMdMg"
const IMGIX_PROXY_URL = "bokoup-proxy.imgix.net"

const client = new ImgixClient({
    domain: IMGIX_PROXY_URL,
    secureURLToken: IMGIX_URL_TOKEN,
});

export function getProxyImgSrc(path: string, imageSpec: imageSpec) {
    let params: Record<string, any> = {
        w: imageSpec.width,
    };

    if (imageSpec.height) {
        params["h"] = imageSpec.height
    }

    imageSpec.params.forEach(({ key, value }) => params[key] = value);

    return client.buildURL(path, params)
}