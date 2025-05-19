"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { FiSearch, FiUser, FiMail } from "react-icons/fi";
import Select from "@/components/Select/Select";

type ApiRow = {
  id: number;
  prop: string;
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
    description: "Currently selected value(s)",
  },
  {
    id: 3,
    prop: "onChange",
    type: "(value: string | string[]) => void",
    default: "-",
    description: "Callback fired when selection changes",
  },
  {
    id: 4,
    prop: "placeholder",
    type: "string",
    default: "Select an option",
    description: "Placeholder text when no option is selected",
  },
  {
    id: 5,
    prop: "label",
    type: "string",
    default: "-",
    description: "Label text for the select",
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
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "Whether multiple selections are allowed",
  },
  {
    id: 8,
    prop: "searchable",
    type: "boolean",
    default: "false",
    description: "Whether the select is searchable",
  },
  {
    id: 9,
    prop: "leftIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the left side",
  },
  {
    id: 10,
    prop: "rightIcon",
    type: "IconType",
    default: "-",
    description: "Icon to display on the right side",
  },
  {
    id: 11,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the select container",
  },
  {
    id: 12,
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the select is disabled",
  },
  {
    id: 13,
    prop: "clearable",
    type: "boolean",
    default: "false",
    description: "Whether the select can be cleared",
  },
  {
    id: 14,
    prop: "maxDisplayedItems",
    type: "number",
    default: "3",
    description: "Maximum number of items to display in multiple select",
  },
  {
    id: 15,
    prop: "groupBy",
    type: "string",
    default: "-",
    description: "Property to group options by",
  },
  {
    id: 16,
    prop: "popupPosition",
    type: "top | bottom",
    default: "bottom",
    description: "Position of the options popup",
  },
  {
    id: 17,
    prop: "customOptionRenderer",
    type: "(option: SelectOption) => React.ReactNode",
    default: "-",
    description: "Custom render function for options",
  },
  {
    id: 18,
    prop: "wrapperClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the wrapper div",
  },
  {
    id: 19,
    prop: "labelClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the label",
  },
  {
    id: 20,
    prop: "selectContainerClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the select container",
  },
  {
    id: 21,
    prop: "selectClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the select element",
  },
  {
    id: 22,
    prop: "iconContainerClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the icon container",
  },
  {
    id: 23,
    prop: "iconClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the icon",
  },
  {
    id: 24,
    prop: "errorClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the error message",
  },
  {
    id: 25,
    prop: "optionsContainerClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the options container",
  },
  {
    id: 26,
    prop: "searchInputClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the search input",
  },
  {
    id: 27,
    prop: "optionsListClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the options list",
  },
  {
    id: 28,
    prop: "optionClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for individual options",
  },
  {
    id: 29,
    prop: "checkmarkClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the checkmark",
  },
  {
    id: 30,
    prop: "groupHeaderClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for group headers",
  },
  {
    id: 31,
    prop: "noOptionsClassName",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the no options message",
  },
];

// Example options for all examples
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

// Grouped options example
const groupedOptions = [
  { value: "fruit1", label: "Apple", group: "Fruits" },
  { value: "fruit2", label: "Banana", group: "Fruits" },
  { value: "veg1", label: "Carrot", group: "Vegetables" },
  { value: "veg2", label: "Broccoli", group: "Vegetables" },
];

// Custom options example
const customOptions = [
  {
    value: "option1",
    label: "Option 1",
    description: "Description 1",
    icon: FiUser,
  },
  {
    value: "option2",
    label: "Option 2",
    description: "Description 2",
    icon: FiMail,
  },
  {
    value: "option3",
    label: "Option 3",
    description: "Description 3",
    icon: FiSearch,
  },
];

export default function SelectDocs() {
  const [value, setValue] = useState<string>("option1");
  const [multipleValue, setMultipleValue] = useState<string[]>([
    "option1",
    "option2",
  ]);
  const [groupedValue, setGroupedValue] = useState<string>("fruit1");
  const [customValue, setCustomValue] = useState<string>("option1");
  const [styledValue, setStyledValue] = useState<string>("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  const handleMultipleChange = (newValue: string | string[]) => {
    if (Array.isArray(newValue)) {
      setMultipleValue(newValue);
    }
  };

  const handleGroupedChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setGroupedValue(newValue);
    }
  };

  const handleCustomChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setCustomValue(newValue);
    }
  };

  const handleStyledChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setStyledValue(newValue);
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
          selection, search, grouping, and custom styling.
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
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

// Define your options
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder="Select an option"
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* With Label and Error */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Label and Error
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              label="Select an option"
              error="This field is required"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");
  const [error, setError] = useState("This field is required");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
      setError(""); // Clear error when value changes
    }
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      label="Select an option"
      error={error}
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Multiple Selection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Multiple Selection
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={multipleValue}
              onChange={handleMultipleChange}
              placeholder="Select multiple options"
              multiple
              maxDisplayedItems={2}
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [multipleValue, setMultipleValue] = useState<string[]>(["option1", "option2"]);

  const handleMultipleChange = (newValue: string | string[]) => {
    if (Array.isArray(newValue)) {
      setMultipleValue(newValue);
    }
  };

  return (
    <Select
      options={options}
      value={multipleValue}
      onChange={handleMultipleChange}
      placeholder="Select multiple options"
      multiple
      maxDisplayedItems={2}
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Searchable */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Searchable
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              placeholder="Search options..."
              searchable
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder="Search options..."
      searchable
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Icons
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              placeholder="Select with icons"
              leftIcon={FiSearch}
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              placeholder="Select with right icon"
              rightIcon={FiUser}
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";
import { FiSearch, FiUser } from "react-icons/fi";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <div className="space-y-4">
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Select with icons"
        leftIcon={FiSearch}
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />

      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Select with right icon"
        rightIcon={FiUser}
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* Grouped Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Grouped Options
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={groupedOptions}
              value={groupedValue}
              onChange={handleGroupedChange}
              placeholder="Select from groups"
              groupBy="group"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const groupedOptions = [
  { value: "fruit1", label: "Apple", group: "Fruits" },
  { value: "fruit2", label: "Banana", group: "Fruits" },
  { value: "veg1", label: "Carrot", group: "Vegetables" },
  { value: "veg2", label: "Broccoli", group: "Vegetables" },
];

export default function MyComponent() {
  const [groupedValue, setGroupedValue] = useState("fruit1");

  const handleGroupedChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setGroupedValue(newValue);
    }
  };

  return (
    <Select
      options={groupedOptions}
      value={groupedValue}
      onChange={handleGroupedChange}
      placeholder="Select from groups"
      groupBy="group"
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Custom Option Rendering */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Option Rendering
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={customOptions}
              value={customValue}
              onChange={handleCustomChange}
              placeholder="Select with custom rendering"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              customOptionRenderer={(option) => (
                <div className="flex items-center gap-2">
                  {option.icon && (
                    <option.icon className="w-5 h-5 text-gray-500" />
                  )}
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-gray-500">
                      {option.description}
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiSearch } from "react-icons/fi";

const customOptions = [
  { value: "option1", label: "Option 1", description: "Description 1", icon: FiUser },
  { value: "option2", label: "Option 2", description: "Description 2", icon: FiMail },
  { value: "option3", label: "Option 3", description: "Description 3", icon: FiSearch },
];

export default function MyComponent() {
  const [customValue, setCustomValue] = useState("option1");

  const handleCustomChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setCustomValue(newValue);
    }
  };

  return (
    <Select
      options={customOptions}
      value={customValue}
      onChange={handleCustomChange}
      placeholder="Select with custom rendering"
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      customOptionRenderer={(option) => (
        <div className="flex items-center gap-2">
          {option.icon && <option.icon className="w-5 h-5 text-gray-500" />}
          <div>
            <div className="font-medium">{option.label}</div>
            <div className="text-sm text-gray-500">{option.description}</div>
          </div>
        </div>
      )}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Styling
        </h2>
        <Card>
          <div className="space-y-4">
            <Select
              options={options}
              value={styledValue}
              onChange={handleStyledChange}
              placeholder="Custom styled select"
              wrapperClassName="max-w-md"
              labelClassName="text-blue-600 font-bold"
              selectContainerClassName="border-2 border-blue-500 rounded-lg"
              selectClassName="text-blue-600"
              iconContainerClassName="bg-blue-500 dark:bg-gray-500 mr-3 rounded-full"
              iconClassName="text-blue-500 dark:text-white"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
              groupHeaderClassName="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder="Custom styled select"
      wrapperClassName="max-w-md"
      labelClassName="text-blue-600 font-bold"
      selectContainerClassName="border-2 border-blue-500 rounded-lg"
      selectClassName="text-blue-600"
      iconContainerClassName="bg-blue-500 dark:bg-gray-500 mr-3 rounded-full"
      iconClassName="text-blue-500 dark:text-white"
      optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
      optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      groupHeaderClassName="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white"
    />
  );
}`}
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
              value="option1"
              onChange={() => {}}
              placeholder="Disabled Select"
              disabled
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
            <Select
              options={options}
              value="option1"
              onChange={() => {}}
              placeholder="Error Select"
              error="This field is required"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
            <Select
              options={options}
              value="option1"
              onChange={() => {}}
              placeholder="Clearable Select"
              clearable
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");
  const [error, setError] = useState("This field is required");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
      setError(""); // Clear error when value changes
    }
  };

  return (
    <div className="space-y-4">
      <Select
        options={options}
        value={value}
        onChange={() => {}}
        placeholder="Disabled Select"
        disabled
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />

      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Error Select"
        error={error}
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />

      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Clearable Select"
        clearable
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />
    </div>
  );
}`}
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
              value={value}
              onChange={handleChange}
              placeholder="Popup Below"
              popupPosition="bottom"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
            <Select
              options={options}
              value={value}
              onChange={handleChange}
              placeholder="Popup Above"
              popupPosition="top"
              optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
              optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Select } from "@majordev/react-reusable-ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function MyComponent() {
  const [value, setValue] = useState("option1");

  const handleChange = (newValue: string | string[]) => {
    if (typeof newValue === "string") {
      setValue(newValue);
    }
  };

  return (
    <div className="space-y-4">
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Popup Below"
        popupPosition="bottom"
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />

      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Popup Above"
        popupPosition="top"
        optionsContainerClassName="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl"
        optionClassName="hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
      />
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-auto max-w-[80vh] md:max-w-full">
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
