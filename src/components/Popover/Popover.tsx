import React, { useState, useRef, useEffect } from "react";

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  hover?: boolean;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  placement = "top",
  hover = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hover && open) {
      const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, hover]);

  return (
    <div ref={ref} className="relative inline-block">
      <span
        onClick={() => !hover && setOpen((v) => !v)}
        onMouseEnter={() => hover && setOpen(true)}
        onMouseLeave={() => hover && setOpen(false)}
        className="cursor-pointer"
      >
        {trigger}
      </span>
      {open && (
        <div
          className={`absolute z-30 min-w-[160px] p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg ${className}`}
          style={{
            top:
              placement === "bottom"
                ? "100%"
                : placement === "top"
                ? undefined
                : "50%",
            bottom: placement === "top" ? "100%" : undefined,
            left:
              placement === "right"
                ? "100%"
                : placement === "left"
                ? undefined
                : "50%",
            right: placement === "left" ? "100%" : undefined,
            transform:
              placement === "top" || placement === "bottom"
                ? "translateX(-50%)"
                : "translateY(-50%)",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
