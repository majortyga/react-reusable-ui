import React, { useEffect, useRef, useState, useCallback } from "react";
import { IoClose } from "react-icons/io5";

/**
 * A flexible and customizable modal dialog component that supports various features like animations, positioning, and draggable behavior.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Example Modal"
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 *
 * // With different sizes
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="lg"
 * >
 *   <p>Large modal content</p>
 * </Modal>
 *
 * // Full screen modal
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   size="screen"
 * >
 *   <p>Full screen content</p>
 * </Modal>
 *
 * // With dark mode support
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   contentClassName="bg-white dark:bg-gray-800"
 * >
 *   <p>Dark mode compatible content</p>
 * </Modal>
 *
 * // With custom backdrop click handling
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   closeOnOverlayClick={false}
 * >
 *   <p>Modal that doesn't close on backdrop click</p>
 * </Modal>
 * ```
 */
export interface ModalProps {
  /**
   * Controls whether the modal is visible or hidden
   * @required
   */
  isOpen: boolean;

  /**
   * Callback function to be called when the modal is closed
   * @required
   * @example
   * ```tsx
   * onClose={() => setIsOpen(false)}
   * ```
   */
  onClose: () => void;

  /**
   * Optional title text to be displayed in the modal header
   * @example
   * ```tsx
   * title="Confirmation Dialog"
   * ```
   */
  title?: string;

  /**
   * Content to be rendered inside the modal body
   * @required
   * @example
   * ```tsx
   * children={<div>Your content here</div>}
   * ```
   */
  children: React.ReactNode;

  /**
   * Size of the modal
   * @default "md"
   * @example
   * ```tsx
   * size="sm" // Small modal (max-width: 24rem)
   * size="md" // Medium modal (max-width: 28rem)
   * size="lg" // Large modal (max-width: 32rem)
   * size="xl" // Extra large modal (max-width: 36rem)
   * size="2xl" // 2X large modal (max-width: 42rem)
   * size="3xl" // 3X large modal (max-width: 48rem)
   * size="4xl" // 4X large modal (max-width: 56rem)
   * size="5xl" // 5X large modal (max-width: 64rem)
   * size="6xl" // 6X large modal (max-width: 72rem)
   * size="7xl" // 7X large modal (max-width: 80rem)
   * size="full" // Full width modal with margins
   * size="screen" // Full screen modal
   * ```
   */
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full"
    | "screen";

  /**
   * Position of the modal on the screen
   * @default "center"
   * @example
   * ```tsx
   * position="top" // Positions modal at the top of the screen
   * ```
   */
  position?: "center" | "top" | "bottom" | "left" | "right";

  /**
   * Whether the modal should close when the Escape key is pressed
   * @default true
   * @example
   * ```tsx
   * closeOnEsc={false} // Disable closing on Escape key
   * ```
   */
  closeOnEsc?: boolean;

  /**
   * Whether the modal should close when clicking outside
   * @default true
   * @example
   * ```tsx
   * closeOnOverlayClick={false} // Disable closing on overlay click
   * ```
   */
  closeOnOverlayClick?: boolean;

  /**
   * Whether to show the close button in the header
   * @default true
   * @example
   * ```tsx
   * showCloseButton={false} // Hide the close button
   * ```
   */
  showCloseButton?: boolean;

  /**
   * Additional CSS classes for the overlay/backdrop
   * @example
   * ```tsx
   * overlayClassName="bg-black/70" // Custom overlay styling
   * ```
   */
  overlayClassName?: string;

  /**
   * Additional CSS classes for the modal content container
   * @example
   * ```tsx
   * contentClassName="bg-white dark:bg-gray-800" // Custom content styling
   * ```
   */
  contentClassName?: string;

  /**
   * Additional CSS classes for the modal header
   * @example
   * ```tsx
   * headerClassName="bg-primary text-white" // Custom header styling
   * ```
   */
  headerClassName?: string;

  /**
   * Additional CSS classes for the modal title
   * @example
   * ```tsx
   * titleClassName="text-xl font-bold" // Custom title styling
   * ```
   */
  titleClassName?: string;

  /**
   * Additional CSS classes for the close button
   * @example
   * ```tsx
   * closeButtonClassName="hover:bg-gray-200" // Custom close button styling
   * ```
   */
  closeButtonClassName?: string;

  /**
   * Additional CSS classes for the modal body
   * @example
   * ```tsx
   * bodyClassName="p-6" // Custom body styling
   * ```
   */
  bodyClassName?: string;

  /**
   * Optional footer content to be rendered at the bottom of the modal
   * @example
   * ```tsx
   * footer={<button>Submit</button>} // Add action buttons
   * ```
   */
  footer?: React.ReactNode;

  /**
   * Additional CSS classes for the modal footer
   * @example
   * ```tsx
   * footerClassName="bg-gray-50" // Custom footer styling
   * ```
   */
  footerClassName?: string;

  /**
   * Animation type for the modal
   * @default "fade"
   * @example
   * ```tsx
   * animation="slide" // Use slide animation
   * ```
   */
  animation?: "fade" | "slide" | "zoom" | "bounce" | "flip" | "none";

  /**
   * Duration of the animation
   * @default "normal"
   * @example
   * ```tsx
   * animationDuration="fast" // Use faster animation
   * ```
   */
  animationDuration?: "fast" | "normal" | "slow";

  /**
   * Reference to the element that should receive focus when the modal opens
   * @example
   * ```tsx
   * const inputRef = useRef<HTMLInputElement>(null);
   * initialFocus={inputRef} // Focus input when modal opens
   * ```
   */
  initialFocus?: React.RefObject<HTMLElement>;

  /**
   * Whether to apply a blur effect to the backdrop
   * @default false
   * @example
   * ```tsx
   * backdropBlur={true} // Enable backdrop blur
   * ```
   */
  backdropBlur?: boolean;

  /**
   * Whether the modal can be dragged around
   * @default false
   * @example
   * ```tsx
   * draggable={true} // Enable dragging
   * ```
   */
  draggable?: boolean;

  /**
   * Whether the modal can be resized
   * @default false
   * @example
   * ```tsx
   * resizable={true} // Enable resizing
   * ```
   */
  resizable?: boolean;

  /**
   * Minimum width of the modal
   * @example
   * ```tsx
   * minWidth="300px" // Set minimum width
   * ```
   */
  minWidth?: string;

  /**
   * Maximum width of the modal
   * @example
   * ```tsx
   * maxWidth="800px" // Set maximum width
   * ```
   */
  maxWidth?: string;

  /**
   * Minimum height of the modal
   * @example
   * ```tsx
   * minHeight="200px" // Set minimum height
   * ```
   */
  minHeight?: string;

  /**
   * Maximum height of the modal
   * @example
   * ```tsx
   * maxHeight="600px" // Set maximum height
   * ```
   */
  maxHeight?: string;

  /**
   * Custom background color for the modal backdrop
   * @default "rgba(0, 0, 0, 0.5)"
   * @example
   * ```tsx
   * backdropColor="rgba(0, 0, 0, 0.7)" // Darker backdrop
   * backdropColor="rgba(255, 255, 255, 0.8)" // Light backdrop
   * ```
   */
  backdropColor?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position: modalPosition = "center",
  closeOnEsc = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  overlayClassName = "",
  contentClassName = "bg-white dark:bg-gray-800",
  headerClassName = "",
  titleClassName = "",
  closeButtonClassName = "",
  bodyClassName = "",
  footer,
  footerClassName = "",
  animation = "fade",
  animationDuration = "normal",
  initialFocus,
  backdropBlur = false,
  draggable = false,
  resizable = false,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  backdropColor = "rgba(0, 0, 0, 0.5)",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const modalBounds = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const initialPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [isClosing, onClose]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements?.[0] as HTMLElement;
      const lastFocusable = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable?.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable?.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      if (initialFocus?.current) {
        initialFocus.current.focus();
      } else if (firstFocusable) {
        firstFocusable.focus();
      }

      return () => {
        document.removeEventListener("keydown", handleTabKey);
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, closeOnEsc, initialFocus]);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      previousFocus.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      if (modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();
        modalBounds.current = {
          width: rect.width,
          height: rect.height,
        };

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        initialPosition.current = {
          x: (viewportWidth - rect.width) / 2,
          y: (viewportHeight - rect.height) / 2,
        };

        setDragPosition(initialPosition.current);
      }
    }

    return () => {
      previousFocus.current?.focus();
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const constrainToViewport = (x: number, y: number) => {
    const { width, height } = modalBounds.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const padding = 20;
    const minX = padding;
    const maxX = viewportWidth - width - padding;
    const minY = padding;
    const maxY = viewportHeight - height - padding;

    const constrainedX = Math.min(Math.max(x, minX), maxX);
    const constrainedY = Math.min(Math.max(y, minY), maxY);

    return { x: constrainedX, y: constrainedY };
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (!draggable) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y,
    });
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    const constrained = constrainToViewport(newX, newY);

    setDragPosition(constrained);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  if (!isOpen && !isClosing) return null;

  const sizeClasses = {
    sm: "max-w-sm", // 24rem
    md: "max-w-md", // 28rem
    lg: "max-w-lg", // 32rem
    xl: "max-w-xl", // 36rem
    "2xl": "max-w-2xl", // 42rem
    "3xl": "max-w-3xl", // 48rem
    "4xl": "max-w-4xl", // 56rem
    "5xl": "max-w-5xl", // 64rem
    "6xl": "max-w-6xl", // 72rem
    "7xl": "max-w-7xl", // 80rem
    full: "max-w-full mx-4",
    screen: "w-screen h-screen max-w-none rounded-none",
  };

  const positionClasses = {
    center: "items-center justify-center",
    top: "items-start justify-center pt-16",
    bottom: "items-end justify-center pb-16",
    left: "items-center justify-start pl-16",
    right: "items-center justify-end pr-16",
  };

  const animationClasses = {
    fade: "animate-fade-in",
    slide: "animate-slide-in",
    zoom: "animate-zoom-in",
    bounce: "animate-bounce-in",
    flip: "animate-flip-in",
    none: "",
  };

  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500",
  };

  const modalStyle = {
    transform: draggable
      ? `translate(${dragPosition.x}px, ${dragPosition.y}px)`
      : undefined,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${positionClasses[modalPosition]}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        className={`fixed inset-0 transition-opacity ${
          backdropBlur ? "backdrop-blur-sm" : ""
        } ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${
          durationClasses[animationDuration]
        } ${overlayClassName}`}
        onClick={closeOnOverlayClick ? handleClose : undefined}
        aria-hidden="true"
        style={{
          backgroundColor: backdropColor,
        }}
      />
      <div
        ref={modalRef}
        style={{
          ...modalStyle,
          position: draggable ? "fixed" : "relative",
          left: draggable ? `${dragPosition.x}px` : undefined,
          top: draggable ? `${dragPosition.y}px` : undefined,
          transform: draggable ? "none" : undefined,
          margin: draggable ? 0 : undefined,
        }}
        className={`rounded-lg shadow-xl w-full ${draggable ? "" : "mx-4"} ${
          sizeClasses[size]
        } ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${
          durationClasses[animationDuration]
        } ${resizable ? "resize" : ""} ${contentClassName}`}
        role="document"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {(title || showCloseButton) && (
          <div
            className={`flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${
              draggable ? "cursor-move" : ""
            } ${headerClassName}`}
          >
            {title && (
              <h2
                id="modal-title"
                className={`text-lg font-medium text-gray-900 dark:text-gray-100 ${titleClassName}`}
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className={`p-1 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full ${closeButtonClassName}`}
                aria-label="Close modal"
              >
                <IoClose className="w-6 h-6" />
              </button>
            )}
          </div>
        )}
        <div
          className={`px-6 py-4 text-gray-900 dark:text-gray-100 ${bodyClassName}`}
        >
          {children}
        </div>
        {footer && (
          <div
            className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg ${footerClassName}`}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
