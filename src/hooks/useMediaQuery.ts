import { useState, useEffect } from "react";

/**
 * Custom hook to detect media query matches
 * Replaces @mui/material useMediaQuery
 *
 * @param query - Media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the media query matches
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    // Check if window is available (SSR safety)
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    // Create media query list
    const mediaQueryList = window.matchMedia(query);

    // Update state when media query changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Add listener (modern browsers)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", handleChange);
      } else {
        // Fallback for older browsers
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};


