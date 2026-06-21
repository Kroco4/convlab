import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="px-5 pb-20 pt-32 sm:pt-40">
        <div className="mx-auto w-full max-w-3xl">
          <Link href="/#top" className="text-sm font-semibold text-accent hover:underline">
            ← Zurueck zur Startseite
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">Stand: {updated}</p>
          <div className="legal mt-10 space-y-6 text-muted">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
