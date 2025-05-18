import React from "react";

export interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
  showInfo?: boolean;
  infoPosition?: "top" | "bottom";
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  readOnly = false,
  className = "",
  showInfo = false,
  infoPosition = "bottom",
}) => {
  const handleClick = (index: number, event: React.MouseEvent) => {
    if (readOnly || !onChange) return;

    const starElement = event.currentTarget as HTMLElement;
    const rect = starElement.getBoundingClientRect();
    const isHalf = event.clientX - rect.left < rect.width / 2;

    onChange(index + (isHalf ? 0.5 : 1));
  };

  const stars = (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= value;
        const half = !filled && i + 0.5 <= value;
        return (
          <span
            key={i}
            className={`cursor-pointer ${
              readOnly ? "pointer-events-none" : ""
            }`}
            onClick={(e) => handleClick(i, e)}
          >
            <svg
              className={`w-6 h-6 ${
                filled
                  ? "text-yellow-400"
                  : half
                  ? "text-yellow-300"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              viewBox="0 0 24 24"
              fill={filled ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {half ? (
                <>
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="none"
                    style={{ clipPath: "inset(0 0 0 50%)" }}
                  />
                </>
              ) : (
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              )}
            </svg>
          </span>
        );
      })}
    </div>
  );

  const info = showInfo && (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      {value.toFixed(1)} / {max}
    </div>
  );

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {infoPosition === "top" && info}
      {stars}
      {infoPosition === "bottom" && info}
    </div>
  );
};

export default Rating;
