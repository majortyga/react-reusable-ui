/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Toast from "@/components/Toast/Toast";

export default function ToastDocs() {
  const [toasts, setToasts] = useState<
    Array<{
      id: string;
      type: any;
      message: string;
      title?: string;
      position?: string;
      action?: any;
    }>
  >([]);

  const showToast = (
    type: any,
    message: string,
    title?: string,
    position?: string,
    action?: any
  ) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [
      ...prev,
      { id, type, message, title, position, action },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Toast
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A flexible toast notification component for displaying feedback
          messages with various types, positions, and animations.
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
                Success Toast
              </button>
              <button
                onClick={() => showToast("error", "Something went wrong!")}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Error Toast
              </button>
              <button
                onClick={() => showToast("warning", "Please be careful!")}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Warning Toast
              </button>
              <button
                onClick={() => showToast("info", "Here's some information.")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Info Toast
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import Toast from "@/components/Toast/Toast";

function MyComponent() {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Math.random().toString(36).substring(7);
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

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

      {/* With Title */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Title
        </h2>
        <Card>
          <div className="space-y-4">
            <button
              onClick={() =>
                showToast(
                  "success",
                  "Profile updated successfully",
                  "Update Complete"
                )
              }
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Show Toast with Title
            </button>
          </div>
        </Card>
        <CodeBlock
          code={`<Toast
  id="1"
  type="success"
  title="Update Complete"
  message="Profile updated successfully"
  onClose={() => {}}
/>`}
          language="tsx"
        />
      </section>

      {/* With Action */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Action
        </h2>
        <Card>
          <div className="space-y-4">
            <button
              onClick={() =>
                showToast(
                  "info",
                  "New message received",
                  "Message",
                  undefined,
                  {
                    label: "View",
                    onClick: () => console.log("View message"),
                  }
                )
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Show Toast with Action
            </button>
          </div>
        </Card>
        <CodeBlock
          code={`<Toast
  id="1"
  type="info"
  title="Message"
  message="New message received"
  action={{
    label: "View",
    onClick: () => console.log("View message")
  }}
  onClose={() => {}}
/>`}
          language="tsx"
        />
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Positions
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() =>
                  showToast("info", "Top Right", "Position", "top-right")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Top Right
              </button>
              <button
                onClick={() =>
                  showToast("info", "Top Left", "Position", "top-left")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Top Left
              </button>
              <button
                onClick={() =>
                  showToast("info", "Bottom Right", "Position", "bottom-right")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Bottom Right
              </button>
              <button
                onClick={() =>
                  showToast("info", "Bottom Left", "Position", "bottom-left")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Bottom Left
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Toast
  id="1"
  type="info"
  message="Message"
  position="top-right"
  onClose={() => {}}
/>

<Toast
  id="2"
  type="info"
  message="Message"
  position="bottom-left"
  onClose={() => {}}
/>`}
          language="tsx"
        />
      </section>

      {/* Animations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Animations
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  showToast("info", "Slide animation", "Animation", "top-right")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Slide
              </button>
              <button
                onClick={() =>
                  showToast("info", "Fade animation", "Animation", "top-right")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Fade
              </button>
              <button
                onClick={() =>
                  showToast("info", "Zoom animation", "Animation", "top-right")
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Zoom
              </button>
              <button
                onClick={() =>
                  showToast(
                    "info",
                    "Bounce animation",
                    "Animation",
                    "top-right"
                  )
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Bounce
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Toast
  id="1"
  type="info"
  message="Slide animation"
  animation="slide"
  onClose={() => {}}
/>

<Toast
  id="2"
  type="info"
  message="Fade animation"
  animation="fade"
  onClose={() => {}}
/>

<Toast
  id="3"
  type="info"
  message="Zoom animation"
  animation="zoom"
  onClose={() => {}}
/>

<Toast
  id="4"
  type="info"
  message="Bounce animation"
  animation="bounce"
  onClose={() => {}}
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
                id: "id",
                prop: "id",
                type: "string",
                default: "-",
                description: "Unique identifier for the toast",
              },
              {
                id: "type",
                prop: "type",
                type: "'success' | 'error' | 'warning' | 'info'",
                default: "-",
                description: "Type of toast notification",
              },
              {
                id: "message",
                prop: "message",
                type: "string",
                default: "-",
                description: "Main message content",
              },
              {
                id: "title",
                prop: "title",
                type: "string",
                default: "-",
                description: "Optional title for the toast",
              },
              {
                id: "duration",
                prop: "duration",
                type: "number",
                default: "5000",
                description: "Duration in milliseconds before auto-dismiss",
              },
              {
                id: "position",
                prop: "position",
                type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",
                default: "'top-right'",
                description: "Position of the toast on screen",
              },
              {
                id: "onClose",
                prop: "onClose",
                type: "(id: string) => void",
                default: "-",
                description: "Callback when toast is closed",
              },
              {
                id: "action",
                prop: "action",
                type: "{ label: string; onClick: () => void }",
                default: "-",
                description: "Optional action button configuration",
              },
              {
                id: "animation",
                prop: "animation",
                type: "'slide' | 'fade' | 'zoom' | 'bounce' | 'flip'",
                default: "'slide'",
                description: "Animation style for the toast",
              },
              {
                id: "animationDuration",
                prop: "animationDuration",
                type: "'fast' | 'normal' | 'slow'",
                default: "'normal'",
                description: "Duration of the animation",
              },
            ]}
            bordered
            size="small"
            showHeader
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
          title={toast.title}
          position={toast.position as any}
          action={toast.action}
          onClose={removeToast}
        />
      ))}
    </div>
  );
}
