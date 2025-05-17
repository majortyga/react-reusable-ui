"use client";
import React from "react";
import Button from "@/components/Button/Button";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { useTheme } from "@/hooks/useTheme";
import { BsArrowRight, BsDownload, BsHeart } from "react-icons/bs";

export default function ButtonDocs() {
  const { isDark } = useTheme();

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
            Button
          </h1>
          <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            A versatile button component that supports different variants,
            sizes, and themes. It can include icons, loading states, and various
            interactive states.
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
          <div className="flex flex-wrap gap-4">
            <Button theme={isDark ? "dark" : "light"}>Default Button</Button>
            <Button theme={isDark ? "dark" : "light"} variant="secondary">
              Secondary
            </Button>
            <Button theme={isDark ? "dark" : "light"} variant="outline">
              Outline
            </Button>
            <Button theme={isDark ? "dark" : "light"} variant="ghost">
              Ghost
            </Button>
          </div>
          <CodeBlock
            code={`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
            language="tsx"
          />
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button theme={isDark ? "dark" : "light"} size="sm">
              Small
            </Button>
            <Button theme={isDark ? "dark" : "light"} size="md">
              Medium
            </Button>
            <Button theme={isDark ? "dark" : "light"} size="lg">
              Large
            </Button>
          </div>
          <CodeBlock
            code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
            language="tsx"
          />
        </section>

        {/* With Icons */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            With Icons
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button theme={isDark ? "dark" : "light"} leftIcon={BsDownload}>
              Download
            </Button>
            <Button theme={isDark ? "dark" : "light"} rightIcon={BsArrowRight}>
              Next
            </Button>
            <Button
              theme={isDark ? "dark" : "light"}
              variant="ghost"
              leftIcon={BsHeart}
            >
              Like
            </Button>
          </div>
          <CodeBlock
            code={`<Button leftIcon={BsDownload}>Download</Button>
<Button rightIcon={BsArrowRight}>Next</Button>
<Button variant="ghost" leftIcon={BsHeart}>Like</Button>`}
            language="tsx"
          />
        </section>

        {/* Loading State */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Loading State
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button theme={isDark ? "dark" : "light"} isLoading>
              Loading
            </Button>
            <Button
              theme={isDark ? "dark" : "light"}
              variant="secondary"
              isLoading
            >
              Loading
            </Button>
          </div>
          <CodeBlock
            code={`<Button isLoading>Loading</Button>
<Button variant="secondary" isLoading>Loading</Button>`}
            language="tsx"
          />
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Disabled State
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button theme={isDark ? "dark" : "light"} disabled>
              Disabled
            </Button>
            <Button
              theme={isDark ? "dark" : "light"}
              variant="secondary"
              disabled
            >
              Disabled
            </Button>
          </div>
          <CodeBlock
            code={`<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>`}
            language="tsx"
          />
        </section>

        {/* Full Width */}
        <section className="space-y-4">
          <h2
            className={`text-2xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Full Width
          </h2>
          <div className="w-full">
            <Button theme={isDark ? "dark" : "light"} fullWidth>
              Full Width Button
            </Button>
          </div>
          <CodeBlock
            code={`<Button fullWidth>Full Width Button</Button>`}
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
                id: "variant",
                prop: "variant",
                type: '"primary" | "secondary" | "outline" | "ghost"',
                description: "Button style variant",
              },
              {
                id: "size",
                prop: "size",
                type: '"sm" | "md" | "lg"',
                description: "Button size",
              },
              {
                id: "theme",
                prop: "theme",
                type: '"light" | "dark"',
                description: "Button theme",
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
                id: "isLoading",
                prop: "isLoading",
                type: "boolean",
                description: "Show loading spinner",
              },
              {
                id: "fullWidth",
                prop: "fullWidth",
                type: "boolean",
                description: "Make button full width",
              },
              {
                id: "disabled",
                prop: "disabled",
                type: "boolean",
                description: "Disable the button",
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
