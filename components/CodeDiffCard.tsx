// Pure-CSS Code-Diff visualisation for the Hero card.
// No JS, no syntax highlighter — just semantic markup + tailwind.
// Each line carries a +/- marker, a colorised left border accent, and
// monospace styling that mirrors what a developer sees in their PR view.

interface DiffLine {
  type: "context" | "minus" | "plus";
  text: string;
}

const DIFF: DiffLine[] = [
  { type: "context", text: "// app/success/page.tsx" },
  { type: "context", text: "useEffect(() => {" },
  { type: "minus",   text: "  if (sessionId) trackPurchase()" },
  { type: "plus",    text: "  if (sessionId && !fired.current) {" },
  { type: "plus",    text: "    trackPurchase()" },
  { type: "plus",    text: "    fired.current = true" },
  { type: "plus",    text: "  }" },
  { type: "context", text: "}, [sessionId])" },
];

function MarkerColumn({ type }: { type: DiffLine["type"] }) {
  if (type === "plus") {
    return <span className="text-diff-plus" aria-hidden>+</span>;
  }
  if (type === "minus") {
    return <span className="text-diff-minus" aria-hidden>−</span>;
  }
  return <span aria-hidden> </span>;
}

export default function CodeDiffCard() {
  return (
    <div
      className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-border bg-mono-bg shadow-accent-glow"
      role="img"
      aria-label="Code-Diff: Tracking-Bugfix mit Conversion-Uplift"
    >
      {/* Card header — traffic-light dots + file path label */}
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <span className="font-mono text-[11px] text-muted">
          conv-audit · PR #14
        </span>
      </div>

      {/* Diff body */}
      <div className="py-3">
        {DIFF.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "plus"
                ? "diff-line bg-diff-plus/[0.08] text-foreground"
                : line.type === "minus"
                  ? "diff-line bg-diff-minus/[0.08] text-foreground"
                  : "diff-line text-muted"
            }
          >
            <span className="text-right font-mono text-[11px] text-muted/60">
              {i + 1}
            </span>
            <MarkerColumn type={line.type} />
            <span className="whitespace-pre">{line.text}</span>
          </div>
        ))}
      </div>

      {/* Footer — outcome stat */}
      <div className="border-t border-border bg-surface-elevated px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {"// result"}
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-muted">Tracking</span>
            <span className="font-mono text-muted">0%</span>
            <span className="text-accent" aria-hidden>→</span>
            <span className="font-mono text-accent">100%</span>
          </div>
        </div>
        <div className="mt-1.5 text-[12px] text-muted">
          +CHF 4.99 pro Session jetzt sichtbar in Google Ads
        </div>
      </div>
    </div>
  );
}
