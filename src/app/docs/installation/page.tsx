"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Link from "next/link";
import Typography from "@/components/Typography";

export default function InstallationDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Installation
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Get started with React Reusable UI by following these installation
          steps.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Prerequisites
        </h2>
        <Card>
          <p className="text-gray-600 dark:text-gray-400">
            Before installing React Reusable UI, make sure you have TailwindCSS
            installed on your computer. You can check the{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Tailwind Website
            </a>{" "}
            for the latest installation guide.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            If you&apos;re using Next.js, Tailwind CSS is pre-installed with it.
          </p>

          <Typography variant="h4" className="mt-5">
            Requirements
          </Typography>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>React 19 or higher</li>
            <li>TailwindCSS 3 or higher</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Installation Steps
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                1. Install the package
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Run the following command in your terminal:
              </p>
              <CodeBlock
                code="npm install @majordev/react-reusable-ui"
                language="bash"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                2. Configure Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Edit or create your tailwind.config.js file and add the
                following configuration:
              </p>
              <CodeBlock
                code={`module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@majordev/react-reusable-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                3. Start using components
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Import and use the components in your React application:
              </p>
              <CodeBlock
                code={`import { Button, Input, Toast } from "@majordev/react-reusable-ui";

function App() {
  return (
    <div>
      <Input placeholder="Enter your name" />
      <Button>Click me</Button>
    </div>
  );
}`}
                language="tsx"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Available Components
        </h2>
        <Card>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            React Reusable UI comes with a wide range of components:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="/docs/components/alert"
                className="text-blue-500 hover:underline"
              >
                Alert
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/avatar"
                className="text-blue-500 hover:underline"
              >
                Avatar
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/badge"
                className="text-blue-500 hover:underline"
              >
                Badge
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/breadcrumbs"
                className="text-blue-500 hover:underline"
              >
                Breadcrumbs
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/button"
                className="text-blue-500 hover:underline"
              >
                Button
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/calendar"
                className="text-blue-500 hover:underline"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/card"
                className="text-blue-500 hover:underline"
              >
                Card
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/carousel"
                className="text-blue-500 hover:underline"
              >
                Carousel
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/collapse"
                className="text-blue-500 hover:underline"
              >
                Collapse
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/codeblock"
                className="text-blue-500 hover:underline"
              >
                CodeBlock
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/codeeditor"
                className="text-blue-500 hover:underline"
              >
                CodeEditor
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/input"
                className="text-blue-500 hover:underline"
              >
                Input
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/list"
                className="text-blue-500 hover:underline"
              >
                List
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/modal"
                className="text-blue-500 hover:underline"
              >
                Modal
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/pagination"
                className="text-blue-500 hover:underline"
              >
                Pagination
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/popover"
                className="text-blue-500 hover:underline"
              >
                Popover
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/progress"
                className="text-blue-500 hover:underline"
              >
                Progress
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/rating"
                className="text-blue-500 hover:underline"
              >
                Rating
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/select"
                className="text-blue-500 hover:underline"
              >
                Select
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/skeleton"
                className="text-blue-500 hover:underline"
              >
                Skeleton
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/slider"
                className="text-blue-500 hover:underline"
              >
                Slider
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/spinner"
                className="text-blue-500 hover:underline"
              >
                Spinner
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/statcard"
                className="text-blue-500 hover:underline"
              >
                StatCard
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/stepper"
                className="text-blue-500 hover:underline"
              >
                Stepper
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/table"
                className="text-blue-500 hover:underline"
              >
                Table
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/tabs"
                className="text-blue-500 hover:underline"
              >
                Tabs
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/taginput"
                className="text-blue-500 hover:underline"
              >
                TagInput
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/timeline"
                className="text-blue-500 hover:underline"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/toast"
                className="text-blue-500 hover:underline"
              >
                Toast
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/tooltip"
                className="text-blue-500 hover:underline"
              >
                Tooltip
              </Link>
            </li>
            <li>
              <Link
                href="/docs/components/upload"
                className="text-blue-500 hover:underline"
              >
                Upload
              </Link>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
