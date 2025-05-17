"use client";
import React from "react";
import StatCard from "@/components/StatCard/StatCard";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import {
  HiUsers,
  HiCurrencyDollar,
  HiShoppingCart,
  HiChartBar,
} from "react-icons/hi2";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function StatCardPage() {
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
      prop: "title",
      type: "string",
      default: "-",
      description: "The title of the stat card",
    },
    {
      id: 2,
      prop: "value",
      type: "string | number",
      default: "-",
      description: "The main value to display",
    },
    {
      id: 3,
      prop: "icon",
      type: "IconType",
      default: "-",
      description: "Icon component to display",
    },
    {
      id: 4,
      prop: "trend",
      type: "{ value: number; isPositive: boolean }",
      default: "-",
      description: "Trend information to display",
    },
    {
      id: 5,
      prop: "description",
      type: "string",
      default: "-",
      description: "Additional description text",
    },
    {
      id: 6,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the card",
    },
    {
      id: 7,
      prop: "iconClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the icon",
    },
    {
      id: 8,
      prop: "trendClassName",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the trend indicator",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">StatCard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A versatile card component for displaying statistics with optional
          icons, trends, and descriptions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Icon support</li>
          <li>Trend indicators</li>
          <li>Descriptive text</li>
          <li>Dark mode support</li>
          <li>Customizable styling</li>
          <li>Responsive design</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic StatCard</h3>
          <div className="border rounded-lg p-4">
            <StatCard title="Total Users" value="12,345" icon={HiUsers} />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Total Users"
  value="12,345"
  icon={HiUsers}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With Trend</h3>
          <div className="border rounded-lg p-4">
            <StatCard
              title="Revenue"
              value="$45,231"
              icon={HiCurrencyDollar}
              trend={{ value: 20.1, isPositive: true }}
              description="vs. last month"
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Revenue"
  value="$45,231"
  icon={HiCurrencyDollar}
  trend={{ value: 20.1, isPositive: true }}
  description="vs. last month"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Negative Trend</h3>
          <div className="border rounded-lg p-4">
            <StatCard
              title="Sales"
              value="1,234"
              icon={HiShoppingCart}
              trend={{ value: 5.2, isPositive: false }}
              description="vs. last month"
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Sales"
  value="1,234"
  icon={HiShoppingCart}
  trend={{ value: 5.2, isPositive: false }}
  description="vs. last month"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <StatCard
              title="Growth Rate"
              value="89.1%"
              icon={HiChartBar}
              trend={{ value: 12.5, isPositive: true }}
              description="vs. last quarter"
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800"
              iconClassName="bg-blue-200 dark:bg-blue-700"
              trendClassName="font-medium"
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Growth Rate"
  value="89.1%"
  icon={HiChartBar}
  trend={{ value: 12.5, isPositive: true }}
  description="vs. last quarter"
  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800"
  iconClassName="bg-blue-200 dark:bg-blue-700"
  trendClassName="font-medium"
/>`}
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
