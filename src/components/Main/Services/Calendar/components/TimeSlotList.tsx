import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
              <motion.button
                key={timeSlot.start_time}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTimeSlotClick(timeSlot)}
                className="p-3 border-1 border-[#755018] rounded-sm text-center hover:bg-[#755018] hover:text-white transition-colors duration-200"
              >
                <div className="font-medium">
                  {formatTime(timeSlot.start_time)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TimeSlotList;
