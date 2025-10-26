import { motion } from "framer-motion";
import React from "react";

interface ServiceSeparatorProps {
  index: number;
}

const ServiceSeparator: React.FC<ServiceSeparatorProps> = ({ index }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
    className="h-[1px] bg-gradient-to-r from-transparent via-[#755018] to-transparent mt-4 origin-center"
  />
);

export default ServiceSeparator;
