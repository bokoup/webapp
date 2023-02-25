import { json, type TypedResponse } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { getUserId } from "~/session.server";
import { type MerchantProps } from "~/components/merchant";
import { getMerchantItem } from "~/models/merchant.server";
import { getProxyImgSrc, imageSpec } from "~/utils/imgx";

const merchantImageSpec: imageSpec = {
  width: 256,
  height: 256,
  params: [
    { key: "fit", value: "crop" },
    { key: "q", value: "100" },
    // { key: "blur", value: "20" },
    // { key: "blend-color", value: "60000000" }
  ],
};

export const loader = async ({
  request,
  params,
}: LoaderArgs): Promise<TypedResponse<MerchantProps | Record<string, any>>> => {
  const userId = await getUserId(request);
  const merchantId = params.merchantId;
  if (!merchantId) {
    return json({
      errorMsg: "merchantId not in params",
    });
  } else {
    const merchant = await getMerchantItem(merchantId);
    if (merchant) {
      return json({ merchant });
    } else {
      return json({
        errorMsg: "Something went wrong with getting merchant.",
      });
    }
  }
};

export default function MerchantPage() {
  const { merchant } = useLoaderData<typeof loader>();
  const src = getProxyImgSrc(merchant.metadataJson!.image!, merchantImageSpec);

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="font-heading text-2xl font-medium lg:text-3xl">
          {merchant.name}
        </h2>
        <div className="mt-4 flex gap-2">
          <img
            src={src}
            className="w-58 h-60 rounded-md border"
            alt={merchant.name}
          />
          <div>
            <div>
              <h4 className="text-md font-bold">Description</h4>
              <p>{merchant.metadataJson.description}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-bold">Website</h4>
              <a
                href={merchant.metadataJson.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bokoupBlue-500 hover:underline"
              >
                {merchant.metadataJson.website}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4"></div>
        <h3 className="font-heading text-lg font-medium lg:text-2xl">
          Locations
        </h3>
        <h3 className="mt-8 font-heading text-lg font-medium lg:text-2xl">
          Campaigns
        </h3>
      </div>
    </>
  );
}
