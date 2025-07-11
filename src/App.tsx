import React, { useState } from "react";
import { useFela } from "react-fela";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { ModalContent, Ref } from "./types";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";
import textFontFace from "./assets/Botanika_Mono/webfontkit-20220216-071424/botanika_mono_regular-webfont.woff2";
import titleFontFace from "./assets/NeueHaasUnica/NeueHaasUnica-Regular.woff2";

interface AppStyleProps {
  textFont: string;
  titleFont: string;
  theme: any;
}

const appStyle = ({ textFont, titleFont, theme }: AppStyleProps): any => ({
  overflowY: "auto",
  overflow: "hidden",
  minHeight: "900px",
  backgroundImage: `url(${mainBackground})`,
  color: theme.textColor,
  fontFamily: textFont,
  "& h1, h2, h3, h4": {
    fontFamily: titleFont,
  },
});

const App: React.FC = () => {
  const [modal, showModal] = useState<ModalContent>(null);
  const [appointmentRef, setAppointmentRef] = useState<Ref>(null);
  const [contactRef, setContactRef] = useState<Ref>(null);
  const [pricesRef, setPricesRef] = useState<Ref>(null);
  const { css, renderer, theme } = useFela();

  // Utilisation temporaire de chaînes de caractères pour les polices
  const textFont = "Botanika Mono Regular";
  const titleFont = "Neue Haas Unica Regular";

  // Les polices sont déclarées pour Fela mais on utilise les noms de base
  renderer.renderFont("Botanika Mono Regular", [textFontFace], {});
  renderer.renderFont("Neue Haas Unica Regular", [titleFontFace], {});

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
    <div className={css(appStyle({ textFont, titleFont, theme }))}>
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
