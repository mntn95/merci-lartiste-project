import React, { createContext, useReducer, useMemo } from "react";
import { ModalContent, Ref } from "../types";

// =============================================
// TYPES
// =============================================

interface AppState {
  modal: ModalContent;
  isLoading: boolean;
  navigationRefs: {
    appointment: Ref;
    contact: Ref;
    prices: Ref;
  };
}

type AppAction =
  | { type: "SET_MODAL"; payload: ModalContent }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_APPOINTMENT_REF"; payload: Ref }
  | { type: "SET_CONTACT_REF"; payload: Ref }
  | { type: "SET_PRICES_REF"; payload: Ref };

interface AppContextType {
  state: AppState;
  actions: {
    showModal: (content: ModalContent) => void;
    setLoading: (loading: boolean) => void;
    setAppointmentRef: (ref: Ref) => void;
    setContactRef: (ref: Ref) => void;
    setPricesRef: (ref: Ref) => void;
  };
}

// =============================================
// INITIAL STATE
// =============================================

const initialState: AppState = {
  modal: null,
  isLoading: true,
  navigationRefs: {
    appointment: null,
    contact: null,
    prices: null,
  },
};

// =============================================
// REDUCER
// =============================================

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, modal: action.payload };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_APPOINTMENT_REF":
      return {
        ...state,
        navigationRefs: {
          ...state.navigationRefs,
          appointment: action.payload,
        },
      };

    case "SET_CONTACT_REF":
      return {
        ...state,
        navigationRefs: {
          ...state.navigationRefs,
          contact: action.payload,
        },
      };

    case "SET_PRICES_REF":
      return {
        ...state,
        navigationRefs: {
          ...state.navigationRefs,
          prices: action.payload,
        },
      };

    default:
      return state;
  }
};

// =============================================
// CONTEXT
// =============================================

const AppContext = createContext<AppContextType | undefined>(undefined);

// =============================================
// PROVIDER
// =============================================

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Memoized actions to prevent unnecessary re-renders
  const actions = useMemo(
    () => ({
      showModal: (content: ModalContent) => {
        dispatch({ type: "SET_MODAL", payload: content });
      },

      setLoading: (loading: boolean) => {
        dispatch({ type: "SET_LOADING", payload: loading });
      },

      setAppointmentRef: (ref: Ref) => {
        dispatch({ type: "SET_APPOINTMENT_REF", payload: ref });
      },

      setContactRef: (ref: Ref) => {
        dispatch({ type: "SET_CONTACT_REF", payload: ref });
      },

      setPricesRef: (ref: Ref) => {
        dispatch({ type: "SET_PRICES_REF", payload: ref });
      },
    }),
    []
  );

  const value = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
