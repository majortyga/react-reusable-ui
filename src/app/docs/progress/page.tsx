"use client";
import React, { useState } from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import Progress from "@/components/Progress/Progress";

export default function ProgressDocs() {
  const [progress, setProgress] = useState(45);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Progress
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile component for displaying progress indicators in both
          linear and circular formats, with various styles, animations, and
          customization options.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Linear Progress
              </h3>
              <Progress value={progress} />
              <CodeBlock code={`<Progress value={45} />`} language="tsx" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Circular Progress
              </h3>
              <div className="flex justify-center">
                <Progress value={progress} type="circular" showValue />
              </div>
              <CodeBlock
                code={`<Progress value={45} type="circular" showValue />`}
                language="tsx"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Progress Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Progress Types
        </h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Linear Progress
              </h3>
              <div className="space-y-4">
                <Progress value={progress} showValue />
                <Progress value={progress} showValue valuePosition="outside" />
                <Progress value={progress} showValue striped />
                <Progress value={progress} showValue striped animated />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Circular Progress
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    size="sm"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    size="md"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    size="lg"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    size="md"
                    showValue
                    striped
                    animated
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Variants
        </h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Linear Progress
              </h3>
              <div className="space-y-4">
                <Progress value={progress} variant="default" />
                <Progress value={progress} variant="primary" />
                <Progress value={progress} variant="success" />
                <Progress value={progress} variant="warning" />
                <Progress value={progress} variant="error" />
                <Progress value={progress} variant="info" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Circular Progress
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="default"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="primary"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="success"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="warning"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="error"
                    showValue
                  />
                </div>
                <div className="flex justify-center">
                  <Progress
                    value={progress}
                    type="circular"
                    variant="info"
                    showValue
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* With Labels */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Labels
        </h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Linear Progress
              </h3>
              <div className="space-y-4">
                <Progress
                  value={progress}
                  label="Upload Progress"
                  showValue
                  valuePosition="outside"
                />
                <Progress
                  value={progress}
                  label="Download Progress"
                  showValue
                  valuePosition="inside"
                  labelPosition="bottom"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Circular Progress
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Progress
                    value={progress}
                    type="circular"
                    label="Upload"
                    showValue
                  />
                </div>
                <div className="text-center">
                  <Progress
                    value={progress}
                    type="circular"
                    label="Download"
                    showValue
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Value Display Position */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Value Display Position (Circular)
        </h2>
        <Card className="p-6">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <Progress value={progress} type="circular" showValue />
              <span className="mt-2 text-sm text-gray-500">
                Center (default)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Progress
                value={progress}
                type="circular"
                showValue
                valueDisplayPosition="edge"
              />
              <span className="mt-2 text-sm text-gray-500">
                Edge (tip of arc, variant color)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Progress
                value={progress}
                type="circular"
                showValue
                valueDisplayPosition="edge"
                edgeValueBg="#f59e42"
                edgeValueShadow="0 4px 12px 0 rgba(245,158,66,0.4)"
              />
              <span className="mt-2 text-sm text-gray-500">
                Edge (custom color/shadow)
              </span>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`// Center (default)
<Progress value={45} type="circular" showValue />

// Edge (tip of arc, variant color)
<Progress value={45} type="circular" showValue valueDisplayPosition="edge" />

// Edge (custom color/shadow)
<Progress value={45} type="circular" showValue valueDisplayPosition="edge" edgeValueBg="#f59e42" edgeValueShadow="0 4px 12px 0 rgba(245,158,66,0.4)" />`}
          language="tsx"
        />
      </section>

      {/* Live Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Live Example: Circular & Linear Progress
        </h2>
        <Card className="p-6 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <label
              htmlFor="progress-slider"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Progress Value: <span className="font-mono">{progress}%</span>
            </label>
            <input
              id="progress-slider"
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-64 accent-green-500"
            />
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <Progress
                value={progress}
                type="circular"
                showValue
                valueDisplayPosition="edge"
              />
              <span className="mt-2 text-sm text-gray-500">
                Circular (edge, variant color)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Progress
                value={progress}
                type="circular"
                showValue
                valueDisplayPosition="edge"
                edgeValueBg="#f59e42"
                edgeValueShadow="0 4px 12px 0 rgba(245,158,66,0.4)"
              />
              <span className="mt-2 text-sm text-gray-500">
                Circular (edge, custom color/shadow)
              </span>
            </div>
            <div className="flex flex-col items-center min-w-[200px] w-64">
              <Progress
                value={progress}
                type="bar"
                valuePosition="inside"
                showValue
                size="lg"
              />
              <span className="mt-2 text-sm text-gray-500">Linear (bar)</span>
            </div>
          </div>
        </Card>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overvlow-x-auto max-w-[80vw]">
          <Table
            columns={[
              { key: "prop", title: "Prop", dataIndex: "id" },
              { key: "type", title: "Type", dataIndex: "type" },
              { key: "default", title: "Default", dataIndex: "default" },
              {
                key: "description",
                title: "Description",
                dataIndex: "description",
              },
            ]}
            data={[
              {
                id: "value",
                type: "number",
                default: "required",
                description: "Current progress value",
              },
              {
                id: "max",
                type: "number",
                default: "100",
                description: "Maximum value",
              },
              {
                id: "type",
                type: '"bar" | "circular"',
                default: '"bar"',
                description: "Type of progress indicator",
              },
              {
                id: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the progress indicator",
              },
              {
                id: "variant",
                type: '"default" | "primary" | "success" | "warning" | "error" | "info"',
                default: '"default"',
                description: "Color variant",
              },
              {
                id: "rounded",
                type: '"none" | "sm" | "md" | "lg" | "full"',
                default: '"full"',
                description: "Border radius style (bar only)",
              },
              {
                id: "thickness",
                type: "number",
                default: "4",
                description:
                  "Thickness of the progress indicator (circular only)",
              },
              {
                id: "showValue",
                type: "boolean",
                default: "false",
                description: "Whether to show the progress value",
              },
              {
                id: "valuePosition",
                type: '"inside" | "outside"',
                default: '"inside"',
                description: "Position of the progress value (bar only)",
              },
              {
                id: "striped",
                type: "boolean",
                default: "false",
                description: "Whether to show striped pattern",
              },
              {
                id: "animated",
                type: "boolean",
                default: "false",
                description: "Whether to animate the progress indicator",
              },
              {
                id: "label",
                type: "string",
                default: "-",
                description: "Label text for the progress indicator",
              },
              {
                id: "labelPosition",
                type: '"top" | "bottom"',
                default: '"top"',
                description: "Position of the label (bar only)",
              },
              {
                id: "className",
                type: "string",
                default: '""',
                description: "Custom class for the container",
              },
              {
                id: "trackClassName",
                type: "string",
                default: '""',
                description: "Custom class for the track",
              },
              {
                id: "barClassName",
                type: "string",
                default: '""',
                description: "Custom class for the progress bar",
              },
              {
                id: "valueClassName",
                type: "string",
                default: '""',
                description: "Custom class for the value text",
              },
              {
                id: "labelClassName",
                type: "string",
                default: '""',
                description: "Custom class for the label",
              },
              {
                id: "valueDisplayPosition",
                type: '"center" | "edge"',
                default: '"center"',
                description:
                  "Where to display the value in circular progress: center or at the arc tip",
              },
              {
                id: "edgeValueBg",
                type: "string",
                default: "variant color",
                description:
                  "Background color for the edge value circle (circular, edge only)",
              },
              {
                id: "edgeValueShadow",
                type: "string",
                default: "shadow-lg",
                description:
                  "Box shadow for the edge value circle (circular, edge only)",
              },
            ]}
            bordered
            size="small"
            showHeader
          />
        </Card>
      </section>
    </div>
  );
}
