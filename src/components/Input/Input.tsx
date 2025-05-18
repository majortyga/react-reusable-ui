import React, { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type MaskType =
  | "phone"
  | "date"
  | "credit-card"
  | "ssn"
  | "zip"
  | "currency"
  | "custom";

interface MaskOptions {
  type: MaskType;
  pattern?: string; // For custom masks
  placeholder?: string; // For custom masks
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IconType;
  rightIcon?: IconType;
  label?: string;
  error?: string;
  searchable?: boolean;
  options?: string[];
  maxLength?: number;
  showCharacterCount?: boolean;
  type?: string;
  theme?: "light" | "dark";
  mask?: MaskOptions;
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
  wrapperClassName?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  errorClassName?: string;
  optionsContainerClassName?: string;
  optionClassName?: string;
  characterCountClassName?: string;
}

const Input: React.FC<InputProps> = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  label,
  error,
  searchable = false,
  options = [],
  maxLength,
  showCharacterCount = false,
  type = "text",
  theme,
  mask,
  validation,
  wrapperClassName = "",
  labelClassName = "",
  inputContainerClassName = "",
  inputClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  errorClassName = "",
  optionsContainerClassName = "",
  optionClassName = "",
  characterCountClassName = "",
  value,
  defaultValue,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState<string>("");
  const [inputValue, setInputValue] = useState(value || defaultValue || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Mask patterns
  const maskPatterns = {
    phone: {
      pattern: "(###) ###-####",
      placeholder: "_",
    },
    date: {
      pattern: "##/##/####",
      placeholder: "_",
    },
    "credit-card": {
      pattern: "#### #### #### ####",
      placeholder: "_",
    },
    ssn: {
      pattern: "###-##-####",
      placeholder: "_",
    },
    zip: {
      pattern: "#####-####",
      placeholder: "_",
    },
    currency: {
      pattern: "$#,##0.00",
      placeholder: "_",
    },
  };

  const unapplyMask = (maskedValue: string, maskType: MaskType) => {
    if (!maskType) return maskedValue;

    if (maskType === "currency") {
      // Remove currency symbol, commas, and convert to cents
      return maskedValue.replace(/[$,]/g, "");
    }

    return maskedValue.replace(/\D/g, "");
  };

  const applyMask = (
    value: string,
    maskType: MaskType,
    customPattern?: string
  ) => {
    if (!maskType) return value;

    const maskConfig =
      maskType === "custom"
        ? {
            pattern: customPattern || "",
            placeholder: mask?.placeholder || "_",
          }
        : maskPatterns[maskType];

    if (!maskConfig?.pattern) return value;

    if (maskType === "currency") {
      // Handle currency formatting
      const numericValue = value.replace(/[$,]/g, "");
      if (!numericValue) return "";

      // Convert to number and format with 2 decimal places
      const amount = parseFloat(numericValue) / 100;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    }

    let result = "";
    let valueIndex = 0;

    // Remove any non-digit characters from the input value
    const digitsOnly = value.replace(/\D/g, "");

    for (let i = 0; i < maskConfig.pattern.length; i++) {
      if (valueIndex >= digitsOnly.length) {
        if (maskConfig.pattern[i] === "#") {
          result += maskConfig.placeholder;
        } else {
          result += maskConfig.pattern[i];
        }
      } else if (maskConfig.pattern[i] === "#") {
        result += digitsOnly[valueIndex];
        valueIndex++;
      } else {
        result += maskConfig.pattern[i];
      }
    }

    return result;
  };

  // Reset filtered options when options prop changes
  useEffect(() => {
    if (searchable) {
      setFilteredOptions(options);
    }
  }, [options, searchable]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (mask) {
      // Check if this is a backspace event
      const isBackspace =
        e.nativeEvent instanceof InputEvent &&
        e.nativeEvent.inputType === "deleteContentBackward";

      if (isBackspace) {
        // Remove the last character from the unmasked value
        const unmaskedValue = unapplyMask(String(inputValue), mask.type);
        newValue = applyMask(
          unmaskedValue.slice(0, -1),
          mask.type,
          mask.pattern
        );
      } else {
        // Normal input - apply mask to the new value
        const unmaskedValue = unapplyMask(newValue, mask.type);
        newValue = applyMask(unmaskedValue, mask.type, mask.pattern);
      }
    }

    // Update internal state
    setInputValue(newValue);

    // Update filtered options for searchable input
    if (searchable) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    }

    if (validation?.pattern && !validation.pattern.test(newValue)) {
      setValidationError(validation.message || "Invalid input");
    } else {
      setValidationError("");
    }

    // Call onChange with the original event
    if (props.onChange) {
      const event = {
        ...e,
        target: {
          ...e.target,
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (searchable) {
      setShowOptions(true);
      setFilteredOptions(options);
    }
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    // Delay hiding options to allow for click
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
    props.onBlur?.(e);
  };

  const handleOptionClick = (option: string) => {
    let newValue = option;

    // Apply mask if needed
    if (mask) {
      newValue = applyMask(option, mask.type, mask.pattern);
    }

    // Update the input value
    setInputValue(newValue);

    // Create a synthetic event
    const syntheticEvent = {
      target: {
        value: newValue,
        name: props.name,
        type: "text",
      },
      currentTarget: {
        value: newValue,
        name: props.name,
        type: "text",
      },
      preventDefault: () => {},
      stopPropagation: () => {},
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    // Call onChange with the synthetic event
    if (props.onChange) {
      props.onChange(syntheticEvent);
    }

    // Hide options after selection
    setShowOptions(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const displayError = error || validationError;
  const isPassword = type === "password";
  const currentLength = String(inputValue).length;

  const getThemeClasses = () => {
    if (theme) {
      return {
        label: theme === "dark" ? "text-white" : "text-gray-900",
        input: theme === "dark" ? "text-white" : "text-gray-900",
        border: theme === "dark" ? "border-gray-600" : "border-gray-300",
        icon: theme === "dark" ? "text-gray-400" : "text-gray-500",
        options:
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-900",
        optionHover:
          theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100",
        characterCount: theme === "dark" ? "text-gray-400" : "text-gray-500",
      };
    }

    // Default to Tailwind's dark mode classes when theme is not set
    return {
      label: "text-gray-900 dark:text-white",
      input: "text-gray-900 dark:text-white",
      border: "border-gray-300 dark:border-gray-600",
      icon: "text-gray-500 dark:text-gray-400",
      options: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
      optionHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
      characterCount: "text-gray-500 dark:text-gray-400",
    };
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`relative flex flex-col gap-1 ${wrapperClassName}`}>
      {label && (
        <label
          className={`text-sm font-medium ${themeClasses.label} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center border rounded-md ${
          isFocused
            ? "ring-2 ring-blue-500 border-blue-500"
            : themeClasses.border
        } ${displayError ? "border-red-500" : ""} ${inputContainerClassName}`}
      >
        {LeftIcon && (
          <div
            className={`flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`}
          >
            <LeftIcon className={`w-5 h-5 ${iconClassName}`} />
          </div>
        )}
        <input
          {...props}
          ref={inputRef}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className={`w-full px-3 py-2 bg-transparent outline-none ${themeClasses.input} ${inputClassName}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
          value={inputValue}
          placeholder={
            mask ? applyMask("", mask.type, mask.pattern) : props.placeholder
          }
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`}
          >
            {showPassword ? (
              <BsEyeSlash className={`w-5 h-5 ${iconClassName}`} />
            ) : (
              <BsEye className={`w-5 h-5 ${iconClassName}`} />
            )}
          </button>
        )}
        {RightIcon && !isPassword && (
          <div
            className={`flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`}
          >
            <RightIcon className={`w-5 h-5 ${iconClassName}`} />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        {displayError && (
          <span className={`text-sm text-red-500 ${errorClassName}`}>
            {displayError}
          </span>
        )}
        {showCharacterCount && maxLength && (
          <span
            className={`text-sm ${themeClasses.characterCount} ml-auto ${characterCountClassName}`}
          >
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
      {searchable && showOptions && filteredOptions.length > 0 && (
        <div
          ref={optionsRef}
          className={`absolute z-50 w-full mt-1 top-full ${themeClasses.options} border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer ${themeClasses.optionHover} ${optionClassName}`}
              onMouseDown={(e) => {
                e.preventDefault();
                handleOptionClick(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
