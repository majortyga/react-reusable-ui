import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

export interface SelectOption {
  value: string;
  label: string;
  icon?: IconType;
  disabled?: boolean;
  description?: string;
  group?: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  multiple?: boolean;
  searchable?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  maxDisplayedItems?: number;
  groupBy?: string;
  popupPosition?: "top" | "bottom";
  customOptionRenderer?: (option: SelectOption) => React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  selectContainerClassName?: string;
  selectClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  errorClassName?: string;
  optionsContainerClassName?: string;
  searchInputClassName?: string;
  optionsListClassName?: string;
  optionClassName?: string;
  checkmarkClassName?: string;
  groupHeaderClassName?: string;
  noOptionsClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  multiple = false,
  searchable = false,
  leftIcon: LeftIcon,
  disabled = false,
  clearable = false,
  maxDisplayedItems = 3,
  groupBy,
  popupPosition = "bottom",
  customOptionRenderer,
  wrapperClassName = "",
  labelClassName = "",
  selectContainerClassName = "",
  selectClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  errorClassName = "",
  optionsContainerClassName = "",
  searchInputClassName = "",
  optionsListClassName = "",
  optionClassName = "",
  groupHeaderClassName = "",
  noOptionsClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedOptions = groupBy
    ? filteredOptions.reduce((acc, option) => {
        const group =
          (option[groupBy as keyof SelectOption] as string) || "Other";
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(option);
        return acc;
      }, {} as Record<string, SelectOption[]>)
    : { "": filteredOptions };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleSelect(filteredOptions[focusedIndex].value);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(optionValue)
        ? currentValue.filter((v) => v !== optionValue)
        : [...currentValue, optionValue];
      onChange?.(newValue);
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : "");
  };

  const isSelected = (optionValue: string) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };

  const getSelectedLabels = () => {
    if (!value) return placeholder;
    if (multiple) {
      const selectedOptions = options.filter((option) =>
        (value as string[]).includes(option.value)
      );
      if (selectedOptions.length === 0) return placeholder;
      if (selectedOptions.length > maxDisplayedItems) {
        return `${selectedOptions.length} items selected`;
      }
      return selectedOptions.map((option) => option.label).join(", ");
    }
    return (
      options.find((option) => option.value === value)?.label || placeholder
    );
  };

  return (
    <div
      className={`relative flex flex-col gap-1 ${wrapperClassName}`}
      ref={wrapperRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {label && (
        <label
          className={`text-sm font-medium text-black dark:text-white ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center border rounded-md ${
          isOpen ? "ring-2 ring-blue-500 border-blue-500" : "border-gray-300"
        } ${error ? "border-red-500" : ""} ${
          disabled ? "bg-gray-100 dark:bg-gray-800" : ""
        } ${selectContainerClassName}`}
      >
        {LeftIcon && (
          <div
            className={`flex items-center px-3 text-gray-500 dark:text-gray-400 ${iconContainerClassName}`}
          >
            <LeftIcon className={`w-5 h-5 ${iconClassName}`} />
          </div>
        )}
        <div
          className={`flex-1 px-3 py-2 cursor-pointer text-black dark:text-white ${
            disabled ? "cursor-not-allowed" : ""
          } ${selectClassName}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {getSelectedLabels()}
        </div>
        <div className="flex items-center">
          {clearable && value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              ×
            </button>
          )}
          <div
            className={`flex items-center px-3 text-gray-500 dark:text-gray-400 ${iconContainerClassName}`}
          >
            <IoIosArrowDown
              className={`w-5 h-5 cursor-pointer transition-transform ${
                isOpen ? "transform rotate-180" : ""
              } ${iconClassName}`}
              onClick={() => !disabled && setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      {error && (
        <span className={`text-sm text-red-500 ${errorClassName}`}>
          {error}
        </span>
      )}
      {isOpen && (
        <div
          className={`absolute z-[10000] left-0 right-0 max-w-[100vw] overflow-x-auto ${
            popupPosition === "top" ? "bottom-full mb-1" : "top-full mt-1"
          } bg-white dark:bg-gray-800 border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`}
        >
          {searchable && (
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-3 py-2 border-b outline-none text-black dark:text-white dark:bg-gray-800 dark:border-gray-700 ${searchInputClassName}`}
              placeholder="Search..."
            />
          )}
          {Object.entries(groupedOptions).map(([group, groupOptions]) => (
            <div key={group} className={optionsListClassName}>
              {group && (
                <div
                  className={`px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 ${groupHeaderClassName}`}
                >
                  {group}
                </div>
              )}
              {groupOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-black dark:text-white ${
                    isSelected(option.value)
                      ? "bg-blue-50 dark:bg-blue-900"
                      : ""
                  } ${
                    focusedIndex === index ? "bg-gray-100 dark:bg-gray-700" : ""
                  } ${
                    option.disabled ? "opacity-50 cursor-not-allowed" : ""
                  } ${optionClassName}`}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                >
                  {customOptionRenderer ? (
                    customOptionRenderer(option)
                  ) : (
                    <>
                      {option.icon && (
                        <option.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      )}
                      <div className="flex flex-col">
                        <span>{option.label}</span>
                        {option.description && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {option.description}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div
              className={`px-3 py-2 text-gray-500 dark:text-gray-400 text-center ${noOptionsClassName}`}
            >
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
