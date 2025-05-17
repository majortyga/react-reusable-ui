/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IconType } from "react-icons";

/**
 * Props for the Card component.
 *
 * @property {React.ReactNode} [title] - The card title.
 * @property {React.ReactNode} [subtitle] - The card subtitle.
 * @property {IconType} [icon] - Optional icon component.
 * @property {React.ReactNode} [children] - Card content.
 * @property {React.ReactNode} [footer] - Card footer content.
 * @property {"default" | "bordered" | "elevated" | "news"} [variant] - Card style variant.
 * @property {string} [className] - Additional class for the card container.
 * @property {string} [headerClassName] - Additional class for the card header.
 * @property {string} [bodyClassName] - Additional class for the card body.
 * @property {string} [footerClassName] - Additional class for the card footer.
 * @property {() => void} [onClick] - Click handler for the card.
 * @property {object} [image] - Image settings for the card.
 * @property {"scale" | "lift" | "glow" | "none"} [hoverEffect] - Hover effect style.
 * @property {boolean} [loading] - Show loading state.
 * @property {boolean} [skeleton] - Show skeleton placeholder.
 * @property {object} [metadata] - News card metadata (time, category, author, comments, views).
 * @property {string} [link] - Optional link for the card (news variant).
 */
export interface CardProps {
  /** The card title. */
  title?: React.ReactNode;
  /** The card subtitle. */
  subtitle?: React.ReactNode;
  /** Optional icon component. */
  icon?: IconType;
  /** Card content. */
  children?: React.ReactNode;
  /** Card footer content. */
  footer?: React.ReactNode;
  /** Card style variant. */
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
   * @property {string} src - Image source URL.
   * @property {string} [alt] - Image alt text.
   * @property {"top" | "bottom" | "left" | "right"} [position] - Image position.
   * @property {"square" | "video" | "auto"} [aspectRatio] - Image aspect ratio.
   * @property {boolean} [overlay] - Show overlay on image.
   */
  image?: {
    src: string;
    alt?: string;
    position?: "top" | "bottom" | "left" | "right";
    aspectRatio?: "square" | "video" | "auto";
    overlay?: boolean;
  };
  /** Hover effect style. */
  hoverEffect?: "scale" | "lift" | "glow" | "none";
  /** Show loading state. */
  loading?: boolean;
  /** Show skeleton placeholder. */
  skeleton?: boolean;
  /**
   * News card metadata.
   * @property {string} [time] - Time or date string.
   * @property {string} [category] - News category.
   * @property {string} [author] - Author name.
   * @property {number} [comments] - Number of comments.
   * @property {number} [views] - Number of views.
   */
  metadata?: {
    time?: string;
    category?: string;
    author?: string;
    comments?: number;
    views?: number;
  };
  /** Optional link for the card (news variant). */
  link?: string;
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
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "border border-gray-200 dark:border-gray-700";
      case "elevated":
        return "shadow-lg hover:shadow-xl transition-shadow duration-200";
      case "news":
        return "bg-white dark:bg-gray-800 overflow-hidden relative";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };

  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case "scale":
        return "transition-transform duration-200 hover:scale-105";
      case "lift":
        return "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";
      case "glow":
        return "transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]";
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

    return (
      <div className={getImageClasses()}>
        <img
          src={image.src}
          alt={image.alt || ""}
          className={`
            w-full h-full object-cover
            ${image.overlay ? "absolute inset-0" : ""}
          `}
          loading="lazy"
        />
        {image.overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        )}
      </div>
    );
  };

  const renderSkeleton = () => (
    <div className="animate-pulse">
      {image && (
        <div className={`${getImageClasses()} bg-gray-200 dark:bg-gray-700`} />
      )}
      <div className="p-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );

  const renderNewsMetadata = () => {
    if (!metadata) return null;

    return (
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-2">
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

  const renderCard = () => (
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
                  p-4 border-b border-gray-200 dark:border-gray-700
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
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {title}
                      </h3>
                    )}
                    {subtitle && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
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
                  p-4 border-t border-gray-200 dark:border-gray-700
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
