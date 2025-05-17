import React from "react";
import { IconType } from "react-icons";

export interface TimelineItem {
  key: string;
  title: string;
  content: React.ReactNode;
  time?: string;
  icon?: IconType;
  status?: "success" | "error" | "warning" | "info";
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  contentClassName?: string;
  timeClassName?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  items,
  className = "",
  itemClassName = "",
  iconClassName = "",
  contentClassName = "",
  timeClassName = "",
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === items.length - 1;

        return (
          <div key={item.key} className={`flex gap-4 ${itemClassName}`}>
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${getStatusColor(item.status)}
                  ${iconClassName}
                `}
              >
                {Icon ? (
                  <Icon className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              {!isLast && (
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                {item.time && (
                  <span
                    className={`text-xs text-gray-500 dark:text-gray-400 ${timeClassName}`}
                  >
                    {item.time}
                  </span>
                )}
              </div>
              <div
                className={`text-sm text-gray-600 dark:text-gray-300 ${contentClassName}`}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
