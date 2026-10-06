/**
 * Global site copy: identity, navigation, and every section that is not
 * a track, the journey, or the conclave.
 */

export const site = {
  name: "India Next 2027",
  shortName: "India Next",
  tagline: "India's Largest Youth Summit",
  presenter: "SGCCI × TPC present",
  organisers: [
    {
      abbr: "SGCCI",
      name: "The Southern Gujarat Chamber of Commerce & Industry",
    },
    { abbr: "TPC", name: "Turning Point" },
  ],
  description:
    "A national youth platform where young Indians debate the country's future, build solutions to real problems, and meet the people who can take those ideas further.",
  // TODO: confirm — final domain for canonical URLs and OG tags.
  url: "https://indianext2027.vercel.app",
} as const;

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Debate & Founders", href: "#tracks" },
    { label: "Journey", href: "#journey" },
    { label: "Conclave", href: "#conclave" },
    { label: "Apply", href: "#apply" },
  ],
  cta: { label: "Register / Apply", href: "#apply" },
} as const;

export const hero = {
  eyebrow: site.presenter,
  headline: ["India", "Next", "2027"],
  subheadline: "Where India's Next Generation Takes the Stage.",
  support: "Two days that could change what comes next.",
  primaryCta: { label: "Register / Apply Now", href: "#apply" },
  secondaryCta: { label: "Explore India Next", href: "#about" },
  // TODO: confirm — event dates and host city.
  dateline: "Two days · 2027 · Surat, Gujarat",
} as const;

export const about = {
  id: "about",
  index: "01",
  kicker: "What is India Next",
  lead:
    "India Next 2027 is a national youth platform designed to discover, challenge and connect young Indians with the people and opportunities that can help shape their next decade.",
  proposition:
    "India's next generation should not merely discuss the future of the nation. They should debate it, build it and finance it.",
  beats: [
    {
      id: "think",
      title: "Think.",
      body: "Debate ideas.",
      detail:
        "Argue a position in front of a room that will push back on it.",
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

export const pillars = {
  id: "ecosystem",
  index: "06",
  kicker: "From Dialogue to Action",
  intro:
    "India Next operates as an ecosystem, not as a conventional conference, startup contest or debate tournament.",
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
      "India Next is about discovering potential, not only rewarding existing credentials.",
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
      title: "Join the India Next network",
      body: "The part that continues long after the two days end.",
    },
  ],
} as const;

export const finalCta = {
  id: "apply",
  index: "09",
  headline: ["Think.", "Debate.", "Build.", "Connect."],
  subheadline: "Your India Next starts here.",
  // TODO: confirm — live registration / application URLs.
  actions: [
    { label: "Apply to Debate", href: "#apply", track: "debate" as const },
    { label: "Apply to Founders", href: "#apply", track: "founders" as const },
  ],
  secondary: { label: "Explore the Challenges", href: "#tracks" },
  tertiary: {
    label: "Partner with India Next",
    href: "#apply",
    note: "For investors, industry and partners",
  },
} as const;

export const footer = {
  blurb:
    "A national youth platform organised by SGCCI and Turning Point. Debate it. Build it. Finance it.",
  // TODO: confirm — final dates, venue and full address.
  details: [
    { label: "Dates", value: "To be announced · 2027" },
    { label: "Venue", value: "To be announced · Surat, Gujarat" },
    // TODO: confirm — official event email and phone.
    { label: "Enquiries", value: "hello@indianext.in" },
  ],
  columns: [
    {
      title: "The Summit",
      links: [
        { label: "What is India Next", href: "#about" },
        { label: "India Next Debate", href: "#tracks" },
        { label: "India Next Founders", href: "#tracks" },
        { label: "The Two-Day Journey", href: "#journey" },
        { label: "India Next Conclave", href: "#conclave" },
      ],
    },
    {
      title: "Take Part",
      links: [
        { label: "Apply to Debate", href: "#apply" },
        { label: "Apply to Founders", href: "#apply" },
        { label: "Who should apply", href: "#who" },
        { label: "Why participate", href: "#why" },
        { label: "Partner with India Next", href: "#apply" },
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
  legal: "© 2027 India Next. Organised by SGCCI and Turning Point.",
} as const;
