import React, { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { BsEye, BsEyeSlash } from "react-icons/bs";

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
  theme = "light",
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
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchable && props.value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(String(props.value).toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [props.value, options, searchable]);

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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (searchable) {
      setShowOptions(true);
    }
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setTimeout(() => setShowOptions(false), 200);
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validation?.pattern && !validation.pattern.test(e.target.value)) {
      setValidationError(validation.message || "Invalid input");
    } else {
      setValidationError("");
    }
    props.onChange?.(e);
  };

  const handleOptionClick = (option: string) => {
    if (props.onChange) {
      const event = {
        target: { value: option },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
    setShowOptions(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const displayError = error || validationError;
  const isPassword = type === "password";
  const currentLength = String(props.value || "").length;

  const getThemeClasses = () => {
    return {
      label: theme === "dark" ? "text-white" : "text-gray-900",
      input: theme === "dark" ? "text-white" : "text-gray-900",
      border: theme === "dark" ? "border-gray-600" : "border-gray-300",
      icon: theme === "dark" ? "text-gray-400" : "text-gray-500",
      options:
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900",
      optionHover: theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100",
      characterCount: theme === "dark" ? "text-gray-400" : "text-gray-500",
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
          className={`absolute z-50 w-full mt-1 ${themeClasses.options} border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer ${themeClasses.optionHover} ${optionClassName}`}
              onClick={() => handleOptionClick(option)}
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
