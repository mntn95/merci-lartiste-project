import { renderHook, act } from "@testing-library/react";
import { useFocusManagement } from "../useFocusManagement";

describe("useFocusManagement", () => {
  it("should return all expected functions", () => {
    const { result } = renderHook(() => useFocusManagement());

    expect(typeof result.current.saveFocus).toBe("function");
    expect(typeof result.current.restoreFocus).toBe("function");
    expect(typeof result.current.focusFirstElement).toBe("function");
    expect(typeof result.current.trapFocus).toBe("function");
    expect(typeof result.current.setAriaAttributes).toBe("function");
    expect(typeof result.current.announceToScreenReader).toBe("function");
  });

  it("should handle null container in focusFirstElement", () => {
    const { result } = renderHook(() => useFocusManagement());

    expect(() => {
      act(() => {
        result.current.focusFirstElement(null);
      });
    }).not.toThrow();
  });

  it("should handle null container in trapFocus", () => {
    const { result } = renderHook(() => useFocusManagement());

    expect(() => {
      act(() => {
        result.current.trapFocus(null);
      });
    }).not.toThrow();
  });

  it("should handle null element in setAriaAttributes", () => {
    const { result } = renderHook(() => useFocusManagement());

    expect(() => {
      act(() => {
        result.current.setAriaAttributes(null, {
          "aria-label": "Test label",
        });
      });
    }).not.toThrow();
  });
});
