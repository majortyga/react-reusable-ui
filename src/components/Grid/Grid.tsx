import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Grid Component
 *
 * A flexible and responsive grid system that supports various layouts including:
 * - Responsive column layouts
 * - Masonry layouts
 * - Auto-fit layouts
 * - Custom gaps and spacing
 * - Column and row spanning
 *
 * @example
 * ```tsx
 * // Basic responsive grid
 * <Grid
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *     lg: 4,
 *   }}
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Grid>
 * ```
 *
 * @example
 * // Masonry layout with row spanning
 * <Grid
 *   masonry
 *   columns={{ xs: 1, sm: 2, md: 3 }}
 *   gap={{ x: "1.5rem", y: "1.5rem" }}
 * >
 *   <Col rowSpan={2}>
 *     <div>Tall Item</div>
 *   </Col>
 *   <Col>
 *     <div>Regular Item</div>
 *   </Col>
 * </Grid>
 * ```
 *
 * @example
 * // Auto-fit layout with custom styling
 * <Grid
 *   autoFit
 *   containerClassName="bg-gray-100"
 *   itemClassName="hover:scale-105"
 *   className="gap-6"
 * >
 *   <div>Auto Item 1</div>
 *   <div>Auto Item 2</div>
 * </Grid>
 * ```
 */

/**
 * Props for the Grid component.
 */
export type GridProps = {
  /** Child elements to be rendered in the grid */
  children: React.ReactNode;

  /**
   * Number of columns at different breakpoints.
   * @property {number} [xs] - Number of columns on extra small screens (default: 1)
   * @property {number} [sm] - Number of columns on small screens (default: 2)
   * @property {number} [md] - Number of columns on medium screens (default: 3)
   * @property {number} [lg] - Number of columns on large screens (default: 4)
   * @property {number} [xl] - Number of columns on extra large screens (default: 5)
   * @property {number} [2xl] - Number of columns on 2xl screens (default: 6)
   */
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };

  /**
   * Gap between grid items.
   * @property {string} [x] - Horizontal gap (default: '1rem')
   * @property {string} [y] - Vertical gap (default: '1rem')
   */
  gap?: {
    x?: string;
    y?: string;
  };

  /** Whether to automatically fit items based on container width */
  autoFit?: boolean;

  /** Height of automatically generated rows (default: 'auto') */
  autoRows?: string;

  /** Whether to use masonry layout */
  masonry?: boolean;

  /** Additional classes for the grid container */
  className?: string;

  /** Additional classes for grid items */
  itemClassName?: string;

  /** Additional classes for the outer container */
  containerClassName?: string;

  /** Callback fired when grid layout is complete */
  onLayoutComplete?: () => void;
};

/**
 * Props for the Col component.
 */
export type ColProps = {
  /** Child elements to be rendered in the column */
  children: React.ReactNode;

  /**
   * Column span at different breakpoints.
   * @property {number} [xs] - Column span on extra small screens
   * @property {number} [sm] - Column span on small screens
   * @property {number} [md] - Column span on medium screens
   * @property {number} [lg] - Column span on large screens
   * @property {number} [xl] - Column span on extra large screens
   * @property {number} [2xl] - Column span on 2xl screens
   */
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };

  /** Number of rows to span */
  rowSpan?: number;

  /** Additional classes for the column */
  className?: string;
};

const Col: React.FC<ColProps> = ({ children, span, rowSpan, className }) => {
  const colStyles = useMemo(() => {
    const spanStyles = `
      ${span?.xs ? `col-span-${span.xs}` : "col-span-1"}
      ${span?.sm ? `sm:col-span-${span.sm}` : ""}
      ${span?.md ? `md:col-span-${span.md}` : ""}
      ${span?.lg ? `lg:col-span-${span.lg}` : ""}
      ${span?.xl ? `xl:col-span-${span.xl}` : ""}
      ${span?.["2xl"] ? `2xl:col-span-${span["2xl"]}` : ""}
      ${rowSpan ? `row-span-${rowSpan}` : ""}
    `
      .replace(/\s+/g, " ")
      .trim();

    return twMerge(spanStyles, className);
  }, [span, rowSpan, className]);

  return <div className={colStyles}>{children}</div>;
};

/**
 * Grid Component
 *
 * A flexible grid component that supports:
 * - Responsive column layouts
 * - Masonry layout
 * - Auto-fit layouts
 * - Custom gaps
 * - Column spanning
 *
 * @example
 * // Basic usage with responsive columns
 * <Grid
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *     lg: 4,
 *   }}
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   <div className="col-span-1">Item 1</div>
 *   <div className="col-span-2">Item 2</div>
 * </Grid>
 *
 * @example
 * // Masonry layout
 * <Grid
 *   masonry
 *   columns={{
 *     xs: 1,
 *     sm: 2,
 *     md: 3,
 *   }}
 * >
 *   {items.map(item => (
 *     <div key={item.id}>{item.content}</div>
 *   ))}
 * </Grid>
 *
 * @example
 * // Auto-fit layout
 * <Grid
 *   autoFit
 *   gap={{ x: "1rem", y: "1rem" }}
 * >
 *   {items.map(item => (
 *     <div key={item.id}>{item.content}</div>
 *   ))}
 * </Grid>
 */
const Grid: React.FC<GridProps> = ({
  children,
  columns = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    "2xl": 6,
  },
  gap = {
    x: "1rem",
    y: "1rem",
  },
  autoFit = false,
  autoRows = "auto",
  masonry = false,
  className,
  itemClassName,
  containerClassName,
  onLayoutComplete,
}) => {
  // Generate grid styles based on props
  const gridStyles = useMemo(() => {
    // Base grid styles
    const baseStyles = "grid w-full";

    // Gap styles
    const gapStyles = `gap-x-[${gap.x}] gap-y-[${gap.y}]`;

    // Auto-fit styles for dynamic column sizing
    const autoFitStyles = autoFit
      ? "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
      : "";

    // Masonry layout styles
    const masonryStyles = masonry ? "grid-flow-row-dense" : "";

    // Responsive column styles
    const columnStyles = !autoFit
      ? `
        ${columns.xs ? `grid-cols-${columns.xs}` : "grid-cols-1"}
        ${columns.sm ? `sm:grid-cols-${columns.sm}` : ""}
        ${columns.md ? `md:grid-cols-${columns.md}` : ""}
        ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""}
        ${columns.xl ? `xl:grid-cols-${columns.xl}` : ""}
        ${columns["2xl"] ? `2xl:grid-cols-${columns["2xl"]}` : ""}
      `
          .replace(/\s+/g, " ")
          .trim()
      : "";

    // Merge all styles
    return twMerge(
      baseStyles,
      gapStyles,
      autoFitStyles,
      masonryStyles,
      columnStyles,
      className
    );
  }, [columns, gap, autoFit, masonry, className]);

  // Container styles
  const containerStyles = useMemo(() => {
    return twMerge("w-full", containerClassName);
  }, [containerClassName]);

  // Item styles
  const itemStyles = useMemo(() => {
    return twMerge("w-full", itemClassName);
  }, [itemClassName]);

  // Handle layout completion callback
  React.useEffect(() => {
    if (onLayoutComplete) {
      const resizeObserver = new ResizeObserver(() => {
        onLayoutComplete();
      });

      const container = document.querySelector(
        `.${containerStyles.split(" ")[0]}`
      );
      if (container) {
        resizeObserver.observe(container);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [onLayoutComplete, containerStyles]);

  return (
    <div className={containerStyles}>
      <div className={gridStyles} style={{ gridAutoRows: autoRows }}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          const element = child as React.ReactElement<{ className?: string }>;

          // Don't wrap elements that are already Col components
          if (element.type === Col) {
            return element;
          }

          // Wrap other elements in a grid item container
          return (
            <div className={itemStyles}>
              {React.cloneElement(element, {
                ...element.props,
                className: twMerge(element.props.className, "h-full"),
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Col };
export default Grid;
