/**
 * The two flagship tracks.
 *
 * NON-NEGOTIABLE: the Debate and the Innovators Challenge are always presented side by side as two
 * parallel tracks under one brand — never as two sections one after the other.
 * Both objects therefore share an identical shape so the comparison grid can
 * render the same rows, in the same order, for both columns. Keep them in sync.
 */

import type { ImageKey } from "./images";
import { stats } from "./stats";

export type TrackId = "debate" | "founders";

export type Step = {
  num: string;
  name: string;
  body: string;
};

export type Track = {
  id: TrackId;
  name: string;
  shortName: string;
  /** Two or three words. Appears as the identity row. */
  identity: string;
  identityDetail: string;
  /** The headline number, pre-formatted for display. */
  figure: string;
  figureLabel: string;
  headline: string;
  subheadline: string;
  positioning: string;
  oneLiner: string;
  stepsLabel: string;
  steps: Step[];
  signature: {
    label: string;
    title: string;
    tagline: string;
  };
  leadsTo: {
    label: string;
    body: string;
  };
  cta: { label: string; href: string };
  image: ImageKey;
  /** Used by the "Who should apply" split. */
  applyFor: string;
  applyTags: string[];
};

/** The rows of the side-by-side comparison, in order. Shared by both columns. */
export const comparisonRows = [
  { id: "identity", num: "01", label: "What it is" },
  { id: "figure", num: "02", label: "The scale" },
  { id: "steps", num: "03", label: "How it runs" },
  { id: "inside", num: "04", label: "Inside the room" },
  { id: "signature", num: "05", label: "The moment it turns" },
  { id: "leadsTo", num: "06", label: "Where it leads" },
  { id: "cta", num: "07", label: "Take part" },
] as const;

export type ComparisonRowId = (typeof comparisonRows)[number]["id"];

export const debate: Track = {
  id: "debate",
  name: "The Debate",
  shortName: "Debate",
  identity: "Think & argue",
  identityDetail:
    "A high-energy, youth-centric debate experience — not a traditional formal tournament.",
  figure: "1,000",
  figureLabel: "debaters",
  headline: "1,000 young debaters. Powered by the ArgueFest format.",
  subheadline: "Young voices debating policy, society, economics and India's future.",
  positioning:
    "Qualifiers run across multiple rooms, in formats ranging from group discussions to 2 vs 2 debates. The room is loud, the clock is short, and every claim gets tested.",
  oneLiner:
    "Young voices debating policy, society, economics and India's future.",
  stepsLabel: "The ArgueFest format",
  steps: [
    { num: "01", name: "2 vs 2", body: "Two teams. Four speakers." },
    { num: "02", name: "Opening", body: "1 minute per speaker." },
    { num: "03", name: "Rebuttal", body: "90 seconds per speaker." },
    {
      num: "04",
      name: "Chaos",
      body: "3–5 minutes of moderated, fast-paced Zero-Hour debate.",
    },
    {
      num: "05",
      name: "Finals",
      body: "1 vs 1. Same format. One stage. One champion.",
    },
  ],
  signature: {
    label: "Signature moment",
    title: "Chaos Round → 1 v 1 Final",
    tagline:
      "Three to five minutes with no speaking order. Then the last two standing, alone on the main stage.",
  },
  leadsTo: {
    label: "Where it leads",
    body:
      "The strongest debaters reach the Day 2 finals and the National Conclave stage, and join the Bharat Yuva Niti network.",
  },
  cta: { label: "Apply to Debate", href: "#apply" },
  image: "trackDebateTrophy",
  applyFor:
    "Young people who love ideas, argument, public speaking, current affairs, business and persuasion.",
  applyTags: [
    "Love an argument",
    "Public speaking",
    "Current affairs",
    "Policy & economics",
    "Debate societies",
    "MUN circuits",
  ],
};

/** The Chaos round and the final, broken into beats for the signature panel. */
export const chaosBeats = [
  { time: "3–5 min", label: "Chaos", body: "Moderated Zero-Hour. No speaking order." },
  { time: "1 v 1", label: "Final", body: "Two debaters. One stage. One champion." },
] as const;

export const debateTopics = [
  {
    id: "entrepreneurship",
    text: "Is entrepreneurship a better career path than traditional employment?",
    tag: "Enterprise",
  },
  {
    id: "ai-jobs",
    text: "Will AI create more jobs than it eliminates?",
    tag: "Technology",
  },
  {
    id: "personal-brand",
    text: "Is personal branding becoming as important as professional competence?",
    tag: "Culture",
  },
  {
    id: "profitability",
    text: "Should startups prioritise profitability over rapid growth?",
    tag: "Capital",
  },
  {
    id: "tier-2-3",
    text: "Will Tier-2 and Tier-3 cities drive India's next economic revolution?",
    tag: "Growth",
  },
] as const;

export const debateTopicsNote =
  "Topics are contemporary, business-linked and Gen-Z relevant. Final topics will be developed with SGCCI."; // TODO: confirm — final motion list sign-off with SGCCI.

export const founders: Track = {
  id: "founders",
  name: "Innovators Challenge",
  shortName: "Innovators",
  identity: "Imagine & build",
  identityDetail:
    "A Young India Innovation Platform built for talent discovery and founder development — not simply a pitch competition.",
  figure: "1,000 + 200",
  figureLabel: "innovators + investors",
  headline: "1,000 young innovators. 200 investors & industry leaders.",
  subheadline: "A national platform to discover people worth building with.",
  positioning:
    "Young people identify problems, develop solutions, pitch them, get expert feedback, and connect with potential capital and partners.",
  oneLiner:
    "Student founders and emerging innovators presenting solutions to real challenges.",
  stepsLabel: "The founder journey",
  steps: [
    {
      num: "01",
      name: "Idea Drop",
      body: "Submit the problem, insight, solution, impact and build stage.",
    },
    {
      num: "02",
      name: "Innovation Arena",
      body:
        "Present ideas or prototypes while investors and industry leaders discover talent.",
    },
    {
      num: "03",
      name: "Investor Interaction",
      body:
        "Short pitch + focused questions. Investors identify who they want to engage with.",
    },
    {
      num: "04",
      name: "Top 100",
      // TODO: confirm — shortlist size into the Build Room.
      body: "The strongest innovators move into the Build Room.",
    },
    {
      num: "05",
      name: "Build Room",
      body: "Refine the idea, prototype, business model and pitch.",
    },
    {
      num: "06",
      name: "Top 20",
      // TODO: confirm — number of main-stage finalists.
      body: "Main-stage finalists enter Investor Crossfire.",
    },
    {
      num: "07",
      name: "Bharat Yuva Niti Fellowship",
      body:
        "Selected innovators get access to mentorship, networks and future opportunities.",
    },
  ],
  signature: {
    label: "Signature moment",
    title: "Investor Crossfire",
    tagline:
      "One young innovator. A serious panel. No scripted comfort zone.",
  },
  leadsTo: {
    label: "Where it leads",
    body:
      "The Bharat Yuva Niti Fellowship — mentorship, networks and future opportunities.",
  },
  cta: { label: "Apply to Innovators", href: "#apply" },
  image: "trackInnovatorsHall",
  applyFor:
    "Young people with an idea, prototype, project, startup, technology or social solution — or simply a problem they believe is worth solving.",
  applyTags: [
    "An idea",
    "A prototype",
    "A side project",
    "An early startup",
    "A social solution",
    "A problem worth solving",
  ],
};

/** The four signals an investor can leave on an innovator. Not a score. */
export const investorSignals = [
  {
    id: "build",
    stamp: "BUILD",
    body: "I believe this person should build it.",
  },
  { id: "mentor", stamp: "MENTOR", body: "I want to mentor this person." },
  { id: "watch", stamp: "WATCH", body: "I want to follow their progress." },
  { id: "pass", stamp: "PASS", body: "Not for me." },
] as const;

export const investorsNote = {
  headline: "The 200 are not judges behind a table.",
  body:
    "They are a discovery network — present through pitch rooms, mentorship, roundtables, judging panels and structured investor interactions.",
  modes: [
    "Pitch rooms",
    "Mentorship",
    "Roundtables",
    "Judging panels",
    "Investor interactions",
  ],
  count: stats.investors.value,
};

export const crossfire = {
  title: "Investor Crossfire",
  tagline: "One young innovator. A serious panel. No scripted comfort zone.",
  beats: [
    { time: "3 min", label: "Founder Pitch", body: "The idea, the insight, the build." },
    { time: "4 min", label: "Investor Crossfire", body: "Direct questions. No preparation time." },
    { time: "2 min", label: "Founder Response / Ask", body: "What you need, and from whom." },
  ],
  question:
    "If Bharat Yuva Niti gave you the resources, mentorship and network to build this tomorrow, what would you build?",
  // Discovery, mentorship, connections and opportunity. Never funding as a prize.
  disclaimer:
    "Bharat Yuva Niti is a discovery and development platform. The pathway is mentorship, connections and opportunity — not a cash prize.",
};

/** Always iterate this, never the two objects separately. Order is fixed. */
export const tracks: [Track, Track] = [debate, founders];
