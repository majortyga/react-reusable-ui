"use client";
import React from "react";
import List from "@/components/List/List";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
  HiUser,
  HiEnvelope as HiMail,
  HiPhone,
  HiTrash,
  HiPencil,
} from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function ListPage() {
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
      type: "ListItem[]",
      default: "-",
      description: "Array of list items to display",
    },
    {
      id: 2,
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Whether the list is in a loading state",
    },
    {
      id: 3,
      prop: "emptyText",
      type: "string",
      default: '"No items available"',
      description: "Text to display when the list is empty",
    },
    {
      id: 4,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the list container",
    },
    {
      id: 5,
      prop: "itemClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to each list item",
    },
    {
      id: 6,
      prop: "headerClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to item headers",
    },
    {
      id: 7,
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to item content",
    },
    {
      id: 8,
      prop: "actionClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to item actions",
    },
  ];

  const items = [
    {
      id: 1,
      title: "John Doe",
      description: "john.doe@example.com",
      icon: HiUser,
      actions: (
        <>
          <button className="p-1 text-gray-500 hover:text-blue-500">
            <HiPencil className="w-5 h-5" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-500">
            <HiTrash className="w-5 h-5" />
          </button>
        </>
      ),
    },
    {
      id: 2,
      title: "Jane Smith",
      description: "jane.smith@example.com",
      icon: HiUser,
      actions: (
        <>
          <button className="p-1 text-gray-500 hover:text-blue-500">
            <HiPencil className="w-5 h-5" />
          </button>
          <button className="p-1 text-gray-500 hover:text-red-500">
            <HiTrash className="w-5 h-5" />
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">List</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible list component that supports icons, avatars, descriptions,
          and actions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Icon and avatar support</li>
          <li>Item descriptions</li>
          <li>Custom actions</li>
          <li>Loading state</li>
          <li>Empty state</li>
          <li>Clickable items</li>
          <li>Disabled state</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic List</h3>
          <div className="border rounded-lg p-4">
            <List
              items={[
                {
                  id: 1,
                  title: "Contact Information",
                  description: "Manage your contact details",
                  icon: HiMail,
                },
                {
                  id: 2,
                  title: "Phone Numbers",
                  description: "Update your phone numbers",
                  icon: HiPhone,
                },
              ]}
            />
          </div>
          <CodeBlock
            code={`<List
  items={[
    {
      id: 1,
      title: "Contact Information",
      description: "Manage your contact details",
      icon: HiMail,
    },
    {
      id: 2,
      title: "Phone Numbers",
      description: "Update your phone numbers",
      icon: HiPhone,
    },
  ]}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">List with Actions</h3>
          <div className="border rounded-lg p-4">
            <List items={items} />
          </div>
          <CodeBlock
            code={`const items = [
  {
    id: 1,
    title: "John Doe",
    description: "john.doe@example.com",
    icon: HiUser,
    actions: (
      <>
        <button className="p-1 text-gray-500 hover:text-blue-500">
          <HiPencil className="w-5 h-5" />
        </button>
        <button className="p-1 text-gray-500 hover:text-red-500">
          <HiTrash className="w-5 h-5" />
        </button>
      </>
    ),
  },
  // ... more items
];

<List items={items} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Loading State</h3>
          <div className="border rounded-lg p-4">
            <List items={[]} loading />
          </div>
          <CodeBlock code={`<List items={[]} loading />`} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Empty State</h3>
          <div className="border rounded-lg p-4">
            <List
              items={[]}
              emptyText="No contacts found. Add your first contact!"
            />
          </div>
          <CodeBlock
            code={`<List
  items={[]}
  emptyText="No contacts found. Add your first contact!"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <List
              items={items}
              className="rounded-lg bg-gray-50 dark:bg-gray-800/50"
              itemClassName="hover:bg-white dark:hover:bg-gray-700/50"
              headerClassName="text-lg"
              contentClassName="space-y-1"
              actionClassName="gap-4"
            />
          </div>
          <CodeBlock
            code={`<List
  items={items}
  className="rounded-lg bg-gray-50 dark:bg-gray-800/50"
  itemClassName="hover:bg-white dark:hover:bg-gray-700/50"
  headerClassName="text-lg"
  contentClassName="space-y-1"
  actionClassName="gap-4"
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
