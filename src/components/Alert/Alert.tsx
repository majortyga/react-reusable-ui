import React from "react";

export interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
}

const typeStyles = {
  success:
    "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
  error:
    "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
  warning:
    "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700",
  info: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  description,
  closable = false,
  onClose,
}) => (
  <div
    className={`flex items-start gap-3 border-l-4 p-4 rounded-md shadow-sm ${typeStyles[type]}`}
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

export default Alert;
