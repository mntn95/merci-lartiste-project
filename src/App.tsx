import React, { useEffect, useState } from "react";
import { Modal } from "./base-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
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
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
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

/**
 * Main App component with Context Provider
 */
const App: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
