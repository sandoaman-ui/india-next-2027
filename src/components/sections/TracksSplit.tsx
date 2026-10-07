"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Fragment, useState } from "react";

import {
  comparisonRows,
  debate,
  founders,
  tracks,
  type Track,
  type TrackId,
} from "@/content/tracks";
import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";
import { Photo } from "@/components/ui/Photo";
import { TrackCell } from "./TrackCells";

/** Shared across the head row and every comparison row, so columns stay locked. */
const GRID = "grid grid-cols-[9.5rem_minmax(0,1fr)_minmax(0,1fr)]";

/**
 * The Debate and the Innovators Challenge, side by side — the rule the whole
 * site is built around.
 *
 * Desktop: a spec-sheet. A left anchor column names each row; the two tracks sit
 * in their own colour fields to its right, so the comparison reads horizontally
 * across one grid.
 * Mobile: the intro pair stays paired, and a sticky two-option switch swaps the
 * same rows in place. Row order is identical on both sides.
 */
export function TracksSplit() {
  const [active, setActive] = useState<TrackId>("debate");
  const reduced = useReducedMotion();
  const current = active === "debate" ? debate : founders;

  return (
    <>
      {/* ---------------- Desktop: the comparison sheet ---------------- */}
      <div className="hidden lg:block">
        <div className={cn(GRID, "items-stretch")}>
          <div className="flex flex-col justify-end pb-7 pr-6">
            <span className="label text-[var(--muted)]">Side by side</span>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-[var(--muted)]">
              Same forum, same two days. Read across.
            </p>
          </div>
          {tracks.map((track) => (
            <TrackHead key={track.id} track={track} />
          ))}
        </div>

        {comparisonRows.map((row) => (
          <div key={row.id} className={cn(GRID, "border-t border-[var(--line)]")}>
            <div className="flex gap-3 py-9 pr-6">
              <span className="label mt-[0.3em] tabular-nums text-[var(--bone-500)]">
                {row.num}
              </span>
              <h4 className="text-[0.95rem] font-semibold leading-snug tracking-[-0.01em]">
                {row.label}
              </h4>
            </div>

            {tracks.map((track) => (
              <div
                key={track.id}
                data-track={track.id}
                className="track-field flex flex-col border-l border-[var(--line)] px-7 py-9"
              >
                <TrackCell track={track} row={row.id} />
              </div>
            ))}
          </div>
        ))}

        <div className={cn(GRID, "border-t border-[var(--line)]")}>
          <div />
          {tracks.map((track) => (
            <div
              key={track.id}
              data-track={track.id}
              className="h-1.5 border-l border-[var(--line)] bg-[var(--accent)]"
            />
          ))}
        </div>
      </div>

      {/* ---------------------- Mobile: paired + switch ---------------------- */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {tracks.map((track) => (
            <div key={track.id} data-track={track.id}>
              <TrackIntroCompact track={track} />
            </div>
          ))}
        </div>

        <div
          className="sticky top-[4.5rem] z-30 -mx-[var(--gutter)] mt-8 bg-[color-mix(in_oklab,var(--bg)_92%,transparent)] px-[var(--gutter)] py-3 backdrop-blur-xl"
        >
          <div
            role="tablist"
            aria-label="Compare the two tracks"
            className="relative grid grid-cols-2 gap-1 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] p-1"
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
                  className="relative z-10 h-10 rounded-full text-[0.8125rem] font-semibold transition-colors duration-[var(--d-fast)]"
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

        <div data-track={active} className="track-field -mx-[var(--gutter)] mt-1 px-[var(--gutter)]">
          {comparisonRows.map((row) => (
            <div
              key={row.id}
              className="border-t border-[var(--line)] py-7 first:border-t-0"
            >
              <div className="mb-4 flex items-baseline gap-2.5">
                <span className="label tabular-nums text-[var(--accent)]">
                  {row.num}
                </span>
                <h4 className="text-[0.9375rem] font-semibold tracking-[-0.01em]">
                  {row.label}
                </h4>
              </div>
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

/** The column head: an accent bar, the plate, the name, the one-liner. */
function TrackHead({ track }: { track: Track }) {
  return (
    <div
      data-track={track.id}
      className="track-field-strong flex flex-col border-l border-[var(--line)]"
    >
      <span aria-hidden="true" className="h-1.5 w-full bg-[var(--accent)]" />

      <div className="flex flex-col gap-5 px-7 pb-8 pt-7">
        <div className="grain relative aspect-[16/9] overflow-hidden rounded-[var(--r-md)]">
          <Photo
            name={track.image}
            sizes="(max-width: 1024px) 50vw, 40vw"
            className="object-cover object-top transition-transform duration-[1200ms] ease-[var(--e-out)] hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="label text-[var(--accent)]">
            Track {track.id === "debate" ? "01" : "02"} · {track.identity}
          </span>
          <h3 className="display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.02]">
            {track.name}
          </h3>
          <p className="max-w-[36ch] text-sm leading-relaxed text-[var(--muted)]">
            {track.oneLiner}
          </p>
        </div>
      </div>
    </div>
  );
}

/** The compact pair that heads both columns on small screens. */
function TrackIntroCompact({ track }: { track: Track }) {
  return (
    <div className="track-field-strong flex h-full flex-col overflow-hidden rounded-[var(--r-md)] border border-[var(--line)]">
      <span aria-hidden="true" className="h-1 w-full bg-[var(--accent)]" />

      <div className="grain relative aspect-[5/4] overflow-hidden">
        <Photo
          name={track.image}
          sizes="48vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <span className="label text-[var(--accent)]">{track.shortName}</span>
        <h3 className="display text-[clamp(1rem,4.4vw,1.5rem)] leading-[1.05]">
          {track.name}
        </h3>
        <p className="text-[0.75rem] leading-relaxed text-[var(--muted)]">
          {track.oneLiner}
        </p>
        <p className="figure mt-auto pt-3 text-[clamp(1.35rem,5.5vw,2rem)] text-[var(--accent)]">
          {track.figure}
          <span className="label-sm label mt-1.5 block text-[var(--muted)]">
            {track.figureLabel}
          </span>
        </p>
      </div>
    </div>
  );
}
