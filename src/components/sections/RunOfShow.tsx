"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { conclave } from "@/content/conclave";
import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";

/**
 * The Day 2 run of show. Panel 03 — where the winners of both tracks reach
 * the national stage — is highlighted and open by default; it is the link back
 * to the two tracks.
 */
export function RunOfShow() {
  const defaultOpen =
    conclave.runOfShow.find((item) => item.highlight)?.id ?? null;
  const [open, setOpen] = useState<string | null>(defaultOpen);
  const reduced = useReducedMotion();

  return (
    <ol className="flex flex-col">
      {conclave.runOfShow.map((item) => {
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            className={cn(
              "border-t border-[var(--line)] last:border-b",
              item.highlight && "border-t-[var(--gold)]/45 last:border-b-[var(--gold)]/45",
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-body`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="group flex w-full items-start gap-4 py-5 text-left md:gap-7"
              >
                <span
                  className={cn(
                    "label mt-1.5 shrink-0 tabular-nums",
                    item.highlight ? "text-[var(--gold)]" : "text-[var(--muted)]",
                  )}
                >
                  {item.start}
                  <span className="mt-1.5 block text-[var(--muted)]">
                    {item.end}
                  </span>
                </span>

                <span className="flex flex-1 flex-col gap-2">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span
                      className={cn(
                        "display text-[1.0625rem] leading-tight md:text-[1.3rem]",
                        item.highlight && "text-[var(--gold)]",
                      )}
                    >
                      {item.title}
                    </span>
                    {item.highlight ? (
                      <span className="label-sm label rounded-full border border-[var(--gold)]/50 px-2 py-1 text-[var(--gold)]">
                        Your track, on the national stage
                      </span>
                    ) : null}
                  </span>
                  {item.meta ? (
                    <span className="label-sm label text-[var(--muted)]">
                      {item.meta}
                    </span>
                  ) : null}
                </span>

                <span
                  aria-hidden="true"
                  className="relative mt-2 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors group-hover:border-[var(--line-strong)]"
                >
                  <span className="absolute h-px w-2.5 bg-current" />
                  <span
                    className={cn(
                      "absolute h-2.5 w-px bg-current transition-transform duration-[var(--d-base)] ease-[var(--e-out)]",
                      isOpen && "rotate-90",
                    )}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${item.id}-body`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.36, ease: EASE_OUT }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-5 pb-7 md:pl-[5.5rem]">
                    <p className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-[var(--muted)]">
                      {item.body}
                    </p>

                    {item.seats > 0 ? (
                      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {Array.from({ length: item.seats }).map((_, i) => (
                          <li
                            key={i}
                            className="flex flex-col gap-2 rounded-[var(--r-sm)] border border-dashed border-[var(--line)] p-3"
                          >
                            {/* Shape is ready for names, titles and photos. */}
                            <span
                              aria-hidden="true"
                              className="h-9 w-9 rounded-full border border-dashed border-[var(--line)]"
                            />
                            <span className="label-sm label text-[var(--muted)]">
                              {conclave.speakersPlaceholder}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
