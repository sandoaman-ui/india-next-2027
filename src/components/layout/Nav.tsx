"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Cta } from "@/components/ui/Cta";
import { ScrollProgress } from "./ScrollProgress";
import { Wordmark } from "./Wordmark";
import { EASE_OUT } from "@/lib/motion";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--navy-900)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        data-ground="bone"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-[var(--d-base)]",
          solid || open
            ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper-0)_84%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-[4.5rem] items-center justify-between gap-6"
        >
          <Link
            href="#top"
            className="shrink-0 whitespace-nowrap text-[var(--fg)] text-[1.0625rem] sm:text-lg"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
            <span className="sr-only">{site.name} — home</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative rounded-full px-3.5 py-2 text-[0.875rem] text-[var(--muted)] transition-colors duration-[var(--d-fast)] hover:text-[var(--fg)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Cta href={nav.cta.href} size="sm" variant="solid">
                {nav.cta.label}
              </Cta>
            </span>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative -mr-1 grid h-10 w-10 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--fg)] lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <span className="relative block h-3 w-4" aria-hidden="true">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-[var(--d-base)] ease-[var(--e-out)]",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-current transition-transform duration-[var(--d-base)] ease-[var(--e-out)]",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: EASE_OUT }}
              className="overflow-hidden bg-[color-mix(in_oklab,var(--paper-0)_94%,transparent)] lg:hidden"
            >
              <ul className="shell flex flex-col gap-1 pb-7 pt-3">
                {nav.links.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-[var(--line)] py-4 text-[var(--fg)]"
                    >
                      <span className="label-sm label text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display display-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <ScrollProgress />
      </header>
    </>
  );
}
