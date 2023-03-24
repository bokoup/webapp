import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { getUserId } from "~/session.server";
import { getMerchantItem } from "~/models/merchant.server";
import { getProxyImgSrc, imageSpec, purgeImgix } from "~/utils/imgx";
import Locations from "~/components/Locations";
import Devices from "~/components/Devices";
import Campaigns from "~/components/Campaigns";
import Promos from "~/components/Promos";

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

export const loader = async ({ request, params }: LoaderArgs) => {
  const { merchantId } = await getUserId(request);
  const merchantIdParam = params.merchantId;
  if (!merchantIdParam) {
    throw json({
      errorMsg: "merchantId not in params",
    });
  } else {
    const merchant = await getMerchantItem(merchantIdParam);
    if (merchant) {
      return json({ merchant, merchantId });
    } else {
      throw json({
        errorMsg: "Something went wrong with getting merchant.",
      });
    }
  }
};

export default function MerchantPage() {
  const { merchant, merchantId } = useLoaderData<typeof loader>();
  const src = getProxyImgSrc(merchant.metadataJson!.image!, merchantImageSpec);
  const merchantLoggedIn = merchant.id == merchantId;
  const locationsExist =
    merchant.locations != null &&
    merchant.locations != undefined &&
    merchant.locations.length > 0;
  const campaignsExist =
    merchant.campaigns != null &&
    merchant.campaigns != undefined &&
    merchant.campaigns.length > 0;

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
            onError={() => purgeImgix(src)}
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
        <div className="flex flex-col"></div>
        <Locations
          locations={merchant.locations}
          merchantLoggedIn={merchantLoggedIn}
        />
        {merchantLoggedIn ? (
          <>
            <Devices
              devices={merchant.locations.flatMap((location) => {
                return location.devices;
              })}
              locationsExist={locationsExist}
            />
            <Campaigns
              campaigns={merchant.campaigns}
              locationsExist={locationsExist}
            />
            <Promos
              promos={merchant.campaigns.flatMap((campaign) => {
                return campaign.promos || [];
              })}
              campaignsExist={campaignsExist}
            />
          </>
        ) : null}
      </div>
    </>
  );
}
