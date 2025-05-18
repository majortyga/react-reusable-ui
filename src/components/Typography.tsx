import React from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "blockquote";

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  align?: "left" | "center" | "right" | "justify";
  decoration?:
    | "underline"
    | "line-through"
    | "no-underline"
    | "dotted"
    | "dashed"
    | "double";
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  className?: string;
  children: React.ReactNode;
}

const variantMap = {
  h1: "text-3xl font-bold",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-semibold",
  h4: "text-lg font-semibold",
  h5: "text-base font-semibold",
  h6: "text-sm font-semibold",
  p: "text-base",
  span: "text-base",
  blockquote: "border-l-4 pl-4 italic text-gray-600 dark:text-gray-400",
};

const weightMap = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const decorationMap = {
  underline: "underline",
  "line-through": "line-through",
  "no-underline": "no-underline",
  dotted: "underline decoration-dotted",
  dashed: "underline decoration-dashed",
  double: "underline decoration-double",
};

const lineHeightMap = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};

export default function Typography({
  variant = "p",
  weight,
  align,
  decoration,
  lineHeight,
  className = "",
  children,
}: TypographyProps) {
  const Tag: string = variant;
  const classes = [
    variantMap[variant],
    weight ? weightMap[weight] : undefined,
    align ? alignMap[align] : undefined,
    decoration ? decorationMap[decoration] : undefined,
    lineHeight ? lineHeightMap[lineHeight] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return React.createElement(Tag, { className: classes }, children);
}
