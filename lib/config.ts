// ============================================================
// ZENTRALE KONFIGURATION — hier alle Platzhalter befüllen.
// ============================================================

// --- Calendly Discovery-Call ---
// SO AKTIVIERST DU DEN BUCHUNGS-BUTTON:
// 1. Calendly-Account anlegen (kostenloser Tier reicht), Event "Discovery-Call 30 Min".
// 2. Den Event-Link kopieren (Form: https://calendly.com/DEIN-NAME/discovery).
// 3. Hier unten ersetzen — fertig. Alle CTAs auf der Seite zeigen automatisch darauf.
export const CALENDLY_URL = "https://calendly.com/iwizard107/30min"; // LIVE Calendly Discovery-Call

// --- Stripe Payment-Links (LIVE, acct Id-wizard) ---
export const STRIPE_AUDIT_URL = "https://buy.stripe.com/7sY6oJfF45xJ4mwbVt77O00"; // ConvLab Audit 1.490 CHF
export const STRIPE_REANALYSE_URL = "https://buy.stripe.com/6oUaEZdwW1ht1ak1gP77O01"; // 30-Tage-Re-Analyse 290 CHF

// --- Social ---
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/eugen-schnellbach/"; // korrekt
export const LINKEDIN_POST_URL =
  "https://www.linkedin.com/feed/update/urn:li:share:7474492261112795136";

// --- Kontakt ---
// LIVE Email via ImprovMX (Forwarding zu iwizard107@gmail.com).
// Setup verifiziert 22.06.2026 — alle DNS-Records grün, Empfang aktiv.
export const SUPPORT_EMAIL = "support@convlab.ch";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const SITE_URL = "https://convlab.ch";

// --- Impressum / rechtliche Angaben ---
// PFLICHT in CH/DE. Platzhalter unten durch echte Daten ersetzen.
export const IMPRESSUM = {
  betreiber: "Eugen Schnellbach",
  bezeichnung: "handelnd unter der Bezeichnung ConvLab",
  rechtsform: "Einzelunternehmen in Gründung",
  cO: "c/o F2BII E-Commerce #895",
  strasse: "Hintergoldingerstrasse 30",
  plzOrt: "8638 Goldingen",
  region: "St. Gallen, Schweiz",
  land: "Schweiz",
  email: "support@convlab.ch", // LIVE seit 22.06.2026 via ImprovMX (Forwarding zu iwizard107@gmail.com)
  mwstPflichtig: false,
  gerichtsstand: "Goldingen, Kanton St. Gallen, Schweiz",
  uid: "", // optional: "CHE-123.456.789"
  telefon: "",
};
