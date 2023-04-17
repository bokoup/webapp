import { useState } from "react";
import type { FormFieldProps } from ".";

export default function TextAreaFormField({ ...props }: FormFieldProps) {
  const [value, setValue] = useState(props.value);
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
        onChange={(v) => setValue(v.target.value)}
        value={value}
      />
    </div>
  );
}
