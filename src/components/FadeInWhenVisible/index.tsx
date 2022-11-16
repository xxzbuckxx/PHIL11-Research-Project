import React from "react";
import { motion } from "framer-motion";

export interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = (
  props: FadeInWhenVisibleProps
) => {
  const { children } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
