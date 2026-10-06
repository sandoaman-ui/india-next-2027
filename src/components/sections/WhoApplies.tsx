import { whoShouldApply } from "@/content/site";
import { tracks } from "@/content/tracks";
import { Cta } from "@/components/ui/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoApplies() {
  return (
    <section
      id={whoShouldApply.id}
      data-ground="ink"
      className="section"
      aria-labelledby="who-title"
    >
      <div className="shell">
        <SectionHeading
          index={whoShouldApply.index}
          kicker={whoShouldApply.kicker}
          title={<span id="who-title">Two doors in.</span>}
          lead={whoShouldApply.lead}
          align="center"
          className="mx-auto max-w-[44ch] items-center text-center"
        />

        {/* Side by side, including on mobile — the rule holds here too. */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--line)] md:mt-20">
          {tracks.map((track, i) => (
            <Reveal
              key={track.id}
              delay={i}
              data-track={track.id}
              className="flex flex-col gap-6 bg-[var(--ink-900)] p-5 md:p-10"
            >
              <div data-track={track.id} className="flex flex-col gap-3">
                <span className="label text-[var(--accent)]">
                  {track.shortName}
                </span>
                <h3 className="display text-[clamp(1.15rem,3.6vw,2rem)] leading-[1.02]">
                  {track.name}
                </h3>
              </div>

              <p className="text-[0.8125rem] leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                {track.applyFor}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5">
                {track.applyTags.map((tag) => (
                  <li
                    key={tag}
                    data-track={track.id}
                    className="label-sm label rounded-full border border-[var(--line)] px-2.5 py-1.5 text-[var(--muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div data-track={track.id} className="pt-1">
                <Cta
                  href={track.cta.href}
                  variant="outline"
                  size="sm"
                  className="w-full px-2 text-[0.75rem] md:text-[0.8125rem]"
                >
                  {track.cta.label}
                </Cta>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Callout across both columns. */}
        <Reveal delay={2} className="mt-5">
          <p className="rounded-[var(--r-lg)] border border-[var(--crimson)]/40 bg-[var(--ink-800)] px-6 py-7 text-center text-[0.9375rem] leading-relaxed md:px-10 md:text-[1.0625rem]">
            <strong className="display mr-2 text-[1.3em] font-semibold leading-none text-[var(--crimson)]">
              {whoShouldApply.callout.highlight}
            </strong>
            <span className="text-[var(--muted)]">
              {whoShouldApply.callout.body}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
