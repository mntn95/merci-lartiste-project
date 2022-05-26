import { useFela } from "react-fela";

import MainPicture from "../../assets/img/mla_img_1_1920x1080.png";
import Appointment from "./Appointment";
import Prices from "./Prices";

const main = () => ({
  margin: "4rem 0",
});

const mainImage = () => ({
  backgroundImage: `url(${MainPicture})`,
  backgroundSize: "100% auto",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "100%",
  minHeight: "100vh",
});

const Main = () => {
  const { css } = useFela();

  return (
    <div className={css(main)}>
      {/* Image */}
      <div className={css(mainImage)} />
      {/* Aside */}
      <Appointment />
      <Prices />
    </div>
  );
};

export default Main;
