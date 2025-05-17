import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  animation?: "pulse" | "bounce" | "none";
  dot?: boolean;
  count?: number;
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
    default: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
    primary: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    success:
      "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    warning:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    error: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    info: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
  };

  const sizeClasses = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-0.5",
    lg: "text-base px-2.5 py-1",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
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
    online: "bg-green-500 dark:bg-green-400",
    offline: "bg-gray-500 dark:bg-gray-400",
    away: "bg-yellow-500 dark:bg-yellow-400",
    busy: "bg-red-500 dark:bg-red-400",
  };

  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1",
  };

  const ribbonClasses = {
    primary: "bg-blue-500 dark:bg-blue-600",
    success: "bg-green-500 dark:bg-green-600",
    warning: "bg-yellow-500 dark:bg-yellow-600",
    error: "bg-red-500 dark:bg-red-600",
    info: "bg-indigo-500 dark:bg-indigo-600",
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

    if (count !== undefined) {
      if (count === 0 && !showZero) return null;
      return (
        <span className="inline-flex items-center justify-center">
          {count > maxCount ? `${maxCount}+` : count}
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
            className={`absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-8 -translate-y-8 ${ribbonClasses[ribbonColor]} text-white text-xs font-medium flex items-center justify-center`}
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
        } ${processing ? "animate-spin" : ""} ${className}`}
      >
        {renderContent()}
      </span>
    </div>
  );
};

export default Badge;
