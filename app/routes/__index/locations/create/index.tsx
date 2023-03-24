import { Form, useActionData } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import type { LoaderArgs } from "@remix-run/node";
import type { ILocationMetadataJson } from "~/models/merchant.server";
import { FormData } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { createStoredTransaction } from "~/models/savedtx.server";
import { safeRedirect } from "~/utils";
import { API_TX } from "~/models/constants";
import {
  descriptionFormField,
  FormFieldProps,
  imageFormField,
  TransactionResponse,
} from "~/components/form";
import FormField from "~/components/form/FormField";
import ImageFormField from "~/components/form/ImageFormField";
import TextAreaFormField from "~/components/form/TextAreaFormField";
import ActiveFormField from "~/components/form/ActiveFormField";

function MetadataJsonAdapter(formData: FormData): ILocationMetadataJson {
  const metadataJson: ILocationMetadataJson = {
    name: formData.get("locationName")!.toString(),
    description: formData.get("description")!.toString(),
    address: formData.get("address")!.toString(),
    active: formData.get("active")!.toString() == "on",
  };

  return metadataJson;
}

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const { userId, merchantId } = await requireUserId(request);

  // just doing this as memory for now - may be better to write to disk or upload directly to arweave
  const uploadHandler = createMemoryUploadHandler();

  // The transaction server expects a two part multipart form upload
  //  - metadata: string
  //  - image: bytes

  const formData = await parseMultipartFormData(request, uploadHandler);
  const metadataJson = MetadataJsonAdapter(formData);
  const image = formData.get("image") as File;
  const memo = formData.get("memo") ? formData.get("memo")?.toString() : null;

  const txForm = new FormData();

  txForm.append("metadata", JSON.stringify(metadataJson));
  txForm.append("image", image);

  if (!image) {
    return json({
      errorMsg: "Something went wrong while uploading",
    });
  }

  const url = memo
    ? `${API_TX}/location/create/${userId}/${memo}`
    : `${API_TX}/location/create/${userId}`;

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
        ["locationName", metadataJson.name],
        ["redirectTo", safeRedirect(`/merchants/${merchantId}`)],
      ]);
      const url = `/locations/create/${txId.id}?${searchParams}`;
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

const formFields: FormFieldProps[] = [
  {
    id: "locationName",
    label: "Location Name",
    inputType: "text",
  },
  {
    id: "address",
    label: "Address",
    inputType: "text",
  },
  { id: "memo", label: "Memo", inputType: "text" },
];

export default function CreateLocation() {
  const data = useActionData();

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Location
        </h2>
        <Form method="post" encType="multipart/form-data" className="pt-8">
          <div className="gap-4 md:flex">
            <ImageFormField {...imageFormField} />
            <div className="w-full max-w-md">
              {formFields.slice(0, 2).map((props) => (
                <FormField key={props.id} {...props} />
              ))}
              <TextAreaFormField {...descriptionFormField} />
              {formFields.slice(2).map((props) => (
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
