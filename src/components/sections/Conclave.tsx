import { conclave } from "@/content/conclave";
import { stats } from "@/content/stats";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RunOfShow } from "./RunOfShow";

export function Conclave() {
  return (
    <section
      id={conclave.id}
      data-ground="ink"
      className="section scroll-mt-16"
      aria-labelledby="conclave-title"
    >
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <SectionHeading
            index={conclave.index}
            kicker={conclave.kicker}
            title={<span id="conclave-title">{conclave.header}</span>}
          />
          <Reveal delay={2} className="md:max-w-[40ch] md:pb-2">
            <p className="lede text-[var(--muted)]">{conclave.subheader}</p>
          </Reveal>
        </div>

        {/* The room the whole summit ends up in. */}
        <Reveal
          delay={1}
          className="grain relative mt-12 aspect-[16/10] overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] sm:aspect-[21/9] md:mt-16"
        >
          <Photo
            name={conclave.image}
            sizes="(max-width: 1440px) 100vw, 1376px"
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-[var(--ink-900)]/20 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-7">
            <p className="label text-[var(--gold)]">
              Day 02 · main stage · 5 hours
            </p>
            <p className="figure text-[clamp(1.75rem,4vw,2.75rem)]">
              {stats.youngIndians.value.toLocaleString("en-IN")}
              {stats.youngIndians.suffix}
              <span className="label ml-3 align-middle text-[var(--muted)]">
                in the room
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20 md:mt-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--r-md)] border border-[var(--line)] p-5 md:p-6">
              <p className="label mb-3 text-[var(--muted)]">
                Programme principle
              </p>
              <p className="text-[0.9375rem] leading-relaxed">
                {conclave.principle}
              </p>
              <p className="mt-5 border-t border-[var(--line)] pt-4 text-[0.8125rem] leading-relaxed text-[var(--muted)]">
                Panel 03 is where the winners of both tracks take this stage.
                That is the point of the whole forum.
              </p>
              <p className="label mt-5 text-[var(--gold)]">{conclave.venue}</p>
            </div>
          </Reveal>

          <RunOfShow />
        </div>
      </div>
    </section>
  );
}
