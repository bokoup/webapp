import { PhotoIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { FormFieldProps } from ".";

export default function ImageFormField({ ...props }: FormFieldProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    hiddenFileInput.current!.click();
  };

  let reader: FileReader;
  const _handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.currentTarget.files;
    if (files) {
      reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = (e: ProgressEvent<FileReader>) => {
        setImgSrc(reader.result?.toString());
      };
    }
  };

  return (
    <>
      <div className={"mb-4 flex-shrink-0"}>
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <div
          onClick={(e) => handleClick(e)}
          className={
            imgSrc != undefined
              ? "hidden"
              : "focus:shadow-outline flex h-64 w-64 cursor-pointer rounded border py-2 px-3 shadow focus:outline-none"
          }
        >
          <PhotoIcon className="m-auto h-10 w-10 text-slate-300" />
        </div>
        <img
          src={imgSrc}
          width={256}
          height={256}
          className="focus:shadow-outline h-64 w-64 flex-grow-0 cursor-pointer appearance-none rounded border object-cover py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          alt="preview"
          onClick={(e) => handleClick(e)}
          hidden={imgSrc == undefined}
        />
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          ref={hiddenFileInput}
          id={props.id}
          name={props.id}
          type={props.inputType}
          placeholder={props.label}
          accept={props.accept}
          hidden={props.hidden}
          required
          onChange={_handleFileChange}
        />
      </div>
    </>
  );
}
