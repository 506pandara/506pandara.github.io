"use client";

import { motion, useReducedMotion } from "framer-motion";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

function makeParticles(count: number) {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: pseudoRandom(id + 1) * 100,
    top: pseudoRandom(id + 51) * 100,
    size: pseudoRandom(id + 101) * 2 + 1,
    duration: pseudoRandom(id + 151) * 10 + 10,
    delay: pseudoRandom(id + 201) * 6,
  }));
}

const particles = makeParticles(22);

export default function Particles() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-purple-bright/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
