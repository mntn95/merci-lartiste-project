import { useFela } from "react-fela";

import Navigation from "./Navigation";
import { bottomNavTranslation } from "./intl";
import Logo from "../../assets/img/mla_logo_820x253.png";
import Ellipsis from "../../assets/img/mla_ellipse_mercilartiste_461x441.png";

const header = {
  "& .header-nav": {
    padding: "2rem",
    display: "flex",
    "&--logo": {
      backgroundImage: `url(${Logo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      clear: "both",
      width: "300px",
      height: "90px",
    },
  },
  "& .header-ellipsis": {
    backgroundImage: `url(${Ellipsis})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    clear: "both",
    width: "226px",
    height: "221px",
    marginLeft: "auto",
    marginRight: "4rem",
    marginTop: "5rem",
  },
  "& .header-head": {
    width: "47%",
    margin: "auto",
    "&--title": {
      fontWeight: "normal",
      fontSize: "30px",
      textTransform: "uppercase",
    },
    "&--cta": {
      color: "#755018",
      border: ".8px solid #755018",
      textTransform: "uppercase",
      backgroundColor: "inherit",
      padding: ".4rem .7rem",
      marginTop: "3rem",
    },
  },
};

const Header = () => {
  const { css } = useFela();
  return (
    <div className={css(header)}>
      <div className="header-nav">
        {/* Brand Logo */}
        <div className="header-nav--logo" />
        <Navigation />
      </div>
      <div>
        {/* Ellipsis Logo */}
        <div className="header-ellipsis" />
      </div>
      <div className="header-head">
        <h1 className="header-head--title">{bottomNavTranslation.title}</h1>
        <div>
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
