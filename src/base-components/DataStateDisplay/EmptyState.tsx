import { motion } from "framer-motion";
import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: string;
  iconColor?: string;
  animate?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  iconColor = "#DAD2C2",
  animate = true,
}) => {
  const content = (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        {icon && (
          <div className="text-6xl mb-4" style={{ color: iconColor }}>
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl font-bold text-[#755018] mb-2">{title}</h3>
        )}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default EmptyState;
