"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { debateTopics } from "@/content/tracks";
import { EASE_OUT } from "@/lib/motion";

/**
 * A deck of sample motions, one card at a time. Never a long list — the point
 * is to show the flavour of the topics, not to publish the motion sheet.
 */
export function TopicCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = debateTopics.length;

  const go = useCallback(
    (dir: 1 | -1) => setI((v) => (v + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % count), 5200);
    return () => clearInterval(t);
  }, [paused, reduced, count]);

  const topic = debateTopics[i];

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative min-h-[11.5rem] sm:min-h-[10rem]">
        {/* Two stacked ghosts behind the live card give the deck its depth. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 top-3 h-full rounded-[var(--r-md)] border border-[var(--line)] opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-1.5 top-1.5 h-full rounded-[var(--r-md)] border border-[var(--line)] opacity-75"
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            key={topic.id}
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: EASE_OUT }}
            className="relative flex h-full min-h-[11.5rem] flex-col justify-between gap-5 rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--ink-800)] p-5 sm:min-h-[10rem] sm:p-6"
          >
            <p className="text-balance text-[1.0625rem] leading-snug sm:text-[1.1875rem]">
              {topic.text}
            </p>
            <footer className="flex items-center justify-between gap-4">
              <span className="label text-[var(--accent)]">{topic.tag}</span>
              <span className="label-sm label text-[var(--muted)]">
                {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1.5" role="tablist" aria-label="Sample motions">
          {debateTopics.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Motion ${idx + 1}`}
              onClick={() => setI(idx)}
              className="h-6 w-6 shrink-0"
            >
              <span
                className={`block h-[3px] w-full rounded-full transition-colors duration-[var(--d-base)] ${
                  idx === i ? "bg-[var(--accent)]" : "bg-[var(--line-strong)]"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="ml-auto flex gap-1.5">
          <CarouselButton label="Previous motion" onClick={() => go(-1)}>
            <path d="M10 3 5 8l5 5" />
          </CarouselButton>
          <CarouselButton label="Next motion" onClick={() => go(1)}>
            <path d="m6 3 5 5-5 5" />
          </CarouselButton>
        </div>
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--fg)] transition-colors duration-[var(--d-fast)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <span className="sr-only">{label}</span>
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
