import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  animated?: boolean;
  delay?: number;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  animated = true,
  delay = 0,
  className = "",
}) => {
  const baseClasses =
    "bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden";
  const classes = `${baseClasses} ${className}`.trim();

  if (animated) {
    return (
      <motion.div
        className={classes}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
};

export default GlassCard;
