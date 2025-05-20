var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Input/Input.tsx
import React, { useState, useEffect, useRef } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
var Input = (_a) => {
  var _b = _a, {
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
    defaultValue
  } = _b, props = __objRest(_b, [
    "leftIcon",
    "rightIcon",
    "label",
    "error",
    "searchable",
    "options",
    "maxLength",
    "showCharacterCount",
    "type",
    "theme",
    "mask",
    "validation",
    "wrapperClassName",
    "labelClassName",
    "inputContainerClassName",
    "inputClassName",
    "iconContainerClassName",
    "iconClassName",
    "errorClassName",
    "optionsContainerClassName",
    "optionClassName",
    "characterCountClassName",
    "value",
    "defaultValue"
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [inputValue, setInputValue] = useState(value || defaultValue || "");
  const inputRef = useRef(null);
  const optionsRef = useRef(null);
  const maskPatterns = {
    phone: {
      pattern: "(###) ###-####",
      placeholder: "_"
    },
    date: {
      pattern: "##/##/####",
      placeholder: "_"
    },
    "credit-card": {
      pattern: "#### #### #### ####",
      placeholder: "_"
    },
    ssn: {
      pattern: "###-##-####",
      placeholder: "_"
    },
    zip: {
      pattern: "#####-####",
      placeholder: "_"
    },
    currency: {
      pattern: "$#,##0.00",
      placeholder: "_"
    }
  };
  const unapplyMask = (maskedValue, maskType) => {
    if (!maskType) return maskedValue;
    if (maskType === "currency") {
      return maskedValue.replace(/[$,]/g, "");
    }
    return maskedValue.replace(/\D/g, "");
  };
  const applyMask = (value2, maskType, customPattern) => {
    if (!maskType) return value2;
    const maskConfig = maskType === "custom" ? {
      pattern: customPattern || "",
      placeholder: (mask == null ? void 0 : mask.placeholder) || "_"
    } : maskPatterns[maskType];
    if (!(maskConfig == null ? void 0 : maskConfig.pattern)) return value2;
    if (maskType === "currency") {
      const numericValue = value2.replace(/[$,]/g, "");
      if (!numericValue) return "";
      const amount = parseFloat(numericValue) / 100;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    }
    let result = "";
    let valueIndex = 0;
    const digitsOnly = value2.replace(/\D/g, "");
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
  useEffect(() => {
    if (searchable) {
      setFilteredOptions(options);
    }
  }, [options, searchable]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (value !== void 0) {
      setInputValue(value);
    }
  }, [value]);
  const handleChange = (e) => {
    let newValue = e.target.value;
    if (mask) {
      const isBackspace = e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === "deleteContentBackward";
      if (isBackspace) {
        const unmaskedValue = unapplyMask(String(inputValue), mask.type);
        newValue = applyMask(
          unmaskedValue.slice(0, -1),
          mask.type,
          mask.pattern
        );
      } else {
        const unmaskedValue = unapplyMask(newValue, mask.type);
        newValue = applyMask(unmaskedValue, mask.type, mask.pattern);
      }
    }
    setInputValue(newValue);
    if (searchable) {
      const filtered = options.filter(
        (option) => option.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    }
    if ((validation == null ? void 0 : validation.pattern) && !validation.pattern.test(newValue)) {
      setValidationError(validation.message || "Invalid input");
    } else {
      setValidationError("");
    }
    if (props.onChange) {
      const event = __spreadProps(__spreadValues({}, e), {
        target: __spreadProps(__spreadValues({}, e.target), {
          value: newValue
        })
      });
      props.onChange(event);
    }
  };
  const handleFocus = (e) => {
    var _a2;
    setIsFocused(true);
    if (searchable) {
      setShowOptions(true);
      setFilteredOptions(options);
    }
    (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
  };
  const handleBlur = (e) => {
    var _a2;
    setIsFocused(false);
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
    (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
  };
  const handleOptionClick = (option) => {
    let newValue = option;
    if (mask) {
      newValue = applyMask(option, mask.type, mask.pattern);
    }
    setInputValue(newValue);
    const syntheticEvent = {
      target: {
        value: newValue,
        name: props.name,
        type: "text"
      },
      currentTarget: {
        value: newValue,
        name: props.name,
        type: "text"
      },
      preventDefault: () => {
      },
      stopPropagation: () => {
      }
    };
    if (props.onChange) {
      props.onChange(syntheticEvent);
    }
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
        options: theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900",
        optionHover: theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100",
        characterCount: theme === "dark" ? "text-gray-400" : "text-gray-500"
      };
    }
    return {
      label: "text-gray-900 dark:text-white",
      input: "text-gray-900 dark:text-white",
      border: "border-gray-300 dark:border-gray-600",
      icon: "text-gray-500 dark:text-gray-400",
      options: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
      optionHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
      characterCount: "text-gray-500 dark:text-gray-400"
    };
  };
  const themeClasses = getThemeClasses();
  return /* @__PURE__ */ React.createElement("div", { className: `relative flex flex-col gap-1 ${wrapperClassName}` }, label && /* @__PURE__ */ React.createElement(
    "label",
    {
      className: `text-sm font-medium ${themeClasses.label} ${labelClassName}`
    },
    label
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `relative flex items-center border rounded-md ${isFocused ? "ring-2 ring-blue-500 border-blue-500" : themeClasses.border} ${displayError ? "border-red-500" : ""} ${inputContainerClassName}`
    },
    LeftIcon && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      /* @__PURE__ */ React.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })
    ),
    /* @__PURE__ */ React.createElement(
      "input",
      __spreadProps(__spreadValues({}, props), {
        ref: inputRef,
        type: isPassword ? showPassword ? "text" : "password" : type,
        className: `w-full px-3 py-2 bg-transparent outline-none ${themeClasses.input} ${inputClassName}`,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        maxLength,
        value: inputValue,
        placeholder: mask ? applyMask("", mask.type, mask.pattern) : props.placeholder
      })
    ),
    isPassword && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: togglePasswordVisibility,
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      showPassword ? /* @__PURE__ */ React.createElement(BsEyeSlash, { className: `w-5 h-5 ${iconClassName}` }) : /* @__PURE__ */ React.createElement(BsEye, { className: `w-5 h-5 ${iconClassName}` })
    ),
    RightIcon && !isPassword && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      /* @__PURE__ */ React.createElement(RightIcon, { className: `w-5 h-5 ${iconClassName}` })
    )
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, displayError && /* @__PURE__ */ React.createElement("span", { className: `text-sm text-red-500 ${errorClassName}` }, displayError), showCharacterCount && maxLength && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `text-sm ${themeClasses.characterCount} ml-auto ${characterCountClassName}`
    },
    currentLength,
    "/",
    maxLength
  )), searchable && showOptions && filteredOptions.length > 0 && /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: optionsRef,
      className: `absolute z-50 w-full mt-1 top-full ${themeClasses.options} border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`
    },
    filteredOptions.map((option, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: `px-3 py-2 cursor-pointer ${themeClasses.optionHover} ${optionClassName}`,
        onMouseDown: (e) => {
          e.preventDefault();
          handleOptionClick(option);
        }
      },
      option
    ))
  ));
};
var Input_default = Input;

// src/components/Select/Select.tsx
import React2, { useState as useState2, useEffect as useEffect2, useRef as useRef2 } from "react";
import { IoIosArrowDown } from "react-icons/io";
var Select = ({
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
  noOptionsClassName = ""
}) => {
  const [isOpen, setIsOpen] = useState2(false);
  const [searchQuery, setSearchQuery] = useState2("");
  const [focusedIndex, setFocusedIndex] = useState2(-1);
  const wrapperRef = useRef2(null);
  const searchInputRef = useRef2(null);
  const filteredOptions = options.filter(
    (option) => option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const groupedOptions = groupBy ? filteredOptions.reduce((acc, option) => {
    const group = option[groupBy] || "Other";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {}) : { "": filteredOptions };
  useEffect2(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect2(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);
  const handleKeyDown = (e) => {
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
        setFocusedIndex(
          (prev) => Math.min(prev + 1, filteredOptions.length - 1)
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
  const handleSelect = (optionValue) => {
    if (multiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(optionValue) ? currentValue.filter((v) => v !== optionValue) : [...currentValue, optionValue];
      onChange == null ? void 0 : onChange(newValue);
    } else {
      onChange == null ? void 0 : onChange(optionValue);
      setIsOpen(false);
    }
  };
  const handleClear = (e) => {
    e.stopPropagation();
    onChange == null ? void 0 : onChange(multiple ? [] : "");
  };
  const isSelected = (optionValue) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };
  const getSelectedLabels = () => {
    var _a;
    if (!value) return placeholder;
    if (multiple) {
      const selectedOptions = options.filter(
        (option) => value.includes(option.value)
      );
      if (selectedOptions.length === 0) return placeholder;
      if (selectedOptions.length > maxDisplayedItems) {
        return `${selectedOptions.length} items selected`;
      }
      return selectedOptions.map((option) => option.label).join(", ");
    }
    return ((_a = options.find((option) => option.value === value)) == null ? void 0 : _a.label) || placeholder;
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: `relative flex flex-col gap-1 ${wrapperClassName}`,
      ref: wrapperRef,
      onKeyDown: handleKeyDown,
      tabIndex: 0
    },
    label && /* @__PURE__ */ React2.createElement("label", { className: `text-sm font-medium  ${labelClassName}` }, label),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: `relative flex items-center border rounded-md ${isOpen ? "ring-2 ring-blue-500 border-blue-500" : "border-gray-300 dark:border-gray-600"} ${error ? "border-red-500" : ""} ${disabled ? "bg-gray-100 dark:bg-gray-800" : ""} ${selectContainerClassName}`
      },
      LeftIcon && /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `flex items-center px-3 text-gray-500 dark:text-gray-400 ${iconContainerClassName}`
        },
        /* @__PURE__ */ React2.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `flex-1 px-3 py-2 cursor-pointer ${disabled ? "cursor-not-allowed" : ""} ${selectClassName}`,
          onClick: () => !disabled && setIsOpen(!isOpen)
        },
        getSelectedLabels()
      ),
      /* @__PURE__ */ React2.createElement("div", { className: "flex items-center" }, clearable && value && /* @__PURE__ */ React2.createElement(
        "button",
        {
          type: "button",
          onClick: handleClear,
          className: "p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        },
        "\xD7"
      ), /* @__PURE__ */ React2.createElement("div", { className: `flex items-center px-3  ${iconContainerClassName}` }, /* @__PURE__ */ React2.createElement(
        IoIosArrowDown,
        {
          className: `w-5 h-5 cursor-pointer transition-transform ${isOpen ? "transform rotate-180" : ""} ${iconClassName}`,
          onClick: () => !disabled && setIsOpen(!isOpen)
        }
      )))
    ),
    error && /* @__PURE__ */ React2.createElement("span", { className: `text-sm text-red-500 ${errorClassName}` }, error),
    isOpen && /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: `absolute z-[10000] left-0 right-0 max-w-[100vw] overflow-x-auto ${popupPosition === "top" ? "bottom-full mb-1" : "top-full mt-1"} rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`
      },
      searchable && /* @__PURE__ */ React2.createElement(
        "input",
        {
          ref: searchInputRef,
          type: "text",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: `w-full px-3 py-2 border-b outline-none text-black dark:text-white dark:bg-gray-800 dark:border-gray-700 ${searchInputClassName}`,
          placeholder: "Search..."
        }
      ),
      Object.entries(groupedOptions).map(([group, groupOptions]) => /* @__PURE__ */ React2.createElement("div", { key: group, className: optionsListClassName }, group && /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `px-3 py-1 text-sm font-medium  ${groupHeaderClassName}`
        },
        group
      ), groupOptions.map((option, index) => /* @__PURE__ */ React2.createElement(
        "div",
        {
          key: option.value,
          className: `px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-violet-700 flex items-center gap-2 ${isSelected(option.value) ? "bg-blue-50 dark:bg-violet-900" : ""} ${focusedIndex === index ? "bg-gray-100 dark:bg-violet-700" : ""} ${option.disabled ? "opacity-50 cursor-not-allowed" : ""} ${optionClassName}`,
          onClick: () => !option.disabled && handleSelect(option.value)
        },
        customOptionRenderer ? customOptionRenderer(option) : /* @__PURE__ */ React2.createElement(React2.Fragment, null, option.icon && /* @__PURE__ */ React2.createElement(option.icon, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" }), /* @__PURE__ */ React2.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React2.createElement("span", null, option.label), option.description && /* @__PURE__ */ React2.createElement("span", { className: "text-sm text-gray-500 dark:text-gray-400" }, option.description)))
      )))),
      filteredOptions.length === 0 && /* @__PURE__ */ React2.createElement("div", { className: `px-3 py-2 text-center ${noOptionsClassName}` }, "No options found")
    )
  );
};
var Select_default = Select;

// src/components/Button/Button.tsx
import React3 from "react";
var Button = (_a) => {
  var _b = _a, {
    children,
    variant = "primary",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    isLoading = false,
    fullWidth = false,
    disabled,
    className = "",
    iconContainerClassName = "",
    iconClassName = "",
    spinnerClassName = "",
    theme = "light",
    colors
  } = _b, props = __objRest(_b, [
    "children",
    "variant",
    "size",
    "leftIcon",
    "rightIcon",
    "isLoading",
    "fullWidth",
    "disabled",
    "className",
    "iconContainerClassName",
    "iconClassName",
    "spinnerClassName",
    "theme",
    "colors"
  ]);
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const getVariantClasses = () => {
    if (colors) {
      return `${colors.base || ""} ${colors.text || ""} ${colors.hover || ""} ${colors.focus ? `focus:ring-${colors.focus}` : ""}`;
    }
    const variantClasses = {
      primary: theme === "dark" ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400" : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500" : "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline: theme === "dark" ? "border-2 border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500" : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
      ghost: theme === "dark" ? "text-gray-300 hover:bg-gray-700 focus:ring-gray-500" : "text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
    };
    return variantClasses[variant];
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  return /* @__PURE__ */ React3.createElement(
    "button",
    __spreadValues({
      className: `${baseClasses} ${getVariantClasses()} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`,
      disabled: disabled || isLoading
    }, props),
    isLoading && /* @__PURE__ */ React3.createElement(
      "svg",
      {
        className: `animate-spin -ml-1 mr-2 h-4 w-4 ${spinnerClassName}`,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React3.createElement(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ React3.createElement(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ),
    !isLoading && LeftIcon && /* @__PURE__ */ React3.createElement("div", { className: `mr-2 ${iconContainerClassName}` }, /* @__PURE__ */ React3.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })),
    children,
    !isLoading && RightIcon && /* @__PURE__ */ React3.createElement("div", { className: `ml-2 ${iconContainerClassName}` }, /* @__PURE__ */ React3.createElement(RightIcon, { className: `w-5 h-5 ${iconClassName}` }))
  );
};
var Button_default = Button;

// src/components/Modal/Modal.tsx
import React4, { useEffect as useEffect3, useRef as useRef3, useState as useState3, useCallback } from "react";
import { IoClose } from "react-icons/io5";
var Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position: modalPosition = "center",
  closeOnEsc = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  overlayClassName = "",
  contentClassName = "bg-white dark:bg-gray-800",
  headerClassName = "",
  titleClassName = "",
  closeButtonClassName = "",
  bodyClassName = "",
  footer,
  footerClassName = "",
  animation = "fade",
  animationDuration = "normal",
  initialFocus,
  backdropBlur = false,
  draggable = false,
  resizable = false,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  backdropColor = "rgba(0, 0, 0, 0.5)"
}) => {
  const modalRef = useRef3(null);
  const previousFocus = useRef3(null);
  const [isDragging, setIsDragging] = useState3(false);
  const [dragPosition, setDragPosition] = useState3({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState3({ x: 0, y: 0 });
  const modalBounds = useRef3({
    width: 0,
    height: 0
  });
  const initialPosition = useRef3({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState3(false);
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [isClosing, onClose]);
  useEffect3(() => {
    var _a;
    const handleEsc = (event) => {
      if (closeOnEsc && event.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      const focusableElements = (_a = modalRef.current) == null ? void 0 : _a.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements == null ? void 0 : focusableElements[0];
      const lastFocusable = focusableElements == null ? void 0 : focusableElements[focusableElements.length - 1];
      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable == null ? void 0 : lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable == null ? void 0 : firstFocusable.focus();
            }
          }
        }
      };
      document.addEventListener("keydown", handleTabKey);
      if (initialFocus == null ? void 0 : initialFocus.current) {
        initialFocus.current.focus();
      } else if (firstFocusable) {
        firstFocusable.focus();
      }
      return () => {
        document.removeEventListener("keydown", handleTabKey);
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, closeOnEsc, initialFocus]);
  useEffect3(() => {
    if (isOpen) {
      setIsClosing(false);
      previousFocus.current = document.activeElement;
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();
        modalBounds.current = {
          width: rect.width,
          height: rect.height
        };
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        initialPosition.current = {
          x: (viewportWidth - rect.width) / 2,
          y: (viewportHeight - rect.height) / 2
        };
        setDragPosition(initialPosition.current);
      }
    }
    return () => {
      var _a;
      (_a = previousFocus.current) == null ? void 0 : _a.focus();
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const constrainToViewport = (x, y) => {
    const { width, height } = modalBounds.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 20;
    const minX = padding;
    const maxX = viewportWidth - width - padding;
    const minY = padding;
    const maxY = viewportHeight - height - padding;
    const constrainedX = Math.min(Math.max(x, minX), maxX);
    const constrainedY = Math.min(Math.max(y, minY), maxY);
    return { x: constrainedX, y: constrainedY };
  };
  const handleDragStart = (e) => {
    if (!draggable) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y
    });
  };
  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    const constrained = constrainToViewport(newX, newY);
    setDragPosition(constrained);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  if (!isOpen && !isClosing) return null;
  const sizeClasses = {
    sm: "max-w-sm",
    // 24rem
    md: "max-w-md",
    // 28rem
    lg: "max-w-lg",
    // 32rem
    xl: "max-w-xl",
    // 36rem
    "2xl": "max-w-2xl",
    // 42rem
    "3xl": "max-w-3xl",
    // 48rem
    "4xl": "max-w-4xl",
    // 56rem
    "5xl": "max-w-5xl",
    // 64rem
    "6xl": "max-w-6xl",
    // 72rem
    "7xl": "max-w-7xl",
    // 80rem
    full: "max-w-full mx-4",
    screen: "w-screen h-screen max-w-none rounded-none"
  };
  const positionClasses = {
    center: "items-center justify-center",
    top: "items-start justify-center pt-16",
    bottom: "items-end justify-center pb-16",
    left: "items-center justify-start pl-16",
    right: "items-center justify-end pr-16"
  };
  const animationClasses = {
    fade: "animate-fade-in",
    slide: "animate-slide-in",
    zoom: "animate-zoom-in",
    bounce: "animate-bounce-in",
    flip: "animate-flip-in",
    none: ""
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  const modalStyle = {
    transform: draggable ? `translate(${dragPosition.x}px, ${dragPosition.y}px)` : void 0,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  };
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `fixed inset-0 z-50 flex ${positionClasses[modalPosition]}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "modal-title" : void 0
    },
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: `fixed inset-0 transition-opacity ${backdropBlur ? "backdrop-blur-sm" : ""} ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${durationClasses[animationDuration]} ${overlayClassName}`,
        onClick: closeOnOverlayClick ? handleClose : void 0,
        "aria-hidden": "true",
        style: {
          backgroundColor: backdropColor
        }
      }
    ),
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        ref: modalRef,
        style: __spreadProps(__spreadValues({}, modalStyle), {
          position: draggable ? "fixed" : "relative",
          left: draggable ? `${dragPosition.x}px` : void 0,
          top: draggable ? `${dragPosition.y}px` : void 0,
          transform: draggable ? "none" : void 0,
          margin: draggable ? 0 : void 0
        }),
        className: `rounded-lg shadow-xl w-full ${draggable ? "" : "mx-4"} ${sizeClasses[size]} ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${durationClasses[animationDuration]} ${resizable ? "resize" : ""} ${contentClassName}`,
        role: "document",
        onMouseDown: handleDragStart,
        onMouseMove: handleDrag,
        onMouseUp: handleDragEnd,
        onMouseLeave: handleDragEnd
      },
      (title || showCloseButton) && /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${draggable ? "cursor-move" : ""} ${headerClassName}`
        },
        title && /* @__PURE__ */ React4.createElement(
          "h2",
          {
            id: "modal-title",
            className: `text-lg font-medium text-gray-900 dark:text-gray-100 ${titleClassName}`
          },
          title
        ),
        showCloseButton && /* @__PURE__ */ React4.createElement(
          "button",
          {
            onClick: handleClose,
            className: `p-1 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full ${closeButtonClassName}`,
            "aria-label": "Close modal"
          },
          /* @__PURE__ */ React4.createElement(IoClose, { className: "w-6 h-6" })
        )
      ),
      /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `px-6 py-4 text-gray-900 dark:text-gray-100 ${bodyClassName}`
        },
        children
      ),
      footer && /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg ${footerClassName}`
        },
        footer
      )
    )
  );
};
var Modal_default = Modal;

// src/components/Skeleton/Skeleton.tsx
import React5 from "react";
var Skeleton = ({
  type = "text",
  width,
  height,
  className = "",
  animation = "pulse",
  rounded = true,
  count = 1,
  gap = 8,
  direction = "column",
  variant = "light",
  speed = "normal"
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700";
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    shimmer: "animate-shimmer",
    none: ""
  };
  const speedClasses = {
    slow: "duration-1000",
    normal: "duration-500",
    fast: "duration-300"
  };
  const variantClasses = {
    light: "bg-gray-200 dark:bg-gray-700",
    dark: "bg-gray-300 dark:bg-gray-600"
  };
  const getTypeClasses = () => {
    switch (type) {
      case "text":
        return "h-4";
      case "circle":
        return "rounded-full";
      case "rectangle":
        return "rounded-md";
      case "avatar":
        return "rounded-full";
      case "card":
        return "rounded-lg p-4 space-y-3";
      case "list":
        return "rounded-md space-y-2";
      case "table":
        return "rounded-md";
      default:
        return "";
    }
  };
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" }),
          /* @__PURE__ */ React5.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React5.createElement("div", { className: "h-3 w-full bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" }))
        );
      case "list":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          [...Array(3)].map((_, i) => /* @__PURE__ */ React5.createElement(
            "div",
            {
              key: i,
              className: "h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"
            }
          ))
        );
      case "table":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          /* @__PURE__ */ React5.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" }), [...Array(3)].map((_, i) => /* @__PURE__ */ React5.createElement("div", { key: i, className: "flex space-x-2" }, /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }))))
        );
      default:
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${rounded ? "rounded" : ""} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          }
        );
    }
  };
  const containerStyle = {
    display: "flex",
    flexDirection: direction,
    gap: `${gap}px`
  };
  return /* @__PURE__ */ React5.createElement("div", { style: containerStyle }, [...Array(count)].map((_, index) => /* @__PURE__ */ React5.createElement("div", { key: index }, renderSkeleton())));
};
var Skeleton_default = Skeleton;

// src/components/Card/Card.tsx
import React6 from "react";
var Card = ({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  variant = "default",
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = "",
  onClick,
  image,
  hoverEffect = "none",
  loading = false,
  skeleton = false,
  metadata,
  link,
  colors = {}
}) => {
  const getVariantClasses = () => {
    const baseClasses = {
      bg: colors.bg || "bg-white dark:bg-gray-800",
      border: colors.border || "border-gray-200 dark:border-gray-700",
      text: colors.text || "text-gray-900 dark:text-white"
    };
    switch (variant) {
      case "bordered":
        return `border ${baseClasses.border}`;
      case "elevated":
        return `${baseClasses.bg} shadow-lg hover:shadow-xl transition-shadow duration-200`;
      case "news":
        return `${baseClasses.bg} overflow-hidden relative`;
      default:
        return baseClasses.bg;
    }
  };
  const getHoverEffectClasses = () => {
    const hoverColor = colors.hover || "rgba(0,0,0,0.1)";
    switch (hoverEffect) {
      case "scale":
        return "transition-transform duration-200 hover:scale-105";
      case "lift":
        return "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";
      case "glow":
        return `transition-all duration-200 hover:shadow-[0_0_15px_${hoverColor}]`;
      default:
        return "";
    }
  };
  const getImageClasses = () => {
    if (!image) return "";
    const aspectRatioClasses = {
      square: "aspect-square",
      video: "aspect-video",
      auto: ""
    };
    const positionClasses = {
      top: "w-full",
      bottom: "w-full order-last",
      left: "w-full md:w-1/3",
      right: "w-full md:w-1/3 order-last"
    };
    return [
      aspectRatioClasses[image.aspectRatio || "auto"],
      positionClasses[image.position || "top"],
      "relative overflow-hidden flex-shrink-0"
    ].join(" ");
  };
  const renderImage = () => {
    if (!image) return null;
    const overlayColor = image.overlayColor || colors.overlay || "rgba(0,0,0,0.4)";
    return /* @__PURE__ */ React6.createElement("div", { className: getImageClasses() }, /* @__PURE__ */ React6.createElement(
      "img",
      {
        src: image.src,
        alt: image.alt || "",
        className: "w-full h-full object-cover block",
        loading: "lazy",
        onError: (e) => {
          const target = e.target;
          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage not found%3C/text%3E%3C/svg%3E`;
        },
        style: { display: "block" }
      }
    ), image.overlay && /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: { backgroundColor: overlayColor }
      }
    ));
  };
  const renderSkeleton = () => {
    const skeletonColor = colors.skeleton || "bg-gray-200 dark:bg-gray-700";
    return /* @__PURE__ */ React6.createElement("div", { className: "animate-pulse" }, image && /* @__PURE__ */ React6.createElement("div", { className: `${getImageClasses()} ${skeletonColor}` }), /* @__PURE__ */ React6.createElement("div", { className: "p-4" }, /* @__PURE__ */ React6.createElement("div", { className: `h-4 ${skeletonColor} rounded w-3/4 mb-2` }), /* @__PURE__ */ React6.createElement("div", { className: `h-3 ${skeletonColor} rounded w-1/2` })));
  };
  const renderNewsMetadata = () => {
    if (!metadata) return null;
    const textColor = colors.text || "text-gray-500 dark:text-gray-400";
    return /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: `flex flex-wrap items-center gap-3 text-sm ${textColor} mt-2`
      },
      metadata.category && /* @__PURE__ */ React6.createElement("span", { className: "px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded" }, metadata.category),
      /* @__PURE__ */ React6.createElement("div", { className: "flex flex-wrap items-center gap-3" }, metadata.time && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
        "svg",
        {
          className: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        },
        /* @__PURE__ */ React6.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          }
        )
      ), metadata.time), metadata.author && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
        "svg",
        {
          className: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        },
        /* @__PURE__ */ React6.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          }
        )
      ), metadata.author), metadata.comments !== void 0 && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
        "svg",
        {
          className: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        },
        /* @__PURE__ */ React6.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          }
        )
      ), metadata.comments), metadata.views !== void 0 && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
        "svg",
        {
          className: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        },
        /* @__PURE__ */ React6.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          }
        ),
        /* @__PURE__ */ React6.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          }
        )
      ), metadata.views))
    );
  };
  const renderNewsCard = () => /* @__PURE__ */ React6.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React6.createElement("div", { className: "relative" }, renderImage(), (metadata == null ? void 0 : metadata.category) && /* @__PURE__ */ React6.createElement("div", { className: "absolute top-4 left-4 z-10" }, /* @__PURE__ */ React6.createElement("span", { className: "px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded" }, metadata.category))), /* @__PURE__ */ React6.createElement("div", { className: "p-4" }, title && /* @__PURE__ */ React6.createElement("h3", { className: "text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors" }, title), subtitle && /* @__PURE__ */ React6.createElement("p", { className: "mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400" }, subtitle), renderNewsMetadata(), children && /* @__PURE__ */ React6.createElement("div", { className: `mt-4 ${bodyClassName}` }, children)));
  const renderCard = () => {
    const headerBg = colors.headerBg || "bg-white dark:bg-gray-800";
    const headerText = colors.headerText || "text-gray-900 dark:text-white";
    const headerBorder = colors.headerBorder || "border-gray-200 dark:border-gray-700";
    const footerBg = colors.footerBg || "bg-white dark:bg-gray-800";
    const footerText = colors.footerText || "text-gray-900 dark:text-white";
    const footerBorder = colors.footerBorder || "border-gray-200 dark:border-gray-700";
    return /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: `
          rounded-lg 
          ${getVariantClasses()}
          ${getHoverEffectClasses()}
          ${onClick ? "cursor-pointer" : ""}
          ${isHorizontal ? "flex flex-col md:flex-row" : ""}
          ${className}
        `,
        onClick
      },
      isNewsCard ? renderNewsCard() : /* @__PURE__ */ React6.createElement(React6.Fragment, null, (image == null ? void 0 : image.position) === "top" && renderImage(), (image == null ? void 0 : image.position) === "left" && renderImage(), /* @__PURE__ */ React6.createElement("div", { className: "flex-1" }, (title || subtitle || Icon) && /* @__PURE__ */ React6.createElement(
        "div",
        {
          className: `
                    p-4 border-b ${headerBorder} ${headerBg}
                    ${headerClassName}
                  `
        },
        /* @__PURE__ */ React6.createElement("div", { className: "flex items-center gap-3" }, Icon && /* @__PURE__ */ React6.createElement("div", { className: "flex-shrink-0" }, /* @__PURE__ */ React6.createElement(Icon, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })), /* @__PURE__ */ React6.createElement("div", { className: "flex-1" }, title && /* @__PURE__ */ React6.createElement("h3", { className: `text-lg font-medium ${headerText}` }, title), subtitle && /* @__PURE__ */ React6.createElement(
          "p",
          {
            className: `mt-1 text-sm ${colors.text || "text-gray-500 dark:text-gray-400"}`
          },
          subtitle
        )))
      ), /* @__PURE__ */ React6.createElement("div", { className: `p-4 ${bodyClassName}` }, children), footer && /* @__PURE__ */ React6.createElement(
        "div",
        {
          className: `
                    p-4 border-t ${footerBorder} ${footerBg}
                    ${footerClassName}
                  `
        },
        footer
      )), (image == null ? void 0 : image.position) === "right" && renderImage(), (image == null ? void 0 : image.position) === "bottom" && renderImage())
    );
  };
  if (loading || skeleton) {
    return renderSkeleton();
  }
  const isNewsCard = variant === "news";
  const isHorizontal = (image == null ? void 0 : image.position) === "left" || (image == null ? void 0 : image.position) === "right";
  if (isNewsCard && link) {
    return /* @__PURE__ */ React6.createElement(
      "a",
      {
        href: link,
        className: "block hover:no-underline",
        target: "_blank",
        rel: "noopener noreferrer"
      },
      renderCard()
    );
  }
  return renderCard();
};
var Card_default = Card;

// src/components/Table/Table.tsx
import React8, { useRef as useRef4, useEffect as useEffect4 } from "react";
import {
  HiChevronUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown as HiExpand,
  HiChevronUp as HiCollapse,
  HiArrowsUpDown,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle
} from "react-icons/hi2";

// src/components/Spinner/Spinner.tsx
import React7 from "react";
var sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
};
var colorMap = {
  primary: "#2563eb",
  secondary: "#64748b",
  success: "#16a34a",
  danger: "#dc2626",
  warning: "#eab308",
  info: "#06b6d4"
};
var Spinner = ({
  size = "md",
  variant = "primary",
  text,
  textPosition = "right",
  type = "circular"
}) => {
  const px = sizeMap[size];
  const color = colorMap[variant];
  const textPositionClasses = {
    left: "flex-row-reverse",
    right: "flex-row",
    top: "flex-col-reverse",
    bottom: "flex-col"
  };
  const renderDotsSpinner = () => /* @__PURE__ */ React7.createElement("div", { className: "flex items-center gap-1 relative" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `), [0, 1, 2].map((i) => /* @__PURE__ */ React7.createElement(
    "span",
    {
      key: i,
      style: {
        width: px / 2.5,
        height: px / 2.5,
        background: color,
        borderRadius: "50%",
        display: "inline-block",
        animation: `spinner-dot-bounce 1.2s infinite`,
        animationDelay: `${i * 0.2}s`
      }
    }
  )));
  const renderBounceSpinner = () => /* @__PURE__ */ React7.createElement("div", { className: "flex items-end gap-1 relative" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `), [0, 1, 2].map((i) => /* @__PURE__ */ React7.createElement(
    "span",
    {
      key: i,
      style: {
        width: px / 3,
        height: px,
        background: color,
        borderRadius: px / 2,
        display: "inline-block",
        animation: `spinner-bounce 0.8s infinite`,
        animationDelay: `${i * 0.15}s`,
        opacity: 0.8
      }
    }
  )));
  const renderGradientSpinner = () => /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        display: "inline-block",
        width: px,
        height: px,
        background: `conic-gradient(${color} 10%, transparent 60%, ${color} 100%)`,
        borderRadius: "50%",
        animation: "spinner-gradient-spin 1s linear infinite",
        position: "relative"
      }
    },
    /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-gradient-spin {
          100% { transform: rotate(360deg); }
        }
      `),
    /* @__PURE__ */ React7.createElement(
      "span",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: px * 0.6,
          height: px * 0.6,
          background: "var(--tw-bg-opacity, 1) #fff",
          borderRadius: "50%",
          zIndex: 1,
          boxShadow: "0 0 0 1px rgba(0,0,0,0.05)"
        },
        className: "dark:bg-gray-900"
      }
    )
  );
  const renderCircularSpinner = () => /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        display: "inline-block",
        width: px,
        height: px,
        border: `${px / 8}px solid ${color}33`,
        borderTop: `${px / 8}px solid ${color}`,
        borderRadius: "50%",
        animation: "spinner-circular-spin 0.8s linear infinite"
      }
    },
    /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-circular-spin {
          100% { transform: rotate(360deg); }
        }
      `)
  );
  const renderPulseSpinner = () => /* @__PURE__ */ React7.createElement("span", { className: "relative inline-block" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `), /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        width: px,
        height: px,
        background: color,
        borderRadius: "50%",
        display: "inline-block",
        animation: "spinner-pulse 1s infinite cubic-bezier(.66,0,0,1)"
      }
    }
  ));
  let spinnerContent;
  switch (type) {
    case "dots":
      spinnerContent = renderDotsSpinner();
      break;
    case "pulse":
      spinnerContent = renderPulseSpinner();
      break;
    case "gradient":
      spinnerContent = renderGradientSpinner();
      break;
    case "bounce":
      spinnerContent = renderBounceSpinner();
      break;
    default:
      spinnerContent = renderCircularSpinner();
  }
  if (!text) return spinnerContent;
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      className: `flex items-center gap-2 ${textPositionClasses[textPosition]}`
    },
    spinnerContent,
    /* @__PURE__ */ React7.createElement("span", { className: `text-sm`, style: { color } }, text)
  );
};
var Spinner_default = Spinner;

// src/components/Table/Table.tsx
function Table({
  columns,
  data,
  loading = false,
  pagination,
  selection,
  expandable,
  rowActions,
  draggable = false,
  onRowReorder,
  onRow,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  rowClassName = "",
  cellClassName = "",
  scroll,
  bordered = false,
  size = "middle",
  showHeader = true,
  emptyText = "No data available",
  loadingText = "Loading...",
  error
}) {
  var _a;
  const [sortConfig, setSortConfig] = React8.useState(null);
  const [expandedRows, setExpandedRows] = React8.useState(
    (expandable == null ? void 0 : expandable.expandedRowKeys) || []
  );
  const [columnWidths, setColumnWidths] = React8.useState({});
  const [draggedRow, setDraggedRow] = React8.useState(null);
  const [dragOverRow, setDragOverRow] = React8.useState(null);
  const [activeFilters, setActiveFilters] = React8.useState(
    columns.reduce((acc, col) => {
      if (col.filterable && col.filters) {
        acc[col.key] = [];
      }
      return acc;
    }, {})
  );
  const [showLoading, setShowLoading] = React8.useState(false);
  const resizingRef = useRef4(null);
  useEffect4(() => {
    if (typeof loading === "object") {
      if (loading.delay) {
        setShowLoading(true);
        const timer = setTimeout(() => {
          setShowLoading(false);
        }, loading.delay);
        return () => clearTimeout(timer);
      }
    } else {
      setShowLoading(loading);
    }
  }, [loading]);
  const handleResizeStart = (e, columnKey, currentWidth) => {
    e.preventDefault();
    resizingRef.current = {
      columnKey,
      startX: e.clientX,
      startWidth: currentWidth
    };
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
  };
  const handleResizeMove = (e) => {
    if (!resizingRef.current) return;
    const { columnKey, startX, startWidth } = resizingRef.current;
    const diff = e.clientX - startX;
    setColumnWidths((prev) => __spreadProps(__spreadValues({}, prev), {
      [columnKey]: Math.max(50, startWidth + diff)
    }));
  };
  const handleResizeEnd = () => {
    resizingRef.current = null;
    document.removeEventListener("mousemove", handleResizeMove);
    document.removeEventListener("mouseup", handleResizeEnd);
  };
  const handleDragStart = (index) => {
    if (!draggable) return;
    setDraggedRow(index);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (!draggable || draggedRow === null) return;
    setDragOverRow(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (!draggable || draggedRow === null || !onRowReorder) return;
    const newData = [...data];
    const draggedItem = newData[draggedRow];
    newData.splice(draggedRow, 1);
    newData.splice(index, 0, draggedItem);
    onRowReorder(newData);
    setDraggedRow(null);
    setDragOverRow(null);
  };
  const handleSort = (column) => {
    if (!column.sorter) return;
    setSortConfig((current) => {
      if ((current == null ? void 0 : current.key) === column.key) {
        return current.direction === "asc" ? { key: column.key, direction: "desc" } : null;
      }
      return { key: column.key, direction: "asc" };
    });
  };
  const handleFilter = (column, value) => {
    if (!column.filters) return;
    setActiveFilters((prev) => {
      const currentFilters = prev[column.key] || [];
      const newFilters = currentFilters.includes(value) ? currentFilters.filter((v) => v !== value) : [...currentFilters, value];
      return __spreadProps(__spreadValues({}, prev), {
        [column.key]: newFilters
      });
    });
  };
  const handleExpand = (record) => {
    var _a2;
    const recordId = record.id;
    const isExpanded = expandedRows.includes(recordId);
    const newExpandedRows = isExpanded ? expandedRows.filter((id) => id !== recordId) : [...expandedRows, recordId];
    setExpandedRows(newExpandedRows);
    (_a2 = expandable == null ? void 0 : expandable.onExpand) == null ? void 0 : _a2.call(expandable, !isExpanded, record);
  };
  const filteredData = React8.useMemo(() => {
    let result = data;
    columns.forEach((column) => {
      var _a2;
      if (column.filters && column.onFilter && ((_a2 = activeFilters[column.key]) == null ? void 0 : _a2.length)) {
        result = result.filter(
          (record) => activeFilters[column.key].some(
            (value) => column.onFilter(value, record)
          )
        );
      }
    });
    if (sortConfig) {
      const column = columns.find((col) => col.key === sortConfig.key);
      if (column == null ? void 0 : column.sorter) {
        result = [...result].sort((a, b) => {
          const result2 = column.sorter(a, b);
          return sortConfig.direction === "asc" ? result2 : -result2;
        });
      }
    }
    return result;
  }, [data, sortConfig, columns, activeFilters]);
  const handleSelectAll = (checked) => {
    if (!selection) return;
    selection.onChange(checked ? filteredData.map((item) => item.id) : []);
  };
  const handleSelectRow = (checked, record) => {
    if (!selection) return;
    const selectedKeys = checked ? [...selection.selectedRowKeys, record.id] : selection.selectedRowKeys.filter((key) => key !== record.id);
    selection.onChange(selectedKeys);
  };
  const getFixedColumnStyle = (column, index) => {
    if (!column.fixed) return {};
    const isLeft = column.fixed === "left";
    let offset = 0;
    if (isLeft) {
      for (let i = 0; i < index; i++) {
        if (columns[i].fixed === "left") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    } else {
      for (let i = columns.length - 1; i > index; i--) {
        if (columns[i].fixed === "right") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    }
    return {
      position: "sticky",
      [isLeft ? "left" : "right"]: offset,
      zIndex: isLeft ? 10 : 5
    };
  };
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };
  const renderLoadingSpinner = () => /* @__PURE__ */ React8.createElement("div", { className: "flex items-center justify-center p-8" }, /* @__PURE__ */ React8.createElement(
    Spinner_default,
    {
      size: "xl",
      variant: "primary",
      text: typeof loading === "object" ? loading.tip : loadingText,
      textPosition: "right"
    }
  ));
  const renderError = () => /* @__PURE__ */ React8.createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" }, /* @__PURE__ */ React8.createElement(HiOutlineExclamationCircle, { className: "w-12 h-12 text-red-500 mb-4" }), /* @__PURE__ */ React8.createElement("p", { className: "text-red-500 mb-4" }, error == null ? void 0 : error.message), (error == null ? void 0 : error.retry) && /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: error.retry,
      className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
    },
    "Retry"
  ));
  const renderEmpty = () => /* @__PURE__ */ React8.createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" }, /* @__PURE__ */ React8.createElement(HiOutlineInformationCircle, { className: "w-12 h-12 text-gray-400 mb-4" }), /* @__PURE__ */ React8.createElement("p", { className: "text-gray-500" }, emptyText));
  return /* @__PURE__ */ React8.createElement("div", { className: `max-w-[90vw] md:max-w-full overflow-x-auto ${className}` }, /* @__PURE__ */ React8.createElement(
    "div",
    {
      className: "relative",
      style: {
        maxHeight: scroll == null ? void 0 : scroll.y,
        overflow: "auto"
      }
    },
    /* @__PURE__ */ React8.createElement(
      "table",
      {
        className: `min-w-max w-full ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
      },
      showHeader && /* @__PURE__ */ React8.createElement(
        "thead",
        {
          className: `bg-gray-50 dark:bg-gray-800 sticky top-0 z-20 ${headerClassName}`
        },
        /* @__PURE__ */ React8.createElement("tr", null, expandable && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }), selection && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }, /* @__PURE__ */ React8.createElement(
          "input",
          {
            type: "checkbox",
            checked: selection.selectedRowKeys.length === filteredData.length,
            onChange: (e) => handleSelectAll(e.target.checked),
            className: "rounded border-gray-300 dark:border-gray-600"
          }
        )), columns.map((column, index) => /* @__PURE__ */ React8.createElement(
          "th",
          {
            key: column.key,
            className: `
                      p-4 text-${column.align || "left"} text-sm font-medium text-gray-500 dark:text-gray-400
                      ${column.sorter ? "cursor-pointer hover:text-gray-700 dark:hover:text-gray-300" : ""}
                      ${column.fixed ? "bg-gray-100 dark:bg-gray-800" : ""}
                      ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}
                      ${cellClassName}
                    `,
            style: __spreadValues({
              width: columnWidths[column.key] || column.width
            }, getFixedColumnStyle(column, index)),
            onClick: () => handleSort(column)
          },
          /* @__PURE__ */ React8.createElement("div", { className: "flex items-center gap-2" }, column.title, column.sorter && (sortConfig == null ? void 0 : sortConfig.key) === column.key && (sortConfig.direction === "asc" ? /* @__PURE__ */ React8.createElement(HiChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ React8.createElement(HiChevronDown, { className: "w-4 h-4" })), column.filterable && column.filters && /* @__PURE__ */ React8.createElement("div", { className: "relative group" }, /* @__PURE__ */ React8.createElement("button", { className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" }, /* @__PURE__ */ React8.createElement(HiArrowsUpDown, { className: "w-4 h-4" })), /* @__PURE__ */ React8.createElement("div", { className: "absolute hidden group-hover:block top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 z-30" }, column.filters.map((filter) => {
            var _a2;
            return /* @__PURE__ */ React8.createElement(
              "label",
              {
                key: filter.value,
                className: "flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              },
              /* @__PURE__ */ React8.createElement(
                "input",
                {
                  type: "checkbox",
                  checked: ((_a2 = activeFilters[column.key]) == null ? void 0 : _a2.includes(
                    filter.value
                  )) || false,
                  onChange: () => handleFilter(column, filter.value),
                  className: "rounded border-gray-300 dark:border-gray-600"
                }
              ),
              filter.text
            );
          })))),
          column.resizable && /* @__PURE__ */ React8.createElement(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500",
              onMouseDown: (e) => handleResizeStart(
                e,
                column.key,
                columnWidths[column.key] || (typeof column.width === "number" ? column.width : 0)
              )
            }
          )
        )), rowActions && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }))
      ),
      /* @__PURE__ */ React8.createElement(
        "tbody",
        {
          className: `divide-y divide-gray-200 dark:divide-gray-700 ${bodyClassName}`
        },
        showLoading ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderLoadingSpinner()
        )) : error ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderError()
        )) : filteredData.length === 0 ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderEmpty()
        )) : filteredData.map((record, index) => {
          var _a2, _b, _c, _d, _e;
          return /* @__PURE__ */ React8.createElement(React8.Fragment, { key: record.id }, /* @__PURE__ */ React8.createElement(
            "tr",
            {
              draggable,
              onDragStart: () => handleDragStart(index),
              onDragOver: (e) => handleDragOver(e, index),
              onDrop: (e) => handleDrop(e, index),
              onClick: (_a2 = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _a2.onClick,
              onDoubleClick: (_b = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _b.onDoubleClick,
              onContextMenu: (_c = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _c.onContextMenu,
              className: `
                      hover:bg-gray-50 dark:hover:bg-gray-800/50
                      ${draggedRow === index ? "opacity-50" : ""}
                      ${dragOverRow === index ? "border-t-2 border-blue-500" : ""}
                      ${((_d = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _d.className) || ""}
                      ${rowClassName}
                      ${getSizeClass()}
                    `,
              style: (_e = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _e.style
            },
            expandable && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              expandable.expandIcon ? expandable.expandIcon({
                expanded: expandedRows.includes(record.id),
                onExpand: () => handleExpand(record),
                record
              }) : /* @__PURE__ */ React8.createElement(
                "button",
                {
                  onClick: () => handleExpand(record),
                  className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                },
                expandedRows.includes(record.id) ? /* @__PURE__ */ React8.createElement(HiCollapse, { className: "w-4 h-4" }) : /* @__PURE__ */ React8.createElement(HiExpand, { className: "w-4 h-4" })
              )
            ),
            selection && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              /* @__PURE__ */ React8.createElement(
                "input",
                {
                  type: "checkbox",
                  checked: selection.selectedRowKeys.includes(
                    record.id
                  ),
                  onChange: (e) => handleSelectRow(e.target.checked, record),
                  className: "rounded border-gray-300 dark:border-gray-600"
                }
              )
            ),
            columns.map((column, colIndex) => /* @__PURE__ */ React8.createElement(
              "td",
              {
                key: column.key,
                className: `
                          p-4 text-${column.align || "left"} text-gray-900 dark:text-gray-100
                          ${column.fixed ? "bg-gray-50 dark:bg-gray-900" : ""}
                          ${column.ellipsis ? "truncate" : ""}
                          ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}
                          ${cellClassName}
                        `,
                style: getFixedColumnStyle(column, colIndex)
              },
              column.tooltip ? /* @__PURE__ */ React8.createElement("div", { className: "group relative" }, /* @__PURE__ */ React8.createElement("div", { className: "truncate" }, column.render ? column.render(
                record[column.dataIndex],
                record
              ) : String(record[column.dataIndex])), /* @__PURE__ */ React8.createElement("div", { className: "absolute hidden group-hover:block top-full left-0 mt-1 bg-gray-900 text-white text-xs rounded px-2 py-1 z-30" }, column.render ? column.render(
                record[column.dataIndex],
                record
              ) : String(record[column.dataIndex]))) : column.render ? column.render(record[column.dataIndex], record) : String(record[column.dataIndex])
            )),
            rowActions && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              rowActions(record)
            )
          ), expandable && expandedRows.includes(record.id) && /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
            "td",
            {
              colSpan: columns.length + (selection ? 1 : 0) + (rowActions ? 1 : 0) + (expandable ? 1 : 0),
              className: `p-4 bg-gray-50 dark:bg-gray-800/50 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
            },
            expandable.expandedRowRender(record)
          )));
        })
      )
    )
  ), pagination && /* @__PURE__ */ React8.createElement("div", { className: "flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700" }, /* @__PURE__ */ React8.createElement("div", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Showing ", (pagination.current - 1) * pagination.pageSize + 1, " to", " ", Math.min(
    pagination.current * pagination.pageSize,
    pagination.total
  ), " ", "of ", pagination.total, " entries"), /* @__PURE__ */ React8.createElement("div", { className: "flex items-center gap-2" }, pagination.showSizeChanger && /* @__PURE__ */ React8.createElement(
    "select",
    {
      value: pagination.pageSize,
      onChange: (e) => pagination.onChange(1, Number(e.target.value)),
      className: "px-2 py-1 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700"
    },
    (_a = pagination.pageSizeOptions) == null ? void 0 : _a.map((size2) => /* @__PURE__ */ React8.createElement("option", { key: size2, value: size2 }, size2, " / page"))
  ), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => pagination.onChange(pagination.current - 1, pagination.pageSize),
      disabled: pagination.current === 1,
      className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
    },
    /* @__PURE__ */ React8.createElement(HiChevronLeft, { className: "w-5 h-5" })
  ), /* @__PURE__ */ React8.createElement("span", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Page ", pagination.current), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => pagination.onChange(pagination.current + 1, pagination.pageSize),
      disabled: pagination.current * pagination.pageSize >= pagination.total,
      className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
    },
    /* @__PURE__ */ React8.createElement(HiChevronRight, { className: "w-5 h-5" })
  ))));
}
var Table_default = Table;

// src/components/Badge/Badge.tsx
import React9 from "react";
var Badge = ({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  className = "",
  animation = "none",
  dot = false,
  count,
  maxCount = 99,
  showZero = false,
  offset = [0, 0],
  status,
  position = "top-right",
  standalone = false,
  processing = false,
  ribbon = false,
  ribbonText,
  ribbonColor = "primary"
}) => {
  const variantClasses = {
    default: "bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    primary: "bg-blue-50/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
    success: "bg-emerald-50/80 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
    warning: "bg-amber-50/80 dark:bg-amber-900/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
    error: "bg-rose-50/80 dark:bg-rose-900/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800",
    info: "bg-sky-50/80 dark:bg-sky-900/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
  };
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 min-w-[1.25rem] h-5",
    md: "text-sm px-2.5 py-0.5 min-w-[1.5rem] h-6",
    lg: "text-base px-3 py-1 min-w-[1.75rem] h-7"
  };
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  const animationClasses = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    none: ""
  };
  const statusClasses = {
    online: "bg-emerald-500 dark:bg-emerald-400",
    offline: "bg-gray-400 dark:bg-gray-500",
    away: "bg-amber-500 dark:bg-amber-400",
    busy: "bg-rose-500 dark:bg-rose-400"
  };
  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1"
  };
  const ribbonClasses = {
    primary: "bg-blue-600 dark:bg-blue-500",
    success: "bg-emerald-600 dark:bg-emerald-500",
    warning: "bg-amber-600 dark:bg-amber-500",
    error: "bg-rose-600 dark:bg-rose-500",
    info: "bg-sky-600 dark:bg-sky-500"
  };
  const renderContent = () => {
    if (dot) {
      return /* @__PURE__ */ React9.createElement(
        "span",
        {
          className: `inline-block w-2 h-2 rounded-full ${status ? statusClasses[status] : variantClasses[variant].split(" ")[0]}`
        }
      );
    }
    if (typeof count === "number") {
      if (count === 0 && !showZero) return null;
      return /* @__PURE__ */ React9.createElement("span", { className: "inline-flex items-center justify-center font-medium" }, count > maxCount ? `${maxCount}+` : count);
    }
    if (typeof count === "string") {
      return /* @__PURE__ */ React9.createElement("span", { className: "inline-flex items-center justify-center font-medium" }, count);
    }
    return children;
  };
  const badgeStyle = {
    transform: `translate(${offset[0]}px, ${offset[1]}px)`
  };
  if (standalone) {
    return /* @__PURE__ */ React9.createElement(
      "span",
      {
        style: badgeStyle,
        className: `inline-flex items-center justify-center ${dot ? "w-2 h-2" : sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`
      },
      renderContent()
    );
  }
  if (ribbon) {
    return /* @__PURE__ */ React9.createElement("div", { className: "relative" }, children, /* @__PURE__ */ React9.createElement(
      "div",
      {
        className: `absolute top-0 right-0 w-24 h-24 overflow-hidden ${ribbonText ? "h-8" : ""}`
      },
      /* @__PURE__ */ React9.createElement(
        "div",
        {
          className: `absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-8 -translate-y-8 ${ribbonClasses[ribbonColor]} text-white text-xs font-medium flex items-center justify-center shadow-sm`
        },
        ribbonText
      )
    ));
  }
  return /* @__PURE__ */ React9.createElement("div", { className: "relative inline-block" }, children, /* @__PURE__ */ React9.createElement(
    "span",
    {
      style: badgeStyle,
      className: `absolute ${positionClasses[position]} z-10 inline-flex items-center justify-center ${dot ? "w-2 h-2" : sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${animationClasses[animation]} ${processing ? "animate-spin" : ""} ${className} shadow-sm`
    },
    renderContent()
  ));
};
var Badge_default = Badge;

// src/components/Alert/Alert.tsx
import React10 from "react";
var typeStyles = {
  success: {
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800"
  },
  error: {
    bg: "bg-rose-50 dark:bg-rose-950/50",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800"
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/50",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800"
  },
  info: {
    bg: "bg-sky-50 dark:bg-sky-950/50",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-800"
  }
};
var Alert = ({
  type = "info",
  message,
  description,
  closable = false,
  onClose,
  bgColor,
  textColor,
  borderColor
}) => {
  const defaultStyles = typeStyles[type];
  const styles = {
    bg: bgColor || defaultStyles.bg,
    text: textColor || defaultStyles.text,
    border: borderColor || defaultStyles.border
  };
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: `flex items-start gap-3 border-l-4 p-4 rounded-md shadow-sm ${styles.bg} ${styles.text} ${styles.border}`
    },
    /* @__PURE__ */ React10.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React10.createElement("div", { className: "font-semibold" }, message), description && /* @__PURE__ */ React10.createElement("div", { className: "text-sm mt-1 opacity-80" }, description)),
    closable && /* @__PURE__ */ React10.createElement(
      "button",
      {
        onClick: onClose,
        className: "ml-2 text-lg font-bold opacity-60 hover:opacity-100"
      },
      "\xD7"
    )
  );
};
var Alert_default = Alert;

// src/components/Avatar/Avatar.tsx
import React11 from "react";
var sizeMap2 = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72
};
var Avatar = ({
  src,
  alt = "Avatar",
  size = "md",
  shape = "circle",
  initials,
  icon,
  className = ""
}) => {
  const px = sizeMap2[size];
  const base = `inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold select-none ${className}`;
  const rounded = shape === "circle" ? "rounded-full" : "rounded-lg";
  return /* @__PURE__ */ React11.createElement(
    "span",
    {
      className: `${base} ${rounded}`,
      style: { width: px, height: px, fontSize: px / 2.2 }
    },
    src ? /* @__PURE__ */ React11.createElement(
      "img",
      {
        src,
        alt,
        className: `object-cover w-full h-full ${rounded}`
      }
    ) : initials ? /* @__PURE__ */ React11.createElement("span", null, initials) : icon ? icon : /* @__PURE__ */ React11.createElement("span", null, "?")
  );
};
var Avatar_default = Avatar;

// src/components/Breadcrumbs/Breadcrumbs.tsx
import React12 from "react";
var Breadcrumbs = ({
  items,
  separator = "/",
  className = ""
}) => /* @__PURE__ */ React12.createElement(
  "nav",
  {
    className: `flex items-center text-sm ${className}`,
    "aria-label": "Breadcrumb"
  },
  items.map((item, idx) => /* @__PURE__ */ React12.createElement("span", { key: idx, className: "flex items-center" }, item.href && idx !== items.length - 1 ? /* @__PURE__ */ React12.createElement(
    "a",
    {
      href: item.href,
      className: "text-blue-600 hover:underline dark:text-blue-400"
    },
    item.label
  ) : /* @__PURE__ */ React12.createElement("span", { className: "text-gray-500 dark:text-gray-300" }, item.label), idx < items.length - 1 && /* @__PURE__ */ React12.createElement("span", { className: "mx-2 text-gray-400" }, separator)))
);
var Breadcrumbs_default = Breadcrumbs;

// src/components/Calendar/Calendar.tsx
import React13 from "react";
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
var getYears = (center, range = 20) => {
  const years = [];
  for (let i = center - range; i <= center + range; i++) years.push(i);
  return years;
};
var Calendar = ({
  value,
  onChange,
  className = "",
  showTimePicker = false,
  showSeconds = false,
  hour12 = false,
  timeInterval = 1,
  secondInterval = 1,
  minDate,
  maxDate,
  disableDate,
  disableTime,
  timePickerInline = true,
  renderDay,
  calendarButtonClassName = "",
  textColor = ""
}) => {
  const today = /* @__PURE__ */ new Date();
  const [current, setCurrent] = React13.useState(() => value || today);
  const [showTime, setShowTime] = React13.useState(timePickerInline);
  const [selected, setSelected] = React13.useState(value);
  React13.useEffect(() => {
    if (value) setSelected(value);
  }, [value]);
  const year = current.getFullYear();
  const month = current.getMonth();
  const days = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const years = getYears(year);
  const handleSelect = (day) => {
    const date = new Date(
      year,
      month,
      day,
      (selected == null ? void 0 : selected.getHours()) || 0,
      (selected == null ? void 0 : selected.getMinutes()) || 0,
      (selected == null ? void 0 : selected.getSeconds()) || 0
    );
    if (disableDate && disableDate(date)) return;
    setSelected(date);
    onChange == null ? void 0 : onChange(date);
  };
  const handleTimeChange = (h, m, s, ampm2) => {
    let hour = h;
    if (hour12) {
      if (ampm2 === "PM" && hour < 12) hour += 12;
      if (ampm2 === "AM" && hour === 12) hour = 0;
    }
    const date = new Date(selected || current);
    date.setHours(hour, m, s);
    if (disableTime && disableTime(date, hour, m, s)) return;
    setSelected(date);
    onChange == null ? void 0 : onChange(date);
  };
  const selectedHour = (selected || current).getHours();
  const selectedMinute = (selected || current).getMinutes();
  const selectedSecond = (selected || current).getSeconds();
  const ampm = hour12 ? selectedHour >= 12 ? "PM" : "AM" : void 0;
  const isDateDisabled = (date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disableDate && disableDate(date)) return true;
    return false;
  };
  return /* @__PURE__ */ React13.createElement(
    "div",
    {
      className: `w-full max-w-[320px] sm:max-w-sm p-2 sm:p-4 rounded-lg ${className} ${textColor}`
    },
    /* @__PURE__ */ React13.createElement("div", { className: "flex items-center justify-between w-full mb-2 gap-1 sm:gap-2" }, /* @__PURE__ */ React13.createElement(
      "button",
      {
        onClick: () => setCurrent(new Date(year, month - 1, 1)),
        className: `p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px] ${calendarButtonClassName}`
      },
      "<"
    ), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        value: year.toString(),
        onChange: (y) => setCurrent(new Date(Number(y), month, 1)),
        options: years.map((y) => ({
          value: y.toString(),
          label: y.toString()
        })),
        className: `w-20 sm:w-24`,
        wrapperClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionsContainerClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        labelClassName: `${textColor}`,
        selectClassName: `${textColor}`
      }
    ), /* @__PURE__ */ React13.createElement("span", { className: "font-semibold text-sm sm:text-base flex-1 text-center" }, current.toLocaleString("default", { month: "long" })), /* @__PURE__ */ React13.createElement(
      "button",
      {
        onClick: () => setCurrent(new Date(year, month + 1, 1)),
        className: `p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px] ${calendarButtonClassName}`
      },
      ">"
    )),
    /* @__PURE__ */ React13.createElement("div", { className: "grid grid-cols-7 gap-0.5 sm:gap-1 text-xs mb-1" }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ React13.createElement(
      "div",
      {
        key: d,
        className: "text-center font-medium text-gray-500 dark:text-gray-400 py-1"
      },
      d
    ))),
    /* @__PURE__ */ React13.createElement("div", { className: "grid grid-cols-7 gap-0.5 sm:gap-1" }, Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ React13.createElement("div", { key: `empty-${i}` })), Array.from({ length: days }, (_, i) => {
      const day = i + 1;
      const date = new Date(year, month, day);
      const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
      const isSelected = Boolean(
        selected && selected.getFullYear() === year && selected.getMonth() === month && selected.getDate() === day
      );
      const disabled = isDateDisabled(date);
      return renderDay ? /* @__PURE__ */ React13.createElement("div", { key: `day-${day}` }, renderDay(date, isSelected, isToday, disabled)) : /* @__PURE__ */ React13.createElement(
        "button",
        {
          key: `day-${day}`,
          className: `min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] rounded-full text-center transition-colors text-sm sm:text-base flex items-center justify-center ${calendarButtonClassName}
                ${isSelected ? "bg-blue-600 text-white" : isToday ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200" : "hover:bg-gray-100 dark:hover:bg-gray-500/50"}
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}`,
          onClick: () => handleSelect(day),
          disabled
        },
        day
      );
    })),
    showTimePicker && (timePickerInline || showTime) && /* @__PURE__ */ React13.createElement("div", { className: "mt-4 flex flex-col gap-2 items-center" }, /* @__PURE__ */ React13.createElement("div", { className: "flex flex-wrap justify-center gap-1 sm:gap-2 items-center w-full" }, /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: hour12 ? (selectedHour % 12 || 12).toString() : selectedHour.toString(),
        onChange: (v) => handleTimeChange(
          Number(v),
          selectedMinute,
          selectedSecond,
          ampm
        ),
        options: Array.from({ length: hour12 ? 12 : 24 }, (_, i) => ({
          value: (hour12 ? i + 1 : i).toString(),
          label: (hour12 ? i + 1 : i).toString().padStart(2, "0")
        })),
        className: `w-16 sm:w-20`,
        wrapperClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionsContainerClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`
      }
    ), /* @__PURE__ */ React13.createElement("span", { className: "text-gray-500 font-medium" }, ":"), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: selectedMinute.toString(),
        onChange: (v) => handleTimeChange(selectedHour, Number(v), selectedSecond, ampm),
        options: Array.from(
          { length: 60 / timeInterval },
          (_, i) => i * timeInterval
        ).map((m) => ({
          value: m.toString(),
          label: m.toString().padStart(2, "0")
        })),
        className: `w-16 sm:w-20`,
        wrapperClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionsContainerClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`
      }
    ), showSeconds && /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("span", { className: "text-gray-500 font-medium" }, ":"), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: selectedSecond.toString(),
        onChange: (v) => handleTimeChange(
          selectedHour,
          selectedMinute,
          Number(v),
          ampm
        ),
        options: Array.from(
          { length: 60 / secondInterval },
          (_, i) => i * secondInterval
        ).map((s) => ({
          value: s.toString(),
          label: s.toString().padStart(2, "0")
        })),
        className: `w-16 sm:w-20`,
        wrapperClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionsContainerClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`
      }
    )), hour12 && /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: ampm,
        onChange: (v) => handleTimeChange(
          selectedHour % 12 || 12,
          selectedMinute,
          selectedSecond,
          v
        ),
        options: [
          { value: "AM", label: "AM" },
          { value: "PM", label: "PM" }
        ],
        className: `w-16 sm:w-20`,
        wrapperClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        optionsContainerClassName: `${calendarButtonClassName.length > 0 ? calendarButtonClassName : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"}`
      }
    ))),
    showTimePicker && !timePickerInline && /* @__PURE__ */ React13.createElement(
      "button",
      {
        className: `mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 underline w-full py-2 ${calendarButtonClassName}`,
        onClick: () => setShowTime((v) => !v)
      },
      showTime ? "Hide Time Picker" : "Show Time Picker"
    )
  );
};
var Calendar_default = Calendar;

// src/components/Collapse/Collapse.tsx
import React14 from "react";
import { IoIosArrowDown as IoIosArrowDown2 } from "react-icons/io";
var Collapse = ({
  items,
  defaultActiveKeys = [],
  onChange,
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  activeItemClassName = "",
  disabledItemClassName = ""
}) => {
  const [activeKeys, setActiveKeys] = React14.useState(defaultActiveKeys);
  const handleItemClick = (key) => {
    const item = items.find((item2) => item2.key === key);
    if (item && !item.disabled) {
      const newActiveKeys = activeKeys.includes(key) ? activeKeys.filter((k) => k !== key) : [...activeKeys, key];
      setActiveKeys(newActiveKeys);
      onChange == null ? void 0 : onChange(newActiveKeys);
    }
  };
  return /* @__PURE__ */ React14.createElement("div", { className: `space-y-2 ${className}` }, items.map((item) => {
    const Icon = item.icon;
    const isActive = activeKeys.includes(item.key);
    const isDisabled = item.disabled;
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        key: item.key,
        className: `
              border rounded-md overflow-hidden
              ${itemClassName}
              ${isActive ? activeItemClassName : ""}
              ${isDisabled ? disabledItemClassName : ""}
            `
      },
      /* @__PURE__ */ React14.createElement(
        "button",
        {
          onClick: () => handleItemClick(item.key),
          disabled: isDisabled,
          className: `
                w-full flex items-center justify-between p-4
                ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${headerClassName}
              `
        },
        /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-2" }, Icon && /* @__PURE__ */ React14.createElement(Icon, { className: "w-5 h-5" }), item.header),
        /* @__PURE__ */ React14.createElement(
          IoIosArrowDown2,
          {
            className: `w-5 h-5 transition-transform duration-200 ${isActive ? "transform rotate-180" : ""}`
          }
        )
      ),
      /* @__PURE__ */ React14.createElement(
        "div",
        {
          className: `
                overflow-hidden transition-all duration-200
                ${isActive ? "max-h-[1000px]" : "max-h-0"}
                ${contentClassName}
              `
        },
        /* @__PURE__ */ React14.createElement("div", { className: "p-4" }, item.content)
      )
    );
  }));
};
var Collapse_default = Collapse;

// src/components/List/List.tsx
import React15 from "react";
var List = ({
  items,
  loading = false,
  emptyText = "No items available",
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  actionClassName = ""
}) => {
  return /* @__PURE__ */ React15.createElement(
    "div",
    {
      className: `divide-y divide-gray-200 dark:divide-gray-700 ${className}`
    },
    loading ? /* @__PURE__ */ React15.createElement("div", { className: "p-4 text-center text-gray-500 dark:text-gray-400" }, "Loading...") : items.length === 0 ? /* @__PURE__ */ React15.createElement("div", { className: "p-4 text-center text-gray-500 dark:text-gray-400" }, emptyText) : items.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ React15.createElement(
        "div",
        {
          key: item.id,
          className: `
                flex items-center gap-4 p-4
                ${item.onClick ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50" : ""}
                ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${itemClassName}
              `,
          onClick: item.disabled ? void 0 : item.onClick
        },
        item.avatar ? /* @__PURE__ */ React15.createElement(
          "img",
          {
            src: item.avatar,
            alt: item.title,
            width: 40,
            height: 40,
            className: "w-10 h-10 rounded-full object-cover"
          }
        ) : Icon ? /* @__PURE__ */ React15.createElement("div", { className: "flex-shrink-0 p-2 rounded-full bg-gray-100 dark:bg-gray-800" }, /* @__PURE__ */ React15.createElement(Icon, { className: "w-6 h-6 text-gray-500 dark:text-gray-400" })) : null,
        /* @__PURE__ */ React15.createElement("div", { className: `flex-1 min-w-0 ${contentClassName}` }, /* @__PURE__ */ React15.createElement(
          "h3",
          {
            className: `
                    text-sm font-medium text-gray-900 dark:text-white
                    ${headerClassName}
                  `
          },
          item.title
        ), item.description && /* @__PURE__ */ React15.createElement("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, item.description)),
        item.actions && /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: `
                    flex-shrink-0 flex items-center gap-2
                    ${actionClassName}
                  `
          },
          item.actions
        )
      );
    })
  );
};
var List_default = List;

// src/components/Pagination/Pagination.tsx
import React16 from "react";
import {
  HiChevronLeft as HiChevronLeft2,
  HiChevronRight as HiChevronRight2,
  HiEllipsisHorizontal
} from "react-icons/hi2";
var Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  className = "",
  showFirstLast = false,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  siblingCount = 1,
  colors = {},
  icons = {},
  showTotal = false,
  totalText,
  showCurrent = false,
  currentText,
  disabled = false,
  size = "middle"
}) => {
  const pageCount = Math.ceil(total / pageSize);
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-sm px-2 py-1";
      case "large":
        return "text-lg px-4 py-2";
      default:
        return "text-base px-3 py-1.5";
    }
  };
  const getButtonClasses = (isActive = false, isDisabled = false) => {
    const baseClasses = `
      rounded border transition-colors
      ${getSizeClasses()}
      ${disabled || isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
    `;
    if (isActive) {
      return `
        ${baseClasses}
        ${colors.activeBg || "bg-blue-600 dark:bg-blue-700"}
        ${colors.activeText || "text-white"}
        ${colors.activeBorder || "border-blue-600 dark:border-blue-700"}
      `;
    }
    if (disabled || isDisabled) {
      return `
        ${baseClasses}
        ${colors.disabledBg || "bg-gray-100 dark:bg-gray-800"}
        ${colors.disabledText || "text-gray-400 dark:text-gray-500"}
        ${colors.disabledBorder || "border-gray-200 dark:border-gray-700"}
      `;
    }
    return `
      ${baseClasses}
      ${colors.bg || "bg-white dark:bg-gray-900"}
      ${colors.text || "text-gray-700 dark:text-gray-200"}
      ${colors.border || "border-gray-300 dark:border-gray-700"}
      hover:${colors.hoverBg || "bg-gray-50 dark:bg-gray-800"}
      hover:${colors.hoverText || "text-gray-900 dark:text-white"}
      hover:${colors.hoverBorder || "border-gray-400 dark:border-gray-600"}
    `;
  };
  const getPageNumbers = () => {
    const totalNumbers = siblingCount + 5;
    const totalBlocks = totalNumbers + 2;
    if (pageCount > totalBlocks) {
      const startPage = Math.max(2, current - siblingCount);
      const endPage = Math.min(pageCount - 1, current + siblingCount);
      const pages = [];
      if (startPage > 2) {
        pages.push(1, "...");
      } else {
        pages.push(1);
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < pageCount - 1) {
        pages.push("...", pageCount);
      } else {
        pages.push(pageCount);
      }
      return pages;
    }
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  };
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    onPageSizeChange == null ? void 0 : onPageSizeChange(newSize);
  };
  const renderTotal = () => {
    if (!showTotal) return null;
    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, total);
    const text = totalText ? totalText(total, [start, end]) : `Showing ${start}-${end} of ${total} items`;
    return /* @__PURE__ */ React16.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, text);
  };
  const renderCurrent = () => {
    if (!showCurrent) return null;
    const text = currentText ? currentText(current, pageCount) : `Page ${current} of ${pageCount}`;
    return /* @__PURE__ */ React16.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, text);
  };
  return /* @__PURE__ */ React16.createElement(
    "div",
    {
      className: `flex items-center gap-2 overflow-x-auto max-w-[80vw] md:max-w-full ${className}`
    },
    renderTotal(),
    /* @__PURE__ */ React16.createElement("div", { className: "flex items-center gap-1" }, showFirstLast && /* @__PURE__ */ React16.createElement(
      "button",
      {
        className: getButtonClasses(false, current === 1),
        onClick: () => onChange(1),
        disabled: disabled || current === 1
      },
      icons.first || "\xAB"
    ), /* @__PURE__ */ React16.createElement(
      "button",
      {
        className: getButtonClasses(false, current === 1),
        onClick: () => onChange(current - 1),
        disabled: disabled || current === 1
      },
      icons.prev || /* @__PURE__ */ React16.createElement(HiChevronLeft2, { className: "w-5 h-5" })
    ), getPageNumbers().map((page, index) => /* @__PURE__ */ React16.createElement(React16.Fragment, { key: index }, page === "..." ? /* @__PURE__ */ React16.createElement("span", { className: "px-2 py-1" }, icons.ellipsis || /* @__PURE__ */ React16.createElement(HiEllipsisHorizontal, { className: "w-5 h-5" })) : /* @__PURE__ */ React16.createElement(
      "button",
      {
        className: getButtonClasses(page === current),
        onClick: () => onChange(page),
        disabled
      },
      page
    ))), /* @__PURE__ */ React16.createElement(
      "button",
      {
        className: getButtonClasses(false, current === pageCount),
        onClick: () => onChange(current + 1),
        disabled: disabled || current === pageCount
      },
      icons.next || /* @__PURE__ */ React16.createElement(HiChevronRight2, { className: "w-5 h-5" })
    ), showFirstLast && /* @__PURE__ */ React16.createElement(
      "button",
      {
        className: getButtonClasses(false, current === pageCount),
        onClick: () => onChange(pageCount),
        disabled: disabled || current === pageCount
      },
      icons.last || "\xBB"
    )),
    showSizeChanger && /* @__PURE__ */ React16.createElement(
      "select",
      {
        className: `
            rounded border transition-colors
            ${getSizeClasses()}
            ${colors.border || "border-gray-300 dark:border-gray-700"}
            ${colors.bg || "bg-white dark:bg-gray-900"}
            ${colors.text || "text-gray-700 dark:text-gray-200"}
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          `,
        value: pageSize,
        onChange: handlePageSizeChange,
        disabled
      },
      pageSizeOptions.map((size2) => /* @__PURE__ */ React16.createElement("option", { key: size2, value: size2 }, size2, " / page"))
    ),
    renderCurrent()
  );
};
var Pagination_default = Pagination;

// src/components/Popover/Popover.tsx
import React17, { useState as useState4, useRef as useRef5, useEffect as useEffect5 } from "react";
var Popover = ({
  trigger,
  content,
  placement = "top",
  hover = false,
  className = ""
}) => {
  const [open, setOpen] = useState4(false);
  const ref = useRef5(null);
  useEffect5(() => {
    if (!hover && open) {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, hover]);
  return /* @__PURE__ */ React17.createElement("div", { ref, className: "relative inline-block" }, /* @__PURE__ */ React17.createElement(
    "span",
    {
      onClick: () => !hover && setOpen((v) => !v),
      onMouseEnter: () => hover && setOpen(true),
      onMouseLeave: () => hover && setOpen(false),
      className: "cursor-pointer"
    },
    trigger
  ), open && /* @__PURE__ */ React17.createElement(
    "div",
    {
      className: `absolute z-30 min-w-[160px] p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg ${className}`,
      style: {
        top: placement === "bottom" ? "100%" : placement === "top" ? void 0 : "50%",
        bottom: placement === "top" ? "100%" : void 0,
        left: placement === "right" ? "100%" : placement === "left" ? void 0 : "50%",
        right: placement === "left" ? "100%" : void 0,
        transform: placement === "top" || placement === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
      }
    },
    content
  ));
};
var Popover_default = Popover;

// src/components/Progress/Progress.tsx
import React18 from "react";
var Progress = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  rounded = "full",
  showValue = false,
  valuePosition = "inside",
  striped = false,
  animated = false,
  className = "",
  trackClassName = "",
  barClassName = "",
  valueClassName = "",
  label,
  labelPosition = "top",
  labelClassName = ""
}) => {
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4"
  };
  const variantClasses = {
    default: "bg-gray-200 dark:bg-gray-700",
    primary: "bg-blue-200 dark:bg-blue-900",
    success: "bg-green-200 dark:bg-green-900",
    warning: "bg-yellow-200 dark:bg-yellow-900",
    error: "bg-red-200 dark:bg-red-900",
    info: "bg-indigo-200 dark:bg-indigo-900"
  };
  const barVariantClasses = {
    default: "bg-gray-600 dark:bg-gray-400",
    primary: "bg-blue-600 dark:bg-blue-400",
    success: "bg-green-600 dark:bg-green-400",
    warning: "bg-yellow-600 dark:bg-yellow-400",
    error: "bg-red-600 dark:bg-red-400",
    info: "bg-indigo-600 dark:bg-indigo-400"
  };
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const renderValue = () => {
    if (!showValue) return null;
    return /* @__PURE__ */ React18.createElement(
      "span",
      {
        className: `text-xs font-medium ${valuePosition === "inside" ? "text-white" : "text-gray-700 dark:text-gray-300"} ${valueClassName}`
      },
      Math.round(percentage),
      "%"
    );
  };
  const renderLabel = () => {
    if (!label) return null;
    return /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: `text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${labelPosition === "bottom" ? "mt-1" : "mb-1"} ${labelClassName}`
      },
      label
    );
  };
  return /* @__PURE__ */ React18.createElement("div", { className: `w-full ${className}` }, labelPosition === "top" && renderLabel(), /* @__PURE__ */ React18.createElement(
    "div",
    {
      className: `relative w-full overflow-hidden ${sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${trackClassName}`
    },
    /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: `h-full transition-all duration-300 ${barVariantClasses[variant]} ${roundedClasses[rounded]} ${striped ? "bg-stripes" : ""} ${animated ? "animate-progress" : ""} ${barClassName}`,
        style: { width: `${percentage}%` }
      },
      valuePosition === "inside" && renderValue()
    )
  ), valuePosition === "outside" && /* @__PURE__ */ React18.createElement("div", { className: "mt-1 flex justify-end" }, renderValue()), labelPosition === "bottom" && renderLabel());
};
var Progress_default = Progress;

// src/components/Rating/Rating.tsx
import React19 from "react";
var Rating = ({
  value,
  max = 5,
  onChange,
  readOnly = false,
  className = "",
  showInfo = false,
  infoPosition = "bottom"
}) => {
  const handleClick = (index, event) => {
    if (readOnly || !onChange) return;
    const starElement = event.currentTarget;
    const rect = starElement.getBoundingClientRect();
    const isHalf = event.clientX - rect.left < rect.width / 2;
    onChange(index + (isHalf ? 0.5 : 1));
  };
  const stars = /* @__PURE__ */ React19.createElement("div", { className: "flex items-center gap-1" }, Array.from({ length: max }, (_, i) => {
    const filled = i + 1 <= value;
    const half = !filled && i + 0.5 <= value;
    return /* @__PURE__ */ React19.createElement(
      "span",
      {
        key: i,
        className: `cursor-pointer ${readOnly ? "pointer-events-none" : ""}`,
        onClick: (e) => handleClick(i, e)
      },
      /* @__PURE__ */ React19.createElement(
        "svg",
        {
          className: `w-6 h-6 ${filled ? "text-yellow-400" : half ? "text-yellow-300" : "text-gray-300 dark:text-gray-600"}`,
          viewBox: "0 0 24 24",
          fill: filled ? "currentColor" : "none",
          stroke: "currentColor",
          strokeWidth: "1.5"
        },
        half ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(
          "path",
          {
            d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
            fill: "currentColor",
            style: { clipPath: "inset(0 50% 0 0)" }
          }
        ), /* @__PURE__ */ React19.createElement(
          "path",
          {
            d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
            fill: "none",
            style: { clipPath: "inset(0 0 0 50%)" }
          }
        )) : /* @__PURE__ */ React19.createElement("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" })
      )
    );
  }));
  const info = showInfo && /* @__PURE__ */ React19.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400" }, value.toFixed(1), " / ", max);
  return /* @__PURE__ */ React19.createElement("div", { className: `flex flex-col gap-1 ${className}` }, infoPosition === "top" && info, stars, infoPosition === "bottom" && info);
};
var Rating_default = Rating;

// src/components/Slider/Slider.tsx
import React20 from "react";
var Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = ""
}) => {
  return /* @__PURE__ */ React20.createElement("div", { className: `flex items-center gap-4 ${className}` }, /* @__PURE__ */ React20.createElement(
    "input",
    {
      type: "range",
      min,
      max,
      step,
      value,
      onChange: (e) => onChange(Number(e.target.value)),
      className: "w-full accent-blue-600"
    }
  ), /* @__PURE__ */ React20.createElement("span", { className: "w-10 text-right text-sm font-medium" }, value));
};
var Slider_default = Slider;

// src/components/StatCard/StatCard.tsx
import React21 from "react";
import { HiArrowUp, HiArrowDown, HiExclamationCircle } from "react-icons/hi2";
var StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  description,
  className = "",
  iconClassName = "",
  trendClassName = "",
  variant = "default",
  loading = false,
  skeleton = false,
  onClick,
  colors = {},
  alert,
  prefix,
  suffix,
  format,
  formatter,
  animationDuration = 300
}) => {
  const getVariantClasses = () => {
    var _a, _b;
    const baseClasses = {
      bg: colors.bg || "bg-white dark:bg-gray-800",
      border: colors.border || "border-gray-200 dark:border-gray-700",
      text: colors.text || "text-gray-900 dark:text-white"
    };
    switch (variant) {
      case "bordered":
        return `border ${baseClasses.border}`;
      case "elevated":
        return `${baseClasses.bg} shadow-lg hover:shadow-xl transition-shadow duration-200`;
      case "gradient":
        const gradientFrom = ((_a = colors.gradient) == null ? void 0 : _a.from) || "from-blue-500";
        const gradientTo = ((_b = colors.gradient) == null ? void 0 : _b.to) || "to-blue-600";
        return `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`;
      default:
        return baseClasses.bg;
    }
  };
  const formatValue = (val) => {
    if (formatter) return formatter(val);
    if (typeof val === "number") {
      switch (format) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(val);
        case "percentage":
          return `${val}%`;
        case "number":
          return new Intl.NumberFormat("en-US").format(val);
        default:
          return val.toString();
      }
    }
    return val;
  };
  const getAlertClasses = () => {
    if (!alert) return "";
    const baseClasses = "mt-4 p-2 rounded-md text-sm flex items-center gap-2";
    switch (alert.type) {
      case "info":
        return `${baseClasses} bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300`;
      case "warning":
        return `${baseClasses} bg-yellow-50 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300`;
      case "error":
        return `${baseClasses} bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-300`;
      case "success":
        return `${baseClasses} bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300`;
      default:
        return baseClasses;
    }
  };
  const renderSkeleton = () => /* @__PURE__ */ React21.createElement("div", { className: "animate-pulse" }, /* @__PURE__ */ React21.createElement("div", { className: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2" }), /* @__PURE__ */ React21.createElement("div", { className: "h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" }), /* @__PURE__ */ React21.createElement("div", { className: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" }));
  if (loading || skeleton) {
    return /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `
          p-6 rounded-lg
          ${getVariantClasses()}
          ${className}
        `
      },
      renderSkeleton()
    );
  }
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: `
        p-6 rounded-lg
        ${getVariantClasses()}
        ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""}
        ${className}
      `,
      onClick
    },
    /* @__PURE__ */ React21.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React21.createElement("div", null, /* @__PURE__ */ React21.createElement("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400" }, title), /* @__PURE__ */ React21.createElement(
      "p",
      {
        className: "mt-2 text-3xl font-semibold",
        style: {
          transition: `all ${animationDuration}ms ease-in-out`
        }
      },
      prefix && /* @__PURE__ */ React21.createElement("span", { className: "text-lg" }, prefix),
      formatValue(value),
      suffix && /* @__PURE__ */ React21.createElement("span", { className: "text-lg" }, suffix)
    )), Icon && /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `
              p-3 rounded-full
              ${colors.iconBg || "bg-blue-100 dark:bg-blue-900"}
              ${iconClassName}
            `
      },
      /* @__PURE__ */ React21.createElement(
        Icon,
        {
          className: `w-6 h-6 ${colors.iconColor || "text-blue-600 dark:text-blue-400"}`
        }
      )
    )),
    (trend || description) && /* @__PURE__ */ React21.createElement("div", { className: "mt-4 flex items-center justify-between" }, trend && /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `
                flex items-center gap-1 text-sm
                ${trend.isPositive ? colors.trendPositive || "text-green-600 dark:text-green-400" : colors.trendNegative || "text-red-600 dark:text-red-400"}
                ${trendClassName}
              `
      },
      trend.showArrow !== false && (trend.isPositive ? /* @__PURE__ */ React21.createElement(HiArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ React21.createElement(HiArrowDown, { className: "w-4 h-4" })),
      /* @__PURE__ */ React21.createElement("span", null, Math.abs(trend.value), "%", trend.label && /* @__PURE__ */ React21.createElement("span", { className: "ml-1" }, trend.label))
    ), description && /* @__PURE__ */ React21.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, description)),
    alert && /* @__PURE__ */ React21.createElement("div", { className: getAlertClasses() }, /* @__PURE__ */ React21.createElement(HiExclamationCircle, { className: "w-4 h-4" }), alert.message)
  );
};
var StatCard_default = StatCard;

// src/components/Stepper/Stepper.tsx
import React22 from "react";
var Stepper = ({
  steps,
  current,
  className = "",
  stepClassName = "",
  stepContentClassName = "",
  circleClassName = "",
  activeCircleClassName = "",
  completedCircleClassName = "",
  inactiveCircleClassName = "",
  labelClassName = "",
  activeLabelClassName = "",
  completedLabelClassName = "",
  inactiveLabelClassName = "",
  descriptionClassName = "",
  activeDescriptionClassName = "",
  completedDescriptionClassName = "",
  inactiveDescriptionClassName = "",
  lineClassName = "",
  activeLineClassName = "",
  completedLineClassName = "",
  inactiveLineClassName = "",
  showDescriptionOnMobile = true,
  verticalOnMobile = false,
  renderStep,
  renderCircle
}) => {
  var _a;
  const getStepStatus = (index) => {
    if (index < current) return "completed";
    if (index === current) return "active";
    return "inactive";
  };
  const getCircleClasses = (index) => {
    const baseClasses = `flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold transition-all ${circleClassName}`;
    const status = getStepStatus(index);
    switch (status) {
      case "completed":
        return `${baseClasses} bg-blue-600 text-white border-blue-600 ${completedCircleClassName}`;
      case "active":
        return `${baseClasses} bg-white dark:bg-gray-900 border-blue-600 text-blue-600 ${activeCircleClassName}`;
      default:
        return `${baseClasses} bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400 ${inactiveCircleClassName}`;
    }
  };
  const getLabelClasses = (index) => {
    const baseClasses = `text-sm font-medium ${labelClassName}`;
    const status = getStepStatus(index);
    switch (status) {
      case "completed":
        return `${baseClasses} text-blue-600 ${completedLabelClassName}`;
      case "active":
        return `${baseClasses} text-blue-600 ${activeLabelClassName}`;
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400 ${inactiveLabelClassName}`;
    }
  };
  const getDescriptionClasses = (index) => {
    const baseClasses = `text-xs ${descriptionClassName}`;
    const status = getStepStatus(index);
    switch (status) {
      case "completed":
        return `${baseClasses} text-blue-500 ${completedDescriptionClassName}`;
      case "active":
        return `${baseClasses} text-blue-500 ${activeDescriptionClassName}`;
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400 ${inactiveDescriptionClassName}`;
    }
  };
  const getLineClasses = (index) => {
    const baseClasses = `w-8 h-0.5 ${lineClassName}`;
    const status = getStepStatus(index);
    switch (status) {
      case "completed":
        return `${baseClasses} bg-blue-600 ${completedLineClassName}`;
      case "active":
        return `${baseClasses} bg-blue-600 ${activeLineClassName}`;
      default:
        return `${baseClasses} bg-gray-300 dark:bg-gray-600 ${inactiveLineClassName}`;
    }
  };
  return /* @__PURE__ */ React22.createElement("div", { className: "flex flex-col gap-4" }, /* @__PURE__ */ React22.createElement(
    "div",
    {
      className: `${verticalOnMobile ? "flex-col md:flex-row" : "flex-row"} flex items-center gap-4 max-w-[85vw] overflow-x-auto md:max-w-full ${className}`
    },
    steps.map((step, idx) => /* @__PURE__ */ React22.createElement(
      "div",
      {
        key: idx,
        className: `flex ${verticalOnMobile ? "flex-col md:flex-row" : "flex-row"} items-center gap-2 ${stepClassName}`
      },
      renderStep ? renderStep(step, idx, idx === current, idx < current) : /* @__PURE__ */ React22.createElement(React22.Fragment, null, renderCircle ? renderCircle(step, idx, idx === current, idx < current) : /* @__PURE__ */ React22.createElement("div", { className: getCircleClasses(idx) }, step.icon || idx + 1), /* @__PURE__ */ React22.createElement("div", { className: `flex flex-col ${stepContentClassName}` }, /* @__PURE__ */ React22.createElement(
        "span",
        {
          className: `${getLabelClasses(
            idx
          )} whitespace-nowrap font-semibold`
        },
        step.label
      ), step.description && /* @__PURE__ */ React22.createElement(
        "span",
        {
          className: `${getDescriptionClasses(idx)} ${!showDescriptionOnMobile ? "hidden md:block" : ""} line-clamp-2 text-ellipsis`
        },
        step.description
      ))),
      idx < steps.length - 1 && /* @__PURE__ */ React22.createElement(
        "div",
        {
          className: `${verticalOnMobile ? "h-8 w-0.5 md:h-0.5 md:w-8" : "w-8 h-0.5"} ${getLineClasses(idx)}`
        }
      )
    ))
  ), ((_a = steps[current]) == null ? void 0 : _a.component) && /* @__PURE__ */ React22.createElement("div", { className: "mt-4" }, steps[current].component));
};
var Stepper_default = Stepper;

// src/components/TagInput/TagInput.tsx
import React23, { useState as useState5 } from "react";
import { BsX } from "react-icons/bs";
var TagInput = ({
  label,
  placeholder = "Type and press comma to add tags",
  leftIcon: LeftIcon,
  tags,
  onChange,
  className = "",
  inputClassName = "",
  tagClassName = ""
}) => {
  const [inputValue, setInputValue] = useState5("");
  const handleKeyDown = (e) => {
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
  const removeTag = (tagToRemove) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };
  return /* @__PURE__ */ React23.createElement("div", { className: `flex flex-col gap-1 ${className}` }, label && /* @__PURE__ */ React23.createElement("label", { className: "text-sm font-medium" }, label), /* @__PURE__ */ React23.createElement("div", { className: "flex flex-wrap gap-2 p-2 border rounded-md dark:border-gray-700 dark:bg-gray-800" }, tags.map((tag) => /* @__PURE__ */ React23.createElement(
    "span",
    {
      key: tag,
      className: `inline-flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-200 ${tagClassName}`
    },
    tag,
    /* @__PURE__ */ React23.createElement(
      "button",
      {
        type: "button",
        onClick: () => removeTag(tag),
        className: "hover:text-blue-600 dark:hover:text-blue-300"
      },
      /* @__PURE__ */ React23.createElement(BsX, { className: "w-4 h-4" })
    )
  )), /* @__PURE__ */ React23.createElement("div", { className: "flex items-center flex-1 min-w-[120px]" }, LeftIcon && /* @__PURE__ */ React23.createElement("div", { className: "flex items-center px-2 text-gray-500" }, /* @__PURE__ */ React23.createElement(LeftIcon, { className: "w-5 h-5" })), /* @__PURE__ */ React23.createElement(
    "input",
    {
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      onKeyDown: handleKeyDown,
      placeholder: tags.length === 0 ? placeholder : "",
      className: `flex-1 bg-transparent outline-none  ${inputClassName}`
    }
  ))));
};
var TagInput_default = TagInput;

// src/components/Timeline/Timeline.tsx
import React24 from "react";
var Timeline = ({
  items,
  className = "",
  itemClassName = "",
  iconClassName = "",
  contentClassName = "",
  timeClassName = ""
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };
  return /* @__PURE__ */ React24.createElement("div", { className: `space-y-4 ${className}` }, items.map((item, index) => {
    const Icon = item.icon;
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ React24.createElement("div", { key: item.key, className: `flex gap-4 ${itemClassName}` }, /* @__PURE__ */ React24.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ React24.createElement(
      "div",
      {
        className: `
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${getStatusColor(item.status)}
                  ${iconClassName}
                `
      },
      Icon ? /* @__PURE__ */ React24.createElement(Icon, { className: "w-4 h-4 text-white" }) : /* @__PURE__ */ React24.createElement("div", { className: "w-2 h-2 rounded-full bg-white" })
    ), !isLast && /* @__PURE__ */ React24.createElement("div", { className: "w-0.5 h-full bg-gray-200 dark:bg-gray-700" })), /* @__PURE__ */ React24.createElement("div", { className: "flex-1 pb-8" }, /* @__PURE__ */ React24.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ React24.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white" }, item.title), item.time && /* @__PURE__ */ React24.createElement(
      "span",
      {
        className: `text-xs text-gray-500 dark:text-gray-400 ${timeClassName}`
      },
      item.time
    )), /* @__PURE__ */ React24.createElement(
      "div",
      {
        className: `text-sm text-gray-600 dark:text-gray-300 ${contentClassName}`
      },
      item.content
    )));
  }));
};
var Timeline_default = Timeline;

// src/components/Toast/Toast.tsx
import React25, { useEffect as useEffect6, useState as useState6 } from "react";
import { BsCheck, BsExclamationCircle, BsInfo, BsX as BsX2 } from "react-icons/bs";
var Toast = ({
  id,
  type,
  message,
  title,
  duration = 5e3,
  position = "top-right",
  onClose,
  icon,
  action,
  className = "",
  contentClassName = "",
  titleClassName = "",
  messageClassName = "",
  iconClassName = "",
  closeButtonClassName = "",
  actionButtonClassName = "",
  progressClassName = "",
  animation = "slide",
  animationDuration = "normal"
}) => {
  const [progress, setProgress] = useState6(100);
  const [isPaused, setIsPaused] = useState6(false);
  const [isExiting, setIsExiting] = useState6(false);
  const toastConfig = {
    success: {
      icon: BsCheck,
      bgColor: "bg-green-50 dark:bg-green-900/50",
      textColor: "text-green-800 dark:text-green-200",
      borderColor: "border-green-200 dark:border-green-800",
      iconColor: "text-green-500 dark:text-green-400",
      progressColor: "bg-green-500 dark:bg-green-400"
    },
    error: {
      icon: BsExclamationCircle,
      bgColor: "bg-red-50 dark:bg-red-900/50",
      textColor: "text-red-800 dark:text-red-200",
      borderColor: "border-red-200 dark:border-red-800",
      iconColor: "text-red-500 dark:text-red-400",
      progressColor: "bg-red-500 dark:bg-red-400"
    },
    warning: {
      icon: BsExclamationCircle,
      bgColor: "bg-yellow-50 dark:bg-yellow-900/50",
      textColor: "text-yellow-800 dark:text-yellow-200",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      progressColor: "bg-yellow-500 dark:bg-yellow-400"
    },
    info: {
      icon: BsInfo,
      bgColor: "bg-blue-50 dark:bg-blue-900/50",
      textColor: "text-blue-800 dark:text-blue-200",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-500 dark:text-blue-400",
      progressColor: "bg-blue-500 dark:bg-blue-400"
    }
  };
  const config = toastConfig[type];
  const Icon = icon || config.icon;
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
  };
  const animationClasses = {
    slide: isExiting ? "animate-slide-out" : "animate-slide-in",
    fade: isExiting ? "animate-fade-out" : "animate-fade-in",
    zoom: isExiting ? "animate-zoom-out" : "animate-zoom-in",
    bounce: isExiting ? "animate-bounce-out" : "animate-bounce-in",
    flip: isExiting ? "animate-flip-out" : "animate-flip-in"
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  useEffect6(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onClose(id);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, id, onClose]);
  useEffect6(() => {
    let animationFrame;
    let startTime;
    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.max(0, 100 - elapsed / duration * 100);
      if (newProgress <= 0) {
        setProgress(0);
        setIsExiting(true);
      } else {
        setProgress(newProgress);
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
    if (!isPaused && duration > 0) {
      startTime = Date.now();
      animationFrame = requestAnimationFrame(updateProgress);
    }
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, isPaused]);
  const handleClose = () => {
    setIsExiting(true);
  };
  return /* @__PURE__ */ React25.createElement(
    "div",
    {
      className: `fixed ${positionClasses[position]} z-50 max-w-md w-full shadow-lg rounded-lg border ${config.bgColor} ${config.borderColor} ${animationClasses[animation]} ${durationClasses[animationDuration]} transform transition-all ${className}`,
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false)
    },
    /* @__PURE__ */ React25.createElement("div", { className: `p-4 ${contentClassName}` }, /* @__PURE__ */ React25.createElement("div", { className: "flex items-start" }, /* @__PURE__ */ React25.createElement("div", { className: `flex-shrink-0 ${config.iconColor} ${iconClassName}` }, /* @__PURE__ */ React25.createElement(Icon, { className: "w-5 h-5" })), /* @__PURE__ */ React25.createElement("div", { className: "ml-3 w-0 flex-1" }, title && /* @__PURE__ */ React25.createElement(
      "p",
      {
        className: `text-sm font-medium ${config.textColor} ${titleClassName}`
      },
      title
    ), /* @__PURE__ */ React25.createElement("p", { className: `text-sm ${config.textColor} ${messageClassName}` }, message), action && /* @__PURE__ */ React25.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: action.onClick,
        className: `text-sm font-medium ${config.textColor} hover:underline focus:outline-none ${actionButtonClassName}`
      },
      action.label
    ))), /* @__PURE__ */ React25.createElement("div", { className: "ml-4 flex-shrink-0 flex" }, /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: handleClose,
        className: `inline-flex text-gray-400 hover:text-gray-500 focus:outline-none ${closeButtonClassName}`
      },
      /* @__PURE__ */ React25.createElement(BsX2, { className: "h-5 w-5" })
    )))),
    duration > 0 && /* @__PURE__ */ React25.createElement(
      "div",
      {
        className: `h-1 w-full ${config.progressColor} ${progressClassName}`,
        style: { width: `${progress}%` }
      }
    )
  );
};
var Toast_default = Toast;

// src/components/Toast/ToastContainer.tsx
import React26, { useState as useState7, useCallback as useCallback2 } from "react";
var ToastContainer = ({
  position = "top-right",
  className = "",
  limit = 5
}) => {
  const [toasts, setToasts] = useState7([]);
  const addToast = useCallback2(
    (options) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = __spreadValues({
        id
      }, options);
      setToasts((prevToasts) => {
        const updatedToasts = [newToast, ...prevToasts];
        return updatedToasts.slice(0, limit);
      });
      return id;
    },
    [limit]
  );
  const removeToast = useCallback2((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  const success = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "success" }));
    },
    [addToast]
  );
  const error = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "error" }));
    },
    [addToast]
  );
  const warning = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "warning" }));
    },
    [addToast]
  );
  const info = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "info" }));
    },
    [addToast]
  );
  if (typeof window !== "undefined") {
    window.toast = {
      success,
      error,
      warning,
      info
    };
  }
  return /* @__PURE__ */ React26.createElement("div", { className: `fixed z-50 ${className}` }, toasts.map((toast) => /* @__PURE__ */ React26.createElement(
    Toast_default,
    __spreadProps(__spreadValues({
      key: toast.id,
      type: toast.type || "info"
    }, toast), {
      position: toast.position || position,
      onClose: removeToast
    })
  )));
};
var ToastContainer_default = ToastContainer;

// src/components/Tooltip/Tooltip.tsx
import React27, { useState as useState8, useRef as useRef6, useEffect as useEffect7, useCallback as useCallback3 } from "react";
var Tooltip = ({
  content,
  children,
  position = "top",
  delay = 200,
  className = "",
  contentClassName = "",
  arrowClassName = "",
  animation = "fade",
  animationDuration = "normal",
  maxWidth = "200px",
  interactive = false
}) => {
  const [isVisible, setIsVisible] = useState8(false);
  const [coords, setCoords] = useState8({ x: 0, y: 0 });
  const triggerRef = useRef6(null);
  const tooltipRef = useRef6(null);
  const timeoutRef = useRef6(
    void 0
  );
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-900",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-900",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-900",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-900"
  };
  const animationClasses = {
    fade: "animate-fade-in",
    zoom: "animate-zoom-in",
    slide: "animate-slide-in",
    bounce: "animate-bounce-in"
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  const updatePosition = useCallback3(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const trigger = triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    let x = 0;
    let y = 0;
    switch (position) {
      case "top":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.top + scrollY;
        break;
      case "bottom":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.bottom + scrollY;
        break;
      case "left":
        x = trigger.left + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
      case "right":
        x = trigger.right + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
    }
    setCoords({ x, y });
  }, [position]);
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };
  useEffect7(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, updatePosition]);
  return /* @__PURE__ */ React27.createElement(
    "div",
    {
      ref: triggerRef,
      className: `inline-block ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    },
    children,
    isVisible && /* @__PURE__ */ React27.createElement(
      "div",
      {
        ref: tooltipRef,
        style: {
          position: "absolute",
          left: coords.x,
          top: coords.y,
          maxWidth
        },
        className: `${positionClasses[position]} ${animationClasses[animation]} ${durationClasses[animationDuration]}`,
        onMouseEnter: interactive ? handleMouseEnter : void 0,
        onMouseLeave: interactive ? handleMouseLeave : void 0
      },
      /* @__PURE__ */ React27.createElement(
        "div",
        {
          className: `bg-gray-900 text-white text-sm rounded-lg py-2 px-3 shadow-lg ${contentClassName}`
        },
        content,
        /* @__PURE__ */ React27.createElement(
          "div",
          {
            className: `absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]} ${arrowClassName}`
          }
        )
      )
    )
  );
};
var Tooltip_default = Tooltip;

// src/components/Upload/Upload.tsx
import React28, { useRef as useRef7 } from "react";
var Upload = ({
  onChange,
  multiple = false,
  accept,
  className = ""
}) => {
  const inputRef = useRef7(null);
  const [dragActive, setDragActive] = React28.useState(false);
  const [files, setFiles] = React28.useState(null);
  const handleFiles = (fileList) => {
    setFiles(fileList);
    onChange(fileList);
  };
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      className: `border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${dragActive ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-300 dark:border-gray-600"} ${className}`,
      onClick: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.click();
      },
      onDragOver: (e) => {
        e.preventDefault();
        setDragActive(true);
      },
      onDragLeave: (e) => {
        e.preventDefault();
        setDragActive(false);
      },
      onDrop: (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
      }
    },
    /* @__PURE__ */ React28.createElement(
      "input",
      {
        ref: inputRef,
        type: "file",
        multiple,
        accept,
        className: "hidden",
        onChange: (e) => e.target.files && handleFiles(e.target.files)
      }
    ),
    /* @__PURE__ */ React28.createElement("div", { className: "text-gray-500 dark:text-gray-300 mb-2" }, "Drag & drop files here or", " ", /* @__PURE__ */ React28.createElement("span", { className: "text-blue-600 dark:text-blue-400 underline" }, "browse")),
    files && files.length > 0 && /* @__PURE__ */ React28.createElement("ul", { className: "mt-2 text-left text-xs text-gray-700 dark:text-gray-200" }, Array.from(files).map((file, i) => /* @__PURE__ */ React28.createElement("li", { key: i }, file.name)))
  );
};
var Upload_default = Upload;

// src/components/Tabs/Tabs.tsx
import React29 from "react";
var Tabs = ({
  items,
  defaultActiveKey,
  onChange,
  className = "",
  tabClassName = "",
  contentClassName = "",
  activeTabClassName = "",
  disabledTabClassName = ""
}) => {
  var _a;
  const [activeKey, setActiveKey] = React29.useState(
    defaultActiveKey || ((_a = items[0]) == null ? void 0 : _a.key)
  );
  const handleTabClick = (key) => {
    const tab = items.find((item) => item.key === key);
    if (tab && !tab.disabled) {
      setActiveKey(key);
      onChange == null ? void 0 : onChange(key);
    }
  };
  const activeTab = items.find((item) => item.key === activeKey);
  return /* @__PURE__ */ React29.createElement("div", { className: `flex flex-col ${className}` }, /* @__PURE__ */ React29.createElement("div", { className: "flex border-b border-gray-200 dark:border-gray-700" }, items.map((item) => {
    const Icon = item.icon;
    const isActive = item.key === activeKey;
    const isDisabled = item.disabled;
    return /* @__PURE__ */ React29.createElement(
      "button",
      {
        key: item.key,
        onClick: () => handleTabClick(item.key),
        disabled: isDisabled,
        className: `
                flex items-center gap-2 px-4 py-2 text-sm font-medium
                ${isActive ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}
                ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${tabClassName}
                ${isActive ? activeTabClassName : ""}
                ${isDisabled ? disabledTabClassName : ""}
              `
      },
      Icon && /* @__PURE__ */ React29.createElement(Icon, { className: "w-4 h-4" }),
      item.label
    );
  })), /* @__PURE__ */ React29.createElement("div", { className: `p-4 ${contentClassName}` }, activeTab == null ? void 0 : activeTab.content));
};
var Tabs_default = Tabs;
export {
  Alert_default as Alert,
  Avatar_default as Avatar,
  Badge_default as Badge,
  Breadcrumbs_default as Breadcrumbs,
  Button_default as Button,
  Calendar_default as Calendar,
  Card_default as Card,
  Collapse_default as Collapse,
  Input_default as Input,
  List_default as List,
  Modal_default as Modal,
  Pagination_default as Pagination,
  Popover_default as Popover,
  Progress_default as Progress,
  Rating_default as Rating,
  Select_default as Select,
  Skeleton_default as Skeleton,
  Slider_default as Slider,
  Spinner_default as Spinner,
  StatCard_default as StatCard,
  Stepper_default as Stepper,
  Table_default as Table,
  Tabs_default as Tabs,
  TagInput_default as TagInput,
  Timeline_default as Timeline,
  Toast_default as Toast,
  ToastContainer_default as ToastContainer,
  Tooltip_default as Tooltip,
  Upload_default as Upload
};
