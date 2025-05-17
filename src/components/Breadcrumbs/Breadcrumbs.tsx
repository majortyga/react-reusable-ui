import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "/",
  className = "",
}) => (
  <nav
    className={`flex items-center text-sm ${className}`}
    aria-label="Breadcrumb"
  >
    {items.map((item, idx) => (
      <span key={idx} className="flex items-center">
        {item.href && idx !== items.length - 1 ? (
          <a
            href={item.href}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            {item.label}
          </a>
        ) : (
          <span className="text-gray-500 dark:text-gray-300">{item.label}</span>
        )}
        {idx < items.length - 1 && (
          <span className="mx-2 text-gray-400">{separator}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
