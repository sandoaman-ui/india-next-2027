import { cn } from "@/lib/cn";

/**
 * The India Next mark: a tight lockup where "NEXT" carries the accent and the
 * year sits in the mono label face. Drawn in type, not an image file, so it
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
      className={cn("inline-flex items-baseline gap-[0.3em]", className)}
      aria-label="India Next 2027"
    >
      <span className="display text-[1.05em] leading-none tracking-[-0.035em]">
        India
        <span className="text-[var(--accent)]">Next</span>
      </span>
      {year ? (
        <span className="label-sm label translate-y-[-0.15em] text-[var(--muted)]">
          2027
        </span>
      ) : null}
    </span>
  );
}
