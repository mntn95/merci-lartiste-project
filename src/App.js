import { useFela } from "react-fela";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";
import FontFace from "./assets/Botanika_Mono/Botanika Mono Regular.otf";

const appStyle = ({ fontFamily, theme }) => ({
  minHeight: "100vh",
  backgroundImage: `url(${mainBackground})`,
  color: theme.textColor,
  fontFamily,
});

const App = () => {
  const { css, renderer, theme } = useFela();
  const fontFamily = renderer.renderFont("Botanika Mono Regular", [FontFace]);
  return (
    <div className={css(appStyle({ fontFamily, theme }))}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
