import Section from "@/components/Section";

export default function Process() {
  const steps = [
    {
      day: "Tag 1",
      title: "Discovery-Call (kostenlos, 30 Min)",
      desc: "Du zeigst mir deinen Funnel. Ich sage dir ob ConvLab Sinn macht.",
    },
    {
      day: "Tag 2",
      title: "Setup",
      desc: "Clarity, Stripe-Read, Tracking-Audit-Tools werden in deinem Stack installiert.",
    },
    {
      day: "Tag 3-6",
      title: "Analyse & Fixes",
      desc: "Sessions reviewt, Bugs identifiziert, Code-Fixes als PR in deinen Branch.",
    },
    {
      day: "Tag 7",
      title: "Verifikation & Debrief",
      desc: "Wir verifizieren live dass Tracking feuert. 30-Min-Call mit Report.",
    },
  ];
  return (
    <Section id="process" className="bg-surface/30">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Wie der Audit abläuft.
      </h2>
      <ol className="mt-10 space-y-5">
        {steps.map((s, i) => (
          <li
            key={s.day}
            className="flex gap-5 rounded-xl border border-border bg-surface/60 p-6"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {s.day}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
