"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline at the foot of the header that tracks reading position. Doubles as
 * the one place both accents appear together.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.span
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[var(--crimson)] via-[var(--azure)] to-[var(--crimson)]"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  );
}
