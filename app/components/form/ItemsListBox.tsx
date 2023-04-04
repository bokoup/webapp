import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import type { ICampaignItem, ILocationItem } from "~/models/merchant.server";

export default function ItemsListBox({
  items,
  label,
  fieldName,
}: {
  items: (ILocationItem | ICampaignItem)[];
  label: string;
  fieldName: string;
}) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleOnChange(value: string) {
    const item = items.filter((item) => item.name == value)[0];
    setSelectedItem(item);
  }

  return (
    <>
      <Listbox value={selectedItem.name} onChange={handleOnChange}>
        <Listbox.Label className="mb-2 block text-sm font-bold text-gray-700">
          {label}
        </Listbox.Label>
        <div className="relative mt-1 mb-4">
          <Listbox.Button className="focus:shadow-outline relative w-full appearance-none rounded border py-2 px-3 text-left leading-tight text-gray-700 shadow focus:outline-none">
            <span className="block truncate">{selectedItem.name}</span>
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
              {items.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-bokoupBlue-100" : ""
                    }`
                  }
                  value={item.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-bokoupGreen2-900">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
      <input name={fieldName} hidden={true} value={selectedItem.id} />
    </>
  );
}
