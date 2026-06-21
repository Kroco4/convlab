import Section from "@/components/Section";
import { STRIPE_AUDIT_URL } from "@/lib/config";

export default function Pricing() {
  const included = [
    "Alles aus dem Process",
    "Bug-Fixes als Code (nicht nur Empfehlungen)",
    "Tracking-Verifikation für Google Ads + Meta Pixel",
    "7-Tage-Turnaround",
  ];
  const excluded = [
    "Strategie-Calls (du hast Strategie, du brauchst Fixes)",
    "Newsletter / Email-Marketing-Setup",
    "Paid-Ads-Management",
    "Redesign deiner Website",
  ];
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-3xl rounded-2xl border border-accent/40 bg-surface/60 p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Slot 1 von 3 frei
          </span>
          <span className="text-sm text-muted">Launch-Preis</span>
        </div>

        <p className="mt-6 text-4xl font-bold sm:text-5xl">
          1.490 CHF
        </p>
        <p className="mt-3 text-muted">
          Launch-Preis. Nur die ersten 3 Slots. Danach steigt der Preis. Wer
          früh bucht, sichert sich den Audit zum Einstiegspreis.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold">Was drin ist:</p>
            <ul className="mt-3 space-y-2 text-sm">
              {included.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Was NICHT drin ist:</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {excluded.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted">✕</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <p className="font-semibold">
            <span className="mr-2 text-accent">✓ Garantie:</span>
            Ich finde mind. 3 verifizierte Conversion-Bugs in deinem Funnel —
            oder du zahlst nichts.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-border p-5 text-sm text-muted">
          <span className="font-semibold text-foreground">Optional dazu:</span>{" "}
          30-Tage-Re-Analyse (Vorher/Nachher-Lift gemessen):{" "}
          <span className="font-semibold text-foreground">+290 CHF</span>
        </div>

        <a
          href={STRIPE_AUDIT_URL}
          className="mt-8 flex w-full items-center justify-center rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          1.490 CHF — Audit jetzt buchen →
        </a>
        <p className="mt-3 text-center text-sm text-muted">
          Zahlung: 100% bei Buchung. Stripe Checkout.
        </p>
      </div>
    </Section>
  );
}
