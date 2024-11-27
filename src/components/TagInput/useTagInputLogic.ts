import { FormikValues, useFormikContext } from "formik";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { createTag, isTagValid } from "../../config/utils";

export default function useTagInputLogic(name: string) {
  const { values, setFieldValue, setFieldError, errors } =
    useFormikContext<FormikValues>();
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "," || event.key === "Enter") {
      event.preventDefault();
      const newTag = createTag(inputValue);

      if (newTag) {
        const existingTags = (values[name] as string[]) || [];
        if (isTagValid(newTag, existingTags)) {
          // Update Formik state with the new tag
          setFieldValue(name, [...existingTags, newTag]);
          setInputValue(""); // Clear input field
          setFieldError(name, ""); // Clear previous errors
        } else {
          // If tag is duplicate, set Formik error
          setFieldError(name, "Tag already exists.");
        }
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleRemoveTag = (index: number) => {
    const existingTags = (values[name] as string[]) || [];
    const updatedTags = existingTags.filter((_, i) => i !== index);
    setFieldValue(name, updatedTags);
  };

  // Safe way to access errors
  const getErrorMessage = (name: string): string | undefined => {
    const error = errors; // Type assertion to FormikErrors
    if (error[name]) {
      return typeof error[name] === "string" ? error[name] : undefined;
    }
    return undefined;
  };

  return {
    handleChange,
    getErrorMessage,
    handleRemoveTag,
    handleKeyDown,
    values,
    inputValue,
  };
}
