import React from "react";
import { Heading } from "../../../../../base-components";
import { ServiceItem } from "../../../../../types";

interface ServiceInfoProps {
  service: ServiceItem;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => (
  <div className="flex-1">
    <Heading
      as="h3"
      size="xl"
      fontFamily="botanika"
      fontWeight="bold"
      className="text-xl lg:text-2xl text-[#755018] mb-2"
    >
      {service.title}
    </Heading>
    <p className="text-gray-700 text-sm lg:text-base leading-relaxed lg:max-w-[70%] whitespace-pre-line">
      {service.description}
    </p>
  </div>
);

export default ServiceInfo;
