import React from "react";
import { servicesLabels } from "../../labels";
import { ServiceItem } from "../../../../../types";

interface ServicePricingProps {
  service: ServiceItem;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ service }) => (
  <div className="flex flex-row lg:flex-col items-end text-right gap-2 lg:gap-1 min-w-[120px]">
    <div className="flex flex-col">
      {service.price && (
        <span className="text-2xl font-bold text-[#755018] group-hover:text-[#8B6B1A] transition-colors duration-300">
          {service.price}€
        </span>
      )}
      <span className="text-lg text-[#755018] font-medium">
        {service.duration}
      </span>
      <span className="text-sm text-gray-500 font-medium">
        {servicesLabels.service.viewSlots}
      </span>
    </div>
  </div>
);

export default ServicePricing;
