import React from "react";
import { motion } from "framer-motion";
import { CalendlyEventType } from "../../../../../services/calendly-api";
import { servicesLabels } from "../../labels";

interface CalendarHeaderProps {
  eventType: CalendlyEventType;
  onBack: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  eventType,
  onBack,
}) => (
  <div className="text-center mb-8">
    <motion.button
      onClick={onBack}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="mb-6 px-4 py-2 bg-transparent border-1 border-[#755018] text-[#755018] rounded-sm hover:bg-transparent transition-colors duration-200"
    >
      {servicesLabels.calendar.backButtonArrow}
    </motion.button>

    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="!font-botanika font-bold text-[24px] lg:text-[30px] mb-2 mt-4 text-[#755018]"
    >
      {eventType.name}
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-gray-600"
    >
      {servicesLabels.calendar.duration} {eventType.duration} minutes
    </motion.p>

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="h-[2px] bg-[#755018] mx-auto mt-4 w-[100px]"
    />
  </div>
);

export default CalendarHeader;
