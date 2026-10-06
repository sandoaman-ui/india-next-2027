/** Tiny class-name joiner. No dependency needed for what this site does. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
