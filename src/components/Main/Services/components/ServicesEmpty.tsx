import { motion } from "framer-motion";
import React from "react";
import { servicesLabels } from "../labels";

const ServicesEmpty: React.FC = () => (
  <div className="text-center py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <div className="text-6xl mb-4 text-[#DAD2C2]">📅</div>
      <h3 className="text-xl font-bold text-[#755018] mb-2">
        {servicesLabels.noResults.title}
      </h3>
      <p className="text-gray-600">{servicesLabels.noResults.description}</p>
    </motion.div>
  </div>
);

export default ServicesEmpty;
