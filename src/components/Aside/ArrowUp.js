import { useFela } from "react-fela";
import { animateScroll as scroll } from "react-scroll";
import ArrowDownPicture from "../../assets/img/mla_arrow_2_30x58.png";

const arrowContainerStyle = ({ arrowOpacity }) => ({
  "@media (max-width: 767px)": {
    display: "none",
  },
  cursor: "pointer",
  top: "29rem",
  right: "0",
  position: "fixed",
  border: "solid",
  borderWidth: "1px 0 1px 1px",
  zIndex: "10",
  opacity: arrowOpacity,
  height: "200px",
});

const arrowStyle = ({ ArrowDownPicture }) => ({
  margin: "auto",
  width: "82px",
  height: "120px",
  backgroundImage: `url(${ArrowDownPicture})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transform: "rotate(180deg)",
});

const arrowText = {
  transform: "rotate(270deg)",
  fontSize: "27px",
};

const ArrowUp = ({ arrowOpacity }) => {
  const { css } = useFela();

  return (
    <div
      className={css(arrowContainerStyle({ arrowOpacity }))}
      onClick={() => scroll.scrollToTop({ duration: 100, smooth: true })}
    >
      <div className={css(arrowStyle({ ArrowDownPicture }))} />
      <div className={css(arrowText)}>Top !</div>
    </div>
  );
};

export default ArrowUp;
