import { useFela } from "react-fela";
import { Button } from "react-bootstrap";

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
    "@media (max-width: 1023px)": {
      margin: "2rem auto 2rem 4rem",
    },
    "@media (min-width: 1024px)": {
      margin: "5rem 4rem 2rem auto",
    },
  },
  "& .header-head": {
    "@media (max-width: 1023px)": {
      width: "90%",
    },
    "@media (min-width: 1024px)": {
      width: "47%",
    },
    margin: "auto",
    fontSize: "24px",
    "&--title": {
      fontWeight: "normal",
      fontSize: "40px",
      textTransform: "uppercase",
    },
    "&--cta": {
      fontSize: "20px",
      color: "#755018",
      border: ".8px solid #755018",
      borderRadius: "1px",
      textTransform: "uppercase",
      backgroundColor: "inherit",
      padding: ".3rem .7rem .1rem .7rem",
      marginTop: "3rem",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
};

const Header = () => {
  const { css } = useFela();
  return (
    <div className={css(header)}>
      <div className="header-nav">
        <div className="header-nav--logo" />
        <Navigation />
      </div>
      <div>
        <div className="header-ellipsis" />
      </div>
      <div className="header-head">
        <h1 className="header-head--title">{bottomNavTranslation.title}</h1>
        <div>
          <span>{bottomNavTranslation.firstSubtitle}</span>
          <br />
          <span>{bottomNavTranslation.secondSubtitle}</span>
        </div>
        <Button href="#appointment" className="header-head--cta">
          {bottomNavTranslation.bookingCta}
        </Button>
      </div>
    </div>
  );
};

export default Header;
