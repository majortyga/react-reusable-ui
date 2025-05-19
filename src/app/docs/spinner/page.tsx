"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Spinner from "@/components/Spinner/Spinner";

export default function SpinnerDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Spinner
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile loading spinner component with multiple styles, sizes, and
          variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="flex flex-wrap gap-8 items-center">
            <Spinner />
            <Spinner size="sm" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </Card>
        <CodeBlock
          code={`<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />
<Spinner size="xl" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Variants
        </h2>
        <Card>
          <div className="flex flex-wrap gap-8 items-center">
            <Spinner variant="primary" />
            <Spinner variant="secondary" />
            <Spinner variant="success" />
            <Spinner variant="danger" />
            <Spinner variant="warning" />
            <Spinner variant="info" />
          </div>
        </Card>
        <CodeBlock
          code={`<Spinner variant="primary" />
<Spinner variant="secondary" />
<Spinner variant="success" />
<Spinner variant="danger" />
<Spinner variant="warning" />
<Spinner variant="info" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types
        </h2>
        <Card>
          <div className="flex flex-wrap gap-8 items-center">
            <Spinner type="circular" />
            <Spinner type="dots" />
            <Spinner type="pulse" />
            <Spinner type="gradient" />
            <Spinner type="bounce" />
          </div>
        </Card>
        <CodeBlock
          code={`<Spinner type="circular" />
<Spinner type="dots" />
<Spinner type="pulse" />
<Spinner type="gradient" />
<Spinner type="bounce" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Text
        </h2>
        <Card>
          <div className="flex flex-wrap gap-8 items-center">
            <Spinner text="Loading..." textPosition="right" />
            <Spinner text="Loading..." textPosition="left" />
            <Spinner text="Loading..." textPosition="top" />
            <Spinner text="Loading..." textPosition="bottom" />
          </div>
        </Card>
        <CodeBlock
          code={`<Spinner text="Loading..." textPosition="right" />
<Spinner text="Loading..." textPosition="left" />
<Spinner text="Loading..." textPosition="top" />
<Spinner text="Loading..." textPosition="bottom" />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-x-auto max-w-[85vw] md:max-w-full">
          <Table
            columns={[
              { key: "prop", title: "Prop", dataIndex: "prop" },
              { key: "type", title: "Type", dataIndex: "type" },
              { key: "default", title: "Default", dataIndex: "default" },
              {
                key: "description",
                title: "Description",
                dataIndex: "description",
              },
            ]}
            data={[
              {
                id: "size",
                prop: "size",
                type: '"sm" | "md" | "lg" | "xl"',
                default: '"md"',
                description: "Controls the size of the spinner",
              },
              {
                id: "variant",
                prop: "variant",
                type: '"primary" | "secondary" | "success" | "danger" | "warning" | "info"',
                default: '"primary"',
                description: "Sets the color variant of the spinner",
              },
              {
                id: "text",
                prop: "text",
                type: "string",
                default: "undefined",
                description: "Optional text to display alongside the spinner",
              },
              {
                id: "textPosition",
                prop: "textPosition",
                type: '"left" | "right" | "top" | "bottom"',
                default: '"right"',
                description: "Position of the text relative to the spinner",
              },
              {
                id: "type",
                prop: "type",
                type: '"circular" | "dots" | "pulse" | "gradient" | "bounce"',
                default: '"circular"',
                description: "The style/type of spinner animation",
              },
            ]}
            bordered
            size="small"
            showHeader
          />
        </Card>
      </section>
    </div>
  );
}
