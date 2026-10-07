import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { DrawRule } from "./DrawRule";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title?: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "start" | "center";
};

/**
 * The repeating section opener: numbered label, rule, title, lead.
 * Keeping it in one place is what makes the long scroll feel composed.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  lead,
  className,
  align = "start",
}: Props) {
  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal className="flex items-center gap-4">
        <span className="label text-[var(--crimson)]">{index}</span>
        <DrawRule />
        <span className="label text-[var(--azure)]">{kicker}</span>
      </Reveal>

      {title ? (
        <Reveal delay={1}>
          <h2 className="display display-lg max-w-[18ch]">{title}</h2>
        </Reveal>
      ) : null}

      {lead ? (
        <Reveal delay={2}>
          <p
            className={cn(
              "lede max-w-[46ch] text-[var(--muted)]",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
