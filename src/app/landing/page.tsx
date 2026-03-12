"use client";

import { useRef, useState, useEffect } from "react";
import {
  Upload,
  Sparkles,
  BarChart3,
  MessageSquare,
  Check,
  Menu,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/Button";
import { MagneticButton } from "@/components/MagneticButton";
import { TextReveal } from "@/components/TextReveal";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { Score } from "@/components/Score";
import { Divider } from "@/components/Divider";
import { Avatar } from "@/components/Avatar";
import { Drawer } from "@/components/Drawer";
import { HeroCanvas } from "@/components/HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

/* ─── 1. Navigation Bar ─── */
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3 });
  }, []);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-30 bg-surface-base/90 backdrop-blur-md border-b border-border opacity-0"
      >
        <div className="max-w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-wide mx-auto flex items-center justify-between h-14">
            <span className="font-display font-bold text-sm tracking-tight text-ink-primary">
              Portfolio Review
            </span>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => scrollTo("how-it-works")}>
                How It Works
              </Button>
              <Button variant="primary" size="sm" onClick={() => scrollTo("hero-section")}>
                Get Your Review
              </Button>
            </div>
            <button
              className="md:hidden text-ink-primary"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Menu">
        <div className="flex flex-col gap-4 mt-4">
          <Button variant="ghost" onClick={() => scrollTo("how-it-works")} className="justify-start">
            How It Works
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("testimonials")} className="justify-start">
            Testimonials
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("pricing")} className="justify-start">
            Pricing
          </Button>
          <Divider className="my-2" />
          <Button variant="primary" onClick={() => scrollTo("hero-section")}>
            Get Your Review
          </Button>
        </div>
      </Drawer>
    </>
  );
}

/* ─── 2. Hero ─── */
function Hero() {
  return (
    <section id="hero-section" className="min-h-screen flex items-center relative pt-14">
      <HeroCanvas />
      <div className="relative z-10 max-w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-wide mx-auto">
          <TextReveal delay={0}>
            <p className="text-xs font-body font-medium tracking-widest uppercase text-acid mb-6">
              AI PORTFOLIO REVIEW
            </p>
          </TextReveal>

          <TextReveal delay={0.05}>
            <h1 className="font-display font-black text-5xl md:text-8xl tracking-tightest text-ink-primary">
              Your portfolio,
            </h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="font-display font-black text-5xl md:text-8xl tracking-tightest text-ink-primary mb-6">
              reviewed by AI.
            </h1>
          </TextReveal>

          <TextReveal delay={0.15}>
            <p className="text-lg md:text-xl text-ink-secondary max-w-content mb-10">
              Upload your design portfolio and get structured, actionable feedback
              on layout, hierarchy, storytelling, and presentation — in seconds.
            </p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton variant="primary" size="lg">
                Get Your Review
              </MagneticButton>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See how it works
              </Button>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. Trust Strip ─── */
function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll("span"),
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }
    );
  }, []);

  const companies = ["Google", "Figma", "Spotify", "Airbnb", "Stripe", "Notion"];

  return (
    <div ref={ref} className="py-8 border-y border-border">
      <div className="max-w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-wide mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <span className="text-xs text-ink-muted tracking-widest uppercase opacity-0">
            Trusted by designers from
          </span>
          {companies.map((name) => (
            <span
              key={name}
              className="text-xs text-ink-muted tracking-widest uppercase opacity-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 4. How It Works ─── */
function HowItWorks() {
  const cards = [
    { icon: Upload, title: "Upload", desc: "Drop your portfolio — PDF, images, or a link. We handle the rest." },
    { icon: Sparkles, title: "Analyze", desc: "Our AI examines every page for layout, hierarchy, and storytelling." },
    { icon: BarChart3, title: "Score", desc: "Get a structured score breakdown across key design dimensions." },
    { icon: MessageSquare, title: "Improve", desc: "Receive actionable, specific feedback to strengthen your portfolio." },
  ];

  return (
    <Section id="how-it-works" eyebrow="HOW IT WORKS" heading="Four steps to a stronger portfolio.">
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return <RevealCard key={card.title} delay={i * 0.1} variant="interactive" icon={Icon} title={card.title} desc={card.desc} />;
        })}
      </div>
    </Section>
  );
}

function RevealCard({
  delay,
  variant,
  icon: Icon,
  title,
  desc,
}: {
  delay: number;
  variant: "interactive" | "default";
  icon: typeof Upload;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { delay });

  return (
    <div ref={ref}>
      <Card variant={variant}>
        <Icon className="w-5 h-5 text-acid mb-4" />
        <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-ink-secondary">{desc}</p>
      </Card>
    </div>
  );
}

/* ─── 5. Sample Review Preview ─── */
function SampleReview() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  useReveal(leftRef);
  useReveal(rightRef, { delay: 0.15 });

  const features = [
    "Page-by-page analysis",
    "Visual hierarchy scoring",
    "Typography audit",
    "Storytelling assessment",
    "Actionable next steps",
  ];

  return (
    <Section eyebrow="SEE IT IN ACTION" heading="What your review looks like.">
      <div className="grid md:grid-cols-5 gap-8">
        <div ref={leftRef} className="md:col-span-3 space-y-4">
          <Card variant="featured">
            <div className="flex items-center gap-6 mb-4">
              <Score value={7.8} max={10} variant="ring" label="Overall" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="acid">Layout</Badge>
                <Badge variant="mist">Typography</Badge>
                <Badge variant="muted">Hierarchy</Badge>
              </div>
            </div>
          </Card>
          <Card>
            <Score variant="bar" value={8} max={10} label="Visual Hierarchy" className="mb-3" />
            <p className="text-sm text-ink-secondary">
              Strong use of scale contrast between headings and body text. Consider increasing whitespace between sections.
            </p>
          </Card>
          <Card>
            <Score variant="bar" value={6} max={10} label="Storytelling Flow" className="mb-3" />
            <p className="text-sm text-ink-secondary">
              The project narrative starts strong but loses momentum in the middle. Add a clear problem-solution arc.
            </p>
          </Card>
        </div>

        <div ref={rightRef} className="md:col-span-2">
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">
              What&apos;s included
            </h3>
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-sm text-ink-secondary">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── 6. Testimonials ─── */
function Testimonials() {
  const testimonials = [
    {
      quote: "I uploaded my portfolio at 2am and had actionable feedback before my morning coffee. The hierarchy scoring alone was worth it.",
      name: "Maya Chen",
      role: "Product Designer",
      fallback: "MC",
    },
    {
      quote: "The AI caught layout inconsistencies I'd been blind to for months. It felt like having a senior designer review my work — without the awkwardness.",
      name: "Alex Rivera",
      role: "UI Designer",
      fallback: "AR",
    },
    {
      quote: "I used the feedback to restructure my case studies and got three interview callbacks the same week. The storytelling suggestions were spot on.",
      name: "Jordan Lee",
      role: "UX Designer",
      fallback: "JL",
    },
  ];

  return (
    <Section id="testimonials" eyebrow="WHAT DESIGNERS SAY" heading="Real feedback on real feedback.">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  fallback,
  delay,
}: {
  quote: string;
  name: string;
  role: string;
  fallback: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { delay });

  return (
    <div ref={ref}>
      <Card>
        <p className="text-sm text-ink-secondary italic mb-4">&ldquo;{quote}&rdquo;</p>
        <Divider className="mb-4" />
        <div className="flex items-center gap-3">
          <Avatar size="sm" fallback={fallback} />
          <div>
            <p className="text-sm font-body font-medium text-ink-primary">{name}</p>
            <p className="text-xs font-body text-ink-muted">{role}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ─── 7. Pricing ─── */
function Pricing() {
  const cardRef = useRef<HTMLDivElement>(null);
  useReveal(cardRef);

  const features = [
    "Full portfolio analysis",
    "Page-by-page scoring",
    "Typography & layout audit",
    "Storytelling assessment",
    "Actionable improvement list",
    "Export as PDF",
  ];

  return (
    <Section id="pricing" eyebrow="PRICING" heading="Start for free." narrow>
      <div className="flex justify-center">
        <div ref={cardRef} className="w-full max-w-sm">
          <Card variant="featured">
            <div className="text-center mb-6">
              <span className="font-display font-bold text-4xl text-ink-primary">Free</span>
              <p className="text-sm text-ink-muted mt-1">for your first review</p>
            </div>

            <Divider label="INCLUDES" className="mb-6" />

            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-ink-secondary">{f}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full">
              Get Your Free Review
            </Button>
          </Card>

          <p className="text-xs text-ink-muted text-center mt-4">
            No account required. Your portfolio is never stored.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ─── 8. Final CTA ─── */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <Section narrow className="text-center">
      <div ref={ref}>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink-primary mb-4">
          Ready to level up?
        </h2>
        <p className="text-ink-secondary text-lg mb-8">
          Get your portfolio reviewed in under a minute.
        </p>
        <MagneticButton variant="primary" size="lg">
          Review My Portfolio
        </MagneticButton>
      </div>
    </Section>
  );
}

/* ─── 9. Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-wide mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            Portfolio Review Tool — Built for designers.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-ink-muted">2026</span>
            <span className="text-xs text-ink-muted hover:text-ink-secondary cursor-pointer">Privacy</span>
            <span className="text-xs text-ink-muted hover:text-ink-secondary cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <SampleReview />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
