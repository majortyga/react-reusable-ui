import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Card from "@/components/Card/Card";

const componentCategories = [
  {
    title: "Form Elements",
    description: "Input fields, selectors, and other form controls",
    items: [
      {
        name: "Input",
        path: "/docs/input",
        description: "Text input with various styles and features",
      },
      {
        name: "Select",
        path: "/docs/select",
        description: "Dropdown select with search and multi-select support",
      },
      {
        name: "TagInput",
        path: "/docs/tag-input",
        description: "Input for managing tags and labels",
      },
      {
        name: "Upload",
        path: "/docs/upload",
        description: "File upload with drag and drop support",
      },
      {
        name: "Calendar",
        path: "/docs/calendar",
        description: "Date picker with range selection",
      },
      {
        name: "Slider",
        path: "/docs/slider",
        description: "Range slider for numeric values",
      },
    ],
  },
  {
    title: "Feedback",
    description: "Components for displaying status and feedback",
    items: [
      {
        name: "Alert",
        path: "/docs/alert",
        description: "Alert messages for important information",
      },
      {
        name: "Toast",
        path: "/docs/toast",
        description: "Temporary notifications",
      },
      {
        name: "Progress",
        path: "/docs/progress",
        description: "Progress indicators",
      },
      {
        name: "Spinner",
        path: "/docs/spinner",
        description: "Loading spinners",
      },
      {
        name: "Skeleton",
        path: "/docs/skeleton",
        description: "Loading placeholders",
      },
    ],
  },
  {
    title: "Navigation",
    description: "Components for navigating through content",
    items: [
      {
        name: "Tabs",
        path: "/docs/tabs",
        description: "Tabbed content navigation",
      },
      {
        name: "Breadcrumbs",
        path: "/docs/breadcrumbs",
        description: "Navigation hierarchy",
      },
      {
        name: "Pagination",
        path: "/docs/pagination",
        description: "Page navigation",
      },
      {
        name: "Stepper",
        path: "/docs/stepper",
        description: "Step-by-step navigation",
      },
    ],
  },
  {
    title: "Data Display",
    description: "Components for displaying data and content",
    items: [
      {
        name: "Table",
        path: "/docs/table",
        description: "Data tables with sorting and filtering",
      },
      {
        name: "List",
        path: "/docs/list",
        description: "List views with various layouts",
      },
      { name: "Card", path: "/docs/card", description: "Content containers" },
      {
        name: "Timeline",
        path: "/docs/timeline",
        description: "Chronological event display",
      },
      {
        name: "StatCard",
        path: "/docs/stat-card",
        description: "Statistics display",
      },
    ],
  },
  {
    title: "Overlay",
    description: "Components that overlay content",
    items: [
      {
        name: "Modal",
        path: "/docs/modal",
        description: "Dialog boxes and modals",
      },
      {
        name: "Popover",
        path: "/docs/popover",
        description: "Contextual information",
      },
      {
        name: "Tooltip",
        path: "/docs/tooltip",
        description: "Hover information",
      },
    ],
  },
  {
    title: "Other",
    description: "Additional utility components",
    items: [
      { name: "Button", path: "/docs/button", description: "Action triggers" },
      { name: "Badge", path: "/docs/badge", description: "Status indicators" },
      {
        name: "Avatar",
        path: "/docs/avatar",
        description: "User profile images",
      },
      {
        name: "Rating",
        path: "/docs/rating",
        description: "Star rating component",
      },
      {
        name: "Collapse",
        path: "/docs/collapse",
        description: "Expandable content",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Components
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of reusable React components built with Tailwind CSS.
          Each component is fully customizable, accessible, and follows modern
          design practices.
        </p>
      </div>

      {/* Component Categories */}
      <div className="space-y-8">
        {componentCategories.map((category) => (
          <section key={category.title} className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <Link key={item.path} href={item.path} className="block">
                  <Card
                    className="h-full hover:shadow-lg transition-shadow"
                    bodyClassName="flex items-start justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-gray-400" />
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
