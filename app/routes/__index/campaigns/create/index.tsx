import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import {
  getMerchantItem,
  ICampaignMetadataJson,
} from "~/models/merchant.server";
import { FormData } from "@remix-run/node";
import { requireMerchantId } from "~/session.server";
import { createStoredTransaction } from "~/models/savedtx.server";
import { safeRedirect } from "~/utils";
import { API_TX } from "~/models/urls";
import {
  descriptionFormField,
  FormFieldProps,
  TransactionResponse,
} from "~/components/form";
import FormField from "~/components/form/FormField";
import TextAreaFormField from "~/components/form/TextAreaFormField";
import ActiveFormField from "~/components/form/ActiveFormField";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";

function MetadataJsonAdapter(formData: FormData): ICampaignMetadataJson {
  const metadataJson: ICampaignMetadataJson = {
    name: formData.get("campaignName")!.toString(),
    description: formData.get("description")!.toString(),
    active: formData.get("active")!.toString() == "on",
  };

  return metadataJson;
}

export const loader = async ({ request }: ActionArgs) => {
  const { merchantId } = await requireMerchantId(request);
  const merchantItem = await getMerchantItem(merchantId!);
  const locations = merchantItem.locations.sort((locationA, locationB) =>
    locationA.name.localeCompare(locationB.name)
  );
  return json({ locations });
};

export const action = async ({ request }: ActionArgs) => {
  const { userId, merchantId } = await requireMerchantId(request);

  // just doing this as memory for now - may be better to write to disk or upload directly to arweave
  const uploadHandler = createMemoryUploadHandler();

  // The transaction server expects a two part multipart form upload
  //  - metadata: string
  //  - image: bytes

  const formData = await parseMultipartFormData(request, uploadHandler);
  const metadataJson = MetadataJsonAdapter(formData);
  const lamports = formData.get("lamports")?.toString();
  const locations = formData.get("locations")?.toString();
  const memo = formData.get("memo") ? formData.get("memo")?.toString() : null;

  const txForm = new FormData();

  txForm.append("metadata", JSON.stringify(metadataJson));

  const url = memo
    ? `${API_TX}/campaign/create/${userId}/${lamports}/${memo}`
    : `${API_TX}/campaign/create/${userId}/${lamports}/${memo}`;

  const res = await fetch(url, { method: "post", body: txForm });

  if (res.status == 200) {
    let transResponse = (await res.json()) as TransactionResponse;
    let txId = await createStoredTransaction({
      payer: userId!,
      tx: transResponse.transaction,
      message: transResponse.message,
    });

    if (txId) {
      const searchParams = new URLSearchParams([
        ["campaignName", metadataJson.name],
        ["redirectTo", safeRedirect(`/merchants/${merchantId}`)],
      ]);
      const url = `/campaigns/create/${txId.id}?${searchParams}`;
      return redirect(url);
    } else {
      throw json({
        errorMsg: "Something went wrong saving the transaction",
        error: JSON.stringify(txId),
      });
    }
  }

  throw json({
    errorMsg: "Something went wrong on the transaction server",
    error: await res.text(),
  });
};

const formFields: FormFieldProps[] = [
  {
    id: "campaignName",
    label: "Campaign Name",
    inputType: "text",
  },
  { id: "memo", label: "Memo", inputType: "text" },
];

export default function CreateCampaign() {
  const loaderData = useLoaderData<typeof loader>();
  const [locations, setSelectedLocation] = useState(loaderData!.locations![0]);

  function handleOnChange(value: string) {
    const location = loaderData.locations.filter(
      (location) => location.name == value
    )[0];
    setSelectedLocation(location);
  }
  const data = useActionData();
  console.log(data);

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Campaign
        </h2>
        <Form method="post" encType="multipart/form-data" className="pt-8">
          <div className="gap-4 md:flex">
            <div className="w-full max-w-md">
              <select id="chkveg" multiple>
                <option value="cheese">Cheese</option>
                <option value="tomatoes">Tomatoes</option>
                <option value="mozarella">Mozzarella</option>
                <option value="mushrooms">Mushrooms</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="onions">Onions</option>
              </select>
              {formFields.slice(0, 1).map((props) => (
                <FormField key={props.id} {...props} />
              ))}
              <TextAreaFormField {...descriptionFormField} />
              {formFields.slice(1).map((props) => (
                <FormField key={props.id} {...props} />
              ))}
              <ActiveFormField />
              <div className="flex items-center justify-between pt-4">
                <button
                  className="focus:shadow-outline rounded-full bg-bokoupGreen2-400 py-2 px-4 font-semibold hover:brightness-90 focus:outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
