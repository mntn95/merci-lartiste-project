import React from "react";
import { useFela } from "react-fela";
import { Nav, Navbar } from "react-bootstrap";
import { NavigationProps } from "../../../types";
import { navTranslation } from "../intl";

interface NavItemStyleProps {
  theme: any;
}

const headerNavMenu: any = {
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

const headerNavToggle: any = {
  border: "none",
};

const navItem = ({ theme }: NavItemStyleProps): any => ({
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

const Navigation: React.FC<NavigationProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
  const { css, theme } = useFela();

  const handleScrollToRef = (
    ref: React.RefObject<HTMLElement> | null
  ): void => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

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
              <Nav.Link
                className={css(navItem({ theme }))}
                onClick={() => handleScrollToRef(appointmentRef)}
              >
                {navTranslation.booking}
              </Nav.Link>
              <Nav.Link
                className={css(navItem({ theme }))}
                onClick={() => handleScrollToRef(pricesRef)}
              >
                {navTranslation.pricesCta}
              </Nav.Link>
              <Nav.Link
                className={css(navItem({ theme }))}
                eventKey="4"
                onClick={() => handleScrollToRef(contactRef)}
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
