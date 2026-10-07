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
      data-ground="bone"
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
                name="delegatesFormal"
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover object-[55%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-0)] via-[var(--blue-0)]/25 to-transparent" />
              <p className="label absolute bottom-4 left-4 right-4 text-[var(--navy)]">
                Discover / Compete / Connect / Build / Impact
              </p>
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

            {/* The walk-through sits here, where the column would otherwise run out. */}
            <Reveal delay={2} className="mt-2">
              <div className="relative overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-5 pt-7 backdrop-blur-sm md:p-7 md:pt-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--crimson)] to-[var(--azure)]"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="label text-[var(--crimson)]">
                    {walkthrough.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[var(--muted)]">
                    {walkthrough.lead}
                  </p>
                </div>

                <ol className="mt-6 flex flex-col gap-5">
                  {walkthrough.days.map((day) => (
                    <li
                      key={day.id}
                      className="flex flex-col gap-3 border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0 sm:flex-row sm:gap-6"
                    >
                      <div className="flex shrink-0 flex-col gap-1.5 sm:w-[9rem]">
                        <span className="display text-[1.3rem] leading-none">
                          {day.day}
                        </span>
                        <span className="label-sm label text-[var(--muted)]">
                          {day.venue}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-[0.9375rem] leading-relaxed">
                          {day.body}
                        </p>
                        <ul className="flex flex-wrap gap-1.5">
                          {day.tags.map((tag) => (
                            <li
                              key={tag}
                              className="label-sm label rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[var(--muted)]"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Think / Build / Connect */}
        <ul className="mt-20 grid gap-px border-y border-[var(--line)] bg-[var(--line)] md:mt-24 md:grid-cols-3">
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

        {/* Progression — Discover → Compete → Connect → Build → Impact */}
        <Reveal className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          {about.progression.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[var(--line-strong)]"
                />
              ) : null}
              <span
                className="label rounded-full border px-3 py-2"
                style={{
                  color: i % 2 ? "var(--azure)" : "var(--crimson)",
                  borderColor: "var(--line)",
                  backgroundColor: "var(--surface)",
                }}
              >
                {step}
              </span>
            </span>
          ))}
        </Reveal>

        {/* Pull line over the Conclave hall. */}
        <Reveal className="mt-20 md:mt-28">
          <figure
            className="grain relative isolate overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--blue-2)] px-6 pb-16 pt-18 text-[var(--fg)] md:px-14 md:pb-24 md:pt-26"
          >
            <Photo
              name="hallWide"
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="-z-10 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-[var(--blue-1)]/38" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--blue-1)] via-[var(--blue-1)]/82 to-[var(--blue-2)]/14" />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[var(--crimson)] via-[var(--azure)] to-[var(--crimson)]"
            />

            <figcaption className="display max-w-[20ch] text-balance text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.02]">
              {about.pull}
            </figcaption>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
              {scaleStats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-1.5">
                  <dd className="figure text-[clamp(1.9rem,4vw,3rem)]">
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
