import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-[var(--r-pill)] font-medium " +
  "transition-[background-color,color,border-color,transform] duration-[var(--d-base)] ease-[var(--e-out)] " +
  "active:translate-y-px whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-14 px-7 text-[0.975rem]",
};

const variants: Record<Variant, string> = {
  // Inverts against whatever ground it sits on.
  solid:
    "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white",
  accent: "bg-[var(--accent)] text-white hover:brightness-110",
  outline:
    "border border-[var(--line-strong)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost: "text-[var(--fg)] hover:text-[var(--accent)]",
};

export function Cta({
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  return (
    <Link
      {...rest}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </Link>
  );
}

/** The small right-pointing chevron used on inline links. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn(
        "h-3.5 w-3.5 transition-transform duration-[var(--d-base)] ease-[var(--e-out)] group-hover:translate-x-1",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
