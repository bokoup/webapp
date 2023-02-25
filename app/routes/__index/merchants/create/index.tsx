import { Form, useActionData } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import type { LoaderArgs } from "@remix-run/node";
import type { IMerchantMetadataJson } from "~/models/merchant.server";
import { FormData } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { createStoredTransaction } from "~/models/savedtx.server";
import { safeRedirect } from "~/utils";
import { PhotoIcon } from "@heroicons/react/20/solid";
import { API_TX } from "~/models/urls";

function MetadataJsonAdapter(formData: FormData): IMerchantMetadataJson {
  const metadataJson: IMerchantMetadataJson = {
    name: formData.get("merchantName")!.toString(),
    description: formData.get("description")!.toString(),
    website: formData.get("website")!.toString(),
    active: formData.get("active")!.toString() == "true",
  };

  return metadataJson;
}

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const { userId } = await requireUserId(request);

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
    console.log("ding");
    return json({
      errorMsg: "Something went wrong while uploading",
    });
  }

  const url = memo
    ? `${API_TX}/merchant/create/${userId}/${memo}`
    : `${API_TX}/merchant/create/${userId}`;

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
        ["merchantName", metadataJson.name],
        ["redirectTo", safeRedirect("/merchants")],
      ]);
      const url = `/merchants/create/${txId.id}?${searchParams}`;
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

export interface TransactionResponse {
  transaction: string;
  message: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  inputType: string;
  placeholder?: string;
  accept?: string;
  hidden?: boolean;
  rows?: number;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

const imageFormField: FormFieldProps = {
  id: "image",
  label: "Image",
  inputType: "file",
  accept: "image/*",
  hidden: true,
};

const descriptionFormField: FormFieldProps = {
  id: "description",
  label: "Description",
  inputType: "text",
  rows: 5,
};

const formFields: FormFieldProps[] = [
  {
    id: "merchantName",
    label: "Merchant Name",
    inputType: "text",
  },
  {
    id: "website",
    label: "Website",
    inputType: "text",
  },
  { id: "memo", label: "Memo", inputType: "text" },
];

function FormField({ ...props }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none  aria-[invalid]:text-red-600"
        id={props.id}
        name={props.id}
        type={props.inputType}
        placeholder={
          props.placeholder ||
          props.label.charAt(0).toUpperCase() +
            props.label.slice(1).toLowerCase()
        }
        accept={props.accept}
        hidden={props.hidden}
        aria-errormessage={"error"}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}

function TextAreaFormField({ ...props }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <textarea
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        id={props.id}
        name={props.id}
        placeholder={props.label}
        hidden={props.hidden}
        rows={props.rows}
      />
    </div>
  );
}

function ImageFormField({ ...props }: FormFieldProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    hiddenFileInput.current!.click();
  };

  let reader: FileReader;
  const _handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.currentTarget.files;
    if (files) {
      reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = (e: ProgressEvent<FileReader>) => {
        setImgSrc(reader.result?.toString());
      };
    }
  };

  return (
    <>
      <div className={"mb-4 flex-shrink-0"}>
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <div
          onClick={(e) => handleClick(e)}
          className={
            imgSrc != undefined
              ? "hidden"
              : "focus:shadow-outline flex h-64 w-64 cursor-pointer rounded border py-2 px-3 shadow focus:outline-none"
          }
        >
          <PhotoIcon className="m-auto h-10 w-10 text-slate-300" />
        </div>
        <img
          src={imgSrc}
          width={256}
          height={256}
          className="focus:shadow-outline h-64 w-64 flex-grow-0 cursor-pointer appearance-none rounded border object-cover py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          alt="preview"
          onClick={(e) => handleClick(e)}
          hidden={imgSrc == undefined}
        />
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={hiddenFileInput}
          id={props.id}
          name={props.id}
          type={props.inputType}
          placeholder={props.label}
          accept={props.accept}
          hidden={props.hidden}
          required
          onChange={_handleFileChange}
        />
      </div>
    </>
  );
}

export default function CreateMerchant() {
  const [active, setActive] = useState(true);
  const data = useActionData();
  console.log(data);

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Merchant
        </h2>
        <p>Creating a merchant account is a three part process.</p>
        <ol>
          <li className="list-inside list-decimal pl-2">
            First we create a merchant.
          </li>
          <li className="list-inside list-decimal pl-2">
            Next we add locations.
          </li>
          <li className="list-inside list-decimal pl-2">
            And finally we add devices to locations.
          </li>
        </ol>
        <p className="pt-4">
          Once we have devices added to locations we can create a campaign that
          includes one or more loctions. Promos get assigned to a campaign so
          that they can be redeemed by all devices associated with a campaign's
          locations.
        </p>
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
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="active"
              >
                {active ? "Active" : "Inactive"}
              </label>
              <Switch
                name="active"
                checked={active}
                onChange={setActive}
                className={`${
                  active ? "bg-bokoupGreen2-400" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Set merchant active</span>
                <span
                  className={`${
                    active ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
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
