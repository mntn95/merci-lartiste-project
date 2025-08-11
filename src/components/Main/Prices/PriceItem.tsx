import React from "react";
import { motion } from "framer-motion";
import { PriceItemProps } from "@/types";
import { getPriceItemClasses } from "./styles";

const PriceItem: React.FC<PriceItemProps> = ({
  label,
  price,
  position,
  tablePosition,
}) => (
  <motion.div
    initial={{ x: tablePosition === "top" ? -200 : 200 }}
    whileInView={{ x: 0 }}
    transition={{
      duration: 1,
      type: "spring",
      stiffness: 50,
    }}
    viewport={{ once: true }}
    className={getPriceItemClasses(position, tablePosition)}
  >
    {label}
    <span className="pl-12">{price}</span>
  </motion.div>
);

export default PriceItem;
