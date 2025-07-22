import React from "react";
import { motion } from "framer-motion";
import { ServiceItem as ServiceItemType } from "../../../../types";
import ServiceInfo from "./ServiceInfo";
import ServicePricing from "./ServicePricing";
import ServiceSeparator from "./ServiceSeparator";

interface ServiceItemProps {
  service: ServiceItemType;
  index: number;
  onServiceClick: (service: ServiceItemType) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  service,
  index,
  onServiceClick,
}) => (
  <motion.div
    key={service.id}
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}
    onClick={() => onServiceClick(service)}
    className="cursor-pointer"
  >
    <motion.div whileHover={{ x: 10 }} className="p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <ServiceInfo service={service} />
        <ServicePricing service={service} />
      </div>
      <ServiceSeparator index={index} />
    </motion.div>
  </motion.div>
);

export default ServiceItem;
