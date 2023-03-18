import { Form } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import type { LoaderArgs } from "@remix-run/node";
import type {
  IPromoAttribute,
  IPromoMetadataJson,
} from "~/models/promo.server";
import { FormData } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { createStoredTransaction } from "~/models/savedtx.server";
import { safeRedirect } from "~/utils";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { API_TX } from "~/models/urls";
import {
  descriptionFormField,
  FormFieldProps,
  imageFormField,
  TransactionResponse,
} from "~/components/form";
import FormField from "~/components/form/FormField";
import ImageFormField from "~/components/form/ImageFormField";
import TextAreaFormField from "~/components/form/TextAreaFormField";

function MetadataJsonAdapter(formData: FormData): IPromoMetadataJson {
  let promoType = formData.get("promoType")!.toString();

  // Create attributes
  let attributes: IPromoAttribute[] = [
    { trait_type: "promoType", value: promoType },
  ];

  const formFieldIds = promoTypes[promoType]
    .map((props) => props.id)
    .concat(["maxMint", "maxBurn"]);

  formFieldIds.forEach((id) => {
    let value = formData.get(id) as string;
    let parsedVal = +value;

    if (value) {
      attributes.push({
        trait_type: id,
        value: !Number.isNaN(parsedVal) ? parsedVal : value,
      });
    }
  });

  const metadataJson: IPromoMetadataJson = {
    name: formData.get("promoName")!.toString(),
    symbol: formData.get("symbol")!.toString(),
    description: formData.get("description")!.toString(),
    attributes,
    collection: {
      name: formData.get("collectionName")!.toString(),
      family: formData.get("collectionFamily")!.toString(),
    },
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
    return json({
      errorMsg: "Something went wrong while uploading",
    });
  }

  // hard wiring these here temporarily to get this working
  // will come from logged in merchant queries
  const groupSeed = "FqVhBMr1T6pLCr4Ka5LNJNpSag8tgoK6fgx5bxfipySJ";
  const url = memo
    ? `${API_TX}/promo/create/${userId}/${groupSeed}/${memo}`
    : `${API_TX}/promo/create/${userId}/${groupSeed}`;

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
        ["promoName", metadataJson.name],
        ["redirectTo", safeRedirect("/promos")],
      ]);
      const url = `/promos/create/${txId.id}?${searchParams}`;
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
    id: "promoName",
    label: "Promo Name",
    inputType: "text",
  },
  {
    id: "symbol",
    label: "Symbol",
    inputType: "text",
    placeholder: "Promo symbol, three to five characters",
  },
  { id: "collectionName", label: "Collection Name", inputType: "text" },
  { id: "collectionFamily", label: "Collection Family", inputType: "text" },
  { id: "maxMint", label: "Maximum Issuable", inputType: "number", min: 1 },
  { id: "maxBurn", label: "Maximum Redeemable", inputType: "number", min: 1 },
  { id: "memo", label: "Memo", inputType: "text" },
];

const promoTypes: Record<string, FormFieldProps[]> = {
  buyXCurrencyGetYPercent: [
    {
      id: "buyXCurrency",
      label: "Required Purchase Amount",
      inputType: "number",
      min: 1,
    },
    {
      id: "getYPercent",
      label: "Percent Discount",
      inputType: "number",
      min: 1,
      max: 100,
    },
  ],
  buyXProductGetYProduct: [
    { id: "productId", label: "Product ID", inputType: "text" },
    {
      id: "buyXProduct",
      label: "Required Purchase Number",
      inputType: "number",
      min: 1,
    },
    {
      id: "getYProduct",
      label: "Number Free",
      inputType: "number",
      min: 1,
    },
  ],
};

export default function CreatePromo() {
  const [selectedPromoType, setSelectedPromoType] = useState<string>(
    Object.keys(promoTypes)[0]
  );
  // const fetcher = useFetcher<ActionData>();
  // const transition = useTransition();

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Promo
        </h2>
        <Form method="post" encType="multipart/form-data">
          <div className="gap-4 md:flex">
            <ImageFormField {...imageFormField} />
            <div className="w-full max-w-md">
              {formFields.slice(0, 4).map((props) => (
                <FormField key={props.id} {...props} />
              ))}
              <TextAreaFormField {...descriptionFormField} />
              {formFields.slice(4).map((props) => (
                <FormField key={props.id} {...props} />
              ))}

              <Listbox
                value={selectedPromoType}
                onChange={setSelectedPromoType}
                name="promoType"
              >
                <Listbox.Label className="mb-2 block text-sm font-bold text-gray-700">
                  Promo Type
                </Listbox.Label>
                <div className="relative mt-1 mb-4">
                  <Listbox.Button className="focus:shadow-outline relative w-full appearance-none rounded border py-2 px-3 text-left leading-tight text-gray-700 shadow focus:outline-none">
                    <span className="block truncate">{selectedPromoType}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {Object.keys(promoTypes).map((promoType) => (
                        <Listbox.Option
                          key={promoType}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-bokoupBlue-100" : ""
                            }`
                          }
                          value={promoType}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {promoType}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-bokoupGreen2-900">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <>
                {promoTypes[selectedPromoType].map((props) => {
                  return <FormField key={props.id} {...props} />;
                })}
              </>
              <div className="flex items-center justify-between">
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
