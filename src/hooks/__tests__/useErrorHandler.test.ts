import { renderHook, act } from "@testing-library/react";
import { useErrorHandler } from "../useErrorHandler";

// Mock console.error to avoid noise in tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe("useErrorHandler", () => {
  it("should return a function", () => {
    const { result } = renderHook(() => useErrorHandler());

    expect(typeof result.current).toBe("function");
  });

  it("should throw error when handleError is called with Error object", () => {
    const { result } = renderHook(() => useErrorHandler());

    expect(() => {
      act(() => {
        result.current(new Error("Test error"));
      });
    }).toThrow("Test error");
  });

  it("should throw error when handleError is called with string", () => {
    const { result } = renderHook(() => useErrorHandler());

    expect(() => {
      act(() => {
        result.current("String error");
      });
    }).toThrow("String error");
  });

  it("should handle multiple error calls", () => {
    const { result } = renderHook(() => useErrorHandler());

    expect(() => {
      act(() => {
        result.current("First error");
      });
    }).toThrow("First error");

    // Create a new hook instance for the second test
    const { result: result2 } = renderHook(() => useErrorHandler());

    expect(() => {
      act(() => {
        result2.current("Second error");
      });
    }).toThrow("Second error");
  });
});
