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
  "& .nav": {
    "&-subMenu": {
      backgroundColor: "inherit",
      "&:hover": {
        backgroundColor: "inherit",
        textDecoration: "underline",
      },
    },
  },
};

const navItem = ({ theme }) => ({
  color: `${theme.textColor}!important`,
  margin: "1rem",
  "&:hover": {
    textDecoration: "underline",
  },
  "> div": {
    border: `1px solid ${theme.textColor}`,
    borderRadius: "1px",
    backgroundColor: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "> a": {
    color: `${theme.textColor}!important`,
  },
});

const navSubItem = ({ theme }) => ({
  color: `${theme.textColor}!important`,
  "&:hover": {
    backgroundColor: "inherit",
    textDecoration: "underline",
  },
});

const Navigation = () => {
  const { css, theme } = useFela();
  return (
    <div className={css(headerNavMenu)}>
      <div style={{ position: "absolute", right: 0, textAlign: "right" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ justifyContent: "flex-end" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={css(navItem)} href="#home">
                {navTranslation.home}
              </Nav.Link>
              <NavDropdown
                className={css(navItem({ theme }))}
                title="A propos"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  className={css(navSubItem({ theme }))}
                  href="#prices"
                >
                  {navTranslation.pricesCta}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className={css(navItem)} href="#appointment">
                {navTranslation.booking}
              </Nav.Link>
              <Nav.Link className={css(navItem)} href="#contact">
                {navTranslation.contact}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
