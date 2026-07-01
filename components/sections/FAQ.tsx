import Section from "@/components/Section";
import { SUPPORT_EMAIL } from "@/lib/config";

const FAQS = [
  {
    q: "Wie schnell startest du nach Buchung?",
    a: "Innerhalb von 48 Stunden nach Zahlungseingang. Ich melde mich mit dem Onboarding-PDF (5-Schritte-Anleitung) und wir terminieren den Kickoff. Mehr als 2 Audits parallel nehme ich nicht an — du bekommst echten Fokus.",
  },
  {
    q: "Wie viele Kunden auf einmal?",
    a: "Max 2 parallel. So bleibt der Service deep, nicht oberflächlich. Slots sind knapp — wenn Slot 1–3 weg sind, steigt der Preis.",
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
    a: "Wenig. Du brauchst nur: GitHub-Repo, Stripe-Account, Web-Tracking-Setup (Google Ads / Meta / GTM). Wenn du weisst was ein Pull-Request ist und einen Restricted-Key in Stripe erstellen kannst, reicht das.",
  },
  {
    q: "Kann ich nur den Tracking-Teil buchen?",
    a: "Nein. Audit ohne Fixes ist halb. Ich nehme nur Voll-Pakete an — Diagnose + Fixes als Code + Tracking-Verifikation. So gibt es am Ende echte Resultate, nicht nur PowerPoint-Empfehlungen.",
  },
  {
    q: "Wieviel Aufwand entsteht für mich?",
    a: "~2–3 Stunden ueber eine Woche: 30-Min-Discovery-Call, 30-Min-Kickoff, Zugänge geben (15 Min mit Onboarding-PDF), Code-PR reviewen + mergen, 30-Min-Debrief. Den Rest mache ich.",
  },
  {
    q: "Was wenn ich mit dem Ergebnis nicht zufrieden bin?",
    a: "Bug-Findungs-Garantie gilt: 100 % Refund wenn keine 3 verifizierten Bugs. Plus: Wenn nach Debrief eine Frage offen ist, antworte ich kostenlos noch 30 Tage. Discovery-Call ist immer kostenlos — wir testen vorab ob ConvLab ueberhaupt passt.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-surface/30">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// FAQ · haeufige fragen"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Was Founder vor dem Buchen wissen wollen.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          Alle Fragen die in Discovery-Calls am häufigsten aufkommen — vorab ehrlich beantwortet, damit der Call auf den Funnel selbst fokussiert bleibt.
        </p>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface/60 p-5 transition-colors open:border-accent/40 hover:border-accent/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="flex items-baseline gap-3 text-left">
                  <span className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-grotesk text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {f.q}
                  </span>
                </span>
                <span
                  className="flex-none font-mono text-lg text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pl-9 text-sm leading-relaxed text-muted sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>
            {"// noch eine frage? "}
            <a href="#contact" className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent">
              Discovery-Call
            </a>
            {" · 30 min · kostenlos"}
          </span>
        </p>

        <p className="sr-only">Fragen? Mail an {SUPPORT_EMAIL}</p>
      </div>
    </Section>
  );
}
