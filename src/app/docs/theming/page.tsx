"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { BsSun, BsMoon, BsDisplay } from "react-icons/bs";

export default function ThemingDocs() {
  const { theme, setTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme UI after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Theming Guide
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Learn how to customize the appearance of React Reusable UI components
          using Tailwind&apos;s color scheme detection.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Color Scheme Detection
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                System Preference
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By default, components follow your system&apos;s color scheme
                preference. You can override this behavior:
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === "light"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <BsSun className="w-5 h-5" />
                  Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <BsMoon className="w-5 h-5" />
                  Dark
                </button>
                <button
                  onClick={() => setTheme("system")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === "system"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <BsDisplay className="w-5 h-5" />
                  System
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Using the Theme Hook
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                The useTheme hook provides access to the current color scheme:
              </p>
              <CodeBlock
                code={`import { useTheme } from "@majordev/react-reusable-ui";

function ThemeAwareComponent() {
  const { theme, setTheme, isDark } = useTheme();

  return (
    <div className={\`\${isDark ? "dark" : "light"}-mode\`}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("system")}>
        Reset to System Preference
      </button>
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
          Component Theming
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Automatic Theme Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Components automatically adapt to the current color scheme:
              </p>
              <div className="space-y-4">
                <Input
                  theme={isDark ? "dark" : "light"}
                  label="Example Input"
                  placeholder="Type something..."
                />
                <div className="flex gap-2">
                  <Button theme={isDark ? "dark" : "light"}>Primary</Button>
                  <Button theme={isDark ? "dark" : "light"} variant="outline">
                    Outline
                  </Button>
                </div>
              </div>
              <CodeBlock
                code={`// Components automatically use the current color scheme
<Input label="Adaptive Input" />
<Button>Adaptive Button</Button>

// You can also explicitly set the theme
<Input theme="dark" label="Dark Input" />
<Button theme="light">Light Button</Button>`}
                language="tsx"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Custom Styling
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Use Tailwind&apos;s dark mode classes for custom styling:
              </p>
              <CodeBlock
                code={`<div className="bg-white dark:bg-gray-800">
  <p className="text-gray-900 dark:text-white">
    This text adapts to the color scheme
  </p>
  <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
    Adaptive Button
  </button>
</div>`}
                language="tsx"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Tailwind Configuration
        </h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Configure Tailwind CSS to enable color scheme detection:
              </p>
              <CodeBlock
                code={`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@majordev/react-reusable-ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
};`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Color Scheme Classes
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Use Tailwind&apos;s dark mode classes to create adaptive
                designs:
              </p>
              <CodeBlock
                code={`// Example of adaptive styling
<div className="
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-white
  border border-gray-200 dark:border-gray-700
">
  <h1 className="text-2xl font-bold">
    Adaptive Heading
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    This content adapts to the color scheme
  </p>
</div>`}
                language="tsx"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Best Practices
        </h2>
        <Card>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Respect user&apos;s system color scheme preference by default
            </li>
            <li>
              Use Tailwind&apos;s dark mode classes for consistent theming
            </li>
            <li>Test components in both light and dark modes</li>
            <li>Provide a way to override system preferences when needed</li>
            <li>Use semantic color names in your custom styles</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
