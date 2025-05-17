import React from "react";

export interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
  className = "",
}) => {
  const pageCount = Math.ceil(total / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        className="px-2 py-1 rounded border bg-gray-100 dark:bg-gray-800 disabled:opacity-50"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded border transition-colors ${
            page === current
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          }`}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-2 py-1 rounded border bg-gray-100 dark:bg-gray-800 disabled:opacity-50"
        onClick={() => onChange(current + 1)}
        disabled={current === pageCount}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
