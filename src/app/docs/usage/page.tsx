"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { BsSearch, BsPerson } from "react-icons/bs";
import Link from "next/link";

export default function UsageDocs() {
  const { isDark } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Usage Guide
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Learn how to effectively use React Reusable UI components in your
          application.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Component Usage
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Importing Components
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Import the components you need from the package:
              </p>
              <CodeBlock
                code={`import { Button, Input, Toast } from "@majordev/react-reusable-ui";`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Using Components
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Here&apos;s a basic example of using multiple components
                together:
              </p>
              <div className="space-y-4">
                <Input
                  theme={isDark ? "dark" : "light"}
                  label="Search"
                  placeholder="Search..."
                  rightIcon={BsSearch}
                />
                <div className="flex gap-2">
                  <Button theme={isDark ? "dark" : "light"}>Search</Button>
                  <Button theme={isDark ? "dark" : "light"} variant="outline">
                    Clear
                  </Button>
                </div>
              </div>
              <CodeBlock
                code={`function SearchComponent() {
  return (
    <div>
      <Input
        label="Search"
        placeholder="Search..."
        rightIcon={BsSearch}
      />
      <div className="flex gap-2">
        <Button>Search</Button>
        <Button variant="outline">Clear</Button>
      </div>
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
          Component Props
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Common Props
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Most components share these common props:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>className - Additional CSS classes</li>
                <li>
                  theme - &quot;light&quot; or &quot;dark&quot; theme variant
                </li>
                <li>disabled - Disable the component</li>
                <li>onChange/onClick - Event handlers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Component-Specific Props
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Each component has its own set of specific props. Check the
                individual component documentation for details.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Best Practices
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Component Composition
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Combine components to create complex UI elements:
              </p>
              <CodeBlock
                code={`function UserProfile() {
  return (
    <div className="space-y-4">
      <Input
        label="Username"
        leftIcon={BsPerson}
        placeholder="Enter username"
      />
      <Button>Save Profile</Button>
    </div>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Event Handling
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Handle component events properly:
              </p>
              <CodeBlock
                code={`function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Perform search with query
  };

  return (
    <div>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <Button onClick={handleSearch}>Search</Button>
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
          Next Steps
        </h2>
        <Card>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Explore the{" "}
              <Link
                href="/docs/theming"
                className="text-blue-500 hover:text-blue-600"
              >
                Theming Guide
              </Link>{" "}
              to customize component appearance
            </li>
            <li>
              Check out the{" "}
              <Link href="/docs" className="text-blue-500 hover:text-blue-600">
                Component Documentation
              </Link>{" "}
              for detailed API references
            </li>
            <li>
              Visit our{" "}
              <Link
                href="https://github.com/majortyga/react-reusable-ui"
                className="text-blue-500 hover:text-blue-600"
              >
                GitHub repository
              </Link>{" "}
              for examples and contributions
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
