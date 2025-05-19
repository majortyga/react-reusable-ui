import React from "react";

export interface Step {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
}

export interface StepperProps {
  steps: Step[];
  current: number;
  className?: string;
  // Step customization
  stepClassName?: string;
  stepContentClassName?: string;
  // Circle customization
  circleClassName?: string;
  activeCircleClassName?: string;
  completedCircleClassName?: string;
  inactiveCircleClassName?: string;
  // Text customization
  labelClassName?: string;
  activeLabelClassName?: string;
  completedLabelClassName?: string;
  inactiveLabelClassName?: string;
  descriptionClassName?: string;
  activeDescriptionClassName?: string;
  completedDescriptionClassName?: string;
  inactiveDescriptionClassName?: string;
  // Line customization
  lineClassName?: string;
  activeLineClassName?: string;
  completedLineClassName?: string;
  inactiveLineClassName?: string;
  // Responsive options
  showDescriptionOnMobile?: boolean;
  verticalOnMobile?: boolean;
  // Custom render functions
  renderStep?: (
    step: Step,
    index: number,
    isActive: boolean,
    isCompleted: boolean
  ) => React.ReactNode;
  renderCircle?: (
    step: Step,
    index: number,
    isActive: boolean,
    isCompleted: boolean
  ) => React.ReactNode;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  current,
  className = "",
  stepClassName = "",
  stepContentClassName = "",
  circleClassName = "",
  activeCircleClassName = "",
  completedCircleClassName = "",
  inactiveCircleClassName = "",
  labelClassName = "",
  activeLabelClassName = "",
  completedLabelClassName = "",
  inactiveLabelClassName = "",
  descriptionClassName = "",
  activeDescriptionClassName = "",
  completedDescriptionClassName = "",
  inactiveDescriptionClassName = "",
  lineClassName = "",
  activeLineClassName = "",
  completedLineClassName = "",
  inactiveLineClassName = "",
  showDescriptionOnMobile = true,
  verticalOnMobile = false,
  renderStep,
  renderCircle,
}) => {
  const getStepStatus = (index: number) => {
    if (index < current) return "completed";
    if (index === current) return "active";
    return "inactive";
  };

  const getCircleClasses = (index: number) => {
    const baseClasses = `flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold transition-all ${circleClassName}`;
    const status = getStepStatus(index);

    switch (status) {
      case "completed":
        return `${baseClasses} bg-blue-600 text-white border-blue-600 ${completedCircleClassName}`;
      case "active":
        return `${baseClasses} bg-white dark:bg-gray-900 border-blue-600 text-blue-600 ${activeCircleClassName}`;
      default:
        return `${baseClasses} bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400 ${inactiveCircleClassName}`;
    }
  };

  const getLabelClasses = (index: number) => {
    const baseClasses = `text-sm font-medium ${labelClassName}`;
    const status = getStepStatus(index);

    switch (status) {
      case "completed":
        return `${baseClasses} text-blue-600 ${completedLabelClassName}`;
      case "active":
        return `${baseClasses} text-blue-600 ${activeLabelClassName}`;
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400 ${inactiveLabelClassName}`;
    }
  };

  const getDescriptionClasses = (index: number) => {
    const baseClasses = `text-xs ${descriptionClassName}`;
    const status = getStepStatus(index);

    switch (status) {
      case "completed":
        return `${baseClasses} text-blue-500 ${completedDescriptionClassName}`;
      case "active":
        return `${baseClasses} text-blue-500 ${activeDescriptionClassName}`;
      default:
        return `${baseClasses} text-gray-500 dark:text-gray-400 ${inactiveDescriptionClassName}`;
    }
  };

  const getLineClasses = (index: number) => {
    const baseClasses = `w-8 h-0.5 ${lineClassName}`;
    const status = getStepStatus(index);

    switch (status) {
      case "completed":
        return `${baseClasses} bg-blue-600 ${completedLineClassName}`;
      case "active":
        return `${baseClasses} bg-blue-600 ${activeLineClassName}`;
      default:
        return `${baseClasses} bg-gray-300 dark:bg-gray-600 ${inactiveLineClassName}`;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`${
          verticalOnMobile ? "flex-col md:flex-row" : "flex-row"
        } flex items-center gap-4 max-w-[85vw] overflow-x-auto md:max-w-full ${className}`}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex ${
              verticalOnMobile ? "flex-col md:flex-row" : "flex-row"
            } items-center gap-2 ${stepClassName}`}
          >
            {renderStep ? (
              renderStep(step, idx, idx === current, idx < current)
            ) : (
              <>
                {renderCircle ? (
                  renderCircle(step, idx, idx === current, idx < current)
                ) : (
                  <div className={getCircleClasses(idx)}>
                    {step.icon || idx + 1}
                  </div>
                )}
                <div className={`flex flex-col ${stepContentClassName}`}>
                  <span
                    className={`${getLabelClasses(
                      idx
                    )} whitespace-nowrap font-semibold`}
                  >
                    {step.label}
                  </span>
                  {step.description && (
                    <span
                      className={`${getDescriptionClasses(idx)} ${
                        !showDescriptionOnMobile ? "hidden md:block" : ""
                      } line-clamp-2 text-ellipsis`}
                    >
                      {step.description}
                    </span>
                  )}
                </div>
              </>
            )}
            {idx < steps.length - 1 && (
              <div
                className={`${
                  verticalOnMobile ? "h-8 w-0.5 md:h-0.5 md:w-8" : "w-8 h-0.5"
                } ${getLineClasses(idx)}`}
              />
            )}
          </div>
        ))}
      </div>
      {steps[current]?.component && (
        <div className="mt-4">{steps[current].component}</div>
      )}
    </div>
  );
};

export default Stepper;
