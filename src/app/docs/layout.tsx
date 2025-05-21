/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/images/gci.svg";
import { useRouter } from "next/navigation";
const navigation = [
  {
    name: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Installation", href: "/docs/installation" },
      { name: "Usage", href: "/docs/usage" },
      { name: "Theming", href: "/docs/theming" },
    ],
  },
  {
    name: "Components",
    items: [
      { name: "Alert", href: "/docs/alert" },
      { name: "Avatar", href: "/docs/avatar" },
      { name: "Badge", href: "/docs/badge" },
      { name: "Breadcrumbs", href: "/docs/breadcrumbs" },
      { name: "Button", href: "/docs/button" },
      { name: "Calendar", href: "/docs/calendar" },
      { name: "Card", href: "/docs/card" },
      { name: "Carousel", href: "/docs/carousel" },
      { name: "Collapse", href: "/docs/collapse" },
      { name: "Container", href: "/docs/container" },
      { name: "Dropdown", href: "/docs/dropdown" },
      { name: "Grid", href: "/docs/grid" },
      { name: "Input", href: "/docs/input" },
      { name: "List", href: "/docs/list" },
      { name: "Modal", href: "/docs/modal" },
      { name: "Navigation", href: "/docs/navigation" },
      { name: "Pagination", href: "/docs/pagination" },
      { name: "Popover", href: "/docs/popover" },
      { name: "Progress", href: "/docs/progress" },
      { name: "Rating", href: "/docs/rating" },
      { name: "Select", href: "/docs/select" },
      { name: "Skeleton", href: "/docs/skeleton" },
      { name: "Slider", href: "/docs/slider" },
      { name: "Spinner", href: "/docs/spinner" },
      { name: "StatCard", href: "/docs/statcard" },
      { name: "Stepper", href: "/docs/stepper" },
      { name: "Table", href: "/docs/table" },
      { name: "Tabs", href: "/docs/tabs" },
      { name: "TagInput", href: "/docs/taginput" },
      { name: "Timeline", href: "/docs/timeline" },
      { name: "Typography", href: "/docs/utilities/typography" },
      { name: "Toast", href: "/docs/toast" },
      { name: "Tooltip", href: "/docs/tooltip" },
      { name: "Upload", href: "/docs/upload" },
    ],
  },
  {
    name: "Hooks",
    items: [
      { name: "useToast", href: "/docs/hooks/use-toast" },
      { name: "useTheme", href: "/docs/hooks/use-theme" },
      { name: "useMediaQuery", href: "/docs/hooks/use-media-query" },
    ],
  },
  {
    name: "Others",
    items: [{ name: "Templates", href: "/templates" }],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed lg:sticky top-0 inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition duration-200 ease-in-out z-40 w-64 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-gradient-to-b from-[#0a1836] via-[#11235a] to-[#1e293b] dark:from-[#0a1836] dark:via-[#11235a] dark:to-[#1e293b] custom-sidebar-scrollbar`}
        >
          <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-gradient-to-r from-[#0a1836] via-[#11235a] to-[#1e293b] dark:from-[#0a1836] dark:via-[#11235a] dark:to-[#1e293b] z-10">
            <div className="flex gap-3 items-center text-xl font-semibold text-gray-100 dark:text-white">
              <img
                src={logo.src}
                alt="Logo"
                width={logo.width / 4}
                height={logo.height / 4}
                className="h-8 w-8 mr-3 cursor-pointer"
                onClick={() => router.push("/")}
              />
              Reusable UI
            </div>
          </div>
          <nav className="p-4 space-y-6">
            {navigation.map((section) => (
              <div key={section.name}>
                <h2 className="text-xs font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">
                  {section.name}
                </h2>
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                          isActive
                            ? "bg-white/10 dark:bg-white/10 text-white"
                            : "text-gray-200 dark:text-gray-300 hover:bg-white/5 dark:hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-opacity-75 lg:hidden z-30"
            onClick={() => setIsSidebarOpen(false)}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        )}

        {/* Main content */}
        <div
          className="flex-1 flex flex-col min-h-screen"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, #0a1836 0%, #11235a 60%, #1e293b 100%)",
          }}
        >
          {/* Header */}
          <header className="sticky top-0 z-[1000000] bg-gradient-to-r from-[#0a1836] via-[#11235a] to-[#1e293b] dark:from-[#0a1836] dark:via-[#11235a] dark:to-[#1e293b] border-b border-gray-200 dark:border-gray-700">
            <div className="h-16 flex items-center justify-between px-4 lg:px-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isSidebarOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="flex gap-3 items-center text-lg font-medium text-gray-100 dark:text-white">
                    <img
                      src={logo.src}
                      alt="Logo"
                      width={logo.width / 4}
                      height={logo.height / 4}
                      className="h-8 w-8 mr-3 md:hidden cursor-pointer"
                      onClick={() => router.push("/")}
                    />
                    Reusable UI
                  </div>
                  <span className="text-gray-400 dark:text-gray-400">/</span>
                  <h2 className="text-lg font-medium text-gray-100 dark:text-white">
                    {navigation
                      .flatMap((section) => section.items)
                      .find((item) => item.href === pathname)?.name ||
                      "Documentation"}
                  </h2>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/majortyga/react-reusable-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </header>

          <main
            className="p-4 lg:p-8 max-w-4xl mx-auto w-full min-h-[calc(100vh-4rem-120px)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,24,54,0.95) 0%, rgba(17,35,90,0.85) 60%, rgba(30,41,59,0.8) 100%)",
            }}
          >
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#0a1836] via-[#11235a] to-[#1e293b] dark:from-[#0a1836] dark:via-[#11235a] dark:to-[#1e293b]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Resources
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://github.com/majortyga/react-reusable-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/installation"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Installation
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Community
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://github.com/majortyga/react-reusable-ui/discussions"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        GitHub Discussions
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/majortyga/react-reusable-ui/issues"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Issues
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/majortyga/react-reusable-ui/pulls"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Pull Requests
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="/privacy"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="/license"
                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-base text-gray-400 text-center">
                  © {new Date().getFullYear()} GCI. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* Dark mode main and main-content gradients */}
      <style jsx global>{`
        @media (prefers-color-scheme: dark) {
          .flex-1.flex.flex-col.min-h-screen {
            background: radial-gradient(
              circle at 60% 40%,
              #0a1836 0%,
              #11235a 80%,
              #1e293b 100%
            ) !important;
          }
          main[style] {
            background: linear-gradient(
              135deg,
              rgba(10, 24, 54, 0.95) 0%,
              rgba(17, 35, 90, 0.85) 60%,
              rgba(30, 41, 59, 0.8) 100%
            ) !important;
          }
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #11235a 0%, #1e3a8a 100%);
          border-radius: 8px;
          border: 2px solid #0a1836;
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        }
        .custom-sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        /* Firefox */
        .custom-sidebar-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #1e3a8a #0a1836;
        }
      `}</style>
    </div>
  );
}
