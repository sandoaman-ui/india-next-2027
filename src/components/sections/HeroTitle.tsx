"use client";

import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/content/site";
import { Cta } from "@/components/ui/Cta";
import { EASE_OUT } from "@/lib/motion";

const rise = {
  hidden: { opacity: 0, y: "32%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 1, delay: 0.1 + i * 0.09, ease: EASE_OUT },
  }),
};

/**
 * Hero lockup. "India Next" lands solid, the year is drawn as an outline so the
 * eye reads the name first and the edition second.
 */
export function HeroTitle() {
  const reduced = useReducedMotion();
  const anim = (i: number) =>
    reduced
      ? {}
      : { variants: rise, initial: "hidden" as const, animate: "show" as const, custom: i };

  return (
    <div className="flex flex-col gap-7">
      <motion.p
        {...anim(0)}
        className="label text-[var(--muted)]"
      >
        {hero.eyebrow}
      </motion.p>

      <h1 className="display display-xl flex flex-col">
        <span className="sr-only">
          {hero.headline.join(" ")} — {hero.subheadline}
        </span>

        <span aria-hidden="true" className="flex flex-col">
          <span className="overflow-hidden pb-[0.06em]">
            <motion.span {...anim(1)} className="block">
              India{" "}
              <span className="inline-block text-[var(--crimson)]">Next</span>
            </motion.span>
          </span>

          <span className="flex flex-wrap items-end gap-x-8 gap-y-5">
            <span className="overflow-hidden pb-[0.06em]">
              <motion.span
                {...anim(2)}
                className="block text-transparent [-webkit-text-stroke:1px_var(--line-strong)] md:[-webkit-text-stroke:1.5px_var(--line-strong)]"
              >
                2027
              </motion.span>
            </span>
          </span>
        </span>
      </h1>

      <motion.div
        {...anim(3)}
        className="flex flex-col gap-8 border-l border-[var(--line-strong)] pl-5 md:max-w-[52ch] md:pl-7"
      >
        <p className="lede text-balance text-[var(--fg)]">
          {hero.subheadline}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Cta href={hero.primaryCta.href} size="lg" variant="solid">
            {hero.primaryCta.label}
          </Cta>
          <Cta href={hero.secondaryCta.href} size="lg" variant="outline">
            {hero.secondaryCta.label}
          </Cta>
        </div>
      </motion.div>
    </div>
  );
}
