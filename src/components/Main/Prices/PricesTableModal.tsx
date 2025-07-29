import React from "react";
import { motion } from "framer-motion";
import { ModalContentProps } from "../../../types";
import { pricesLabels, priceServices } from "./labels";

const PricesTableModal: React.FC<ModalContentProps> = () => (
  <>
    <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-6 px-4 md:px-6 lg:px-8 flex-shrink-0"
      >
        <h2 className="font-botanika text-[#755018] text-sm md:text-base lg:text-lg xl:text-xl leading-tight whitespace-pre">
          {pricesLabels.headerTitle}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-4">
        {priceServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="bg-white/5 backdrop-blur-sm border-1 border-[#755018] rounded-lg p-4 md:p-5 hover:bg-white/10"
          >
            <div className="flex sm:flex-row sm:justify-between sm:items-start mb-3">
              <h3 className="font-botanika text-[#755018] text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-0 flex-1">
                {service.name}
              </h3>
              <div className="flex flex-col sm:items-end text-right">
                <span className="text-[rgb(117,80,24)] bg-white/30 rounded-full px-3 py-1 font-bold text-lg md:text-xl mb-1">
                  {service.price}
                </span>
                <span className="text-black/80 text-sm md:text-base font-neue-haas">
                  {service.duration}
                </span>
              </div>
            </div>

            <p className="text-black/90 text-xs md:text-sm lg:text-base leading-relaxed font-neue-haas">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center py-6 px-4 md:px-6 lg:px-8 border-t border-white/30 flex-shrink-0"
    >
      <p className="text-white/80 font-botanika text-sm md:text-base">
        {pricesLabels.title}
      </p>
    </motion.div>
  </>
);

export default PricesTableModal;
