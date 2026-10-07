import { cn } from "@/lib/cn";

/**
 * The Bharat Yuva Niti mark: a tight lockup where "Yuva" carries the accent and
 * the year sits in the mono label face. Drawn in type, not an image file, so it
 * stays crisp and recolours with the surrounding ground.
 */
export function Wordmark({
  className,
  year = true,
}: {
  className?: string;
  year?: boolean;
}) {
  return (
    <span
      className={cn("inline-flex items-baseline gap-[0.32em] whitespace-nowrap", className)}
      aria-label="Bharat Yuva Niti 2027"
    >
      <span className="display text-[0.92em] leading-none tracking-[-0.03em]">
        Bharat <span className="text-[var(--accent)]">Yuva</span> Niti
      </span>
      {year ? (
        <span className="label-sm label translate-y-[-0.12em] text-[var(--muted)]">
          2027
        </span>
      ) : null}
    </span>
  );
}
