/**
 * The Day 2 main-stage programme at SIECC Convention Centre, Sarsana.
 *
 * No speakers are named anywhere on this site. The `speakers` field on each
 * item is the shape that real names, titles and photographs will drop into
 * once they are confirmed. // TODO: confirm — speaker line-up and headshots.
 */

export type ConclaveSpeaker = {
  name: string;
  title: string;
  org?: string;
  photo?: string;
};

export type ConclaveItem = {
  id: string;
  start: string;
  end: string;
  title: string;
  kind: string;
  body: string;
  meta?: string;
  /** Visually highlighted — this is where participants reach the national stage. */
  highlight?: boolean;
  seats: number;
  speakers: ConclaveSpeaker[];
};

export const conclave = {
  id: "conclave",
  index: "03",
  kicker: "National Youth Conclave",
  header: "National Youth Conclave",
  subheader:
    "A high-energy 5-hour programme at SIECC Convention Centre, Sarsana — curated panels, national leadership and stage moments, in front of 10,000 students.",
  venue: "SIECC Convention Centre, Sarsana, Surat",
  principle:
    "Every panel is curated around Youth, Enterprise and Growth in Business. All stage discussions are moderated by Turning Point leadership, with SGCCI leadership present.",
  speakersPlaceholder: "Speakers to be announced",
  runOfShow: [
    {
      id: "opening",
      start: "09:00",
      end: "09:15",
      title: "Opening & National Welcome",
      kind: "Opening",
      body: "TPC × SGCCI opening, forum vision and stage-setting.",
      seats: 0,
      speakers: [],
    },
    {
      id: "panel-01",
      start: "09:15",
      end: "09:45",
      title: "Panel 01 · Political Speakers Panel",
      kind: "Panel",
      body: "A moderated conversation on youth, policy and national development.",
      meta: "4 speakers · 30 min · moderated",
      seats: 4,
      speakers: [],
    },
    {
      id: "panel-02",
      start: "09:45",
      end: "10:15",
      title: "Panel 02 · Business Leaders Panel",
      kind: "Panel",
      body: "Enterprise, industry and what the next decade of growth asks of young India.",
      meta: "4 business leaders · 30 min · moderated",
      seats: 4,
      speakers: [],
    },
    {
      id: "panel-03",
      start: "10:15",
      end: "10:45",
      title: "Panel 03 · Young Leaders & Innovators",
      kind: "Panel",
      body:
        "Winners of the Debate and the Innovators Challenge take the national stage alongside the people they spent two days convincing.",
      meta: "Winners of both tracks · 30 min · moderated",
      highlight: true,
      seats: 4,
      speakers: [],
    },
    {
      id: "gujarat",
      start: "10:45",
      end: "11:30",
      title: "Gujarat Leadership Address",
      kind: "Address",
      body: "Three leaders of Gujarat address the summit.",
      meta: "3 leaders of Gujarat",
      seats: 3,
      speakers: [],
    },
    {
      id: "national",
      start: "11:30",
      end: "12:45",
      title: "National Leaders Address",
      kind: "Address",
      body: "Two national leaders address the summit.",
      meta: "2 national leaders",
      seats: 2,
      speakers: [],
    },
    {
      id: "closing",
      start: "12:45",
      end: "13:15",
      title: "Closing & Networking",
      kind: "Closing",
      body: "Live interaction before dispersal.",
      seats: 0,
      speakers: [],
    },
  ] satisfies ConclaveItem[],
} as const;
