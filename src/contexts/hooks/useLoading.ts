import { useAppContext } from "./useAppContext";

/**
 * Hook to manage loading state
 * Provides current loading state and function to update it
 *
 * @returns Object with isLoading state and setLoading function
 *
 * @example
 * const { isLoading, setLoading } = useLoading();
 * setLoading(true); // Show loader
 * setLoading(false); // Hide loader
 */
export const useLoading = () => {
  const { state, actions } = useAppContext();

  return {
    isLoading: state.isLoading,
    setLoading: actions.setLoading,
  };
};
