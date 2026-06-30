"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/config";

const NAV_LINKS = [
  { href: "/#process", label: "Prozess" },
  { href: "/#results", label: "Ergebnisse" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <Link
          href="/#top"
          className="group flex items-center gap-2.5 font-grotesk text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-mono text-sm font-bold text-background transition-transform group-hover:-translate-y-0.5">
            CL
          </span>
          <span>ConvLab</span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          Discovery-Call
        </a>
      </div>
    </header>
  );
}
