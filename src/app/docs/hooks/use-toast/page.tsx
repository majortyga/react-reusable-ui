"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast/Toast";

export default function UseToastDocs() {
  const { toasts, showToast, removeToast } = useToast();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          useToast
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A hook for managing toast notifications with different types and
          durations.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => showToast("success", "Operation successful!")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Show Success Toast
              </button>
              <button
                onClick={() => showToast("error", "Something went wrong!")}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Show Error Toast
              </button>
              <button
                onClick={() => showToast("warning", "Please be careful!")}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Show Warning Toast
              </button>
              <button
                onClick={() => showToast("info", "Here's some information.")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Show Info Toast
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast/Toast";

function MyComponent() {
  const { toasts, showToast, removeToast } = useToast();

  return (
    <div>
      <button onClick={() => showToast("success", "Operation successful!")}>
        Show Success Toast
      </button>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
        />
      ))}
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* With Duration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Duration
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => showToast("success", "Quick message", 2000)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Quick Toast (2s)
              </button>
              <button
                onClick={() => showToast("info", "Longer message", 8000)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Long Toast (8s)
              </button>
              <button
                onClick={() => showToast("warning", "Stays until closed", 0)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Persistent Toast
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`// Show a toast that disappears after 2 seconds
showToast("success", "Quick message", 2000);

// Show a toast that disappears after 8 seconds
showToast("info", "Longer message", 8000);

// Show a toast that stays until manually closed
showToast("warning", "Stays until closed", 0);`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
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
                id: "toasts",
                prop: "toasts",
                type: "Toast[]",
                description: "Array of active toast notifications",
              },
              {
                id: "showToast",
                prop: "showToast",
                type: "(type: ToastType, message: string, duration?: number) => void",
                description: "Function to show a new toast notification",
              },
              {
                id: "removeToast",
                prop: "removeToast",
                type: "(id: string) => void",
                description: "Function to remove a toast notification by ID",
              },
            ]}
            bordered
            size="small"
            showHeader
          />
        </Card>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types
        </h2>
        <Card>
          <CodeBlock
            code={`type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface UseToastReturn {
  toasts: Toast[];
  showToast: (type: ToastType, message: string, duration?: number) => void;
  removeToast: (id: string) => void;
}`}
            language="tsx"
          />
        </Card>
      </section>

      {/* Active Toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
        />
      ))}
    </div>
  );
}
