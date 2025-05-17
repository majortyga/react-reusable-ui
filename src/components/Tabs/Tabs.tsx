import React from "react";
import { IconType } from "react-icons";

export interface TabItem {
  key: string;
  label: string;
  icon?: IconType;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
  activeTabClassName?: string;
  disabledTabClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  onChange,
  className = "",
  tabClassName = "",
  contentClassName = "",
  activeTabClassName = "",
  disabledTabClassName = "",
}) => {
  const [activeKey, setActiveKey] = React.useState(
    defaultActiveKey || items[0]?.key
  );

  const handleTabClick = (key: string) => {
    const tab = items.find((item) => item.key === key);
    if (tab && !tab.disabled) {
      setActiveKey(key);
      onChange?.(key);
    }
  };

  const activeTab = items.find((item) => item.key === activeKey);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeKey;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              disabled={isDisabled}
              className={`
                flex items-center gap-2 px-4 py-2 text-sm font-medium
                ${
                  isActive
                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }
                ${
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
                ${tabClassName}
                ${isActive ? activeTabClassName : ""}
                ${isDisabled ? disabledTabClassName : ""}
              `}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {item.label}
            </button>
          );
        })}
      </div>
      <div className={`p-4 ${contentClassName}`}>{activeTab?.content}</div>
    </div>
  );
};

export default Tabs;
