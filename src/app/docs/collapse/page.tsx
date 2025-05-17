"use client";
import React from "react";
import Collapse from "@/components/Collapse/Collapse";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
  HiQuestionMarkCircle,
  HiShieldCheck,
  HiUserCircle,
} from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function CollapsePage() {
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
      prop: "items",
      type: "CollapseItem[]",
      default: "-",
      description: "Array of collapse items to display",
    },
    {
      id: 2,
      prop: "defaultActiveKeys",
      type: "string[]",
      default: "[]",
      description: "Array of keys for items that should be expanded by default",
    },
    {
      id: 3,
      prop: "onChange",
      type: "(keys: string[]) => void",
      default: "-",
      description: "Callback function when active items change",
    },
    {
      id: 4,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the collapse container",
    },
    {
      id: 5,
      prop: "itemClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to each collapse item",
    },
    {
      id: 6,
      prop: "headerClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the collapse headers",
    },
    {
      id: 7,
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the collapse content",
    },
    {
      id: 8,
      prop: "activeItemClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to active items",
    },
    {
      id: 9,
      prop: "disabledItemClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to disabled items",
    },
  ];

  const collapseItems = [
    {
      key: "1",
      header: "What is this component library?",
      content:
        "This is a collection of reusable React components designed to help you build beautiful and functional user interfaces quickly. Each component is built with accessibility, customization, and performance in mind.",
      icon: HiQuestionMarkCircle,
    },
    {
      key: "2",
      header: "Is it free to use?",
      content:
        "Yes, this component library is completely free and open source. You can use it in any project, whether personal or commercial. We only ask that you follow the MIT license terms.",
      icon: HiShieldCheck,
    },
    {
      key: "3",
      header: "How can I contribute?",
      content:
        "We welcome contributions! You can help by reporting bugs, suggesting features, improving documentation, or submitting pull requests. Check out our GitHub repository for more information.",
      icon: HiUserCircle,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Collapse</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A collapsible content component that allows users to expand and
          collapse sections of content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple items support</li>
          <li>Custom icons</li>
          <li>Disabled state</li>
          <li>Default active items</li>
          <li>Customizable styling</li>
          <li>Dark mode support</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Collapse</h3>
          <div className="border rounded-lg p-4">
            <Collapse items={collapseItems} />
          </div>
          <CodeBlock
            code={`const collapseItems = [
  {
    key: "1",
    header: "What is this component library?",
    content: "This is a collection of reusable React components designed to help you build beautiful and functional user interfaces quickly. Each component is built with accessibility, customization, and performance in mind.",
    icon: HiQuestionMarkCircle,
  },
  {
    key: "2",
    header: "Is it free to use?",
    content: "Yes, this component library is completely free and open source. You can use it in any project, whether personal or commercial. We only ask that you follow the MIT license terms.",
    icon: HiShieldCheck,
  },
  {
    key: "3",
    header: "How can I contribute?",
    content: "We welcome contributions! You can help by reporting bugs, suggesting features, improving documentation, or submitting pull requests. Check out our GitHub repository for more information.",
    icon: HiUserCircle,
  },
];

<Collapse items={collapseItems} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Default Active Items</h3>
          <div className="border rounded-lg p-4">
            <Collapse
              items={collapseItems}
              defaultActiveKeys={["1"]}
              onChange={(keys) => console.log("Active keys:", keys)}
            />
          </div>
          <CodeBlock
            code={`<Collapse
  items={collapseItems}
  defaultActiveKeys={["1"]}
  onChange={(keys) => console.log("Active keys:", keys)}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Collapse
              items={collapseItems}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              itemClassName="hover:bg-gray-100 dark:hover:bg-gray-700"
              headerClassName="text-gray-900 dark:text-white font-medium"
              contentClassName="text-gray-600 dark:text-gray-300"
              activeItemClassName="bg-blue-50 dark:bg-blue-900/20"
              disabledItemClassName="opacity-50"
            />
          </div>
          <CodeBlock
            code={`<Collapse
  items={collapseItems}
  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
  itemClassName="hover:bg-gray-100 dark:hover:bg-gray-700"
  headerClassName="text-gray-900 dark:text-white font-medium"
  contentClassName="text-gray-600 dark:text-gray-300"
  activeItemClassName="bg-blue-50 dark:bg-blue-900/20"
  disabledItemClassName="opacity-50"
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
