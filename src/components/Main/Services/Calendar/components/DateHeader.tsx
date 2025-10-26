import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import { formatDate } from "../helpers";

interface DateHeaderProps {
  date: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const DateHeader: React.FC<DateHeaderProps> = ({
  date,
  isExpanded,
  onToggle,
}) => (
    <motion.div
      onClick={onToggle}
      className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/10 transition-colors duration-200"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg !font-botanika font-bold text-[#755018] capitalize">
        {formatDate(date)}
      </h3>

      <motion.div
        animate={{
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-[#755018]"
      >
        <KeyboardArrowDown fontSize="large" />
      </motion.div>
    </motion.div>
  );

export default DateHeader;
