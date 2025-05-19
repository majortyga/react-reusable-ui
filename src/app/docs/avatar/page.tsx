"use client";
import React from "react";
import Avatar from "@/components/Avatar/Avatar";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

type ApiRow = {
  id: number;
  prop: "src" | "alt" | "size" | "shape" | "className" | "initials" | "icon";
  type: string;
  default: string;
  description: string;
};

const apiColumns: import("@/components/Table/Table").Column<ApiRow>[] = [
  { key: "prop", title: "Prop", dataIndex: "prop" },
  { key: "type", title: "Type", dataIndex: "type" },
  { key: "default", title: "Default", dataIndex: "default" },
  { key: "description", title: "Description", dataIndex: "description" },
];

const apiData: ApiRow[] = [
  {
    id: 1,
    prop: "src",
    type: "string",
    default: "-",
    description: "URL of the avatar image",
  },
  {
    id: 2,
    prop: "alt",
    type: "string",
    default: "-",
    description: "Alternative text for the avatar image",
  },
  {
    id: 3,
    prop: "size",
    type: "sm | md | lg | xl",
    default: "md",
    description: "Size of the avatar",
  },
  {
    id: 4,
    prop: "shape",
    type: "circle | square",
    default: "circle",
    description: "Shape of the avatar",
  },
  {
    id: 5,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply",
  },
  {
    id: 6,
    prop: "initials",
    type: "string",
    default: "-",
    description: "Text to display when no image is provided",
  },
  {
    id: 7,
    prop: "icon",
    type: "React.ReactNode",
    default: "-",
    description: "Custom icon to display when no image is provided",
  },
];

export default function AvatarDocs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Avatar
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for displaying user avatars with various sizes and shapes.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
          </div>
        </Card>
        <CodeBlock
          code={`<Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
<Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
<Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />`}
          language="tsx"
        />
      </section>

      {/* Text Avatars */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Text Avatars
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar initials="JD" alt="John Doe" />
            <Avatar initials="AS" alt="Alice Smith" size="lg" />
            <Avatar initials="RJ" alt="Robert Johnson" size="xl" />
            <Avatar initials="?" alt="Unknown User" />
          </div>
        </Card>
        <CodeBlock
          code={`<Avatar initials="JD" alt="John Doe" />
<Avatar initials="AS" alt="Alice Smith" size="lg" />
<Avatar initials="RJ" alt="Robert Johnson" size="xl" />
<Avatar initials="?" alt="Unknown User" />`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Sizes
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=4"
              alt="Small Avatar"
              size="sm"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=5"
              alt="Medium Avatar"
              size="md"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=6"
              alt="Large Avatar"
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=7"
              alt="Extra Large Avatar"
              size="xl"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Avatar src="https://i.pravatar.cc/150?img=4" alt="Small Avatar" size="sm" />
<Avatar src="https://i.pravatar.cc/150?img=5" alt="Medium Avatar" size="md" />
<Avatar src="https://i.pravatar.cc/150?img=6" alt="Large Avatar" size="lg" />
<Avatar src="https://i.pravatar.cc/150?img=7" alt="Extra Large Avatar" size="xl" />`}
          language="tsx"
        />
      </section>

      {/* Shapes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Shapes
        </h2>
        <Card>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=8"
              alt="Circle Avatar"
              shape="circle"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=9"
              alt="Rounded Avatar"
              shape="rounded"
            />
          </div>
        </Card>
        <CodeBlock
          code={`<Avatar src="https://i.pravatar.cc/150?img=8" alt="Circle Avatar" shape="circle" />
<Avatar src="https://i.pravatar.cc/150?img=9" alt="Rounded Avatar" shape="rounded" />`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-auto max-w-[90vw]">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Props
            </h3>
            <Table
              columns={apiColumns}
              data={apiData}
              bordered
              size="small"
              showHeader
            />
          </div>
        </Card>
      </section>
    </div>
  );
}
