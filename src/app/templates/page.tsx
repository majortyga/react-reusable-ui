"use client";

import Card from "@/components/Card/Card";
import Typography from "@/components/Typography";
import Link from "next/link";

const templates = [
  {
    title: "Dashboard",
    description: "Analytics, charts, and quick stats.",
    image: {
      src: "/images/templates/dashboard.jpg",
      alt: "Dashboard Template",
      aspectRatio: "video" as const,
      overlay: true,
      overlayColor: "rgba(10,20,60,0.3)",
    },
    link: "/templates/dashboard",
  },
  {
    title: "E-commerce",
    description: "Product listings, cart, and checkout.",
    image: {
      src: "/images/templates/ecommerce.jpg",
      alt: "E-commerce Template",
      aspectRatio: "video" as const,
      overlay: true,
      overlayColor: "rgba(10,20,60,0.3)",
    },
    link: "/templates/ecommerce",
  },
  {
    title: "Portfolio",
    description: "Showcase your work and skills.",
    image: {
      src: "/images/templates/portfolio.jpg",
      alt: "Portfolio Template",
      aspectRatio: "video" as const,
      overlay: true,
      overlayColor: "rgba(10,20,60,0.3)",
    },
    link: "/templates/portfolio",
  },
  {
    title: "Blog",
    description: "Articles, categories, and comments.",
    image: {
      src: "/images/templates/blog.jpg",
      alt: "Blog Template",
      aspectRatio: "video" as const,
      overlay: true,
      overlayColor: "rgba(10,20,60,0.3)",
    },
    link: "/templates/blog",
  },
];

export default function Templates() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #1e293b 0%, #0a1124 80%, #020617 100%)",
      }}
    >
      <Typography className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
        Select a Template
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {templates.map((tpl) => (
          <Link key={tpl.title} href={tpl.link}>
            <Card
              title={
                <span className="text-white drop-shadow">{tpl.title}</span>
              }
              subtitle={
                <span className="text-blue-200">{tpl.description}</span>
              }
              image={tpl.image}
              variant="elevated"
              className="bg-gradient-to-br from-blue-900/80 to-blue-950/90 border-none hover:scale-105 transition-transform cursor-pointer shadow-xl hover:shadow-2xl"
              bodyClassName="min-h-[60px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
