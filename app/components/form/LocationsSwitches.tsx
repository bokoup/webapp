import { Switch } from "@headlessui/react";
import { useState } from "react";
import type { ILocationItem } from "~/models/merchant.server";

export default function LocationSwitches({
  locations,
}: {
  locations: ILocationItem[];
}) {
  const [selectedLocations, setSelectedLocations] =
    useState<ILocationItem[]>(locations);

  function isSelected(name: string): boolean {
    return selectedLocations.find((location) => location.name === name)
      ? true
      : false;
  }

  function handleSelect(name: string) {
    if (!isSelected(name)) {
      const newEl = locations.find((location) => location.name === name);
      if (selectedLocations) {
      }
      const selectedLocationsUpdated: ILocationItem[] = selectedLocations
        ? [...selectedLocations, newEl!]
        : [newEl!];
      setSelectedLocations(selectedLocationsUpdated);
    } else {
      handleDeselect(name);
    }
  }

  function handleDeselect(name: string) {
    const selectedLocationsUpdated = selectedLocations.filter(
      (location) => location.name !== name
    );
    setSelectedLocations(selectedLocationsUpdated);
  }

  return (
    <div className="mb-4">
      <h2 className="mb-2 block text-sm font-bold text-gray-700">
        Included Locations
      </h2>
      {locations.map((location) => {
        const selected = isSelected(location.name);
        return (
          <div className="mb-1 flex gap-2 pl-4">
            <Switch
              name={location.name}
              checked={selected}
              onChange={(checked: boolean) => handleSelect(location.name)}
              className={`${
                selected ? "bg-bokoupGreen2-400" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Set active</span>
              <span
                className={`${
                  selected ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <label
              className="mb-2 block text-sm text-gray-700"
              htmlFor={location.name}
            >
              {location.name}
            </label>
          </div>
        );
      })}
      <input
        name="locations"
        hidden={true}
        value={selectedLocations.map((location) => location.id).join("/")}
      />
    </div>
  );
}
