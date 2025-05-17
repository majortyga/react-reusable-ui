"use client";
import React from "react";
import Rating from "@/components/Rating/Rating";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function RatingPage() {
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
      prop: "value",
      type: "number",
      default: "-",
      description: "The current rating value",
    },
    {
      id: 2,
      prop: "max",
      type: "number",
      default: "5",
      description: "The maximum rating value",
    },
    {
      id: 3,
      prop: "onChange",
      type: "(value: number) => void",
      default: "-",
      description: "Callback function when rating changes",
    },
    {
      id: 4,
      prop: "readOnly",
      type: "boolean",
      default: "false",
      description: "Whether the rating is read-only",
    },
    {
      id: 5,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the component",
    },
  ];

  const [rating, setRating] = React.useState(3.5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Rating</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible rating component that supports both interactive and
          read-only modes, with customizable maximum value and styling.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Interactive rating selection</li>
          <li>Read-only mode</li>
          <li>Customizable maximum value</li>
          <li>Half-star support</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Rating</h3>
          <div className="border rounded-lg p-4">
            <Rating value={rating} onChange={setRating} />
          </div>
          <CodeBlock
            code={`const [rating, setRating] = React.useState(3.5);

<Rating value={rating} onChange={setRating} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Read-only Rating</h3>
          <div className="border rounded-lg p-4">
            <Rating value={4} readOnly />
          </div>
          <CodeBlock code={`<Rating value={4} readOnly />`} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Maximum Value</h3>
          <div className="border rounded-lg p-4">
            <Rating value={7} max={10} readOnly />
          </div>
          <CodeBlock code={`<Rating value={7} max={10} readOnly />`} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Rating
              value={3}
              readOnly
              className="gap-2 [&>span>svg]:w-8 [&>span>svg]:h-8"
            />
          </div>
          <CodeBlock
            code={`<Rating
  value={3}
  readOnly
  className="gap-2 [&>span>svg]:w-8 [&>span>svg]:h-8"
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
