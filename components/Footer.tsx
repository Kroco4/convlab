import Link from "next/link";
import { LINKEDIN_PROFILE_URL, SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 px-5 py-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5 font-grotesk text-base font-bold text-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent font-mono text-[12px] font-bold text-background">
            CL
          </span>
          ConvLab
        </div>

        <nav
          aria-label="Footer-Navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-[0.10em]"
        >
          <a
            href={SUPPORT_MAILTO}
            className="transition-colors hover:text-foreground"
            aria-label={`E-Mail an ${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </a>
          <Link
            href="/impressum"
            className="transition-colors hover:text-foreground"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-foreground"
          >
            Datenschutz
          </Link>
          <Link
            href="/agb"
            className="transition-colors hover:text-foreground"
          >
            AGB
          </Link>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
          © {new Date().getFullYear()} · Made in CH
        </p>
      </div>
    </footer>
  );
}
