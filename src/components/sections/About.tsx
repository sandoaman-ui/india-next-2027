import { about } from "@/content/site";
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading index={about.index} kicker={about.kicker} />
            <Reveal
              delay={1}
              className="grain relative hidden aspect-[4/5] overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] lg:block"
            >
              <Photo
                name="debatePodiumTwo"
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)]/80 via-transparent to-transparent" />
              <p className="label absolute bottom-4 left-4 right-4 text-[var(--bone-200)]">
                Discover / Compete / Connect / Build / Impact
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10">
            <Reveal>
              <h2 id="about-title" className="display max-w-[20ch] text-[clamp(1.75rem,3.6vw,2.9rem)]">
                {about.lead}
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <blockquote className="border-l-2 border-[var(--crimson)] pl-6">
                <p className="lede max-w-[42ch] font-medium">
                  {about.proposition}
                </p>
              </blockquote>
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
              <span className="label text-[var(--muted)]">
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
                <span aria-hidden="true" className="text-[var(--line-strong)]">
                  /
                </span>
              ) : null}
              <span className="label text-[var(--muted)]">{step}</span>
            </span>
          ))}
        </Reveal>

        {/* Pull line over photography. */}
        <Reveal className="mt-20 md:mt-28">
          <figure
            data-ground="ink"
            className="grain relative isolate overflow-hidden rounded-[var(--r-lg)] bg-[var(--ink-900)] px-6 py-16 text-[var(--fg)] md:px-14 md:py-24"
          >
            <Photo
              name="packedHall"
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="-z-10 object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--ink-900)] via-[var(--ink-900)]/70 to-transparent" />

            <figcaption className="display display-md max-w-[20ch] text-balance">
              {about.pull}
            </figcaption>

            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
              {scaleStats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-1">
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
