import { TagInput } from "../TagInput/TagInput";

interface Props {
  label: string;
  name: string;
  touched: any;
  errors: any;
}
export default function InputTags({ label, name, touched, errors }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <TagInput
        name="technologies"
        className={`mt-1 block w-full px-3 py-2 border ${
          touched[name] && errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        placeholder="Add technologies (e.g., React, TypeScript)..."
      />
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );
}
