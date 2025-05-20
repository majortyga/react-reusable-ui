"use client";
import React from "react";
import Link from "next/link";
import Card from "@/components/Card/Card";

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

// Categorize folders
const categories = [
  {
    name: "Core Components",
    items: [
      "button",
      "input",
      "card",
      "table",
      "avatar",
      "badge",
      "alert",
      "modal",
      "select",
      "tabs",
      "collapse",
      "stepper",
      "pagination",
      "popover",
      "tooltip",
      "toast",
      "progress",
      "spinner",
      "skeleton",
      "carousel",
      "calendar",
      "breadcrumbs",
      "statcard",
      "timeline",
      "list",
      "taginput",
      "upload",
      "codeblock",
      "rating",
      "slider",
    ],
  },
  {
    name: "Hooks",
    items: ["hooks"],
  },
  {
    name: "Utilities",
    items: ["utilities"],
  },
  {
    name: "Other",
    items: ["components"],
  },
];

// Find any folders not in the above categories
const categorized = new Set(categories.flatMap((cat) => cat.items));
const uncategorized = docFolders.filter((f) => !categorized.has(f));
if (uncategorized.length > 0) {
  categories.push({ name: "Other", items: uncategorized });
}

const cardGradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-blue-500 via-cyan-500 to-green-500",
  "from-purple-500 via-indigo-500 to-blue-500",
  "from-yellow-500 via-orange-500 to-pink-500",
  "from-green-500 via-teal-500 to-blue-500",
  "from-fuchsia-500 via-pink-500 to-rose-500",
  "from-sky-500 via-blue-500 to-indigo-500",
  "from-emerald-500 via-lime-500 to-yellow-500",
];

export default function DocsPage() {
  return (
    <div
      className="space-y-12 min-h-screen w-full px-2 py-8"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #3b82f6 0%, #1e3a8a 40%, #1e293b 80%, #0a1124 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-white drop-shadow mb-2">
          UI Documentation
        </h1>
        <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
          Explore all available UI components and utilities. Click any section
          to view its documentation and examples.
        </p>
      </div>

      {/* Categorized Docs */}
      <div className="space-y-16">
        {categories.map((cat, catIdx) => (
          <div key={cat.name} className="animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-blue-200 mb-6 drop-shadow">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cat.items.map((folder, idx) => (
                <Link
                  key={folder}
                  href={`/docs/${folder}`}
                  className="block group focus:outline-none"
                >
                  <Card
                    title={
                      <span className="text-white font-semibold drop-shadow">
                        {toTitleCase(folder)}
                      </span>
                    }
                    subtitle={
                      <span className="text-blue-100">
                        Documentation for {toTitleCase(folder)}.
                      </span>
                    }
                    variant="elevated"
                    className={`transition-transform duration-200 transform group-hover:scale-105 group-focus:scale-105 shadow-xl hover:shadow-2xl bg-gradient-to-br ${
                      cardGradients[(catIdx * 4 + idx) % cardGradients.length]
                    } bg-clip-padding border-none cursor-pointer animate-fade-in-up`}
                    bodyClassName="min-h-[40px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
