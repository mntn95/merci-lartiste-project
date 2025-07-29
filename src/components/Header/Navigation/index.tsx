import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavigationProps } from "../../../types";
import { navLabels } from "../labels";
import { handleScrollToRef } from "../../../utils";

const Navigation: React.FC<NavigationProps> = ({
  appointmentRef,
  contactRef,
  pricesRef,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.75,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      className="flex ml-auto mr-0 gap-20 text-xl relative"
    >
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
    </motion.div>
  );
};

export default Navigation;
