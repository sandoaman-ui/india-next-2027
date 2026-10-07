import { conclave } from "@/content/conclave";
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

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="panel rounded-[var(--r-md)] p-5 md:p-6">
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
              <p className="label mt-5 text-[var(--crimson)]">{conclave.venue}</p>
            </div>
          </Reveal>

          <RunOfShow />
        </div>
      </div>
    </section>
  );
}
