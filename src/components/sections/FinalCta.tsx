import { finalCta } from "@/content/site";
import { Arrow, Cta } from "@/components/ui/Cta";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section
      id={finalCta.id}
      data-ground="bone"
      className="section grain relative isolate overflow-hidden scroll-mt-16"
      aria-labelledby="final-title"
    >
      <Photo
        name="conclaveAudience"
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[var(--paper-0)]/58" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--paper-0)] via-[var(--paper-0)]/74 to-[var(--paper-0)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(58%_52%_at_50%_45%,var(--paper-0)_0%,transparent_78%)]" />

      <div className="shell flex flex-col items-center text-center">
        <Reveal className="label text-[var(--muted)]">
          {finalCta.index} — Apply
        </Reveal>

        <h2 id="final-title" className="display display-lg mt-8 flex flex-col">
          {finalCta.headline.map((word, i) => (
            <Reveal key={word} as="span" delay={i} y={28}>
              <span
                style={{
                  color:
                    i === 1
                      ? "var(--crimson)"
                      : i === 2
                        ? "var(--azure)"
                        : undefined,
                }}
              >
                {word}
              </span>
            </Reveal>
          ))}
        </h2>

        <Reveal delay={4} className="mt-8">
          <p className="lede text-[var(--muted)]">{finalCta.subheadline}</p>
        </Reveal>

        {/* Two apply buttons, next to each other. Always. */}
        <Reveal delay={5} className="mt-11 w-full max-w-[34rem]">
          <div className="grid grid-cols-2 gap-3">
            {finalCta.actions.map((action) => (
              <div key={action.label} data-track={action.track}>
                <Cta
                  href={action.href}
                  variant="accent"
                  size="lg"
                  className="w-full px-3 text-[0.8125rem] sm:text-[0.975rem]"
                >
                  {action.label}
                </Cta>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={6} className="mt-7 flex flex-col items-center gap-5">
          <Cta href={finalCta.secondary.href} variant="outline" size="md">
            {finalCta.secondary.label}
          </Cta>

          <Cta
            href={finalCta.tertiary.href}
            variant="ghost"
            size="sm"
            className="text-[var(--muted)]"
          >
            {finalCta.tertiary.label}
            <Arrow />
          </Cta>
          <p className="label-sm label -mt-3 text-[var(--muted)]">
            {finalCta.tertiary.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
