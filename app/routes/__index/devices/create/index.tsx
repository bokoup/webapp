import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { type ActionArgs, fetch, json, redirect } from "@remix-run/node";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";
import { parseMultipartFormData } from "@remix-run/server-runtime/dist/formData";
import { getMerchantItem, IDeviceMetadataJson } from "~/models/merchant.server";
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

function MetadataJsonAdapter(formData: FormData): IDeviceMetadataJson {
  const metadataJson: IDeviceMetadataJson = {
    name: formData.get("deviceName")!.toString(),
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
  const deviceOwner = formData.get("deviceOwner")?.toString();
  const locationId = formData.get("locationId")?.toString();
  const memo = formData.get("memo") ? formData.get("memo")?.toString() : null;

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
        ["deviceName", metadataJson.name],
        ["redirectTo", safeRedirect(`/merchants/${merchantId}`)],
      ]);
      const url = `/devices/create/${txId.id}?${searchParams}`;
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
    id: "deviceName",
    label: "Device Name",
    inputType: "text",
  },
  {
    id: "deviceOwner",
    label: "Device Owner",
    inputType: "text",
  },
  { id: "memo", label: "Memo", inputType: "text" },
];

export default function CreateDevice() {
  const loaderData = useLoaderData<typeof loader>();
  const [selectedLocation, setSelectedLocation] = useState(
    loaderData!.locations![0]
  );

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
          Create New Location
        </h2>
        <Form method="post" encType="multipart/form-data" className="pt-8">
          <div className="gap-4 md:flex">
            <div className="w-full max-w-md">
              <Listbox value={selectedLocation.name} onChange={handleOnChange}>
                <Listbox.Label className="mb-2 block text-sm font-bold text-gray-700">
                  Location
                </Listbox.Label>
                <div className="relative mt-1 mb-4">
                  <Listbox.Button className="focus:shadow-outline relative w-full appearance-none rounded border py-2 px-3 text-left leading-tight text-gray-700 shadow focus:outline-none">
                    <span className="block truncate">
                      {selectedLocation.name}
                    </span>
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
                      {loaderData.locations!.map((location) => (
                        <Listbox.Option
                          key={location.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-bokoupBlue-100" : ""
                            }`
                          }
                          value={location.name}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {location.name}
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
              <input
                name="locationId"
                hidden={true}
                value={selectedLocation.id}
              />
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
