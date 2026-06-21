import Section from "@/components/Section";
import { LINKEDIN_POST_URL } from "@/lib/config";

export default function Proof() {
  const results = [
    "3 Bugs identifiziert (HEIC-Upload tot / Stepper-Pills ungeklickbar / GADS-Tracking nie verifiziert)",
    "Alle 3 in Production gefixt (PRs #87, #88, #89, #90)",
    "Conversion-Pixel feuert verifiziert",
    "Brand-Kampagne von 1,2 % CTR-Ziel auf 10-20 % geoeffnet",
  ];
  return (
    <Section id="proof">
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Was du buchst, habe ich gerade live an meinem eigenen SaaS durchgezogen —
        oeffentlich dokumentiert.
      </h2>

      <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          ID Wizard · Biometrisches Passfoto · 4.99 CHF Single-Sale
        </p>
        <p className="mt-4 text-lg">
          <span className="font-semibold text-foreground">Vorher:</span>{" "}
          <span className="text-muted">
            81 Sessions in 3 Tagen / 0 Conversions / Brand-Kampagne lief seit
            Wochen blind.
          </span>
        </p>
        <p className="mt-6 font-semibold">Nach 48 Stunden Audit:</p>
        <ul className="mt-4 space-y-3">
          {results.map((r) => (
            <li key={r} className="flex gap-3 text-foreground">
              <span className="mt-1 text-accent">→</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">
          Den ganzen Sprint live dokumentiert auf LinkedIn — Building in Public.
          Du siehst genau wie ich arbeite, bevor du buchst.
        </p>
        <a
          href={LINKEDIN_POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
        >
          → Sprint-Story auf LinkedIn ansehen
        </a>
      </div>

      <p className="mt-8 text-lg font-semibold">
        Das ist exakt der Prozess, den du fuer deinen SaaS bekommst.
      </p>
    </Section>
  );
}
