import { pillars } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pillars() {
  return (
    <section
      id={pillars.id}
      data-ground="bone"
      className="section"
      aria-labelledby="pillars-title"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-20">
          <SectionHeading
            index={pillars.index}
            kicker={pillars.kicker}
            title={
              <span id="pillars-title">
                An ecosystem,
                <br />
                not a conference.
              </span>
            }
          />
          <Reveal delay={1} className="lg:pt-4">
            <p className="lede max-w-[46ch] text-[var(--muted)]">
              {pillars.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px border border-[var(--line)] bg-[var(--line)] md:mt-18 md:grid-cols-2 lg:grid-cols-3">
          {pillars.items.map((item, i) => (
            <Reveal
              key={item.num}
              as="li"
              delay={i}
              className="group flex min-h-[13rem] flex-col justify-between gap-8 bg-[var(--bg)] p-6 transition-colors duration-[var(--d-base)] hover:bg-[var(--bone-100)] md:p-8"
            >
              <span className="label text-[var(--muted)]">{item.num}</span>
              <span className="flex flex-col gap-2.5">
                <span className="display display-sm">{item.title}</span>
                <span className="max-w-[32ch] text-[0.875rem] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </span>
              </span>
            </Reveal>
          ))}

          {/* The mission closes the grid, in the accent. */}
          <Reveal
            as="li"
            delay={5}
            data-ground="ink"
            className="flex min-h-[13rem] flex-col justify-between gap-8 bg-[var(--ink-900)] p-6 text-[var(--fg)] md:p-8"
          >
            <span className="label text-[var(--crimson)]">
              {pillars.mission.label}
            </span>
            <span className="text-[0.9375rem] leading-relaxed">
              {pillars.mission.body}
            </span>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
