import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-glow": "var(--accent-glow)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        border: "var(--border)",
        "diff-plus": "var(--diff-plus)",
        "diff-minus": "var(--diff-minus)",
        "mono-bg": "var(--mono-bg)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        "accent-glow":
          "0 0 0 1px var(--accent-soft), 0 20px 60px -20px var(--accent-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
