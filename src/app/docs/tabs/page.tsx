"use client";
import React from "react";
import Tabs from "@/components/Tabs/Tabs";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { HiHome, HiUser, HiCog, HiBell } from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function TabsPage() {
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
      type: "TabItem[]",
      default: "-",
      description: "Array of tab items to display",
    },
    {
      id: 2,
      prop: "defaultActiveKey",
      type: "string",
      default: "First tab key",
      description: "Key of the tab that should be active by default",
    },
    {
      id: 3,
      prop: "onChange",
      type: "(key: string) => void",
      default: "-",
      description: "Callback function when active tab changes",
    },
    {
      id: 4,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the tabs container",
    },
    {
      id: 5,
      prop: "tabClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to each tab button",
    },
    {
      id: 6,
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the tab content",
    },
    {
      id: 7,
      prop: "activeTabClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the active tab",
    },
    {
      id: 8,
      prop: "disabledTabClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to disabled tabs",
    },
  ];

  const tabItems = [
    {
      key: "home",
      label: "Home",
      icon: HiHome,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Welcome to the Home Tab</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This is the home tab content. You can put any content here,
            including other components.
          </p>
        </div>
      ),
    },
    {
      key: "profile",
      label: "Profile",
      icon: HiUser,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">User Profile</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This is the profile tab content. You can display user information
            here.
          </p>
        </div>
      ),
    },
    {
      key: "settings",
      label: "Settings",
      icon: HiCog,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This is the settings tab content. You can add configuration options
            here.
          </p>
        </div>
      ),
    },
    {
      key: "notifications",
      label: "Notifications",
      icon: HiBell,
      disabled: true,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This tab is disabled. You can enable it by removing the disabled
            property.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tabs</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A tabbed interface component that allows users to switch between
          different views or sections of content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple tabs support</li>
          <li>Custom icons</li>
          <li>Disabled state</li>
          <li>Default active tab</li>
          <li>Customizable styling</li>
          <li>Dark mode support</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Tabs</h3>
          <div className="border rounded-lg p-4">
            <Tabs items={tabItems} />
          </div>
          <CodeBlock
            code={`const tabItems = [
  {
    key: "home",
    label: "Home",
    icon: HiHome,
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Welcome to the Home Tab</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is the home tab content. You can put any content here, including other components.
        </p>
      </div>
    ),
  },
  {
    key: "profile",
    label: "Profile",
    icon: HiUser,
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">User Profile</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is the profile tab content. You can display user information here.
        </p>
      </div>
    ),
  },
  {
    key: "settings",
    label: "Settings",
    icon: HiCog,
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is the settings tab content. You can add configuration options here.
        </p>
      </div>
    ),
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: HiBell,
    disabled: true,
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This tab is disabled. You can enable it by removing the disabled property.
        </p>
      </div>
    ),
  },
];

<Tabs items={tabItems} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Default Active Tab</h3>
          <div className="border rounded-lg p-4">
            <Tabs
              items={tabItems}
              defaultActiveKey="profile"
              onChange={(key) => console.log("Active tab:", key)}
            />
          </div>
          <CodeBlock
            code={`<Tabs
  items={tabItems}
  defaultActiveKey="profile"
  onChange={(key) => console.log("Active tab:", key)}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Tabs
              items={tabItems}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg"
              tabClassName="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              contentClassName="bg-white dark:bg-gray-900 rounded-b-lg"
              activeTabClassName="text-blue-600 dark:text-blue-400 border-blue-500"
              disabledTabClassName="opacity-50"
            />
          </div>
          <CodeBlock
            code={`<Tabs
  items={tabItems}
  className="bg-gray-50 dark:bg-gray-800 rounded-lg"
  tabClassName="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
  contentClassName="bg-white dark:bg-gray-900 rounded-b-lg"
  activeTabClassName="text-blue-600 dark:text-blue-400 border-blue-500"
  disabledTabClassName="opacity-50"
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
