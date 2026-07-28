"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "green";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-purple to-purple-bright text-white shadow-[var(--shadow-glow-purple)] hover:shadow-[0_0_55px_rgba(168,85,247,0.4)]",
  secondary:
    "border border-green text-green bg-transparent hover:bg-green hover:text-bg-primary",
  green:
    "bg-gradient-to-r from-green to-green-accent text-bg-primary shadow-[var(--shadow-glow-green)] hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
