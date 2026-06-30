import Section from "@/components/Section";
import {
  CALENDLY_URL,
  LINKEDIN_PROFILE_URL,
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
} from "@/lib/config";

export default function FinalCTA() {
  return (
    <Section id="contact" className="bg-surface/30">
      <div
        className="mx-auto max-w-3xl rounded-2xl border border-accent/30 p-8 text-center sm:p-12"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 0%, rgba(52,211,153,0.12) 0%, rgba(10,10,11,0) 70%)",
        }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {"// jetzt buchen · slots begrenzt"}
        </p>
        <h2 className="mt-3 font-grotesk text-3xl font-bold tracking-tight sm:text-4xl">
          Bring deinen Funnel.
          <br />
          <span className="text-accent">Wir bringen den Fix.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          30 Min Discovery-Call. Du zeigst mir deinen Funnel. Wir entscheiden
          gemeinsam ob ConvLab Sinn macht. Kostenlos. Kein Verkauf.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-background shadow-accent-glow transition-transform hover:-translate-y-0.5"
          >
            Discovery-Call buchen
            <span aria-hidden>→</span>
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {"// 30 min · kostenlos · kein verkauf"}
          </span>
        </div>
        <p className="mt-8 text-sm text-muted">
          Lieber per Mail oder DM?{" "}
          <a
            href={SUPPORT_MAILTO}
            className="font-semibold text-accent hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          {" · "}
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            LinkedIn-DM
          </a>
        </p>
        <p className="mt-3 text-xs text-muted/80">
          Antwort innerhalb 24h, an Wochentagen meist innerhalb 2h.
        </p>
      </div>
    </Section>
  );
}
