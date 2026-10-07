/**
 * Global site copy: identity, navigation, and every section that is not
 * a track, the journey, or the conclave.
 */

export const site = {
  name: "Bharat Yuva Niti 2027",
  shortName: "Bharat Yuva Niti",
  tagline: "National Youth Conclave",
  presenter: "SGCCI × TPC present",
  organisers: [
    {
      abbr: "SGCCI",
      name: "The Southern Gujarat Chamber of Commerce & Industry",
    },
    { abbr: "TPC", name: "Turning Point" },
  ],
  description:
    "A National Youth Forum that gives the brightest young minds of India a platform to interact with industry professionals, mentors and national leaders, while actively shaping perspectives through innovation and discourse.",
  // TODO: confirm — final domain for canonical URLs and OG tags.
  url: "https://india-next-2027.vercel.app",
} as const;

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "The Two Tracks", href: "#tracks" },
    { label: "Journey", href: "#journey" },
    { label: "Conclave", href: "#conclave" },
    { label: "Apply", href: "#apply" },
  ],
  cta: { label: "Register / Apply", href: "#apply" },
} as const;

export const hero = {
  eyebrow: site.presenter,
  headline: ["Bharat", "Yuva", "Niti", "2027"],
  subheadline: "National Youth Conclave",
  lede: "Where India's next generation takes the stage.",
  support: "Two days that could change what comes next.",
  primaryCta: { label: "Register / Apply Now", href: "#apply" },
  secondaryCta: { label: "Explore the forum", href: "#about" },
  // TODO: confirm — exact event dates.
  dateline: "Two days · 2027 · Surat, Gujarat",
} as const;

/**
 * A run of text where only the load-bearing phrases carry weight. Everything
 * without `strong` renders light, so the paragraph reads as a sentence rather
 * than a block of bold.
 */
export type LeadSegment = {
  text: string;
  strong?: boolean;
  /** Reserved for the single phrase that should carry the accent colour. */
  accent?: boolean;
};

export const about = {
  id: "about",
  index: "01",
  kicker: "What is Bharat Yuva Niti",
  lead: [
    { text: "Bharat Yuva Niti is a " },
    { text: "National Youth Forum", strong: true, accent: true },
    { text: " that gives the " },
    { text: "brightest young minds of India", strong: true },
    { text: " a platform to interact with " },
    { text: "industry professionals, mentors and national leaders", strong: true },
    { text: " — while actively participating in shaping perspectives through " },
    { text: "innovation and discourse", strong: true },
    { text: "." },
  ] satisfies LeadSegment[],
  proposition:
    "India's next generation should not merely discuss the future of the nation. They should debate it, build it and finance it.",
  beats: [
    {
      id: "think",
      title: "Think.",
      body: "Debate ideas.",
      detail: "Argue a position in front of a room that will push back on it.",
    },
    {
      id: "build",
      title: "Build.",
      body: "Turn ideas into action.",
      detail:
        "Take a problem you care about from insight to prototype to pitch.",
    },
    {
      id: "connect",
      title: "Connect.",
      body: "Meet people who can take those ideas further.",
      detail:
        "Investors, industry leaders, mentors, and a thousand peers worth knowing.",
    },
  ],
  pull:
    "Not a one-day event. Not an audience: an active participant in the country's future.",
  progression: ["Discover", "Compete", "Connect", "Build", "Impact"],
} as const;

/** The short walk-through that sits inside the About section. */
export const walkthrough = {
  label: "Walk through",
  lead: "Two days, two venues, one progression.",
  days: [
    {
      id: "day-1",
      day: "Day 1",
      venue: "University premises",
      body:
        "The event is held on a university campus, with students divided across classrooms while sessions for the Debate and the Innovators Challenge run simultaneously.",
      tags: ["Classroom rounds", "Debate", "Innovators Challenge"],
    },
    {
      id: "day-2",
      day: "Day 2",
      venue: "SIECC Convention Centre, Sarsana",
      body:
        "Selection and final rounds for the students who qualified, followed by the National Conclave — where 10,000 students witness the Youth Conclave.",
      tags: ["Selection", "Finals", "National Conclave"],
    },
  ],
} as const;

export const pillars = {
  id: "ecosystem",
  index: "06",
  kicker: "From Dialogue to Action",
  intro:
    "Bharat Yuva Niti operates as an ecosystem, not as a conventional conference, startup contest or debate tournament.",
  items: [
    {
      num: "01",
      title: "Debate",
      body: "Challenge ideas. Defend perspectives. Think critically.",
    },
    {
      num: "02",
      title: "Policy",
      body:
        "Bring young voices into India's policy and national-development conversation.",
    },
    {
      num: "03",
      title: "Innovation",
      body:
        "Transform real problems into solutions through creativity, technology and entrepreneurship.",
    },
    {
      num: "04",
      title: "Capital",
      body:
        "Connect promising young innovators with investors, mentors and industry.",
    },
    {
      num: "05",
      title: "Impact",
      body:
        "Move ideas from conversation to implementation, partnerships and measurable outcomes.",
    },
  ],
  mission: {
    label: "Mission",
    body:
      "To create India's largest youth-led platform for debate, dialogue and collaboration across public policy, entrepreneurship, industry and nation-building.",
  },
} as const;

export const whoShouldApply = {
  id: "who",
  index: "07",
  kicker: "Who Should Apply",
  lead: "Two doors into the same platform. Pick the one that sounds like you.",
  callout: {
    highlight: "No startup required.",
    body:
      "Bharat Yuva Niti is about discovering potential, not only rewarding existing credentials.",
  },
} as const;

export const whyParticipate = {
  id: "why",
  index: "08",
  kicker: "Why Participate",
  lead: "What you actually walk away with.",
  items: [
    {
      id: "stage",
      title: "Compete on a national stage",
      body:
        "Rooms, rounds and a main stage in front of 10,000+ of your peers.",
    },
    {
      id: "peers",
      title: "Meet ambitious young people from across India",
      body: "Delegates from 40+ cities, in one building, for two days.",
    },
    {
      id: "investors",
      title: "Get exposure to investors and industry leaders",
      body: "200 of them, present to discover people worth backing.",
    },
    {
      id: "mentorship",
      title: "Receive mentorship and feedback",
      body: "Direct, unscripted responses to your argument or your idea.",
    },
    {
      id: "credibility",
      title: "Build credibility and visibility",
      body: "A record of how you performed, not just that you attended.",
    },
    {
      id: "network",
      title: "Join the Bharat Yuva Niti network",
      body: "The part that continues long after the two days end.",
    },
  ],
} as const;

export const finalCta = {
  id: "apply",
  index: "09",
  headline: ["Think.", "Debate.", "Build.", "Connect."],
  subheadline: "Your Bharat Yuva Niti starts here.",
  // TODO: confirm — live registration / application URLs.
  actions: [
    { label: "Apply to Debate", href: "#apply", track: "debate" as const },
    {
      label: "Apply to Innovators",
      href: "#apply",
      track: "founders" as const,
    },
  ],
  secondary: { label: "Explore the Challenges", href: "#tracks" },
  tertiary: {
    label: "Partner with Bharat Yuva Niti",
    href: "#apply",
    note: "For investors, industry and partners",
  },
} as const;

export const footer = {
  blurb:
    "A National Youth Forum organised by SGCCI and Turning Point. Debate it. Build it. Finance it.",
  // TODO: confirm — final dates and the Day 1 campus address.
  details: [
    { label: "Dates", value: "To be announced · 2027" },
    {
      label: "Venue",
      // Day 1 campus is still to be confirmed. // TODO: confirm — Day 1 university campus.
      value: "University campus · SIECC Convention Centre, Sarsana, Surat",
    },
    // TODO: confirm — official event email and phone.
    { label: "Enquiries", value: "hello@indianext.in" },
  ],
  columns: [
    {
      title: "The Summit",
      links: [
        { label: "What is Bharat Yuva Niti", href: "#about" },
        { label: "The Debate", href: "#tracks" },
        { label: "The Innovators Challenge", href: "#tracks" },
        { label: "The Two-Day Journey", href: "#journey" },
        { label: "National Youth Conclave", href: "#conclave" },
      ],
    },
    {
      title: "Take Part",
      links: [
        { label: "Apply to Debate", href: "#apply" },
        { label: "Apply to Innovators", href: "#apply" },
        { label: "Who should apply", href: "#who" },
        { label: "Why participate", href: "#why" },
        { label: "Partner with Bharat Yuva Niti", href: "#apply" },
      ],
    },
  ],
  // TODO: confirm — official social handles.
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  legal: "© 2027 Bharat Yuva Niti. Organised by SGCCI and Turning Point.",
} as const;
