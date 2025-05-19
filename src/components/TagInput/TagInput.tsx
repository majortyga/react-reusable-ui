import React, { useState, KeyboardEvent } from "react";
import { IconType } from "react-icons";
import { BsX } from "react-icons/bs";

export interface TagInputProps {
  label?: string;
  placeholder?: string;
  leftIcon?: IconType;
  tags: string[];
  onChange: (tags: string[]) => void;
  className?: string;
  inputClassName?: string;
  tagClassName?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  placeholder = "Type and press comma to add tags",
  leftIcon: LeftIcon,
  tags,
  onChange,
  className = "",
  inputClassName = "",
  tagClassName = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex flex-wrap gap-2 p-2 border rounded-md dark:border-gray-700 dark:bg-gray-800">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-200 ${tagClassName}`}
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              <BsX className="w-4 h-4" />
            </button>
          </span>
        ))}
        <div className="flex items-center flex-1 min-w-[120px]">
          {LeftIcon && (
            <div className="flex items-center px-2 text-gray-500">
              <LeftIcon className="w-5 h-5" />
            </div>
          )}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ""}
            className={`flex-1 bg-transparent outline-none  ${inputClassName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TagInput;
