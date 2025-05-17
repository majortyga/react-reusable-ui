"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Upload from "@/components/Upload/Upload";

export default function UploadDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Upload
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for handling file uploads with drag and drop support.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <Upload onChange={(files) => console.log(files)} />
        </Card>
        <CodeBlock
          code={`<Upload
  onChange={(files) => console.log(files)}
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Multiple Files
        </h2>
        <Card>
          <Upload multiple onChange={(files) => console.log(files)} />
        </Card>
        <CodeBlock
          code={`<Upload
  multiple
  onChange={(files) => console.log(files)}
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          File Type Restriction
        </h2>
        <Card>
          <Upload
            accept=".jpg,.jpeg,.png"
            onChange={(files) => console.log(files)}
          />
        </Card>
        <CodeBlock
          code={`<Upload
  accept=".jpg,.jpeg,.png"
  onChange={(files) => console.log(files)}
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
                id: "onChange",
                prop: "onChange",
                type: "(files: FileList) => void",
                default: "undefined",
                description: "Callback function when files are selected",
              },
              {
                id: "multiple",
                prop: "multiple",
                type: "boolean",
                default: "false",
                description: "Whether to allow multiple file selection",
              },
              {
                id: "accept",
                prop: "accept",
                type: "string",
                default: "undefined",
                description: "Comma-separated list of accepted file types",
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
