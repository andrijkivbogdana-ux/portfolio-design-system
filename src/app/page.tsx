import Link from "next/link";

const SURFACE_COLORS = [
  { name: "surface-base", class: "bg-surface-base" },
  { name: "surface-raised", class: "bg-surface-raised" },
  { name: "surface-overlay", class: "bg-surface-overlay" },
  { name: "surface-subtle", class: "bg-surface-subtle" },
];

const INK_COLORS = [
  { name: "ink-primary", class: "bg-ink-primary" },
  { name: "ink-secondary", class: "bg-ink-secondary" },
  { name: "ink-muted", class: "bg-ink-muted" },
  { name: "ink-inverse", class: "bg-ink-inverse" },
];

const BRAND_COLORS = [
  { name: "acid", class: "bg-acid" },
  { name: "acid-dim", class: "bg-acid-dim" },
  { name: "mist", class: "bg-mist" },
  { name: "mist-dim", class: "bg-mist-dim" },
];

const STATUS_COLORS = [
  { name: "success", class: "bg-success" },
  { name: "warning", class: "bg-warning" },
  { name: "error", class: "bg-error" },
];

export default function OverviewPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-wide mx-auto">
          <p className="text-xs font-body font-medium tracking-widest uppercase text-acid mb-4">
            DESIGN SYSTEM
          </p>
          <h1 className="font-display font-black text-6xl tracking-tightest text-ink-primary mb-4">
            Portfolio Review AI
          </h1>
          <p className="text-lg font-body text-ink-secondary mb-16 max-w-content">
            A living reference for every token, component, and pattern.
            Browse components, view variants, and copy code.
          </p>

          {/* Colors */}
          <section className="mb-20">
            <h2 className="font-display font-bold text-2xl tracking-tight text-ink-primary mb-8">
              Colors
            </h2>

            <div className="mb-8">
              <h3 className="text-sm font-body font-medium text-ink-primary mb-3">Surfaces</h3>
              <div className="grid grid-cols-4 gap-3">
                {SURFACE_COLORS.map((c) => (
                  <div key={c.name}>
                    <div className={`${c.class} h-16 rounded-xl border border-border`} />
                    <p className="text-xs font-mono text-ink-muted mt-2">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-body font-medium text-ink-primary mb-3">Ink</h3>
              <div className="grid grid-cols-4 gap-3">
                {INK_COLORS.map((c) => (
                  <div key={c.name}>
                    <div className={`${c.class} h-16 rounded-xl border border-border`} />
                    <p className="text-xs font-mono text-ink-muted mt-2">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-body font-medium text-ink-primary mb-3">Brand</h3>
              <div className="grid grid-cols-4 gap-3">
                {BRAND_COLORS.map((c) => (
                  <div key={c.name}>
                    <div className={`${c.class} h-16 rounded-xl`} />
                    <p className="text-xs font-mono text-ink-muted mt-2">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-body font-medium text-ink-primary mb-3">Status</h3>
              <div className="grid grid-cols-3 gap-3">
                {STATUS_COLORS.map((c) => (
                  <div key={c.name}>
                    <div className={`${c.class} h-16 rounded-xl`} />
                    <p className="text-xs font-mono text-ink-muted mt-2">{c.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="mb-20">
            <h2 className="font-display font-bold text-2xl tracking-tight text-ink-primary mb-8">
              Typography
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">font-display (Syne)</p>
                <p className="font-display font-black text-5xl tracking-tightest text-ink-primary">
                  Display Heading
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">font-display / h2</p>
                <p className="font-display font-bold text-3xl tracking-tight text-ink-primary">
                  Section Heading
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">font-body (Inter)</p>
                <p className="font-body text-base text-ink-primary">
                  Body text for paragraphs, labels, and descriptions. Clean and readable at any size.
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">font-body / small</p>
                <p className="font-body text-sm text-ink-secondary">
                  Secondary body text used for helper text, descriptions, and supplementary content.
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">font-mono (JetBrains Mono)</p>
                <p className="font-mono text-sm text-ink-secondary">
                  const score = calculatePortfolioScore(data);
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-ink-muted mb-2">Eyebrow</p>
                <p className="text-xs font-body font-medium tracking-widest uppercase text-acid">
                  SECTION LABEL
                </p>
              </div>
            </div>
          </section>

          {/* Spacing & Radius */}
          <section className="mb-20">
            <h2 className="font-display font-bold text-2xl tracking-tight text-ink-primary mb-8">
              Border Radius
            </h2>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="bg-surface-raised border border-border rounded-none h-20 w-full" />
                <p className="text-xs font-mono text-ink-muted mt-2">rounded-none (images)</p>
              </div>
              <div>
                <div className="bg-surface-raised border border-border rounded h-20 w-full" />
                <p className="text-xs font-mono text-ink-muted mt-2">rounded (buttons, inputs)</p>
              </div>
              <div>
                <div className="bg-surface-raised border border-border rounded-xl h-20 w-full" />
                <p className="text-xs font-mono text-ink-muted mt-2">rounded-xl (cards, modals)</p>
              </div>
              <div>
                <div className="bg-surface-raised border border-border rounded-full h-20 w-20" />
                <p className="text-xs font-mono text-ink-muted mt-2">rounded-full (badges, avatars)</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <Link
              href="/components/button"
              className="inline-flex items-center bg-acid text-ink-inverse font-body font-medium text-sm px-5 py-2.5 rounded hover:bg-acid-dim"
            >
              Browse Components
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
