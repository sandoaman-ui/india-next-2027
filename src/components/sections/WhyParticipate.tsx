import { whyParticipate } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Line icons, drawn here so they inherit colour and stroke from the ground. */
const icons: Record<string, React.ReactNode> = {
  stage: <path d="M3 18h18M6 18V9m12 9V9M3 9l9-5 9 5" />,
  peers: (
    <>
      <circle cx="8" cy="9" r="2.6" />
      <circle cx="16.5" cy="10" r="2.1" />
      <path d="M3 19c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5M15 19c.4-2 1.6-3.2 3.2-3.2 1.3 0 2.3.7 2.8 2" />
    </>
  ),
  investors: (
    <>
      <path d="M4 20V9m5 11V5m5 15v-8m5 8V7" />
      <path d="M3 20h18" />
    </>
  ),
  mentorship: (
    <>
      <path d="M4 5h7v12H4zM13 5h7v12h-7z" />
      <path d="M12 17v3" />
    </>
  ),
  credibility: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2 6 15.8M12 7.2l6 8.6M7.2 18h9.6" />
    </>
  ),
};

export function WhyParticipate() {
  return (
    <section
      id={whyParticipate.id}
      data-ground="bone"
      className="section"
      aria-labelledby="why-title"
    >
      <div className="shell">
        <SectionHeading
          index={whyParticipate.index}
          kicker={whyParticipate.kicker}
          title={<span id="why-title">What you leave with.</span>}
          lead={whyParticipate.lead}
        />

        <ul className="mt-14 grid gap-px border-y border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {whyParticipate.items.map((item, i) => (
            <Reveal
              key={item.id}
              as="li"
              delay={i}
              className="flex flex-col gap-4 bg-[var(--bg)] py-8 sm:px-7 lg:px-9"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 text-[var(--crimson)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[item.id]}
              </svg>
              <h3 className="max-w-[22ch] text-[1.0625rem] font-medium leading-snug">
                {item.title}
              </h3>
              <p className="max-w-[30ch] text-[0.875rem] leading-relaxed text-[var(--muted)]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
