import { useFela } from "react-fela";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { navTranslation } from "../intl";

const headerNavMenu = {
  display: "flex",
  marginLeft: "auto",
  marginRight: "0",
  gap: "5rem",
  fontSize: "20px",
  position: "relative",
};

const Navigation = () => {
  const { css } = useFela();
  return (
    <div className={css(headerNavMenu)}>
      <div style={{ position: "absolute", right: 0 }}>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">{navTranslation.home}</Nav.Link>
              <NavDropdown title="A propos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#prices">
                  {navTranslation.pricesCta}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#appointment">{navTranslation.booking}</Nav.Link>
              <Nav.Link href="#contact">{navTranslation.contact}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
