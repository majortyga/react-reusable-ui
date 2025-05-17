import React from "react";
import { IconType } from "react-icons";
import { HiArrowUp, HiArrowDown } from "react-icons/hi2";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: IconType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  className?: string;
  iconClassName?: string;
  trendClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  description,
  className = "",
  iconClassName = "",
  trendClassName = "",
}) => {
  return (
    <div
      className={`
        p-6 rounded-lg bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        ${className}
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        {Icon && (
          <div
            className={`
              p-3 rounded-full bg-blue-100 dark:bg-blue-900
              ${iconClassName}
            `}
          >
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        )}
      </div>
      {(trend || description) && (
        <div className="mt-4 flex items-center justify-between">
          {trend && (
            <div
              className={`
                flex items-center gap-1 text-sm
                ${
                  trend.isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }
                ${trendClassName}
              `}
            >
              {trend.isPositive ? (
                <HiArrowUp className="w-4 h-4" />
              ) : (
                <HiArrowDown className="w-4 h-4" />
              )}
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;
