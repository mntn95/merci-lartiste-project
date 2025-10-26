import { motion } from "framer-motion";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigation } from "../../../contexts";
import { useFocusManagement } from "../../../hooks";
import { navLabels } from "../../../labels/header";
import { handleScrollToRef } from "../../../utils";

const Navigation: React.FC = React.memo(() => {
  const { appointmentRef, contactRef } = useNavigation();
  const { announceToScreenReader } = useFocusManagement();

  const handleNavClick = (
    ref: React.RefObject<HTMLElement> | null,
    label: string
  ) => {
    handleScrollToRef(ref);
    announceToScreenReader(`Navigation vers ${label}`);
  };

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
            className="!border-none !color-[#755018]"
            aria-controls="responsive-navbar-nav"
            aria-label="Ouvrir le menu de navigation"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              role="navigation"
              aria-label="Navigation principale"
            >
              <Nav.Link
                className="!text-[#755018] m-4 hover:underline rounded-[1px] bg-inherit px-2 py-1"
                onClick={() =>
                  handleNavClick(appointmentRef, navLabels.booking)
                }
                aria-label={`Aller à la section ${navLabels.booking}`}
              >
                {navLabels.booking}
              </Nav.Link>
              <Nav.Link
                className="!text-[#755018] m-4 hover:underline rounded-[1px] bg-inherit px-2 py-1"
                eventKey="4"
                onClick={() => handleNavClick(contactRef, navLabels.contact)}
                aria-label={`Aller à la section ${navLabels.contact}`}
              >
                {navLabels.contact}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </motion.div>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
