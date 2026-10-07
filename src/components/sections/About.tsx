import { about, walkthrough } from "@/content/site";
import { scaleStats } from "@/content/stats";
import { CountUp } from "@/components/ui/CountUp";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id={about.id}
      data-ground="ink"
      className="section scroll-mt-20"
      aria-labelledby="about-title"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading index={about.index} kicker={about.kicker} />
            <Reveal
              delay={1}
              className="grain relative hidden aspect-[4/5] overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] lg:block"
            >
              <Photo
                name="aboutSpeaker"
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover object-center"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-10">
            <Reveal>
              <h2
                id="about-title"
                className="display-prose max-w-[26ch] text-[clamp(1.5rem,3vw,2.4rem)]"
              >
                {about.lead.map((seg, i) =>
                  seg.strong ? (
                    <strong
                      key={i}
                      className={seg.accent ? "text-[var(--crimson)]" : undefined}
                    >
                      {seg.text}
                    </strong>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  ),
                )}
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <blockquote className="border-l-2 border-[var(--crimson)] pl-6">
                <p className="lede max-w-[42ch] font-medium">
                  {about.proposition}
                </p>
              </blockquote>
            </Reveal>

            {/* The walk-through: two days, set as plain text under a rule. */}
            <Reveal delay={2} className="mt-2">
              <h3 className="label border-b border-[var(--line-strong)] pb-3 text-[var(--crimson)]">
                {walkthrough.label}
              </h3>

              <dl className="mt-6 flex flex-col gap-6">
                {walkthrough.days.map((day) => (
                  <div
                    key={day.id}
                    className="grid gap-2 border-t border-[var(--line)] pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-7"
                  >
                    <dt className="flex flex-col gap-1">
                      <span className="display text-[1.25rem] leading-none">
                        {day.day}
                      </span>
                      <span className="text-[0.8125rem] leading-snug text-[var(--muted)]">
                        {day.venue}
                      </span>
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-[var(--muted)]">
                      {day.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Think / Build / Connect */}
        <ul className="mt-16 grid gap-px border-y border-[var(--line)] bg-[var(--line)] md:mt-20 md:grid-cols-3">
          {about.beats.map((beat, i) => (
            <Reveal
              key={beat.id}
              as="li"
              delay={i}
              className="flex flex-col gap-3 bg-[var(--bg)] py-8 md:px-7 md:first:pl-0"
            >
              <span
                className="label"
                style={{ color: i % 2 ? "var(--azure)" : "var(--crimson)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display display-sm">
                {beat.title}{" "}
                <span className="text-[var(--muted)]">{beat.body}</span>
              </h3>
              <p className="max-w-[32ch] text-sm leading-relaxed text-[var(--muted)]">
                {beat.detail}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* Pull line over the Conclave hall. */}
        <Reveal className="mt-16 md:mt-20">
          <figure className="grain relative isolate overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--paper-0)] px-6 pb-16 pt-18 text-[var(--fg)] shadow-[var(--shadow-md)] md:px-14 md:pb-24 md:pt-26">
            <Photo
              name="hallWide"
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="-z-10 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-[var(--paper-0)]/34" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--paper-0)] via-[var(--paper-0)]/84 to-[var(--paper-0)]/10" />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--crimson)] via-[var(--azure)] to-[var(--crimson)]"
            />

            <figcaption className="display max-w-[20ch] text-balance text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.02]">
              {about.pull}
            </figcaption>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
              {scaleStats.map((stat, i) => (
                <div key={stat.id} className="flex flex-col gap-1.5">
                  <dd
                    className="figure text-[clamp(1.9rem,4vw,3rem)]"
                    style={{ color: i % 2 ? "var(--azure)" : "var(--crimson)" }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="text-[0.8125rem] text-[var(--muted)]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
