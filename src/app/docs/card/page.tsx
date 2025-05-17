"use client";
import React from "react";
import Card from "@/components/Card/Card";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { HiUser, HiCalendar, HiTag } from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function CardPage() {
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
      prop: "title",
      type: "React.ReactNode",
      default: "-",
      description: "The card title",
    },
    {
      id: 2,
      prop: "subtitle",
      type: "React.ReactNode",
      default: "-",
      description: "The card subtitle",
    },
    {
      id: 3,
      prop: "icon",
      type: "IconType",
      default: "-",
      description: "Optional icon component",
    },
    {
      id: 4,
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "Card content",
    },
    {
      id: 5,
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description: "Card footer content",
    },
    {
      id: 6,
      prop: "variant",
      type: '"default" | "bordered" | "elevated" | "news"',
      default: '"default"',
      description: "Card style variant",
    },
    {
      id: 7,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class for the card container",
    },
    {
      id: 8,
      prop: "headerClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card header",
    },
    {
      id: 9,
      prop: "bodyClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card body",
    },
    {
      id: 10,
      prop: "footerClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card footer",
    },
    {
      id: 11,
      prop: "onClick",
      type: "() => void",
      default: "-",
      description: "Click handler for the card",
    },
    {
      id: 12,
      prop: "image",
      type: "object",
      default: "-",
      description: "Image settings for the card",
    },
    {
      id: 13,
      prop: "hoverEffect",
      type: '"scale" | "lift" | "glow" | "none"',
      default: '"none"',
      description: "Hover effect style",
    },
    {
      id: 14,
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Show loading state",
    },
    {
      id: 15,
      prop: "skeleton",
      type: "boolean",
      default: "false",
      description: "Show skeleton placeholder",
    },
    {
      id: 16,
      prop: "metadata",
      type: "object",
      default: "-",
      description:
        "News card metadata (time, category, author, comments, views)",
    },
    {
      id: 17,
      prop: "link",
      type: "string",
      default: "-",
      description: "Optional link for the card (news variant)",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Card</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A versatile card component that supports various styles, layouts, and
          interactive features.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple variants (default, bordered, elevated, news)</li>
          <li>Image support with different positions and aspect ratios</li>
          <li>Custom hover effects</li>
          <li>Loading and skeleton states</li>
          <li>News card variant with metadata</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Card</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Card Title"
              subtitle="Card Subtitle"
              icon={HiUser}
              className="max-w-sm"
            >
              <p className="text-gray-600 dark:text-gray-400">
                This is a basic card with a title, subtitle, and icon.
              </p>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Card Title"
  subtitle="Card Subtitle"
  icon={HiUser}
  className="max-w-sm"
>
  <p className="text-gray-600 dark:text-gray-400">
    This is a basic card with a title, subtitle, and icon.
  </p>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Card with Image</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Image Card"
              subtitle="With overlay effect"
              image={{
                src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
                alt: "Mountain landscape",
                position: "top",
                aspectRatio: "video",
                overlay: true,
              }}
              className="max-w-sm"
            >
              <p className="text-gray-600 dark:text-gray-400">
                This card has an image with an overlay effect.
              </p>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Image Card"
  subtitle="With overlay effect"
  image={{
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Mountain landscape",
    position: "top",
    aspectRatio: "video",
    overlay: true,
  }}
  className="max-w-sm"
>
  <p className="text-gray-600 dark:text-gray-400">
    This card has an image with an overlay effect.
  </p>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">News Card</h3>
          <div className="border rounded-lg p-4">
            <Card
              variant="news"
              title="Breaking News"
              subtitle="Important announcement"
              image={{
                src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
                alt: "News image",
                position: "top",
                aspectRatio: "video",
                overlay: true,
              }}
              metadata={{
                time: "2 hours ago",
                category: "Technology",
                author: "John Doe",
                comments: 42,
                views: 1234,
              }}
              className="max-w-sm"
            >
              <p className="text-gray-600 dark:text-gray-400">
                This is a news-style card with metadata and image.
              </p>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  variant="news"
  title="Breaking News"
  subtitle="Important announcement"
  image={{
    src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    alt: "News image",
    position: "top",
    aspectRatio: "video",
    overlay: true,
  }}
  metadata={{
    time: "2 hours ago",
    category: "Technology",
    author: "John Doe",
    comments: 42,
    views: 1234,
  }}
  className="max-w-sm"
>
  <p className="text-gray-600 dark:text-gray-400">
    This is a news-style card with metadata and image.
  </p>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Interactive Card</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Interactive Card"
              subtitle="Click me!"
              icon={HiCalendar}
              hoverEffect="lift"
              onClick={() => alert("Card clicked!")}
              className="max-w-sm cursor-pointer"
            >
              <p className="text-gray-600 dark:text-gray-400">
                This card has a hover effect and is clickable.
              </p>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Interactive Card"
  subtitle="Click me!"
  icon={HiCalendar}
  hoverEffect="lift"
  onClick={() => alert("Card clicked!")}
  className="max-w-sm cursor-pointer"
>
  <p className="text-gray-600 dark:text-gray-400">
    This card has a hover effect and is clickable.
  </p>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Loading State</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Loading Card"
              subtitle="Please wait..."
              icon={HiTag}
              loading
              className="max-w-sm"
            >
              <p className="text-gray-600 dark:text-gray-400">
                This card is in a loading state.
              </p>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Loading Card"
  subtitle="Please wait..."
  icon={HiTag}
  loading
  className="max-w-sm"
>
  <p className="text-gray-600 dark:text-gray-400">
    This card is in a loading state.
  </p>
</Card>`}
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
