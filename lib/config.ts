// ============================================================
// ZENTRALE KONFIGURATION — hier alle Platzhalter befuellen.
// ============================================================

// --- Calendly Discovery-Call ---
// SO AKTIVIERST DU DEN BUCHUNGS-BUTTON:
// 1. Calendly-Account anlegen (kostenloser Tier reicht), Event "Discovery-Call 30 Min".
// 2. Den Event-Link kopieren (Form: https://calendly.com/DEIN-NAME/discovery).
// 3. Hier unten ersetzen — fertig. Alle CTAs auf der Seite zeigen automatisch darauf.
export const CALENDLY_URL =
  "https://calendly.com/eugenschnellbach/convlab-discovery"; // <-- ERSETZEN

// --- Stripe Payment-Links (LIVE, acct Id-wizard) ---
export const STRIPE_AUDIT_URL = "https://buy.stripe.com/7sY6oJfF45xJ4mwbVt77O00"; // ConvLab Audit 1.490 CHF
export const STRIPE_REANALYSE_URL = "https://buy.stripe.com/6oUaEZdwW1ht1ak1gP77O01"; // 30-Tage-Re-Analyse 290 CHF

// --- Social ---
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/eugenschnellbach"; // <-- PRUEFEN
export const LINKEDIN_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:share:7474492261112795136";

export const SITE_URL = "https://convlab.ch";

// --- Impressum / rechtliche Angaben ---
// PFLICHT in CH/DE. Platzhalter unten durch echte Daten ersetzen.
export const IMPRESSUM = {
  betreiber: "Eugen Schnellbach",
  bezeichnung: "handelnd unter der Bezeichnung ConvLab",
  rechtsform: "Einzelunternehmen in Gruendung",
  cO: "c/o F2BII E-Commerce #895",
  strasse: "Hintergoldingerstrasse 30",
  plzOrt: "8638 Goldingen",
  region: "St. Gallen, Schweiz",
  land: "Schweiz",
  email: "hallo@id-wizard.com", // vorlaeufig (id-wizard-Adresse), spaeter ggf. eigene ConvLab-Mail
  mwstPflichtig: false,
  gerichtsstand: "Goldingen, Kanton St. Gallen, Schweiz",
  uid: "", // optional: "CHE-123.456.789"
  telefon: "",
};
