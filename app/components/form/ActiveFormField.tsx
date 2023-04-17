import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function ActiveFormField({ initialValue = true }) {
  const [active, setActive] = useState(initialValue);
  return (
    <div className="mb-4">
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
        <span className="sr-only">Set active</span>
        <span
          className={`${
            active ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
}
