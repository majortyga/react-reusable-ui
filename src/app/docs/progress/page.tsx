"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

export default function ProgressDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Progress
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A component for displaying progress bars.
        </p>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>Progress example here</Card>
        <CodeBlock code={`// Progress usage example`} language="tsx" />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card>
          <Table columns={[]} data={[]} bordered size="small" showHeader />
        </Card>
      </section>
    </div>
  );
}
