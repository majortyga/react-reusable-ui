/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IconType } from "react-icons";

/**
 * Card Component
 *
 * A versatile card component that supports various styles, layouts, and interactive features.
 *
 * @example
 * ```tsx
 * <Card
 *   title="Card Title"
 *   subtitle="Card Subtitle"
 *   icon={HiUser}
 *   variant="bordered"
 *   hoverEffect="lift"
 * >
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */

/**
 * Props for the Card component.
 */
export interface CardProps {
  /** The card title. Can be any valid React node. */
  title?: React.ReactNode;

  /** The card subtitle. Can be any valid React node. */
  subtitle?: React.ReactNode;

  /** Optional icon component from react-icons. */
  icon?: IconType;

  /** Card content. Can be any valid React node. */
  children?: React.ReactNode;

  /** Card footer content. Can be any valid React node. */
  footer?: React.ReactNode;

  /**
   * Card style variant.
   * - "default": Basic card with white background
   * - "bordered": Card with border
   * - "elevated": Card with shadow and hover effect
   * - "news": Special layout for news articles with metadata
   */
  variant?: "default" | "bordered" | "elevated" | "news";

  /** Additional class for the card container. */
  className?: string;

  /** Additional class for the card header. */
  headerClassName?: string;

  /** Additional class for the card body. */
  bodyClassName?: string;

  /** Additional class for the card footer. */
  footerClassName?: string;

  /** Click handler for the card. */
  onClick?: () => void;

  /**
   * Image settings for the card.
   * @property {string} src - Image source URL
   * @property {string} [alt] - Image alt text
   * @property {"top" | "bottom" | "left" | "right"} [position] - Image position
   * @property {"square" | "video" | "auto"} [aspectRatio] - Image aspect ratio
   * @property {boolean} [overlay] - Show overlay on image
   * @property {string} [overlayColor] - Color of the overlay
   */
  image?: {
    src: string;
    alt?: string;
    position?: "top" | "bottom" | "left" | "right";
    aspectRatio?: "square" | "video" | "auto";
    overlay?: boolean;
    overlayColor?: string;
  };

  /**
   * Hover effect style.
   * - "scale": Card scales up on hover
   * - "lift": Card lifts up with shadow on hover
   * - "glow": Card glows with custom color on hover
   * - "none": No hover effect
   */
  hoverEffect?: "scale" | "lift" | "glow" | "none";

  /** Show loading state with skeleton animation. */
  loading?: boolean;

  /** Show skeleton placeholder instead of content. */
  skeleton?: boolean;

  /**
   * News card metadata.
   * @property {string} [time] - Time or date string
   * @property {string} [category] - News category
   * @property {string} [author] - Author name
   * @property {number} [comments] - Number of comments
   * @property {number} [views] - Number of views
   */
  metadata?: {
    time?: string;
    category?: string;
    author?: string;
    comments?: number;
    views?: number;
  };

  /** Optional link for the card (news variant). Makes the entire card clickable. */
  link?: string;

  /**
   * Custom colors for the card.
   * @property {string} [bg] - Background color class
   * @property {string} [text] - Text color class
   * @property {string} [border] - Border color class
   * @property {string} [headerBg] - Header background color class
   * @property {string} [headerText] - Header text color class
   * @property {string} [headerBorder] - Header border color class
   * @property {string} [footerBg] - Footer background color class
   * @property {string} [footerText] - Footer text color class
   * @property {string} [footerBorder] - Footer border color class
   * @property {string} [overlay] - Image overlay color (rgba)
   * @property {string} [hover] - Hover effect color (rgba)
   * @property {string} [skeleton] - Skeleton loading color class
   */
  colors?: {
    bg?: string;
    text?: string;
    border?: string;
    headerBg?: string;
    headerText?: string;
    headerBorder?: string;
    footerBg?: string;
    footerText?: string;
    footerBorder?: string;
    overlay?: string;
    hover?: string;
    skeleton?: string;
  };
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  variant = "default",
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = "",
  onClick,
  image,
  hoverEffect = "none",
  loading = false,
  skeleton = false,
  metadata,
  link,
  colors = {},
}) => {
  const getVariantClasses = () => {
    const baseClasses = {
      bg: colors.bg || "bg-white dark:bg-gray-800",
      border: colors.border || "border-gray-200 dark:border-gray-700",
      text: colors.text || "text-gray-900 dark:text-white",
    };

    switch (variant) {
      case "bordered":
        return `border ${baseClasses.border}`;
      case "elevated":
        return `${baseClasses.bg} shadow-lg hover:shadow-xl transition-shadow duration-200`;
      case "news":
        return `${baseClasses.bg} overflow-hidden relative`;
      default:
        return baseClasses.bg;
    }
  };

  const getHoverEffectClasses = () => {
    const hoverColor = colors.hover || "rgba(0,0,0,0.1)";

    switch (hoverEffect) {
      case "scale":
        return "transition-transform duration-200 hover:scale-105";
      case "lift":
        return "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";
      case "glow":
        return `transition-all duration-200 hover:shadow-[0_0_15px_${hoverColor}]`;
      default:
        return "";
    }
  };

  const getImageClasses = () => {
    if (!image) return "";

    const aspectRatioClasses = {
      square: "aspect-square",
      video: "aspect-video",
      auto: "aspect-auto",
    };

    const positionClasses = {
      top: "w-full",
      bottom: "w-full order-last",
      left: "w-full md:w-1/3",
      right: "w-full md:w-1/3 order-last",
    };

    return `
      ${aspectRatioClasses[image.aspectRatio || "auto"]}
      ${positionClasses[image.position || "top"]}
      ${image.overlay ? "relative" : ""}
    `;
  };

  const renderImage = () => {
    if (!image) return null;

    const overlayColor =
      image.overlayColor || colors.overlay || "rgba(0,0,0,0.4)";

    return (
      <div className={getImageClasses()}>
        <img
          src={image.src}
          alt={image.alt || ""}
          className={`
            w-full h-full object-cover
            ${image.overlay ? "absolute inset-0 z-50" : ""}
          `}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EImage not found%3C/text%3E%3C/svg%3E`;
          }}
        />
        {image.overlay && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor }}
          />
        )}
      </div>
    );
  };

  const renderSkeleton = () => {
    const skeletonColor = colors.skeleton || "bg-gray-200 dark:bg-gray-700";

    return (
      <div className="animate-pulse">
        {image && <div className={`${getImageClasses()} ${skeletonColor}`} />}
        <div className="p-4">
          <div className={`h-4 ${skeletonColor} rounded w-3/4 mb-2`} />
          <div className={`h-3 ${skeletonColor} rounded w-1/2`} />
        </div>
      </div>
    );
  };

  const renderNewsMetadata = () => {
    if (!metadata) return null;

    const textColor = colors.text || "text-gray-500 dark:text-gray-400";

    return (
      <div
        className={`flex flex-wrap items-center gap-3 text-sm ${textColor} mt-2`}
      >
        {metadata.category && (
          <span className="px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
            {metadata.category}
          </span>
        )}
        <div className="flex flex-wrap items-center gap-3">
          {metadata.time && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {metadata.time}
            </span>
          )}
          {metadata.author && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {metadata.author}
            </span>
          )}
          {metadata.comments !== undefined && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {metadata.comments}
            </span>
          )}
          {metadata.views !== undefined && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {metadata.views}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderNewsCard = () => (
    <div className="flex flex-col">
      <div className="relative">
        {renderImage()}
        {metadata?.category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded">
              {metadata.category}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        {title && (
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        {renderNewsMetadata()}
        {children && <div className={`mt-4 ${bodyClassName}`}>{children}</div>}
      </div>
    </div>
  );

  const renderCard = () => {
    const headerBg = colors.headerBg || "bg-white dark:bg-gray-800";
    const headerText = colors.headerText || "text-gray-900 dark:text-white";
    const headerBorder =
      colors.headerBorder || "border-gray-200 dark:border-gray-700";
    const footerBg = colors.footerBg || "bg-white dark:bg-gray-800";
    const footerText = colors.footerText || "text-gray-900 dark:text-white";
    const footerBorder =
      colors.footerBorder || "border-gray-200 dark:border-gray-700";

    return (
      <div
        className={`
          rounded-lg 
          ${getVariantClasses()}
          ${getHoverEffectClasses()}
          ${onClick ? "cursor-pointer" : ""}
          ${isHorizontal ? "flex flex-col md:flex-row" : ""}
          ${className}
        `}
        onClick={onClick}
      >
        {isNewsCard ? (
          renderNewsCard()
        ) : (
          <>
            {image?.position === "top" && renderImage()}
            {image?.position === "left" && renderImage()}
            <div className="flex-1">
              {(title || subtitle || Icon) && (
                <div
                  className={`
                    p-4 border-b ${headerBorder} ${headerBg}
                    ${headerClassName}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="flex-shrink-0">
                        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      {title && (
                        <h3 className={`text-lg font-medium ${headerText}`}>
                          {title}
                        </h3>
                      )}
                      {subtitle && (
                        <p
                          className={`mt-1 text-sm ${
                            colors.text || "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className={`p-4 ${bodyClassName}`}>{children}</div>
              {footer && (
                <div
                  className={`
                    p-4 border-t ${footerBorder} ${footerBg}
                    ${footerClassName}
                  `}
                >
                  {footer}
                </div>
              )}
            </div>
            {image?.position === "right" && renderImage()}
            {image?.position === "bottom" && renderImage()}
          </>
        )}
      </div>
    );
  };

  if (loading || skeleton) {
    return renderSkeleton();
  }

  const isNewsCard = variant === "news";
  const isHorizontal =
    image?.position === "left" || image?.position === "right";

  if (isNewsCard && link) {
    return (
      <a
        href={link}
        className="block hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderCard()}
      </a>
    );
  }

  return renderCard();
};

export default Card;
