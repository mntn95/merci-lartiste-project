import NavItem from "./NavItem";
import { bottomNavTranslation, navTranslation } from "../intl";

const Nav = (props) => (
  <div className="header-nav--menu">
    {Object.values(navTranslation).map((item) => (
      <NavItem title={item} />
    ))}
    <div className="header-nav--prices">{bottomNavTranslation.pricesCta}</div>
  </div>
);

export default Nav;
