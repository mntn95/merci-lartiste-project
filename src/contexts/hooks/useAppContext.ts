import { useContext } from "react";
import AppContext from "../AppContext";

/**
 * Hook to access the entire App context
 * Throws an error if used outside of AppProvider
 *
 * @returns AppContextType with state and actions
 *
 * @example
 * const { state, actions } = useAppContext();
 * actions.showModal('legalMentions');
 */
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
