"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { BsSun, BsMoon, BsDisplay } from "react-icons/bs";

export default function UseThemeDocs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            useTheme
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A hook for managing theme preferences with support for light, dark,
            and system themes. The theme affects the entire application&apos;s
            color scheme and appearance.
          </p>
        </div>

        {/* Theme Switcher */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Theme Switcher
          </h2>
          <Card>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <BsSun className="w-5 h-5" />
                  Light
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <BsMoon className="w-5 h-5" />
                  Dark
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <BsDisplay className="w-5 h-5" />
                  System
                </button>
              </div>

              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Current theme: <span className="font-medium">System</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dark mode active:{" "}
                  <span className="font-medium">Auto-detected</span>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Theme Preview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Theme Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UI Components Preview */}
            <Card>
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  UI Components
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                    <p className="text-gray-600 dark:text-gray-300">
                      This is a card component with different styles based on
                      the theme.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                      Primary Button
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
                      Secondary Button
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Text Styles Preview */}
            <Card>
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Text Styles
                </h3>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Heading Text
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Body Text
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Small Text
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-600 dark:text-blue-400">
                      Link Text
                    </p>
                    <p className="text-red-600 dark:text-red-400">Error Text</p>
                    <p className="text-green-600 dark:text-green-400">
                      Success Text
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
                {
                  key: "description",
                  title: "Description",
                  dataIndex: "description",
                },
              ]}
              data={[
                {
                  id: "theme",
                  prop: "theme",
                  type: "Theme",
                  description:
                    "Current theme setting ('light' | 'dark' | 'system')",
                },
                {
                  id: "setTheme",
                  prop: "setTheme",
                  type: "(theme: Theme) => void",
                  description: "Function to change the theme",
                },
                {
                  id: "isDark",
                  prop: "isDark",
                  type: "boolean",
                  description:
                    "Whether the current theme is dark (true for 'dark' theme or when system preference is dark)",
                },
              ]}
              bordered
              size="small"
              showHeader
              className="text-gray-700 dark:text-gray-300"
              headerClassName="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              rowClassName="border-gray-200 dark:border-gray-700"
            />
          </Card>
        </section>

        {/* Types */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Types
          </h2>
          <Card>
            <CodeBlock
              code={`type Theme = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}`}
              language="tsx"
            />
          </Card>
        </section>
      </div>
    </div>
  );
}
