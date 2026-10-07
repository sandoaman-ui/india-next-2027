import Link from "next/link";

import { footer, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer
      data-ground="ink"
      className="bg-[var(--bg)] bg-[image:var(--bg-grad)] text-[var(--fg)]"
    >
      <div className="shell border-t border-[var(--line)] py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Wordmark className="text-2xl" />
            <p className="max-w-[34ch] text-sm leading-relaxed text-[var(--muted)]">
              {footer.blurb}
            </p>

            {/* Organiser lockups. Logo files drop in here when supplied. */}
            <div className="flex flex-wrap gap-3 pt-1">
              {site.organisers.map((org) => (
                <div
                  key={org.abbr}
                  className="flex min-w-[8.5rem] flex-col gap-1 rounded-[var(--r-md)] border border-[var(--line)] px-4 py-3"
                  title={org.name}
                >
                  {/* TODO: confirm — replace with supplied SGCCI / TPC logo files. */}
                  <span className="display text-xl leading-none">
                    {org.abbr}
                  </span>
                  <span className="text-[0.6875rem] leading-tight text-[var(--muted)]">
                    {org.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="label mb-5 text-[var(--muted)]">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--crimson)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="label mb-5 text-[var(--muted)]">Details</h3>
            <dl className="flex flex-col gap-3 text-sm">
              {footer.details.map((d) => (
                <div key={d.label}>
                  <dt className="label-sm label text-[var(--muted)]">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-[var(--muted)]">{d.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-7 flex flex-wrap gap-2">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="label-sm label inline-flex h-8 items-center rounded-full border border-[var(--line)] px-3 text-[var(--muted)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--line)] pt-7 text-[0.75rem] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <p className="label-sm label">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
