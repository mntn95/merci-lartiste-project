import React from "react";
import { motion } from "framer-motion";
import {
  ServicesComponentProps,
  ServiceItem as ServiceItemT,
} from "../../../types";
import { servicesData } from "./services-data";
import ServiceItem from "./ServiceItem";

const Services: React.FC<ServicesComponentProps> = () => {
  const handleServiceClick = (service: ServiceItemT) => {
    console.log("Service sélectionné:", service);
    // TODO: Ajouter la logique de redirection/action
  };

  return (
    <div className="container mx-auto py-16 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0 bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
              onServiceClick={handleServiceClick}
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
          Cliquez sur une prestation pour plus d'informations
        </motion.p>
      </div>
    </div>
  );
};

export default Services;
