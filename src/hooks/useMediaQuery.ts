import { useState, useEffect } from "react";

export type BreakpointKey = keyof typeof breakpoints;
export type DeviceKey = keyof typeof devices;

export type BreakpointQuery = (typeof breakpoints)[BreakpointKey];
export type DeviceQuery = (typeof devices)[DeviceKey];

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

// Common breakpoint queries
export const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

// Common device queries
export const devices = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  touch: "(hover: none) and (pointer: coarse)",
  mouse: "(hover: hover) and (pointer: fine)",
} as const;
