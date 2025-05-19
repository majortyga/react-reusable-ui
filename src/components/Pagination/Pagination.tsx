import React from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

export interface PaginationProps {
  /** Current page number */
  current: number;
  /** Total number of items */
  total: number;
  /** Number of items per page */
  pageSize: number;
  /** Callback when page changes */
  onChange: (page: number) => void;
  /** Additional class for the container */
  className?: string;
  /** Show quick jump to first/last page */
  showFirstLast?: boolean;
  /** Show page size selector */
  showSizeChanger?: boolean;
  /** Available page sizes */
  pageSizeOptions?: number[];
  /** Callback when page size changes */
  onPageSizeChange?: (size: number) => void;
  /** Number of pages to show before and after current page */
  siblingCount?: number;
  /** Custom colors for the pagination */
  colors?: {
    bg?: string;
    text?: string;
    border?: string;
    activeBg?: string;
    activeText?: string;
    activeBorder?: string;
    hoverBg?: string;
    hoverText?: string;
    hoverBorder?: string;
    disabledBg?: string;
    disabledText?: string;
    disabledBorder?: string;
  };
  /** Custom icons */
  icons?: {
    prev?: React.ReactNode;
    next?: React.ReactNode;
    first?: React.ReactNode;
    last?: React.ReactNode;
    ellipsis?: React.ReactNode;
  };
  /** Show total items count */
  showTotal?: boolean;
  /** Custom total items text */
  totalText?: (total: number, range: [number, number]) => string;
  /** Show current page info */
  showCurrent?: boolean;
  /** Custom current page text */
  currentText?: (current: number, total: number) => string;
  /** Disable pagination */
  disabled?: boolean;
  /** Size of the pagination */
  size?: "small" | "middle" | "large";
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
  className = "",
  showFirstLast = false,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  siblingCount = 1,
  colors = {},
  icons = {},
  showTotal = false,
  totalText,
  showCurrent = false,
  currentText,
  disabled = false,
  size = "middle",
}) => {
  const pageCount = Math.ceil(total / pageSize);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-sm px-2 py-1";
      case "large":
        return "text-lg px-4 py-2";
      default:
        return "text-base px-3 py-1.5";
    }
  };

  const getButtonClasses = (isActive = false, isDisabled = false) => {
    const baseClasses = `
      rounded border transition-colors
      ${getSizeClasses()}
      ${
        disabled || isDisabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer"
      }
    `;

    if (isActive) {
      return `
        ${baseClasses}
        ${colors.activeBg || "bg-blue-600 dark:bg-blue-700"}
        ${colors.activeText || "text-white"}
        ${colors.activeBorder || "border-blue-600 dark:border-blue-700"}
      `;
    }

    if (disabled || isDisabled) {
      return `
        ${baseClasses}
        ${colors.disabledBg || "bg-gray-100 dark:bg-gray-800"}
        ${colors.disabledText || "text-gray-400 dark:text-gray-500"}
        ${colors.disabledBorder || "border-gray-200 dark:border-gray-700"}
      `;
    }

    return `
      ${baseClasses}
      ${colors.bg || "bg-white dark:bg-gray-900"}
      ${colors.text || "text-gray-700 dark:text-gray-200"}
      ${colors.border || "border-gray-300 dark:border-gray-700"}
      hover:${colors.hoverBg || "bg-gray-50 dark:bg-gray-800"}
      hover:${colors.hoverText || "text-gray-900 dark:text-white"}
      hover:${colors.hoverBorder || "border-gray-400 dark:border-gray-600"}
    `;
  };

  const getPageNumbers = () => {
    const totalNumbers = siblingCount + 5;
    const totalBlocks = totalNumbers + 2;

    if (pageCount > totalBlocks) {
      const startPage = Math.max(2, current - siblingCount);
      const endPage = Math.min(pageCount - 1, current + siblingCount);

      const pages: (number | string)[] = [];

      if (startPage > 2) {
        pages.push(1, "...");
      } else {
        pages.push(1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < pageCount - 1) {
        pages.push("...", pageCount);
      } else {
        pages.push(pageCount);
      }

      return pages;
    }

    return Array.from({ length: pageCount }, (_, i) => i + 1);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value);
    onPageSizeChange?.(newSize);
  };

  const renderTotal = () => {
    if (!showTotal) return null;
    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, total);
    const text = totalText
      ? totalText(total, [start, end])
      : `Showing ${start}-${end} of ${total} items`;
    return <span className="text-gray-600 dark:text-gray-400">{text}</span>;
  };

  const renderCurrent = () => {
    if (!showCurrent) return null;
    const text = currentText
      ? currentText(current, pageCount)
      : `Page ${current} of ${pageCount}`;
    return <span className="text-gray-600 dark:text-gray-400">{text}</span>;
  };

  return (
    <div
      className={`flex items-center gap-2 overflow-x-auto max-w-[80vw] md:max-w-full ${className}`}
    >
      {renderTotal()}
      <div className="flex items-center gap-1">
        {showFirstLast && (
          <button
            className={getButtonClasses(false, current === 1)}
            onClick={() => onChange(1)}
            disabled={disabled || current === 1}
          >
            {icons.first || "«"}
          </button>
        )}
        <button
          className={getButtonClasses(false, current === 1)}
          onClick={() => onChange(current - 1)}
          disabled={disabled || current === 1}
        >
          {icons.prev || <HiChevronLeft className="w-5 h-5" />}
        </button>
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-2 py-1">
                {icons.ellipsis || <HiEllipsisHorizontal className="w-5 h-5" />}
              </span>
            ) : (
              <button
                className={getButtonClasses(page === current)}
                onClick={() => onChange(page as number)}
                disabled={disabled}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          className={getButtonClasses(false, current === pageCount)}
          onClick={() => onChange(current + 1)}
          disabled={disabled || current === pageCount}
        >
          {icons.next || <HiChevronRight className="w-5 h-5" />}
        </button>
        {showFirstLast && (
          <button
            className={getButtonClasses(false, current === pageCount)}
            onClick={() => onChange(pageCount)}
            disabled={disabled || current === pageCount}
          >
            {icons.last || "»"}
          </button>
        )}
      </div>
      {showSizeChanger && (
        <select
          className={`
            rounded border transition-colors
            ${getSizeClasses()}
            ${colors.border || "border-gray-300 dark:border-gray-700"}
            ${colors.bg || "bg-white dark:bg-gray-900"}
            ${colors.text || "text-gray-700 dark:text-gray-200"}
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          `}
          value={pageSize}
          onChange={handlePageSizeChange}
          disabled={disabled}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </select>
      )}
      {renderCurrent()}
    </div>
  );
};

export default Pagination;
