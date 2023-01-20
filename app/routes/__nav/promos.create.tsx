import { useFetcher } from "@remix-run/react";
import { type ActionArgs, fetch, json } from "@remix-run/node";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import type {
  IPromoAttribute,
  IPromoMetadataJson,
} from "~/models/promo.server";
import { FormData } from "@remix-run/node";

function MetadataJsonAdapter(formData: FormData): IPromoMetadataJson {
  let promoType = formData.get("promoType")!.toString();

  // Create attributes
  let attributes: IPromoAttribute[] = [
    { trait_type: "promoType", value: promoType },
  ];

  promoTypes[promoType].forEach(
    (props) =>
      attributes.push({
        trait_type: props.id,
        value: formData.get(props.id)!.toString(),
      })!
  );

  ["maxMint", "maxBurn"].forEach((attribute) => {
    if (formData.get(attribute)) {
      attributes.push({
        trait_type: attribute,
        value: formData.get(attribute)!.toString(),
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

export const action = async ({ request }: ActionArgs) => {
  // just doing this as memory for now - may be better to write to disk or upload direclty to arweave
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
  const payer = "34a7Z6VXoLoVGpd9ES311yFJfTUuyh9JN35Czc9REz3j";
  const url = `https://tx.api.bokoup.dev/promo/create/${payer}/${groupSeed}/${memo}`;

  const res = await fetch(url, { method: "post", body: txForm });

  if (res.status == 200) {
    let transResponse = (await res.json()) as TransactionResponse;
    console.log(transResponse);
    return json({
      transResponse,
    });
  }

  return json({
    errorMsg: "Something went wrong on the transaction server",
  });
};

type ActionData = {
  errorMsg?: string;
  imgSrc?: string;
  imgDesc?: string;
  promoType: string;
  fileName?: string;
  metadataJson?: IPromoMetadataJson;
  transResponse?: TransactionResponse;
};

export interface TransactionResponse {
  transaction: string;
  message: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  inputType: string;
  accept?: string;
  hidden?: boolean;
}

const formFields: FormFieldProps[] = [
  { id: "image", label: "Image", inputType: "file", accept: "image/*" },
  { id: "promoName", label: "Promo Name", inputType: "text" },
  { id: "symbol", label: "Symbol", inputType: "text" },
  { id: "collectionName", label: "Collection Name", inputType: "text" },
  { id: "collectionFamily", label: "Collection Family", inputType: "text" },
  { id: "description", label: "Description", inputType: "text" },
  { id: "maxMint", label: "Maximum Issuable", inputType: "number" },
  { id: "maxBurn", label: "Maximum Redeemable", inputType: "number" },
  { id: "memo", label: "Memo", inputType: "text" },
];

function FormField({ id, label, inputType, accept, hidden }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        id={id}
        name={id}
        type={inputType}
        placeholder={label}
        hidden={hidden ? true : false}
      />
    </div>
  );
}

const promoTypes: Record<string, FormFieldProps[]> = {
  buyXCurrencygetYPercent: [
    {
      id: "buyXCurrency",
      label: "Required Purchase Amount",
      inputType: "number",
    },
    {
      id: "getYPercent",
      label: "Percent Discount",
      inputType: "number",
    },
  ],
  buyXProductgetYProduct: [
    { id: "productId", label: "Product ID", inputType: "text" },
    {
      id: "buyXProduct",
      label: "Required Purchase Number",
      inputType: "number",
    },
    {
      id: "getYProduct",
      label: "Number Free",
      inputType: "number",
    },
  ],
};

export default function CreatePromo() {
  const [selectedPromoType, setSelectedPromoType] = useState<string>(
    Object.keys(promoTypes)[0]
  );
  const fetcher = useFetcher<ActionData>();
  console.log(fetcher.data?.transResponse);

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Promo
        </h2>
        <fetcher.Form method="post" encType="multipart/form-data">
          {formFields.map((props) => (
            <FormField key={props.id} {...props} />
          ))}
          <RadioGroup
            value={selectedPromoType}
            onChange={setSelectedPromoType}
            name="promoType"
            className={"h-42"}
          >
            <>
              <RadioGroup.Label className="mb-2 block text-sm font-bold text-gray-700">
                PromoType
              </RadioGroup.Label>
              {Object.keys(promoTypes).map((promoType) => {
                return (
                  <RadioGroup.Option key={promoType} value={promoType}>
                    {({ checked }) => (
                      <span className={checked ? "bg-blue-200" : ""}>
                        {promoType}
                      </span>
                    )}
                  </RadioGroup.Option>
                );
              })}
            </>
          </RadioGroup>
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
        </fetcher.Form>
        {fetcher.type === "done" ? (
          fetcher.data.errorMsg ? (
            <h2>{fetcher.data.errorMsg}</h2>
          ) : (
            <>
              <div>Form has been uploaded:</div>
              <div>{fetcher.data.transResponse?.message}</div>
              <div>{fetcher.data.imgDesc}</div>
            </>
          )
        ) : null}
      </div>
    </>
  );
}
