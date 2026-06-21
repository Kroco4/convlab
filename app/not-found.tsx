import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CALENDLY_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seite nicht gefunden — ConvLab",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center px-5 pt-32 sm:pt-40">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Fehler 404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Diese Seite gibt es nicht.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Der Link ist tot oder die Seite wurde verschoben — die Art von Bug,
            die ich in deinem Funnel finde.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Zur Startseite
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Discovery-Call buchen →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
