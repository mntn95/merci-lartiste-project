import { useFela } from "react-fela";

import Nav from "./Nav";
import { bottomNavTranslation } from "./intl";
import Logo from "../../assets/img/mla_logo_820x253.png";
import Ellipsis from "../../assets/img/mla_ellipse_mercilartiste_461x441.png";

const headerLogo = () => ({
  backgroundImage: `url(${Logo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "300px",
  height: "90px",
});

const headerEllipsis = () => ({
  backgroundImage: `url(${Ellipsis})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  clear: "both",
  width: "226px",
  height: "221px",
  marginLeft: "auto",
  marginRight: "4rem",
  marginTop: "5rem",
});

const headerNav = () => ({
  padding: "2rem",
  display: "flex",
});

const headerHead = () => ({
  width: "47%",
  margin: "auto",
});

const headerHeadTitle = () => ({
  fontWeight: "normal",
  fontSize: "30px",
  textTransform: "uppercase",
});

const headerHeadCta = () => ({
  color: "#755018",
  border: ".8px solid #755018",
  textTransform: "uppercase",
  backgroundColor: "inherit",
  padding: ".4rem .7rem",
  marginTop: "3rem",
});

const Header = () => {
  const { css } = useFela();
  return (
    <div>
      <div className={css(headerNav)}>
        {/* Brand Logo */}
        <div className={css(headerLogo)} />
        <Nav />
      </div>
      <div>
        {/* Ellipsis Logo */}
        <div className={css(headerEllipsis)} />
      </div>
      <div className={css(headerHead)}>
        <h1 className={css(headerHeadTitle)}>{bottomNavTranslation.title}</h1>
        <div>
          <span>{bottomNavTranslation.firstSubtitle}</span>
          <br />
          <span>{bottomNavTranslation.secondSubtitle}</span>
        </div>
        <button className={css(headerHeadCta)}>
          {bottomNavTranslation.bookingCta}
        </button>
      </div>
    </div>
  );
};

export default Header;
