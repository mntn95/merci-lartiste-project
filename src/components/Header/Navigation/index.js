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

const headerNavToggle = {
  border: "none",
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
  padding: "0 20px!important",
  backgroundColor: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Navigation = ({ appointmentRef, contactRef, pricesRef }) => {
  const { css, theme } = useFela();

  return (
    <div className={css(headerNavMenu)}>
      <div style={{ position: "absolute", right: 0, textAlign: "right" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ justifyContent: "flex-end" }}
        >
          <Navbar.Toggle
            className={css(headerNavToggle)}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className={css(navItem({ theme }))}
                title="A propos"
                id="collapsible-nav-dropdown"
              >
                <Nav.Link
                  className={css(navSubItem({ theme }))}
                  onClick={() =>
                    pricesRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "start",
                    })
                  }
                >
                  {navTranslation.pricesCta}
                </Nav.Link>
              </NavDropdown>
              <Nav.Link
                className={css(navItem)}
                eventKey="3"
                onClick={() =>
                  appointmentRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  })
                }
              >
                {navTranslation.booking}
              </Nav.Link>
              <Nav.Link
                className={css(navItem)}
                eventKey="4"
                onClick={() =>
                  contactRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  })
                }
              >
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
