// Hard numbers section — anchor expectations between Process and Pricing.
// Each stat carries a mono caption (// metric_name) and a sub-line of context.

import Section from "@/components/Section";

const STATS = [
  {
    metric: "// live_audit · ID Wizard",
    big: "81 → 3",
    unit: "Bugs gefunden",
    sub: "81 Sessions, 0 Conversions → 3 Conversion-Killer identifiziert, alle gefixt",
  },
  {
    metric: "// tracking_coverage",
    big: "0% → 100%",
    unit: "Conversion-Tracking",
    sub: "Google Ads + Meta Pixel + Clarity-Funnel-Events sauber feuern",
  },
  {
    metric: "// turnaround",
    big: "7",
    unit: "Tage, Festpreis",
    sub: "Vom Discovery-Call bis zum letzten gemergten PR. Kein Scope-Creep.",
  },
];

export default function Results() {
  return (
    <Section id="results">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// ergebnisse · live-verifiziert"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Nicht Theorie. Im eigenen SaaS verprobt.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          Der ConvLab-Prozess wurde an{" "}
          <span className="text-foreground">id-wizard.com</span>{" "}
          entwickelt und scharf gefahren — jeder Schritt ist mit echten
          Stripe-Sales, Clarity-Recordings und Google-Ads-Conversions belegt.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.metric}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {s.metric}
              </p>
              <p className="mt-4 font-grotesk text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                {s.big}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {s.unit}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
