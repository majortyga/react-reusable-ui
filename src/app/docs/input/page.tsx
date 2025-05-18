"use client";
import React, { useState } from "react";
import { FiSearch, FiUser, FiMail, FiLock } from "react-icons/fi";
import {
  BsCreditCard,
  BsCalendar,
  BsPhone,
  BsCurrencyDollar,
  BsKey,
  BsShieldLock,
} from "react-icons/bs";
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
    | "validation"
    | "mask"
    | "searchable"
    | "options"
    | "maxLength"
    | "showCharacterCount"
    | "type"
    | "theme"
    | "wrapperClassName"
    | "labelClassName"
    | "inputContainerClassName"
    | "inputClassName"
    | "iconContainerClassName"
    | "iconClassName"
    | "errorClassName"
    | "optionsContainerClassName"
    | "optionClassName"
    | "characterCountClassName";
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
    type: "{ pattern: RegExp; message: string }",
    default: "-",
    description: "Validation configuration",
  },
  {
    id: 9,
    prop: "mask",
    type: "{ type: MaskType; pattern?: string; placeholder?: string }",
    default: "-",
    description: "Input masking configuration",
  },
  {
    id: 10,
    prop: "searchable",
    type: "boolean",
    default: "false",
    description: "Enable search functionality with options",
  },
  {
    id: 11,
    prop: "options",
    type: "string[]",
    default: "[]",
    description: "Options for searchable input",
  },
  {
    id: 12,
    prop: "maxLength",
    type: "number",
    default: "-",
    description: "Maximum character length",
  },
  {
    id: 13,
    prop: "showCharacterCount",
    type: "boolean",
    default: "false",
    description: "Show character count",
  },
  {
    id: 14,
    prop: "type",
    type: "string",
    default: "text",
    description: "Input type (text, password, email, search, etc.)",
  },
  {
    id: 15,
    prop: "theme",
    type: '"light" | "dark"',
    default: "-",
    description: "Input theme",
  },
  {
    id: 16,
    prop: "wrapperClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the wrapper div",
  },
  {
    id: 17,
    prop: "labelClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the label",
  },
  {
    id: 18,
    prop: "inputContainerClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the input container",
  },
  {
    id: 19,
    prop: "inputClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the input element",
  },
  {
    id: 20,
    prop: "iconContainerClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the icon container",
  },
  {
    id: 21,
    prop: "iconClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the icon",
  },
  {
    id: 22,
    prop: "errorClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the error message",
  },
  {
    id: 23,
    prop: "optionsContainerClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the options container",
  },
  {
    id: 24,
    prop: "optionClassName",
    type: "string",
    default: "-",
    description: "Additional classes for each option",
  },
  {
    id: 25,
    prop: "characterCountClassName",
    type: "string",
    default: "-",
    description: "Additional classes for the character count",
  },
];

export default function InputDocs() {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [ssnValue, setSsnValue] = useState("");
  const [zipValue, setZipValue] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");
  const [customMaskValue, setCustomMaskValue] = useState("");
  const [searchableValue, setSearchableValue] = useState("");

  // Sample data for searchable inputs
  const states = [
    "Lagos",
    "Abuja",
    "Kano",
    "Port Harcourt",
    "Ibadan",
    "Benin City",
    "Calabar",
    "Enugu",
    "Abeokuta",
    "Warri",
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Input
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile input component that supports various types, icons,
          validation, masking, and more.
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
              label="With Left Icon"
              placeholder="Enter your name..."
              leftIcon={FiUser}
            />
            <Input
              label="With Right Icon"
              placeholder="Search..."
              rightIcon={FiSearch}
            />
            <Input
              label="With Both Icons"
              placeholder="Search users..."
              leftIcon={FiUser}
              rightIcon={FiSearch}
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Input label="Basic Input" placeholder="Enter text..." />
<Input
  label="With Left Icon"
  placeholder="Enter your name..."
  leftIcon={FiUser}
/>
<Input
  label="With Right Icon"
  placeholder="Search..."
  rightIcon={FiSearch}
/>
<Input
  label="With Both Icons"
  placeholder="Search users..."
  leftIcon={FiUser}
  rightIcon={FiSearch}
/>`}
          language="tsx"
        />
      </section>

      {/* Password Inputs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Password Inputs
        </h2>
        <Card>
          <div className="space-y-4">
            <Input
              label="Password with Toggle"
              type="password"
              leftIcon={FiLock}
              placeholder="Enter your password..."
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Input
              label="Confirm Password"
              type="password"
              leftIcon={BsShieldLock}
              placeholder="Confirm your password..."
              value={confirmPasswordValue}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              error={
                passwordValue !== confirmPasswordValue
                  ? "Passwords do not match"
                  : ""
              }
            />
            <Input
              label="Password with Requirements"
              type="password"
              leftIcon={BsKey}
              placeholder="Enter password..."
              validation={{
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters with letters and numbers",
              }}
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Input
  label="Password with Toggle"
  type="password"
  leftIcon={FiLock}
  placeholder="Enter your password..."
/>
<Input
  label="Confirm Password"
  type="password"
  leftIcon={BsShieldLock}
  placeholder="Confirm your password..."
  error={passwordValue !== confirmPasswordValue ? "Passwords do not match" : ""}
/>
<Input
  label="Password with Requirements"
  type="password"
  leftIcon={BsKey}
  placeholder="Enter password..."
  validation={{
    pattern: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/,
    message: "Password must be at least 8 characters with letters and numbers",
  }}
/>`}
          language="tsx"
        />
      </section>

      {/* Searchable Inputs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Searchable Inputs
        </h2>
        <Card>
          <div className="space-y-4">
            <Input
              label="Search States"
              placeholder="Search Nigerian states..."
              searchable
              options={states}
              value={searchableValue}
              onChange={(e) => setSearchableValue(e.target.value)}
              leftIcon={FiSearch}
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Selected state: {searchableValue || "None"}
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`const [searchableValue, setSearchableValue] = useState("");

// Sample data
const states = [
  "Lagos",
  "Abuja",
  "Kano",
  "Port Harcourt",
  "Ibadan",
  "Benin City",
  "Calabar",
  "Enugu",
  "Abeokuta",
  "Warri"
];

<Input
  label="Search States"
  placeholder="Search Nigerian states..."
  searchable
  options={states}
  value={searchableValue}
  onChange={(e) => setSearchableValue(e.target.value)}
  leftIcon={FiSearch}
/>`}
          language="tsx"
        />
      </section>

      {/* Input Masking */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Input Masking
        </h2>
        <Card>
          <div className="space-y-4">
            <Input
              label="Phone Number"
              leftIcon={BsPhone}
              mask={{ type: "phone" }}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="Enter Nigerian phone number"
            />
            <Input
              label="Date"
              leftIcon={BsCalendar}
              mask={{ type: "date" }}
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              placeholder="DD/MM/YYYY"
            />
            <Input
              label="NIN"
              mask={{ type: "custom", pattern: "####-####-####" }}
              value={ssnValue}
              onChange={(e) => setSsnValue(e.target.value)}
              placeholder="Enter NIN"
            />
            <Input
              label="Postal Code"
              mask={{ type: "zip" }}
              value={zipValue}
              onChange={(e) => setZipValue(e.target.value)}
              placeholder="Enter postal code"
            />
          </div>
        </Card>
        <CodeBlock
          code={`// Phone number mask (Nigerian format)
<Input
  label="Phone Number"
  leftIcon={BsPhone}
  mask={{ type: "phone" }}
  placeholder="Enter Nigerian phone number"
/>

// Date mask
<Input
  label="Date"
  leftIcon={BsCalendar}
  mask={{ type: "date" }}
  placeholder="DD/MM/YYYY"
/>

// NIN mask
<Input
  label="NIN"
  mask={{ type: "custom", pattern: "####-####-####" }}
  placeholder="Enter NIN"
/>

// Postal code mask
<Input
  label="Postal Code"
  mask={{ type: "zip" }}
  placeholder="Enter postal code"
/>
`}
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
            <Input
              label="With Validation"
              placeholder="Enter email..."
              leftIcon={FiMail}
              validation={{
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              }}
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
  label="With Validation"
  placeholder="Enter email..."
  leftIcon={FiMail}
  validation={{
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address",
  }}
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
