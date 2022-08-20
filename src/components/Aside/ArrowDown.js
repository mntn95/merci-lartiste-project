import { useFela } from "react-fela";
import { animateScroll as scroll } from "react-scroll";
import ArrowPicture from "../../assets/img/mla_arrow_2_30x58.png";

const arrowStyle = ({ ArrowPicture, arrowOpacity }) => ({
  "@media (max-width: 767px)": {
    display: "none",
  },
  opacity: arrowOpacity,
  cursor: "pointer",
  top: "10rem",
  right: "0",
  position: "fixed",
  backgroundImage: `url(${ArrowPicture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  border: "solid",
  borderWidth: "1px 0 1px 1px",
  width: "82px",
  height: "100px",
  zIndex: "10",
});

const ArrowDown = ({ arrowOpacity }) => {
  const { css } = useFela();

  return (
    <div
      onClick={() => scroll.scrollToBottom({ duration: 100, smooth: true })}
      className={css(arrowStyle({ ArrowPicture, arrowOpacity }))}
    />
  );
};

export default ArrowDown;
