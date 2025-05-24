"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { useMediaQuery, breakpoints, devices } from "@/hooks/useMediaQuery";

export default function UseMediaQueryDocs() {
  const isMobile = useMediaQuery(devices.mobile);
  const isTablet = useMediaQuery(devices.tablet);
  const isDesktop = useMediaQuery(devices.desktop);
  const isTouch = useMediaQuery(devices.touch);
  const isMouse = useMediaQuery(devices.mouse);

  // Pre-compute all breakpoint matches
  const breakpointMatches = {
    sm: useMediaQuery(breakpoints.sm),
    md: useMediaQuery(breakpoints.md),
    lg: useMediaQuery(breakpoints.lg),
    xl: useMediaQuery(breakpoints.xl),
    "2xl": useMediaQuery(breakpoints["2xl"]),
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          useMediaQuery
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A hook for responsive design that helps you adapt your UI based on
          media queries.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 className="font-medium mb-2">Device Type</h3>
                <ul className="space-y-2">
                  <li>Mobile: {isMobile.toString()}</li>
                  <li>Tablet: {isTablet.toString()}</li>
                  <li>Desktop: {isDesktop.toString()}</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 className="font-medium mb-2">Input Type</h3>
                <ul className="space-y-2">
                  <li>Touch Device: {isTouch.toString()}</li>
                  <li>Mouse Device: {isMouse.toString()}</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import { useMediaQuery, devices } from "@majordev/react-reusable-ui";

function MyComponent() {
  const isMobile = useMediaQuery(devices.mobile);
  const isTablet = useMediaQuery(devices.tablet);
  const isDesktop = useMediaQuery(devices.desktop);

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* Breakpoints */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Breakpoints
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(breakpoints).map(([key, query]) => (
                <div
                  key={key}
                  className={`p-4 rounded ${
                    breakpointMatches[key as keyof typeof breakpointMatches]
                      ? "bg-green-100 dark:bg-green-900"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <h3 className="font-medium mb-2">{key}</h3>
                  <p className="text-sm">{query}</p>
                  <p className="text-sm mt-2">
                    Matches:{" "}
                    {breakpointMatches[
                      key as keyof typeof breakpointMatches
                    ].toString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import { useMediaQuery, breakpoints } from "@majordev/react-reusable-ui";

function MyComponent() {
  const isSmall = useMediaQuery(breakpoints.sm);
  const isMedium = useMediaQuery(breakpoints.md);
  const isLarge = useMediaQuery(breakpoints.lg);

  return (
    <div>
      {isSmall && <SmallView />}
      {isMedium && <MediumView />}
      {isLarge && <LargeView />}
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-auto max-w-[90vw]">
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
                id: "useMediaQuery",
                prop: "useMediaQuery",
                type: "(query: string) => boolean",
                description: "Hook that returns whether a media query matches",
              },
              {
                id: "breakpoints",
                prop: "breakpoints",
                type: "Record<string, string>",
                description: "Common breakpoint queries for responsive design",
              },
              {
                id: "devices",
                prop: "devices",
                type: "Record<string, string>",
                description:
                  "Common device queries for device-specific features",
              },
            ]}
            bordered
            size="small"
            showHeader
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
            code={`// Common breakpoint queries
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

// Common device queries
export const devices = {
  mobile: '(max-width: 639px)',
  tablet: '(min-width: 640px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  touch: '(hover: none) and (pointer: coarse)',
  mouse: '(hover: hover) and (pointer: fine)',
} as const;`}
            language="tsx"
          />
        </Card>
      </section>
    </div>
  );
}
