import { useEffect, useState } from "react";
import { useFela } from "react-fela";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";
/* import fontFace from "./assets/Botanika_Mono/Botanika Mono Regular.otf";
 */
import fontFace from "./assets/Botanika_Mono/webfontkit-20220216-071424/botanika_mono_regular-webfont.woff2";

const appStyle = ({ fontFamily, theme }) => ({
  overflowY: "auto",
  overflow: "hidden",
  minHeight: "100vh",
  backgroundImage: `url(${mainBackground})`,
  color: theme.textColor,
  fontFamily,
});

const App = () => {
  const [arrowDownOpacity, setArrowDownOpacity] = useState(1);
  const [arrowUpOpacity, setArrowUpOpacity] = useState(0);

  const listenToScroll = () => {
    let heightToHideFrom = 1000;
    let currentScroll =
      document.body.scrollHeight - window.innerHeight - window.pageYOffset;
    let scrollTop = document.body.scrollHeight - window.innerHeight;
    console.log({
      currentScroll,
      scrollTop,
    });
    if (currentScroll <= heightToHideFrom) {
      setArrowDownOpacity(currentScroll / 1000);
    } else if (scrollTop - currentScroll <= heightToHideFrom) {
      setArrowUpOpacity((scrollTop - currentScroll) / 1000);
    } else {
      setArrowDownOpacity(1);
      setArrowUpOpacity(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const { css, renderer, theme } = useFela();
  const fontFamily = renderer.renderFont("Botanika Mono Regular", [fontFace]);
  return (
    <div className={css(appStyle({ fontFamily, theme }))}>
      <Header />
      <Aside
        arrowDownOpacity={arrowDownOpacity}
        arrowUpOpacity={arrowUpOpacity}
      />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
