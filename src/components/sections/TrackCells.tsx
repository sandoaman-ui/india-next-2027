import {
  chaosBeats,
  crossfire,
  debateTopicsNote,
  type ComparisonRowId,
  type Track,
} from "@/content/tracks";
import { cn } from "@/lib/cn";
import { Cta } from "@/components/ui/Cta";
import { InvestorSignals } from "@/components/ui/InvestorSignals";
import { Photo } from "@/components/ui/Photo";
import { TopicCarousel } from "@/components/ui/TopicCarousel";

/**
 * Every cell of the Debate | Founders comparison renders through here, so the
 * two columns can never drift apart in structure — only in content and accent.
 */
export function TrackCell({
  track,
  row,
}: {
  track: Track;
  row: ComparisonRowId;
}) {
  switch (row) {
    case "identity":
      return (
        <div className="flex flex-col gap-3">
          <p className="display display-sm">{track.identity}</p>
          <p className="max-w-[36ch] text-sm leading-relaxed text-[var(--muted)]">
            {track.identityDetail}
          </p>
        </div>
      );

    case "figure":
      return (
        <div className="flex flex-col gap-3">
          <p className="figure text-[clamp(2.4rem,5.5vw,3.9rem)] text-[var(--accent)]">
            {track.figure}
          </p>
          <p className="label text-[var(--muted)]">{track.figureLabel}</p>
          <p className="mt-2 max-w-[34ch] text-[0.9375rem] leading-snug">
            {track.headline}
          </p>
        </div>
      );

    case "steps":
      return (
        <div className="flex h-full flex-col gap-5">
          <p className="label text-[var(--muted)]">{track.stepsLabel}</p>
          <ol className="flex flex-col">
            {track.steps.map((step, i) => (
              <li
                key={step.num}
                className="group relative flex items-start gap-4 border-t border-[var(--line)] py-3.5 first:border-t-0 first:pt-0"
              >
                {/* The connecting spine makes 5 steps and 7 steps read as one family. */}
                <span className="relative flex flex-col items-center">
                  <span className="label mt-0.5 tabular-nums text-[var(--accent)]">
                    {step.num}
                  </span>
                  {i < track.steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-px flex-1 bg-[var(--line)]"
                    />
                  ) : null}
                </span>
                <span className="flex flex-col gap-1 pb-0.5">
                  <span className="text-[0.9375rem] font-medium leading-tight">
                    {step.name}
                  </span>
                  <span className="text-[0.8125rem] leading-relaxed text-[var(--muted)]">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          {/* Anchored to the bottom so the 5-step and 7-step columns still land together. */}
          <p className="mt-auto border-t border-[var(--line)] pt-4 text-[0.8125rem] leading-relaxed text-[var(--muted)]">
            {track.positioning}
          </p>
        </div>
      );

    case "inside":
      return track.id === "debate" ? (
        <div className="flex h-full flex-col gap-4">
          <p className="label text-[var(--muted)]">Sample motions</p>
          <TopicCarousel />
          <p className="mt-auto pt-1 text-[0.75rem] leading-relaxed text-[var(--muted)]">
            {debateTopicsNote}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="label text-[var(--muted)]">Investor signals</p>
          <InvestorSignals />
        </div>
      );

    case "signature":
      return track.id === "debate" ? (
        <SignaturePanel
          title={track.signature.title}
          tagline={track.signature.tagline}
          beats={chaosBeats.map((b) => ({ ...b }))}
          image="debatePodium"
        />
      ) : (
        <SignaturePanel
          title={crossfire.title}
          tagline={crossfire.tagline}
          beats={crossfire.beats.map((b) => ({ ...b }))}
          image="arenaStage"
          quote={crossfire.question}
          note={crossfire.disclaimer}
        />
      );

    case "leadsTo":
      return (
        <div className="flex flex-col gap-2.5">
          <p className="text-[0.9375rem] leading-relaxed">
            {track.leadsTo.body}
          </p>
        </div>
      );

    case "cta":
      return (
        <Cta href={track.cta.href} variant="accent" size="lg" className="w-full">
          {track.cta.label}
        </Cta>
      );
  }
}

/** The signature moment gets the same treatment on both sides. */
function SignaturePanel({
  title,
  tagline,
  beats,
  image,
  quote,
  note,
}: {
  title: string;
  tagline: string;
  beats: { time: string; label: string; body: string }[];
  image: "debatePodium" | "arenaStage";
  quote?: string;
  note?: string;
}) {
  return (
    <div className="grain relative isolate overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--blue-0)] text-[var(--fg)] shadow-[0_18px_40px_-26px_rgba(13,31,66,0.35)]">
      <Photo
        name={image}
        sizes="(max-width: 1024px) 100vw, 44vw"
        className="-z-10 object-cover object-top"
      />
      <div className="absolute inset-0 -z-10 bg-[var(--blue-0)]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--blue-0)] via-[var(--blue-1)]/92 to-[var(--blue-2)]/78" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]"
      />

      <div className="flex flex-col gap-5 p-5 sm:p-7">
        <div className="flex flex-col gap-2">
          <span className="label text-[var(--accent)]">Signature moment</span>
          <h4 className="display text-[1.6rem] leading-none sm:text-[2rem]">
            {title}
          </h4>
          <p className="max-w-[34ch] text-[0.875rem] leading-relaxed text-[var(--muted)]">
            {tagline}
          </p>
        </div>

        <ol className="mt-1 flex flex-col gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)]">
          {beats.map((beat) => (
            <li
              key={beat.label}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-[var(--blue-0)] px-4 py-3"
            >
              <span className="label w-[4.5rem] shrink-0 tabular-nums text-[var(--accent)]">
                {beat.time}
              </span>
              <span className="text-[0.875rem] font-medium">{beat.label}</span>
              <span className="w-full text-[0.8125rem] leading-snug text-[var(--muted)]">
                {beat.body}
              </span>
            </li>
          ))}
        </ol>

        {quote ? (
          <blockquote
            className={cn(
              "border-l-2 border-[var(--accent)] pl-4 sm:pl-5",
            )}
          >
            <p className="display text-[1.15rem] leading-tight text-balance sm:text-[1.4rem]">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        ) : null}

        {note ? (
          <p className="text-[0.75rem] leading-relaxed text-[var(--muted)]">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
