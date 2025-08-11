import React from "react";
import { ServiceItem } from "@/types";

interface ServiceInfoProps {
  service: ServiceItem;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => (
  <div className="flex-1">
    <h3 className="text-xl !font-botanika lg:text-2xl font-bold text-[#755018] mb-2">
      {service.title}
    </h3>
    <p className="text-gray-700 text-sm lg:text-base leading-relaxed lg:max-w-[70%] whitespace-pre-line">
      {service.description}
    </p>
  </div>
);

export default ServiceInfo;
