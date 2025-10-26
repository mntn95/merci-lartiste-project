import { motion } from "framer-motion";
import React from "react";

export type ButtonVariant = "outline" | "filled" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  animated?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outline",
  size = "md",
  children,
  fullWidth = false,
  animated = true,
  className = "",
  ...props
}) => {
  const baseClasses = "font-medium transition-colors duration-200 rounded-sm";

  const variantClasses = {
    outline:
      "text-[#755018] border-[0.8px] border-[#755018] rounded-[1px] bg-inherit px-[0.7rem] py-[0.3rem] pb-[0.1rem] hover:underline",
    filled:
      "px-6 py-2 bg-white/30 border-[0.4px] border-[#755018] text-[#755018] hover:underline",
    ghost: "bg-transparent hover:underline text-[#755018]",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`.trim();

  if (animated) {
    return (
      <motion.button
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
