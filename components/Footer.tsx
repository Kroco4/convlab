import { LINKEDIN_PROFILE_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-accent text-xs font-bold text-white">
            CL
          </span>
          ConvLab
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="/impressum" className="hover:text-foreground">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-foreground">
            Datenschutz
          </a>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
        <p>© {new Date().getFullYear()} ConvLab · Eugen Schnellbach</p>
      </div>
    </footer>
  );
}
