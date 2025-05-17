import React, { useState, useRef, useEffect, useCallback } from "react";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
  contentClassName?: string;
  arrowClassName?: string;
  animation?: "fade" | "zoom" | "slide" | "bounce";
  animationDuration?: "fast" | "normal" | "slow";
  maxWidth?: string;
  interactive?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 200,
  className = "",
  contentClassName = "",
  arrowClassName = "",
  animation = "fade",
  animationDuration = "normal",
  maxWidth = "200px",
  interactive = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-900",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-900",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-900",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-900",
  };

  const animationClasses = {
    fade: "animate-fade-in",
    zoom: "animate-zoom-in",
    slide: "animate-slide-in",
    bounce: "animate-bounce-in",
  };

  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500",
  };

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let x = 0;
    let y = 0;

    switch (position) {
      case "top":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.top + scrollY;
        break;
      case "bottom":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.bottom + scrollY;
        break;
      case "left":
        x = trigger.left + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
      case "right":
        x = trigger.right + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
    }

    setCoords({ x, y });
  }, [position]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, updatePosition]);

  return (
    <div
      ref={triggerRef}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            left: coords.x,
            top: coords.y,
            maxWidth,
          }}
          className={`${positionClasses[position]} ${animationClasses[animation]} ${durationClasses[animationDuration]}`}
          onMouseEnter={interactive ? handleMouseEnter : undefined}
          onMouseLeave={interactive ? handleMouseLeave : undefined}
        >
          <div
            className={`bg-gray-900 text-white text-sm rounded-lg py-2 px-3 shadow-lg ${contentClassName}`}
          >
            {content}
            <div
              className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]} ${arrowClassName}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
