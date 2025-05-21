import React from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the container
   */
  children: React.ReactNode;

  /**
   * Maximum width of the container
   * @default "7xl"
   */
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full"
    | "none";

  /**
   * Padding configuration for different breakpoints
   * @default { x: "1rem", y: "1rem" }
   */
  padding?: {
    x?: string;
    y?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };

  /**
   * Whether to center the container horizontally
   * @default true
   */
  center?: boolean;

  /**
   * Whether to add a background color
   * @default false
   */
  withBackground?: boolean;

  /**
   * Background color opacity (0-100)
   * @default 50
   */
  backgroundOpacity?: number;

  /**
   * Whether to add a border
   * @default false
   */
  withBorder?: boolean;

  /**
   * Border color opacity (0-100)
   * @default 50
   */
  borderOpacity?: number;

  /**
   * Whether to add backdrop blur effect
   * @default false
   */
  withBlur?: boolean;

  /**
   * Blur intensity (sm, md, lg, xl, 2xl, 3xl)
   * @default "sm"
   */
  blurIntensity?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

  /**
   * Whether to add rounded corners
   * @default true
   */
  rounded?: boolean;

  /**
   * Border radius size (sm, md, lg, xl, 2xl, 3xl, full)
   * @default "xl"
   */
  roundedSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

  /**
   * Additional classes for the container
   */
  className?: string;

  /**
   * Additional classes for the inner wrapper
   */
  wrapperClassName?: string;
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
  none: "",
} as const;

const paddingMap = {
  "0": "p-0",
  "0.5": "p-0.5",
  "1": "p-1",
  "1.5": "p-1.5",
  "2": "p-2",
  "2.5": "p-2.5",
  "3": "p-3",
  "3.5": "p-3.5",
  "4": "p-4",
  "5": "p-5",
  "6": "p-6",
  "7": "p-7",
  "8": "p-8",
  "9": "p-9",
  "10": "p-10",
  "11": "p-11",
  "12": "p-12",
  "14": "p-14",
  "16": "p-16",
  "20": "p-20",
  "24": "p-24",
  "28": "p-28",
  "32": "p-32",
  "36": "p-36",
  "40": "p-40",
  "44": "p-44",
  "48": "p-48",
  "52": "p-52",
  "56": "p-56",
  "60": "p-60",
  "64": "p-64",
  "72": "p-72",
  "80": "p-80",
  "96": "p-96",
} as const;

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
  "3xl": "backdrop-blur-3xl",
} as const;

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
} as const;

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "7xl",
  padding = { x: "1rem", y: "1rem" },
  center = true,
  withBackground = false,
  backgroundOpacity = 50,
  withBorder = false,
  borderOpacity = 50,
  withBlur = false,
  blurIntensity = "sm",
  rounded = true,
  roundedSize = "xl",
  className,
  wrapperClassName,
  ...props
}) => {
  // Generate max-width class
  const maxWidthClass = maxWidthMap[maxWidth];

  // Generate padding classes
  const paddingClasses = [
    padding.x && `px-${padding.x}`,
    padding.y && `py-${padding.y}`,
    padding.top && `pt-${padding.top}`,
    padding.right && `pr-${padding.right}`,
    padding.bottom && `pb-${padding.bottom}`,
    padding.left && `pl-${padding.left}`,
  ].filter(Boolean);

  // Generate background classes
  const backgroundClasses = withBackground
    ? [
        `bg-white/5 dark:bg-[#11235a]/${backgroundOpacity}`,
        withBlur && blurMap[blurIntensity],
      ].filter(Boolean)
    : [];

  // Generate border classes
  const borderClasses = withBorder
    ? [`border border-gray-200/20 dark:border-gray-700/${borderOpacity}`]
    : [];

  // Generate rounded classes
  const roundedClasses = rounded ? [roundedMap[roundedSize]] : [];

  // Combine all classes
  const containerClasses = twMerge(
    "w-full",
    maxWidthClass,
    center && "mx-auto",
    ...paddingClasses,
    ...backgroundClasses,
    ...borderClasses,
    ...roundedClasses,
    className
  );

  const wrapperClasses = twMerge("w-full", wrapperClassName);

  return (
    <div className={containerClasses} {...props}>
      <div className={wrapperClasses}>{children}</div>
    </div>
  );
};

export default Container;
