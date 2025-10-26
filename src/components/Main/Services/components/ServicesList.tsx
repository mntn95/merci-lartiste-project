import { motion } from "framer-motion";
import React from "react";
import { CalendlyEventType } from "../../../../services/calendly-api";
import { servicesLabels } from "../labels";
import { convertEventTypeToService } from "../transformers";
import ServiceItem from "./ServiceItem";
import { ServiceItem as ServiceItemType } from "../../../../types";

interface ServicesListProps {
  eventTypes: CalendlyEventType[];
  onServiceClick: (service: ServiceItemType) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({
  eventTypes,
  onServiceClick,
}) => (
  <>
    <div className="space-y-0 bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden">
      {eventTypes.map((eventType, index) => (
        <ServiceItem
          key={eventType.uri}
          service={convertEventTypeToService(eventType)}
          index={index}
          onServiceClick={onServiceClick}
        />
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="text-center text-sm text-gray-500 mt-8 italic"
    >
      {servicesLabels.clickInstruction}
    </motion.p>
  </>
);

export default ServicesList;
