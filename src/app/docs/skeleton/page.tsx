"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function SkeletonDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Skeleton
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile component for displaying loading states with various
          types, animations, and styles.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Skeleton type="text" width={200} />
            <Skeleton type="circle" width={40} height={40} />
            <Skeleton type="rectangle" width={200} height={100} />
          </div>
        </Card>
        <CodeBlock
          code={`<Skeleton type="text" width={200} />
<Skeleton type="circle" width={40} height={40} />
<Skeleton type="rectangle" width={200} height={100} />`}
          language="tsx"
        />
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Text</h3>
              <Skeleton type="text" width={200} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Circle</h3>
              <Skeleton type="circle" width={40} height={40} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Rectangle</h3>
              <Skeleton type="rectangle" width={200} height={100} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Avatar</h3>
              <Skeleton type="avatar" width={50} height={50} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Card</h3>
              <Skeleton type="card" width={300} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">List</h3>
              <Skeleton type="list" width={300} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Table</h3>
              <Skeleton type="table" width={400} />
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Skeleton type="text" width={200} />
<Skeleton type="circle" width={40} height={40} />
<Skeleton type="rectangle" width={200} height={100} />
<Skeleton type="avatar" width={50} height={50} />
<Skeleton type="card" width={300} />
<Skeleton type="list" width={300} />
<Skeleton type="table" width={400} />`}
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
            <div>
              <h3 className="text-lg font-medium mb-2">Pulse</h3>
              <Skeleton type="text" width={200} animation="pulse" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Wave</h3>
              <Skeleton type="text" width={200} animation="wave" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Shimmer</h3>
              <Skeleton type="text" width={200} animation="shimmer" />
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Skeleton type="text" width={200} animation="pulse" />
<Skeleton type="text" width={200} animation="wave" />
<Skeleton type="text" width={200} animation="shimmer" />`}
          language="tsx"
        />
      </section>

      {/* Multiple Items */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Multiple Items
        </h2>
        <Card>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Row</h3>
              <Skeleton
                type="circle"
                width={40}
                height={40}
                count={3}
                direction="row"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Column</h3>
              <Skeleton type="text" width={200} count={3} direction="column" />
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Skeleton type="circle" width={40} height={40} count={3} direction="row" />
<Skeleton type="text" width={200} count={3} direction="column" />`}
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
                id: "type",
                prop: "type",
                type: '"text" | "circle" | "rectangle" | "avatar" | "card" | "list" | "table"',
                default: '"text"',
                description: "The type of skeleton to display",
              },
              {
                id: "width",
                prop: "width",
                type: "number | string",
                default: "-",
                description: "Width of the skeleton",
              },
              {
                id: "height",
                prop: "height",
                type: "number | string",
                default: "-",
                description: "Height of the skeleton",
              },
              {
                id: "className",
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes to apply",
              },
              {
                id: "animation",
                prop: "animation",
                type: '"pulse" | "wave" | "shimmer" | "none"',
                default: '"pulse"',
                description: "Animation style for the skeleton",
              },
              {
                id: "rounded",
                prop: "rounded",
                type: "boolean",
                default: "true",
                description: "Whether to apply rounded corners",
              },
              {
                id: "count",
                prop: "count",
                type: "number",
                default: "1",
                description: "Number of skeleton items to display",
              },
              {
                id: "gap",
                prop: "gap",
                type: "number",
                default: "8",
                description: "Gap between multiple skeleton items in pixels",
              },
              {
                id: "direction",
                prop: "direction",
                type: '"row" | "column"',
                default: '"column"',
                description: "Direction to display multiple skeleton items",
              },
              {
                id: "variant",
                prop: "variant",
                type: '"light" | "dark"',
                default: '"light"',
                description: "Color variant of the skeleton",
              },
              {
                id: "speed",
                prop: "speed",
                type: '"slow" | "normal" | "fast"',
                default: '"normal"',
                description: "Animation speed",
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
