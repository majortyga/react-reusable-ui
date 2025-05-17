import React from "react";
import { HiStar } from "react-icons/hi2";

export interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  readOnly = false,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= value;
        const half = !filled && i + 0.5 < value;
        return (
          <span
            key={i}
            className={`cursor-pointer ${
              readOnly ? "pointer-events-none" : ""
            }`}
            onClick={() => !readOnly && onChange && onChange(i + 1)}
          >
            <HiStar
              className={`w-6 h-6 ${
                filled
                  ? "text-yellow-400"
                  : half
                  ? "text-yellow-300"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              style={half ? { clipPath: "inset(0 50% 0 0)" } : {}}
              fill={filled || half ? "currentColor" : "none"}
              stroke="currentColor"
            />
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
