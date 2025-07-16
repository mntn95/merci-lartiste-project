import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { ModalContent, Ref } from "./types";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";

const App: React.FC = () => {
  const [modal, showModal] = useState<ModalContent>(null);
  const [appointmentRef, setAppointmentRef] = useState<Ref>(null);
  const [contactRef, setContactRef] = useState<Ref>(null);
  const [pricesRef, setPricesRef] = useState<Ref>(null);

  const handleModal = (content: ModalContent): void => {
    console.log(content);
    if (content) {
      showModal(content);
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      showModal(null);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div
      className="overflow-hidden min-h-[900px] text-text-primary font-botanika [&_h1]:font-neue-haas [&_h2]:font-neue-haas [&_h3]:font-neue-haas [&_h4]:font-neue-haas"
      style={{
        backgroundImage: `url(${mainBackground})`,
      }}
    >
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
    </div>
  );
};

export default App;
