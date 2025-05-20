"use client";
import React, { useState } from "react";
import Calendar from "@/components/Calendar/Calendar";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table from "@/components/Table/Table";

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
    prop: "value",
    type: "Date | undefined",
    default: "-",
    description: "The currently selected date",
  },
  {
    id: 2,
    prop: "onChange",
    type: "(date: Date) => void",
    default: "-",
    description: "Callback fired when a date is selected",
  },
  {
    id: 3,
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes for the calendar container",
  },
  {
    id: 4,
    prop: "calendarButtonClassName",
    type: "string",
    default: "-",
    description:
      "Additional CSS classes for calendar buttons and interactive elements",
  },
  {
    id: 5,
    prop: "textColor",
    type: "string",
    default: "-",
    description: "Text color class to be applied to calendar elements",
  },
  {
    id: 6,
    prop: "showTimePicker",
    type: "boolean",
    default: "false",
    description: "Whether to show the time picker",
  },
  {
    id: 7,
    prop: "showSeconds",
    type: "boolean",
    default: "false",
    description: "Whether to show seconds in the time picker",
  },
  {
    id: 8,
    prop: "hour12",
    type: "boolean",
    default: "false",
    description: "Whether to use 12-hour format (AM/PM)",
  },
  {
    id: 9,
    prop: "timeInterval",
    type: "number",
    default: "1",
    description:
      "Interval in minutes for the minute picker (e.g., 5 for 5-minute intervals)",
  },
  {
    id: 10,
    prop: "secondInterval",
    type: "number",
    default: "1",
    description:
      "Interval in seconds for the second picker (e.g., 5 for 5-second intervals)",
  },
  {
    id: 11,
    prop: "minDate",
    type: "Date",
    default: "-",
    description: "Minimum selectable date",
  },
  {
    id: 12,
    prop: "maxDate",
    type: "Date",
    default: "-",
    description: "Maximum selectable date",
  },
  {
    id: 13,
    prop: "disableDate",
    type: "(date: Date) => boolean",
    default: "-",
    description: "Function to disable specific dates",
  },
  {
    id: 14,
    prop: "disableTime",
    type: "(date: Date, h: number, m: number, s: number) => boolean",
    default: "-",
    description: "Function to disable specific times",
  },
  {
    id: 15,
    prop: "timePickerInline",
    type: "boolean",
    default: "true",
    description: "Whether to show time picker inline with the calendar",
  },
  {
    id: 16,
    prop: "onOpen",
    type: "() => void",
    default: "-",
    description: "Callback fired when the calendar opens",
  },
  {
    id: 17,
    prop: "onClose",
    type: "() => void",
    default: "-",
    description: "Callback fired when the calendar closes",
  },
  {
    id: 18,
    prop: "renderDay",
    type: "(date: Date, isSelected: boolean, isToday: boolean, disabled: boolean) => React.ReactNode",
    default: "-",
    description: "Custom render function for day cells",
  },
  {
    id: 19,
    prop: "renderTimeCell",
    type: "(h: number, m: number, s: number, selected: boolean, disabled: boolean) => React.ReactNode",
    default: "-",
    description: "Custom render function for time picker cells",
  },
];

export default function CalendarDocs() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [minDate] = useState(new Date(2024, 0, 1));
  const [maxDate] = useState(new Date(2024, 11, 31));
  const [disabledDates] = useState([
    new Date(2024, 0, 15),
    new Date(2024, 1, 15),
    new Date(2024, 2, 15),
  ]);

  const isDateDisabled = (date: Date) => {
    return disabledDates.some(
      (disabledDate) =>
        disabledDate.getFullYear() === date.getFullYear() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getDate() === date.getDate()
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A customizable calendar component for date and time selection with
          support for date ranges, disabled dates, time picker, and custom
          rendering.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Usage
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          />
        </Card>
        <CodeBlock
          code={`const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Styling
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            calendarButtonClassName="hover:bg-blue-100 dark:hover:bg-blue-900 bg-blue-50 dark:bg-blue-900"
            textColor="text-gray-900 dark:text-white"
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
  calendarButtonClassName="hover:bg-blue-100 dark:hover:bg-blue-900"
  textColor="text-gray-900 dark:text-white"
/>`}
          language="tsx"
        />
      </section>

      {/* Date Range */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Date Range
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        </Card>
        <CodeBlock
          code={`const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
const [minDate] = useState(new Date(2024, 0, 1));
const [maxDate] = useState(new Date(2024, 11, 31));

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={minDate}
  maxDate={maxDate}
/>`}
          language="tsx"
        />
      </section>

      {/* Disabled Dates */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Disabled Dates
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            disableDate={isDateDisabled}
          />
        </Card>
        <CodeBlock
          code={`const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
const [disabledDates] = useState([
  new Date(2024, 0, 15),
  new Date(2024, 1, 15),
  new Date(2024, 2, 15)
]);

const isDateDisabled = (date: Date) => {
  return disabledDates.some(
    (disabledDate) =>
      disabledDate.getFullYear() === date.getFullYear() &&
      disabledDate.getMonth() === date.getMonth() &&
      disabledDate.getDate() === date.getDate()
  );
};

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  disableDate={isDateDisabled}
/>`}
          language="tsx"
        />
      </section>

      {/* Time Picker */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Time Picker
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            showTimePicker
            showSeconds
            hour12
            timeInterval={15}
            secondInterval={5}
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  showTimePicker
  showSeconds
  hour12
  timeInterval={15}
  secondInterval={5}
/>`}
          language="tsx"
        />
      </section>

      {/* Time Picker with Toggle */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Time Picker with Toggle
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            showTimePicker
            timePickerInline={false}
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  showTimePicker
  timePickerInline={false}
/>`}
          language="tsx"
        />
      </section>

      {/* Disabled Time */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Disabled Time
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            showTimePicker
            disableTime={(date, h, m, s) => h < 9 || h > 17}
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  showTimePicker
  disableTime={(date, h, m, s) => h < 9 || h > 17}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Day Rendering */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Day Rendering
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            renderDay={(date, isSelected, isToday, disabled) => (
              <button
                className={`w-full h-full rounded-full text-center transition-colors
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : isToday
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                  ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
                disabled={disabled}
              >
                {date.getDate()}
              </button>
            )}
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  renderDay={(date, isSelected, isToday, disabled) => (
    <button
      className={\`w-full h-full rounded-full text-center transition-colors
        \${
          isSelected
            ? "bg-blue-600 text-white"
            : isToday
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        }
        \${disabled ? "opacity-40 cursor-not-allowed" : ""}\`}
      disabled={disabled}
    >
      {date.getDate()}
    </button>
  )}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Time Cell Rendering */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Time Cell Rendering
        </h2>
        <Card>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            showTimePicker
            renderTimeCell={(h, m, s, selected, disabled) => (
              <div
                className={`p-2 rounded ${
                  selected
                    ? "bg-blue-600 text-white"
                    : disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {h.toString().padStart(2, "0")}:{m.toString().padStart(2, "0")}:
                {s.toString().padStart(2, "0")}
              </div>
            )}
          />
        </Card>
        <CodeBlock
          code={`<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  showTimePicker
  renderTimeCell={(h, m, s, selected, disabled) => (
    <div
      className={\`p-2 rounded \${
        selected
          ? "bg-blue-600 text-white"
          : disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-gray-100 dark:hover:bg-gray-800"
      }\`}
    >
      {h.toString().padStart(2, "0")}:
      {m.toString().padStart(2, "0")}:
      {s.toString().padStart(2, "0")}
    </div>
  )}
/>`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <Card className="overflow-auto max-w-[80vh] md:max-w-full">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Props
          </h3>
          <Table
            columns={apiColumns}
            data={apiData}
            bordered
            size="small"
            showHeader
          />
        </Card>
      </section>
    </div>
  );
}
