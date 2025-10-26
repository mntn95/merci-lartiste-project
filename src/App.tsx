import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { Modal } from "./base-components";
import Footer from "./components/Footer";
import { ModalContent, Ref } from "./types";
import {
  shouldShowNewAddressModal,
  markNewAddressModalAsShown,
} from "./utils/modalHelpers";

const App: React.FC = () => {
  const [modal, showModal] = useState<ModalContent>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [appointmentRef, setAppointmentRef] = useState<Ref>(null);
  const [contactRef, setContactRef] = useState<Ref>(null);
  const [pricesRef, setPricesRef] = useState<Ref>(null);

  const handleModal = (content: ModalContent): void => {
    if (content) {
      showModal(content);
    } else {
      showModal(null);
    }
  };

  // Auto-open new address modal after loader finishes
  useEffect(() => {
    if (!isLoading && shouldShowNewAddressModal()) {
      showModal("newAddress");
      markNewAddressModalAsShown();
    }
  }, [isLoading]);

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
      <Modal modal={modal} showModal={handleModal} />
      <Header
        appointmentRef={appointmentRef}
        contactRef={contactRef}
        pricesRef={pricesRef}
      />
      <Main
        setAppointmentRef={setAppointmentRef}
        setPricesRef={setPricesRef}
        showModal={handleModal}
      />
      <Footer setContactRef={setContactRef} showModal={handleModal} />
    </Layout>
  );
};

export default App;
