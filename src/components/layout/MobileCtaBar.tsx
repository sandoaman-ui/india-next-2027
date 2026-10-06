"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { debate, founders } from "@/content/tracks";
import { Cta } from "@/components/ui/Cta";
import { EASE_OUT } from "@/lib/motion";

/**
 * Persistent bottom bar on small screens. Appears once the hero is behind you
 * and hides again over the final CTA, where the same two buttons already live.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const apply = document.getElementById("apply");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const atApply = apply
        ? apply.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setVisible(pastHero && !atApply);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          data-ground="ink"
          initial={reduced ? false : { y: "110%" }}
          animate={{ y: 0 }}
          exit={reduced ? undefined : { y: "110%" }}
          transition={{ duration: 0.42, ease: EASE_OUT }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[color-mix(in_oklab,var(--ink-900)_92%,transparent)] backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Two tracks, two buttons, side by side — same rule as everywhere else. */}
          <div className="grid grid-cols-2 gap-2 px-4 py-3">
            <div data-track="debate">
              <Cta
                href={debate.cta.href}
                variant="accent"
                size="md"
                className="w-full"
              >
                Debate
              </Cta>
            </div>
            <div data-track="founders">
              <Cta
                href={founders.cta.href}
                variant="accent"
                size="md"
                className="w-full"
              >
                Founders
              </Cta>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
