"use client";
import React from "react";
import Badge from "@/components/Badge/Badge";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { BsBell, BsEnvelope, BsPerson } from "react-icons/bs";

export default function BadgeDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Badge
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile badge component for displaying status, notifications, and
          counts with various styles and positions.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Badge count={5}>
              <BsBell className="w-6 h-6" />
            </Badge>
            <Badge count={99} variant="primary">
              <BsEnvelope className="w-6 h-6" />
            </Badge>
            <Badge count={1000} maxCount={999}>
              <BsPerson className="w-6 h-6" />
            </Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge count={5}>
  <BsBell className="w-6 h-6" />
</Badge>
<Badge count={99} variant="primary">
  <BsEnvelope className="w-6 h-6" />
</Badge>
<Badge count={1000} maxCount={999}>
  <BsPerson className="w-6 h-6" />
</Badge>`}
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Variants
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
          language="tsx"
        />
      </section>

      {/* Status Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Status Badges
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Badge dot status="online">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </Badge>
            <Badge dot status="offline">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </Badge>
            <Badge dot status="away">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </Badge>
            <Badge dot status="busy">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge dot status="online">
  <div className="w-10 h-10 bg-gray-200 rounded-full" />
</Badge>
<Badge dot status="offline">
  <div className="w-10 h-10 bg-gray-200 rounded-full" />
</Badge>
<Badge dot status="away">
  <div className="w-10 h-10 bg-gray-200 rounded-full" />
</Badge>
<Badge dot status="busy">
  <div className="w-10 h-10 bg-gray-200 rounded-full" />
</Badge>`}
          language="tsx"
        />
      </section>

      {/* Positions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Positions
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-8">
            <Badge count={5} position="top-right">
              <div className="w-10 h-10 bg-gray-200 rounded" />
            </Badge>
            <Badge count={5} position="top-left">
              <div className="w-10 h-10 bg-gray-200 rounded" />
            </Badge>
            <Badge count={5} position="bottom-right">
              <div className="w-10 h-10 bg-gray-200 rounded" />
            </Badge>
            <Badge count={5} position="bottom-left">
              <div className="w-10 h-10 bg-gray-200 rounded" />
            </Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge count={5} position="top-right">
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>
<Badge count={5} position="top-left">
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>
<Badge count={5} position="bottom-right">
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>
<Badge count={5} position="bottom-left">
  <div className="w-10 h-10 bg-gray-200 rounded" />
</Badge>`}
          language="tsx"
        />
      </section>

      {/* Ribbon Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Ribbon Badges
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-8">
            <Badge ribbon ribbonText="New" ribbonColor="primary">
              <div className="w-32 h-32 bg-gray-200 rounded" />
            </Badge>
            <Badge ribbon ribbonText="Sale" ribbonColor="error">
              <div className="w-32 h-32 bg-gray-200 rounded" />
            </Badge>
            <Badge ribbon ribbonText="Hot" ribbonColor="warning">
              <div className="w-32 h-32 bg-gray-200 rounded" />
            </Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge ribbon ribbonText="New" ribbonColor="primary">
  <div className="w-32 h-32 bg-gray-200 rounded" />
</Badge>
<Badge ribbon ribbonText="Sale" ribbonColor="error">
  <div className="w-32 h-32 bg-gray-200 rounded" />
</Badge>
<Badge ribbon ribbonText="Hot" ribbonColor="warning">
  <div className="w-32 h-32 bg-gray-200 rounded" />
</Badge>`}
          language="tsx"
        />
      </section>

      {/* Standalone Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Standalone Badges
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Badge standalone>New</Badge>
            <Badge standalone variant="primary">
              Primary
            </Badge>
            <Badge standalone variant="success">
              Success
            </Badge>
            <Badge standalone variant="warning">
              Warning
            </Badge>
            <Badge standalone variant="error">
              Error
            </Badge>
            <Badge standalone variant="info">
              Info
            </Badge>
          </div>
        </Card>
        <CodeBlock
          code={`<Badge standalone>New</Badge>
<Badge standalone variant="primary">Primary</Badge>
<Badge standalone variant="success">Success</Badge>
<Badge standalone variant="warning">Warning</Badge>
<Badge standalone variant="error">Error</Badge>
<Badge standalone variant="info">Info</Badge>`}
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
                id: "children",
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Content to be wrapped by the badge",
              },
              {
                id: "variant",
                prop: "variant",
                type: '"default" | "primary" | "success" | "warning" | "error" | "info"',
                default: '"default"',
                description: "Visual style variant of the badge",
              },
              {
                id: "size",
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the badge",
              },
              {
                id: "rounded",
                prop: "rounded",
                type: '"none" | "sm" | "md" | "lg" | "full"',
                default: '"full"',
                description: "Border radius of the badge",
              },
              {
                id: "animation",
                prop: "animation",
                type: '"pulse" | "bounce" | "none"',
                default: '"none"',
                description: "Animation effect for the badge",
              },
              {
                id: "dot",
                prop: "dot",
                type: "boolean",
                default: "false",
                description: "Whether to show a dot instead of content",
              },
              {
                id: "count",
                prop: "count",
                type: "number",
                default: "-",
                description: "Number to display in the badge",
              },
              {
                id: "maxCount",
                prop: "maxCount",
                type: "number",
                default: "99",
                description: "Maximum number to display before showing +",
              },
              {
                id: "showZero",
                prop: "showZero",
                type: "boolean",
                default: "false",
                description: "Whether to show badge when count is zero",
              },
              {
                id: "offset",
                prop: "offset",
                type: "[number, number]",
                default: "[0, 0]",
                description: "Offset position of the badge [x, y]",
              },
              {
                id: "status",
                prop: "status",
                type: '"online" | "offline" | "away" | "busy"',
                default: "-",
                description: "Status indicator for dot badge",
              },
              {
                id: "position",
                prop: "position",
                type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
                default: '"top-right"',
                description: "Position of the badge relative to its children",
              },
              {
                id: "standalone",
                prop: "standalone",
                type: "boolean",
                default: "false",
                description: "Whether the badge is standalone (no children)",
              },
              {
                id: "processing",
                prop: "processing",
                type: "boolean",
                default: "false",
                description: "Whether to show a processing animation",
              },
              {
                id: "ribbon",
                prop: "ribbon",
                type: "boolean",
                default: "false",
                description: "Whether to show as a ribbon",
              },
              {
                id: "ribbonText",
                prop: "ribbonText",
                type: "string",
                default: "-",
                description: "Text to display in the ribbon",
              },
              {
                id: "ribbonColor",
                prop: "ribbonColor",
                type: '"primary" | "success" | "warning" | "error" | "info"',
                default: '"primary"',
                description: "Color variant of the ribbon",
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
