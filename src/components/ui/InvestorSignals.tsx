"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { investorSignals, investorsNote } from "@/content/tracks";
import { EASE_OUT } from "@/lib/motion";

type SignalId = (typeof investorSignals)[number]["id"];

/* Signal colours read off the active ground, so they hold on paper and on navy. */
const tone: Record<SignalId, string> = {
  build: "var(--azure)",
  mentor: "var(--gold)",
  watch: "var(--muted)",
  pass: "var(--line-strong)",
};

/**
 * A sample innovator card an investor can stamp. The point of the interaction
 * is the message underneath it: the 200 are a discovery network leaving
 * signals, not a panel handing out scores.
 */
export function InvestorSignals() {
  const [active, setActive] = useState<SignalId | null>(null);
  const reduced = useReducedMotion();
  const chosen = investorSignals.find((s) => s.id === active);

  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--surface)] p-5 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="label-sm label text-[var(--muted)]">
              Innovator · sample card
            </span>
            {/* Illustrative only — not a real applicant. */}
            <p className="display text-[1.35rem] leading-tight">
              Cold-chain loss tracker
            </p>
            <p className="max-w-[30ch] text-[0.8125rem] leading-relaxed text-[var(--muted)]">
              Working prototype · Tier-2 agri supply chains · 2 pilots running
            </p>
          </div>

          <AnimatePresence>
            {chosen ? (
              <motion.span
                key={chosen.id}
                initial={reduced ? false : { scale: 1.5, opacity: 0, rotate: -14 }}
                animate={{ scale: 1, opacity: 1, rotate: -7 }}
                exit={reduced ? undefined : { scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="label shrink-0 rounded-[var(--r-xs)] border-2 px-2.5 py-1.5"
                style={{
                  color: tone[chosen.id],
                  borderColor: tone[chosen.id],
                }}
              >
                {chosen.stamp}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>

        <p className="mt-5 min-h-[2.5rem] border-t border-[var(--line)] pt-4 text-[0.8125rem] leading-relaxed text-[var(--muted)]">
          {chosen ? chosen.body : "Pick a signal to see what an investor leaves behind."}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {investorSignals.map((signal) => (
          <button
            key={signal.id}
            type="button"
            aria-pressed={active === signal.id}
            onClick={() =>
              setActive((v) => (v === signal.id ? null : signal.id))
            }
            className="label rounded-full border px-3.5 py-2 transition-colors duration-[var(--d-fast)]"
            style={
              active === signal.id
                ? { color: tone[signal.id], borderColor: tone[signal.id] }
                : { color: "var(--muted)", borderColor: "var(--line)" }
            }
          >
            {signal.stamp}
          </button>
        ))}
      </div>

      <div className="rounded-[var(--r-md)] border border-[var(--line)] p-5">
        <p className="text-[0.9375rem] font-medium leading-snug">
          {investorsNote.headline}
        </p>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--muted)]">
          {investorsNote.body}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
          {investorsNote.modes.map((mode) => (
            <li key={mode} className="label-sm label text-[var(--muted)]">
              {mode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
