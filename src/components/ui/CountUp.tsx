"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_OUT } from "@/lib/motion";

type Props = {
  value: number;
  suffix?: string;
  /** Count-up runs once, the first time the figure scrolls into view. */
  durationMs?: number;
  className?: string;
};

const format = (n: number) => Math.round(n).toLocaleString("en-IN");

export function CountUp({
  value,
  suffix = "",
  durationMs = 1600,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: EASE_OUT,
      onUpdate: (v) => setShown(v),
    });
    return () => controls.stop();
  }, [inView, reduced, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {/* The real value stays in the a11y tree; the animated digits are decorative. */}
      <span className="sr-only">
        {format(value)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {format(reduced ? value : shown)}
        {suffix}
      </span>
    </span>
  );
}
