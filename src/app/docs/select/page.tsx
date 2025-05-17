"use client";
import React from "react";
import Select from "@/components/Select/Select";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

type ApiRow = {
  id: number;
  prop:
    | "options"
    | "value"
    | "onChange"
    | "placeholder"
    | "disabled"
    | "error"
    | "popupPosition"
    | "multiple"
    | "searchable"
    | "clearable"
    | "label"
    | "leftIcon"
    | "rightIcon"
    | "className"
    | "maxDisplayedItems"
    | "groupBy"
    | "customOptionRenderer";
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
    prop: "options",
    type: "SelectOption[]",
    default: "[]",
    description: "Array of select options",
  },
  {
    id: 2,
    prop: "value",
    type: "string | string[]",
    default: "-",
    description: "Selected value(s)",
  },
  {
    id: 3,
    prop: "onChange",
    type: "(value: string | string[]) => void",
    default: "-",
    description: "Callback when selection changes",
  },
  {
    id: 4,
    prop: "placeholder",
    type: "string",
    default: "Select an option",
    description: "Placeholder text",
  },
  {
    id: 5,
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the select is disabled",
  },
  {
    id: 6,
    prop: "error",
    type: "string",
    default: "-",
    description: "Error message to display",
  },
  {
    id: 7,
    prop: "popupPosition",
    type: "top | bottom",
    default: "bottom",
    description: "Position of the options popup",
  },
  {
    id: 8,
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "Whether multiple selection is allowed",
  },
  {
    id: 9,
    prop: "searchable",
    type: "boolean",
    default: "false",
    description: "Whether the select is searchable",
  },
  {
    id: 10,
    prop: "clearable",
    type: "boolean",
    default: "false",
    description: "Whether the select can be cleared",
  },
  {
    id: 11,
    prop: "label",
    type: "string",
    default: "-",
    description: "Label text for the select",
  },
  {
    id: 12,
    prop: "leftIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the left side",
  },
  {
    id: 13,
    prop: "rightIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the right side",
  },
  {
    id: 14,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the select",
  },
  {
    id: 15,
    prop: "maxDisplayedItems",
    type: "number",
    default: "3",
    description: "Maximum number of items to display in multiple selection",
  },
  {
    id: 16,
    prop: "groupBy",
    type: "string",
    default: "-",
    description: "Property to group options by",
  },
  {
    id: 17,
    prop: "customOptionRenderer",
    type: "(option: SelectOption) => React.ReactNode",
    default: "-",
    description: "Custom renderer for option items",
  },
];

// Example options
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function SelectDocs() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Select
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A flexible select component that supports single and multiple
          selection.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              placeholder="Select an option"
            />
          </div>
        </Card>
        <CodeBlock
          code={`const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const [value, setValue] = useState("");

const handleChange = (newValue: string | string[]) => {
  if (typeof newValue === "string") {
    setValue(newValue);
  }
};

<Select
  options={options}
  value={value}
  onChange={handleChange}
  placeholder="Select an option"
/>`}
          language="tsx"
        />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          States
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value=""
              onChange={() => {}}
              placeholder="Disabled Select"
              disabled
            />
            <Select
              options={options}
              value=""
              onChange={() => {}}
              placeholder="Error Select"
              error="This field is required"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Select
  options={options}
  value=""
  onChange={() => {}}
  placeholder="Disabled Select"
  disabled
/>

<Select
  options={options}
  value=""
  onChange={() => {}}
  placeholder="Error Select"
  error="This field is required"
/>`}
          language="tsx"
        />
      </section>

      {/* Popup Position */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popup Position
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value=""
              onChange={() => {}}
              placeholder="Popup Below"
              popupPosition="bottom"
            />
            <Select
              options={options}
              value=""
              onChange={() => {}}
              placeholder="Popup Above"
              popupPosition="top"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Select
  options={options}
  value=""
  onChange={() => {}}
  placeholder="Popup Below"
  popupPosition="bottom"
/>

<Select
  options={options}
  value=""
  onChange={() => {}}
  placeholder="Popup Above"
  popupPosition="top"
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
