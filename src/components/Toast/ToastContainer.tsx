import React, { useState, useCallback } from "react";
import Toast, { ToastType } from "./Toast";

export interface ToastOptions {
  type?: ToastType;
  title?: string;
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  icon?: React.ComponentType;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  messageClassName?: string;
  iconClassName?: string;
  actionClassName?: string;
  closeButtonClassName?: string;
  progressBar?: boolean;
  pauseOnHover?: boolean;
}

export interface ToastContainerProps {
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  className?: string;
  limit?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
  message: string;
}

interface ToastMethods {
  success: (
    options: {
      title: string;
      message: string;
      duration?: number;
    } & ToastOptions
  ) => string;
  error: (
    options: {
      title: string;
      message: string;
      duration?: number;
    } & ToastOptions
  ) => string;
  warning: (
    options: {
      title: string;
      message: string;
      duration?: number;
    } & ToastOptions
  ) => string;
  info: (
    options: {
      title: string;
      message: string;
      duration?: number;
    } & ToastOptions
  ) => string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  position = "top-right",
  className = "",
  limit = 5,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (
      options: {
        title: string;
        message: string;
        duration?: number;
      } & ToastOptions
    ) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = {
        id,
        ...options,
      };

      setToasts((prevToasts) => {
        const updatedToasts = [newToast, ...prevToasts];
        return updatedToasts.slice(0, limit);
      });

      return id;
    },
    [limit]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback(
    (
      options: {
        title: string;
        message: string;
        duration?: number;
      } & ToastOptions
    ) => {
      return addToast({ ...options, type: "success" });
    },
    [addToast]
  );

  const error = useCallback(
    (
      options: {
        title: string;
        message: string;
        duration?: number;
      } & ToastOptions
    ) => {
      return addToast({ ...options, type: "error" });
    },
    [addToast]
  );

  const warning = useCallback(
    (
      options: {
        title: string;
        message: string;
        duration?: number;
      } & ToastOptions
    ) => {
      return addToast({ ...options, type: "warning" });
    },
    [addToast]
  );

  const info = useCallback(
    (
      options: {
        title: string;
        message: string;
        duration?: number;
      } & ToastOptions
    ) => {
      return addToast({ ...options, type: "info" });
    },
    [addToast]
  );

  // Expose methods to window for global access
  if (typeof window !== "undefined") {
    (window as unknown as { toast: ToastMethods }).toast = {
      success,
      error,
      warning,
      info,
    };
  }

  return (
    <div className={`fixed z-50 ${className}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type || "info"}
          {...toast}
          position={toast.position || position}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
