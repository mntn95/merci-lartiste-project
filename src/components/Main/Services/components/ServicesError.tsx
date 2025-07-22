import React from "react";

interface ServicesErrorProps {
  error: string;
}

const ServicesError: React.FC<ServicesErrorProps> = ({ error }) => (
  <div className="text-center py-4 mb-4">
    <p className="text-amber-600 text-sm">{error}</p>
  </div>
);

export default ServicesError;
