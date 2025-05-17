import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

/**
 * Interface for individual collapse items
 * @interface CollapseItem
 */
export interface CollapseItem {
  /** Unique identifier for the item */
  key: string;
  /** Content to be displayed in the header */
  header: React.ReactNode;
  /** Content to be displayed when expanded */
  content: React.ReactNode;
  /** Optional icon to be displayed in the header */
  icon?: IconType;
  /** Whether the item is disabled */
  disabled?: boolean;
}

/**
 * A collapsible content component that can show/hide content with smooth animations.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Collapse
 *   items={[
 *     {
 *       key: "1",
 *       header: "Section 1",
 *       content: "Content for section 1"
 *     },
 *     {
 *       key: "2",
 *       header: "Section 2",
 *       content: "Content for section 2"
 *     }
 *   ]}
 * />
 *
 * // With icons and disabled state
 * <Collapse
 *   items={[
 *     {
 *       key: "1",
 *       header: "Section 1",
 *       content: "Content for section 1",
 *       icon: FiInfo,
 *       disabled: true
 *     }
 *   ]}
 * />
 *
 * // With custom styling
 * <Collapse
 *   items={items}
 *   className="space-y-4"
 *   headerClassName="bg-gray-100"
 *   contentClassName="bg-white"
 * />
 * ```
 */
export interface CollapseProps {
  /** Array of items to be displayed in the collapse */
  items: CollapseItem[];

  /** Array of keys that should be expanded by default */
  defaultActiveKeys?: string[];

  /** Callback function when active items change */
  onChange?: (keys: string[]) => void;

  /** Additional CSS classes for the container */
  className?: string;

  /** Additional CSS classes for each item */
  itemClassName?: string;

  /** Additional CSS classes for the header */
  headerClassName?: string;

  /** Additional CSS classes for the content */
  contentClassName?: string;

  /** Additional CSS classes for active items */
  activeItemClassName?: string;

  /** Additional CSS classes for disabled items */
  disabledItemClassName?: string;
}

/**
 * Collapse component that displays a list of expandable/collapsible items.
 * Each item has a header and content section that can be toggled.
 *
 * Features:
 * - Smooth expand/collapse animations
 * - Support for icons in headers
 * - Disabled state for items
 * - Customizable styling
 * - Multiple items can be expanded at once
 * - Default expanded items
 * - Change callback
 *
 * @example
 * ```tsx
 * const items = [
 *   {
 *     key: "1",
 *     header: "Section 1",
 *     content: "Content for section 1",
 *     icon: FiInfo
 *   },
 *   {
 *     key: "2",
 *     header: "Section 2",
 *     content: "Content for section 2",
 *     disabled: true
 *   }
 * ];
 *
 * <Collapse
 *   items={items}
 *   defaultActiveKeys={["1"]}
 *   onChange={(keys) => console.log("Active keys:", keys)}
 *   className="space-y-4"
 *   headerClassName="bg-gray-100 hover:bg-gray-200"
 *   contentClassName="bg-white"
 *   activeItemClassName="border-blue-500"
 *   disabledItemClassName="opacity-50"
 * />
 * ```
 */
const Collapse: React.FC<CollapseProps> = ({
  items,
  defaultActiveKeys = [],
  onChange,
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  activeItemClassName = "",
  disabledItemClassName = "",
}) => {
  const [activeKeys, setActiveKeys] =
    React.useState<string[]>(defaultActiveKeys);

  const handleItemClick = (key: string) => {
    const item = items.find((item) => item.key === key);
    if (item && !item.disabled) {
      const newActiveKeys = activeKeys.includes(key)
        ? activeKeys.filter((k) => k !== key)
        : [...activeKeys, key];
      setActiveKeys(newActiveKeys);
      onChange?.(newActiveKeys);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeKeys.includes(item.key);
        const isDisabled = item.disabled;

        return (
          <div
            key={item.key}
            className={`
              border rounded-md overflow-hidden
              ${itemClassName}
              ${isActive ? activeItemClassName : ""}
              ${isDisabled ? disabledItemClassName : ""}
            `}
          >
            <button
              onClick={() => handleItemClick(item.key)}
              disabled={isDisabled}
              className={`
                w-full flex items-center justify-between p-4
                ${
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
                ${headerClassName}
              `}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                {item.header}
              </div>
              <IoIosArrowDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  isActive ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`
                overflow-hidden transition-all duration-200
                ${isActive ? "max-h-[1000px]" : "max-h-0"}
                ${contentClassName}
              `}
            >
              <div className="p-4">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collapse;
