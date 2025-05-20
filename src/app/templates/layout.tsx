/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Typography from "@/components/Typography";
import logo from "@/images/gci.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, #1e293b 0%, #0a1124 80%, #020617 100%)",
      }}
    >
      {/* Header with blur and logo */}
      <header className="w-full sticky top-0 z-20 backdrop-blur-md bg-blue-900/60 border-b border-blue-800/40">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
          {/* Logo: replace src with your logo or use Typography for text logo */}

          <img
            src={logo.src}
            alt="Logo"
            width={logo.width / 4}
            height={logo.height / 4}
            className="h-8 w-8 mr-3 cursor-pointer"
            style={{ filter: "drop-shadow(0 2px 8px #0008)" }}
            onClick={() => router.push("/")}
          />
          <Link href="/">
            <Typography className="text-xl font-bold text-white tracking-wide drop-shadow">
              Reusable UI
            </Typography>
          </Link>
        </div>
      </header>
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
