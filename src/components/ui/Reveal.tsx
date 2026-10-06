"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ReactNode } from "react";

import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplied by 60ms. */
  delay?: number;
  /** How far it travels in. Small by default; this is editorial, not bouncy. */
  y?: number;
  as?: "div" | "li" | "span" | "section";
  /** Ground / track scoping travels through, so Reveal can wrap a scoped block. */
  "data-track"?: "debate" | "founders";
  "data-ground"?: "ink" | "bone";
};

/**
 * One reveal primitive for the whole site, so timing stays consistent.
 * Animates once, on entry, and collapses to a plain element under reduced
 * motion — keeping the same tag, so list semantics survive.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  as = "div",
  ...scope
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className, ...scope }, children);
  }

  const Tag = motion[as];

  return (
    <Tag
      {...scope}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.8,
        delay: delay * 0.06,
        ease: EASE_OUT,
      }}
    >
      {children}
    </Tag>
  );
}
