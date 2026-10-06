# India Next 2027

The official website for **India Next 2027** — a two-day national youth summit
organised by **SGCCI** (The Southern Gujarat Chamber of Commerce & Industry) and
**TPC** (Turning Point).

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
  site.ts             Identity, nav, hero, about, pillars, who-applies, why, final CTA, footer
  stats.ts            THE headline numbers — single source of truth
  tracks.ts           India Next Debate + India Next Founders (identical shape, see below)
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

- **Grounds** — `[data-ground="ink"]` / `[data-ground="bone"]` flip the semantic
  variables (`--fg`, `--bg`, `--muted`, `--line`). Sections set one attribute and
  everything inside follows, including accents.
- **Tracks** — `[data-track="debate"]` / `[data-track="founders"]` set `--accent`.
  A component never hard-codes crimson or azure; it reads `var(--accent)`.
- **Type** — three faces, mapped to `--font-display` (Fraunces), `--font-sans`
  (Inter), `--font-mono` (JetBrains Mono), with `.display`, `.figure`, `.label`
  and `.lede` as the only type primitives.

When the design-system HTML arrives, remap the values in `:root` and the two
ground blocks. No component should need to change.

---

## The one rule that cannot be broken

**India Next Debate and India Next Founders are always side by side.**

They are two parallel tracks under one brand — never two sections one after the
other. This is enforced structurally, not by convention:

- `content/tracks.ts` gives both tracks an **identical type**, so a field can
  never exist on one side and not the other.
- `comparisonRows` defines the rows once. Both columns render from the same
  array, in the same order.
- `src/components/sections/TrackCells.tsx` renders **every** cell for both
  tracks through one `TrackCell` switch. The two columns cannot structurally
  drift — only their content and accent differ.
- **Desktop (≥1024px):** one CSS grid, three columns (Debate | row label |
  Founders). Rows are grid rows, so the comparison is guaranteed to read
  horizontally.
- **Below 1024px:** the intro pair stays a compact two-column pair, and a sticky
  two-option switch (both labels always visible) swaps the same rows in place.

The rule also holds in the hero track cards, the two-day journey (two parallel
lanes, side by side even at 375px), "Who should apply", the final CTA, and the
mobile bottom bar.

---

## Deliberate constraints

- **No named speakers, no speaker photos.** `conclave.ts` carries a
  `ConclaveSpeaker` shape and renders "Speakers to be announced" seat cards.
  Drop real names, titles and photos into `speakers: []` when confirmed.
- **Funding is never promised.** The Founders pathway is discovery, mentorship,
  connections and opportunity. `crossfire.disclaimer` says so on the page.
- **No sponsor or partner logos above the fold.**
- Copy hygiene: "Debaters", "curated", "Business Leaders Panel", "SGCCI",
  "India Next Founders" (never "Innovators Challenge").

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
| Event dates and host city | `content/site.ts` (`hero.dateline`, `footer.details`) |
| Venue and full address | `content/site.ts` |
| Official event email and phone | `content/site.ts` |
| Official social handles | `content/site.ts` |
| Live registration / application URLs | `content/site.ts` (`finalCta.actions`) |
| Final canonical domain for OG tags | `content/site.ts` (`site.url`) |
| Final motion list sign-off with SGCCI | `content/tracks.ts` |
| Build Room shortlist size ("Top 100") | `content/tracks.ts` |
| Main-stage finalist count ("Top 20") | `content/tracks.ts` |
| Exact session timings for both days | `content/schedule.ts` |
| Conclave speaker line-up and headshots | `content/conclave.ts` |
| SGCCI / TPC logo files | `src/components/layout/Footer.tsx` |
| Event startDate / endDate / venue for schema.org | `src/components/StructuredData.tsx` |

---

Photography: Turning Point event archive.
