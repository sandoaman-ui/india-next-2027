/**
 * Single source of truth for every headline number on the site.
 * Nothing numeric should be typed into a component — import from here.
 */

export type Stat = {
  id: string;
  /** Numeric target used by the count-up animation. */
  value: number;
  /** What is appended once the count-up lands (e.g. "+"). */
  suffix?: string;
  label: string;
  /** Optional second line used in the wider stat blocks. */
  detail?: string;
};

export const stats = {
  youngIndians: {
    id: "young-indians",
    value: 10000,
    suffix: "+",
    label: "Young Indians",
    detail: "School & college students",
  },
  debaters: {
    id: "debaters",
    value: 1000,
    label: "Debaters",
    detail: "Across multiple rooms and formats",
  },
  // TODO: confirm — client brief says 500 young innovators, the summit deck says 1,000.
  innovators: {
    id: "innovators",
    value: 1000,
    label: "Young Innovators",
    detail: "Ideas, prototypes and early ventures",
  },
  investors: {
    id: "investors",
    value: 200,
    label: "Investors & Industry Leaders",
    detail: "A discovery network, not a judging panel",
  },
  cities: {
    id: "cities",
    value: 40,
    suffix: "+",
    label: "Cities",
    detail: "Tier-1, Tier-2 and Tier-3 India",
  },
  days: {
    id: "days",
    value: 2,
    label: "Days",
    detail: "Qualifiers, finals and the national stage",
  },
} satisfies Record<string, Stat>;

/** The hero number strip, in display order. */
export const heroStats: Stat[] = [
  stats.youngIndians,
  stats.debaters,
  stats.innovators,
  stats.investors,
];

/** The wider strip used further down the page. */
export const scaleStats: Stat[] = [
  stats.youngIndians,
  stats.cities,
  stats.investors,
  stats.days,
];
