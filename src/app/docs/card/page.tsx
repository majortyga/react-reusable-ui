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
      description: "The card title. Can be any valid React node.",
    },
    {
      id: 2,
      prop: "subtitle",
      type: "React.ReactNode",
      default: "-",
      description: "The card subtitle. Can be any valid React node.",
    },
    {
      id: 3,
      prop: "icon",
      type: "IconType",
      default: "-",
      description: "Optional icon component from react-icons.",
    },
    {
      id: 4,
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "Card content. Can be any valid React node.",
    },
    {
      id: 5,
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description: "Card footer content. Can be any valid React node.",
    },
    {
      id: 6,
      prop: "variant",
      type: '"default" | "bordered" | "elevated" | "news"',
      default: '"default"',
      description:
        "Card style variant. Options: default (basic), bordered (with border), elevated (with shadow), news (special layout for articles).",
    },
    {
      id: 7,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional class for the card container.",
    },
    {
      id: 8,
      prop: "headerClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card header.",
    },
    {
      id: 9,
      prop: "bodyClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card body.",
    },
    {
      id: 10,
      prop: "footerClassName",
      type: "string",
      default: '""',
      description: "Additional class for the card footer.",
    },
    {
      id: 11,
      prop: "onClick",
      type: "() => void",
      default: "-",
      description: "Click handler for the card.",
    },
    {
      id: 12,
      prop: "image",
      type: "object",
      default: "-",
      description:
        "Image settings for the card. Includes src, alt, position, aspectRatio, overlay, and overlayColor properties.",
    },
    {
      id: 13,
      prop: "hoverEffect",
      type: '"scale" | "lift" | "glow" | "none"',
      default: '"none"',
      description:
        "Hover effect style. Options: scale (grows), lift (elevates), glow (adds glow), none (no effect).",
    },
    {
      id: 14,
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Show loading state with skeleton animation.",
    },
    {
      id: 15,
      prop: "skeleton",
      type: "boolean",
      default: "false",
      description: "Show skeleton placeholder instead of content.",
    },
    {
      id: 16,
      prop: "metadata",
      type: "object",
      default: "-",
      description:
        "News card metadata. Includes time, category, author, comments, and views properties.",
    },
    {
      id: 17,
      prop: "link",
      type: "string",
      default: "-",
      description:
        "Optional link for the card (news variant). Makes the entire card clickable.",
    },
    {
      id: 18,
      prop: "colors",
      type: "object",
      default: "-",
      description:
        "Custom colors for the card. Includes bg, text, border, headerBg, headerText, headerBorder, footerBg, footerText, footerBorder, overlay, hover, and skeleton properties.",
    },
    {
      id: 19,
      prop: "image.src",
      type: "string",
      default: "-",
      description: "Image source URL.",
    },
    {
      id: 20,
      prop: "image.alt",
      type: "string",
      default: "-",
      description: "Image alt text for accessibility.",
    },
    {
      id: 21,
      prop: "image.position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Image position relative to the card content.",
    },
    {
      id: 22,
      prop: "image.aspectRatio",
      type: '"square" | "video" | "auto"',
      default: '"auto"',
      description:
        "Image aspect ratio. Options: square (1:1), video (16:9), auto (original).",
    },
    {
      id: 23,
      prop: "image.overlay",
      type: "boolean",
      default: "false",
      description: "Show overlay on image.",
    },
    {
      id: 24,
      prop: "image.overlayColor",
      type: "string",
      default: "rgba(0,0,0,0.4)",
      description: "Color of the image overlay (rgba format).",
    },
    {
      id: 25,
      prop: "metadata.time",
      type: "string",
      default: "-",
      description: "Time or date string for news card.",
    },
    {
      id: 26,
      prop: "metadata.category",
      type: "string",
      default: "-",
      description: "News category for news card.",
    },
    {
      id: 27,
      prop: "metadata.author",
      type: "string",
      default: "-",
      description: "Author name for news card.",
    },
    {
      id: 28,
      prop: "metadata.comments",
      type: "number",
      default: "-",
      description: "Number of comments for news card.",
    },
    {
      id: 29,
      prop: "metadata.views",
      type: "number",
      default: "-",
      description: "Number of views for news card.",
    },
    {
      id: 30,
      prop: "colors.bg",
      type: "string",
      default: "bg-white dark:bg-gray-800",
      description: "Background color class for the card.",
    },
    {
      id: 31,
      prop: "colors.text",
      type: "string",
      default: "text-gray-900 dark:text-white",
      description: "Text color class for the card.",
    },
    {
      id: 32,
      prop: "colors.border",
      type: "string",
      default: "border-gray-200 dark:border-gray-700",
      description: "Border color class for the card.",
    },
    {
      id: 33,
      prop: "colors.headerBg",
      type: "string",
      default: "bg-white dark:bg-gray-800",
      description: "Header background color class.",
    },
    {
      id: 34,
      prop: "colors.headerText",
      type: "string",
      default: "text-gray-900 dark:text-white",
      description: "Header text color class.",
    },
    {
      id: 35,
      prop: "colors.headerBorder",
      type: "string",
      default: "border-gray-200 dark:border-gray-700",
      description: "Header border color class.",
    },
    {
      id: 36,
      prop: "colors.footerBg",
      type: "string",
      default: "bg-white dark:bg-gray-800",
      description: "Footer background color class.",
    },
    {
      id: 37,
      prop: "colors.footerText",
      type: "string",
      default: "text-gray-900 dark:text-white",
      description: "Footer text color class.",
    },
    {
      id: 38,
      prop: "colors.footerBorder",
      type: "string",
      default: "border-gray-200 dark:border-gray-700",
      description: "Footer border color class.",
    },
    {
      id: 39,
      prop: "colors.overlay",
      type: "string",
      default: "rgba(0,0,0,0.4)",
      description: "Image overlay color (rgba format).",
    },
    {
      id: 40,
      prop: "colors.hover",
      type: "string",
      default: "rgba(0,0,0,0.1)",
      description: "Hover effect color (rgba format).",
    },
    {
      id: 41,
      prop: "colors.skeleton",
      type: "string",
      default: "bg-gray-200 dark:bg-gray-700",
      description: "Skeleton loading color class.",
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
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage Placeholder%3C/text%3E%3C/svg%3E",
                alt: "Card image placeholder",
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
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage Placeholder%3C/text%3E%3C/svg%3E",
    alt: "Card image placeholder",
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
                src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
                alt: "News image placeholder",
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
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3ENews Image Placeholder%3C/text%3E%3C/svg%3E",
    alt: "News image placeholder",
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
              className="cursor-pointer"
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
  className="cursor-pointer"
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
              className=""
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

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Colors</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Custom Colored Card"
              subtitle="With personalized color scheme"
              icon={HiUser}
              colors={{
                bg: "bg-blue-50",
                text: "text-blue-900",
                border: "border-blue-200",
                headerBg: "bg-blue-100",
                headerText: "text-blue-800",
                headerBorder: "border-blue-300",
                footerBg: "bg-blue-100",
                footerText: "text-blue-800",
                footerBorder: "border-blue-300",
                overlay: "rgba(59, 130, 246, 0.5)",
                hover: "rgba(59, 130, 246, 0.1)",
                skeleton: "bg-blue-200",
              }}
              image={{
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage Placeholder%3C/text%3E%3C/svg%3E",
                alt: "Card image placeholder",
                position: "top",
                aspectRatio: "video",
                overlay: true,
                overlayColor: "rgba(59, 130, 246, 0.5)",
              }}
              hoverEffect="lift"
              className="max-w-sm"
            >
              <p className="text-blue-700">
                This card uses a custom blue color scheme with matching overlay
                and hover effects.
              </p>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-blue-800 text-sm">
                  Custom colors can be applied to all card elements including
                  background, text, borders, and overlays.
                </p>
              </div>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Custom Colored Card"
  subtitle="With personalized color scheme"
  icon={HiUser}
  colors={{
    bg: "bg-blue-50",
    text: "text-blue-900",
    border: "border-blue-200",
    headerBg: "bg-blue-100",
    headerText: "text-blue-800",
    headerBorder: "border-blue-300",
    footerBg: "bg-blue-100",
    footerText: "text-blue-800",
    footerBorder: "border-blue-300",
    overlay: "rgba(59, 130, 246, 0.5)",
    hover: "rgba(59, 130, 246, 0.1)",
    skeleton: "bg-blue-200"
  }}
  image={{
    src: "image.jpg",
    alt: "Card image placeholder",
    position: "top",
    aspectRatio: "video",
    overlay: true,
    overlayColor: "rgba(59, 130, 246, 0.5)"
  }}
  hoverEffect="lift"
  className="max-w-sm"
>
  <p className="text-blue-700">
    This card uses a custom blue color scheme with matching overlay and hover effects.
  </p>
  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
    <p className="text-blue-800 text-sm">
      Custom colors can be applied to all card elements including background, text, borders, and overlays.
    </p>
  </div>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">All Color Options</h3>
          <div className="border rounded-lg p-4">
            <Card
              title="Complete Color Customization"
              subtitle="Demonstrating all available color options"
              icon={HiUser}
              colors={{
                bg: "bg-purple-50",
                text: "text-purple-900",
                border: "border-purple-200",
                headerBg: "bg-purple-100",
                headerText: "text-purple-800",
                headerBorder: "border-purple-300",
                footerBg: "bg-purple-100",
                footerText: "text-purple-800",
                footerBorder: "border-purple-300",
                overlay: "rgba(147, 51, 234, 0.5)",
                hover: "rgba(147, 51, 234, 0.1)",
                skeleton: "bg-purple-200",
              }}
              image={{
                src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage Placeholder%3C/text%3E%3C/svg%3E",
                alt: "Card image placeholder",
                position: "top",
                aspectRatio: "video",
                overlay: true,
                overlayColor: "rgba(147, 51, 234, 0.5)",
              }}
              hoverEffect="glow"
              className="max-w-sm"
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-purple-700">Footer Text</span>
                  <button className="px-3 py-1 bg-purple-200 text-purple-800 rounded hover:bg-purple-300">
                    Action
                  </button>
                </div>
              }
            >
              <div className="space-y-4">
                <p className="text-purple-700">
                  This example demonstrates all available color customization
                  options:
                </p>
                <ul className="list-disc list-inside text-purple-700 space-y-1">
                  <li>Background colors (bg, headerBg, footerBg)</li>
                  <li>Text colors (text, headerText, footerText)</li>
                  <li>Border colors (border, headerBorder, footerBorder)</li>
                  <li>Image overlay color</li>
                  <li>Hover effect color</li>
                  <li>Skeleton loading color</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                  <p className="text-purple-800 text-sm">
                    Each color option can be customized independently to create
                    unique card designs.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <CodeBlock
            code={`<Card
  title="Complete Color Customization"
  subtitle="Demonstrating all available color options"
  icon={HiUser}
  colors={{
    bg: "bg-purple-50",
    text: "text-purple-900",
    border: "border-purple-200",
    headerBg: "bg-purple-100",
    headerText: "text-purple-800",
    headerBorder: "border-purple-300",
    footerBg: "bg-purple-100",
    footerText: "text-purple-800",
    footerBorder: "border-purple-300",
    overlay: "rgba(147, 51, 234, 0.5)",
    hover: "rgba(147, 51, 234, 0.1)",
    skeleton: "bg-purple-200"
  }}
  image={{
    src: "image.jpg",
    alt: "Card image placeholder",
    position: "top",
    aspectRatio: "video",
    overlay: true,
    overlayColor: "rgba(147, 51, 234, 0.5)"
  }}
  hoverEffect="glow"
  className="max-w-sm"
  footer={
    <div className="flex justify-between items-center">
      <span className="text-purple-700">Footer Text</span>
      <button className="px-3 py-1 bg-purple-200 text-purple-800 rounded hover:bg-purple-300">
        Action
      </button>
    </div>
  }
>
  <div className="space-y-4">
    <p className="text-purple-700">
      This example demonstrates all available color customization options:
    </p>
    <ul className="list-disc list-inside text-purple-700 space-y-1">
      <li>Background colors (bg, headerBg, footerBg)</li>
      <li>Text colors (text, headerText, footerText)</li>
      <li>Border colors (border, headerBorder, footerBorder)</li>
      <li>Image overlay color</li>
      <li>Hover effect color</li>
      <li>Skeleton loading color</li>
    </ul>
    <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
      <p className="text-purple-800 text-sm">
        Each color option can be customized independently to create unique card designs.
      </p>
    </div>
  </div>
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
