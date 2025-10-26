import React, { useEffect, useState } from "react";
import { Modal } from "./base-components";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { APP_CONFIG } from "./constants";
import { AppProvider, useModal } from "./contexts";
import {
  shouldShowNewAddressModal,
  markNewAddressModalAsShown,
} from "./utils/modalHelpers";

/**
 * App content component
 * Separated to use context hooks
 */
const AppContent: React.FC = () => {
  const { modal, showModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  // Auto-open new address modal after loader finishes
  useEffect(() => {
    if (!isLoading && shouldShowNewAddressModal()) {
      showModal("newAddress");
      markNewAddressModalAsShown();
    }
  }, [isLoading, showModal]);

  // Initialize loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, APP_CONFIG.LOADER_TIMEOUT_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Modal modal={modal} showModal={showModal} />
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

const App: React.FC = () => (
  <ErrorBoundary>
    <AppProvider>
      <AppContent />
    </AppProvider>
  </ErrorBoundary>
);

export default App;
