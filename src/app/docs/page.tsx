import React from "react";
import Link from "next/link";

// List of all doc folders (generated from directory listing)
const docFolders = [
  "components",
  "utilities",
  "hooks",
  "modal",
  "taginput",
  "tooltip",
  "tabs",
  "collapse",
  "timeline",
  "statcard",
  "list",
  "stepper",
  "pagination",
  "popover",
  "rating",
  "codeblock",
  "carousel",
  "skeleton",
  "spinner",
  "progress",
  "toast",
  "slider",
  "upload",
  "calendar",
  "breadcrumbs",
  "badge",
  "avatar",
  "alert",
  "select",
  "table",
  "card",
  "button",
  "input",
];

function toTitleCase(str: string) {
  return str
    .replace(/(^|[-_/])([a-z])/g, (g) => g.toUpperCase())
    .replace(/[-_/]/g, " ");
}

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Documentation
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Explore all available UI components and utilities. Click any section
          to view its documentation and examples.
        </p>
      </div>

      {/* Docs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {docFolders.map((folder) => (
          <Link key={folder} href={`/docs/${folder}`} className="block">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {toTitleCase(folder)}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Documentation for {toTitleCase(folder)}.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
