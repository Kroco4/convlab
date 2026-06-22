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
      <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-start">
        <div className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-white">
          ES
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Wer ich bin.
          </h2>
          <p className="mt-5 text-lg">
            Eugen Schnellbach. Solo-Founder von ID Wizard (Biometrisches Passfoto
            SaaS). Augenoptiker im Verkauf in der Schweiz. SaaS-Bauer in der
            Nebenzeit.
          </p>
          <p className="mt-4 text-muted">
            <span className="font-semibold text-foreground">Mein USP:</span> Ich
            verkaufe dir keine Theorie. Ich habe das Setup an meinem eigenen
            Produkt gebaut, verifiziert und live dokumentiert.
          </p>
          <p className="mt-4 text-muted">
            Wenn ich es bei mir lösen kann (während ich tagsüber Brillen
            verkaufe), löse ich es auch bei dir.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold text-muted">
            <span className="text-accent">●</span>
            Made in Switzerland · Solo-betrieben · DSGVO-konform
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-accent">
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn-Profil
            </a>
            <a href={LINKEDIN_POST_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Building-in-Public-Story
            </a>
            <a href={SUPPORT_MAILTO} className="hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
