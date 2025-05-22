import React, { useState, useRef, useEffect, forwardRef } from "react";
import type { IconType } from "react-icons";

export type PinInputVariant = "outline" | "filled" | "flushed" | "unstyled";
export type PinInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface PinInputProps {
  /** Length of the PIN */
  length?: number;
  /** Whether the PIN input is disabled */
  disabled?: boolean;
  /** Whether to mask the PIN input */
  mask?: boolean;
  /** Whether to auto-focus the first input */
  autoFocus?: boolean;
  /** Callback when PIN is complete */
  onComplete?: (value: string) => void;
  /** Callback when PIN changes */
  onChange?: (value: string) => void;
  /** Custom class names */
  wrapperClassName?: string;
  inputClassName?: string;
  /** Custom theme */
  theme?: "light" | "dark";
  /** Custom icons */
  leftIcon?: IconType;
  rightIcon?: IconType;
  /** Error message */
  error?: string;
  /** Whether to show error state */
  hasError?: boolean;
  /** Placeholder character */
  placeholder?: string;
  /** Whether to allow paste */
  allowPaste?: boolean;
  /** Whether to allow clear */
  allowClear?: boolean;
  /** Whether to allow backspace */
  allowBackspace?: boolean;
  /** Whether to allow numbers only */
  numbersOnly?: boolean;
  /** Whether to allow letters only */
  lettersOnly?: boolean;
  /** Whether to allow alphanumeric */
  alphanumeric?: boolean;
  /** Whether to allow special characters */
  allowSpecial?: boolean;
  /** Whether to show character count */
  showCharacterCount?: boolean;
  /** Maximum length of each input */
  maxLength?: number;
  /** Whether to show the PIN */
  showPin?: boolean;
  /** Whether to auto-submit on complete */
  autoSubmit?: boolean;
  /** Whether to focus next input on change */
  focusNextOnChange?: boolean;
  /** Whether to focus previous input on backspace */
  focusPrevOnBackspace?: boolean;
  /** Whether to clear all inputs on complete */
  clearOnComplete?: boolean;
  /** Whether to reset on complete */
  resetOnComplete?: boolean;
  /** Whether to validate on complete */
  validateOnComplete?: boolean;
  /** Validation pattern */
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
  /** Input variant */
  variant?: PinInputVariant;
  /** Input size */
  size?: PinInputSize;
}

const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      length = 4,
      disabled = false,
      mask = false,
      autoFocus = true,
      onComplete,
      onChange,
      wrapperClassName = "",
      inputClassName = "",
      theme,
      error,
      hasError,
      placeholder = "•",
      allowPaste = true,
      allowClear = true,
      allowBackspace = true,
      numbersOnly = true,
      lettersOnly = false,
      alphanumeric = false,
      allowSpecial = false,
      showCharacterCount = false,
      maxLength = 1,
      showPin = false,
      autoSubmit = false,
      focusNextOnChange = true,
      focusPrevOnBackspace = true,
      clearOnComplete = false,
      resetOnComplete = false,
      validateOnComplete = false,
      validation,
      variant = "outline",
      size = "md",
    },
    ref
  ) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Initialize refs
    useEffect(() => {
      inputRefs.current = Array(length).fill(null);
    }, [length]);

    // Auto-focus first input
    useEffect(() => {
      if (autoFocus && inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, [autoFocus]);

    const validateInput = (value: string): boolean => {
      if (numbersOnly && !/^\d*$/.test(value)) return false;
      if (lettersOnly && !/^[a-zA-Z]*$/.test(value)) return false;
      if (alphanumeric && !/^[a-zA-Z0-9]*$/.test(value)) return false;
      if (!allowSpecial && /[^a-zA-Z0-9]/.test(value)) return false;
      return true;
    };

    const updateValues = (newValues: string[]) => {
      setValues(newValues);
      const pin = newValues.join("");
      onChange?.(pin);

      if (autoSubmit && pin.length === length) {
        onComplete?.(pin);
        if (clearOnComplete) {
          setValues(Array(length).fill(""));
        }
        if (resetOnComplete) {
          setValues(Array(length).fill(""));
          if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
          }
        }
      }

      if (validateOnComplete && pin.length === length && validation?.pattern) {
        if (!validation.pattern.test(pin)) {
          // Handle validation error
          console.error(validation.message || "Invalid PIN");
        }
      }
    };

    const handleInputChange = (
      index: number,
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = e.target.value;
      if (!validateInput(value)) return;

      // Get the last character if multiple characters are pasted
      const lastChar = value.slice(-1);

      const newValues = [...values];
      newValues[index] = lastChar;
      updateValues(newValues);

      // Move to next input if current is filled
      if (lastChar && index < length - 1 && focusNextOnChange) {
        requestAnimationFrame(() => {
          const nextInput = inputRefs.current[index + 1];
          if (nextInput) {
            nextInput.focus();
            nextInput.setSelectionRange(0, 0);
          }
        });
      }
    };

    const handleKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Backspace" && allowBackspace) {
        const currentValue = values[index];

        if (currentValue) {
          // Clear current input
          const newValues = [...values];
          newValues[index] = "";
          updateValues(newValues);
        } else if (index > 0 && focusPrevOnBackspace) {
          // Move to previous input
          const prevInput = inputRefs.current[index - 1];
          if (prevInput) {
            prevInput.focus();
            prevInput.setSelectionRange(0, 0);
          }
        }
      } else if (e.key === "Delete" && allowClear) {
        // Clear all inputs
        setValues(Array(length).fill(""));
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        const prevInput = inputRefs.current[index - 1];
        if (prevInput) {
          prevInput.focus();
          prevInput.setSelectionRange(0, 0);
        }
      } else if (e.key === "ArrowRight" && index < length - 1) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(0, 0);
        }
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      if (!allowPaste) return;

      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").slice(0, length);

      if (!validateInput(pastedData)) return;

      const newValues = [...values];
      for (let i = 0; i < pastedData.length; i++) {
        if (i < length) {
          newValues[i] = pastedData[i];
        }
      }
      updateValues(newValues);

      // Focus next empty input or last input
      const nextEmptyIndex = newValues.findIndex((v) => !v);
      const targetIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : length - 1;
      requestAnimationFrame(() => {
        const targetInput = inputRefs.current[targetIndex];
        if (targetInput) {
          targetInput.focus();
          targetInput.setSelectionRange(0, 0);
        }
      });
    };

    const handleFocus = (index: number) => {
      setFocusedIndex(index);
    };

    const handleBlur = () => {
      setFocusedIndex(-1);
    };

    const getSizeClasses = () => {
      switch (size) {
        case "xs":
          return "w-8 h-8 text-xs";
        case "sm":
          return "w-10 h-10 text-sm";
        case "md":
          return "w-12 h-12 text-base";
        case "lg":
          return "w-14 h-14 text-lg";
        case "xl":
          return "w-16 h-16 text-xl";
        default:
          return "w-12 h-12 text-base";
      }
    };

    const getVariantClasses = () => {
      const baseClasses = "text-center rounded-md outline-none transition-all";

      switch (variant) {
        case "outline":
          return `${baseClasses} border bg-transparent`;
        case "filled":
          return `${baseClasses} border-transparent`;
        case "flushed":
          return `${baseClasses} border-b border-x-0 border-t-0 rounded-none bg-transparent`;
        case "unstyled":
          return `${baseClasses} border-0 bg-transparent p-0`;
        default:
          return `${baseClasses} border bg-transparent`;
      }
    };

    const getInputClasses = () => {
      const sizeClasses = getSizeClasses();
      const variantClasses = getVariantClasses();
      const themeClasses =
        theme === "dark"
          ? "bg-gray-800 text-white border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          : theme === "light"
          ? "bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
      const errorClasses = hasError
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        : "";
      const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

      return `${sizeClasses} ${variantClasses} ${themeClasses} ${errorClasses} ${disabledClasses} ${inputClassName}`;
    };

    return (
      <div ref={ref} className={`flex flex-col gap-2 ${wrapperClassName}`}>
        <div className="flex gap-2">
          {Array.from({ length }).map((_, index) => (
            <div key={index} className="relative">
              <input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type={mask && !showPin ? "password" : "text"}
                value={values[index]}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                className={getInputClasses()}
              />
              {showCharacterCount && (
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                  {values[index].length}/{maxLength}
                </div>
              )}
            </div>
          ))}
        </div>
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </div>
    );
  }
);

PinInput.displayName = "PinInput";

export default PinInput;
