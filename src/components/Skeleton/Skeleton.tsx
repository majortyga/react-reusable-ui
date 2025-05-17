import React from "react";

export interface SkeletonProps {
  type?: "text" | "circle" | "rectangle" | "avatar" | "card" | "list" | "table";
  width?: number | string;
  height?: number | string;
  className?: string;
  animation?: "pulse" | "wave" | "shimmer" | "none";
  rounded?: boolean;
  count?: number;
  gap?: number;
  direction?: "row" | "column";
  variant?: "light" | "dark";
  speed?: "slow" | "normal" | "fast";
}

const Skeleton: React.FC<SkeletonProps> = ({
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
  speed = "normal",
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700";
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    shimmer: "animate-shimmer",
    none: "",
  };

  const speedClasses = {
    slow: "duration-1000",
    normal: "duration-500",
    fast: "duration-300",
  };

  const variantClasses = {
    light: "bg-gray-200 dark:bg-gray-700",
    dark: "bg-gray-300 dark:bg-gray-600",
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
        return (
          <div
            className={`${baseClasses} ${getTypeClasses()} ${className} ${
              variantClasses[variant]
            } ${animationClasses[animation]} ${speedClasses[speed]}`}
            style={{ width, height }}
          >
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" />
            </div>
          </div>
        );
      case "list":
        return (
          <div
            className={`${baseClasses} ${getTypeClasses()} ${className} ${
              variantClasses[variant]
            } ${animationClasses[animation]} ${speedClasses[speed]}`}
            style={{ width, height }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"
              />
            ))}
          </div>
        );
      case "table":
        return (
          <div
            className={`${baseClasses} ${getTypeClasses()} ${className} ${
              variantClasses[variant]
            } ${animationClasses[animation]} ${speedClasses[speed]}`}
            style={{ width, height }}
          >
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex space-x-2">
                  <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`${baseClasses} ${getTypeClasses()} ${
              rounded ? "rounded" : ""
            } ${className} ${variantClasses[variant]} ${
              animationClasses[animation]
            } ${speedClasses[speed]}`}
            style={{ width, height }}
          />
        );
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: direction,
    gap: `${gap}px`,
  };

  return (
    <div style={containerStyle}>
      {[...Array(count)].map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default Skeleton;
