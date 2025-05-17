"use client";
import React, { useState } from "react";
import Input from "@/components/Input/Input";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { useTheme } from "@/hooks/useTheme";
import { BsSearch, BsPerson, BsEnvelope, BsLock } from "react-icons/bs";

export default function InputDocs() {
  const { isDark } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div
          className={`p-6 rounded-lg ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Input
          </h1>
          <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            A versatile input component that supports various types, icons,
            validation, and themes. It can be used for text input, search,
            password fields, and more.
          </p>
        </div>

        {/* Basic Usage */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Basic Usage
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Basic Input"
              placeholder="Enter text..."
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="With Left Icon"
              leftIcon={BsPerson}
              placeholder="Enter your name..."
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="With Right Icon"
              rightIcon={BsSearch}
              placeholder="Search..."
            />
          </div>
          <CodeBlock
            code={`<Input label="Basic Input" placeholder="Enter text..." />
<Input
  label="With Left Icon"
  leftIcon={BsPerson}
  placeholder="Enter your name..."
/>
<Input
  label="With Right Icon"
  rightIcon={BsSearch}
  placeholder="Search..."
/>`}
            language="tsx"
          />
        </section>

        {/* Input Types */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Input Types
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Email Input"
              type="email"
              leftIcon={BsEnvelope}
              placeholder="Enter your email..."
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Password Input"
              type="password"
              leftIcon={BsLock}
              placeholder="Enter your password..."
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Search Input"
              type="search"
              leftIcon={BsSearch}
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <CodeBlock
            code={`<Input
  label="Email Input"
  type="email"
  leftIcon={BsEnvelope}
  placeholder="Enter your email..."
/>
<Input
  label="Password Input"
  type="password"
  leftIcon={BsLock}
  placeholder="Enter your password..."
/>
<Input
  label="Search Input"
  type="search"
  leftIcon={BsSearch}
  placeholder="Search..."
/>`}
            language="tsx"
          />
        </section>

        {/* Validation */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Validation
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Email Validation"
              type="email"
              leftIcon={BsEnvelope}
              placeholder="Enter your email..."
              validation={{
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              }}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Required Field"
              placeholder="This field is required"
              error="This field is required"
            />
          </div>
          <CodeBlock
            code={`<Input
  label="Email Validation"
  type="email"
  leftIcon={BsEnvelope}
  placeholder="Enter your email..."
  validation={{
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address",
  }}
/>
<Input
  label="Required Field"
  placeholder="This field is required"
  error="This field is required"
/>`}
            language="tsx"
          />
        </section>

        {/* Character Count */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Character Count
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="With Character Count"
              placeholder="Enter text..."
              maxLength={50}
              showCharacterCount
            />
          </div>
          <CodeBlock
            code={`<Input
  label="With Character Count"
  placeholder="Enter text..."
  maxLength={50}
  showCharacterCount
/>`}
            language="tsx"
          />
        </section>

        {/* Searchable */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Searchable
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Search with Options"
              placeholder="Search..."
              searchable
              options={[
                "Apple",
                "Banana",
                "Cherry",
                "Date",
                "Elderberry",
                "Fig",
                "Grape",
              ]}
            />
          </div>
          <CodeBlock
            code={`<Input
  label="Search with Options"
  placeholder="Search..."
  searchable
  options={[
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ]}
/>`}
            language="tsx"
          />
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            API Reference
          </h2>
          <Table
            columns={[
              { key: "prop", title: "Prop", dataIndex: "prop" },
              { key: "type", title: "Type", dataIndex: "type" },
              {
                key: "description",
                title: "Description",
                dataIndex: "description",
              },
            ]}
            data={[
              {
                id: "theme",
                prop: "theme",
                type: '"light" | "dark"',
                description: "Input theme",
              },
              {
                id: "label",
                prop: "label",
                type: "string",
                description: "Input label",
              },
              {
                id: "leftIcon",
                prop: "leftIcon",
                type: "IconType",
                description: "Icon component to show on the left",
              },
              {
                id: "rightIcon",
                prop: "rightIcon",
                type: "IconType",
                description: "Icon component to show on the right",
              },
              {
                id: "error",
                prop: "error",
                type: "string",
                description: "Error message to display",
              },
              {
                id: "searchable",
                prop: "searchable",
                type: "boolean",
                description: "Enable search functionality with options",
              },
              {
                id: "options",
                prop: "options",
                type: "string[]",
                description: "Options for searchable input",
              },
              {
                id: "maxLength",
                prop: "maxLength",
                type: "number",
                description: "Maximum character length",
              },
              {
                id: "showCharacterCount",
                prop: "showCharacterCount",
                type: "boolean",
                description: "Show character count",
              },
              {
                id: "validation",
                prop: "validation",
                type: "{ pattern: RegExp; message: string }",
                description: "Validation rules",
              },
            ]}
            bordered
            size="small"
            showHeader
            className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
            headerClassName={`${
              isDark ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-900"
            }`}
            rowClassName={`${isDark ? "border-gray-700" : "border-gray-200"}`}
          />
        </section>
      </div>
    </div>
  );
}
