import Section from "@/components/Section";

export default function FAQ() {
  const faqs = [
    {
      q: "Wie viele Kunden auf einmal?",
      a: "Max 2 parallel. So bleibt der Service deep, nicht oberflächlich. Slots sind knapp.",
    },
    {
      q: "Was wenn ich keinen Next.js / Modern-Stack habe?",
      a: "Schreib mir vor dem Buchen. Bei zu legacy-Stacks lehne ich ab (kein Wordpress / kein Webflow).",
    },
    {
      q: "Was wenn du keine 3 Bugs findest?",
      a: "Dann zahlst du nichts. So einfach. (In der Praxis: hatte ich noch nie.)",
    },
    {
      q: "Kann ich nur den Tracking-Teil buchen?",
      a: "Nein. Audit ohne Fixes ist halb. Ich nehme nur Voll-Pakete an.",
    },
    {
      q: "Wieviel Aufwand entsteht für mich?",
      a: "~2-3 Stunden über eine Woche: Discovery-Call, Stripe-Read-Access geben, Code-PR mergen, Debrief-Call.",
    },
    {
      q: "Wie kontaktiere ich dich?",
      a: "Discovery-Call buchen (Calendly-Link unten). Oder direkt LinkedIn DM.",
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
