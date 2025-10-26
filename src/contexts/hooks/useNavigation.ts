import { useAppContext } from "./useAppContext";

/**
 * Hook to manage navigation refs
 * Provides refs and setters for smooth scrolling navigation
 *
 * @returns Object with navigation refs and setter functions
 *
 * @example
 * const { appointmentRef, setAppointmentRef } = useNavigation();
 * setAppointmentRef(myRef);
 */
export const useNavigation = () => {
  const { state, actions } = useAppContext();

  return {
    // Refs
    appointmentRef: state.navigationRefs.appointment,
    contactRef: state.navigationRefs.contact,
    pricesRef: state.navigationRefs.prices,

    // Setters
    setAppointmentRef: actions.setAppointmentRef,
    setContactRef: actions.setContactRef,
    setPricesRef: actions.setPricesRef,
  };
};
