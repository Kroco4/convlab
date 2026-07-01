import Section from "@/components/Section";

const SIGNALS = [
  {
    tag: "STACK",
    head: "Du fährst Wordpress, Webflow oder Shopify.",
    sub: "ConvLab fixt im Code. Bei No-Code-Buildern lohnt sich der Audit-Aufwand nicht. Schreib mir trotzdem — ich kenne gute Spezialisten für diese Plattformen.",
  },
  {
    tag: "TRAFFIC",
    head: "Du hast <500 Sessions pro Monat.",
    sub: "Conversion-Optimierung braucht Daten. Unter 500 Sessions ist jede Statistik Rauschen. Bau erst Traffic auf (SEO, Ads, Outreach) — dann kommen wir wieder ins Spiel.",
  },
  {
    tag: "BUSINESS",
    head: "Du verkaufst eine 9-CHF-Sache.",
    sub: "Bei einem AOV von 9 CHF braucht es 165 Sales nur für den Audit-Preis. Das macht wirtschaftlich erst Sinn ab 49+ CHF Produktwert oder Recurring-Revenue.",
  },
  {
    tag: "MINDSET",
    head: "Du willst lieber einen 100-Seiten-Report.",
    sub: "Wir liefern Code, keine Decks. Wer einen klassischen „Agentur-Report mit Heatmap-Screenshots“ sucht, ist bei einer CRO-Agentur richtiger.",
  },
];

export default function Disqualify() {
  return (
    <Section id="disqualify">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// ehrlichkeit · fit-check"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Wann ConvLab <span className="text-accent">nicht</span> für dich ist.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          Productized-Services funktionieren nur, wenn der Fit stimmt. Lieber jetzt klar
          sagen wo der Service nicht passt — als später beide Seiten enttäuschen.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SIGNALS.map((s) => (
            <div
              key={s.tag}
              className="flex gap-5 rounded-2xl border border-border bg-surface/60 p-6"
            >
              <div
                className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-border bg-background font-mono text-base text-muted"
                aria-hidden
              >
                ✕
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {`// ${s.tag.toLowerCase()}`}
                </p>
                <h3 className="mt-1.5 font-grotesk text-lg font-semibold tracking-tight text-foreground">
                  {s.head}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {"// unsicher? → discovery-call · ich sage dir ehrlich ob es passt"}
        </p>
      </div>
    </Section>
  );
}
