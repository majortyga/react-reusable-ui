"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCog,
  FaStar,
  FaBox,
  FaLightbulb,
  FaBook,
  FaHome,
  FaChartBar,
  FaUsers,
  FaFileAlt,
  FaCogs,
  FaQuestionCircle,
  FaPalette,
  FaLeaf,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";
import Link from "next/link";
import Dropdown from "@/components/Dropdown/Dropdown";
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
    type: "string",
    default: "-",
    description: "The currently selected value",
  },
  {
    id: 2,
    prop: "onChange",
    type: "(value: string) => void",
    default: "-",
    description: "Callback fired when an option is selected",
  },
  {
    id: 3,
    prop: "options",
    type: "DropdownOption[]",
    default: "-",
    description: "Array of options to display in the dropdown",
  },
  {
    id: 4,
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the dropdown is disabled",
  },
  {
    id: 5,
    prop: "isLoading",
    type: "boolean",
    default: "false",
    description: "Whether the dropdown is in a loading state",
  },
  {
    id: 6,
    prop: "colors",
    type: "{ base?: string; hover?: string; focus?: string; text?: string; border?: string; background?: string; }",
    default: "-",
    description: "Custom colors for different states",
  },
  {
    id: 7,
    prop: "theme",
    type: "light | dark",
    default: "light",
    description: "Theme variant for the dropdown",
  },
  {
    id: 8,
    prop: "showArrow",
    type: "boolean",
    default: "true",
    description: "Whether to show the dropdown arrow",
  },
  {
    id: 9,
    prop: "plain",
    type: "boolean",
    default: "false",
    description: "Whether to use plain text style without background",
  },
  {
    id: 10,
    prop: "hover",
    type: "boolean",
    default: "false",
    description: "Whether to activate on hover",
  },
  {
    id: 11,
    prop: "href",
    type: "string",
    default: "-",
    description: "Link to navigate to when option is clicked",
  },
  {
    id: 12,
    prop: "renderGroup",
    type: "(group: string) => React.ReactNode",
    default: "-",
    description: "Custom render function for group headers",
  },
  {
    id: 13,
    prop: "showArrow",
    type: "boolean",
    default: "true",
    description: "Whether to show the dropdown arrow in the trigger",
  },
  {
    id: 14,
    prop: "groupDivider",
    type: "React.ReactNode",
    default: "-",
    description: "Custom divider component to use between groups",
  },
  {
    id: 15,
    prop: "display",
    type: "{ triggerIcon?: boolean; triggerDescription?: boolean; optionIcons?: boolean; optionDescriptions?: boolean; submenuIcons?: boolean; submenuDescriptions?: boolean; searchIcon?: boolean; submenuArrow?: boolean; dropdownArrow?: boolean; loadingSpinner?: boolean; checkmark?: boolean; groupDivider?: boolean; tooltips?: boolean; badges?: boolean; arrow?: boolean; }",
    default: "All true except tooltips and badges",
    description: "Control the visibility of various UI elements",
  },
];

const mainNavOptions = [
  { label: "Dashboard", value: "dashboard", icon: FaHome, href: "/docs" },
  {
    label: "Analytics",
    value: "analytics",
    icon: FaChartBar,
    href: "/analytics",
  },
  { label: "Team", value: "team", icon: FaUsers, href: "/team" },
  {
    label: "Documents",
    value: "documents",
    icon: FaFileAlt,
    href: "/documents",
  },
];

const settingsOptions = [
  { label: "Profile", value: "profile", icon: FaUser, href: "/profile" },
  { label: "Settings", value: "settings", icon: FaCog, href: "/settings" },
  { label: "Messages", value: "messages", icon: FaEnvelope, href: "/messages" },
  { label: "Favorites", value: "favorites", icon: FaStar, href: "/favorites" },
];

const productOptions = [
  {
    label: "Products",
    value: "products",
    icon: FaBox,
    href: "#",
    submenu: [
      { label: "Overview", value: "overview", href: "/docs/select" },
      { label: "Features", value: "features", href: "/products/features" },
      { label: "Pricing", value: "pricing", href: "/products/pricing" },
    ],
  },
  {
    label: "Solutions",
    value: "solutions",
    icon: FaLightbulb,
    href: "#",
    submenu: [
      { label: "For Business", value: "business", href: "/solutions/business" },
      {
        label: "For Enterprise",
        value: "enterprise",
        href: "/solutions/enterprise",
      },
      {
        label: "For Developers",
        value: "developers",
        href: "/solutions/developers",
      },
    ],
  },
  {
    label: "Resources",
    value: "resources",
    icon: FaBook,
    href: "#",
    submenu: [
      { label: "Documentation", value: "docs", href: "/resources/docs" },
      { label: "Tutorials", value: "tutorials", href: "/resources/tutorials" },
      { label: "Blog", value: "blog", href: "/resources/blog" },
    ],
  },
];

const helpOptions = [
  {
    label: "Help Center",
    value: "help",
    icon: FaQuestionCircle,
    href: "/help",
  },
  { label: "Settings", value: "settings", icon: FaCogs, href: "/settings" },
];

const groupedOptions = [
  {
    label: "Dashboard",
    value: "dashboard",
    icon: FaHome,
    href: "/docs",
    group: "Navigation",
  },
  {
    label: "Analytics",
    value: "analytics",
    icon: FaChartBar,
    href: "/analytics",
    group: "Navigation",
  },
  {
    label: "Profile",
    value: "profile",
    icon: FaUser,
    href: "/profile",
    group: "Account",
  },
  {
    label: "Settings",
    value: "settings",
    icon: FaCog,
    href: "/settings",
    group: "Account",
  },
  {
    label: "Help",
    value: "help",
    icon: FaQuestionCircle,
    href: "/help",
    group: "Support",
  },
];

const customColorOptions = [
  {
    label: "Purple Theme",
    value: "purple",
    icon: FaPalette,
    colors: {
      base: "bg-purple-500",
      hover: "hover:bg-purple-600",
      focus: "focus:ring-purple-400",
      text: "text-white",
      border: "border-purple-600",
      background: "bg-purple-50",
    },
  },
  {
    label: "Emerald Theme",
    value: "emerald",
    icon: FaLeaf,
    colors: {
      base: "bg-emerald-500",
      hover: "hover:bg-emerald-600",
      focus: "focus:ring-emerald-400",
      text: "text-white",
      border: "border-emerald-600",
      background: "bg-emerald-50",
    },
  },
  {
    label: "Rose Theme",
    value: "rose",
    icon: FaHeart,
    colors: {
      base: "bg-rose-500",
      hover: "hover:bg-rose-600",
      focus: "focus:ring-rose-400",
      text: "text-white",
      border: "border-rose-600",
      background: "bg-rose-50",
    },
  },
];

const advancedOptions = [
  {
    label: "Dashboard",
    value: "dashboard",
    icon: FaHome,
    href: "/docs",
    description: "View your dashboard",
    data: {
      badge: "New",
      tooltip: "Access your main dashboard",
    },
    className: "font-medium",
  },
  {
    label: "Analytics",
    value: "analytics",
    icon: FaChartBar,
    href: "/analytics",
    description: "View detailed analytics",
    data: {
      badge: "Pro",
      tooltip: "Advanced analytics features",
    },
    className: "font-medium",
  },
  {
    label: "Settings",
    value: "settings",
    icon: FaCog,
    href: "/settings",
    description: "Configure your preferences",
    data: {
      tooltip: "Customize your experience",
    },
    className: "font-medium",
  },
];

export default function DropdownDocs() {
  const [selectedValue, setSelectedValue] = useState<string>();
  const [selectedTheme, setSelectedTheme] = useState<string>("purple");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dropdown Menu
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A versatile navigation dropdown menu component that supports submenus,
          icons, custom styling, and grouping. Works with any routing solution
          and automatically adapts to your system&apos;s color scheme.
        </p>
      </div>

      {/* Basic Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Features
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Simple plain text dropdown with custom colors
        </p>
        <Card>
          <div className="flex items-center space-x-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              LinkComponent={Link}
              plain
              colors={{
                hover: "hover:bg-blue-50",
                focus: "focus:bg-blue-50",
                text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
                option: {
                  text: "text-black hover:text-gray-800",
                  hover: {
                    background: "hover:bg-blue-50",
                    text: "hover:text-blue-600",
                  },
                },
                container: {
                  background: "bg-white",
                },
              }}
              optionsContainerClassName="mt-2"
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  LinkComponent={Link}
  plain
  colors={{
    hover: "hover:bg-blue-50",
    focus: "focus:bg-blue-50",
    text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
    option: {
      text: "text-black hover:text-gray-800",
      hover: {
        background: "hover:bg-blue-50",
        text: "hover:text-blue-600",
      },
    },
    container: {
      background: "bg-white",
    },
  }}
  optionsContainerClassName="mt-2"
/>`}
          language="tsx"
        />
      </section>

      {/* Dropdown in Nav */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dropdown in Nav
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Professional navigation bar with multiple dropdowns and links
        </p>
        <Card>
          <div className="flex items-center space-x-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Home
            </Link>
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              LinkComponent={Link}
              plain
              colors={{
                hover: "hover:bg-blue-50",
                focus: "focus:bg-blue-50",
                text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
                option: {
                  text: "text-black hover:text-gray-800",
                  hover: {
                    background: "hover:bg-blue-50",
                    text: "hover:text-blue-600",
                  },
                },
                container: {
                  background: "bg-white",
                },
              }}
              optionsContainerClassName="mt-2"
            />
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              About
            </Link>
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={productOptions}
              LinkComponent={Link}
              plain
              colors={{
                hover: "hover:bg-blue-50",
                focus: "focus:bg-blue-50",
                text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
                option: {
                  text: "text-black hover:text-gray-800",
                  hover: {
                    background: "hover:bg-blue-50",
                    text: "hover:text-blue-600",
                  },
                },
                container: {
                  background: "bg-white",
                },
              }}
              optionsContainerClassName="mt-2"
            />
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact
            </Link>
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<div className="flex items-center space-x-8 border-b border-gray-200 dark:border-gray-700 pb-4">
  <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
    Home
  </Link>
  <Dropdown
    value={selectedValue}
    onChange={setSelectedValue}
    options={mainNavOptions}
    LinkComponent={Link}
    plain
    colors={{
      hover: "hover:bg-blue-50",
      focus: "focus:bg-blue-50",
      text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
      option: {
        text: "text-black hover:text-gray-800",
        hover: {
          background: "hover:bg-blue-50",
          text: "hover:text-blue-600",
        },
      },
      container: {
        background: "bg-white",
      },
    }}
    optionsContainerClassName="mt-2"
  />
  <Link href="/about" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
    About
  </Link>
  <Dropdown
    value={selectedValue}
    onChange={setSelectedValue}
    options={productOptions}
    LinkComponent={Link}
    plain
    colors={{
      hover: "hover:bg-blue-50",
      focus: "focus:bg-blue-50",
      text: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
      option: {
        text: "text-black hover:text-gray-800",
        hover: {
          background: "hover:bg-blue-50",
          text: "hover:text-blue-600",
        },
      },
      container: {
        background: "bg-white",
      },
    }}
    optionsContainerClassName="mt-2"
  />
  <Link href="/contact" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
    Contact
  </Link>
</div>`}
          language="tsx"
        />
      </section>

      {/* With Submenus */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Submenus
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Nested dropdown menus with unlimited depth
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              hover
              options={productOptions}
              LinkComponent={Link}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={productOptions}
  LinkComponent={Link}
/>`}
          language="tsx"
        />
      </section>

      {/* With Groups */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          With Groups
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Grouped options with custom headers and dividers
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={groupedOptions}
              LinkComponent={Link}
              renderGroup={(group) => (
                <div className="px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                  {group.toUpperCase()}
                </div>
              )}
              groupDivider={
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-2" />
              }
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={groupedOptions}
  LinkComponent={Link}
  renderGroup={(group) => (
    <div className="px-4 py-2 text-xs font-bold text-blue-600 dark:text-blue-400">
      {group.toUpperCase()}
    </div>
  )}
  groupDivider={
    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-2" />
  }
/>`}
          language="tsx"
        />
      </section>

      {/* Searchable Dropdown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Searchable Dropdown
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Search functionality with custom placeholder
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              searchable
              searchPlaceholder="Search options..."
              onSearch={(query) => console.log("Searching:", query)}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  searchable
  searchPlaceholder="Search options..."
  onSearch={(query) => console.log('Searching:', query)}
/>`}
          language="tsx"
        />
      </section>

      {/* Loading State */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Loading State
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Loading spinner and disabled state
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              isLoading
              disabled
              loadingSpinner={
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              }
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  isLoading
  disabled
  loadingSpinner={
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
  }
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Colors
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Complete color customization
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              colors={{
                base: "bg-purple-500",
                hover: "hover:bg-purple-600",
                text: "text-white",
                border: "border-purple-600",
                container: {
                  background: "bg-white",
                  border: "border-purple-200",
                  shadow: "shadow-xl",
                },
                option: {
                  text: "text-gray-700",
                  hover: {
                    background: "hover:bg-purple-50",
                    text: "hover:text-purple-900",
                  },
                  selected: {
                    background: "bg-purple-100",
                    text: "text-purple-900",
                  },
                  disabled: {
                    text: "text-gray-400",
                    background: "bg-gray-50",
                  },
                  description: "text-gray-500",
                },
                search: {
                  background: "bg-gray-50",
                  text: "text-gray-900",
                  border: "border-purple-200",
                  placeholder: "placeholder-gray-400",
                },
                group: {
                  text: "text-purple-600",
                  background: "bg-purple-50",
                },
                divider: "bg-purple-100",
              }}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  colors={{
    base: "bg-purple-500",
    hover: "hover:bg-purple-600",
    text: "text-white",
    border: "border-purple-600",
    container: {
      background: "bg-white",
      border: "border-purple-200",
      shadow: "shadow-xl",
    },
    option: {
      text: "text-gray-700",
      hover: {
        background: "hover:bg-purple-50",
        text: "hover:text-purple-900",
      },
      selected: {
        background: "bg-purple-100",
        text: "text-purple-900",
      },
      disabled: {
        text: "text-gray-400",
        background: "bg-gray-50",
      },
      description: "text-gray-500",
    },
    search: {
      background: "bg-gray-50",
      text: "text-gray-900",
      border: "border-purple-200",
      placeholder: "placeholder-gray-400",
    },
    group: {
      text: "text-purple-600",
      background: "bg-purple-50",
    },
    divider: "bg-purple-100",
  }}
/>`}
          language="tsx"
        />
      </section>

      {/* Advanced Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Advanced Features
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Badges, tooltips, and custom rendering
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={advancedOptions}
              LinkComponent={Link}
              display={{
                triggerIcon: true,
                triggerDescription: true,
                optionIcons: true,
                optionDescriptions: true,
                submenuIcons: true,
                submenuDescriptions: true,
                searchIcon: true,
                submenuArrow: true,
                dropdownArrow: true,
                loadingSpinner: true,
                checkmark: true,
                groupDivider: true,
                tooltips: true,
                badges: true,
                arrow: true,
              }}
              tooltip={({ content, children }) => (
                <div className="group relative">
                  {children}
                  <div className="absolute left-full top-0 ml-2 hidden group-hover:block">
                    <div className="bg-gray-900 text-white text-xs rounded py-1 px-2">
                      {content}
                    </div>
                  </div>
                </div>
              )}
              badge={({ content }) => (
                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {content}
                </span>
              )}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={advancedOptions}
  LinkComponent={Link}
  display={{
    triggerIcon: true,
    triggerDescription: true,
    optionIcons: true,
    optionDescriptions: true,
    submenuIcons: true,
    submenuDescriptions: true,
    searchIcon: true,
    submenuArrow: true,
    dropdownArrow: true,
    loadingSpinner: true,
    checkmark: true,
    groupDivider: true,
    tooltips: true,
    badges: true,
    arrow: true,
  }}
  tooltip={({ content, children }) => (
    <div className="group relative">
      {children}
      <div className="absolute left-full top-0 ml-2 hidden group-hover:block">
        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2">
          {content}
        </div>
      </div>
    </div>
  )}
  badge={({ content }) => (
    <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
      {content}
    </span>
  )}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Styling
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Custom class names and styling
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              className="rounded-full"
              wrapperClassName="inline-block"
              triggerClassName="rounded-full px-6"
              optionsContainerClassName="rounded-xl"
              optionClassName="hover:bg-gray-100 dark:hover:bg-gray-800"
              maxHeight="400px"
              closeOnSelect={false}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  className="rounded-full"
  wrapperClassName="inline-block"
  triggerClassName="rounded-full px-6"
  optionsContainerClassName="rounded-xl"
  optionClassName="hover:bg-gray-100 dark:hover:bg-gray-800"
  maxHeight="400px"
  closeOnSelect={false}
/>`}
          language="tsx"
        />
      </section>

      {/* Hover Activation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hover Activation
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Activate dropdown on hover
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              hover
              onOpen={() => console.log("Opened")}
              onClose={() => console.log("Closed")}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  hover
  onOpen={() => console.log('Opened')}
  onClose={() => console.log('Closed')}
/>`}
          language="tsx"
        />
      </section>

      {/* Custom Trigger */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Custom Trigger
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Custom trigger element
        </p>
        <Card>
          <div className="flex flex-wrap gap-4">
            <Dropdown
              value={selectedValue}
              onChange={setSelectedValue}
              options={mainNavOptions}
              renderTrigger={(selected) => (
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  <span>{selected?.label || "Select"}</span>
                  <FaChevronDown className="h-4 w-4" />
                </button>
              )}
            />
          </div>
        </Card>
        <CodeBlock
          code={`const [selectedValue, setSelectedValue] = useState<string>();

<Dropdown
  value={selectedValue}
  onChange={setSelectedValue}
  options={mainNavOptions}
  renderTrigger={(selected) => (
    <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
      <span>{selected?.label || 'Select'}</span>
      <FaChevronDown className="h-4 w-4" />
    </button>
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
        <Card className="overflow-auto max-w-[80vw]">
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

      {/* Display Options Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 drop-shadow">
          Display Options Reference
        </h2>
        <Card className="bg-gradient-to-br from-[#1e293b] via-[#11235a] to-[#0a1836] border border-blue-900/40 dark:border-blue-800/60 rounded-xl shadow-lg p-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The{" "}
              <code className="bg-blue-900/80 text-blue-100 px-1.5 py-0.5 rounded font-mono">
                display
              </code>{" "}
              prop allows you to control the visibility of various UI elements
              in the dropdown:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  triggerIcon
                </code>
                <span className="text-blue-100">
                  Show/hide the icon in the trigger button
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  triggerDescription
                </code>
                <span className="text-blue-100">
                  Show/hide the description in the trigger button
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  optionIcons
                </code>
                <span className="text-blue-100">
                  Show/hide icons in the main options list
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  optionDescriptions
                </code>
                <span className="text-blue-100">
                  Show/hide descriptions in the main options list
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  submenuIcons
                </code>
                <span className="text-blue-100">
                  Show/hide icons in submenus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  submenuDescriptions
                </code>
                <span className="text-blue-100">
                  Show/hide descriptions in submenus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  searchIcon
                </code>
                <span className="text-blue-100">
                  Show/hide the search icon in the search input
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  submenuArrow
                </code>
                <span className="text-blue-100">
                  Show/hide the arrow indicating submenus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  dropdownArrow
                </code>
                <span className="text-blue-100">
                  Show/hide the main dropdown arrow
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  loadingSpinner
                </code>
                <span className="text-blue-100">
                  Show/hide the loading spinner
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  checkmark
                </code>
                <span className="text-blue-100">
                  Show/hide the checkmark for selected items
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  groupDivider
                </code>
                <span className="text-blue-100">
                  Show/hide dividers between groups
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  tooltips
                </code>
                <span className="text-blue-100">
                  Show/hide tooltips for options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  badges
                </code>
                <span className="text-blue-100">
                  Show/hide badges for options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  arrow
                </code>
                <span className="text-blue-100">
                  Show/hide all arrows (overrides individual arrow settings)
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* Grouping Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4 drop-shadow">
          Grouping Reference
        </h2>
        <Card className="bg-gradient-to-br from-[#1e293b] via-[#11235a] to-[#0a1836] border border-blue-900/40 dark:border-blue-800/60 rounded-xl shadow-lg p-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The dropdown supports grouping options using the{" "}
              <code className="bg-blue-900/80 text-blue-100 px-1.5 py-0.5 rounded font-mono">
                group
              </code>{" "}
              property in options. You can customize the appearance of groups
              using:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  renderGroup
                </code>
                <span className="text-blue-100">
                  Custom render function for group headers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  groupDivider
                </code>
                <span className="text-blue-100">
                  Custom component for dividers between groups
                </span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-blue-800/80 text-blue-100 px-1 py-0.5 rounded font-mono">
                  display.groupDivider
                </code>
                <span className="text-blue-100">
                  Toggle visibility of group dividers
                </span>
              </li>
            </ul>
            <p className="mt-4 text-blue-100">
              Options without a group will be placed in a default group. Groups
              are rendered in the order they appear in the options array.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
