import { CALENDLY_URL } from "@/lib/config";
import CodeDiffCard from "@/components/CodeDiffCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden px-5 pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Subtle radial glow behind the hero, emerald-tinted */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 0%, rgba(52,211,153,0.10) 0%, rgba(10,10,11,0) 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-content items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left column — copy */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {"// productized conversion audit · solo founders"}
          </p>

          <h1 className="mt-5 font-grotesk text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Andere schicken dir einen Report.
            <br />
            <span className="text-accent">Wir schicken den Fix.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            3 Conversion-Bugs in 7 Tagen. Gefunden, gefixt im Code,
            live verifiziert — als Pull Request in deinen Branch.
          </p>

          {/* CTA-Block — stackt auf Mobile fuer besseren Touch-Target, wird auf sm+ inline. */}
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-background shadow-accent-glow transition-transform hover:-translate-y-0.5 sm:justify-start"
            >
              Discovery-Call buchen
              <span aria-hidden>→</span>
            </a>
            <span className="text-center text-sm text-muted sm:text-left">
              30 Min · kostenlos · kein Verkauf
            </span>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li><span className="mr-1.5 text-accent">✓</span>Bug-Findungs-Garantie</li>
            <li><span className="mr-1.5 text-accent">✓</span>7-Tage-Turnaround</li>
            <li><span className="mr-1.5 text-accent">✓</span>Code-PR, kein PDF</li>
          </ul>
        </div>

        {/* Right column — the diff card. On mobile this stacks below the copy. */}
        <div className="flex justify-center lg:justify-end">
          <CodeDiffCard />
        </div>
      </div>
    </section>
  );
}
