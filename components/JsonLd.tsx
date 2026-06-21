import { SITE_URL, STRIPE_AUDIT_URL } from "@/lib/config";

const faqs: [string, string][] = [
  ["Wie viele Kunden auf einmal?", "Max 2 parallel. So bleibt der Service deep, nicht oberflaechlich. Slots sind knapp."],
  ["Was wenn ich keinen Next.js / Modern-Stack habe?", "Schreib mir vor dem Buchen. Bei zu legacy-Stacks lehne ich ab (kein Wordpress / kein Webflow)."],
  ["Was wenn du keine 3 Bugs findest?", "Dann zahlst du nichts. So einfach."],
  ["Kann ich nur den Tracking-Teil buchen?", "Nein. Audit ohne Fixes ist halb. Ich nehme nur Voll-Pakete an."],
  ["Wieviel Aufwand entsteht fuer mich?", "~2-3 Stunden ueber eine Woche: Discovery-Call, Stripe-Read-Access geben, Code-PR mergen, Debrief-Call."],
  ["Wie kontaktiere ich dich?", "Discovery-Call buchen (Calendly-Link auf der Seite) oder direkt LinkedIn DM."],
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
        founder: { "@type": "Person", name: "Eugen Schnellbach" },
        areaServed: ["CH", "DE", "AT"],
      },
      {
        "@type": "Service",
        name: "ConvLab Funnel-Audit",
        serviceType: "Conversion-Rate-Audit fuer SaaS",
        provider: { "@id": `${SITE_URL}/#org` },
        areaServed: ["CH", "DE", "AT"],
        description:
          "7-Tage-Funnel-Audit fuer DACH SaaS-Solo-Founder: die 3 groessten Conversion-Bugs gefunden und direkt im Code gefixt.",
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
