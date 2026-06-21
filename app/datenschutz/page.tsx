import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { IMPRESSUM } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — ConvLab",
  description: "Wie ConvLab personenbezogene Daten verarbeitet (DSGVO / revDSG).",
  robots: { index: false, follow: true },
};

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      <div className="mt-2 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <LegalShell title="Datenschutzerklärung" updated="Juni 2026">
      <p>
        Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Erklärung informiert
        dich darüber, welche Daten beim Besuch dieser Website und bei der Nutzung meiner
        Leistungen verarbeitet werden — nach Schweizer Datenschutzgesetz (revDSG) und, wo
        anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).
      </p>

      <Section heading="1. Verantwortliche Stelle">
        <p>
          {IMPRESSUM.betreiber}, {IMPRESSUM.strasse}, {IMPRESSUM.plzOrt},{" "}
          {IMPRESSUM.land}. E-Mail:{" "}
          <a href={`mailto:${IMPRESSUM.email}`} className="text-accent hover:underline">
            {IMPRESSUM.email}
          </a>
          .
        </p>
      </Section>

      <Section heading="2. Daten beim Besuch der Website (Server-Logs)">
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden automatisch
          technische Zugriffsdaten verarbeitet (IP-Adresse, Datum/Uhrzeit, abgerufene
          Seite, Browser-Typ). Diese Daten dienen ausschliesslich dem sicheren und
          stabilen Betrieb und werden nicht mit anderen Quellen zusammengeführt.
          Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </Section>

      <Section heading="3. Cookies & Tracking">
        <p>
          Diese Website setzt keine Marketing- oder Tracking-Cookies ein. Zur
          Reichweiten- und Performance-Messung nutze ich Vercel Web Analytics und Vercel
          Speed Insights. Beide arbeiten cookielos und anonymisiert, speichern keine
          personenbezogenen Daten und erstellen keine geraeteuebergreifenden Profile –
          deshalb ist hierfuer kein Cookie-Banner erforderlich. Rechtsgrundlage:
          berechtigtes Interesse an einem fehlerfreien, performanten Angebot
          (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </Section>

      <Section heading="4. Discovery-Call-Buchung (Calendly)">
        <p>
          Für die Terminbuchung wird Calendly LLC eingesetzt. Wenn du einen Termin buchst,
          werden die von dir eingegebenen Daten (z.B. Name, E-Mail, Terminwunsch) von
          Calendly verarbeitet, um den Termin zu organisieren. Es gelten zusätzlich die
          Datenschutzbestimmungen von Calendly. Rechtsgrundlage: Vertragsanbahnung
          (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </Section>

      <Section heading="5. Zahlungsabwicklung (Stripe)">
        <p>
          Zahlungen werden über Stripe Payments Europe Ltd. abgewickelt. Bei einer Buchung
          werden die zur Zahlung nötigen Daten direkt an Stripe übermittelt und dort
          verarbeitet; ich erhalte keine vollständigen Zahlungsmitteldaten. Rechtsgrundlage:
          Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </Section>

      <Section heading="6. Auftragsverarbeiter & Drittlandtransfer">
        <p>
          Im Rahmen des Betriebs werden folgende Dienstleister eingesetzt: Vercel (Hosting),
          Stripe (Zahlung), Calendly (Terminbuchung). Dabei kann es zu einer Übermittlung
          in die USA kommen. Die Anbieter verpflichten sich vertraglich (u.a. über
          EU-Standardvertragsklauseln) zu einem angemessenen Datenschutzniveau.
        </p>
      </Section>

      <Section heading="7. Deine Rechte">
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem kannst du dich bei der
          zuständigen Aufsichtsbehörde beschweren (in der Schweiz: EDOEB). Zur Ausübung
          deiner Rechte genügt eine Nachricht an die oben genannte Kontaktadresse.
        </p>
      </Section>

      <Section heading="8. Änderungen">
        <p>
          Diese Datenschutzerklärung wird angepasst, sobald sich an der Datenverarbeitung
          etwas ändert (z.B. neue Tools). Es gilt jeweils die aktuelle, auf dieser Seite
          veröffentlichte Fassung.
        </p>
      </Section>
    </LegalShell>
  );
}
