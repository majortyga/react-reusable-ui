"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Slider from "@/components/Slider/Slider";

export default function SliderDocs() {
  const [value, setValue] = useState(50);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Slider
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for selecting a value within a range using a slider
          control.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <Slider value={value} onChange={setValue} />
        </Card>
        <CodeBlock
          code={`const [value, setValue] = useState(50);

<Slider value={value} onChange={setValue} />`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Range
        </h2>
        <Card>
          <Slider
            min={0}
            max={1000}
            step={10}
            value={value}
            onChange={setValue}
          />
        </Card>
        <CodeBlock
          code={`<Slider
  min={0}
  max={1000}
  step={10}
  value={value}
  onChange={setValue}
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
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
                id: "min",
                prop: "min",
                type: "number",
                default: "0",
                description: "Minimum value of the slider",
              },
              {
                id: "max",
                prop: "max",
                type: "number",
                default: "100",
                description: "Maximum value of the slider",
              },
              {
                id: "step",
                prop: "step",
                type: "number",
                default: "1",
                description: "Step interval between values",
              },
              {
                id: "value",
                prop: "value",
                type: "number",
                default: "undefined",
                description: "Current value of the slider",
              },
              {
                id: "onChange",
                prop: "onChange",
                type: "(value: number) => void",
                default: "undefined",
                description: "Callback function when value changes",
              },
              {
                id: "className",
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes for the container",
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
