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
  HiArrowTrendingUp,
  HiExclamationCircle,
  HiClock,
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
      type: "object",
      default: "-",
      description:
        "Trend information with value, isPositive, label, and showArrow properties",
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
      prop: "variant",
      type: '"default" | "bordered" | "elevated" | "gradient"',
      default: '"default"',
      description: "Card style variant",
    },
    {
      id: 7,
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Show loading state with skeleton animation",
    },
    {
      id: 8,
      prop: "skeleton",
      type: "boolean",
      default: "false",
      description: "Show skeleton placeholder",
    },
    {
      id: 9,
      prop: "colors",
      type: "object",
      default: "-",
      description:
        "Custom colors for background, text, border, icon, and trends",
    },
    {
      id: 10,
      prop: "alert",
      type: "object",
      default: "-",
      description: "Alert message with type (info, warning, error, success)",
    },
    {
      id: 11,
      prop: "format",
      type: '"number" | "currency" | "percentage" | "custom"',
      default: "-",
      description: "Value formatting type",
    },
    {
      id: 12,
      prop: "prefix",
      type: "string",
      default: "-",
      description: "Prefix for the value",
    },
    {
      id: 13,
      prop: "suffix",
      type: "string",
      default: "-",
      description: "Suffix for the value",
    },
    {
      id: 14,
      prop: "onClick",
      type: "() => void",
      default: "-",
      description: "Click handler for the card",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">StatCard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A versatile card component for displaying statistics with support for
          icons, trends, alerts, and various styling options.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Multiple variants (default, bordered, elevated, gradient)</li>
          <li>Icon support with custom colors</li>
          <li>Trend indicators with labels</li>
          <li>Value formatting (currency, percentage, custom)</li>
          <li>Loading and skeleton states</li>
          <li>Alert system with different types</li>
          <li>Custom colors and gradients</li>
          <li>Interactive features (clickable cards)</li>
          <li>Dark mode support</li>
          <li>Responsive design</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Usage</h3>
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
              value={45231}
              format="currency"
              icon={HiCurrencyDollar}
              trend={{ value: 20.1, isPositive: true, label: "vs. last month" }}
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Revenue"
  value={45231}
  format="currency"
  icon={HiCurrencyDollar}
  trend={{ value: 20.1, isPositive: true, label: "vs. last month" }}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Different Variants</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <StatCard
              title="Bordered Card"
              value="1,234"
              icon={HiShoppingCart}
              variant="bordered"
            />
            <StatCard
              title="Elevated Card"
              value="89.1%"
              icon={HiChartBar}
              variant="elevated"
            />
            <StatCard
              title="Gradient Card"
              value="2,345"
              icon={HiArrowTrendingUp}
              variant="gradient"
              colors={{
                gradient: {
                  from: "from-purple-500",
                  to: "to-indigo-600",
                },
              }}
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Bordered Card"
  value="1,234"
  icon={HiShoppingCart}
  variant="bordered"
/>

<StatCard
  title="Elevated Card"
  value="89.1%"
  icon={HiChartBar}
  variant="elevated"
/>

<StatCard
  title="Gradient Card"
  value="2,345"
  icon={HiArrowTrendingUp}
  variant="gradient"
  colors={{
    gradient: {
      from: "from-purple-500",
      to: "to-indigo-600"
    }
  }}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Value Formatting</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <StatCard
              title="Currency"
              value={1234567}
              format="currency"
              icon={HiCurrencyDollar}
            />
            <StatCard
              title="Percentage"
              value={89.1}
              format="percentage"
              icon={HiChartBar}
            />
            <StatCard
              title="Custom Format"
              value={1234}
              prefix="#"
              suffix=" orders"
              icon={HiShoppingCart}
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Currency"
  value={1234567}
  format="currency"
  icon={HiCurrencyDollar}
/>

<StatCard
  title="Percentage"
  value={89.1}
  format="percentage"
  icon={HiChartBar}
/>

<StatCard
  title="Custom Format"
  value={1234}
  prefix="#"
  suffix=" orders"
  icon={HiShoppingCart}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Loading States</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <StatCard
              title="Loading Card"
              value="1,234"
              icon={HiClock}
              loading
            />
            <StatCard
              title="Skeleton Card"
              value="1,234"
              icon={HiClock}
              skeleton
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Loading Card"
  value="1,234"
  icon={HiClock}
  loading
/>

<StatCard
  title="Skeleton Card"
  value="1,234"
  icon={HiClock}
  skeleton
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">With Alerts</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <StatCard
              title="Success Alert"
              value="89.1%"
              icon={HiChartBar}
              alert={{
                type: "success",
                message: "Performance is above target",
              }}
            />
            <StatCard
              title="Warning Alert"
              value="45.2%"
              icon={HiExclamationCircle}
              alert={{
                type: "warning",
                message: "Performance is below target",
              }}
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Success Alert"
  value="89.1%"
  icon={HiChartBar}
  alert={{
    type: "success",
    message: "Performance is above target"
  }}
/>

<StatCard
  title="Warning Alert"
  value="45.2%"
  icon={HiExclamationCircle}
  alert={{
    type: "warning",
    message: "Performance is below target"
  }}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Advanced Example</h3>
          <div className="border rounded-lg p-4">
            <StatCard
              title="Total Revenue"
              value={1234567}
              format="currency"
              icon={HiCurrencyDollar}
              trend={{
                value: 12.5,
                isPositive: true,
                label: "vs last month",
                showArrow: true,
              }}
              variant="gradient"
              colors={{
                gradient: {
                  from: "from-purple-500",
                  to: "to-indigo-600",
                },
                iconBg: "bg-white/20",
                iconColor: "text-white",
                trendPositive: "text-green-200",
                trendNegative: "text-red-200",
              }}
              alert={{
                type: "success",
                message: "Revenue is up 12.5% from last month",
              }}
              onClick={() => console.log("Card clicked")}
            />
          </div>
          <CodeBlock
            code={`<StatCard
  title="Total Revenue"
  value={1234567}
  format="currency"
  icon={HiCurrencyDollar}
  trend={{
    value: 12.5,
    isPositive: true,
    label: "vs last month",
    showArrow: true
  }}
  variant="gradient"
  colors={{
    gradient: {
      from: "from-purple-500",
      to: "to-indigo-600"
    },
    iconBg: "bg-white/20",
    iconColor: "text-white",
    trendPositive: "text-green-200",
    trendNegative: "text-red-200"
  }}
  alert={{
    type: "success",
    message: "Revenue is up 12.5% from last month"
  }}
  onClick={() => console.log("Card clicked")}
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
