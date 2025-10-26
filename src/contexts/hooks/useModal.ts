import { useAppContext } from "./useAppContext";

/**
 * Hook to manage modal state
 * Provides current modal state and function to show/hide modals
 *
 * @returns Object with current modal and showModal function
 *
 * @example
 * const { modal, showModal } = useModal();
 * showModal('legalMentions'); // Open legal mentions modal
 * showModal(null); // Close modal
 */
export const useModal = () => {
  const { state, actions } = useAppContext();

  return {
    modal: state.modal,
    showModal: actions.showModal,
  };
};
