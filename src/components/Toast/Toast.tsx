import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BsCheck, BsExclamationCircle, BsInfo, BsX } from "react-icons/bs";

/**
 * Type of toast notification
 * @typedef {'success' | 'error' | 'info' | 'warning'} ToastType
 */

/**
 * Props for the Toast component
 * @interface ToastProps
 * @property {string} id - Unique identifier for the toast
 * @property {ToastType} type - Type of toast notification (success, error, info, warning)
 * @property {string} message - Main message content to display
 * @property {string} [title] - Optional title for the toast
 * @property {number} [duration=5000] - Duration in milliseconds before auto-dismiss (0 for persistent)
 * @property {'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'} [position='top-right'] - Position of the toast on screen
 * @property {(id: string) => void} onClose - Callback function when toast is closed
 * @property {IconType} [icon] - Custom icon component to override default icons
 * @property {{ label: string; onClick: () => void }} [action] - Optional action button configuration
 * @property {string} [className] - Additional CSS classes for the toast container
 * @property {string} [contentClassName] - Additional CSS classes for the toast content
 * @property {string} [titleClassName] - Additional CSS classes for the toast title
 * @property {string} [messageClassName] - Additional CSS classes for the toast message
 * @property {string} [iconClassName] - Additional CSS classes for the toast icon
 * @property {string} [closeButtonClassName] - Additional CSS classes for the close button
 * @property {string} [actionButtonClassName] - Additional CSS classes for the action button
 * @property {string} [progressClassName] - Additional CSS classes for the progress bar
 * @property {'slide' | 'fade' | 'zoom' | 'bounce' | 'flip'} [animation='slide'] - Animation style for the toast
 * @property {'fast' | 'normal' | 'slow'} [animationDuration='normal'] - Duration of the animation
 */
export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  title?: string;
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  onClose: (id: string) => void;
  icon?: IconType;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  messageClassName?: string;
  iconClassName?: string;
  closeButtonClassName?: string;
  actionButtonClassName?: string;
  progressClassName?: string;
  animation?: "slide" | "fade" | "zoom" | "bounce" | "flip";
  animationDuration?: "fast" | "normal" | "slow";
}

/**
 * Toast component for displaying notifications
 * @component
 * @example
 * ```tsx
 * <Toast
 *   id="1"
 *   type="success"
 *   message="Operation successful!"
 *   title="Success"
 *   duration={3000}
 *   position="top-right"
 *   onClose={(id) => console.log(`Toast ${id} closed`)}
 * />
 * ```
 */
const Toast: React.FC<ToastProps> = ({
  id,
  type,
  message,
  title,
  duration = 5000,
  position = "top-right",
  onClose,
  icon,
  action,
  className = "",
  contentClassName = "",
  titleClassName = "",
  messageClassName = "",
  iconClassName = "",
  closeButtonClassName = "",
  actionButtonClassName = "",
  progressClassName = "",
  animation = "slide",
  animationDuration = "normal",
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toastConfig = {
    success: {
      icon: BsCheck,
      bgColor: "bg-green-50 dark:bg-green-900/50",
      textColor: "text-green-800 dark:text-green-200",
      borderColor: "border-green-200 dark:border-green-800",
      iconColor: "text-green-500 dark:text-green-400",
      progressColor: "bg-green-500 dark:bg-green-400",
    },
    error: {
      icon: BsExclamationCircle,
      bgColor: "bg-red-50 dark:bg-red-900/50",
      textColor: "text-red-800 dark:text-red-200",
      borderColor: "border-red-200 dark:border-red-800",
      iconColor: "text-red-500 dark:text-red-400",
      progressColor: "bg-red-500 dark:bg-red-400",
    },
    warning: {
      icon: BsExclamationCircle,
      bgColor: "bg-yellow-50 dark:bg-yellow-900/50",
      textColor: "text-yellow-800 dark:text-yellow-200",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      progressColor: "bg-yellow-500 dark:bg-yellow-400",
    },
    info: {
      icon: BsInfo,
      bgColor: "bg-blue-50 dark:bg-blue-900/50",
      textColor: "text-blue-800 dark:text-blue-200",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-500 dark:text-blue-400",
      progressColor: "bg-blue-500 dark:bg-blue-400",
    },
  };

  const config = toastConfig[type];
  const Icon = icon || config.icon;

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  const animationClasses = {
    slide: isExiting ? "animate-slide-out" : "animate-slide-in",
    fade: isExiting ? "animate-fade-out" : "animate-fade-in",
    zoom: isExiting ? "animate-zoom-out" : "animate-zoom-in",
    bounce: isExiting ? "animate-bounce-out" : "animate-bounce-in",
    flip: isExiting ? "animate-flip-out" : "animate-flip-in",
  };

  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500",
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onClose(id);
      }, 300); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isExiting, id, onClose]);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.max(0, 100 - (elapsed / duration) * 100);

      if (newProgress <= 0) {
        setProgress(0);
        setIsExiting(true);
      } else {
        setProgress(newProgress);
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    if (!isPaused && duration > 0) {
      startTime = Date.now();
      animationFrame = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, isPaused]);

  const handleClose = () => {
    setIsExiting(true);
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-[10000000] max-w-md w-full shadow-lg rounded-lg border ${config.bgColor} ${config.borderColor} ${animationClasses[animation]} ${durationClasses[animationDuration]} transform transition-all ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`p-4 ${contentClassName}`}>
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${config.iconColor} ${iconClassName}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="ml-3 w-0 flex-1">
            {title && (
              <p
                className={`text-sm font-medium ${config.textColor} ${titleClassName}`}
              >
                {title}
              </p>
            )}
            <p className={`text-sm ${config.textColor} ${messageClassName}`}>
              {message}
            </p>
            {action && (
              <div className="mt-3">
                <button
                  onClick={action.onClick}
                  className={`text-sm font-medium ${config.textColor} hover:underline focus:outline-none ${actionButtonClassName}`}
                >
                  {action.label}
                </button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={handleClose}
              className={`inline-flex text-gray-400 hover:text-gray-500 focus:outline-none ${closeButtonClassName}`}
            >
              <BsX className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {duration > 0 && (
        <div
          className={`h-1 w-full ${config.progressColor} ${progressClassName}`}
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
};

export default Toast;
