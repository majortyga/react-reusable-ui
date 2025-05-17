"use client";
import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

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
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the component",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalItems = 100;
  const itemsPerPage = 10;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Pagination</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible pagination component that helps users navigate through
          large sets of data.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Previous and next buttons</li>
          <li>Page number buttons</li>
          <li>Customizable page size</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Pagination</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={setCurrentPage}
            />
          </div>
          <CodeBlock
            code={`const [currentPage, setCurrentPage] = React.useState(1);
const totalItems = 100;
const itemsPerPage = 10;

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={itemsPerPage}
  onChange={setCurrentPage}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={setCurrentPage}
              className="gap-4 [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-lg [&>button]:font-medium"
            />
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={itemsPerPage}
  onChange={setCurrentPage}
  className="gap-4 [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-lg [&>button]:font-medium"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Different Page Sizes</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                5 items per page
              </p>
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={5}
                onChange={setCurrentPage}
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                20 items per page
              </p>
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={20}
                onChange={setCurrentPage}
              />
            </div>
          </div>
          <CodeBlock
            code={`<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={5}
  onChange={setCurrentPage}
/>

<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={20}
  onChange={setCurrentPage}
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
