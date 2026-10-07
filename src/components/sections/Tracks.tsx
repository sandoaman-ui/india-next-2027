import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TracksSplit } from "./TracksSplit";

export function Tracks() {
  return (
    <section
      id="tracks"
      data-ground="bone"
      className="section scroll-mt-16"
      aria-labelledby="tracks-title"
    >
      <div className="shell">
        <div className="flex flex-col gap-10 pb-14 md:flex-row md:items-end md:justify-between md:gap-16 md:pb-20">
          <SectionHeading
            index="03"
            kicker="The Two Tracks"
            title={
              <span id="tracks-title">
                Two tracks.
                <br />
                One generation.
              </span>
            }
          />
          <Reveal delay={2} className="md:max-w-[38ch] md:pb-3">
            <p className="lede text-[var(--muted)]">
              Two parallel tracks under one forum. Same two days, same
              building, two completely different ways to spend them.
            </p>
          </Reveal>
        </div>

        <TracksSplit />
      </div>
    </section>
  );
}
