import React, { useRef, useEffect } from "react";
import {
  HiChevronUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown as HiExpand,
  HiChevronUp as HiCollapse,
  HiArrowsUpDown,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import Spinner from "../Spinner/Spinner";

/**
 * Column definition for the Table component.
 *
 * @template T - The type of the table data record.
 * @property {string} key - Unique key for the column.
 * @property {string} title - Column header title.
 * @property {keyof T} dataIndex - Field in the data record to display.
 * @property {(value: unknown, record: T) => React.ReactNode} [render] - Custom render function for cell content.
 * @property {(a: T, b: T) => number} [sorter] - Sorting function for the column.
 * @property {number | string} [width] - Column width.
 * @property {"left" | "right" | false} [fixed] - Fixed column position.
 * @property {boolean} [resizable] - Whether the column is resizable.
 * @property {"left" | "center" | "right"} [align] - Text alignment.
 * @property {boolean} [ellipsis] - Truncate cell content with ellipsis.
 * @property {boolean} [tooltip] - Show tooltip on cell hover.
 * @property {boolean} [filterable] - Enable filtering for the column.
 * @property {Array<{text: string, value: string}>} [filters] - Filter options.
 * @property {(value: string, record: T) => boolean} [onFilter] - Filter function.
 */
export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  render?: (value: unknown, record: T) => React.ReactNode;
  sorter?: (a: T, b: T) => number;
  width?: number | string;
  fixed?: "left" | "right" | false;
  resizable?: boolean;
  align?: "left" | "center" | "right";
  ellipsis?: boolean;
  tooltip?: boolean;
  filterable?: boolean;
  filters?: { text: string; value: string }[];
  onFilter?: (value: string, record: T) => boolean;
}

/**
 * Props for the Table component.
 *
 * @template T - The type of the table data record.
 */
export interface TableProps<T> {
  /** Array of column definitions */
  columns: Column<T>[];
  /** Array of data records */
  data: T[];
  /** Loading state or loading config */
  loading?: boolean | { delay?: number; tip?: string };
  /** Pagination config */
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
    showSizeChanger?: boolean;
    pageSizeOptions?: number[];
  };
  /** Row selection config */
  selection?: {
    selectedRowKeys: (string | number)[];
    onChange: (selectedRowKeys: (string | number)[]) => void;
  };
  /** Row expand/collapse config */
  expandable?: {
    expandedRowRender: (record: T) => React.ReactNode;
    expandedRowKeys?: (string | number)[];
    onExpand?: (expanded: boolean, record: T) => void;
    defaultExpandAllRows?: boolean;
    expandIcon?: (props: {
      expanded: boolean;
      onExpand: () => void;
      record: T;
    }) => React.ReactNode;
  };
  /** Render row actions */
  rowActions?: (record: T) => React.ReactNode;
  /** Enable row drag-and-drop */
  draggable?: boolean;
  /** Callback for row reorder */
  onRowReorder?: (newData: T[]) => void;
  /** Row event handlers */
  onRow?: (
    record: T,
    index: number
  ) => {
    onClick?: () => void;
    onDoubleClick?: () => void;
    onContextMenu?: () => void;
    className?: string;
    style?: React.CSSProperties;
  };
  /** Additional class for the table container */
  className?: string;
  /** Additional class for the table header */
  headerClassName?: string;
  /** Additional class for the table body */
  bodyClassName?: string;
  /** Additional class for each row */
  rowClassName?: string;
  /** Additional class for each cell */
  cellClassName?: string;
  /** Scroll config for x/y directions */
  scroll?: {
    x?: number | string;
    y?: number | string;
  };
  /** Show table borders */
  bordered?: boolean;
  /** Table size */
  size?: "small" | "middle" | "large";
  /** Show table header */
  showHeader?: boolean;
  /** Text to display when no data */
  emptyText?: React.ReactNode;
  /** Text to display when loading */
  loadingText?: string;
  /** Error state config */
  error?: {
    message: string;
    retry?: () => void;
  };
}

function Table<T extends { id?: string | number }>({
  columns,
  data,
  loading = false,
  pagination,
  selection,
  expandable,
  rowActions,
  draggable = false,
  onRowReorder,
  onRow,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  rowClassName = "",
  cellClassName = "",
  scroll,
  bordered = false,
  size = "middle",
  showHeader = true,
  emptyText = "No data available",
  loadingText = "Loading...",
  error,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [expandedRows, setExpandedRows] = React.useState<(string | number)[]>(
    expandable?.expandedRowKeys || []
  );
  const [columnWidths, setColumnWidths] = React.useState<
    Record<string, number>
  >({});
  const [draggedRow, setDraggedRow] = React.useState<number | null>(null);
  const [dragOverRow, setDragOverRow] = React.useState<number | null>(null);
  const [activeFilters, setActiveFilters] = React.useState<
    Record<string, string[]>
  >(
    columns.reduce((acc, col) => {
      if (col.filterable && col.filters) {
        acc[col.key] = [];
      }
      return acc;
    }, {} as Record<string, string[]>)
  );
  const [showLoading, setShowLoading] = React.useState(false);
  const resizingRef = useRef<{
    columnKey: string;
    startX: number;
    startWidth: number;
  } | null>(null);

  // Handle loading state
  useEffect(() => {
    if (typeof loading === "object") {
      if (loading.delay) {
        setShowLoading(true);
        const timer = setTimeout(() => {
          setShowLoading(false);
        }, loading.delay);
        return () => clearTimeout(timer);
      }
    } else {
      setShowLoading(loading);
    }
  }, [loading]);

  // Handle column resizing
  const handleResizeStart = (
    e: React.MouseEvent,
    columnKey: string,
    currentWidth: number
  ) => {
    e.preventDefault();
    resizingRef.current = {
      columnKey,
      startX: e.clientX,
      startWidth: currentWidth,
    };
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (!resizingRef.current) return;
    const { columnKey, startX, startWidth } = resizingRef.current;
    const diff = e.clientX - startX;
    setColumnWidths((prev) => ({
      ...prev,
      [columnKey]: Math.max(50, startWidth + diff),
    }));
  };

  const handleResizeEnd = () => {
    resizingRef.current = null;
    document.removeEventListener("mousemove", handleResizeMove);
    document.removeEventListener("mouseup", handleResizeEnd);
  };

  // Handle row reordering
  const handleDragStart = (index: number) => {
    if (!draggable) return;
    setDraggedRow(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!draggable || draggedRow === null) return;
    setDragOverRow(index);
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!draggable || draggedRow === null || !onRowReorder) return;

    const newData = [...data];
    const draggedItem = newData[draggedRow];
    newData.splice(draggedRow, 1);
    newData.splice(index, 0, draggedItem);
    onRowReorder(newData);

    setDraggedRow(null);
    setDragOverRow(null);
  };

  const handleSort = (column: Column<T>) => {
    if (!column.sorter) return;

    setSortConfig((current) => {
      if (current?.key === column.key) {
        return current.direction === "asc"
          ? { key: column.key, direction: "desc" }
          : null;
      }
      return { key: column.key, direction: "asc" };
    });
  };

  const handleFilter = (column: Column<T>, value: string) => {
    if (!column.filters) return;

    setActiveFilters((prev) => {
      const currentFilters = prev[column.key] || [];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((v) => v !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [column.key]: newFilters,
      };
    });
  };

  const handleExpand = (record: T) => {
    const recordId = record.id!;
    const isExpanded = expandedRows.includes(recordId);
    const newExpandedRows = isExpanded
      ? expandedRows.filter((id) => id !== recordId)
      : [...expandedRows, recordId];

    setExpandedRows(newExpandedRows);
    expandable?.onExpand?.(!isExpanded, record);
  };

  const filteredData = React.useMemo(() => {
    let result = data;

    // Apply filters
    columns.forEach((column) => {
      if (
        column.filters &&
        column.onFilter &&
        activeFilters[column.key]?.length
      ) {
        result = result.filter((record) =>
          activeFilters[column.key].some((value) =>
            column.onFilter!(value, record)
          )
        );
      }
    });

    // Apply sorting
    if (sortConfig) {
      const column = columns.find((col) => col.key === sortConfig.key);
      if (column?.sorter) {
        result = [...result].sort((a, b) => {
          const result = column.sorter!(a, b);
          return sortConfig.direction === "asc" ? result : -result;
        });
      }
    }

    return result;
  }, [data, sortConfig, columns, activeFilters]);

  const handleSelectAll = (checked: boolean) => {
    if (!selection) return;
    selection.onChange(checked ? filteredData.map((item) => item.id!) : []);
  };

  const handleSelectRow = (checked: boolean, record: T) => {
    if (!selection) return;
    const selectedKeys = checked
      ? [...selection.selectedRowKeys, record.id!]
      : selection.selectedRowKeys.filter((key) => key !== record.id);
    selection.onChange(selectedKeys);
  };

  const getFixedColumnStyle = (column: Column<T>, index: number) => {
    if (!column.fixed) return {};

    const isLeft = column.fixed === "left";
    let offset = 0;
    if (isLeft) {
      for (let i = 0; i < index; i++) {
        if (columns[i].fixed === "left") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    } else {
      for (let i = columns.length - 1; i > index; i--) {
        if (columns[i].fixed === "right") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    }

    return {
      position: "sticky" as const,
      [isLeft ? "left" : "right"]: offset,
      zIndex: isLeft ? 10 : 5,
    };
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  const renderLoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
      <Spinner
        size="xl"
        variant="primary"
        text={typeof loading === "object" ? loading.tip : loadingText}
        textPosition="right"
      />
    </div>
  );

  const renderError = () => (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <HiOutlineExclamationCircle className="w-12 h-12 text-red-500 mb-4" />
      <p className="text-red-500 mb-4">{error?.message}</p>
      {error?.retry && (
        <button
          onClick={error.retry}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Retry
        </button>
      )}
    </div>
  );

  const renderEmpty = () => (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <HiOutlineInformationCircle className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-gray-500">{emptyText}</p>
    </div>
  );

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div
        className="relative"
        style={{
          maxHeight: scroll?.y,
          overflow: "auto",
        }}
      >
        <table
          className={`w-full ${
            bordered ? "border border-gray-200 dark:border-gray-700" : ""
          }`}
        >
          {showHeader && (
            <thead
              className={`bg-gray-50 dark:bg-gray-800 sticky top-0 z-20 ${headerClassName}`}
            >
              <tr>
                {expandable && (
                  <th className="w-12 p-4 bg-gray-50 dark:bg-gray-800"></th>
                )}
                {selection && (
                  <th className="w-12 p-4 bg-gray-50 dark:bg-gray-800">
                    <input
                      type="checkbox"
                      checked={
                        selection.selectedRowKeys.length === filteredData.length
                      }
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 dark:border-gray-600"
                    />
                  </th>
                )}
                {columns.map((column, index) => (
                  <th
                    key={column.key}
                    className={`
                      p-4 text-${
                        column.align || "left"
                      } text-sm font-medium text-gray-500 dark:text-gray-400
                      ${
                        column.sorter
                          ? "cursor-pointer hover:text-gray-700 dark:hover:text-gray-300"
                          : ""
                      }
                      ${column.fixed ? "bg-gray-100 dark:bg-gray-800" : ""}
                      ${
                        bordered
                          ? "border border-gray-200 dark:border-gray-700"
                          : ""
                      }
                      ${cellClassName}
                    `}
                    style={{
                      width: columnWidths[column.key] || column.width,
                      ...getFixedColumnStyle(column, index),
                    }}
                    onClick={() => handleSort(column)}
                  >
                    <div className="flex items-center gap-2">
                      {column.title}
                      {column.sorter &&
                        sortConfig?.key === column.key &&
                        (sortConfig.direction === "asc" ? (
                          <HiChevronUp className="w-4 h-4" />
                        ) : (
                          <HiChevronDown className="w-4 h-4" />
                        ))}
                      {column.filterable && column.filters && (
                        <div className="relative group">
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            <HiArrowsUpDown className="w-4 h-4" />
                          </button>
                          <div className="absolute hidden group-hover:block top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 z-30">
                            {column.filters.map((filter) => (
                              <label
                                key={filter.value}
                                className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    activeFilters[column.key]?.includes(
                                      filter.value
                                    ) || false
                                  }
                                  onChange={() =>
                                    handleFilter(column, filter.value)
                                  }
                                  className="rounded border-gray-300 dark:border-gray-600"
                                />
                                {filter.text}
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {column.resizable && (
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500"
                        onMouseDown={(e) =>
                          handleResizeStart(
                            e,
                            column.key,
                            columnWidths[column.key] ||
                              (typeof column.width === "number"
                                ? column.width
                                : 0)
                          )
                        }
                      />
                    )}
                  </th>
                ))}
                {rowActions && (
                  <th className="w-12 p-4 bg-gray-50 dark:bg-gray-800"></th>
                )}
              </tr>
            </thead>
          )}
          <tbody
            className={`divide-y divide-gray-200 dark:divide-gray-700 ${bodyClassName}`}
          >
            {showLoading ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (expandable ? 1 : 0) +
                    (selection ? 1 : 0) +
                    (rowActions ? 1 : 0)
                  }
                  className="p-4"
                >
                  {renderLoadingSpinner()}
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (expandable ? 1 : 0) +
                    (selection ? 1 : 0) +
                    (rowActions ? 1 : 0)
                  }
                  className="p-4"
                >
                  {renderError()}
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (expandable ? 1 : 0) +
                    (selection ? 1 : 0) +
                    (rowActions ? 1 : 0)
                  }
                  className="p-4"
                >
                  {renderEmpty()}
                </td>
              </tr>
            ) : (
              filteredData.map((record, index) => (
                <React.Fragment key={record.id}>
                  <tr
                    draggable={draggable}
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onClick={onRow?.(record, index)?.onClick}
                    onDoubleClick={onRow?.(record, index)?.onDoubleClick}
                    onContextMenu={onRow?.(record, index)?.onContextMenu}
                    className={`
                      hover:bg-gray-50 dark:hover:bg-gray-800/50
                      ${draggedRow === index ? "opacity-50" : ""}
                      ${
                        dragOverRow === index
                          ? "border-t-2 border-blue-500"
                          : ""
                      }
                      ${onRow?.(record, index)?.className || ""}
                      ${rowClassName}
                      ${getSizeClass()}
                    `}
                    style={onRow?.(record, index)?.style}
                  >
                    {expandable && (
                      <td
                        className={`p-4 bg-white dark:bg-gray-900 ${
                          bordered
                            ? "border border-gray-200 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        {expandable.expandIcon ? (
                          expandable.expandIcon({
                            expanded: expandedRows.includes(record.id!),
                            onExpand: () => handleExpand(record),
                            record,
                          })
                        ) : (
                          <button
                            onClick={() => handleExpand(record)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                          >
                            {expandedRows.includes(record.id!) ? (
                              <HiCollapse className="w-4 h-4" />
                            ) : (
                              <HiExpand className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </td>
                    )}
                    {selection && (
                      <td
                        className={`p-4 bg-white dark:bg-gray-900 ${
                          bordered
                            ? "border border-gray-200 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selection.selectedRowKeys.includes(
                            record.id!
                          )}
                          onChange={(e) =>
                            handleSelectRow(e.target.checked, record)
                          }
                          className="rounded border-gray-300 dark:border-gray-600"
                        />
                      </td>
                    )}
                    {columns.map((column, colIndex) => (
                      <td
                        key={column.key}
                        className={`
                          p-4 text-${
                            column.align || "left"
                          } text-gray-900 dark:text-gray-100
                          ${column.fixed ? "bg-gray-50 dark:bg-gray-900" : ""}
                          ${column.ellipsis ? "truncate" : ""}
                          ${
                            bordered
                              ? "border border-gray-200 dark:border-gray-700"
                              : ""
                          }
                          ${cellClassName}
                        `}
                        style={getFixedColumnStyle(column, colIndex)}
                      >
                        {column.tooltip ? (
                          <div className="group relative">
                            <div className="truncate">
                              {column.render
                                ? column.render(
                                    record[column.dataIndex],
                                    record
                                  )
                                : String(record[column.dataIndex])}
                            </div>
                            <div className="absolute hidden group-hover:block top-full left-0 mt-1 bg-gray-900 text-white text-xs rounded px-2 py-1 z-30">
                              {column.render
                                ? column.render(
                                    record[column.dataIndex],
                                    record
                                  )
                                : String(record[column.dataIndex])}
                            </div>
                          </div>
                        ) : column.render ? (
                          column.render(record[column.dataIndex], record)
                        ) : (
                          String(record[column.dataIndex])
                        )}
                      </td>
                    ))}
                    {rowActions && (
                      <td
                        className={`p-4 bg-white dark:bg-gray-900 ${
                          bordered
                            ? "border border-gray-200 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        {rowActions(record)}
                      </td>
                    )}
                  </tr>
                  {expandable && expandedRows.includes(record.id!) && (
                    <tr>
                      <td
                        colSpan={
                          columns.length +
                          (selection ? 1 : 0) +
                          (rowActions ? 1 : 0) +
                          (expandable ? 1 : 0)
                        }
                        className={`p-4 bg-gray-50 dark:bg-gray-800/50 ${
                          bordered
                            ? "border border-gray-200 dark:border-gray-700"
                            : ""
                        }`}
                      >
                        {expandable.expandedRowRender(record)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {(pagination.current - 1) * pagination.pageSize + 1} to{" "}
            {Math.min(
              pagination.current * pagination.pageSize,
              pagination.total
            )}{" "}
            of {pagination.total} entries
          </div>
          <div className="flex items-center gap-2">
            {pagination.showSizeChanger && (
              <select
                value={pagination.pageSize}
                onChange={(e) => pagination.onChange(1, Number(e.target.value))}
                className="px-2 py-1 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700"
              >
                {pagination.pageSizeOptions?.map((size) => (
                  <option key={size} value={size}>
                    {size} / page
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={() =>
                pagination.onChange(pagination.current - 1, pagination.pageSize)
              }
              disabled={pagination.current === 1}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Page {pagination.current}
            </span>
            <button
              onClick={() =>
                pagination.onChange(pagination.current + 1, pagination.pageSize)
              }
              disabled={
                pagination.current * pagination.pageSize >= pagination.total
              }
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
