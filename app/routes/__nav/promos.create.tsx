import { Form, useFetcher } from "@remix-run/react";
import { ActionArgs, json } from "@remix-run/node";
import { Combobox } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { RadioGroup } from "@headlessui/react";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = createMemoryUploadHandler();

  const formData = await parseMultipartFormData(request, uploadHandler);
  const imgSrc = formData.get("image") as File;
  const imgDesc = formData.get("description");
  console.log(imgDesc);
  if (!imgSrc) {
    return json({
      errorMsg: "Something went wrong while uploading",
    });
  }
  console.log(imgSrc.size);
  return json({
    imgSrc,
    imgDesc,
  });
};

type ActionData = {
  errorMsg?: string;
  imgSrc?: string;
  imgDesc?: string;
};

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
  { id: "description", label: "Description", inputType: "text" },
  { id: "maxMint", label: "Maximum Issuable", inputType: "number" },
  { id: "maxBurn", label: "Maximum Redeemable", inputType: "number" },
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

interface RadioOptionProps {
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const promoTypes = ["buyXCurrencygetYPercent", "buyXProductgetYProduct"];

function RadioOption({ id, name }: RadioOptionProps) {
  return (
    <>
      <input className="mx-4" id={id} name={name} type="radio" value={id} />
      <label className="" htmlFor={id}>
        {id}
      </label>
    </>
  );
}

export default function CreatePromo() {
  const [selectedPromoType, setSelectedPromoType] = useState<string>(
    promoTypes[0]
  );
  const fetcher = useFetcher<ActionData>();

  return (
    <>
      <div className="container mx-auto mb-auto p-2 lg:py-4">
        <h2 className="mb-10 font-heading text-2xl font-medium lg:text-3xl">
          Create New Promo
        </h2>
        <fetcher.Form method="post" encType="multipart/form-data">
          <RadioGroup
            value={selectedPromoType}
            onChange={setSelectedPromoType}
            name="promoType"
            className={"h-42"}
          >
            <>
              <RadioGroup.Label>PromoType</RadioGroup.Label>
              {promoTypes.map((promoType) => {
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
          {formFields.map((props) => (
            <FormField key={props.id} {...props} />
          ))}
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded-full bg-bokoupGreen2-400 py-2 px-4 font-semibold hover:brightness-90 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </fetcher.Form>
      </div>
    </>
  );
}
