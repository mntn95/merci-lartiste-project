import { useFela } from "react-fela";

import NavItem from "./NavItem";
import { bottomNavTranslation, navTranslation } from "../intl";

const headerNavMenu = () => ({
  display: "flex",
  marginLeft: "auto",
  marginRight: "0",
  gap: "5rem",
  fontSize: "20px",
  paddingTop: "2.5rem",
  position: "relative",
});

const headerNavPrices = () => ({
  position: "absolute",
  top: "6rem",
  left: "9rem",
  width: "27%",
  padding: "0.5rem 1rem",
  display: "block",
  border: "1px solid #755018",
  textDecoration: "underline",
});

const Nav = () => {
  const { css } = useFela();
  return (
    <div className={css(headerNavMenu)}>
      {Object.values(navTranslation).map((item, index) => (
        <NavItem key={index} title={item} />
      ))}
      <div className={css(headerNavPrices)}>
        {bottomNavTranslation.pricesCta}
      </div>
    </div>
  );
};

export default Nav;
