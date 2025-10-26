import React from "react";
import { motion } from "framer-motion";
import LoaderImage from "../../assets/img/loader.png";

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, setIsLoading }) => {
  React.useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: !isLoading ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 flex items-center justify-center backdrop-blur-lg bg-white/30 z-50"
    >
      <img
        className="animate-spin-slow"
        width={150}
        height={150}
        src={LoaderImage}
        alt="loader"
      />
    </motion.div>
  );
};

export default Loader;
