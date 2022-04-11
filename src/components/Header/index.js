import Nav from "./Nav";
import { bottomNavTranslation } from "./intl";

const Header = () => (
  <div className="header">
    <div className="header-nav">
      {/* Brand Logo */}
      <div className="header-logo" />
      <Nav />
    </div>
    <div className="header-ellipsis">
      {/* Ellipsis Logo */}
      <div className="header-ellipsis-content" />
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

export default Header;
