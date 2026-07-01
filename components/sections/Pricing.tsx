import Section from "@/components/Section";
import { CALENDLY_URL, STRIPE_AUDIT_URL } from "@/lib/config";

type Cta = {
  label: string;
  href: string;
  external: boolean;
};

type Tier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  bullets: string[];
  cta: Cta;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Spot-Fix",
    price: "CHF 490",
    cadence: "einmalig",
    tagline: "1 Bug, 1 PR, 3 Tage.",
    bullets: [
      "Ein dokumentierter Conversion-Bug",
      "Pull Request in deinen Branch",
      "Discovery-Call inkludiert",
      "Tracking-Verifikation des Fix",
    ],
    cta: {
      label: "Spot-Fix anfragen",
      href: CALENDLY_URL,
      external: true,
    },
  },
  {
    name: "Full Audit",
    price: "CHF 1'490",
    cadence: "einmalig · 7 Tage",
    tagline: "3 Bugs, 3 PRs, Bug-Findungs-Garantie.",
    bullets: [
      "Drei Conversion-Bugs identifiziert + gefixt",
      "Google Ads + Meta Pixel + Clarity-Tracking verifiziert",
      "Stripe-Funnel End-to-End getestet",
      "30-Min-Debrief mit Live-Verifikation",
      "Bug-Findungs-Garantie: keine 3 Bugs → Rückerstattung",
    ],
    cta: {
      label: "Full Audit buchen",
      href: STRIPE_AUDIT_URL,
      external: true,
    },
    featured: true,
  },
  {
    name: "Retainer",
    price: "ab CHF 990",
    cadence: "pro Monat",
    tagline: "Kontinuierliche Conversion-Pflege.",
    bullets: [
      "1–2 Bugs pro Monat gefixt",
      "Monatlicher Conversion-Snapshot",
      "Tracking-Health-Check",
      "Slack/Mail-Channel für Hot-Fixes",
      "Mindestlaufzeit 3 Monate",
    ],
    cta: {
      label: "Retainer besprechen",
      href: CALENDLY_URL,
      external: true,
    },
  },
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={
        tier.featured
          ? "relative flex flex-col rounded-2xl border border-accent/50 bg-surface-elevated p-7 shadow-accent-glow"
          : "relative flex flex-col rounded-2xl border border-border bg-surface/60 p-7"
      }
    >
      {tier.featured && (
        <div className="absolute -top-3 left-7 right-7 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-background">
            Empfohlen
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            <span
              className="relative flex h-1.5 w-1.5 items-center justify-center"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            2 von 3 Slots frei · Juli
          </span>
        </div>
      )}

      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {`// ${tier.name.toLowerCase()}`}
      </p>
      <h3 className="mt-3 font-grotesk text-2xl font-bold tracking-tight">
        {tier.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{tier.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-grotesk text-4xl font-bold tracking-tight">
          {tier.price}
        </span>
        <span className="text-sm text-muted">{tier.cadence}</span>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm leading-relaxed">
        {tier.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-foreground/90">
            <span className="mt-0.5 text-accent" aria-hidden>✓</span>
            {b}
          </li>
        ))}
      </ul>

      <a
        href={tier.cta.href}
        target={tier.cta.external ? "_blank" : undefined}
        rel={tier.cta.external ? "noopener noreferrer" : undefined}
        className={
          tier.featured
            ? "mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background shadow-accent-glow transition-transform hover:-translate-y-0.5"
            : "mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        }
      >
        {tier.cta.label}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// pricing · transparent"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Drei Pakete. Festpreise. Keine Stundenrechnung.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          Du weisst vorab was du kriegst und was es kostet. Wenn wir die
          Bug-Findungs-Garantie nicht halten, bekommst du dein Geld zurück.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {"// alle preise zzgl. MwSt · Schweizer Franken · 100% Vorkasse"}
        </p>
      </div>
    </Section>
  );
}
