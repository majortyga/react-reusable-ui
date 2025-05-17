import React from "react";

export interface Step {
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  current: number;
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  current,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold transition-all
            ${
              idx < current
                ? "bg-blue-600 text-white border-blue-600"
                : idx === current
                ? "bg-white dark:bg-gray-900 border-blue-600 text-blue-600"
                : "bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400"
            }`}
          >
            {idx + 1}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{step.label}</span>
            {step.description && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {step.description}
              </span>
            )}
          </div>
          {idx < steps.length - 1 && (
            <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
