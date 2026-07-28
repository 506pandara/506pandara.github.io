"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  as?: "div" | "li" | "article";
  className?: string;
};

const components = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
};

export default function FadeUp({
  children,
  delay = 0,
  distance = 28,
  as = "div",
  className,
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = components[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
