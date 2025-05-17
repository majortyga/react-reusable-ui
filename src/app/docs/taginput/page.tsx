"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import TagInput from "@/components/TagInput/TagInput";
import { HiTag } from "react-icons/hi";

export default function TagInputDocs() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tag Input
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for managing a list of tags with keyboard input support.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <TagInput
            tags={tags}
            onChange={setTags}
            placeholder="Type and press comma to add tags"
          />
        </Card>
        <CodeBlock
          code={`const [tags, setTags] = useState<string[]>([]);

<TagInput
  tags={tags}
  onChange={setTags}
  placeholder="Type and press comma to add tags"
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Label
        </h2>
        <Card>
          <TagInput
            label="Tags"
            tags={tags}
            onChange={setTags}
            placeholder="Add tags..."
          />
        </Card>
        <CodeBlock
          code={`<TagInput
  label="Tags"
  tags={tags}
  onChange={setTags}
  placeholder="Add tags..."
/>`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Icon
        </h2>
        <Card>
          <TagInput
            label="Tags"
            leftIcon={HiTag}
            tags={tags}
            onChange={setTags}
            placeholder="Add tags..."
          />
        </Card>
        <CodeBlock
          code={`import { HiTag } from "react-icons/hi";

<TagInput
  label="Tags"
  leftIcon={HiTag}
  tags={tags}
  onChange={setTags}
  placeholder="Add tags..."
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
                id: "label",
                prop: "label",
                type: "string",
                default: "undefined",
                description: "Label text for the input",
              },
              {
                id: "placeholder",
                prop: "placeholder",
                type: "string",
                default: '"Type and press comma to add tags"',
                description: "Placeholder text for the input",
              },
              {
                id: "leftIcon",
                prop: "leftIcon",
                type: "IconType",
                default: "undefined",
                description:
                  "Icon component to display on the left side of the input",
              },
              {
                id: "tags",
                prop: "tags",
                type: "string[]",
                default: "[]",
                description: "Array of current tags",
              },
              {
                id: "onChange",
                prop: "onChange",
                type: "(tags: string[]) => void",
                default: "undefined",
                description: "Callback function when tags are added or removed",
              },
              {
                id: "className",
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes for the container",
              },
              {
                id: "inputClassName",
                prop: "inputClassName",
                type: "string",
                default: '""',
                description: "Additional CSS classes for the input element",
              },
              {
                id: "tagClassName",
                prop: "tagClassName",
                type: "string",
                default: '""',
                description: "Additional CSS classes for each tag",
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
