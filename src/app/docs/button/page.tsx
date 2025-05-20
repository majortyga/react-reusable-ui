"use client";
import React from "react";
import { FiMail } from "react-icons/fi";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const AddIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

type ApiRow = {
  id: number;
  prop:
    | "variant"
    | "size"
    | "leftIcon"
    | "rightIcon"
    | "isLoading"
    | "disabled"
    | "colors"
    | "theme";
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
    prop: "variant",
    type: "primary | secondary | outline | ghost",
    default: "primary",
    description: "The visual style of the button",
  },
  {
    id: 2,
    prop: "size",
    type: "sm | md | lg",
    default: "md",
    description: "The size of the button",
  },
  {
    id: 3,
    prop: "leftIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the left side",
  },
  {
    id: 4,
    prop: "rightIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the right side",
  },
  {
    id: 5,
    prop: "isLoading",
    type: "boolean",
    default: "false",
    description: "Whether to show loading state",
  },
  {
    id: 6,
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled",
  },
  {
    id: 7,
    prop: "colors",
    type: "{ base?: string; hover?: string; focus?: string; text?: string; }",
    default: "-",
    description: "Custom color classes to override default variant colors",
  },
  {
    id: 8,
    prop: "theme",
    type: "light | dark",
    default: "light",
    description: "Theme variant for the button colors",
  },
];

export default function ButtonDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Button
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile button component that supports various styles, sizes, and
          states.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline" theme="dark">
              Outline Button
            </Button>
            <Button variant="ghost" theme="dark">
              Ghost Button
            </Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline" theme="dark">Outline Button</Button>
<Button variant="ghost" theme="dark">Ghost Button</Button>`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Sizes
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>`}
          language="tsx"
        />
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Icons
        </h2>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={FiMail}>Send Email</Button>
            <Button rightIcon={DownloadIcon}>Download</Button>
            <Button leftIcon={AddIcon} variant="outline" theme="dark">
              Add New
            </Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button leftIcon={FiMail}>Send Email</Button>
<Button rightIcon={DownloadIcon}>Download</Button>
<Button leftIcon={AddIcon} variant="outline">Add New</Button>`}
          language="tsx"
        />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          States
        </h2>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`}
          language="tsx"
        />
      </section>

      {/* Custom Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Colors
        </h2>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Button
              colors={{
                base: "bg-gradient-to-r from-purple-500 to-pink-500",
                hover: "hover:from-purple-600 hover:to-pink-600",
                focus: "purple-400",
                text: "text-white",
              }}
            >
              Gradient Button
            </Button>
            <Button
              colors={{
                base: "bg-emerald-500",
                hover: "hover:bg-emerald-600",
                focus: "emerald-400",
                text: "text-white",
              }}
            >
              Custom Green
            </Button>
            <Button
              colors={{
                base: "bg-amber-500",
                hover: "hover:bg-amber-600",
                focus: "amber-400",
                text: "text-white",
              }}
              leftIcon={AddIcon}
            >
              Custom Amber
            </Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button 
  colors={{
    base: "bg-gradient-to-r from-purple-500 to-pink-500",
    hover: "hover:from-purple-600 hover:to-pink-600",
    focus: "purple-400",
    text: "text-white"
  }}
>
  Gradient Button
</Button>

<Button 
  colors={{
    base: "bg-emerald-500",
    hover: "hover:bg-emerald-600",
    focus: "emerald-400",
    text: "text-white"
  }}
>
  Custom Green
</Button>

<Button 
  colors={{
    base: "bg-amber-500",
    hover: "hover:bg-amber-600",
    focus: "amber-400",
    text: "text-white"
  }}
  leftIcon={AddIcon}
>
  Custom Amber
</Button>`}
          language="tsx"
        />
      </section>

      {/* Dark Theme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dark Theme
        </h2>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Button theme="dark">Dark Primary</Button>
            <Button theme="dark" variant="secondary">
              Dark Secondary
            </Button>
            <Button theme="dark" variant="outline">
              Dark Outline
            </Button>
            <Button theme="dark" variant="ghost">
              Dark Ghost
            </Button>
          </div>
        </Card>
        <CodeBlock
          code={`<Button theme="dark">Dark Primary</Button>
<Button theme="dark" variant="secondary">Dark Secondary</Button>
<Button theme="dark" variant="outline">Dark Outline</Button>
<Button theme="dark" variant="ghost">Dark Ghost</Button>`}
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
