"use client";
import React from "react";
import Tooltip from "@/components/Tooltip/Tooltip";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import { HiInformationCircle, HiQuestionMarkCircle } from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function TooltipPage() {
  const columns: Column<TableData>[] = [
    {
      key: "prop",
      title: "Prop",
      dataIndex: "prop",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "default",
      title: "Default",
      dataIndex: "default",
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
    },
  ];

  const data: TableData[] = [
    {
      id: 1,
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "The content to display in the tooltip",
    },
    {
      id: 2,
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The element that triggers the tooltip",
    },
    {
      id: 3,
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description:
        "The position of the tooltip relative to the trigger element",
    },
    {
      id: 4,
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip",
    },
    {
      id: 5,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the tooltip trigger",
    },
    {
      id: 6,
      prop: "contentClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the tooltip content",
    },
    {
      id: 7,
      prop: "arrowClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the tooltip arrow",
    },
    {
      id: 8,
      prop: "animation",
      type: '"fade" | "zoom" | "slide" | "bounce"',
      default: '"fade"',
      description: "The animation type for showing/hiding the tooltip",
    },
    {
      id: 9,
      prop: "animationDuration",
      type: '"fast" | "normal" | "slow"',
      default: '"normal"',
      description: "The duration of the animation",
    },
    {
      id: 10,
      prop: "maxWidth",
      type: "string",
      default: '"200px"',
      description: "Maximum width of the tooltip content",
    },
    {
      id: 11,
      prop: "interactive",
      type: "boolean",
      default: "false",
      description:
        "Whether the tooltip should stay visible when hovering over it",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A tooltip component that displays additional information when hovering
          over an element.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple positions (top, bottom, left, right)</li>
          <li>Custom animations</li>
          <li>Configurable delay</li>
          <li>Interactive mode</li>
          <li>Customizable styling</li>
          <li>Dark mode support</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Tooltip</h3>
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Tooltip content="This is a basic tooltip">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Hover me
                </button>
              </Tooltip>
              <Tooltip content="This is an icon tooltip">
                <HiInformationCircle className="w-6 h-6 text-gray-500 cursor-help" />
              </Tooltip>
            </div>
          </div>
          <CodeBlock
            code={`<Tooltip content="This is a basic tooltip">
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Hover me
  </button>
</Tooltip>

<Tooltip content="This is an icon tooltip">
  <HiInformationCircle className="w-6 h-6 text-gray-500 cursor-help" />
</Tooltip>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Different Positions</h3>
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Tooltip content="Top tooltip" position="top">
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  Top
                </button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" position="bottom">
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  Bottom
                </button>
              </Tooltip>
              <Tooltip content="Left tooltip" position="left">
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  Left
                </button>
              </Tooltip>
              <Tooltip content="Right tooltip" position="right">
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                  Right
                </button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock
            code={`<Tooltip content="Top tooltip" position="top">
  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
    Top
  </button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
    Bottom
  </button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
    Left
  </button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
    Right
  </button>
</Tooltip>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Animations</h3>
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Tooltip content="Fade animation" animation="fade">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  Fade
                </button>
              </Tooltip>
              <Tooltip content="Zoom animation" animation="zoom">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  Zoom
                </button>
              </Tooltip>
              <Tooltip content="Slide animation" animation="slide">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  Slide
                </button>
              </Tooltip>
              <Tooltip content="Bounce animation" animation="bounce">
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                  Bounce
                </button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock
            code={`<Tooltip content="Fade animation" animation="fade">
  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
    Fade
  </button>
</Tooltip>

<Tooltip content="Zoom animation" animation="zoom">
  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
    Zoom
  </button>
</Tooltip>

<Tooltip content="Slide animation" animation="slide">
  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
    Slide
  </button>
</Tooltip>

<Tooltip content="Bounce animation" animation="bounce">
  <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
    Bounce
  </button>
</Tooltip>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Interactive Tooltip</h3>
          <div className="border rounded-lg p-4">
            <Tooltip
              content={
                <div className="space-y-2">
                  <p className="font-medium">Interactive Tooltip</p>
                  <p className="text-sm">
                    You can hover over this tooltip to keep it visible.
                  </p>
                  <button className="px-2 py-1 text-xs bg-white text-gray-900 rounded hover:bg-gray-100">
                    Click me
                  </button>
                </div>
              }
              interactive
              maxWidth="250px"
            >
              <HiQuestionMarkCircle className="w-6 h-6 text-gray-500 cursor-help" />
            </Tooltip>
          </div>
          <CodeBlock
            code={`<Tooltip
  content={
    <div className="space-y-2">
      <p className="font-medium">Interactive Tooltip</p>
      <p className="text-sm">You can hover over this tooltip to keep it visible.</p>
      <button className="px-2 py-1 text-xs bg-white text-gray-900 rounded hover:bg-gray-100">
        Click me
      </button>
    </div>
  }
  interactive
  maxWidth="250px"
>
  <HiQuestionMarkCircle className="w-6 h-6 text-gray-500 cursor-help" />
</Tooltip>`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <Table columns={columns} data={data} bordered size="middle" />
      </div>
    </div>
  );
}
