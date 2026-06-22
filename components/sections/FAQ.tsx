import Section from "@/components/Section";
import { SUPPORT_EMAIL } from "@/lib/config";

export default function FAQ() {
  const faqs = [
    {
      q: "Wie schnell startest du nach Buchung?",
      a: "Innerhalb von 48 Stunden nach Zahlungseingang. Ich melde mich mit dem Onboarding-PDF (5-Schritte-Anleitung) und wir terminieren den Kickoff. Mehr als 2 Audits parallel nehme ich nicht an — du bekommst echten Fokus.",
    },
    {
      q: "Wie viele Kunden auf einmal?",
      a: "Max 2 parallel. So bleibt der Service deep, nicht oberflächlich. Slots sind knapp — wenn Slot 1-3 weg sind, steigt der Preis.",
    },
    {
      q: "Was wenn ich keinen Next.js / Modern-Stack habe?",
      a: "Schreib mir vor dem Buchen. Aktiv unterstützte Stacks: Next.js, Nuxt, Remix, SvelteKit, Astro, Vite + React. Legacy-Stacks (Wordpress, Webflow, Shopify-Theme-only) lehne ich ab — da ist die Audit-Methode nicht direkt anwendbar.",
    },
    {
      q: "Was wenn du keine 3 Bugs findest?",
      a: "Dann zahlst du nichts. Bug-Findungs-Garantie. Du gibst mir 7 Tage und Read-Zugriff — wenn ich nach Tag 7 nicht mind. 3 verifizierte Conversion-Killer schwarz auf weiss zeige, refunde ich 100 %. In der Praxis: hatte ich noch nie.",
    },
    {
      q: "Was passiert mit meinem Code und meinen Daten?",
      a: "Alles read-only wo möglich: eigener Branch in deinem Repo, eingeschränkter Stripe-Read-Key (nicht Live-Secret), keine Passwörter. Nach Audit-Abschluss lösche ich alle lokalen Kopien. NDA gerne, schreib mir vor Buchung.",
    },
    {
      q: "Wie viel Tech-Know-how brauche ich?",
      a: "Wenig. Du brauchst nur: GitHub-Repo, Stripe-Account, Web-Tracking-Setup (Google Ads / Meta / GTM). Wenn du weisst was ein Pull-Request ist und einen Restricted-Key in Stripe erstellen kannst, reicht das. Wenn nicht — kein Drama, ich helfe.",
    },
    {
      q: "Kann ich nur den Tracking-Teil buchen?",
      a: "Nein. Audit ohne Fixes ist halb. Ich nehme nur Voll-Pakete an — Diagnose + Fixes als Code + Tracking-Verifikation. So gibt's am Ende echte Resultate, nicht nur PowerPoint-Empfehlungen.",
    },
    {
      q: "Wieviel Aufwand entsteht für mich?",
      a: "~2-3 Stunden über eine Woche: 30-Min-Discovery-Call, 30-Min-Kickoff, Zugänge geben (15 Min mit Onboarding-PDF), Code-PR reviewen + mergen, 30-Min-Debrief. Den Rest mache ich.",
    },
    {
      q: "Was wenn ich mit dem Ergebnis nicht zufrieden bin?",
      a: "Bug-Findungs-Garantie gilt: 100 % Refund wenn keine 3 verifizierten Bugs. Plus: Wenn nach Debrief eine Frage offen ist, antworte ich kostenlos noch 30 Tage. Discovery-Call ist immer kostenlos — wir testen vorab ob ConvLab überhaupt passt.",
    },
    {
      q: "Wie kontaktiere ich dich?",
      a: `Discovery-Call buchen (Calendly-Link unten) — der schnellste Weg. Oder Mail an ${SUPPORT_EMAIL} bzw. LinkedIn-DM. Ich antworte innerhalb 24h, an Wochentagen meist innerhalb 2h.`,
    },
  ];
  return (
    <Section id="faq">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Häufige Fragen.
      </h2>
      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-border bg-surface/60 p-5"
          >
            <summary className="flex items-center justify-between gap-4 text-lg font-semibold">
              {f.q}
              <span className="faq-icon flex-none text-accent transition-transform duration-200">
                +
              </span>
            </summary>
            <p className="mt-3 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
