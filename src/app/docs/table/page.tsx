"use client";
import React from "react";
import Table from "@/components/Table/Table";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { HiPencil, HiTrash } from "react-icons/hi2";

type ApiRow = {
  id: number;
  prop:
    | "columns"
    | "data"
    | "bordered"
    | "size"
    | "showHeader"
    | "className"
    | "loading"
    | "pagination"
    | "selection"
    | "expandable"
    | "rowActions"
    | "draggable"
    | "onRowReorder"
    | "onRow"
    | "scroll"
    | "emptyText"
    | "loadingText"
    | "error";
  type: string;
  default: string;
  description: string;
};

const apiColumns: import("@/components/Table/Table").Column<ApiRow>[] = [
  { key: "prop", title: "Prop", dataIndex: "prop" },
  { key: "type", title: "Type", dataIndex: "type" },
  { key: "default", title: "Default", dataIndex: "default" },
  { key: "description", title: "Description", dataIndex: "description" },
];

const apiData: ApiRow[] = [
  {
    id: 1,
    prop: "columns",
    type: "Column<T>[]",
    default: "[]",
    description: "Array of column configurations",
  },
  {
    id: 2,
    prop: "data",
    type: "T[]",
    default: "[]",
    description: "Array of data objects",
  },
  {
    id: 3,
    prop: "bordered",
    type: "boolean",
    default: "false",
    description: "Whether to show table borders",
  },
  {
    id: 4,
    prop: "size",
    type: "small | middle | large",
    default: "middle",
    description: "Size of the table",
  },
  {
    id: 5,
    prop: "showHeader",
    type: "boolean",
    default: "true",
    description: "Whether to show table header",
  },
  {
    id: 6,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes",
  },
  {
    id: 7,
    prop: "loading",
    type: "boolean | { delay?: number; tip?: string }",
    default: "false",
    description: "Loading state of the table",
  },
  {
    id: 8,
    prop: "pagination",
    type: "PaginationConfig",
    default: "-",
    description: "Pagination configuration",
  },
  {
    id: 9,
    prop: "selection",
    type: "SelectionConfig",
    default: "-",
    description: "Row selection configuration",
  },
  {
    id: 10,
    prop: "expandable",
    type: "ExpandableConfig",
    default: "-",
    description: "Expandable row configuration",
  },
  {
    id: 11,
    prop: "rowActions",
    type: "(record: T) => React.ReactNode",
    default: "-",
    description: "Function to render row actions",
  },
  {
    id: 12,
    prop: "draggable",
    type: "boolean",
    default: "false",
    description: "Whether rows can be dragged to reorder",
  },
  {
    id: 13,
    prop: "onRowReorder",
    type: "(newData: T[]) => void",
    default: "-",
    description: "Callback when rows are reordered",
  },
  {
    id: 14,
    prop: "onRow",
    type: "RowEventHandler",
    default: "-",
    description: "Row event handlers",
  },
  {
    id: 15,
    prop: "scroll",
    type: "{ x?: number | string; y?: number | string }",
    default: "-",
    description: "Table scroll configuration",
  },
  {
    id: 16,
    prop: "emptyText",
    type: "React.ReactNode",
    default: "No data available",
    description: "Text to show when table is empty",
  },
  {
    id: 17,
    prop: "loadingText",
    type: "string",
    default: "Loading...",
    description: "Text to show during loading",
  },
  {
    id: 18,
    prop: "error",
    type: "{ message: string; retry?: () => void }",
    default: "-",
    description: "Error state configuration",
  },
];

// Example data for the table
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

const userColumns: import("@/components/Table/Table").Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "role", title: "Role", dataIndex: "role" },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (value: unknown) => {
      if (typeof value !== "string") return null;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      );
    },
  },
];

const userData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "inactive",
  },
];

export default function TableDocs() {
  const [selectedRows, setSelectedRows] = React.useState<(string | number)[]>(
    []
  );
  const [expandedRows, setExpandedRows] = React.useState<(string | number)[]>(
    []
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Table
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A flexible table component for displaying data in a structured format.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <Table columns={userColumns} data={userData} />
        </Card>
        <CodeBlock
          code={`type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "role", title: "Role", dataIndex: "role" },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (value: unknown) => {
      if (typeof value !== "string") return null;
      return (
        <span className={\`px-2 py-1 rounded-full text-xs \${
          value === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }\`}>
          {value}
        </span>
      );
    },
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "inactive" },
];

<Table
  columns={columns}
  data={data}
/>`}
          language="tsx"
        />
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Features
        </h2>

        {/* Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Row Selection
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              selection={{
                selectedRowKeys: selectedRows,
                onChange: setSelectedRows,
              }}
            />
          </Card>
          <CodeBlock
            code={`const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

<Table
  columns={columns}
  data={data}
  selection={{
    selectedRowKeys: selectedRows,
    onChange: setSelectedRows,
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* Expandable Rows */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Expandable Rows
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              expandable={{
                expandedRowKeys: expandedRows,
                onExpand: (expanded, record) => {
                  setExpandedRows(
                    expanded
                      ? [...expandedRows, record.id]
                      : expandedRows.filter((id) => id !== record.id)
                  );
                },
                expandedRowRender: (record) => (
                  <div className="p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Additional details for {record.name}
                    </p>
                  </div>
                ),
              }}
            />
          </Card>
          <CodeBlock
            code={`const [expandedRows, setExpandedRows] = useState<(string | number)[]>([]);

<Table
  columns={columns}
  data={data}
  expandable={{
    expandedRowKeys: expandedRows,
    onExpand: (expanded, record) => {
      setExpandedRows(
        expanded
          ? [...expandedRows, record.id]
          : expandedRows.filter((id) => id !== record.id)
      );
    },
    expandedRowRender: (record) => (
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Additional details for {record.name}
        </p>
      </div>
    ),
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* Row Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Row Actions
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              rowActions={(record) => (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => console.log("Edit", record)}
                    className="p-1 text-gray-500 hover:text-blue-500"
                  >
                    <HiPencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => console.log("Delete", record)}
                    className="p-1 text-gray-500 hover:text-red-500"
                  >
                    <HiTrash className="w-4 h-4" />
                  </button>
                </div>
              )}
            />
          </Card>
          <CodeBlock
            code={`<Table
  columns={columns}
  data={data}
  rowActions={(record) => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => console.log("Edit", record)}
        className="p-1 text-gray-500 hover:text-blue-500"
      >
        <HiPencil className="w-4 h-4" />
      </button>
      <button
        onClick={() => console.log("Delete", record)}
        className="p-1 text-gray-500 hover:text-red-500"
      >
        <HiTrash className="w-4 h-4" />
      </button>
    </div>
  )}
/>`}
            language="tsx"
          />
        </div>

        {/* Pagination */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Pagination
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: userData.length,
                onChange: (page, size) => {
                  setCurrentPage(page);
                  setPageSize(size);
                },
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 20, 50],
              }}
            />
          </Card>
          <CodeBlock
            code={`const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<Table
  columns={columns}
  data={data}
  pagination={{
    current: currentPage,
    pageSize: pageSize,
    total: data.length,
    onChange: (page, size) => {
      setCurrentPage(page);
      setPageSize(size);
    },
    showSizeChanger: true,
    pageSizeOptions: [5, 10, 20, 50],
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* Loading State */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Loading State
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              loading={{ delay: 1000, tip: "Loading users..." }}
            />
          </Card>
          <CodeBlock
            code={`<Table
  columns={columns}
  data={data}
  loading={{ delay: 1000, tip: "Loading users..." }}
/>`}
            language="tsx"
          />
        </div>

        {/* Error State */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Error State
          </h3>
          <Card>
            <Table
              columns={userColumns}
              data={userData}
              error={{
                message: "Failed to load data",
                retry: () => console.log("Retrying..."),
              }}
            />
          </Card>
          <CodeBlock
            code={`<Table
  columns={columns}
  data={data}
  error={{
    message: "Failed to load data",
    retry: () => console.log("Retrying..."),
  }}
/>`}
            language="tsx"
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Props
            </h3>
            <Table
              columns={apiColumns}
              data={apiData}
              bordered
              size="small"
              showHeader
            />
          </div>
        </Card>
      </section>
    </div>
  );
}
