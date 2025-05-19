"use client";
import React, { useState } from "react";
import Stepper from "@/components/Stepper/Stepper";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

type ApiRow = {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
};

const apiColumns: import("@/components/Table/Table").Column<ApiRow>[] = [
  { key: "prop", title: "Prop", dataIndex: "prop" },
  { key: "type", title: "Type", dataIndex: "type" },
  { key: "default", title: "Default", dataIndex: "default" },
  { key: "description", title: "Description", dataIndex: "description" },
];

const apiData: ApiRow[] = [
  {
    id: 1,
    prop: "steps",
    type: "Step[]",
    default: "[]",
    description:
      "Array of step objects with label, description, and optional icon",
  },
  {
    id: 2,
    prop: "current",
    type: "number",
    default: "0",
    description: "Current active step index",
  },
  {
    id: 3,
    prop: "className",
    type: "string",
    default: "''",
    description: "Additional CSS classes for the main container",
  },
  {
    id: 4,
    prop: "containerClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for the steps container",
  },
  {
    id: 5,
    prop: "stepClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for each step",
  },
  {
    id: 6,
    prop: "stepContentClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for step content",
  },
  {
    id: 7,
    prop: "circleClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for step circles",
  },
  {
    id: 8,
    prop: "activeCircleClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for active step circle",
  },
  {
    id: 9,
    prop: "completedCircleClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for completed step circle",
  },
  {
    id: 10,
    prop: "inactiveCircleClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for inactive step circle",
  },
  {
    id: 11,
    prop: "labelClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for step labels",
  },
  {
    id: 12,
    prop: "activeLabelClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for active step label",
  },
  {
    id: 13,
    prop: "completedLabelClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for completed step label",
  },
  {
    id: 14,
    prop: "inactiveLabelClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for inactive step label",
  },
  {
    id: 15,
    prop: "descriptionClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for step descriptions",
  },
  {
    id: 16,
    prop: "activeDescriptionClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for active step description",
  },
  {
    id: 17,
    prop: "completedDescriptionClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for completed step description",
  },
  {
    id: 18,
    prop: "inactiveDescriptionClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for inactive step description",
  },
  {
    id: 19,
    prop: "lineClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for connecting lines",
  },
  {
    id: 20,
    prop: "activeLineClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for active connecting line",
  },
  {
    id: 21,
    prop: "completedLineClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for completed connecting line",
  },
  {
    id: 22,
    prop: "inactiveLineClassName",
    type: "string",
    default: "''",
    description: "Additional CSS classes for inactive connecting line",
  },
  {
    id: 23,
    prop: "showDescriptionOnMobile",
    type: "boolean",
    default: "true",
    description: "Whether to show step descriptions on mobile devices",
  },
  {
    id: 24,
    prop: "verticalOnMobile",
    type: "boolean",
    default: "false",
    description: "Whether to display steps vertically on mobile devices",
  },
  {
    id: 25,
    prop: "renderStep",
    type: "(step: Step, index: number, isActive: boolean, isCompleted: boolean) => React.ReactNode",
    default: "-",
    description: "Custom render function for entire step",
  },
  {
    id: 26,
    prop: "renderCircle",
    type: "(step: Step, index: number, isActive: boolean, isCompleted: boolean) => React.ReactNode",
    default: "-",
    description: "Custom render function for step circle",
  },
];

// Example components for steps
const AccountForm = () => (
  <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
    <h3 className="font-medium mb-2">Account Details</h3>
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
);

const ProfileForm = () => (
  <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
    <h3 className="font-medium mb-2">Profile Information</h3>
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
);

// Basic steps without components
const basicSteps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />,
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />,
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />,
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />,
  },
];

// Steps with components for the Component Rendering section
const stepsWithComponents = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />,
    component: <AccountForm />,
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />,
    component: <ProfileForm />,
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />,
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />,
  },
];

export default function StepperDocs() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Stepper
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A flexible stepper component that supports custom styling, responsive
          layouts, and custom rendering.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper steps={basicSteps} current={current} />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(1);

  return (
    <Stepper
      steps={steps}
      current={current}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* With Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Styling
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper
              steps={basicSteps}
              current={current}
              circleClassName="w-10 h-10"
              activeCircleClassName="bg-green-500 border-green-500"
              completedCircleClassName="bg-green-500 border-green-500"
              labelClassName="text-lg"
              descriptionClassName="text-sm"
              lineClassName="h-1"
              activeLineClassName="bg-green-500"
              completedLineClassName="bg-green-500"
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(1);

  return (
    <Stepper
      steps={steps}
      current={current}
      circleClassName="w-10 h-10"
      activeCircleClassName="bg-green-500 border-green-500"
      completedCircleClassName="bg-green-500 border-green-500"
      labelClassName="text-lg"
      descriptionClassName="text-sm"
      lineClassName="h-1"
      activeLineClassName="bg-green-500"
      completedLineClassName="bg-green-500"
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Responsive Layout */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Responsive Layout
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper
              steps={basicSteps}
              current={current}
              verticalOnMobile
              showDescriptionOnMobile={false}
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(1);

  return (
    <Stepper
      steps={steps}
      current={current}
      verticalOnMobile
      showDescriptionOnMobile={false}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Custom Rendering */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Rendering
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper
              steps={basicSteps}
              current={current}
              renderCircle={(step, index, isActive, isCompleted) => (
                <div
                  className={
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 " +
                    (isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-gray-200 border-gray-300 text-gray-500")
                  }
                >
                  {isCompleted ? <FiSearch className="w-4 h-4" /> : step.icon}
                </div>
              )}
            />
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(1);

  return (
    <Stepper
      steps={steps}
      current={current}
      renderCircle={(step, index, isActive, isCompleted) => (
        <div
          className={"flex items-center justify-center w-8 h-8 rounded-full border-2 " + 
            (isCompleted
              ? "bg-green-500 border-green-500 text-white"
              : isActive
              ? "bg-blue-500 border-blue-500 text-white"
              : "bg-gray-200 border-gray-300 text-gray-500")}
        >
          {isCompleted ? <FiSearch className="w-4 h-4" /> : step.icon}
        </div>
      )}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Component Rendering */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Component Rendering
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper steps={stepsWithComponents} current={current} />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
                disabled={current === 0}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    Math.min(stepsWithComponents.length - 1, prev + 1)
                  )
                }
                disabled={current === stepsWithComponents.length - 1}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

// Example components for steps
const AccountForm = () => (
  <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
    <h3 className="font-medium mb-2">Account Details</h3>
    <div className="space-y-2">
      <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
    </div>
  </div>
);

const ProfileForm = () => (
  <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
    <h3 className="font-medium mb-2">Profile Information</h3>
    <div className="space-y-2">
      <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
      <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
    </div>
  </div>
);

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />,
    component: <AccountForm />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />,
    component: <ProfileForm />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(1);

  return (
    <Stepper
      steps={steps}
      current={current}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* With Navigation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Navigation
        </h2>
        <Card>
          <div className="space-y-4">
            <Stepper steps={basicSteps} current={current} />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
                disabled={current === 0}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    Math.min(basicSteps.length - 1, prev + 1)
                  )
                }
                disabled={current === basicSteps.length - 1}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`import React, { useState } from "react";
import { Stepper } from "@majordev/react-reusable-ui";
import { FiUser, FiMail, FiLock, FiSearch } from "react-icons/fi";

const steps = [
  {
    label: "Account",
    description: "Create your account",
    icon: <FiUser className="w-4 h-4" />
  },
  {
    label: "Profile",
    description: "Add your details",
    icon: <FiMail className="w-4 h-4" />
  },
  {
    label: "Security",
    description: "Set up security",
    icon: <FiLock className="w-4 h-4" />
  },
  {
    label: "Payment",
    description: "Add payment method",
    icon: <FiSearch className="w-4 h-4" />
  }
];

export default function MyComponent() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Stepper steps={steps} current={current} />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
          disabled={current === 0}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={() => setCurrent((prev) => Math.min(steps.length - 1, prev + 1))}
          disabled={current === steps.length - 1}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Next
        </button>
      </div>
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
        <Card className="overflow-auto max-w-[80vh] md:max-w-full">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Props
            </h3>
            <Table
              columns={apiColumns}
              data={apiData}
              bordered
              size="small"
              showHeader
            />
          </div>
        </Card>
      </section>
    </div>
  );
}
