import Section from "@/components/Section";
import { CALENDLY_URL, LINKEDIN_PROFILE_URL } from "@/lib/config";

export default function FinalCTA() {
  return (
    <Section id="contact" className="bg-surface/30">
      <div
        className="mx-auto max-w-3xl rounded-2xl border border-accent/30 p-8 text-center sm:p-12"
        style={{
          background:
            "radial-gradient(80% 120% at 50% 0%, rgba(26,107,255,0.12) 0%, rgba(13,17,23,0) 70%)",
        }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Buch dein Discovery-Call.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          30 Minuten. Du zeigst mir deinen Funnel. Wir checken ob ConvLab Sinn
          für dich macht. Kostenlos. Keine Verkaufsmasche.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          Discovery-Call buchen →
        </a>
        <p className="mt-4 text-sm text-muted">
          oder DM auf LinkedIn:{" "}
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            Eugen Schnellbach
          </a>
        </p>
      </div>
    </Section>
  );
}
