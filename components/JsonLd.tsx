import { SITE_URL, STRIPE_AUDIT_URL, SUPPORT_EMAIL, LINKEDIN_PROFILE_URL } from "@/lib/config";

const faqs: [string, string][] = [
  ["Wie schnell startest du nach Buchung?", "Innerhalb von 48 Stunden nach Zahlungseingang. Ich melde mich mit dem Onboarding-PDF und wir terminieren den Kickoff. Max 2 Audits parallel."],
  ["Wie viele Kunden auf einmal?", "Max 2 parallel. So bleibt der Service deep, nicht oberflaechlich. Slots sind knapp."],
  ["Was wenn ich keinen Next.js / Modern-Stack habe?", "Schreib mir vor dem Buchen. Aktiv unterstuetzte Stacks: Next.js, Nuxt, Remix, SvelteKit, Astro, Vite + React. Legacy-Stacks lehne ich ab (kein Wordpress / kein Webflow)."],
  ["Was wenn du keine 3 Bugs findest?", "Dann zahlst du nichts. Bug-Findungs-Garantie. In der Praxis: hatte ich noch nie."],
  ["Was passiert mit meinem Code und meinen Daten?", "Alles read-only wo moeglich: eigener Branch, eingeschraenkter Stripe-Key, keine Passwoerter. Nach Audit-Abschluss loesche ich alle lokalen Kopien. NDA gerne, schreib mir vor Buchung."],
  ["Wie viel Tech-Know-how brauche ich?", "Wenig. Du brauchst nur GitHub-Repo, Stripe-Account, Web-Tracking-Setup. Wenn du einen Pull-Request reviewen kannst, reicht das."],
  ["Kann ich nur den Tracking-Teil buchen?", "Nein. Audit ohne Fixes ist halb. Ich nehme nur Voll-Pakete an."],
  ["Wieviel Aufwand entsteht fuer mich?", "~2-3 Stunden ueber eine Woche: Discovery-Call, Kickoff, Zugaenge geben, Code-PR mergen, Debrief-Call."],
  ["Was wenn ich mit dem Ergebnis nicht zufrieden bin?", "Bug-Findungs-Garantie gilt: 100% Refund wenn keine 3 verifizierten Bugs. Plus: 30 Tage kostenlose Follow-up-Fragen nach Debrief."],
  ["Wie kontaktiere ich dich?", `Discovery-Call buchen (Calendly), Mail an ${SUPPORT_EMAIL} oder LinkedIn-DM. Antwort innerhalb 24h.`],
];

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "ConvLab",
        url: SITE_URL,
        email: SUPPORT_EMAIL,
        founder: { "@type": "Person", name: "Eugen Schnellbach" },
        areaServed: ["CH", "DE", "AT"],
        sameAs: [LINKEDIN_PROFILE_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SUPPORT_EMAIL,
          availableLanguage: ["de", "en"],
          areaServed: ["CH", "DE", "AT"],
        },
      },
      {
        "@type": "Service",
        name: "ConvLab Funnel-Audit",
        serviceType: "Conversion-Rate-Audit fuer SaaS",
        provider: { "@id": `${SITE_URL}/#org` },
        areaServed: ["CH", "DE", "AT"],
        description:
          "7-Tage-Funnel-Audit fuer DACH SaaS-Solo-Founder: die 3 groessten Conversion-Bugs gefunden und direkt im Code gefixt. Bug-Findungs-Garantie.",
        offers: {
          "@type": "Offer",
          price: "1490",
          priceCurrency: "CHF",
          url: STRIPE_AUDIT_URL,
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
