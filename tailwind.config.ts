import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: {
          DEFAULT: "rgb(var(--color-acid) / <alpha-value>)",
          dim: "rgb(var(--color-acid-dim) / <alpha-value>)",
        },
        mist: {
          DEFAULT: "rgb(var(--color-mist) / <alpha-value>)",
          dim: "rgb(var(--color-mist-dim) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
          dim: "rgb(var(--color-error-dim) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          dim: "rgb(var(--color-success-dim) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          dim: "rgb(var(--color-warning-dim) / <alpha-value>)",
        },
        surface: {
          base: "rgb(var(--color-surface-base) / <alpha-value>)",
          raised: "rgb(var(--color-surface-raised) / <alpha-value>)",
          overlay: "rgb(var(--color-surface-overlay) / <alpha-value>)",
          subtle: "rgb(var(--color-surface-subtle) / <alpha-value>)",
        },
        ink: {
          primary: "rgb(var(--color-ink-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-ink-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          inverse: "rgb(var(--color-ink-inverse) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          strong: "rgb(var(--color-border-strong) / <alpha-value>)",
          accent: "rgb(var(--color-border-accent) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        wide: "1080px",
        content: "720px",
      },
      transitionDuration: {
        fast: "150ms",
        DEFAULT: "300ms",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
