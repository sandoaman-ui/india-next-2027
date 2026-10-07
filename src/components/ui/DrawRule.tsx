"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";

/**
 * The short rule that sits between a section's number and its kicker. It draws
 * itself in on entry — a small, repeated piece of motion that gives the long
 * scroll a rhythm without anything moving under the reader.
 */
export function DrawRule({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "block h-px w-10 origin-left bg-gradient-to-r from-[var(--crimson)] to-[var(--azure)]",
        className,
      )}
      initial={reduced ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
    />
  );
}
