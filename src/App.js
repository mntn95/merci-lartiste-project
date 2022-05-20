import { useFela } from "react-fela";
import "./app.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";
import FontFace from "./assets/Botanika_Mono/Botanika Mono Regular.otf";

const appStyle = () => ({
  minHeight: "100vh",
  backgroundImage: `url(${mainBackground})`,
});

const App = () => {
  const { css, renderer } = useFela();
  const fontFamily = renderer.renderFont("Botanika Mono Regular", [FontFace]);
  return (
    <div className={css([fontFamily, appStyle])}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
