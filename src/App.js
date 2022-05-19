import { useFela } from "react-fela";
import "./app.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import mainBackground from "./assets/img/mla_background_accueil_1920x1080.png";

const appStyle = () => ({
  minHeight: "100vh",
  backgroundImage: `url(${mainBackground})`,
});

const App = () => {
  const { css, renderer } = useFela();
  const fontFamily = renderer.renderFont("Botanika Mono Regular", [
    "./assets/Botanika_Mono/Botanika Mono Regular.otf",
  ]);
  return (
    <div className={css([fontFamily, appStyle])}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
