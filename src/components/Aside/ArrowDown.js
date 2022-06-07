import { useFela } from "react-fela";
import { animateScroll as scroll } from "react-scroll";
import ArrowPicture from "../../assets/img/mla_arrow_2_30x58.png";

const arrowStyle = ({ ArrowPicture }) => ({
  cursor: "pointer",
  top: "28rem",
  right: "0",
  position: "fixed",
  backgroundImage: `url(${ArrowPicture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  border: "solid",
  borderWidth: "1px 0 1px 1px",
  width: "70px",
  height: "90px",
  zIndex: "10",
});

const ArrowDown = () => {
  const { css } = useFela();

  return (
    <div
      onClick={() => scroll.scrollToBottom({ duration: 100, smooth: true })}
      className={css(arrowStyle({ ArrowPicture }))}
    />
  );
};

export default ArrowDown;
