import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { servicesLabels } from "../../labels";

interface CalendarLoadingProps {
  message?: string;
}

export const CalendarLoading: React.FC<CalendarLoadingProps> = ({
  message = servicesLabels.calendar.loadingSlots,
}) => (
  <div className="flex justify-center items-center py-16">
    <CircularProgress size={40} sx={{ color: "#755018" }} />
    <span className="ml-4 text-lg text-[#755018]">{message}</span>
  </div>
);

interface CalendarErrorProps {
  error: string;
  onBack: () => void;
}

export const CalendarError: React.FC<CalendarErrorProps> = ({
  error,
  onBack,
}) => (
  <div className="text-center py-16">
    <p className="text-red-600 mb-4">{error}</p>
    <motion.button
      onClick={onBack}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="px-4 py-2 bg-transparent border-1 border-[#755018] text-[#755018] rounded-sm hover:bg-transparent transition-colors duration-200"
    >
      {servicesLabels.calendar.backButton}
    </motion.button>
  </div>
);

interface CalendarEmptyProps {
  message?: string;
}

export const CalendarEmpty: React.FC<CalendarEmptyProps> = ({
  message = servicesLabels.calendar.noSlots,
}) => (
  <div className="text-center py-8">
    <p className="text-gray-600">{message}</p>
  </div>
);
