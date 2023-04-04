import type { FormFieldProps } from ".";

export default function FormField({ ...props }: FormFieldProps) {
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
        required={props.required}
      />
    </div>
  );
}
