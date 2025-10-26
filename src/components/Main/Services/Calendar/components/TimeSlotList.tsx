import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "../../../../../base-components";
import { CalendlyAvailableTime } from "../../../../../services/calendly-api";
import { formatTime } from "../helpers";

interface TimeSlotListProps {
  timeSlots: CalendlyAvailableTime[];
  onTimeSlotClick: (timeSlot: CalendlyAvailableTime) => void;
  isVisible: boolean;
}

const TimeSlotList: React.FC<TimeSlotListProps> = ({
  timeSlots,
  onTimeSlotClick,
  isVisible,
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {timeSlots.map((timeSlot, index) => (
              <motion.div
                key={timeSlot.start_time}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Button
                  onClick={() => onTimeSlotClick(timeSlot)}
                  className="p-3 w-full text-center"
                >
                  <span className="font-medium">
                    {formatTime(timeSlot.start_time)}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TimeSlotList;
