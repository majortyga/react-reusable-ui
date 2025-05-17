import React from "react";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
      <span className="w-10 text-right text-sm font-medium">{value}</span>
    </div>
  );
};

export default Slider;
