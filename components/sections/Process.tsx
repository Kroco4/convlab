import Section from "@/components/Section";

const STEPS = [
  {
    tag: "01 · AUDIT",
    title: "Wir gehen rein.",
    desc: "Clarity, Stripe, Recordings, Heatmaps, Funnel-Walk-Through. 50+ Datapoints in 1–2 Tagen.",
    deliverable: "Top-3-Bugs + Impact-Schaetzung",
  },
  {
    tag: "02 · FIX",
    title: "Wir fixen im Code.",
    desc: "Pull Request in deinen Branch. Du reviewst, mergst, deployst. Kein „lass uns einen Call machen ueber die Findings“.",
    deliverable: "3 PRs · 3–5 Tage",
  },
  {
    tag: "03 · VERIFY",
    title: "Wir verifizieren live.",
    desc: "Tracking feuert in Google Ads + Meta. Funnel-Sessions konvertieren wieder. 30-Min-Debrief.",
    deliverable: "End-to-End-Test + Report",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-surface/30">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// wie wir arbeiten"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Drei Schritte. Sieben Tage. Nur Code, keine Decks.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          Du kennst dein Produkt besser als jeder Berater. Was dir fehlt, ist
          Zeit fuers Conversion-Detail. Wir machen genau das — fertig
          implementiert.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.tag}
              className="relative flex flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40"
            >
              {i < STEPS.length - 1 && (
                <div
                  className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center md:flex"
                  aria-hidden
                >
                  <div className="h-px w-3 bg-gradient-to-r from-accent/40 to-accent" />
                  <div className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-[10px] text-accent">
                    →
                  </div>
                </div>
              )}

              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.tag}
              </span>
              <h3 className="mt-3 font-grotesk text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
              <div className="mt-6 border-t border-border/70 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {"// deliverable"}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {s.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
