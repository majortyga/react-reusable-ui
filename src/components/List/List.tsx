import React from "react";
import { IconType } from "react-icons";
import Image from "next/image";

export interface ListItem {
  id: string | number;
  title: string;
  description?: string;
  icon?: IconType;
  avatar?: string;
  actions?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ListProps {
  items: ListItem[];
  loading?: boolean;
  emptyText?: string;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  actionClassName?: string;
}

const List: React.FC<ListProps> = ({
  items,
  loading = false,
  emptyText = "No items available",
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  actionClassName = "",
}) => {
  return (
    <div
      className={`divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
    >
      {loading ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          Loading...
        </div>
      ) : items.length === 0 ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          {emptyText}
        </div>
      ) : (
        items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`
                flex items-center gap-4 p-4
                ${
                  item.onClick
                    ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    : ""
                }
                ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${itemClassName}
              `}
              onClick={item.disabled ? undefined : item.onClick}
            >
              {item.avatar ? (
                <Image
                  src={item.avatar}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : Icon ? (
                <div className="flex-shrink-0 p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                  <Icon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
              ) : null}
              <div className={`flex-1 min-w-0 ${contentClassName}`}>
                <h3
                  className={`
                    text-sm font-medium text-gray-900 dark:text-white
                    ${headerClassName}
                  `}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                )}
              </div>
              {item.actions && (
                <div
                  className={`
                    flex-shrink-0 flex items-center gap-2
                    ${actionClassName}
                  `}
                >
                  {item.actions}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default List;
