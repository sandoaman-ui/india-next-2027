/**
 * The two-day journey, modelled as two parallel lanes (Debate / Founders)
 * that converge on Sunday's main stage.
 *
 * Deliberately sequence-only: no clock times are attached to the finals or the
 * Build Room. // TODO: confirm — exact session timings for both days.
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
  lead: string;
  image: ImageKey;
  lanes: [Lane, Lane];
  shared?: { label: string; body: string };
  converge?: { label: string; title: string; body: string };
};

export const journey = {
  id: "journey",
  index: "04",
  kicker: "The Two-Day Journey",
  lead:
    "10,000 people are not doing the same thing for two days. The event branches into parallel tracks — which is exactly what makes the scale credible.",
  days: [
    {
      id: "saturday",
      day: "Day 01",
      name: "Saturday",
      mode: "Qualifiers · Discover",
      lead:
        "1,000+ debaters and innovators from 40+ cities compete in parallel across rooms and formats.",
      image: "journeyHandsup",
      lanes: [
        {
          track: "debate",
          name: "Debate lane",
          stops: [
            {
              id: "sat-d1",
              label: "ArgueFest rounds",
              body:
                "Group discussions and 2 vs 2 debates running simultaneously across multiple rooms.",
            },
            {
              id: "sat-d2",
              label: "Progression",
              body: "Rounds narrow through the day. Chaos decides the close ones.",
            },
          ],
        },
        {
          track: "founders",
          name: "Founders lane",
          stops: [
            {
              id: "sat-f1",
              label: "Idea Drop → Innovation Arena",
              body:
                "Problems and prototypes go on the floor; investors and industry leaders walk it.",
            },
            {
              id: "sat-f2",
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
      id: "sunday",
      day: "Day 02",
      name: "Sunday",
      mode: "The Flagship · Build & Battle",
      lead:
        "Both lanes sharpen in the morning, then converge on one stage in front of the whole summit.",
      image: "conclaveHall",
      lanes: [
        {
          track: "debate",
          name: "Debate lane",
          stops: [
            {
              id: "sun-d1",
              label: "Debate progression",
              body: "The field narrows round by round.",
            },
            {
              id: "sun-d2",
              label: "Debate Final",
              body: "1 v 1. Same format. One stage. One champion.",
            },
          ],
        },
        {
          track: "founders",
          name: "Founders lane",
          stops: [
            {
              id: "sun-f1",
              label: "Build Room",
              body: "Refine the idea, the prototype, the model and the pitch.",
            },
            {
              id: "sun-f2",
              label: "Investor Crossfire",
              body: "Main-stage finalists face the panel, unscripted.",
            },
          ],
        },
      ],
      converge: {
        label: "Both lanes converge",
        title: "The National Youth Conclave",
        body:
          "10,000+ audience, same stage, one national narrative. India Next winners are announced, followed by the closing.",
      },
    },
  ] satisfies Day[],
} as const;
