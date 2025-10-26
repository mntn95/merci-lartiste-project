import { renderHook } from "@testing-library/react";
import { useMediaQuery } from "../useMediaQuery";

// Mock window.matchMedia
const createMatchMedia = (matches: boolean) =>
  jest.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

describe("useMediaQuery", () => {
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

  it("should handle different media queries", () => {
    window.matchMedia = createMatchMedia(true);
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));

    expect(result.current).toBe(true);
  });
});
