"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

export default function TypographyDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Typography
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A comprehensive typography system for consistent text styling.
        </p>
      </div>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Font Sizes
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs">text-xs - Extra Small</p>
              <p className="text-sm">text-sm - Small</p>
              <p className="text-base">text-base - Base</p>
              <p className="text-lg">text-lg - Large</p>
              <p className="text-xl">text-xl - Extra Large</p>
              <p className="text-2xl">text-2xl - 2X Large</p>
              <p className="text-3xl">text-3xl - 3X Large</p>
              <p className="text-4xl">text-4xl - 4X Large</p>
              <p className="text-5xl">text-5xl - 5X Large</p>
              <p className="text-6xl">text-6xl - 6X Large</p>
              <p className="text-7xl">text-7xl - 7X Large</p>
              <p className="text-8xl">text-8xl - 8X Large</p>
              <p className="text-9xl">text-9xl - 9X Large</p>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<p className="text-xs">Extra Small</p>
<p className="text-sm">Small</p>
<p className="text-base">Base</p>
<p className="text-lg">Large</p>
<p className="text-xl">Extra Large</p>
<p className="text-2xl">2X Large</p>
<p className="text-3xl">3X Large</p>
<p className="text-4xl">4X Large</p>
<p className="text-5xl">5X Large</p>
<p className="text-6xl">6X Large</p>
<p className="text-7xl">7X Large</p>
<p className="text-8xl">8X Large</p>
<p className="text-9xl">9X Large</p>`}
          language="tsx"
        />
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Font Weights
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-thin">font-thin - Thin</p>
              <p className="font-extralight">font-extralight - Extra Light</p>
              <p className="font-light">font-light - Light</p>
              <p className="font-normal">font-normal - Normal</p>
              <p className="font-medium">font-medium - Medium</p>
              <p className="font-semibold">font-semibold - Semi Bold</p>
              <p className="font-bold">font-bold - Bold</p>
              <p className="font-extrabold">font-extrabold - Extra Bold</p>
              <p className="font-black">font-black - Black</p>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<p className="font-thin">Thin</p>
<p className="font-extralight">Extra Light</p>
<p className="font-light">Light</p>
<p className="font-normal">Normal</p>
<p className="font-medium">Medium</p>
<p className="font-semibold">Semi Bold</p>
<p className="font-bold">Bold</p>
<p className="font-extrabold">Extra Bold</p>
<p className="font-black">Black</p>`}
          language="tsx"
        />
      </section>

      {/* Text Alignment */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Text Alignment
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-left">text-left - Left aligned text</p>
              <p className="text-center">text-center - Center aligned text</p>
              <p className="text-right">text-right - Right aligned text</p>
              <p className="text-justify">
                text-justify - Justified text. This is a longer paragraph to
                demonstrate text justification. The text will be spread out to
                fill the width of the container.
              </p>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<p className="text-left">Left aligned text</p>
<p className="text-center">Center aligned text</p>
<p className="text-right">Right aligned text</p>
<p className="text-justify">Justified text</p>`}
          language="tsx"
        />
      </section>

      {/* Text Decoration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Text Decoration
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="underline">underline - Underlined text</p>
              <p className="line-through">line-through - Strikethrough text</p>
              <p className="no-underline">no-underline - No decoration</p>
              <p className="underline decoration-dotted">
                decoration-dotted - Dotted underline
              </p>
              <p className="underline decoration-dashed">
                decoration-dashed - Dashed underline
              </p>
              <p className="underline decoration-double">
                decoration-double - Double underline
              </p>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<p className="underline">Underlined text</p>
<p className="line-through">Strikethrough text</p>
<p className="no-underline">No decoration</p>
<p className="underline decoration-dotted">Dotted underline</p>
<p className="underline decoration-dashed">Dashed underline</p>
<p className="underline decoration-double">Double underline</p>`}
          language="tsx"
        />
      </section>

      {/* Line Height */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Line Height
        </h2>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="leading-none">
                leading-none - No line height. This is a longer paragraph to
                demonstrate the line height.
              </p>
              <p className="leading-tight">
                leading-tight - Tight line height. This is a longer paragraph to
                demonstrate the line height.
              </p>
              <p className="leading-snug">
                leading-snug - Snug line height. This is a longer paragraph to
                demonstrate the line height.
              </p>
              <p className="leading-normal">
                leading-normal - Normal line height. This is a longer paragraph
                to demonstrate the line height.
              </p>
              <p className="leading-relaxed">
                leading-relaxed - Relaxed line height. This is a longer
                paragraph to demonstrate the line height.
              </p>
              <p className="leading-loose">
                leading-loose - Loose line height. This is a longer paragraph to
                demonstrate the line height.
              </p>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<p className="leading-none">No line height</p>
<p className="leading-tight">Tight line height</p>
<p className="leading-snug">Snug line height</p>
<p className="leading-normal">Normal line height</p>
<p className="leading-relaxed">Relaxed line height</p>
<p className="leading-loose">Loose line height</p>`}
          language="tsx"
        />
      </section>
    </div>
  );
}
