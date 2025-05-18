"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Link from "next/link";

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
          Requirements
        </h2>
        <Card>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>React 16.8 or higher</li>
            <li>Node.js 14.0 or higher</li>
            <li>npm, yarn, or pnpm package manager</li>
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
                Using npm:
              </p>
              <CodeBlock
                code="npm install @majordev/react-reusable-ui"
                language="bash"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4 mb-2">
                Using yarn:
              </p>
              <CodeBlock
                code="yarn add @majordev/react-reusable-ui"
                language="bash"
              />
              <p className="text-gray-600 dark:text-gray-400 mt-4 mb-2">
                Using pnpm:
              </p>
              <CodeBlock
                code="pnpm add @majordev/react-reusable-ui"
                language="bash"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                2. Import components
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Import the components you need in your React application:
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

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                3. Configure Tailwind CSS (Optional)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                If you want to customize the components using Tailwind CSS, add
                the following to your tailwind.config.js:
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
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Next Steps
        </h2>
        <Card>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Check out the{" "}
              <Link
                href="/docs/usage"
                className="text-blue-500 hover:text-blue-600"
              >
                Usage Guide
              </Link>{" "}
              to learn how to use the components
            </li>
            <li>
              Explore the{" "}
              <Link
                href="/docs/theming"
                className="text-blue-500 hover:text-blue-600"
              >
                Theming Guide
              </Link>{" "}
              to customize the look and feel
            </li>
            <li>
              Browse the{" "}
              <Link href="/docs" className="text-blue-500 hover:text-blue-600">
                Component Documentation
              </Link>{" "}
              for detailed API references
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
