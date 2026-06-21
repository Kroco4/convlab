import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { IMPRESSUM } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklaerung — ConvLab",
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
    <LegalShell title="Datenschutzerklaerung" updated="Juni 2026">
      <p>
        Der Schutz deiner persoenlichen Daten ist mir wichtig. Diese Erklaerung informiert
        dich darueber, welche Daten beim Besuch dieser Website und bei der Nutzung meiner
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
          stabilen Betrieb und werden nicht mit anderen Quellen zusammengefuehrt.
          Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </Section>

      <Section heading="3. Cookies & Tracking">
        <p>
          Diese Website setzt aktuell keine Tracking-Cookies, Analyse- oder Marketing-Pixel
          ein. Es werden nur technisch notwendige Funktionen genutzt. Sollte zukuenftig
          Webanalyse (z.B. Microsoft Clarity) eingesetzt werden, wird diese Erklaerung
          entsprechend ergaenzt und — sofern erforderlich — eine Einwilligung eingeholt.
        </p>
      </Section>

      <Section heading="4. Discovery-Call-Buchung (Calendly)">
        <p>
          Fuer die Terminbuchung wird Calendly LLC eingesetzt. Wenn du einen Termin buchst,
          werden die von dir eingegebenen Daten (z.B. Name, E-Mail, Terminwunsch) von
          Calendly verarbeitet, um den Termin zu organisieren. Es gelten zusaetzlich die
          Datenschutzbestimmungen von Calendly. Rechtsgrundlage: Vertragsanbahnung
          (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </Section>

      <Section heading="5. Zahlungsabwicklung (Stripe)">
        <p>
          Zahlungen werden ueber Stripe Payments Europe Ltd. abgewickelt. Bei einer Buchung
          werden die zur Zahlung noetigen Daten direkt an Stripe uebermittelt und dort
          verarbeitet; ich erhalte keine vollstaendigen Zahlungsmitteldaten. Rechtsgrundlage:
          Vertragserfuellung (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </Section>

      <Section heading="6. Auftragsverarbeiter & Drittlandtransfer">
        <p>
          Im Rahmen des Betriebs werden folgende Dienstleister eingesetzt: Vercel (Hosting),
          Stripe (Zahlung), Calendly (Terminbuchung). Dabei kann es zu einer Uebermittlung
          in die USA kommen. Die Anbieter verpflichten sich vertraglich (u.a. ueber
          EU-Standardvertragsklauseln) zu einem angemessenen Datenschutzniveau.
        </p>
      </Section>

      <Section heading="7. Deine Rechte">
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der
          Verarbeitung, Datenuebertragbarkeit und Widerspruch. Zudem kannst du dich bei der
          zustaendigen Aufsichtsbehoerde beschweren (in der Schweiz: EDOEB). Zur Ausuebung
          deiner Rechte genuegt eine Nachricht an die oben genannte Kontaktadresse.
        </p>
      </Section>

      <Section heading="8. Aenderungen">
        <p>
          Diese Datenschutzerklaerung wird angepasst, sobald sich an der Datenverarbeitung
          etwas aendert (z.B. neue Tools). Es gilt jeweils die aktuelle, auf dieser Seite
          veroeffentlichte Fassung.
        </p>
      </Section>
    </LegalShell>
  );
}
