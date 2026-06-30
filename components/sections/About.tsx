import Section from "@/components/Section";
import {
  LINKEDIN_PROFILE_URL,
  LINKEDIN_POST_URL,
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
} from "@/lib/config";

export default function About() {
  return (
    <Section id="about" className="bg-surface/30">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// wer dahinter steckt"}
        </p>

        <div className="mt-3 grid gap-10 lg:grid-cols-[auto,1fr] lg:items-start lg:gap-14">
          {/* Avatar */}
          <div className="flex lg:block">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/40 bg-background font-grotesk text-3xl font-bold tracking-tight text-accent shadow-accent-glow"
              aria-hidden
            >
              ES
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
              Solo-Founder.{" "}
              <span className="text-accent">Bauen statt beraten.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Eugen Schnellbach. ConvLab ist kein Side-Hustle einer Agentur —
              ich baue selbst SaaS. Tagsueber Augenoptiker in der Schweiz, abends
              Founder von{" "}
              <a
                href="https://id-wizard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                id-wizard.com
              </a>{" "}
              (biometrische Passfotos).
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface/60 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {"// usp"}
                </p>
                <p className="mt-2 font-grotesk text-base font-semibold text-foreground">
                  Eigenes Produkt als Lab.
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Jeder Audit-Schritt ist am eigenen Funnel verprobt, nicht im Vortrag.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/60 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {"// promise"}
                </p>
                <p className="mt-2 font-grotesk text-base font-semibold text-foreground">
                  Code statt Decks.
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Du kriegst Pull-Requests, keine Powerpoint-Findings.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/60 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {"// scope"}
                </p>
                <p className="mt-2 font-grotesk text-base font-semibold text-foreground">
                  Max 2 parallel.
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  So bleibt der Service tief. Slots sind knapp — kein Skalierungs-Gimmick.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                LinkedIn-Profil →
              </a>
              <a
                href={LINKEDIN_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Building-in-Public-Story →
              </a>
              <a
                href={SUPPORT_MAILTO}
                className="text-accent hover:underline normal-case tracking-normal"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
