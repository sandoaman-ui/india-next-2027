"use client";

import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/content/site";
import { Cta } from "@/components/ui/Cta";
import { EASE_OUT } from "@/lib/motion";

const rise = {
  hidden: { opacity: 0, y: "30%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.95, delay: 0.1 + i * 0.085, ease: EASE_OUT },
  }),
};

/**
 * Hero lockup. The name lands solid, the year is drawn as an outline so the eye
 * reads "Bharat Yuva Niti" first and the edition second.
 */
export function HeroTitle() {
  const reduced = useReducedMotion();
  const anim = (i: number) =>
    reduced
      ? {}
      : {
          variants: rise,
          initial: "hidden" as const,
          animate: "show" as const,
          custom: i,
        };

  return (
    <div className="flex flex-col gap-6">
      <motion.p {...anim(0)} className="label text-[var(--muted)]">
        {hero.eyebrow}
      </motion.p>

      <h1 className="display display-xl flex flex-col">
        <span className="sr-only">
          {hero.headline.join(" ")} — {hero.subheadline}
        </span>

        <span aria-hidden="true" className="flex flex-col">
          <span className="overflow-hidden pb-[0.05em]">
            <motion.span {...anim(1)} className="block">
              Bharat{" "}
              <span className="inline-block text-[var(--crimson)]">Yuva</span>
            </motion.span>
          </span>

          <span className="overflow-hidden pb-[0.05em]">
            <motion.span
              {...anim(2)}
              className="flex flex-wrap items-baseline gap-x-[0.28em]"
            >
              <span>Niti</span>
              <span className="text-transparent [-webkit-text-stroke:1.5px_var(--blue-6)] md:[-webkit-text-stroke:2px_var(--blue-6)]">
                2027
              </span>
            </motion.span>
          </span>
        </span>
      </h1>

      <motion.div
        {...anim(3)}
        className="flex flex-col gap-7 border-l-2 border-[var(--crimson)] pl-5 md:max-w-[54ch] md:pl-7"
      >
        <div className="flex flex-col gap-3">
          <p className="display text-[clamp(1.15rem,2.6vw,1.9rem)] leading-tight tracking-[-0.02em]">
            {hero.subheadline}
          </p>
          <p className="lede text-[var(--muted)]">{hero.lede}</p>
        </div>

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
