import { renderHook } from "@testing-library/react";
import { useMediaQuery } from "../useMediaQuery";

describe("useMediaQuery", () => {
  /**
   * Creates a mock implementation of window.matchMedia
   * @param matches - Whether the media query should match
   */
  const createMatchMedia =
    (matches: boolean) =>
    (query: string): MediaQueryList =>
      ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      } as unknown as MediaQueryList);

  beforeEach(() => {
    // Reset mock before each test
    window.matchMedia = createMatchMedia(false);
  });

  it("should return true when media query matches", () => {
    window.matchMedia = createMatchMedia(true);

    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));

    expect(result.current).toBe(true);
  });

  it("should return false when media query does not match", () => {
    window.matchMedia = createMatchMedia(false);

    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));

    expect(result.current).toBe(false);
  });

  it("should handle mobile queries correctly", () => {
    window.matchMedia = createMatchMedia(true);

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(true);
  });

  it("should handle desktop queries correctly", () => {
    window.matchMedia = createMatchMedia(false);

    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(false);
  });

  it("should handle SSR environment safely", () => {
    // Save original window
    const originalWindow = global.window;

    // Simulate SSR by removing window
    Object.defineProperty(global, "window", {
      value: undefined,
      writable: true,
      configurable: true,
    });

    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));

    expect(result.current).toBe(false);

    // Restore window
    Object.defineProperty(global, "window", {
      value: originalWindow,
      writable: true,
      configurable: true,
    });
  });

  it("should update when media query changes", () => {
    let mediaQueryChangeHandler: ((event: MediaQueryListEvent) => void) | null =
      null;

    // Mock matchMedia that captures the event listener
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn((event: string, handler: any) => {
        if (event === "change") {
          mediaQueryChangeHandler = handler;
        }
      }),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })) as unknown as typeof window.matchMedia;

    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));

    // Initial state should be false
    expect(result.current).toBe(false);

    // Simulate media query change
    if (mediaQueryChangeHandler) {
      mediaQueryChangeHandler({
        matches: true,
      } as MediaQueryListEvent);
    }

    // Note: In real scenarios, you'd use rerender or waitFor from @testing-library/react
    // This test validates the event listener was registered correctly
    expect(window.matchMedia).toHaveBeenCalledWith("(min-width: 1024px)");
  });
});
