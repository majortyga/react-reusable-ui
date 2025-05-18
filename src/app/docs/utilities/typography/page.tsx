"use client";
import React from "react";
import Card from "@/components/Card/Card";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import Typography from "@/components/Typography";

export default function TypographyDocs() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1">Typography</Typography>
        <Typography className="mt-2 text-gray-600 dark:text-gray-400">
          A comprehensive typography system for consistent text styling.
        </Typography>
      </div>

      {/* Features */}
      <section className="space-y-4">
        <Typography variant="h2">Features</Typography>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            Supports all heading levels (h1-h6), paragraphs, spans, and
            blockquotes
          </li>
          <li>
            Font weight utility (thin, extralight, light, normal, medium,
            semibold, bold, extrabold, black)
          </li>
          <li>Text alignment (left, center, right, justify)</li>
          <li>
            Text decoration (underline, line-through, no-underline, dotted,
            dashed, double)
          </li>
          <li>
            Line height utility (none, tight, snug, normal, relaxed, loose)
          </li>
          <li>Custom className for additional styling</li>
          <li>Composable and type-safe API</li>
        </ul>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <Typography variant="h2">Font Sizes</Typography>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography className="text-xs">text-xs - Extra Small</Typography>
              <Typography className="text-sm">text-sm - Small</Typography>
              <Typography className="text-base">text-base - Base</Typography>
              <Typography className="text-lg">text-lg - Large</Typography>
              <Typography className="text-xl">text-xl - Extra Large</Typography>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography className="text-xs">Extra Small</Typography>
<Typography className="text-sm">Small</Typography>
<Typography className="text-base">Base</Typography>
<Typography className="text-lg">Large</Typography>
<Typography className="text-xl">Extra Large</Typography>
`}
          language="tsx"
        />
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <Typography variant="h2">Font Weights</Typography>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography weight="thin">font-thin - Thin</Typography>
              <Typography weight="extralight">
                font-extralight - Extra Light
              </Typography>
              <Typography weight="light">font-light - Light</Typography>
              <Typography weight="normal">font-normal - Normal</Typography>
              <Typography weight="medium">font-medium - Medium</Typography>
              <Typography weight="semibold">
                font-semibold - Semi Bold
              </Typography>
              <Typography weight="bold">font-bold - Bold</Typography>
              <Typography weight="extrabold">
                font-extrabold - Extra Bold
              </Typography>
              <Typography weight="black">font-black - Black</Typography>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography weight="thin">Thin</Typography>
<Typography weight="extralight">Extra Light</Typography>
<Typography weight="light">Light</Typography>
<Typography weight="normal">Normal</Typography>
<Typography weight="medium">Medium</Typography>
<Typography weight="semibold">Semi Bold</Typography>
<Typography weight="bold">Bold</Typography>
<Typography weight="extrabold">Extra Bold</Typography>
<Typography weight="black">Black</Typography>`}
          language="tsx"
        />
      </section>

      {/* Text Alignment */}
      <section className="space-y-4">
        <Typography variant="h2">Text Alignment</Typography>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography align="left">
                text-left - Left aligned text
              </Typography>
              <Typography align="center">
                text-center - Center aligned text
              </Typography>
              <Typography align="right">
                text-right - Right aligned text
              </Typography>
              <Typography align="justify">
                text-justify - Justified text. This is a longer paragraph to
                demonstrate text justification. The text will be spread out to
                fill the width of the container.
              </Typography>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography align="left">Left aligned text</Typography>
<Typography align="center">Center aligned text</Typography>
<Typography align="right">Right aligned text</Typography>
<Typography align="justify">Justified text</Typography>`}
          language="tsx"
        />
      </section>

      {/* Text Decoration */}
      <section className="space-y-4">
        <Typography variant="h2">Text Decoration</Typography>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography decoration="underline">
                underline - Underlined text
              </Typography>
              <Typography decoration="line-through">
                line-through - Strikethrough text
              </Typography>
              <Typography decoration="no-underline">
                no-underline - No decoration
              </Typography>
              <Typography decoration="dotted">
                decoration-dotted - Dotted underline
              </Typography>
              <Typography decoration="dashed">
                decoration-dashed - Dashed underline
              </Typography>
              <Typography decoration="double">
                decoration-double - Double underline
              </Typography>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography decoration="underline">Underlined text</Typography>
<Typography decoration="line-through">Strikethrough text</Typography>
<Typography decoration="no-underline">No decoration</Typography>
<Typography decoration="dotted">Dotted underline</Typography>
<Typography decoration="dashed">Dashed underline</Typography>
<Typography decoration="double">Double underline</Typography>`}
          language="tsx"
        />
      </section>

      {/* Line Height */}
      <section className="space-y-4">
        <Typography variant="h2">Line Height</Typography>
        <Card>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography lineHeight="none">
                leading-none - No line height. This is a longer paragraph to
                demonstrate the line height.
              </Typography>
              <Typography lineHeight="tight">
                leading-tight - Tight line height. This is a longer paragraph to
                demonstrate the line height.
              </Typography>
              <Typography lineHeight="snug">
                leading-snug - Snug line height. This is a longer paragraph to
                demonstrate the line height.
              </Typography>
              <Typography lineHeight="normal">
                leading-normal - Normal line height. This is a longer paragraph
                to demonstrate the line height.
              </Typography>
              <Typography lineHeight="relaxed">
                leading-relaxed - Relaxed line height. This is a longer
                paragraph to demonstrate the line height.
              </Typography>
              <Typography lineHeight="loose">
                leading-loose - Loose line height. This is a longer paragraph to
                demonstrate the line height.
              </Typography>
            </div>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography lineHeight="none">No line height</Typography>
<Typography lineHeight="tight">Tight line height</Typography>
<Typography lineHeight="snug">Snug line height</Typography>
<Typography lineHeight="normal">Normal line height</Typography>
<Typography lineHeight="relaxed">Relaxed line height</Typography>
<Typography lineHeight="loose">Loose line height</Typography>`}
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <Typography variant="h2">Variants</Typography>
        <Card>
          <div className="space-y-2">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="p">Paragraph text</Typography>
            <Typography variant="span">Inline span text</Typography>
            <Typography variant="blockquote">Blockquote text</Typography>
          </div>
        </Card>
        <CodeBlock
          code={`<Typography variant='h1'>Heading 1</Typography>
<Typography variant='h2'>Heading 2</Typography>
<Typography variant='h3'>Heading 3</Typography>
<Typography variant='h4'>Heading 4</Typography>
<Typography variant='h5'>Heading 5</Typography>
<Typography variant='h6'>Heading 6</Typography>
<Typography variant='p'>Paragraph text</Typography>
<Typography variant='span'>Inline span text</Typography>
<Typography variant='blockquote'>Blockquote text</Typography>`}
          language="tsx"
        />
      </section>
    </div>
  );
}
