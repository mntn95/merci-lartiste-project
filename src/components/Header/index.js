import Nav from "./Nav";

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
  </div>
);

export default Header;
