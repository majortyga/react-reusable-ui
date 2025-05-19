import React from "react";
import { IconType } from "react-icons";
import { HiArrowUp, HiArrowDown, HiExclamationCircle } from "react-icons/hi2";

export interface StatCardProps {
  /** The title of the stat card */
  title: string;
  /** The main value to display */
  value: string | number;
  /** Optional icon component */
  icon?: IconType;
  /** Trend information */
  trend?: {
    value: number;
    isPositive: boolean;
    label?: string;
    showArrow?: boolean;
  };
  /** Additional description text */
  description?: string;
  /** Additional class for the card container */
  className?: string;
  /** Additional class for the icon container */
  iconClassName?: string;
  /** Additional class for the trend indicator */
  trendClassName?: string;
  /** Card style variant */
  variant?: "default" | "bordered" | "elevated" | "gradient";
  /** Loading state */
  loading?: boolean;
  /** Skeleton loading state */
  skeleton?: boolean;
  /** Click handler for the card */
  onClick?: () => void;
  /** Custom colors for the card */
  colors?: {
    bg?: string;
    text?: string;
    border?: string;
    iconBg?: string;
    iconColor?: string;
    trendPositive?: string;
    trendNegative?: string;
    gradient?: {
      from: string;
      to: string;
    };
  };
  /** Alert state */
  alert?: {
    message: string;
    type: "info" | "warning" | "error" | "success";
  };
  /** Prefix for the value */
  prefix?: string;
  /** Suffix for the value */
  suffix?: string;
  /** Format the value (e.g., currency, percentage) */
  format?: "number" | "currency" | "percentage" | "custom";
  /** Custom formatter function */
  formatter?: (value: string | number) => string;
  /** Animation duration for value changes */
  animationDuration?: number;
}

const StatCard: React.FC<StatCardProps> = ({
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
  animationDuration = 300,
}) => {
  const getVariantClasses = () => {
    const baseClasses = {
      bg: colors.bg || "bg-white dark:bg-gray-800",
      border: colors.border || "border-gray-200 dark:border-gray-700",
      text: colors.text || "text-gray-900 dark:text-white",
    };

    switch (variant) {
      case "bordered":
        return `border ${baseClasses.border}`;
      case "elevated":
        return `${baseClasses.bg} shadow-lg hover:shadow-xl transition-shadow duration-200`;
      case "gradient":
        const gradientFrom = colors.gradient?.from || "from-blue-500";
        const gradientTo = colors.gradient?.to || "to-blue-600";
        return `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`;
      default:
        return baseClasses.bg;
    }
  };

  const formatValue = (val: string | number) => {
    if (formatter) return formatter(val);
    if (typeof val === "number") {
      switch (format) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
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

  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2" />
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
    </div>
  );

  if (loading || skeleton) {
    return (
      <div
        className={`
          p-6 rounded-lg
          ${getVariantClasses()}
          ${className}
        `}
      >
        {renderSkeleton()}
      </div>
    );
  }

  return (
    <div
      className={`
        p-6 rounded-lg
        ${getVariantClasses()}
        ${onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : ""}
        ${className}
      `}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p
            className="mt-2 text-3xl font-semibold"
            style={{
              transition: `all ${animationDuration}ms ease-in-out`,
            }}
          >
            {prefix && <span className="text-lg">{prefix}</span>}
            {formatValue(value)}
            {suffix && <span className="text-lg">{suffix}</span>}
          </p>
        </div>
        {Icon && (
          <div
            className={`
              p-3 rounded-full
              ${colors.iconBg || "bg-blue-100 dark:bg-blue-900"}
              ${iconClassName}
            `}
          >
            <Icon
              className={`w-6 h-6 ${
                colors.iconColor || "text-blue-600 dark:text-blue-400"
              }`}
            />
          </div>
        )}
      </div>
      {(trend || description) && (
        <div className="mt-4 flex items-center justify-between">
          {trend && (
            <div
              className={`
                flex items-center gap-1 text-sm
                ${
                  trend.isPositive
                    ? colors.trendPositive ||
                      "text-green-600 dark:text-green-400"
                    : colors.trendNegative || "text-red-600 dark:text-red-400"
                }
                ${trendClassName}
              `}
            >
              {trend.showArrow !== false &&
                (trend.isPositive ? (
                  <HiArrowUp className="w-4 h-4" />
                ) : (
                  <HiArrowDown className="w-4 h-4" />
                ))}
              <span>
                {Math.abs(trend.value)}%
                {trend.label && <span className="ml-1">{trend.label}</span>}
              </span>
            </div>
          )}
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      {alert && (
        <div className={getAlertClasses()}>
          <HiExclamationCircle className="w-4 h-4" />
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default StatCard;
