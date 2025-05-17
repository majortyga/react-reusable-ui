import React from "react";

export interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  showValue?: boolean;
  valuePosition?: "inside" | "outside";
  striped?: boolean;
  animated?: boolean;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
  valueClassName?: string;
  label?: string;
  labelPosition?: "top" | "bottom";
  labelClassName?: string;
}

const Progress: React.FC<ProgressProps> = ({
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
  labelClassName = "",
}) => {
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4",
  };

  const variantClasses = {
    default: "bg-gray-200 dark:bg-gray-700",
    primary: "bg-blue-200 dark:bg-blue-900",
    success: "bg-green-200 dark:bg-green-900",
    warning: "bg-yellow-200 dark:bg-yellow-900",
    error: "bg-red-200 dark:bg-red-900",
    info: "bg-indigo-200 dark:bg-indigo-900",
  };

  const barVariantClasses = {
    default: "bg-gray-600 dark:bg-gray-400",
    primary: "bg-blue-600 dark:bg-blue-400",
    success: "bg-green-600 dark:bg-green-400",
    warning: "bg-yellow-600 dark:bg-yellow-400",
    error: "bg-red-600 dark:bg-red-400",
    info: "bg-indigo-600 dark:bg-indigo-400",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const renderValue = () => {
    if (!showValue) return null;
    return (
      <span
        className={`text-xs font-medium ${
          valuePosition === "inside"
            ? "text-white"
            : "text-gray-700 dark:text-gray-300"
        } ${valueClassName}`}
      >
        {Math.round(percentage)}%
      </span>
    );
  };

  const renderLabel = () => {
    if (!label) return null;
    return (
      <div
        className={`text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${
          labelPosition === "bottom" ? "mt-1" : "mb-1"
        } ${labelClassName}`}
      >
        {label}
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {labelPosition === "top" && renderLabel()}
      <div
        className={`relative w-full overflow-hidden ${sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${trackClassName}`}
      >
        <div
          className={`h-full transition-all duration-300 ${
            barVariantClasses[variant]
          } ${roundedClasses[rounded]} ${striped ? "bg-stripes" : ""} ${
            animated ? "animate-progress" : ""
          } ${barClassName}`}
          style={{ width: `${percentage}%` }}
        >
          {valuePosition === "inside" && renderValue()}
        </div>
      </div>
      {valuePosition === "outside" && (
        <div className="mt-1 flex justify-end">{renderValue()}</div>
      )}
      {labelPosition === "bottom" && renderLabel()}
    </div>
  );
};

export default Progress;
