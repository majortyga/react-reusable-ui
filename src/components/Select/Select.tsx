import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

/**
 * Interface for select options
 * @interface SelectOption
 */
export interface SelectOption {
  /** The value of the option */
  value: string;
  /** The display label for the option */
  label: string;
  /** Optional icon component for the option */
  icon?: IconType;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Optional description text for the option */
  description?: string;
  /** Optional group name for grouping options */
  group?: string;
}

/**
 * Props for the Select component
 * @interface SelectProps
 */
export interface SelectProps {
  /** Array of options to display in the select */
  options: SelectOption[];
  /** Currently selected value(s) */
  value?: string | string[];
  /** Callback fired when selection changes */
  onChange?: (value: string | string[]) => void;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Label text for the select */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Whether multiple selections are allowed */
  multiple?: boolean;
  /** Whether the select is searchable */
  searchable?: boolean;
  /** Icon to display on the left side */
  leftIcon?: IconType;
  /** Icon to display on the right side */
  rightIcon?: IconType;
  /** Additional CSS classes for the select container */
  className?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select can be cleared */
  clearable?: boolean;
  /** Maximum number of items to display in multiple select */
  maxDisplayedItems?: number;
  /** Property name to group options by */
  groupBy?: string;
  /** Position of the options popup */
  popupPosition?: "top" | "bottom";
  /** Custom render function for options */
  customOptionRenderer?: (option: SelectOption) => React.ReactNode;
  /** Additional CSS classes for the wrapper div */
  wrapperClassName?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the select container */
  selectContainerClassName?: string;
  /** Additional CSS classes for the select element */
  selectClassName?: string;
  /** Additional CSS classes for the icon container */
  iconContainerClassName?: string;
  /** Additional CSS classes for the icon */
  iconClassName?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Additional CSS classes for the options container */
  optionsContainerClassName?: string;
  /** Additional CSS classes for the search input */
  searchInputClassName?: string;
  /** Additional CSS classes for the options list */
  optionsListClassName?: string;
  /** Additional CSS classes for individual options */
  optionClassName?: string;
  /** Additional CSS classes for the checkmark */
  checkmarkClassName?: string;
  /** Additional CSS classes for group headers */
  groupHeaderClassName?: string;
  /** Additional CSS classes for the no options message */
  noOptionsClassName?: string;
}

/**
 * A customizable select component with support for single/multiple selection,
 * search, grouping, and custom styling.
 *
 * @component
 * @example
 * ```tsx
 * <Select
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]}
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   placeholder="Select an option"
 *   searchable
 *   multiple
 * />
 * ```
 *
 * @example With custom styling
 * ```tsx
 * <Select
 *   options={options}
 *   value={value}
 *   onChange={onChange}
 *   className="custom-select"
 *   optionClassName="custom-option"
 *   wrapperClassName="custom-wrapper"
 * />
 * ```
 */
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
        <label className={`text-sm font-medium  ${labelClassName}`}>
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center border rounded-md ${
          isOpen
            ? "ring-2 ring-blue-500 border-blue-500"
            : "border-gray-300 dark:border-gray-600"
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
          className={`flex-1 px-3 py-2 cursor-pointer ${
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
          <div className={`flex items-center px-3  ${iconContainerClassName}`}>
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
          } rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`}
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
                  className={`px-3 py-1 text-sm font-medium  ${groupHeaderClassName}`}
                >
                  {group}
                </div>
              )}
              {groupOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-violet-700 flex items-center gap-2 ${
                    isSelected(option.value)
                      ? "bg-blue-50 dark:bg-violet-900"
                      : ""
                  } ${
                    focusedIndex === index
                      ? "bg-gray-100 dark:bg-violet-700"
                      : ""
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
            <div className={`px-3 py-2 text-center ${noOptionsClassName}`}>
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
