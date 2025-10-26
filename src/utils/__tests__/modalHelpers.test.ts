import {
  shouldShowNewAddressModal,
  markNewAddressModalAsShown,
} from "../modalHelpers";

// Mock sessionStorage
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, "sessionStorage", {
  value: mockSessionStorage,
});

describe("modalHelpers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("shouldShowNewAddressModal", () => {
    it("should return true when modal has not been shown", () => {
      mockSessionStorage.getItem.mockReturnValue(null);

      const result = shouldShowNewAddressModal();

      expect(result).toBe(true);
      expect(mockSessionStorage.getItem).toHaveBeenCalledWith(
        "newAddressModalShown"
      );
    });

    it("should return true when modal has not been shown (empty string)", () => {
      mockSessionStorage.getItem.mockReturnValue("");

      const result = shouldShowNewAddressModal();

      expect(result).toBe(true);
      expect(mockSessionStorage.getItem).toHaveBeenCalledWith(
        "newAddressModalShown"
      );
    });

    it("should return false when modal has been shown", () => {
      mockSessionStorage.getItem.mockReturnValue("true");

      const result = shouldShowNewAddressModal();

      expect(result).toBe(false);
      expect(mockSessionStorage.getItem).toHaveBeenCalledWith(
        "newAddressModalShown"
      );
    });

    it("should return true when sessionStorage returns undefined", () => {
      mockSessionStorage.getItem.mockReturnValue(undefined);

      const result = shouldShowNewAddressModal();

      expect(result).toBe(true);
      expect(mockSessionStorage.getItem).toHaveBeenCalledWith(
        "newAddressModalShown"
      );
    });
  });

  describe("markNewAddressModalAsShown", () => {
    it("should set the modal as shown in sessionStorage", () => {
      markNewAddressModalAsShown();

      expect(mockSessionStorage.setItem).toHaveBeenCalledWith(
        "newAddressModalShown",
        "true"
      );
    });

    it("should not throw when sessionStorage is not available", () => {
      // Simulate sessionStorage not being available
      const originalSessionStorage = window.sessionStorage;
      delete (window as any).sessionStorage;

      expect(() => markNewAddressModalAsShown()).toThrow(
        "sessionStorage is not defined"
      );

      // Restore sessionStorage
      (window as any).sessionStorage = originalSessionStorage;
    });
  });
});
