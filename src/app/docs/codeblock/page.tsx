"use client";
import React from "react";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table, { Column } from "@/components/Table/Table";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function CodeBlockPage() {
  const columns: Column<TableData>[] = [
    {
      key: "prop",
      title: "Prop",
      dataIndex: "prop",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "default",
      title: "Default",
      dataIndex: "default",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
  ];

  const data: TableData[] = [
    {
      id: 1,
      prop: "code",
      type: "string",
      default: "-",
      description: "The code content to display",
    },
    {
      id: 2,
      prop: "language",
      type: "string",
      default: '"tsx"',
      description: "The programming language for syntax highlighting",
    },
    {
      id: 3,
      prop: "showLineNumbers",
      type: "boolean",
      default: "true",
      description: "Whether to show line numbers",
    },
    {
      id: 4,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the component",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">CodeBlock</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A versatile code block component with syntax highlighting, line
          numbers, and copy functionality.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Syntax highlighting for multiple languages</li>
          <li>Optional line numbers</li>
          <li>Copy to clipboard functionality</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Responsive design</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic CodeBlock</h3>
          <div className="border rounded-lg p-4">
            <CodeBlock
              code={`function hello() {
  console.log("Hello, world!");
}`}
              language="javascript"
            />
          </div>
          <CodeBlock
            code={`<CodeBlock
  code={\`function hello() {
  console.log("Hello, world!");
}\`}
  language="javascript"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Without Line Numbers</h3>
          <div className="border rounded-lg p-4">
            <CodeBlock
              code={`const greeting = "Hello, world!";
console.log(greeting);`}
              language="javascript"
              showLineNumbers={false}
            />
          </div>
          <CodeBlock
            code={`<CodeBlock
  code={\`const greeting = "Hello, world!";
console.log(greeting);\`}
  language="javascript"
  showLineNumbers={false}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <CodeBlock
              code={`import React from 'react';

function App() {
  return <div>Hello World</div>;
}`}
              language="tsx"
              className="shadow-lg"
            />
          </div>
          <CodeBlock
            code={`<CodeBlock
  code={\`import React from 'react';

function App() {
  return <div>Hello World</div>;
}\`}
  language="tsx"
  className="shadow-lg"
/>`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <Table columns={columns} data={data} bordered size="middle" />
      </div>
    </div>
  );
}
