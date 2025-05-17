import React from "react";
import { IconType } from "react-icons";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: IconType;
  rightIcon?: IconType;
  isLoading?: boolean;
  fullWidth?: boolean;
  iconContainerClassName?: string;
  iconClassName?: string;
  spinnerClassName?: string;
  theme?: "light" | "dark";
}

const Button: React.FC<ButtonProps> = ({
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
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      theme === "dark"
        ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
        : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      theme === "dark"
        ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500"
        : "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      theme === "dark"
        ? "border-2 border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500"
        : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost:
      theme === "dark"
        ? "text-gray-300 hover:bg-gray-700 focus:ring-gray-500"
        : "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass =
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className={`animate-spin -ml-1 mr-2 h-4 w-4 ${spinnerClassName}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && LeftIcon && (
        <div className={`mr-2 ${iconContainerClassName}`}>
          <LeftIcon className={`w-5 h-5 ${iconClassName}`} />
        </div>
      )}
      {children}
      {!isLoading && RightIcon && (
        <div className={`ml-2 ${iconContainerClassName}`}>
          <RightIcon className={`w-5 h-5 ${iconClassName}`} />
        </div>
      )}
    </button>
  );
};

export default Button;
