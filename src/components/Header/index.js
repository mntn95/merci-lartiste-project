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

const Header = () => {
  const { css } = useFela();
  return (
    <div className="header">
      <div className="header-nav">
        {/* Brand Logo */}
        <div className={css(headerLogo)} />
        <Nav />
      </div>
      <div className="header-ellipsis">
        {/* Ellipsis Logo */}
        <div className={css(headerEllipsis)} />
      </div>
      <div className="header-head">
        <h1 className="header-head--title">{bottomNavTranslation.title}</h1>
        <div className="header-head--span">
          <span>{bottomNavTranslation.firstSubtitle}</span>
          <br />
          <span>{bottomNavTranslation.secondSubtitle}</span>
        </div>
        <button className="header-head--cta">
          {bottomNavTranslation.bookingCta}
        </button>
      </div>
    </div>
  );
};

export default Header;
