import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";

interface CalendarNavigationProps {
  direction: "up" | "down";
  onClick: () => void;
  disabled?: boolean;
  visible?: boolean;
}

const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  direction,
  onClick,
  disabled = false,
  visible = true,
}) => {
  if (!visible) {
    return <div className="w-12 h-12" />; // Espace vide pour maintenir l'alignement
  }

  const Icon = direction === "up" ? KeyboardArrowUp : KeyboardArrowDown;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#755018] text-[#755018] hover:bg-[#755018] hover:text-white transition-colors duration-200 disabled:opacity-50"
    >
      <Icon fontSize="large" />
    </motion.button>
  );
};

export default CalendarNavigation;
