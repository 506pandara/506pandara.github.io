"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      aria-hidden="true"
      animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="flex h-9 w-6 items-start justify-center rounded-full border border-border-subtle p-1.5">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-purple-bright"
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.div>
  );
}
