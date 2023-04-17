export interface TransactionResponse {
  transaction: string;
  message: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  inputType: string;
  placeholder?: string;
  accept?: string;
  hidden?: boolean;
  rows?: number;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
}

export const imageFormField: FormFieldProps = {
  id: "image",
  label: "Image",
  inputType: "file",
  accept: "image/*",
  hidden: true,
};

export const descriptionFormField: FormFieldProps = {
  id: "description",
  label: "Description",
  inputType: "text",
  rows: 5,
};
