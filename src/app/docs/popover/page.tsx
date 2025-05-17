"use client";
import React from "react";
import Popover from "@/components/Popover/Popover";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { HiInformationCircle } from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function PopoverPage() {
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
      prop: "trigger",
      type: "React.ReactNode",
      default: "-",
      description: "The element that triggers the popover",
    },
    {
      id: 2,
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content to display in the popover",
    },
    {
      id: 3,
      prop: "placement",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The placement of the popover relative to the trigger",
    },
    {
      id: 4,
      prop: "hover",
      type: "boolean",
      default: "false",
      description: "Whether the popover should show on hover",
    },
    {
      id: 5,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the popover",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Popover</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible popover component that can be triggered by click or hover,
          with customizable placement and styling.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Click or hover trigger</li>
          <li>Multiple placement options</li>
          <li>Customizable content</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Click outside to close</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Popover</h3>
          <div className="border rounded-lg p-4">
            <Popover
              trigger={
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Click me
                </button>
              }
              content={
                <div className="text-sm">
                  <p>This is a basic popover content.</p>
                </div>
              }
            />
          </div>
          <CodeBlock
            code={`<Popover
  trigger={
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Click me
    </button>
  }
  content={
    <div className="text-sm">
      <p>This is a basic popover content.</p>
    </div>
  }
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Hover Popover</h3>
          <div className="border rounded-lg p-4">
            <Popover
              trigger={
                <HiInformationCircle className="w-6 h-6 text-blue-500 cursor-help" />
              }
              content={
                <div className="text-sm">
                  <p>This popover appears on hover.</p>
                </div>
              }
              hover
            />
          </div>
          <CodeBlock
            code={`<Popover
  trigger={
    <HiInformationCircle className="w-6 h-6 text-blue-500 cursor-help" />
  }
  content={
    <div className="text-sm">
      <p>This popover appears on hover.</p>
    </div>
  }
  hover
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Different Placements</h3>
          <div className="border rounded-lg p-4 space-x-4">
            <Popover
              trigger={
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Top
                </button>
              }
              content={<div className="text-sm">Top placement</div>}
              placement="top"
            />
            <Popover
              trigger={
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Bottom
                </button>
              }
              content={<div className="text-sm">Bottom placement</div>}
              placement="bottom"
            />
            <Popover
              trigger={
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Left
                </button>
              }
              content={<div className="text-sm">Left placement</div>}
              placement="left"
            />
            <Popover
              trigger={
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Right
                </button>
              }
              content={<div className="text-sm">Right placement</div>}
              placement="right"
            />
          </div>
          <CodeBlock
            code={`<Popover
  trigger={<button>Top</button>}
  content={<div>Top placement</div>}
  placement="top"
/>

<Popover
  trigger={<button>Bottom</button>}
  content={<div>Bottom placement</div>}
  placement="bottom"
/>

<Popover
  trigger={<button>Left</button>}
  content={<div>Left placement</div>}
  placement="left"
/>

<Popover
  trigger={<button>Right</button>}
  content={<div>Right placement</div>}
  placement="right"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Popover
              trigger={
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  Custom Style
                </button>
              }
              content={
                <div className="text-sm">
                  <p>This popover has custom styling.</p>
                </div>
              }
              className="bg-purple-100 dark:bg-purple-900 border-purple-200 dark:border-purple-700"
            />
          </div>
          <CodeBlock
            code={`<Popover
  trigger={
    <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
      Custom Style
    </button>
  }
  content={
    <div className="text-sm">
      <p>This popover has custom styling.</p>
    </div>
  }
  className="bg-purple-100 dark:bg-purple-900 border-purple-200 dark:border-purple-700"
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
