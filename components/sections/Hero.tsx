import { CALENDLY_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden px-5 pb-16 pt-32 sm:pb-20 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(26,107,255,0.18) 0%, rgba(13,17,23,0) 70%)",
        }}
      />
      <div className="mx-auto w-full max-w-content">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Dein Funnel läuft.
          <br />
          <span className="text-muted">Aber konvertiert nicht.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Ich finde in 7 Tagen die 3 Bugs, die dich Sales kosten — und fixe sie
          im Code.
        </p>
        <p className="mt-6 text-2xl font-semibold sm:text-3xl">
          Funnel-Audit ab{" "}
          <span className="text-accent">1.490 CHF</span>.
        </p>
        <div className="mt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
          >
            Kostenloses Discovery-Call buchen → 30 Min
          </a>
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          <span><span className="mr-1 text-accent">✓</span>Bug-Findungs-Garantie</span>
          <span><span className="mr-1 text-accent">✓</span>7-Tage-Turnaround</span>
          <span><span className="mr-1 text-accent">✓</span>100% Vorkasse via Stripe</span>
        </p>
        <div className="mt-10 max-w-2xl rounded-xl border border-border bg-surface/60 p-5">
          <p className="text-sm leading-relaxed text-muted">
            <span className="mr-1 text-accent">★</span>
            <span className="font-semibold text-foreground">
              Live-verifiziert an meinem eigenen SaaS:
            </span>{" "}
            81 Sessions / 0 Conversions → 3 Bugs gefunden &amp; gefixt → Tracking
            läuft
          </p>
        </div>
      </div>
    </section>
  );
}
