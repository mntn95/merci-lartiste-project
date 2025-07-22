import React from "react";
import { servicesLabels } from "../labels";

const ServicesLoading: React.FC = () => (
  <div className="text-center py-8">
    <p className="text-[#755018]">{servicesLabels.loading}</p>
  </div>
);

export default ServicesLoading;
