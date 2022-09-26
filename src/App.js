import { useState } from "react";
import { useFela } from "react-fela";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";
/* import fontFace from "./assets/Botanika_Mono/Botanika Mono Regular.otf";
 */
import textFontFace from "./assets/Botanika_Mono/webfontkit-20220216-071424/botanika_mono_regular-webfont.woff2";

import titleFontFace from "./assets/NeueHaasUnica/NeueHaasUnica-Regular.woff2";

const appStyle = ({ textFont, titleFont, theme }) => ({
  overflowY: "auto",
  overflow: "hidden",
  minHeight: "900px",
  backgroundImage: `url(${mainBackground})`,
  color: theme.textColor,
  fontFamily: textFont,
  "& h1, h2, h3, h4, button": {
    fontFamily: titleFont,
  },
});

const App = () => {
  const [appointmentRef, setAppointmentRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [pricesRef, setPricesRef] = useState(null);
  const { css, renderer, theme } = useFela();
  const textFont = renderer.renderFont("Botanika Mono Regular", [textFontFace]);
  const titleFont = renderer.renderFont("Neue Haas Unica Regular", [
    titleFontFace,
  ]);
  return (
    <div className={css(appStyle({ textFont, titleFont, theme }))}>
      <Header
        appointmentRef={appointmentRef}
        contactRef={contactRef}
        pricesRef={pricesRef}
      />
      <Main setAppointmentRef={setAppointmentRef} setPricesRef={setPricesRef} />
      <Footer setContactRef={setContactRef} />
    </div>
  );
};

export default App;
