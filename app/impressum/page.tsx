import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { IMPRESSUM } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum — ConvLab",
  description: "Impressum und Anbieterkennzeichnung von ConvLab.",
  robots: { index: false, follow: true },
};

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      <div className="mt-2 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" updated="Juni 2026">
      <Section heading="Anbieter">
        <p>
          {IMPRESSUM.betreiber}
          <br />
          {IMPRESSUM.bezeichnung}
          <br />
          {IMPRESSUM.rechtsform}
          <br />
          {IMPRESSUM.cO}
          <br />
          {IMPRESSUM.strasse}
          <br />
          {IMPRESSUM.plzOrt}
          <br />
          {IMPRESSUM.region}
        </p>
      </Section>

      <Section heading="Kontakt">
        <p>
          E-Mail:{" "}
          <a href={`mailto:${IMPRESSUM.email}`} className="text-accent hover:underline">
            {IMPRESSUM.email}
          </a>
          {IMPRESSUM.telefon ? (
            <>
              <br />
              Telefon: {IMPRESSUM.telefon}
            </>
          ) : null}
        </p>
      </Section>

      {IMPRESSUM.uid ? (
        <Section heading="Unternehmens-Identifikationsnummer">
          <p>{IMPRESSUM.uid}</p>
        </Section>
      ) : null}

      <Section heading="Mehrwertsteuer (MWST)">
        <p>
          Der Anbieter ist derzeit nicht mehrwertsteuerpflichtig. Es wird keine
          Mehrwertsteuer ausgewiesen.
        </p>
      </Section>

      <Section heading="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website wurden mit groesstmoeglicher Sorgfalt erstellt. Fuer
          die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte wird jedoch keine
          Gewaehr uebernommen.
        </p>
      </Section>

      <Section heading="Externe Links">
        <p>
          Diese Website kann Links zu externen Websites enthalten. Fuer deren Inhalte ist
          ausschliesslich der jeweilige Betreiber verantwortlich. Der Anbieter uebernimmt
          keine Haftung fuer verlinkte Inhalte.
        </p>
      </Section>

      <Section heading="Urheberrecht">
        <p>
          Die auf dieser Website veroeffentlichten Inhalte und Werke unterliegen dem
          Urheberrecht. Eine Vervielfaeltigung oder Verwendung bedarf der vorherigen
          schriftlichen Zustimmung des Anbieters.
        </p>
      </Section>

      <Section heading="Anwendbares Recht">
        <p>
          Es gilt ausschliesslich Schweizer Recht unter Ausschluss des UN-Kaufrechts.
          Gerichtsstand ist {IMPRESSUM.gerichtsstand}.
        </p>
      </Section>
    </LegalShell>
  );
}
