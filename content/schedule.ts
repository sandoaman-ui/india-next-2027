/**
 * The two-day journey, modelled as two parallel lanes (Debate / Founders)
 * that converge on the Day 2 National Conclave stage.
 *
 * Deliberately sequence-only: no clock times are attached to the finals or the
 * Build Room. // TODO: confirm — exact session timings for both days.
 *
 * Day 1 runs on a university campus with students split across classrooms;
 * Day 2 is selection, finals and the National Conclave at SIECC Convention
 * Centre, Sarsana.
 */

import type { ImageKey } from "./images";
import type { TrackId } from "./tracks";

export type LaneStop = {
  id: string;
  label: string;
  body: string;
};

export type Lane = {
  track: TrackId;
  name: string;
  stops: LaneStop[];
};

export type Day = {
  id: string;
  day: string;
  name: string;
  mode: string;
  venue: string;
  lead: string;
  image: ImageKey;
  lanes: [Lane, Lane];
  shared?: { label: string; body: string };
  converge?: { label: string; title: string };
};

export const journey = {
  id: "journey",
  index: "02",
  kicker: "The Two-Day Journey",
  lead:
    "10,000 people are not doing the same thing for two days. The forum branches into parallel tracks across a campus, then converges on one stage — which is exactly what makes the scale credible.",
  days: [
    {
      id: "day-1",
      day: "Day 01",
      name: "Campus Rounds",
      mode: "Qualifiers · Discover",
      venue: "University premises",
      lead:
        "Held on a university campus, with students divided across classrooms while the Debate and the Innovators Challenge run simultaneously.",
      image: "journeyHandsup",
      lanes: [
        {
          track: "debate",
          name: "Debate lane",
          stops: [
            {
              id: "d1-debate-1",
              label: "ArgueFest rounds",
              body:
                "Group discussions and 2 vs 2 debates running at the same time across classrooms.",
            },
            {
              id: "d1-debate-2",
              label: "Progression",
              body: "Rounds narrow through the day. Chaos decides the close ones.",
            },
          ],
        },
        {
          track: "founders",
          name: "Innovators lane",
          stops: [
            {
              id: "d1-inno-1",
              label: "Idea Drop → Innovation Arena",
              body:
                "Problems and prototypes go on the floor; investors and industry leaders walk it.",
            },
            {
              id: "d1-inno-2",
              label: "Investor discovery → Build Room selection",
              body:
                "Short pitches, focused questions, and selection into the Build Room.",
            },
          ],
        },
      ],
      shared: {
        label: "Throughout",
        body:
          "Investors and industry leaders are engaged across both lanes all day.",
      },
    },
    {
      id: "day-2",
      day: "Day 02",
      name: "Finals & Conclave",
      mode: "Selection · Finals · National Conclave",
      venue: "SIECC Convention Centre, Sarsana",
      lead:
        "Selection and final rounds for the students who qualified, followed by the National Conclave — where 10,000 students witness the Youth Conclave.",
      image: "hallWide",
      lanes: [
        {
          track: "debate",
          name: "Debate lane",
          stops: [
            {
              id: "d2-debate-1",
              label: "Selection rounds",
              body: "Qualified debaters return; the field narrows round by round.",
            },
            {
              id: "d2-debate-2",
              label: "Debate Final",
              body: "1 v 1. Same format. One stage. One champion.",
            },
          ],
        },
        {
          track: "founders",
          name: "Innovators lane",
          stops: [
            {
              id: "d2-inno-1",
              label: "Build Room",
              body: "Refine the idea, the prototype, the model and the pitch.",
            },
            {
              id: "d2-inno-2",
              label: "Investor Crossfire",
              body: "Main-stage finalists face the panel, unscripted.",
            },
          ],
        },
      ],
      converge: {
        label: "Both lanes converge",
        title: "The National Youth Conclave",
      },
    },
  ] satisfies Day[],
} as const;
