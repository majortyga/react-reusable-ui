import React from "react";

export interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
  // Custom color options
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const typeStyles = {
  success: {
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  error: {
    bg: "bg-rose-50 dark:bg-rose-950/50",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/50",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
  },
  info: {
    bg: "bg-sky-50 dark:bg-sky-950/50",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-800",
  },
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  description,
  closable = false,
  onClose,
  bgColor,
  textColor,
  borderColor,
}) => {
  const defaultStyles = typeStyles[type];
  const styles = {
    bg: bgColor || defaultStyles.bg,
    text: textColor || defaultStyles.text,
    border: borderColor || defaultStyles.border,
  };

  return (
    <div
      className={`flex items-start gap-3 border-l-4 p-4 rounded-md shadow-sm ${styles.bg} ${styles.text} ${styles.border}`}
    >
      <div className="flex-1">
        <div className="font-semibold">{message}</div>
        {description && (
          <div className="text-sm mt-1 opacity-80">{description}</div>
        )}
      </div>
      {closable && (
        <button
          onClick={onClose}
          className="ml-2 text-lg font-bold opacity-60 hover:opacity-100"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
