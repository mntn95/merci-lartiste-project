import React from "react";
import { handleScrollToRef } from "../handleScrollToRef";

// Mock scrollIntoView
const mockScrollIntoView = jest.fn();

// Mock HTMLElement
const mockElement = {
  scrollIntoView: mockScrollIntoView,
};

describe("handleScrollToRef", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call scrollIntoView when ref.current exists", () => {
    const mockRef = {
      current: mockElement as any,
    };

    handleScrollToRef(mockRef);

    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  });

  it("should not call scrollIntoView when ref is null", () => {
    handleScrollToRef(null);

    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });

  it("should not call scrollIntoView when ref.current is null", () => {
    const mockRef = {
      current: null,
    };

    handleScrollToRef(mockRef);

    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });

  it("should not call scrollIntoView when ref.current is undefined", () => {
    const mockRef = {
      current: undefined,
    };

    handleScrollToRef(mockRef);

    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });

  it("should handle ref without current property", () => {
    const mockRef = {} as React.RefObject<HTMLElement>;

    expect(() => handleScrollToRef(mockRef)).not.toThrow();
    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });

  it("should handle ref with current property but no scrollIntoView method", () => {
    const mockRef = {
      current: {} as HTMLElement,
    };

    expect(() => handleScrollToRef(mockRef)).toThrow();
  });
});
