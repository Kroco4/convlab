import Section from "@/components/Section";

export default function Solution() {
  const items = [
    {
      title: "Microsoft Clarity Setup",
      desc: "Session-Replays und Heatmaps innerhalb von 24h aktiv.",
    },
    {
      title: "Funnel-Tiefendiagnose",
      desc: "100+ Sessions manuell analysiert. Die 3 grössten Conversion-Killer schwarz auf weiss.",
    },
    {
      title: "Bug-Fixes im Code implementiert (Next.js/React-Stack)",
      desc: 'PR-Style Fixes, gemerged in deinen Branch. Kein "Wir empfehlen…" — sondern: läuft.',
    },
    {
      title: "Tracking-Verifikation",
      desc: "Google Ads, Meta Pixel, gtag, UTM-Attribution. Live verifiziert dass alles physisch feuert.",
    },
  ];
  return (
    <Section id="solution" className="bg-surface/30">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        ConvLab Audit — 7 Tage, fester Preis, sofortige Klarheit.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-border bg-surface/60 p-6"
          >
            <h3 className="flex items-start gap-2 text-lg font-semibold">
              <span className="text-accent">✓</span>
              {it.title}
            </h3>
            <p className="mt-2 pl-6 text-muted">{it.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
        <p className="text-xl font-semibold">Festpreis: 1.490 CHF.</p>
        <p className="mt-2 text-muted">
          Keine versteckten Kosten. Keine Add-Ons. Keine
          &quot;Strategie-Sessions&quot; über die du extra zahlst.
        </p>
      </div>
    </Section>
  );
}
