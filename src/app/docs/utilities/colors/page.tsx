"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

export default function ColorsDocs() {
  const colors = {
    gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    red: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    orange: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    green: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    teal: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    blue: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    indigo: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    pink: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Colors
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A comprehensive color system for consistent and accessible design.
        </p>
      </div>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Color Palette
        </h2>
        <Card>
          <div className="space-y-8">
            {Object.entries(colors).map(([color, shades]) => (
              <div key={color}>
                <h3 className="text-lg font-medium mb-4 capitalize">{color}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {shades.map((shade) => (
                    <div key={shade}>
                      <div
                        className={[
                          "h-20 rounded-lg mb-2 border border-gray-200 dark:border-gray-700",
                          `bg-${color}-${shade}`,
                        ].join(" ")}
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {color}-{shade}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        bg-{color}-{shade}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Background Colors</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-blue-500 text-white rounded">
                    bg-blue-500
                  </div>
                  <div className="p-4 bg-green-500 text-white rounded">
                    bg-green-500
                  </div>
                  <div className="p-4 bg-red-500 text-white rounded">
                    bg-red-500
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Text Colors</h3>
                <div className="space-y-2">
                  <p className="text-blue-500">text-blue-500</p>
                  <p className="text-green-500">text-green-500</p>
                  <p className="text-red-500">text-red-500</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`// Background colors
<div className="bg-blue-500">Blue background</div>
<div className="bg-green-500">Green background</div>
<div className="bg-red-500">Red background</div>

// Text colors
<p className="text-blue-500">Blue text</p>
<p className="text-green-500">Green text</p>
<p className="text-red-500">Red text</p>

// Border colors
<div className="border border-blue-500">Blue border</div>
<div className="border border-green-500">Green border</div>
<div className="border border-red-500">Red border</div>`}
          language="tsx"
        />
      </section>

      {/* Dark Mode */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dark Mode
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Light Mode</h3>
                <div className="p-4 bg-gray-100 text-gray-900 rounded">
                  Light mode colors
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Dark Mode</h3>
                <div className="p-4 bg-gray-800 text-gray-100 rounded">
                  Dark mode colors
                </div>
              </div>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`// Dark mode support
<div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Content that adapts to dark mode
</div>

// Using dark mode variants
<div className="bg-blue-500 dark:bg-blue-600">
  Different shades for light/dark modes
</div>`}
          language="tsx"
        />
      </section>
    </div>
  );
}
