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
                Run one of the following commands in your terminal:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                    npm
                  </div>
                  <CodeBlock
                    code="npm install @majordev/react-reusable-ui"
                    language="bash"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                    yarn
                  </div>
                  <CodeBlock
                    code="yarn add @majordev/react-reusable-ui"
                    language="bash"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
                    pnpm
                  </div>
                  <CodeBlock
                    code="pnpm add @majordev/react-reusable-ui"
                    language="bash"
                  />
                </div>
              </div>
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
                href="/docs/alert"
                className="text-blue-500 hover:underline"
              >
                Alert
              </Link>
            </li>
            <li>
              <Link
                href="/docs/avatar"
                className="text-blue-500 hover:underline"
              >
                Avatar
              </Link>
            </li>
            <li>
              <Link
                href="/docs/badge"
                className="text-blue-500 hover:underline"
              >
                Badge
              </Link>
            </li>
            <li>
              <Link
                href="/docs/breadcrumbs"
                className="text-blue-500 hover:underline"
              >
                Breadcrumbs
              </Link>
            </li>
            <li>
              <Link
                href="/docs/button"
                className="text-blue-500 hover:underline"
              >
                Button
              </Link>
            </li>
            <li>
              <Link
                href="/docs/calendar"
                className="text-blue-500 hover:underline"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link href="/docs/card" className="text-blue-500 hover:underline">
                Card
              </Link>
            </li>
            <li>
              <Link
                href="/docs/carousel"
                className="text-blue-500 hover:underline"
              >
                Carousel
              </Link>
            </li>
            <li>
              <Link
                href="/docs/collapse"
                className="text-blue-500 hover:underline"
              >
                Collapse
              </Link>
            </li>
            <li>
              <Link
                href="/docs/container"
                className="text-blue-500 hover:underline"
              >
                Container
              </Link>
            </li>
            <li>
              <Link
                href="/docs/dropdown"
                className="text-blue-500 hover:underline"
              >
                Dropdown
              </Link>
            </li>
            <li>
              <Link href="/docs/grid" className="text-blue-500 hover:underline">
                Grid
              </Link>
            </li>
            <li>
              <Link
                href="/docs/input"
                className="text-blue-500 hover:underline"
              >
                Input
              </Link>
            </li>
            <li>
              <Link href="/docs/list" className="text-blue-500 hover:underline">
                List
              </Link>
            </li>
            <li>
              <Link
                href="/docs/modal"
                className="text-blue-500 hover:underline"
              >
                Modal
              </Link>
            </li>
            <li>
              <Link
                href="/docs/pagination"
                className="text-blue-500 hover:underline"
              >
                Pagination
              </Link>
            </li>
            <li>
              <Link
                href="/docs/pininput"
                className="text-blue-500 hover:underline"
              >
                Pin Input
              </Link>
            </li>
            <li>
              <Link
                href="/docs/popover"
                className="text-blue-500 hover:underline"
              >
                Popover
              </Link>
            </li>
            <li>
              <Link
                href="/docs/progress"
                className="text-blue-500 hover:underline"
              >
                Progress
              </Link>
            </li>
            <li>
              <Link
                href="/docs/rating"
                className="text-blue-500 hover:underline"
              >
                Rating
              </Link>
            </li>
            <li>
              <Link
                href="/docs/select"
                className="text-blue-500 hover:underline"
              >
                Select
              </Link>
            </li>
            <li>
              <Link
                href="/docs/skeleton"
                className="text-blue-500 hover:underline"
              >
                Skeleton
              </Link>
            </li>
            <li>
              <Link
                href="/docs/slider"
                className="text-blue-500 hover:underline"
              >
                Slider
              </Link>
            </li>
            <li>
              <Link
                href="/docs/spinner"
                className="text-blue-500 hover:underline"
              >
                Spinner
              </Link>
            </li>
            <li>
              <Link
                href="/docs/statcard"
                className="text-blue-500 hover:underline"
              >
                StatCard
              </Link>
            </li>
            <li>
              <Link
                href="/docs/stepper"
                className="text-blue-500 hover:underline"
              >
                Stepper
              </Link>
            </li>
            <li>
              <Link
                href="/docs/table"
                className="text-blue-500 hover:underline"
              >
                Table
              </Link>
            </li>
            <li>
              <Link href="/docs/tabs" className="text-blue-500 hover:underline">
                Tabs
              </Link>
            </li>
            <li>
              <Link
                href="/docs/taginput"
                className="text-blue-500 hover:underline"
              >
                TagInput
              </Link>
            </li>
            <li>
              <Link
                href="/docs/timeline"
                className="text-blue-500 hover:underline"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/docs/toast"
                className="text-blue-500 hover:underline"
              >
                Toast
              </Link>
            </li>
            <li>
              <Link
                href="/docs/tooltip"
                className="text-blue-500 hover:underline"
              >
                Tooltip
              </Link>
            </li>
            <li>
              <Link
                href="/docs/upload"
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
