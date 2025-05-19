"use client";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

type ApiRow = {
  id: number;
  prop: "items" | "separator" | "className";
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
    prop: "items",
    type: "BreadcrumbItem[]",
    default: "[]",
    description: "Array of breadcrumb items to display",
  },
  {
    id: 2,
    prop: "separator",
    type: "string | ReactNode",
    default: "/",
    description: "Custom separator between items",
  },
  {
    id: 3,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply",
  },
];

const basicItems = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumbs", href: "/components/breadcrumbs" },
];

const customSeparatorItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", href: "/products/electronics" },
  { label: "Smartphones", href: "/products/electronics/smartphones" },
];

export default function BreadcrumbsDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Breadcrumbs
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for displaying the current page&apos;s location within a
          navigational hierarchy.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <Breadcrumbs items={basicItems} />
        </Card>
        <CodeBlock
          code={`const items = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumbs", href: "/components/breadcrumbs" }
];

<Breadcrumbs items={items} />`}
          language="tsx"
        />
      </section>

      {/* Custom Separator */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Separator
        </h2>
        <Card>
          <div className="space-y-4">
            <Breadcrumbs items={customSeparatorItems} separator=">" />
            <Breadcrumbs items={customSeparatorItems} separator="→" />
            <Breadcrumbs items={customSeparatorItems} separator="•" />
          </div>
        </Card>
        <CodeBlock
          code={`<Breadcrumbs items={items} separator=">" />
<Breadcrumbs items={items} separator="→" />
<Breadcrumbs items={items} separator="•" />`}
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
