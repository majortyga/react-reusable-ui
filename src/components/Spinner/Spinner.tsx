import React from "react";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  text?: string;
  textPosition?: "left" | "right" | "top" | "bottom";
  type?: "circular" | "dots" | "pulse" | "gradient" | "bounce";
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

const colorMap = {
  primary: "#2563eb",
  secondary: "#64748b",
  success: "#16a34a",
  danger: "#dc2626",
  warning: "#eab308",
  info: "#06b6d4",
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "primary",
  text,
  textPosition = "right",
  type = "circular",
}) => {
  const px = sizeMap[size];
  const color = colorMap[variant];

  const textPositionClasses = {
    left: "flex-row-reverse",
    right: "flex-row",
    top: "flex-col-reverse",
    bottom: "flex-col",
  };

  // --- Redesigned Dots Spinner ---
  const renderDotsSpinner = () => (
    <div className="flex items-center gap-1 relative">
      <style>{`
        @keyframes spinner-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: px / 2.5,
            height: px / 2.5,
            background: color,
            borderRadius: "50%",
            display: "inline-block",
            animation: `spinner-dot-bounce 1.2s infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );

  // --- Redesigned Bounce Spinner ---
  const renderBounceSpinner = () => (
    <div className="flex items-end gap-1 relative">
      <style>{`
        @keyframes spinner-bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `}</style>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: px / 3,
            height: px,
            background: color,
            borderRadius: px / 2,
            display: "inline-block",
            animation: `spinner-bounce 0.8s infinite`,
            animationDelay: `${i * 0.15}s`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );

  // --- Redesigned Gradient Spinner ---
  const renderGradientSpinner = () => (
    <span
      style={{
        display: "inline-block",
        width: px,
        height: px,
        background: `conic-gradient(${color} 10%, transparent 60%, ${color} 100%)`,
        borderRadius: "50%",
        animation: "spinner-gradient-spin 1s linear infinite",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes spinner-gradient-spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: px * 0.6,
          height: px * 0.6,
          background: "var(--tw-bg-opacity, 1) #fff",
          borderRadius: "50%",
          zIndex: 1,
          boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
        }}
        className="dark:bg-gray-900"
      />
    </span>
  );

  // --- Circular Spinner (unchanged, but improved for clarity) ---
  const renderCircularSpinner = () => (
    <span
      style={{
        display: "inline-block",
        width: px,
        height: px,
        border: `${px / 8}px solid ${color}33`,
        borderTop: `${px / 8}px solid ${color}`,
        borderRadius: "50%",
        animation: "spinner-circular-spin 0.8s linear infinite",
      }}
    >
      <style>{`
        @keyframes spinner-circular-spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );

  // --- Pulse Spinner (unchanged) ---
  const renderPulseSpinner = () => (
    <span className="relative inline-block">
      <style>{`
        @keyframes spinner-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      <span
        style={{
          width: px,
          height: px,
          background: color,
          borderRadius: "50%",
          display: "inline-block",
          animation: "spinner-pulse 1s infinite cubic-bezier(.66,0,0,1)",
        }}
      />
    </span>
  );

  let spinnerContent: React.ReactNode;
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

  return (
    <div
      className={`flex items-center gap-2 ${textPositionClasses[textPosition]}`}
    >
      {spinnerContent}
      <span className={`text-sm`} style={{ color }}>
        {text}
      </span>
    </div>
  );
};

export default Spinner;
