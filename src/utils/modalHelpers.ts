/**
 * Check if the new address modal should be shown
 * @returns true if the modal has not been shown in this session
 */
export const shouldShowNewAddressModal = (): boolean => sessionStorage.getItem("newAddressModalShown") !== "true";

/**
 * Mark the new address modal as shown in the current session
 */
export const markNewAddressModalAsShown = (): void => {
  sessionStorage.setItem("newAddressModalShown", "true");
};
