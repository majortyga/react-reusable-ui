/**
 * Progress Component
 *
 * A versatile and customizable progress indicator for React, supporting both linear (bar) and circular types.
 * Features include:
 * - Linear and circular progress types
 * - Multiple color variants
 * - Size options
 * - Striped and animated styles
 * - Value display (center, outside, or at the arc tip for circular)
 * - Customizable edge value circle (color, shadow)
 * - Labels and accessibility
 * - Full dark mode support
 *
 * @module Progress
 */
import React from "react";

/**
 * Props for the Progress component.
 */
export interface ProgressProps {
  /**
   * Current progress value (between 0 and max).
   */
  value: number;
  /**
   * Maximum value for the progress (default: 100).
   */
  max?: number;
  /**
   * Size of the progress indicator.
   * - 'sm': Small
   * - 'md': Medium (default)
   * - 'lg': Large
   */
  size?: "sm" | "md" | "lg";
  /**
   * Color variant of the progress indicator.
   * - 'default', 'primary', 'success', 'warning', 'error', 'info'
   */
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  /**
   * Border radius for the bar progress (not used for circular).
   * - 'none', 'sm', 'md', 'lg', 'full' (default: 'full')
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  /**
   * Whether to show the progress value as a label.
   */
  showValue?: boolean;
  /**
   * Where to display the value for bar progress.
   * - 'inside': Centered inside the bar
   * - 'outside': Below the bar, right-aligned
   * (default: 'inside')
   */
  valuePosition?: "inside" | "outside";
  /**
   * Whether to show a striped pattern on the bar/circular arc.
   */
  striped?: boolean;
  /**
   * Whether to animate the stripes (if striped is true).
   */
  animated?: boolean;
  /**
   * Custom class for the outer container.
   */
  className?: string;
  /**
   * Custom class for the track (background) element.
   */
  trackClassName?: string;
  /**
   * Custom class for the progress bar/arc element.
   */
  barClassName?: string;
  /**
   * Custom class for the value label.
   */
  valueClassName?: string;
  /**
   * Optional label for the progress indicator.
   */
  label?: string;
  /**
   * Where to display the label (bar only).
   * - 'top': Above the bar (default)
   * - 'bottom': Below the bar
   */
  labelPosition?: "top" | "bottom";
  /**
   * Custom class for the label.
   */
  labelClassName?: string;
  /**
   * Type of progress indicator.
   * - 'bar': Linear progress bar (default)
   * - 'circular': Circular progress indicator
   */
  type?: "bar" | "circular";
  /**
   * Thickness of the bar or arc (circular only).
   * (default: 8)
   */
  thickness?: number;
  /**
   * Where to display the value for circular progress.
   * - 'center': Centered in the circle (default)
   * - 'edge': At the tip of the arc
   */
  valueDisplayPosition?: "center" | "edge";
  /**
   * Background color for the edge value circle (circular, edge only).
   * (default: uses variant color)
   */
  edgeValueBg?: string;
  /**
   * Box shadow for the edge value circle (circular, edge only).
   * (default: shadow-lg)
   */
  edgeValueShadow?: string;
}

// Define stroke colors for SVG
const strokeColors: Record<string, string> = {
  default: "#4B5563", // gray-600
  primary: "#2563EB", // blue-600
  success: "#16A34A", // green-600
  warning: "#F59E42", // yellow-500
  error: "#DC2626", // red-600
  info: "#6366F1", // indigo-500
};
const trackStrokeColors: Record<string, string> = {
  default: "#E5E7EB", // gray-200
  primary: "#DBEAFE", // blue-200
  success: "#BBF7D0", // green-200
  warning: "#FEF3C7", // yellow-200
  error: "#FECACA", // red-200
  info: "#E0E7FF", // indigo-200
};

/**
 * Progress component for displaying linear or circular progress indicators.
 *
 * @param props ProgressProps
 * @returns JSX.Element
 */
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
  type = "bar",
  thickness = 8,
  valueDisplayPosition = "center",
  edgeValueBg = "#22c55e", // Tailwind green-500
  edgeValueShadow = "0 2px 8px 0 rgba(34,197,94,0.3)",
}) => {
  const sizeClasses = {
    sm: type === "bar" ? "h-1" : "w-24 h-24",
    md: type === "bar" ? "h-2" : "w-32 h-32",
    lg: type === "bar" ? "h-4" : "w-48 h-48",
  };

  // Larger pixel values for better visibility
  const sizeValues = {
    sm: 96,
    md: 128,
    lg: 192,
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
          valuePosition === "inside" && type === "bar"
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
        className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${
          labelPosition === "bottom" ? "mt-1" : "mb-1"
        } ${labelClassName}`}
      >
        {label}
      </div>
    );
  };

  const renderCircularProgress = () => {
    const circleSize = sizeValues[size];
    const padding = circleSize * 0.12;
    const svgSize = circleSize + 2 * padding;
    const radius = (circleSize - thickness) / 2;
    const center = padding + circleSize / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // For edge value display
    let edgeValue = null;
    if (showValue && valueDisplayPosition === "edge") {
      // Angle in radians (start at top, clockwise)
      const angle = (percentage / 100) * 2 * Math.PI - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      const edgeCircleSize = circleSize * 0.22;
      edgeValue = (
        <foreignObject
          x={x - edgeCircleSize / 2}
          y={y - edgeCircleSize / 2}
          width={edgeCircleSize}
          height={edgeCircleSize}
          style={{ overflow: "visible" }}
        >
          <div
            className={`rounded-full flex items-center justify-center text-white font-semibold select-none pointer-events-none ${
              barVariantClasses[variant]
            } ${
              edgeValueShadow === "0 2px 8px 0 rgba(34,197,94,0.3)"
                ? "shadow-lg"
                : edgeValueShadow
            } ${valueClassName}`}
            style={{
              width: edgeCircleSize,
              height: edgeCircleSize,
              background: barVariantClasses[variant],
              boxShadow:
                edgeValueShadow !== "0 2px 8px 0 rgba(34,197,94,0.3)"
                  ? edgeValueShadow
                  : undefined,
              fontSize: circleSize * 0.08,
            }}
          >
            {Math.round(percentage)}%
          </div>
        </foreignObject>
      );
    }

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          className={sizeClasses[size]}
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          {/* Track: always a full circle */}
          <circle
            stroke={trackStrokeColors[variant]}
            strokeWidth={thickness}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          {/* Progress arc: overlays the track, starts at 12 o'clock */}
          <circle
            stroke={strokeColors[variant]}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
            style={{
              transformOrigin: "center",
              transform: `rotate(-90deg)`, // Only the arc is rotated
              transition: "stroke-dashoffset 0.3s",
            }}
          />
          {edgeValue}
        </svg>
        {showValue && valueDisplayPosition !== "edge" && (
          <div className="absolute inset-0 flex items-center justify-center">
            {renderValue()}
          </div>
        )}
      </div>
    );
  };

  const renderBarProgress = () => (
    <div className={`w-full ${className} relative`}>
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
          {/* Only render value inside the bar if valuePosition is not 'inside' */}
          {valuePosition !== "inside" &&
            valuePosition !== "outside" &&
            renderValue()}
        </div>
        {/* Absolutely center the value if valuePosition is 'inside' */}
        {showValue && valuePosition === "inside" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {renderValue()}
          </div>
        )}
      </div>
      {valuePosition === "outside" && (
        <div className="mt-1 flex justify-end">{renderValue()}</div>
      )}
      {labelPosition === "bottom" && renderLabel()}
    </div>
  );

  return type === "circular" ? renderCircularProgress() : renderBarProgress();
};

export default Progress;
