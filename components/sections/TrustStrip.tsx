// Trust signals immediately below the hero. Compact, mono-styled,
// not a CTA — just enough to anchor the offer terms before the visitor
// scrolls into Process / Results / Pricing.

const PILLS = [
  "Bug-Findungs-Garantie",
  "7-Tage-Turnaround",
  "100% Vorkasse via Stripe",
  "Code-PR, kein PDF",
];

export default function TrustStrip() {
  return (
    <section
      id="trust"
      aria-label="Vertrauenssignale"
      className="border-y border-border bg-surface/40"
    >
      <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5">
        {PILLS.map((label, i) => (
          <span
            key={label}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {label}
            {i < PILLS.length - 1 && (
              <span className="ml-6 hidden text-border sm:inline" aria-hidden>
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
