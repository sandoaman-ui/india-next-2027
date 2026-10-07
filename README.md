# Bharat Yuva Niti 2027

The official website for **Bharat Yuva Niti 2027 — National Youth Conclave**, a
two-day National Youth Forum organised by **SGCCI** (The Southern Gujarat
Chamber of Commerce & Industry) and **TPC** (Turning Point).

Day 1 runs on a university campus with students split across classrooms; Day 2
is selection, finals and the National Conclave at **SIECC Convention Centre,
Sarsana**, in front of 10,000 students.

Single long-scroll homepage, built so content, design and structure can each be
changed without touching the other two.

```
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion
```

---

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

---

## Where things live

```
content/              Every string and number on the site. Typed. No copy in components.
  site.ts             Identity, nav, hero, about, walk-through, why, CTA, footer
  stats.ts            THE headline numbers — single source of truth
  tracks.ts           The Debate + the Innovators Challenge (see "Removed sections")
  schedule.ts         The two-day journey, as two parallel lanes
  conclave.ts         Sunday run-of-show + the speaker data shape
  images.ts           Image registry: paths, intrinsic sizes, blur placeholders, alt text

src/app/globals.css   ALL design tokens. Colour, type, radius, motion, rhythm.
src/components/
  layout/             Nav, Footer, mobile CTA bar, wordmark
  sections/           One file per page section, in page order
  ui/                 Reveal, CountUp, Photo, Cta, SectionHeading, TopicCarousel, InvestorSignals
public/images/        Event photography, cropped and graded to one look
```

### Changing a number

Every figure on the page — hero strip, track headlines, scale band, conclave
capacity — resolves to `content/stats.ts`. Change it once.

### Changing copy

No component contains a user-visible string. If you find one, it is a bug.

### Changing the look

`src/app/globals.css` holds the whole token layer:

**Page order:** Hero · 01 About · 02 The Two-Day Journey · 03 National Youth
Conclave · 04 Why Participate · 05 Apply.

- **Three colours on white.** A white and neutral-paper base carries near-black
  type, with exactly two accents: **red** (the Debate) and **blue** (the
  Innovators Challenge). The grounds hold no colour cast at all — every bit of
  colour on the page is doing a job.
- **One polarity.** The scheme is light throughout; the page never flips
  between light and dark as you scroll.
- **Grounds** — `[data-ground="bone"]` is white, `[data-ground="ink"]` is the
  light neutral grey used to separate a section from its neighbours. Sections
  alternate between them, set one attribute, and everything inside follows.
  White cards sit above the grey ground on `--shadow-md`.
- **Tracks** — `[data-track="debate"]` / `[data-track="founders"]` set
  `--accent` (red / blue) and drive the `.track-field` colour wash. A component
  never hard-codes an accent; it reads `var(--accent)`.
- **Type** — three faces, mapped to `--font-display` (Source Serif 4 — a sober
  transitional serif carrying every heading and figure), `--font-sans` (Inter,
  all body copy), `--font-mono` (IBM Plex Mono, labels and timecodes), with
  `.display`, `.figure`, `.label` and `.lede` as the only type primitives.

When the design-system HTML arrives, remap the values in `:root` and the two
ground blocks. No component should need to change.

---

## Removed sections

Three sections were removed on request and their components deleted: the
side-by-side **Debate | Innovators Challenge** comparison, **From Dialogue to
Action** (the five pillars) and **Who Should Apply**.

Their copy is still in the repo — `content/tracks.ts` keeps `comparisonRows`,
both step lists, `debateTopics`, `chaosBeats`, `investorSignals`,
`investorsNote` and `crossfire` — so any of them can be rebuilt without
re-sourcing a word. The live page uses only each track's `name`, `shortName`,
`identity`, `figure`, `oneLiner`, `cta` and `image`.

Both tracks still appear **side by side** everywhere they appear at all: the
hero cards, the two parallel lanes in the Journey, the final CTA, and the
mobile bottom bar — including at 375px.

## Deliberate constraints

- **Photography never carries text over a dark plate.** Plates sit under a
  light blue veil with dark-blue type above them.
- **No named speakers, no speaker photos.** `conclave.ts` carries a
  `ConclaveSpeaker` shape and renders "Speakers to be announced" seat cards.
  Drop real names, titles and photos into `speakers: []` when confirmed.
- **Funding is never promised.** The Founders pathway is discovery, mentorship,
  connections and opportunity. `crossfire.disclaimer` says so on the page.
- **No sponsor or partner logos above the fold.**
- Copy hygiene: "Debaters", "curated", "Business Leaders Panel", "SGCCI".

## Accessibility & performance

- Semantic landmarks, skip link, visible focus rings on every interactive element.
- Count-ups expose the real value to screen readers and animate only the
  decorative copy.
- `prefers-reduced-motion` removes transforms, reveals and auto-advance across
  the site — including the topic carousel and the accordion.
- All photography carries intrinsic dimensions + blur placeholders, so the page
  reserves space before images land. Only the hero plate is preloaded.
- Client JavaScript is limited to the nav, mobile CTA bar, reveals, count-ups,
  the track switch, the topic carousel, the investor signals and the accordion.

---

## Open items

Everything unconfirmed is marked `// TODO: confirm` in the content files.

| Item | File |
|---|---|
| Young innovators: 1,000 vs 500 in the client brief | `content/stats.ts` |
| Event dates | `content/site.ts` (`hero.dateline`, `footer.details`) |
| Day 1 university campus and its address | `content/site.ts`, `content/schedule.ts` |
| Official event email and phone | `content/site.ts` |
| Official social handles | `content/site.ts` |
| Live registration / application URLs | `content/site.ts` (`finalCta.actions`) |
| Final canonical domain for OG tags | `content/site.ts` (`site.url`) |
| Final motion list sign-off with SGCCI | `content/tracks.ts` |
| Build Room shortlist size ("Top 100") | `content/tracks.ts` |
| Main-stage finalist count ("Top 20") | `content/tracks.ts` |
| Exact session timings for both days | `content/schedule.ts` |
| Conclave speaker line-up and headshots | `content/conclave.ts` |
| Track naming under the new brand ("The Debate" / "Innovators Challenge") | `content/tracks.ts` |
| SGCCI / TPC logo files | `src/components/layout/Footer.tsx` |
| Event startDate / endDate / venue for schema.org | `src/components/StructuredData.tsx` |

---

Photography: Turning Point event archive.
