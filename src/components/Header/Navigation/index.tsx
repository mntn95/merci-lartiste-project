import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavigationProps } from "../../../types";
import { navLabels } from "../labels";

const Navigation: React.FC<NavigationProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
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
    <div className="flex ml-auto mr-0 gap-20 text-xl relative">
      <div className="absolute right-0 text-right">
        <Navbar collapseOnSelect expand="lg" className="!justify-end">
          <Navbar.Toggle
            className="!border-none"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="!text-[#755018] m-4 hover:underline rounded-[1px] bg-inherit px-2 py-1"
                onClick={() => handleScrollToRef(appointmentRef)}
              >
                {navLabels.booking}
              </Nav.Link>
              <Nav.Link
                className="!text-[#755018] m-4 hover:underline rounded-[1px] bg-inherit px-2 py-1"
                onClick={() => handleScrollToRef(pricesRef)}
              >
                {navLabels.pricesCta}
              </Nav.Link>
              <Nav.Link
                className="!text-[#755018] m-4 hover:underline rounded-[1px] bg-inherit px-2 py-1"
                eventKey="4"
                onClick={() => handleScrollToRef(contactRef)}
              >
                {navLabels.contact}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
