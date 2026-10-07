import { journey } from "@/content/schedule";
import { cn } from "@/lib/cn";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section
      id={journey.id}
      data-ground="bone"
      className="section scroll-mt-16"
      aria-labelledby="journey-title"
    >
      <div className="shell">
        <SectionHeading
          index={journey.index}
          kicker={journey.kicker}
          title={
            <span id="journey-title">
              Two days.
              <br />
              Two lanes.
              <br />
              One stage.
            </span>
          }
          lead={journey.lead}
        />

        <div className="mt-16 flex flex-col gap-6 md:mt-24 md:gap-8">
          {journey.days.map((day, dayIndex) => (
            <Reveal key={day.id} delay={dayIndex}>
              <article className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--bone-100)]">
                {/* Day header, over a plate from the floor. */}
                <header className="grain relative isolate overflow-hidden border-b border-[var(--line)] px-5 py-8 text-[var(--fg)] md:px-10 md:py-12">
                  <Photo
                    name={day.image}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="-z-10 object-cover object-center"
                  />
                  <div className="absolute inset-0 -z-10 bg-[var(--blue-1)]/60" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--blue-1)] via-[var(--blue-1)]/82 to-[var(--blue-1)]/72" />

                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
                    <div className="flex flex-col gap-2.5">
                      <span className="label text-[var(--muted)]">
                        {day.day}
                      </span>
                      <h3 className="display text-[clamp(2.2rem,7vw,4rem)] leading-[0.9]">
                        {day.name}
                      </h3>
                      <span className="label text-[var(--crimson)]">
                        {day.mode}
                      </span>
                      <span className="label-sm label text-[var(--muted)]">
                        {day.venue}
                      </span>
                    </div>
                    <p className="max-w-[42ch] text-sm leading-relaxed text-[var(--muted)] md:text-right">
                      {day.lead}
                    </p>
                  </div>
                </header>

                {/* Two parallel lanes. Side by side at every screen size. */}
                <div className="grid grid-cols-2 gap-px bg-[var(--line)]">
                  {day.lanes.map((lane) => (
                    <div
                      key={lane.track}
                      data-track={lane.track}
                      className="track-field flex flex-col gap-5 bg-[var(--blue-0)] px-4 py-7 md:px-9 md:py-10"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        <h4 className="label text-[var(--accent)]">
                          {lane.name}
                        </h4>
                      </div>

                      <ol className="flex flex-col">
                        {lane.stops.map((stop, i) => (
                          <li key={stop.id} className="relative flex gap-3 pb-6 last:pb-0">
                            {/* Lane spine. */}
                            <span className="relative flex flex-col items-center">
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[var(--accent)] bg-[var(--blue-0)]"
                              />
                              {i < lane.stops.length - 1 ? (
                                <span
                                  aria-hidden="true"
                                  className="w-px flex-1 bg-[var(--line-strong)]"
                                />
                              ) : null}
                            </span>
                            <span className="flex flex-col gap-1.5">
                              <span className="text-[0.875rem] font-medium leading-tight md:text-[0.9375rem]">
                                {stop.label}
                              </span>
                              <span className="text-[0.75rem] leading-relaxed text-[var(--muted)] md:text-[0.8125rem]">
                                {stop.body}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                {/* Either a note that runs across both lanes, or the convergence. */}
                {day.shared ? (
                  <div className="flex flex-col gap-1.5 border-t border-[var(--line)] px-5 py-6 md:flex-row md:items-center md:gap-6 md:px-10">
                    <span className="label shrink-0 text-[var(--muted)]">
                      {day.shared.label}
                    </span>
                    <p className="text-[0.875rem] leading-relaxed">
                      {day.shared.body}
                    </p>
                  </div>
                ) : null}

                {day.converge ? <Converge {...day.converge} /> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The moment the two lanes stop being two lanes. */
function Converge({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--blue-3)] px-5 pb-8 pt-10 text-[var(--fg)] md:px-10 md:pb-12 md:pt-14">
      {/* Two lines leaning in until they meet. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 56"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-12 w-full"
      >
        <path
          d="M100 0 V14 L196 46"
          fill="none"
          stroke="var(--crimson)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
        <path
          d="M300 0 V14 L204 46"
          fill="none"
          stroke="var(--azure)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
      </svg>

      <div className={cn("relative flex flex-col gap-3 pt-5 text-center")}>
        <span className="label text-[var(--crimson)]">{label}</span>
        <h4 className="display mx-auto max-w-[16ch] text-[clamp(1.6rem,5vw,2.75rem)] leading-[0.95]">
          {title}
        </h4>
        <p className="mx-auto max-w-[52ch] text-[0.875rem] leading-relaxed text-[var(--muted)]">
          {body}
        </p>
      </div>
    </div>
  );
}
