"use client";
import React, { useState } from "react";
import Input from "@/components/Input/Input";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { useTheme } from "@/hooks/useTheme";
import {
  BsSearch,
  BsPerson,
  BsEnvelope,
  BsLock,
  BsCreditCard,
  BsCalendar,
  BsPhone,
  BsCurrencyDollar,
  BsEye,
  BsEyeSlash,
  BsKey,
  BsShieldLock,
} from "react-icons/bs";

export default function InputDocs() {
  const { isDark } = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
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
  const [searchableWithValidationValue, setSearchableWithValidationValue] =
    useState("");

  // Sample data for searchable inputs
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
  ];

  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ];

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
            validation, masking, and themes. It can be used for text input,
            search, password fields, and more.
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
            <Input
              theme={isDark ? "dark" : "light"}
              label="With Both Icons"
              leftIcon={BsPerson}
              rightIcon={BsSearch}
              placeholder="Search users..."
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
/>
<Input
  label="With Both Icons"
  leftIcon={BsPerson}
  rightIcon={BsSearch}
  placeholder="Search users..."
/>`}
            language="tsx"
          />
        </section>

        {/* Password Inputs */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Password Inputs
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Password with Toggle"
              type="password"
              leftIcon={BsLock}
              placeholder="Enter your password..."
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
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
              theme={isDark ? "dark" : "light"}
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
          <CodeBlock
            code={`<Input
  label="Password with Toggle"
  type="password"
  leftIcon={BsLock}
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
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Searchable Inputs
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Search Countries"
              placeholder="Search countries..."
              searchable
              options={countries}
              value={searchableValue}
              onChange={(e) => setSearchableValue(e.target.value)}
              leftIcon={BsSearch}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Search Fruits"
              placeholder="Search fruits..."
              searchable
              options={fruits}
              value={searchableWithValidationValue}
              onChange={(e) => setSearchableWithValidationValue(e.target.value)}
              leftIcon={BsSearch}
              validation={{
                pattern: /^[A-Za-z]+$/,
                message: "Please enter only letters",
              }}
            />
          </div>
          <CodeBlock
            code={`// Basic searchable input
<Input
  label="Search Countries"
  placeholder="Search countries..."
  searchable
  options={countries}
  leftIcon={BsSearch}
/>

// Searchable input with validation
<Input
  label="Search Fruits"
  placeholder="Search fruits..."
  searchable
  options={fruits}
  leftIcon={BsSearch}
  validation={{
    pattern: /^[A-Za-z]+$/,
    message: "Please enter only letters"
  }}
/>`}
            language="tsx"
          />
        </section>

        {/* Input Masking */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Input Masking
          </h2>
          <div className="space-y-4">
            <Input
              theme={isDark ? "dark" : "light"}
              label="Phone Number"
              leftIcon={BsPhone}
              mask={{ type: "phone" }}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Date"
              leftIcon={BsCalendar}
              mask={{ type: "date" }}
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Credit Card"
              leftIcon={BsCreditCard}
              mask={{ type: "credit-card" }}
              value={cardValue}
              onChange={(e) => setCardValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="SSN"
              mask={{ type: "ssn" }}
              value={ssnValue}
              onChange={(e) => setSsnValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="ZIP Code"
              mask={{ type: "zip" }}
              value={zipValue}
              onChange={(e) => setZipValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Currency"
              leftIcon={BsCurrencyDollar}
              mask={{ type: "currency" }}
              value={currencyValue}
              onChange={(e) => setCurrencyValue(e.target.value)}
            />
            <Input
              theme={isDark ? "dark" : "light"}
              label="Custom Mask"
              mask={{
                type: "custom",
                pattern: "##-###-###",
                placeholder: "_",
              }}
              value={customMaskValue}
              onChange={(e) => setCustomMaskValue(e.target.value)}
            />
          </div>
          <CodeBlock
            code={`// Phone number mask
<Input
  label="Phone Number"
  leftIcon={BsPhone}
  mask={{ type: "phone" }}
/>

// Date mask
<Input
  label="Date"
  leftIcon={BsCalendar}
  mask={{ type: "date" }}
/>

// Credit card mask
<Input
  label="Credit Card"
  leftIcon={BsCreditCard}
  mask={{ type: "credit-card" }}
/>

// SSN mask
<Input
  label="SSN"
  mask={{ type: "ssn" }}
/>

// ZIP code mask
<Input
  label="ZIP Code"
  mask={{ type: "zip" }}
/>

// Currency mask
<Input
  label="Currency"
  leftIcon={BsCurrencyDollar}
  mask={{ type: "currency" }}
/>

// Custom mask
<Input
  label="Custom Mask"
  mask={{ 
    type: "custom",
    pattern: "##-###-###",
    placeholder: "_"
  }}
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
            <Input
              theme={isDark ? "dark" : "light"}
              label="With Character Count and Validation"
              placeholder="Enter text..."
              maxLength={100}
              showCharacterCount
              validation={{
                pattern: /^[A-Za-z\s]+$/,
                message: "Please enter only letters and spaces",
              }}
            />
          </div>
          <CodeBlock
            code={`<Input
  label="With Character Count"
  placeholder="Enter text..."
  maxLength={50}
  showCharacterCount
/>
<Input
  label="With Character Count and Validation"
  placeholder="Enter text..."
  maxLength={100}
  showCharacterCount
  validation={{
    pattern: /^[A-Za-z\\s]+$/,
    message: "Please enter only letters and spaces",
  }}
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
              {
                id: "mask",
                prop: "mask",
                type: "{ type: MaskType; pattern?: string; placeholder?: string }",
                description: "Input masking configuration",
              },
              {
                id: "type",
                prop: "type",
                type: "string",
                description: "Input type (text, password, email, search, etc.)",
              },
              {
                id: "wrapperClassName",
                prop: "wrapperClassName",
                type: "string",
                description: "Additional classes for the wrapper div",
              },
              {
                id: "labelClassName",
                prop: "labelClassName",
                type: "string",
                description: "Additional classes for the label",
              },
              {
                id: "inputContainerClassName",
                prop: "inputContainerClassName",
                type: "string",
                description: "Additional classes for the input container",
              },
              {
                id: "inputClassName",
                prop: "inputClassName",
                type: "string",
                description: "Additional classes for the input element",
              },
              {
                id: "iconContainerClassName",
                prop: "iconContainerClassName",
                type: "string",
                description: "Additional classes for the icon container",
              },
              {
                id: "iconClassName",
                prop: "iconClassName",
                type: "string",
                description: "Additional classes for the icon",
              },
              {
                id: "errorClassName",
                prop: "errorClassName",
                type: "string",
                description: "Additional classes for the error message",
              },
              {
                id: "optionsContainerClassName",
                prop: "optionsContainerClassName",
                type: "string",
                description: "Additional classes for the options container",
              },
              {
                id: "optionClassName",
                prop: "optionClassName",
                type: "string",
                description: "Additional classes for each option",
              },
              {
                id: "characterCountClassName",
                prop: "characterCountClassName",
                type: "string",
                description: "Additional classes for the character count",
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
