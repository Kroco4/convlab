import Section from "@/components/Section";

export default function Problem() {
  const pains = [
    "Du verstehst nicht warum die Conversion-Rate so niedrig ist.",
    "Google Ads + Meta Ads fühlen sich an wie ein Money-Sink.",
    "Du weisst nicht ob dein Conversion-Pixel überhaupt feuert.",
    "Du hast keine Zeit für 2 Wochen Funnel-Detektiv.",
  ];
  return (
    <Section id="problem">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Kennst du das?
      </h2>
      <p className="mt-4 text-lg text-muted">
        Dein Tool ist live. Traffic kommt rein. Aber:
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {pains.map((p) => (
          <li
            key={p}
            className="flex gap-3 rounded-xl border border-border bg-surface/60 p-5 text-foreground"
          >
            <span className="mt-1 text-accent">→</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xl font-semibold leading-relaxed">
        Das Problem ist nicht dein Produkt.
        <br />
        <span className="text-accent">
          Das Problem sind meistens 3 unsichtbare Bugs im Funnel.
        </span>
      </p>
    </Section>
  );
}
