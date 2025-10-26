import { motion } from "framer-motion";
import React from "react";
import { Button, Heading } from "../../../../../base-components";
import { servicesLabels } from "../../../../../labels/services";
import { CalendlyEventType } from "../../../../../services/calendly-api";

interface CalendarHeaderProps {
  eventType: CalendlyEventType;
  onBack: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  eventType,
  onBack,
}) => (
  <div className="text-center mb-8">
    <div className="mb-6">
      <Button onClick={onBack}>
        {servicesLabels.calendar.backButtonArrow}
      </Button>
    </div>

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-2 mt-4"
    >
      <Heading
        as="h2"
        size="custom"
        fontFamily="botanika"
        fontWeight="bold"
        className="text-[#755018] text-[24px] lg:text-[30px]"
      >
        {eventType.name}
      </Heading>
    </motion.div>

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
