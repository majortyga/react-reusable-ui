import React, { useState, useEffect, useCallback, useRef } from "react";

// Animation types for the carousel transitions
/**
 * The type of animation used for carousel transitions.
 * - 'slide': Horizontal sliding animation.
 * - 'fade': Cross-fade between slides.
 * - 'zoom': Zoom in/out effect.
 * - 'flip': 3D flip animation.
 * - 'cube': 3D cube rotation.
 */
export type AnimationType = "slide" | "fade" | "zoom" | "flip" | "cube";

/**
 * The position of the caption overlay on the slide.
 * - 'top', 'bottom', 'left', 'right', 'center', 'overlay'
 */
export type CaptionPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "overlay";

/**
 * Props for the Carousel component.
 */
export interface CarouselProps {
  /** Array of slides to display */
  children: React.ReactNode[];
  /** Enable automatic slide transition */
  autoPlay?: boolean;
  /** Time between automatic transitions in milliseconds */
  interval?: number;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show navigation dots */
  showDots?: boolean;
  /** Enable infinite loop */
  infinite?: boolean;
  /** Additional class for the carousel container */
  className?: string;
  /** Additional class for each slide */
  slideClassName?: string;
  /** Additional class for arrow buttons */
  arrowClassName?: string;
  /** Additional class for dot indicators */
  dotClassName?: string;
  /** Callback when the slide changes */
  onSlideChange?: (index: number) => void;
  /** Animation type for transitions */
  animation?: AnimationType;
  /** Show slide captions */
  showCaption?: boolean;
  /** Position of slide captions */
  captionPosition?: CaptionPosition;
  /** Show thumbnail navigation */
  showThumbnails?: boolean;
  /** Position of thumbnails */
  thumbnailPosition?: "top" | "bottom" | "left" | "right";
  /** Show progress bar */
  showProgress?: boolean;
  /** Pause autoplay on hover */
  pauseOnHover?: boolean;
  /** Show fullscreen toggle button */
  showFullscreen?: boolean;
  /** Show slide counter */
  showCounter?: boolean;
  /** Custom controls to render */
  customControls?: React.ReactNode;
  /** Custom indicators to render */
  customIndicators?: React.ReactNode;
  /** Custom arrow components */
  customArrows?: {
    prev?: React.ReactNode;
    next?: React.ReactNode;
  };
  /** Enable news-style layout */
  newsStyle?: boolean;
  /** Background color or class */
  background?: string;
  /** Show overlay on slides */
  overlay?: boolean;
  /** Opacity of the overlay */
  overlayOpacity?: number;
  /** Overlay color */
  overlayColor?: string;
  /** Transition speed in milliseconds */
  transitionSpeed?: number;
  /** Easing function for transitions */
  easing?: string;
}

/**
 * Props for an individual slide in the carousel.
 */
interface SlideProps {
  /** Optional caption for the slide */
  caption?: React.ReactNode;
  /** Additional class for the slide */
  className?: string;
  /** Inline style for the slide */
  style?: React.CSSProperties;
  /** Slide content */
  children?: React.ReactNode;
}

const isSlideWithProps = (
  slide: React.ReactNode
): slide is React.ReactElement<SlideProps> => {
  return React.isValidElement(slide) && "props" in slide;
};

// Add a default minHeight for the carousel container and slides
const DEFAULT_CAROUSEL_HEIGHT = 400;

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  infinite = true,
  className = "",
  slideClassName = "",
  arrowClassName = "",
  dotClassName = "",
  onSlideChange,
  animation = "slide",
  showCaption = false,
  captionPosition = "bottom",
  showThumbnails = false,
  thumbnailPosition = "bottom",
  showProgress = false,
  pauseOnHover = true,
  showFullscreen = false,
  showCounter = false,
  customControls,
  customIndicators,
  customArrows,
  newsStyle = false,
  background,
  overlay = false,
  overlayOpacity = 0.5,
  overlayColor = "black",
  transitionSpeed = 500,
  easing = "ease-in-out",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const slides = React.Children.toArray(children);

  const minSwipeDistance = 50;

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade":
        return "transition-all duration-500 will-change-opacity";
      case "zoom":
        return "transition-all duration-500 will-change-transform transform-gpu scale-100 hover:scale-105";
      case "flip":
        return "transition-all duration-500 will-change-transform transform-gpu perspective-1000";
      case "cube":
        return "transition-all duration-500 will-change-transform transform-gpu preserve-3d";
      default:
        return "transition-all duration-500 will-change-transform transform-gpu";
    }
  };

  const getCaptionClasses = () => {
    const baseClasses = "absolute p-4 text-white z-10";
    switch (captionPosition) {
      case "top":
        return `${baseClasses} top-0 left-0 right-0`;
      case "bottom":
        return `${baseClasses} bottom-0 left-0 right-0`;
      case "left":
        return `${baseClasses} left-0 top-1/2 -translate-y-1/2`;
      case "right":
        return `${baseClasses} right-0 top-1/2 -translate-y-1/2`;
      case "center":
        return `${baseClasses} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center`;
      case "overlay":
        return `${baseClasses} inset-0 flex items-center justify-center bg-black/50`;
      default:
        return baseClasses;
    }
  };

  const getThumbnailClasses = () => {
    const baseClasses =
      "flex gap-2 p-2 overflow-hidden max-w-[84vw] md:max-w-auto";
    switch (thumbnailPosition) {
      case "top":
        return `${baseClasses} flex-row mb-2`;
      case "bottom":
        return `${baseClasses} flex-row mt-2`;
      case "left":
        return `${baseClasses} flex-col mr-2`;
      case "right":
        return `${baseClasses} flex-col ml-2`;
      default:
        return baseClasses;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= slides.length) {
        return infinite ? 0 : prevIndex;
      }
      return nextIndex;
    });
  }, [slides.length, infinite]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - 1;
      if (prevIndexNew < 0) {
        return infinite ? slides.length - 1 : prevIndex;
      }
      return prevIndexNew;
    });
  }, [slides.length, infinite]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      carouselRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, nextSlide]);

  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "Escape" && isFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderCustomArrow = (direction: "prev" | "next") => {
    if (customArrows?.[direction]) {
      return customArrows[direction];
    }

    return (
      <button
        onClick={direction === "prev" ? prevSlide : nextSlide}
        className={`absolute ${
          direction === "prev" ? "left-2" : "right-2"
        } top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ${arrowClassName}`}
        aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {direction === "prev" ? (
            <path d="m15 18-6-6 6-6" />
          ) : (
            <path d="m9 18 6-6-6-6" />
          )}
        </svg>
      </button>
    );
  };

  const renderCustomIndicator = () => {
    if (customIndicators) {
      return customIndicators;
    }

    return (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } ${dotClassName}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    );
  };

  // Helper to extract the first <img> from a slide
  const extractImageFromSlide = (slide: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(slide)) {
      if (slide.type === "img") {
        // Only pass allowed props to <img>
        const imgProps =
          slide.props as React.ImgHTMLAttributes<HTMLImageElement>;
        return React.cloneElement(slide, {
          width: "100%",
          height: "100%",
          style: { ...(imgProps.style || {}), objectFit: "cover" },
          className: "w-full h-full object-cover",
        } as React.ImgHTMLAttributes<HTMLImageElement>);
      }
      // If slide has children, search recursively
      const props = slide.props as { children?: React.ReactNode };
      const children = props.children;
      if (children) {
        if (Array.isArray(children)) {
          for (const child of children) {
            const found = extractImageFromSlide(child);
            if (found) return found;
          }
        } else {
          const found = extractImageFromSlide(children);
          if (found) return found;
        }
      }
    }
    return null;
  };

  // Add useEffect to handle thumbnail scrolling
  useEffect(() => {
    if (showThumbnails && thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnails = container.children;
      const currentThumb = thumbnails[currentIndex] as HTMLElement;

      if (currentThumb) {
        const containerRect = container.getBoundingClientRect();
        const thumbRect = currentThumb.getBoundingClientRect();

        // Calculate scroll position
        let scrollLeft = 0;
        if (thumbnailPosition === "left" || thumbnailPosition === "right") {
          // Vertical scrolling
          scrollLeft =
            currentThumb.offsetTop -
            container.offsetHeight / 2 +
            currentThumb.offsetHeight / 2;
          container.scrollTo({
            top: scrollLeft,
            behavior: "smooth",
          });
        } else {
          // Horizontal scrolling
          scrollLeft =
            currentThumb.offsetLeft -
            container.offsetWidth / 2 +
            currentThumb.offsetWidth / 2;
          container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }
      }
    }
  }, [currentIndex, showThumbnails, thumbnailPosition]);

  const renderThumbnails = () => {
    if (!showThumbnails) return null;

    return (
      <div ref={thumbnailContainerRef} className={getThumbnailClasses()}>
        {slides.map((slide, index) => {
          const image = extractImageFromSlide(slide);
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 ${
                index === currentIndex
                  ? "ring-2 ring-blue-500"
                  : "opacity-70 hover:opacity-100"
              } transition-all duration-200`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {image ? (
                  image
                ) : (
                  <span className="text-gray-400 text-xs">No Image</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{
            width: `${((currentIndex + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    );
  };

  const renderCounter = () => {
    if (!showCounter) return null;

    return (
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {slides.length}
      </div>
    );
  };

  const renderFullscreenButton = () => {
    if (!showFullscreen) return null;

    return (
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isFullscreen ? (
            <>
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            </>
          ) : (
            <>
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </>
          )}
        </svg>
      </button>
    );
  };

  const renderSlide = (slide: React.ReactNode, index: number) => {
    const isActive = index === currentIndex;
    let style: React.CSSProperties = {};
    let slideClass = `w-full h-full min-h-[${DEFAULT_CAROUSEL_HEIGHT}px] ${slideClassName}`;

    if (animation === "slide") {
      slideClass += " flex-shrink-0";
      style = { minWidth: "100%" };
    } else if (animation === "fade" && isSlideWithProps(slide)) {
      style = {
        ...(slide.props.style || {}),
        opacity: isActive ? 1 : 0,
        transition: `opacity ${transitionSpeed}ms ${easing}`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        minHeight: DEFAULT_CAROUSEL_HEIGHT,
        zIndex: 1,
        objectFit: "cover",
      };
      slide = React.cloneElement(slide, { style });
      style = {
        zIndex: isActive ? 10 : 0,
        position: "relative",
        minHeight: DEFAULT_CAROUSEL_HEIGHT,
      };
    } else if (["cube", "flip", "zoom"].includes(animation)) {
      style = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: DEFAULT_CAROUSEL_HEIGHT,
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 0,
        pointerEvents: isActive ? "auto" : "none",
        transition: `all ${transitionSpeed}ms ${easing}`,
        ...(animation === "cube" && {
          transform: isActive
            ? "rotateY(0deg) translateZ(0)"
            : "rotateY(90deg) translateZ(-100px)",
          backfaceVisibility: "hidden",
        }),
        ...(animation === "flip" && {
          transform: isActive ? "rotateY(0deg)" : "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }),
        ...(animation === "zoom" && {
          transform: isActive ? "scale(1)" : "scale(0.95)",
        }),
      };
    }

    if (animation === "fade") {
      return (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full min-h-[400px]`}
          style={{
            opacity: isActive ? 1 : 0,
            zIndex: isActive ? 2 : 1,
            pointerEvents: isActive ? "auto" : "none",
            transition: `opacity ${transitionSpeed}ms ${easing}`,
          }}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${slides.length}`}
        >
          <div className="w-full h-full">{slide}</div>
          {showCaption && (
            <div
              className={getCaptionClasses()}
              style={{ zIndex: 3, position: "relative" }}
            >
              {isSlideWithProps(slide) && slide.props.caption}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={index}
        className={slideClass + (animation !== "slide" ? " absolute" : "")}
        style={style}
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} of ${slides.length}`}
      >
        {slide}
        {showCaption && (
          <div className={getCaptionClasses()} style={{}}>
            {isSlideWithProps(slide) && slide.props.caption}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={carouselRef}
      className={`
        relative w-full overflow-hidden min-h-[${DEFAULT_CAROUSEL_HEIGHT}px]
        ${newsStyle ? "rounded-lg shadow-lg" : ""}
        ${background ? `bg-${background}` : ""}
        ${className}
      `}
      style={{ minHeight: DEFAULT_CAROUSEL_HEIGHT }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Image carousel"
      tabIndex={0}
    >
      {renderProgress()}
      {renderCounter()}
      {renderFullscreenButton()}

      <div
        className={`
          w-full h-full min-h-[${DEFAULT_CAROUSEL_HEIGHT}px]
          ${animation === "slide" ? "flex" : "relative"}
          ${getAnimationClasses()}
        `}
        style={{
          height: animation !== "slide" ? "100%" : undefined,
          minHeight: DEFAULT_CAROUSEL_HEIGHT,
          perspective:
            animation === "cube" || animation === "flip" ? "1000px" : undefined,
          transformStyle: animation === "cube" ? "preserve-3d" : undefined,
          transform:
            animation === "slide"
              ? `translateX(-${currentIndex * 100}%)`
              : undefined,
          transition:
            animation === "slide"
              ? `transform ${transitionSpeed}ms ${easing}`
              : undefined,
        }}
      >
        {slides.map((slide, index) => renderSlide(slide, index))}
      </div>

      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {showArrows && (
        <>
          {renderCustomArrow("prev")}
          {renderCustomArrow("next")}
        </>
      )}

      {showDots && renderCustomIndicator()}
      {renderThumbnails()}
      {customControls}
    </div>
  );
};

export default Carousel;
