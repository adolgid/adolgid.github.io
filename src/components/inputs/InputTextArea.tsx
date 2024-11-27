import { ChangeEventHandler, FocusEventHandler } from "react";

interface Props {
  label: string;
  name: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleBlur: FocusEventHandler<HTMLTextAreaElement>;
  values: any;
  touched: any;
  errors: any;
  isHtml?: boolean;
}
export default function InputTextArea({
  label,
  name,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  isHtml,
}: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={`mt-1 block w-full px-3 py-2 border ${touched[name] && errors[name] ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        {...isHtml && { rows: 10, cols: 30, style: { width: '300px', height: '200px', fontSize: '16px' } }}
      />
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );
}
