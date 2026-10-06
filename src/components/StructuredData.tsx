import { conclave } from "@/content/conclave";
import { site } from "@/content/site";
import { stats } from "@/content/stats";

/**
 * Event schema for search and AI surfaces. Dates and venue are intentionally
 * absent until confirmed — a wrong date in structured data is worse than none.
 * // TODO: confirm — add startDate, endDate and the venue address.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.name,
    description: site.description,
    url: site.url,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [`${site.url}/images/hero-auditorium.jpg`],
    maximumAttendeeCapacity: stats.youngIndians.value,
    organizer: site.organisers.map((org) => ({
      "@type": "Organization",
      name: org.name,
      alternateName: org.abbr,
    })),
    subEvent: conclave.runOfShow.map((item) => ({
      "@type": "Event",
      name: item.title,
      description: item.body,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Serialised from typed content above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
