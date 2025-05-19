"use client";
import React from "react";
import Alert from "@/components/Alert/Alert";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

type ApiRow = {
  id: number;
  prop: "type" | "message" | "closable" | "className";
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
    prop: "type",
    type: "success | info | warning | error",
    default: "info",
    description: "The type of alert to display",
  },
  {
    id: 2,
    prop: "message",
    type: "string",
    default: "-",
    description: "The main message content of the alert",
  },
  {
    id: 3,
    prop: "closable",
    type: "boolean",
    default: "false",
    description: "Whether to show a close button",
  },
  {
    id: 4,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply",
  },
];

export default function AlertDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Alert
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for displaying important messages and notifications to
          users.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Alert type="info" message="This is an informational message." />
            <Alert type="success" message="Operation completed successfully!" />
            <Alert
              type="warning"
              message="Please review your changes before proceeding."
            />
            <Alert
              type="error"
              message="An error occurred while processing your request."
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Alert type="info" message="This is an informational message." />
<Alert type="success" message="Operation completed successfully!" />
<Alert type="warning" message="Please review your changes before proceeding." />
<Alert type="error" message="An error occurred while processing your request." />`}
          language="tsx"
        />
      </section>

      {/* With Title (now just part of message) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Title
        </h2>
        <Card>
          <div className="space-y-4">
            <Alert
              type="info"
              message="Information: This is an informational message with a title."
            />
            <Alert
              type="success"
              message="Success: Operation completed successfully!"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Alert
  type="info"
  message="Information: This is an informational message with a title."
/>
<Alert
  type="success"
  message="Success: Operation completed successfully!"
/>`}
          language="tsx"
        />
      </section>

      {/* Closable */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Closable
        </h2>
        <Card>
          <div className="space-y-4">
            <Alert type="info" message="This alert can be closed." closable />
            <Alert
              type="warning"
              message="Warning: This alert with title can be closed."
              closable
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Alert
  type="info"
  message="This alert can be closed."
  closable
/>
<Alert
  type="warning"
  message="Warning: This alert with title can be closed."
  closable
/>`}
          language="tsx"
        />
      </section>

      {/* Without Icon (just show as normal) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Without Icon
        </h2>
        <Card>
          <div className="space-y-4">
            <Alert type="info" message="This alert is shown without an icon." />
            <Alert type="success" message="Another alert without an icon." />
          </div>
        </Card>
        <CodeBlock
          code={`<Alert
  type="info"
  message="This alert is shown without an icon."
/>
<Alert
  type="success"
  message="Another alert without an icon."
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Styled Alert */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Styled Alert
        </h2>
        <Card>
          <div className="space-y-4">
            <Alert
              type="success"
              message="Custom styled alert"
              bgColor="bg-purple-50 dark:bg-purple-950/50"
              textColor="text-purple-700 dark:text-purple-300"
              borderColor="border-purple-200 dark:border-purple-800"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Alert 
  type="success"
  message="Custom styled alert"
  bgColor="bg-purple-50 dark:bg-purple-950/50"
  textColor="text-purple-700 dark:text-purple-300"
  borderColor="border-purple-200 dark:border-purple-800"
/>`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-auto max-w-[90vw]">
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
