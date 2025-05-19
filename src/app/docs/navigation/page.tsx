"use client";
import React, { useState } from "react";
import { HiHome, HiStar } from "react-icons/hi";
import Navigation from "@/components/Navigation/Navigation";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Table, { Column } from "@/components/Table/Table";
import Badge from "@/components/Badge/Badge";

const navItems = [
  { label: "Home", href: "/", icon: <HiHome /> },
  { label: "Features", href: "/features", icon: <HiStar /> },
  {
    label: "Pricing",
    href: "#",
    children: [
      { label: "Basic", href: "/pricing/basic" },
      { label: "Pro", href: "/pricing/pro" },
    ],
  },
  { label: "About", href: "/about" },
];

interface ApiRow {
  id: number;
  prop: string;
  type: string;
  default: string;
  description: string;
}

const apiColumns: Column<ApiRow>[] = [
  { key: "prop", title: "Prop", dataIndex: "prop" },
  { key: "type", title: "Type", dataIndex: "type" },
  { key: "default", title: "Default", dataIndex: "default" },
  { key: "description", title: "Description", dataIndex: "description" },
];

const apiData: ApiRow[] = [
  {
    id: 1,
    prop: "logo",
    type: "ReactNode",
    default: "-",
    description: "Logo element (left side)",
  },
  {
    id: 2,
    prop: "items",
    type: "NavItem[]",
    default: "-",
    description: "Navigation links and dropdowns",
  },
  {
    id: 3,
    prop: "search",
    type: "object",
    default: "-",
    description: "Search bar config (value, onChange, onSearch, etc.)",
  },
  {
    id: 4,
    prop: "colors",
    type: "object",
    default: "-",
    description: "Custom Tailwind color classes for backgrounds, text, etc.",
  },
  {
    id: 5,
    prop: "className",
    type: "string",
    default: '""',
    description: "Extra classes for the nav container",
  },
  {
    id: 6,
    prop: "mobileMenuClassName",
    type: "string",
    default: '""',
    description: "Extra classes for the mobile menu",
  },
  {
    id: 7,
    prop: "navItemClassName",
    type: "string",
    default: '""',
    description: "Extra classes for nav items",
  },
  {
    id: 8,
    prop: "mobileMenuWidth",
    type: "string",
    default: '"w-full"',
    description: "Width class for mobile menu (e.g. 'w-full', 'max-w-xs')",
  },
  {
    id: 9,
    prop: "mobileMenuPosition",
    type: '"absolute" | "fixed" | "static"',
    default: '"absolute"',
    description: "Position of mobile menu",
  },
  {
    id: 10,
    prop: "closeMobileOnClick",
    type: "boolean",
    default: "true",
    description: "Close mobile menu on link click",
  },
];

export default function NavigationDocs() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-10">
      <h1 className="text-3xl font-bold mb-2">
        <Badge variant="warning" count={"Unstable"}>
          Navigation Component
        </Badge>{" "}
      </h1>
      <p className="mb-6 text-gray-600">
        A fully customizable, responsive header navigation bar built with
        Tailwind CSS. Supports logo, links, dropdowns, search, custom colors,
        mobile menu options, and more.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Features</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Responsive design with mobile hamburger menu</li>
        <li>Logo, navigation links, and dropdowns</li>
        <li>Functional search bar with callback</li>
        <li>
          Custom colors via <code>colors</code> prop
        </li>
        <li>Mobile menu position and width options</li>
        <li>Easy to extend and style with Tailwind</li>
      </ul>

      {/* Basic Usage */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Basic Usage</h2>
      <div className="border rounded mb-4">
        <Navigation
          logo={<span className="font-bold text-xl">Navbar</span>}
          items={navItems}
        />
      </div>
      <CodeBlock
        code={`import Navigation from "@/components/Navigation/Navigation";
import { HiHome, HiStar } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "/", icon: <HiHome /> },
  { label: "Features", href: "/features", icon: <HiStar /> },
  { label: "Pricing", href: "#", children: [
    { label: "Basic", href: "/pricing/basic" },
    { label: "Pro", href: "/pricing/pro" },
  ] },
  { label: "About", href: "/about" },
];

<Navigation
  logo={<span className="font-bold text-xl">Navbar</span>}
  items={navItems}
/>`}
        language="tsx"
      />

      {/* With Search */}
      <h2 className="text-xl font-semibold mt-8 mb-2">With Search</h2>
      <div className="border rounded mb-4">
        <Navigation
          logo={<span className="font-bold text-xl">Navbar</span>}
          items={navItems}
          search={{
            value: search,
            onChange: setSearch,
            onSearch: (val: string) => alert("Searching: " + val),
            placeholder: "Search...",
            buttonLabel: "Search",
          }}
        />
      </div>
      <CodeBlock
        code={`const [search, setSearch] = useState("");
<Navigation
  logo={<span className="font-bold text-xl">Navbar</span>}
  items={navItems}
  search={{
    value: search,
    onChange: setSearch,
    onSearch: (val: string) => alert("Searching: " + val),
    placeholder: "Search...",
    buttonLabel: "Search"
  }}
/>`}
        language="tsx"
      />

      {/* Custom Colors */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Custom Colors</h2>
      <div className="border rounded mb-4">
        <Navigation
          logo={<span className="font-bold text-xl">Navbar</span>}
          items={navItems}
          colors={{
            bg: "bg-blue-600",
            text: "text-white",
            border: "border-blue-700",
            activeBg: "bg-blue-700",
            activeText: "text-white",
            dropdownBg: "bg-blue-700",
            dropdownText: "text-white",
            searchBg: "bg-blue-500",
            searchText: "text-white",
            searchButtonBg: "bg-yellow-400",
            searchButtonText: "text-blue-900",
          }}
        />
      </div>
      <CodeBlock
        code={`<Navigation
  logo={<span className="font-bold text-xl">Navbar</span>}
  items={navItems}
  colors={{
    bg: "bg-blue-600",
    text: "text-white",
    border: "border-blue-700",
    activeBg: "bg-blue-700",
    activeText: "text-white",
    dropdownBg: "bg-blue-700",
    dropdownText: "text-white",
    searchBg: "bg-blue-500",
    searchText: "text-white",
    searchButtonBg: "bg-yellow-400",
    searchButtonText: "text-blue-900",
  }}
/>`}
        language="tsx"
      />

      {/* Advanced: Mobile Menu Options */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        Advanced: Mobile Menu Options
      </h2>
      <div className="border rounded mb-4">
        <Navigation
          logo={<span className="font-bold text-xl">Navbar</span>}
          items={navItems}
          mobileMenuPosition="fixed"
          mobileMenuWidth="max-w-xs"
          mobileMenuClassName="shadow-lg"
        />
      </div>
      <CodeBlock
        code={`<Navigation
  logo={<span className="font-bold text-xl">Navbar</span>}
  items={navItems}
  mobileMenuPosition="fixed"
  mobileMenuWidth="max-w-xs"
  mobileMenuClassName="shadow-lg"
/>`}
        language="tsx"
      />

      {/* API Reference */}
      <h2 className="text-xl font-semibold mt-8 mb-2">API Reference</h2>
      <Table columns={apiColumns} data={apiData} bordered size="middle" />

      {/* Customization Tips */}
      <h2 className="text-xl font-semibold mt-8 mb-2">Customization Tips</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>
          Use the <code>colors</code> prop to match your brand or theme
        </li>
        <li>
          Pass any ReactNode as <code>logo</code> (image, text, etc.)
        </li>
        <li>
          Dropdowns are supported via <code>children</code> in{" "}
          <code>items</code>
        </li>
        <li>All features are mobile-friendly by default</li>
        <li>
          Use <code>mobileMenuPosition</code> and <code>mobileMenuWidth</code>{" "}
          for advanced mobile layouts
        </li>
        <li>Extend with right-side content, user menus, etc. as needed</li>
      </ul>
    </div>
  );
}
