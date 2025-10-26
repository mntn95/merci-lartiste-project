import { motion } from "framer-motion";
import React from "react";

interface ErrorStateProps {
  error: string;
  onAction?: () => void;
  actionLabel?: string;
  errorColor?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  onAction,
  actionLabel,
  errorColor = "text-amber-600",
}) => (
  <div className="text-center py-4 mb-4">
    <p className={`${errorColor} text-sm`}>{error}</p>
    {onAction && actionLabel && (
      <motion.button
        onClick={onAction}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="mt-4 px-4 py-2 bg-transparent border-1 border-[#755018] text-[#755018] rounded-sm hover:bg-transparent transition-colors duration-200"
      >
        {actionLabel}
      </motion.button>
    )}
  </div>
);

export default ErrorState;
