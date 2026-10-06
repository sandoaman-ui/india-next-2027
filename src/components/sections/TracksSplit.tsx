"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Fragment, useState } from "react";

import {
  comparisonRows,
  debate,
  founders,
  tracks,
  type TrackId,
} from "@/content/tracks";
import { cn } from "@/lib/cn";
import { TrackCell, TrackIntro } from "./TrackCells";
import { EASE_OUT } from "@/lib/motion";

/**
 * Debate and Founders, side by side — the rule the whole site is built around.
 *
 * Desktop: one grid, three columns (Debate | row label | Founders). Rows are
 * grid rows, so the comparison is guaranteed to read horizontally.
 * Mobile: the intro pair stays paired, and a sticky two-option switch swaps the
 * same rows in place. Row order is identical on both sides.
 */
export function TracksSplit() {
  const [active, setActive] = useState<TrackId>("debate");
  const reduced = useReducedMotion();
  const current = active === "debate" ? debate : founders;

  return (
    <>
      {/* ---------------- Desktop / tablet: the split grid ---------------- */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_9rem_minmax(0,1fr)]">
        {tracks.map((track, i) => (
          <Fragment key={track.id}>
            <div
              data-track={track.id}
              className={cn("pb-12", i === 0 ? "pr-10" : "pl-10")}
            >
              <TrackIntro track={track} />
            </div>
            {i === 0 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center border-x border-[var(--line)] pb-12"
              >
                <span className="display text-3xl leading-none text-[var(--line-strong)]">
                  &times;
                </span>
              </div>
            ) : null}
          </Fragment>
        ))}

        {comparisonRows.map((row) => (
          <Fragment key={row.id}>
            <div
              data-track="debate"
              className="flex flex-col border-t border-[var(--line)] py-10 pr-10"
            >
              <TrackCell track={debate} row={row.id} />
            </div>

            <div className="flex justify-center border-x border-t border-[var(--line)] px-3 py-10">
              <span className="label sticky top-28 self-start text-center leading-[1.6] text-[var(--muted)]">
                {row.label}
              </span>
            </div>

            <div
              data-track="founders"
              className="flex flex-col border-t border-[var(--line)] py-10 pl-10"
            >
              <TrackCell track={founders} row={row.id} />
            </div>
          </Fragment>
        ))}
      </div>

      {/* ---------------------- Mobile: paired + switch ---------------------- */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {tracks.map((track) => (
            <div key={track.id} data-track={track.id}>
              <TrackIntro track={track} />
            </div>
          ))}
        </div>

        <div
          data-ground="ink"
          className="sticky top-[4.5rem] z-30 -mx-[var(--gutter)] mt-10 bg-[color-mix(in_oklab,var(--ink-900)_92%,transparent)] px-[var(--gutter)] py-3 backdrop-blur-xl"
        >
          <div
            role="tablist"
            aria-label="Compare the two tracks"
            className="relative grid grid-cols-2 gap-1 rounded-full border border-[var(--line)] p-1"
          >
            {tracks.map((track) => {
              const on = active === track.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  data-track={track.id}
                  onClick={() => setActive(track.id)}
                  className="relative z-10 h-10 rounded-full text-[0.8125rem] font-medium transition-colors duration-[var(--d-fast)]"
                  style={{ color: on ? "#fff" : "var(--muted)" }}
                >
                  {on ? (
                    <motion.span
                      layoutId="track-switch"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 36 }
                      }
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]"
                    />
                  ) : null}
                  {track.shortName}
                </button>
              );
            })}
          </div>
        </div>

        <div data-track={active}>
          {comparisonRows.map((row) => (
            <div
              key={row.id}
              className="border-t border-[var(--line)] py-7 first:border-t-0"
            >
              <p className="label mb-4 text-[var(--muted)]">{row.label}</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${row.id}-${active}`}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.26, ease: EASE_OUT }}
                >
                  <TrackCell track={current} row={row.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
