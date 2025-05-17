"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Input from "@/components/Input/Input";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

type ApiRow = {
  id: number;
  prop:
    | "label"
    | "placeholder"
    | "variant"
    | "size"
    | "leftIcon"
    | "rightIcon"
    | "error"
    | "validation";
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
    prop: "label",
    type: "string",
    default: "-",
    description: "Label text for the input",
  },
  {
    id: 2,
    prop: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text",
  },
  {
    id: 3,
    prop: "variant",
    type: "—",
    default: "—",
    description: "Not supported",
  },
  {
    id: 4,
    prop: "size",
    type: "—",
    default: "—",
    description: "Not supported",
  },
  {
    id: 5,
    prop: "leftIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the left",
  },
  {
    id: 6,
    prop: "rightIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the right",
  },
  {
    id: 7,
    prop: "error",
    type: "string",
    default: "-",
    description: "Error message to display",
  },
  {
    id: 8,
    prop: "validation",
    type: "ValidationConfig",
    default: "-",
    description: "Validation configuration",
  },
];

export default function InputDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Input
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile input component that supports various types, icons,
          validation, and more.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Input label="Basic Input" placeholder="Enter text..." />
            <Input
              label="With Icon"
              placeholder="Search..."
              leftIcon={FiSearch}
            />
            <Input
              label="With Validation"
              placeholder="Enter email..."
              leftIcon={FiSearch}
              validation={{
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              }}
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Input
  label="Basic Input"
  placeholder="Enter text..."
/>

<Input
  label="With Icon"
  placeholder="Search..."
  leftIcon={FiSearch}
/>

<Input
  label="With Validation"
  placeholder="Enter email..."
  leftIcon={FiSearch}
  validation={{
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address",
  }}
/>`}
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Variants
        </h2>
        <Card>
          <div className="space-y-4">
            <Input label="Default" placeholder="Default input" />
          </div>
        </Card>
        <CodeBlock
          code={`<Input
  label="Default"
  placeholder="Default input"
/>`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Sizes
        </h2>
        <Card>
          <div className="space-y-4">
            <Input
              label="Small (customize with className)"
              placeholder="Small input"
              inputClassName="text-sm py-1"
            />
            <Input label="Medium (default)" placeholder="Medium input" />
            <Input
              label="Large (customize with className)"
              placeholder="Large input"
              inputClassName="text-lg py-3"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Input
  label="Small (customize with className)"
  placeholder="Small input"
  inputClassName="text-sm py-1"
/>

<Input
  label="Medium (default)"
  placeholder="Medium input"
/>

<Input
  label="Large (customize with className)"
  placeholder="Large input"
  inputClassName="text-lg py-3"
/>`}
          language="tsx"
        />
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Features
        </h2>
        <Card>
          <div className="space-y-4">
            <Input
              label="With Character Count"
              placeholder="Type something..."
              maxLength={20}
              showCharacterCount
            />
            <Input
              label="With Error"
              placeholder="Error state"
              error="This field is required"
            />
            <Input label="Disabled" placeholder="Disabled input" disabled />
            <Input
              label="Read Only"
              placeholder="Read only input"
              value="This is read only"
              readOnly
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Input
  label="With Character Count"
  placeholder="Type something..."
  maxLength={20}
  showCharacterCount
/>

<Input
  label="With Error"
  placeholder="Error state"
  error="This field is required"
/>

<Input
  label="Disabled"
  placeholder="Disabled input"
  disabled
/>

<Input
  label="Read Only"
  placeholder="Read only input"
  value="This is read only"
  readOnly
/>`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
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
