import Icon from "../Icon/Icon";
import useTagInputLogic from "./useTagInputLogic";

interface TagInputProps {
  name: string;
  className?: string;
  placeholder?: string;
}

export function TagInput({
  name,
  className,
  placeholder,
}: Readonly<TagInputProps>) {
  const {
    inputValue,
    handleChange,
    handleKeyDown,
    values,
    getErrorMessage,
    handleRemoveTag,
  } = useTagInputLogic(name);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`border border-gray-300 rounded p-2 w-full ${className}`}
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {((values[name] as string[]) || []).map((tag, index) => (
          <div
            key={index + 1}
            className="inline-flex items-center bg-gray-200 text-gray-700 rounded px-2 py-1 text-sm"
          >
            {tag}
            <button
              type="button"
              className="ml-1 text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleRemoveTag(index)}
            >
              <Icon name="x" className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      {getErrorMessage(name) && (
        <div className="text-red-500 text-sm mt-1">{getErrorMessage(name)}</div>
      )}
    </div>
  );
}
