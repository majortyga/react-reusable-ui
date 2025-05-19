"use client";
import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
  HiChevronLeft,
  HiChevronRight,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function PaginationPage() {
  const columns: Column<TableData>[] = [
    {
      key: "prop",
      title: "Prop",
      dataIndex: "prop",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "default",
      title: "Default",
      dataIndex: "default",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
  ];

  const data: TableData[] = [
    {
      id: 1,
      prop: "current",
      type: "number",
      default: "-",
      description: "The current page number",
    },
    {
      id: 2,
      prop: "total",
      type: "number",
      default: "-",
      description: "The total number of items",
    },
    {
      id: 3,
      prop: "pageSize",
      type: "number",
      default: "-",
      description: "The number of items per page",
    },
    {
      id: 4,
      prop: "onChange",
      type: "(page: number) => void",
      default: "-",
      description: "Callback function when page changes",
    },
    {
      id: 5,
      prop: "showFirstLast",
      type: "boolean",
      default: "false",
      description: "Show first and last page buttons",
    },
    {
      id: 6,
      prop: "showSizeChanger",
      type: "boolean",
      default: "false",
      description: "Show page size selector",
    },
    {
      id: 7,
      prop: "pageSizeOptions",
      type: "number[]",
      default: "[10, 20, 50, 100]",
      description: "Available page size options",
    },
    {
      id: 8,
      prop: "onPageSizeChange",
      type: "(size: number) => void",
      default: "-",
      description: "Callback when page size changes",
    },
    {
      id: 9,
      prop: "siblingCount",
      type: "number",
      default: "1",
      description: "Number of pages to show before and after current page",
    },
    {
      id: 10,
      prop: "colors",
      type: "object",
      default: "-",
      description:
        "Custom colors for all states (normal, active, hover, disabled)",
    },
    {
      id: 11,
      prop: "icons",
      type: "object",
      default: "-",
      description: "Custom icons for navigation buttons",
    },
    {
      id: 12,
      prop: "showTotal",
      type: "boolean",
      default: "false",
      description: "Show total items count",
    },
    {
      id: 13,
      prop: "totalText",
      type: "(total: number, range: [number, number]) => string",
      default: "-",
      description: "Custom total items text formatter",
    },
    {
      id: 14,
      prop: "showCurrent",
      type: "boolean",
      default: "false",
      description: "Show current page info",
    },
    {
      id: 15,
      prop: "currentText",
      type: "(current: number, total: number) => string",
      default: "-",
      description: "Custom current page text formatter",
    },
    {
      id: 16,
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disable pagination",
    },
    {
      id: 17,
      prop: "size",
      type: '"small" | "middle" | "large"',
      default: '"middle"',
      description: "Size of the pagination",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [totalItems, setTotalItems] = React.useState(100);
  const [siblingCount, setSiblingCount] = React.useState(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Pagination</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible pagination component with support for ellipsis,
          customizable styling, and various display options.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Smart ellipsis for large page counts</li>
          <li>First/Last page quick access</li>
          <li>Page size selector</li>
          <li>Total items count display</li>
          <li>Current page info</li>
          <li>Customizable colors and icons</li>
          <li>Three sizes: small, middle, large</li>
          <li>Dark mode support</li>
          <li>Disabled state</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Usage</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
            />
          </div>
          <CodeBlock
            code={`const [currentPage, setCurrentPage] = React.useState(1);
const pageSize = 10;
const totalItems = 100;

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With Ellipsis</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              siblingCount={siblingCount}
            />
          </div>
          <CodeBlock
            code={`const [currentPage, setCurrentPage] = React.useState(1);
const [totalItems, setTotalItems] = React.useState(100);
const [siblingCount, setSiblingCount] = React.useState(1);
const pageSize = 10;

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  siblingCount={siblingCount}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With First/Last Buttons</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showFirstLast
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  showFirstLast
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With Page Size Selector</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showSizeChanger
              onPageSizeChange={setPageSize}
              pageSizeOptions={[5, 10, 20, 50]}
            />
          </div>
          <CodeBlock
            code={`const [pageSize, setPageSize] = React.useState(10);

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  showSizeChanger
  onPageSizeChange={setPageSize}
  pageSizeOptions={[5, 10, 20, 50]}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With Total and Current Info</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showTotal
              showCurrent
              totalText={(total, [start, end]) =>
                `Showing ${start}-${end} of ${total} items`
              }
              currentText={(current, total) => `Page ${current} of ${total}`}
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  showTotal
  showCurrent
  totalText={(total, [start, end]) => 
    \`Showing \${start}-\${end} of \${total} items\`
  }
  currentText={(current, total) => 
    \`Page \${current} of \${total}\`
  }
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Different Sizes</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Small size
              </p>
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={pageSize}
                onChange={setCurrentPage}
                size="small"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Middle size (default)
              </p>
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={pageSize}
                onChange={setCurrentPage}
                size="middle"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Large size
              </p>
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={pageSize}
                onChange={setCurrentPage}
                size="large"
              />
            </div>
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  size="small"
/>

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  size="middle"
/>

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  size="large"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Colors</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              colors={{
                activeBg: "bg-purple-600",
                activeText: "text-white",
                activeBorder: "border-purple-600",
                hoverBg: "bg-purple-50",
                hoverText: "text-purple-600",
                hoverBorder: "border-purple-200",
              }}
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  colors={{
    activeBg: "bg-purple-600",
    activeText: "text-white",
    activeBorder: "border-purple-600",
    hoverBg: "bg-purple-50",
    hoverText: "text-purple-600",
    hoverBorder: "border-purple-200"
  }}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Icons</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showFirstLast
              icons={{
                prev: <HiChevronLeft className="w-5 h-5" />,
                next: <HiChevronRight className="w-5 h-5" />,
                first: "«",
                last: "»",
                ellipsis: <HiEllipsisHorizontal className="w-5 h-5" />,
              }}
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  showFirstLast
  icons={{
    prev: <HiChevronLeft className="w-5 h-5" />,
    next: <HiChevronRight className="w-5 h-5" />,
    first: "«",
    last: "»",
    ellipsis: <HiEllipsisHorizontal className="w-5 h-5" />
  }}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Disabled State</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              disabled
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  disabled
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Advanced Example</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={pageSize}
              onChange={setCurrentPage}
              showFirstLast
              showSizeChanger
              showTotal
              showCurrent
              size="middle"
              colors={{
                activeBg: "bg-purple-600",
                activeText: "text-white",
                activeBorder: "border-purple-600",
                hoverBg: "bg-purple-50",
                hoverText: "text-purple-600",
                hoverBorder: "border-purple-200",
              }}
              icons={{
                prev: <HiChevronLeft className="w-5 h-5" />,
                next: <HiChevronRight className="w-5 h-5" />,
                first: "«",
                last: "»",
                ellipsis: <HiEllipsisHorizontal className="w-5 h-5" />,
              }}
              onPageSizeChange={setPageSize}
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={setCurrentPage}
  showFirstLast
  showSizeChanger
  showTotal
  showCurrent
  size="middle"
  colors={{
    activeBg: "bg-purple-600",
    activeText: "text-white",
    activeBorder: "border-purple-600",
    hoverBg: "bg-purple-50",
    hoverText: "text-purple-600",
    hoverBorder: "border-purple-200"
  }}
  icons={{
    prev: <HiChevronLeft className="w-5 h-5" />,
    next: <HiChevronRight className="w-5 h-5" />,
    first: "«",
    last: "»",
    ellipsis: <HiEllipsisHorizontal className="w-5 h-5" />
  }}
  onPageSizeChange={setPageSize}
/>`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <Table columns={columns} data={data} bordered size="middle" />
      </div>
    </div>
  );
}
