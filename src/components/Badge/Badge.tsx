import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  animation?: "pulse" | "bounce" | "none";
  dot?: boolean;
  count?: number | string;
  maxCount?: number;
  showZero?: boolean;
  offset?: [number, number];
  status?: "online" | "offline" | "away" | "busy";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  standalone?: boolean;
  processing?: boolean;
  ribbon?: boolean;
  ribbonText?: string;
  ribbonColor?: "primary" | "success" | "warning" | "error" | "info";
}

const Badge: React.FC<BadgeProps> = ({
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
  ribbonColor = "primary",
}) => {
  const variantClasses = {
    default:
      "bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    primary:
      "bg-blue-50/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
    success:
      "bg-emerald-50/80 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
    warning:
      "bg-amber-50/80 dark:bg-amber-900/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
    error:
      "bg-rose-50/80 dark:bg-rose-900/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800",
    info: "bg-sky-50/80 dark:bg-sky-900/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 min-w-[1.25rem] h-5",
    md: "text-sm px-2.5 py-0.5 min-w-[1.5rem] h-6",
    lg: "text-base px-3 py-1 min-w-[1.75rem] h-7",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    none: "",
  };

  const statusClasses = {
    online: "bg-emerald-500 dark:bg-emerald-400",
    offline: "bg-gray-400 dark:bg-gray-500",
    away: "bg-amber-500 dark:bg-amber-400",
    busy: "bg-rose-500 dark:bg-rose-400",
  };

  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1",
  };

  const ribbonClasses = {
    primary: "bg-blue-600 dark:bg-blue-500",
    success: "bg-emerald-600 dark:bg-emerald-500",
    warning: "bg-amber-600 dark:bg-amber-500",
    error: "bg-rose-600 dark:bg-rose-500",
    info: "bg-sky-600 dark:bg-sky-500",
  };

  const renderContent = () => {
    if (dot) {
      return (
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            status
              ? statusClasses[status]
              : variantClasses[variant].split(" ")[0]
          }`}
        />
      );
    }

    if (typeof count === "number") {
      if (count === 0 && !showZero) return null;
      return (
        <span className="inline-flex items-center justify-center font-medium">
          {count > maxCount ? `${maxCount}+` : count}
        </span>
      );
    }

    if (typeof count === "string") {
      return (
        <span className="inline-flex items-center justify-center font-medium">
          {count}
        </span>
      );
    }

    return children;
  };

  const badgeStyle = {
    transform: `translate(${offset[0]}px, ${offset[1]}px)`,
  };

  if (standalone) {
    return (
      <span
        style={badgeStyle}
        className={`inline-flex items-center justify-center ${
          dot ? "w-2 h-2" : sizeClasses[size]
        } ${roundedClasses[rounded]} ${variantClasses[variant]} ${
          animationClasses[animation]
        } ${className}`}
      >
        {renderContent()}
      </span>
    );
  }

  if (ribbon) {
    return (
      <div className="relative">
        {children}
        <div
          className={`absolute top-0 right-0 w-24 h-24 overflow-hidden ${
            ribbonText ? "h-8" : ""
          }`}
        >
          <div
            className={`absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-8 -translate-y-8 ${ribbonClasses[ribbonColor]} text-white text-xs font-medium flex items-center justify-center shadow-sm`}
          >
            {ribbonText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      {children}
      <span
        style={badgeStyle}
        className={`absolute ${
          positionClasses[position]
        } z-10 inline-flex items-center justify-center ${
          dot ? "w-2 h-2" : sizeClasses[size]
        } ${roundedClasses[rounded]} ${variantClasses[variant]} ${
          animationClasses[animation]
        } ${processing ? "animate-spin" : ""} ${className} shadow-sm`}
      >
        {renderContent()}
      </span>
    </div>
  );
};

export default Badge;
