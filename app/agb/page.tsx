import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { IMPRESSUM, SUPPORT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "AGB — ConvLab",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung des ConvLab-Funnel-Audit-Service (B2B, Schweizer Recht).",
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

export default function AgbPage() {
  return (
    <LegalShell title="Allgemeine Geschäftsbedingungen" updated="Juli 2026">
      <p>
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) regeln das
        Vertragsverhältnis zwischen dem Anbieter und dem Auftraggeber für die Erbringung
        von Conversion-Audit-Leistungen unter der Bezeichnung <strong>ConvLab</strong>.
        Mit Auftragserteilung (Zahlung oder schriftliche Bestätigung) akzeptiert der
        Auftraggeber diese AGB als Vertragsgrundlage.
      </p>

      <Section heading="1. Anbieter">
        <p>
          Anbieter der Leistungen ist {IMPRESSUM.betreiber}, {IMPRESSUM.bezeichnung},
          {" "}{IMPRESSUM.strasse}, {IMPRESSUM.plzOrt}, {IMPRESSUM.land}. Kontakt:
          {" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . Details siehe Impressum.
        </p>
      </Section>

      <Section heading="2. Geltungsbereich · B2B-Only">
        <p>
          ConvLab richtet sich <strong>ausschliesslich an Unternehmer</strong>
          {" "}(natürliche oder juristische Personen, die bei Vertragsschluss in
          Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit
          handeln). Verträge mit Konsumentinnen und Konsumenten kommen nicht zustande.
          Ein <strong>Widerrufsrecht besteht nicht</strong>.
        </p>
        <p>
          Abweichende oder ergänzende Bedingungen des Auftraggebers werden nur nach
          ausdrücklicher schriftlicher Zustimmung des Anbieters Vertragsbestandteil.
        </p>
      </Section>

      <Section heading="3. Leistungsumfang">
        <p>
          Der Anbieter erbringt einen zeitlich befristeten Conversion-Audit-Service.
          Der konkrete Umfang richtet sich nach dem gebuchten Paket, wie auf der
          Website transparent dargestellt:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Spot-Fix (CHF 490):</strong> Analyse und Behebung eines
            dokumentierten Conversion-Bugs, Pull Request in das vom Auftraggeber
            bereitgestellte Repository, Tracking-Verifikation. Dauer: bis zu 3 Werktage.
          </li>
          <li>
            <strong>Full Audit (CHF 1&apos;490):</strong> Identifikation und Behebung
            von mindestens drei Conversion-Bugs, Pull Requests in das Repository,
            End-to-End-Verifikation von Google Ads, Meta Pixel und Clarity-Tracking,
            30-minütiges Debrief. Dauer: 7 Werktage.
          </li>
          <li>
            <strong>Retainer (ab CHF 990/Monat):</strong> Fortlaufende Betreuung mit
            ein bis zwei Bug-Fixes pro Monat, monatlicher Conversion-Snapshot,
            Tracking-Health-Check. Mindestlaufzeit: 3 Monate.
          </li>
        </ul>
        <p>
          Nicht Bestandteil der Leistung sind: Ads-Management, laufender Betrieb von
          Analytics-Systemen, Design- oder Copywriting-Arbeiten sowie Server- oder
          Infrastruktur-Administration ausserhalb des jeweiligen Audit-Scope.
        </p>
      </Section>

      <Section heading="4. Zustandekommen des Vertrags">
        <p>
          Die Präsentation der Leistungen auf der Website stellt kein bindendes
          Angebot dar. Der Vertrag kommt zustande, sobald der Auftraggeber ein Paket
          bucht (Zahlung über Stripe oder Kalender-Terminierung über Calendly nach
          vorheriger schriftlicher Vereinbarung) und der Anbieter die Annahme
          bestätigt. Bei Zahlung über Stripe gilt der Zahlungseingang als
          Annahmebestätigung.
        </p>
      </Section>

      <Section heading="5. Preise · MwSt · Zahlung">
        <p>
          Alle Preise verstehen sich in Schweizer Franken (CHF). Der Anbieter ist
          derzeit <strong>nicht mehrwertsteuerpflichtig</strong>; es wird keine
          Mehrwertsteuer ausgewiesen. Sollte sich die Steuerpflicht künftig ändern,
          wird die Website unverzüglich angepasst.
        </p>
        <p>
          Es gilt <strong>100 % Vorkasse</strong>. Die Zahlung erfolgt vor
          Leistungserbringung über Stripe (Kartenzahlung, Klarna oder weitere von
          Stripe angebotene Methoden). Die Leistung startet innerhalb von 48 Stunden
          nach Zahlungseingang.
        </p>
      </Section>

      <Section heading="6. Bug-Findungs-Garantie">
        <p>
          Für das Full Audit gilt eine <strong>Bug-Findungs-Garantie</strong>. Sie
          bedeutet: Wenn der Anbieter innerhalb der siebentägigen Audit-Phase nicht
          mindestens drei verifizierte Conversion-Bugs im Funnel des Auftraggebers
          identifiziert und dokumentiert, erstattet der Anbieter das gezahlte Honorar
          zu 100 %.
        </p>
        <p>
          Als <strong>Conversion-Bug</strong> im Sinne dieser Garantie gilt jede
          nachweisbare, ohne Design-Neuentwurf behebbare Ursache, die die
          Conversion-Rate messbar oder in ihrer Erfassung beeinträchtigt.
          Beispielhaft: fehlerhaftes oder fehlendes Conversion-Tracking, defekte
          Checkout-Flows, blockierende UI-Elemente, gebrochene Formular-Validierung
          oder falsch attribuierte Payment-Events. Reine Design-Präferenzen,
          Feature-Wünsche oder theoretische Optimierungsideen zählen nicht.
        </p>
        <p>
          Die Feststellung erfolgt einvernehmlich; im Zweifel entscheidet die
          objektive Auswirkung auf messbare Kennzahlen (Tracking-Log, Stripe-Sales,
          Session-Recordings). Die Refund-Auszahlung erfolgt spätestens
          <strong> 14 Tage nach Feststellung</strong>, über denselben Zahlungsweg.
        </p>
        <p>
          Die Garantie gilt nur, wenn der Auftraggeber seinen Mitwirkungspflichten
          nach Ziffer 8 nachkommt.
        </p>
      </Section>

      <Section heading="7. Fristen · Turnaround">
        <p>
          Die Leistung wird innerhalb der jeweils angegebenen Frist (Spot-Fix: 3
          Werktage, Full Audit: 7 Werktage) erbracht, gerechnet ab Erfüllung
          sämtlicher Mitwirkungspflichten des Auftraggebers. Verzögerungen, die auf
          fehlende Zugänge, unklare Anforderungen oder Ferienabwesenheit des
          Auftraggebers zurückgehen, verlängern die Frist entsprechend.
        </p>
      </Section>

      <Section heading="8. Mitwirkungspflichten des Auftraggebers">
        <p>
          Der Auftraggeber stellt zeitnah folgende Zugänge und Informationen bereit:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Read-Zugriff auf das Code-Repository (GitHub o.ä.), inkl. Berechtigung, einen Branch anzulegen und einen Pull Request zu öffnen.</li>
          <li>Read-Zugriff auf Analytics-Systeme (Google Ads, Meta Pixel, Microsoft Clarity, ggf. weitere).</li>
          <li>Eingeschränkten Stripe-API-Read-Key ohne Schreib- oder Auszahlungsrechte.</li>
          <li>Ansprechpartner-Kontakt für Rückfragen mit einer Reaktionszeit von maximal 24 Stunden an Werktagen.</li>
        </ul>
        <p>
          Kommt der Auftraggeber diesen Pflichten nicht innerhalb von 5 Werktagen ab
          Zahlungseingang nach, ruht die Bug-Findungs-Garantie für die Dauer der
          Verzögerung.
        </p>
      </Section>

      <Section heading="9. Nutzungsrechte · Übergabe">
        <p>
          Alle im Rahmen des Audits erstellten Code-Änderungen (Pull Requests) sowie
          übergebene Dokumente gehen mit vollständiger Zahlung in das
          uneingeschränkte, übertragbare Nutzungsrecht des Auftraggebers über. Der
          Anbieter behält sich das Recht vor, Zahlen und anonymisierte
          Erfahrungswerte für Marketing-Zwecke („Building in Public“) zu verwenden,
          sofern hierdurch keine Rückschlüsse auf den Auftraggeber möglich sind.
        </p>
      </Section>

      <Section heading="10. Vertraulichkeit">
        <p>
          Der Anbieter behandelt alle im Rahmen des Audits erhaltenen Daten,
          Zugänge, Repository-Inhalte und Geschäftsinformationen streng vertraulich
          und verwendet sie ausschliesslich zur Vertragserfüllung. Nach Abschluss des
          Audits werden lokale Kopien gelöscht. Ein separater NDA (Non-Disclosure
          Agreement) kann auf Wunsch des Auftraggebers vor Buchung geschlossen
          werden.
        </p>
      </Section>

      <Section heading="11. Haftung">
        <p>
          Der Anbieter haftet für Schäden aus Vorsatz und grober Fahrlässigkeit
          unbeschränkt. Für leichte Fahrlässigkeit ist die Haftung auf den
          typischerweise vorhersehbaren, unmittelbaren Schaden begrenzt, höchstens
          jedoch auf den vom Auftraggeber gezahlten Honorarbetrag. Eine Haftung für
          entgangenen Gewinn, mittelbare Schäden oder Folgeschäden ist
          ausgeschlossen, soweit gesetzlich zulässig.
        </p>
        <p>
          Der Anbieter übernimmt keine Garantie für bestimmte
          Conversion-Steigerungen oder Umsatzresultate; Gegenstand der Leistung ist
          die fachgerechte Bug-Identifikation und -Behebung, nicht ein bestimmter
          wirtschaftlicher Erfolg.
        </p>
      </Section>

      <Section heading="12. Kündigung">
        <p>
          Einmalige Pakete (Spot-Fix, Full Audit) enden mit Leistungserbringung. Der
          Retainer kann von beiden Seiten jeweils zum Ende eines Monats mit
          14-tägiger Frist gekündigt werden, frühestens jedoch zum Ablauf der
          Mindestlaufzeit von 3 Monaten. Bereits geleistete Zahlungen für einen
          laufenden Monat sind nicht rückerstattbar, sofern der Retainer-Monat
          bereits begonnen hat.
        </p>
      </Section>

      <Section heading="13. Anwendbares Recht · Gerichtsstand">
        <p>
          Für diesen Vertrag gilt ausschliesslich Schweizer Recht unter Ausschluss
          des UN-Kaufrechts. Ausschliesslicher Gerichtsstand ist {IMPRESSUM.gerichtsstand}.
        </p>
      </Section>

      <Section heading="14. Salvatorische Klausel">
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt
          die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der
          unwirksamen Bestimmung gilt diejenige gesetzlich zulässige Regelung als
          vereinbart, die dem wirtschaftlichen Zweck am nächsten kommt.
        </p>
      </Section>
    </LegalShell>
  );
}
