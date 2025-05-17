"use client";
import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
  HiCheck,
  HiXMark,
  HiExclamationTriangle,
  HiInformationCircle,
} from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function TimelinePage() {
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
      type: "TimelineItem[]",
      default: "-",
      description: "Array of timeline items to display",
    },
    {
      id: 2,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the timeline container",
    },
    {
      id: 3,
      prop: "itemClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to each timeline item",
    },
    {
      id: 4,
      prop: "iconClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the timeline icons",
    },
    {
      id: 5,
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the timeline content",
    },
    {
      id: 6,
      prop: "timeClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the timeline timestamps",
    },
  ];

  const timelineItems = [
    {
      key: "1",
      title: "Application submitted",
      content: "Your application has been submitted successfully.",
      time: "2 hours ago",
      icon: HiCheck,
      status: "success" as const,
    },
    {
      key: "2",
      title: "Application under review",
      content: "Your application is currently being reviewed by our team.",
      time: "1 hour ago",
      icon: HiInformationCircle,
      status: "info" as const,
    },
    {
      key: "3",
      title: "Additional information required",
      content: "Please provide additional documentation to proceed.",
      time: "30 minutes ago",
      icon: HiExclamationTriangle,
      status: "warning" as const,
    },
    {
      key: "4",
      title: "Application rejected",
      content:
        "Your application has been rejected due to incomplete information.",
      time: "Just now",
      icon: HiXMark,
      status: "error" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Timeline</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A vertical timeline component for displaying a series of events or
          activities in chronological order.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Status indicators with different colors</li>
          <li>Custom icons support</li>
          <li>Timestamps</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Responsive design</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Timeline</h3>
          <div className="border rounded-lg p-4">
            <Timeline items={timelineItems} />
          </div>
          <CodeBlock
            code={`const timelineItems = [
  {
    key: "1",
    title: "Application submitted",
    content: "Your application has been submitted successfully.",
    time: "2 hours ago",
    icon: HiCheck,
    status: "success",
  },
  {
    key: "2",
    title: "Application under review",
    content: "Your application is currently being reviewed by our team.",
    time: "1 hour ago",
    icon: HiInformationCircle,
    status: "info",
  },
  {
    key: "3",
    title: "Additional information required",
    content: "Please provide additional documentation to proceed.",
    time: "30 minutes ago",
    icon: HiExclamationTriangle,
    status: "warning",
  },
  {
    key: "4",
    title: "Application rejected",
    content: "Your application has been rejected due to incomplete information.",
    time: "Just now",
    icon: HiXMark,
    status: "error",
  },
];

<Timeline items={timelineItems} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Timeline
              items={timelineItems}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
              itemClassName="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
              iconClassName="ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-700"
              contentClassName="text-gray-700 dark:text-gray-300"
              timeClassName="text-gray-500 dark:text-gray-400"
            />
          </div>
          <CodeBlock
            code={`<Timeline
  items={timelineItems}
  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
  itemClassName="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
  iconClassName="ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-700"
  contentClassName="text-gray-700 dark:text-gray-300"
  timeClassName="text-gray-500 dark:text-gray-400"
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
