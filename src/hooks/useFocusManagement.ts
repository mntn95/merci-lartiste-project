import { useCallback, useRef } from "react";

/**
 * Custom hook to manage focus for accessibility
 * Provides utilities to trap focus and manage focus restoration
 *
 * @returns Object with focus management utilities
 *
 */
export const useFocusManagement = () => {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  /**
   * Save the currently focused element
   */
  const saveFocus = useCallback(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;
  }, []);

  /**
   * Restore focus to the previously focused element
   */
  const restoreFocus = useCallback(() => {
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
      previousActiveElement.current = null;
    }
  }, []);

  /**
   * Focus the first focusable element within a container
   */
  const focusFirstElement = useCallback((container: HTMLElement | null) => {
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    if (firstElement) {
      firstElement.focus();
    }
  }, []);

  /**
   * Trap focus within a container (useful for modals)
   */
  const trapFocus = useCallback((container: HTMLElement | null) => {
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    // Focus first element
    if (firstElement) {
      firstElement.focus();
    }

    // Return cleanup function
    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /**
   * Set ARIA attributes for better accessibility
   */
  const setAriaAttributes = useCallback(
    (
      element: HTMLElement | null,
      attributes: Record<string, string | boolean>
    ) => {
      if (!element) return;

      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, String(value));
      });
    },
    []
  );

  /**
   * Announce text to screen readers
   */
  const announceToScreenReader = useCallback((text: string) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = text;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return {
    saveFocus,
    restoreFocus,
    focusFirstElement,
    trapFocus,
    setAriaAttributes,
    announceToScreenReader,
  };
};
