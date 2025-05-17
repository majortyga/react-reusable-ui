"use client";
import React from "react";
import Stepper from "@/components/Stepper/Stepper";
import Table, { Column } from "@/components/Table/Table";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

interface TableData {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

export default function StepperPage() {
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
      prop: "steps",
      type: "Step[]",
      default: "-",
      description: "Array of steps to display",
    },
    {
      id: 2,
      prop: "current",
      type: "number",
      default: "-",
      description: "The current step index (0-based)",
    },
    {
      id: 3,
      prop: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to apply to the component",
    },
  ];

  const steps = [
    {
      label: "Account",
      description: "Create your account",
    },
    {
      label: "Profile",
      description: "Add your information",
    },
    {
      label: "Preferences",
      description: "Set your preferences",
    },
    {
      label: "Review",
      description: "Review and submit",
    },
  ];

  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Stepper</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A flexible stepper component that helps users track their progress
          through a multi-step process.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Step labels and descriptions</li>
          <li>Visual progress indicators</li>
          <li>Customizable styling</li>
          <li>Dark mode support</li>
          <li>Responsive design</li>
          <li>Accessibility features</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Stepper</h3>
          <div className="border rounded-lg p-4">
            <Stepper steps={steps} current={currentStep} />
          </div>
          <CodeBlock
            code={`const steps = [
  {
    label: "Account",
    description: "Create your account",
  },
  {
    label: "Profile",
    description: "Add your information",
  },
  {
    label: "Preferences",
    description: "Set your preferences",
  },
  {
    label: "Review",
    description: "Review and submit",
  },
];

<Stepper steps={steps} current={1} />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Interactive Stepper</h3>
          <div className="border rounded-lg p-4">
            <Stepper steps={steps} current={currentStep} />
            <div className="mt-4 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded disabled:opacity-50"
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                onClick={() =>
                  setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
                }
                disabled={currentStep === steps.length - 1}
              >
                Next
              </button>
            </div>
          </div>
          <CodeBlock
            code={`const [currentStep, setCurrentStep] = React.useState(1);

<Stepper steps={steps} current={currentStep} />
<div className="mt-4 flex justify-between">
  <button
    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
    disabled={currentStep === 0}
  >
    Previous
  </button>
  <button
    onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
    disabled={currentStep === steps.length - 1}
  >
    Next
  </button>
</div>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Custom Styling</h3>
          <div className="border rounded-lg p-4">
            <Stepper
              steps={steps}
              current={currentStep}
              className="gap-8 [&>div>div]:w-10 [&>div>div]:h-10 [&>div>div]:text-lg"
            />
          </div>
          <CodeBlock
            code={`<Stepper
  steps={steps}
  current={currentStep}
  className="gap-8 [&>div>div]:w-10 [&>div>div]:h-10 [&>div>div]:text-lg"
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
