import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { ModalContent, Ref } from "./types";

const App: React.FC = () => {
  const [modal, showModal] = useState<ModalContent>(null);
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

  return (
    <Layout>
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
