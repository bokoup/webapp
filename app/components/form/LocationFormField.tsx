import { Switch } from "@headlessui/react";
import { useState } from "react";
import { ILocationItem } from "~/models/merchant.server";

export default function LocationFormField({
  location,
}: {
  location: ILocationItem;
}) {
  const [active, setActive] = useState(true);
  return (
    <>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor="active"
      >
        {active ? "Active" : "Inactive"}
      </label>
      <Switch
        name={location.id}
        checked={active}
        onChange={setActive}
        className={`${
          active ? "bg-bokoupGreen2-400" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Set active</span>
        <span
          className={`${
            active ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
}
