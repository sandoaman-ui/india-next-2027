"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Photo } from "@/components/ui/Photo";

/**
 * The hero photograph, drifting slowly as the page scrolls. Small enough that
 * it reads as depth rather than as an effect, and inert under reduced motion.
 */
export function HeroPlate() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], ["0%", "12%"]);
  const scale = useTransform(scrollY, [0, 1000], [1.06, 1.16]);

  return (
    <motion.div
      className="absolute inset-0"
      style={reduced ? undefined : { y, scale }}
    >
      <Photo
        name="heroCohort"
        sizes="100vw"
        preload
        className="object-cover object-[50%_42%]"
      />
    </motion.div>
  );
}
