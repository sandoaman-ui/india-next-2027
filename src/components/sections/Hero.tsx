import Link from "next/link";

import { hero, site } from "@/content/site";
import { heroStats } from "@/content/stats";
import { tracks } from "@/content/tracks";
import { CountUp } from "@/components/ui/CountUp";
import { Arrow } from "@/components/ui/Cta";
import { HeroPlate } from "./HeroPlate";
import { HeroTitle } from "./HeroTitle";

export function Hero() {
  return (
    <section
      id="top"
      data-ground="bone"
      className="relative isolate overflow-hidden bg-[var(--bg)] bg-[image:var(--bg-grad)] text-[var(--fg)]"
    >
      {/* Full-bleed plate: real delegates, heavily scrimmed so type stays AA. */}
      <div className="grain absolute inset-0 -z-10">
        <HeroPlate />
        {/* A light veil, weighted towards the type on the left, so the plate
            stays photographic on the right without ever going dark. */}
        <div className="absolute inset-0 bg-[var(--paper-0)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--paper-0)] via-[var(--paper-0)]/82 to-[var(--paper-0)]/8" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--paper-0)]/55 via-transparent to-[var(--paper-0)]" />
      </div>

      <div className="shell flex min-h-[88svh] flex-col justify-between pb-10 pt-[7.5rem] md:pb-12 md:pt-[8.5rem]">
        <HeroTitle />

        {/* The number strip. Counts up once, as the page settles. */}
        <div className="mt-14 md:mt-16">
          <p className="label mb-6 text-[var(--muted)]">{hero.support}</p>
          <dl className="grid grid-cols-2 border-t border-[var(--line)] md:grid-cols-4">
            {heroStats.map((stat, i) => (
              <div
                key={stat.id}
                className="flex flex-col gap-1.5 border-b border-[var(--line)] py-5 pr-4 md:border-b-0 md:py-7 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-[var(--line)] [&:nth-child(odd)]:pr-4 md:[&:nth-child(odd)]:border-r-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-[var(--line)] md:[&:not(:first-child)]:pl-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="figure text-[clamp(2.1rem,5.2vw,3.6rem)]">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    durationMs={1400 + i * 180}
                    immediate
                  />
                </dd>
                <dd className="text-[0.8125rem] leading-snug text-[var(--muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Two tracks, side by side, from the very first screen. */}
      <div className="shell pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--line)] shadow-[var(--shadow-md)]">
          {tracks.map((track) => (
            <Link
              key={track.id}
              href="#tracks"
              data-track={track.id}
              className="group relative flex flex-col justify-between gap-7 bg-[var(--paper-0)] p-4 transition-colors duration-[var(--d-base)] hover:bg-[var(--paper-2)] sm:p-6 md:gap-10 md:p-9"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]"
              />
              <div className="flex flex-col gap-4">
                <span className="label text-[var(--accent)]">
                  {track.identity}
                </span>
                <h2 className="display text-[clamp(1.1rem,4.6vw,2rem)] leading-[1.02]">
                  {track.name}
                </h2>
                <p className="max-w-[34ch] text-[0.8125rem] leading-relaxed text-[var(--muted)] sm:text-sm">
                  {track.oneLiner}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[0.8125rem] text-[var(--fg)] sm:text-sm">
                {track.cta.label}
                <Arrow />
              </span>
            </Link>
          ))}
        </div>

        <p className="label mt-6 text-center text-[var(--muted)]">
          {site.tagline} · {hero.dateline}
        </p>
      </div>

      {/* Quiet scroll affordance on desktop only. */}
      <Link
        href={hero.secondaryCta.href}
        className="label absolute bottom-7 right-[var(--gutter)] hidden items-center gap-3 text-[var(--muted)] transition-colors hover:text-[var(--fg)] xl:inline-flex"
      >
        {hero.secondaryCta.label}
        <span aria-hidden="true" className="h-10 w-px bg-[var(--line-strong)]" />
      </Link>
    </section>
  );
}
