"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  as: Component = "div",
  className = "",
  y,
}) {
  const MotionComponent = motion[Component] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={y !== undefined ? { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } } : variants}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
