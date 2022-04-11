import NavItem from "./NavItem";
import { navTranslation } from "../intl";

const Nav = (props) => {
  return (
    <div className="header-nav--menu">
      {Object.values(navTranslation).map((item) => (
        <NavItem title={item} />
      ))}
      <div className="header-nav--prices">Tarifs et Prestations</div>
    </div>
  );
};

export default Nav;
