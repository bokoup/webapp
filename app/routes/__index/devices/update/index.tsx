import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { IDeviceMetadataJson, getDeviceItem } from "~/models/merchant.server";
import { FormData } from "@remix-run/node";
import { requireMerchantId } from "~/session.server";
import { createStoredTransaction } from "~/models/savedtx.server";
import { safeRedirect } from "~/utils";
import { API_TX } from "~/models/constants";
import type { FormFieldProps, TransactionResponse } from "~/components/form";
import FormField from "~/components/form/FormField";
import TextAreaFormField from "~/components/form/TextAreaFormField";
import ActiveFormField from "~/components/form/ActiveFormField";

function MetadataJsonAdapter(formData: FormData): IDeviceMetadataJson {
  const metadataJson: IDeviceMetadataJson = {
    name: formData.get("deviceName")!.toString(),
    description: formData.get("description")!.toString(),
    active: formData.get("active")?.toString() == "on",
  };

  return metadataJson;
}

export const loader = async ({ request }: ActionArgs) => {
  const deviceId = new URL(request.url).searchParams.get("deviceId");
  const { merchantId } = await requireMerchantId(request);
  if (!deviceId) {
    throw new Error("No device id provided");
  }
  const deviceItem = await getDeviceItem(deviceId);

  return json({ deviceItem });
};

export const action = async ({ request }: ActionArgs) => {
  const { userId, merchantId } = await requireMerchantId(request);

  const formData = await request.formData();
  console.log("FORM DATA", JSON.stringify(formData));
  const metadataJson = MetadataJsonAdapter(formData);
  const deviceOwner = formData.get("deviceOwner")?.toString();
  const locationId = formData.get("locationId")?.toString();
  const memo = formData.get("memo") ? formData.get("memo")?.toString() : null;
  console.log("memo", JSON.stringify(memo));

  const txForm = new FormData();

  txForm.append("metadata", JSON.stringify(metadataJson));

  const url = memo
    ? `${API_TX}/device/create/${userId}/${locationId}/${deviceOwner}/${memo}`
    : `${API_TX}/device/create/${userId}/${locationId}/${deviceOwner}`;

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
        ["name", metadataJson.name],
        ["location", locationId!],
        ["timestamp", new Date().toISOString()],
        ["redirectTo", safeRedirect(`/merchants/${merchantId}`)],
      ]);
      const url = `/devices/update/${txId.id}?${searchParams}`;
      return redirect(url);
    } else {
      return json({
        errorMsg: "Something went wrong saving the transaction",
        error: JSON.stringify(txId),
      });
    }
  }

  return json({
    errorMsg: "Something went wrong on the transaction server",
    error: await res.text(),
  });
};

export default function UpdateDevice() {
  const { deviceItem } = useLoaderData<typeof loader>();
  const error = useActionData();
  console.log(error);
  const formFields: FormFieldProps[] = [
    {
      id: "deviceLocation",
      label: "Device Location",
      inputType: "text",
      readOnly: true,
      defaultValue: deviceItem ? deviceItem.locationName : "",
    },
    {
      id: "deviceName",
      label: "Device Name",
      inputType: "text",
      readOnly: true,
      defaultValue: deviceItem?.name,
    },
    {
      id: "locationId",
      label: "Location Id",
      inputType: "text",
      readOnly: true,
      hidden: true,
      defaultValue: deviceItem?.location,
    },
    {
      id: "deviceOwner",
      label: "Device Owner",
      inputType: "text",
      defaultValue: deviceItem?.owner,
    },
    { id: "memo", label: "Memo", inputType: "text" },
  ];

  const descriptionFormField: FormFieldProps = {
    id: "description",
    label: "Description",
    inputType: "text",
    rows: 5,
    value: deviceItem ? deviceItem.metadataJson.description : "",
  };

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Update Device
        </h2>
        {!error ? (
          <Form method="post" className="pt-8">
            <div className="gap-4 md:flex">
              <div className="w-full max-w-md">
                {formFields.slice(0, 2).map((props) => (
                  <FormField key={props.id} {...props} />
                ))}
                <TextAreaFormField {...descriptionFormField} />
                {formFields.slice(2).map((props) => (
                  <FormField key={props.id} {...props} />
                ))}
                <ActiveFormField initialValue={deviceItem?.active} />
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
        ) : (
          <div className="text-red-500">{`${error.errorMsg}: ${error.error}`}</div>
        )}
      </div>
    </>
  );
}
