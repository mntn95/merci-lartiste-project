import NavItem from "./NavItem";
import { navTranslation } from "../intl";

const Nav = (props) => {
  return (
    <div>
      {Object.values(navTranslation).map((item) => (
        <NavItem title={item} />
      ))}
    </div>
  );
};

export default Nav;
