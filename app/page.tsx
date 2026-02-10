"use client";

import Link from "next/link";
import React, { useEffect, useId, useState } from "react"; // Added React import for types
import LeadCaptureForm from "./components/LeadCaptureForm";
import TestimonialsSlider, { type Testimonial } from "./components/TestimonialsSlider";

type ServiceShortcut = {
  title: string;
  desc: string;
  href: string;
  tag?: "B2C" | "B2B" | "Platform" | "Finance";
  icon: string;
  cta: string;
};

function CheckItem({ title, desc }: { title: string; desc: string }): JSX.Element {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full bg-[var(--mitto-primary-600)] text-white text-xs">
        ✓
      </span>
      <div>
        <p className="font-semibold text-[var(--mitto-gray-900)]">{title}</p>
        <p className="mt-0.5 text-sm text-[var(--mitto-gray-600)]">{desc}</p>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "soft" | "violet";
  children: React.ReactNode;
}): JSX.Element {
  const toneClass =
    tone === "violet" 
      ? "bg-violet-section atlys-highlight" 
      : tone === "soft" 
        ? "bg-[var(--mitto-gray-50)]" 
        : "";

  return (
    <section id={id} className={`${toneClass} ${tone === "violet" ? "relative overflow-hidden" : ""} a-fade-up`}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--mitto-primary-50)] px-3 py-1 text-xs font-bold text-[var(--mitto-primary-700)] uppercase tracking-wider mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--mitto-gray-900)] leading-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base md:text-lg text-[var(--mitto-gray-600)] leading-relaxed">{subtitle}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="relative flex flex-col items-center text-center md:items-start md:text-left group">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft border border-[var(--mitto-gray-100)] text-xl font-bold text-[var(--mitto-primary-700)] group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[var(--mitto-gray-900)]">{title}</h3>
      <p className="mt-3 text-sm text-[var(--mitto-gray-600)] leading-relaxed">{desc}</p>
    </div>
  );
}

function RoadmapModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): JSX.Element | null {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Scroll container */}
      <div className="relative mx-auto flex h-full w-full items-start justify-center overflow-y-auto px-4 py-6">
        <div
          className="w-full max-w-3xl"
          // Prevent scroll chaining on mobile
          style={{ overscrollBehavior: "contain" }}
        >
          {/* Scrollable modal card */}
          <div className="atlys-card atlys-sheen shadow-soft relative max-h-[calc(100vh-3rem)] overflow-y-auto p-6 md:p-8">
            <button
              type="button"
              onClick={onClose}
              className="sticky top-0 ml-auto -mr-2 -mt-2 mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--mitto-gray-200)] bg-white text-[var(--mitto-gray-700)] hover:bg-[var(--mitto-gray-50)]"
              aria-label="Close"
            >
              ×
            </button>

            <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Get My Free Roadmap</p>
            <h3 id={titleId} className="mt-2 text-xl md:text-2xl font-semibold text-[var(--mitto-gray-900)]">
              Share your details — we'll create a customized plan.
            </h3>
            <p className="mt-2 text-sm text-[var(--mitto-gray-600)]">Zero spam. Clear milestones. Advisor-led execution.</p>

            <div className="mt-6">
              <LeadCaptureForm ctaLabel="Get My Free Roadmap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage(): JSX.Element {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  useEffect(() => {
    if (!isRoadmapOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isRoadmapOpen]);

  const trustedCompanies: string[] = [
    "Google",
    "Amazon",
    "Microsoft",
    "Meta",
    "Apple",
    "Netflix",
    "Tesla",
    "Adobe",
    "Oracle",
    "IBM",
    "Deloitte",
    "PwC",
    "EY",
    "KPMG",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
  ];

  const services: ServiceShortcut[] = [
    {
      icon: "✈️",
      title: "Tourist Visa",
      desc: "Documentation, scheduling, translations — multi-country coverage",
      href: "/tourist-visa",
      tag: "B2C",
      cta: "Apply for Tourist Visa →",
    },
    {
      icon: "🎓",
      title: "Study Visa",
      desc: "Universities, SOP/LOR support, Study → Work → PR pipeline",
      href: "/study-visa",
      tag: "B2C",
      cta: "Start Study Journey →",
    },
    {
      icon: "💼",
      title: "Work Visa",
      desc: "Skilled worker routes, job-ready documentation, employer connections",
      href: "/work-visa",
      tag: "B2C",
      cta: "Check Work Visa Eligibility →",
    },
    {
      icon: "🧭",
      title: "PR & Immigration",
      desc: "Canada, Australia, UK pathways — CRS & points evaluation",
      href: "/pr-immigration",
      tag: "B2C",
      cta: "Start PR Evaluation →",
    },
    {
      icon: "🏢",
      title: "Inter-Company Transfer",
      desc: "B2B corporate mobility with compliance & documentation",
      href: "/inter-company-transfer",
      tag: "B2B",
      cta: "Request B2B Proposal →",
    },
    {
      icon: "🧠",
      title: "AI Job Assistance",
      desc: "AI-optimized resume, LinkedIn optimization, job-apply automation",
      href: "/job-assistance",
      tag: "Platform",
      cta: "Build My Job Strategy →",
    },
    {
      icon: "🧳",
      title: "Tour Packages (DMC)",
      desc: "End-to-end tourism operations worldwide",
      href: "/tour-packages",
      tag: "B2C",
      cta: "Explore Packages →",
    },
    {
      icon: "🏟️",
      title: "Sports Tourism",
      desc: "Event packages, athlete visas, sporting event logistics",
      href: "/sports-medical-tourism",
      tag: "B2C",
      cta: "View Sports Packages →",
    },
    {
      icon: "🏥",
      title: "Medical Tourism",
      desc: "Hospital coordination, medical visas, end-to-end care",
      href: "/sports-medical-tourism",
      tag: "B2C",
      cta: "Get Medical Support →",
    },
    {
      icon: "💳",
      title: "Financial Solutions",
      desc: "Education loans, travel insurance, forex cards, remittance support",
      href: "/for-individuals",
      tag: "Finance",
      cta: "Compare Financial Options →",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "Mitto Mobility made my Australia PR journey seamless. From points calculation to final visa grant, they handled everything professionally. Highly recommended!",
      name: "Priya Sharma",
      role: "Australia PR Client",
      location: "India → Australia",
    },
    {
      quote:
        "The team's expertise in Canadian immigration is unmatched. They guided me through every step and my PR was approved in just 6 months.",
      name: "Rahul Mehta",
      role: "Canada Express Entry",
      location: "India → Canada",
    },
    {
      quote:
        "For our inter-company transfers across 5 countries, Mitto's corporate mobility platform has been invaluable. Real-time tracking and compliance made easy.",
      name: "Global Tech Solutions",
      role: "B2B Client",
      location: "Multi-country deployment",
    },
  ];

  return (
    <main className="theme-atlys min-h-screen bg-[var(--mitto-bg)]">
      <RoadmapModal open={isRoadmapOpen} onClose={() => setIsRoadmapOpen(false)} />

      {/* HERO (clean: single primary CTA) */}
      <section className="relative overflow-hidden atlys-highlight">
        <div className="absolute inset-0 -z-10">
          <div className="atlys-blob absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-[color:var(--mitto-primary-100)] blur-3xl opacity-60" />
          <div className="atlys-blob blob-2 absolute -bottom-28 -left-24 h-[600px] w-[600px] rounded-full bg-[color:var(--mitto-accent-100)] blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-2 atlys-chip shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--mitto-primary-600)]" />
                <p className="text-xs font-semibold text-[var(--mitto-gray-800)]">
                  Mitto Mobility — <span className="text-[var(--mitto-primary-700)]">Mobility Powerhouse</span>
                </p>
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-[var(--mitto-gray-900)] leading-[1.05]">
                Global Mobility. Structured. Compliant. Human.
              </h1>

              <p className="mt-4 text-base md:text-lg text-[var(--mitto-gray-600)] max-w-2xl">
                For individuals and companies navigating visas, jobs, and cross-border movement with certainty.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsRoadmapOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 brand-btn"
                >
                  Get My Free Roadmap
                </button>

                <a href="#services" className="text-sm font-semibold text-[var(--mitto-primary-700)] hover:underline">
                  Explore services →
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["End-to-End Assistance", "Global Network", "12 Countries", "Worktech + Human Experts"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full border border-[var(--mitto-gray-200)] bg-[var(--mitto-gray-50)] px-3 py-1.5 text-xs font-semibold text-[var(--mitto-gray-700)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right (no extra CTA) */}
            <div className="lg:col-span-5">
              <div className="atlys-card atlys-sheen shadow-soft p-6 md:p-8">
                <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">What you'll get in the roadmap</p>
                <div className="mt-4 grid gap-4">
                  <CheckItem title="Eligibility snapshot" desc="Quick viability check for your destination and route." />
                  <CheckItem title="Document checklist" desc="Exact documents to prepare (and common pitfalls)." />
                  <CheckItem title="Timeline & next steps" desc="Milestones you can follow with clarity." />
                  <CheckItem title="Routing to the right expert" desc="B2C or B2B specialist based on your requirement." />
                </div>
                <p className="mt-6 text-xs text-[var(--mitto-gray-500)]">
                  Tip: Use "Get My Free Roadmap" to open the form (scrollable popup).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY (scrolling marquee like the referenced site) */}
      <section aria-label="Trusted by professionals" className="bg-white border-y border-[var(--mitto-gray-100)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm font-semibold text-[var(--mitto-gray-700)]">
            Trusted by professionals working at
          </p>

          <div
            className="mt-6 overflow-hidden scrollbar-hide [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <div className="flex w-max animate-scroll-x items-center gap-3">
              {[...trustedCompanies, ...trustedCompanies].map((name, idx) => (
                <div key={`${name}-${idx}`} className="atlys-card px-5 py-3 shadow-soft" aria-label={name} title={name}>
                  <span className="whitespace-nowrap text-sm font-semibold text-[var(--mitto-gray-800)]">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="Our Expertise"
        title="One platform. Infinite possibilities."
        subtitle="From student visas to corporate relocation, we've built a ecosystem that handles the complexity for you."
        tone="violet"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} href={s.href}>
              <div className="atlys-card atlys-sheen p-6 shadow-soft group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl border border-[var(--mitto-gray-200)] bg-white/70 grid place-items-center text-xl">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-[var(--mitto-gray-900)]">{s.title}</p>
                      <p className="mt-2 text-sm text-[var(--mitto-gray-600)]">{s.desc}</p>
                    </div>
                  </div>

                  {/* removed B2C/B2B tag badge */}
                </div>

                <div className="mt-5 text-sm font-semibold text-[var(--mitto-primary-700)] group-hover:underline">
                  {s.cta}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PROCESS SECTION (New) */}
      <Section
        id="process"
        eyebrow="How it works"
        title="Your journey, simplified."
        subtitle="We've distilled years of mobility expertise into a 4-step process that guarantees results."
      >
        <div className="grid gap-12 md:grid-cols-4">
          <ProcessStep 
            number="01" 
            title="Free Roadmap" 
            desc="Share your goals and get a customized eligibility report and document checklist." 
          />
          <ProcessStep 
            number="02" 
            title="Expert Match" 
            desc="Get paired with a dedicated mobility consultant who specializes in your specific route." 
          />
          <ProcessStep 
            number="03" 
            title="Digital Filing" 
            desc="Upload documents to our secure vault. We handle translations, legal checks, and submission." 
          />
          <ProcessStep 
            number="04" 
            title="Landing Support" 
            desc="From visa grant to local orientation, we ensure you're settled and compliant." 
          />
        </div>
      </Section>

      {/* B2C vs B2B SPLIT (after Services) */}
      <section aria-label="Individuals vs Companies" className="bg-[var(--mitto-bg)]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Individuals */}
            <div className="atlys-card atlys-sheen shadow-soft p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Individuals</p>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--mitto-gray-900)]">
                    Move abroad with clarity.
                  </h3>
                </div>
                {/* removed B2C badge */}
              </div>

              <p className="mt-3 text-sm md:text-base text-[var(--mitto-gray-600)]">
                Study • Work • PR • Tourist • Jobs Abroad
              </p>

              <div className="mt-6">
                <Link href="/for-individuals" className="inline-flex items-center justify-center rounded-xl px-6 py-3 brand-btn">
                  Explore Individual Mobility
                </Link>
              </div>
            </div>

            {/* Companies */}
            <div className="atlys-card atlys-sheen shadow-soft p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Companies</p>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--mitto-gray-900)]">
                    Deploy talent across borders.
                  </h3>
                </div>
                {/* removed B2B badge */}
              </div>

              <p className="mt-3 text-sm md:text-base text-[var(--mitto-gray-600)]">
                Employee Relocation • Corporate Visas • Global Mobility
              </p>

              <div className="mt-6">
                <Link href="/for-business" className="inline-flex items-center justify-center rounded-xl px-6 py-3 brand-btn">
                  Explore Corporate Mobility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <Section
        id="why"
        eyebrow="Why Mitto Mobility?"
        title="We combine global reach with local expertise."
        subtitle="Mobility solutions that work — for individuals and businesses."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Turnkey Solutions",
              d: "End-to-end ownership of your mobility journey. From initial consultation to final landing, we handle every detail so you can focus on what matters.",
            },
            {
              t: "Local Expertise, Global Strength",
              d: "Presence across 12 countries and 4 continents. Our on-ground teams understand local regulations while our global network opens doors worldwide.",
            },
            {
              t: "Human + Digital Edge",
              d: "Experienced experts supported by secure digital workflows. The best of human judgment and technological efficiency combined.",
            },
          ].map((x) => (
            <div key={x.t} className="atlys-card atlys-sheen p-6 shadow-soft">
              <p className="text-lg font-semibold text-[var(--mitto-gray-900)]">{x.t}</p>
              <p className="mt-2 text-sm text-[var(--mitto-gray-600)]">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MODEL */}
      <Section
        id="model"
        eyebrow="The Mitto Mobility Model"
        title="A competitive framework that powers seamless mobility."
        subtitle="Human expertise + digital support + turnkey execution."
        tone="violet"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="atlys-card atlys-sheen p-6 shadow-soft">
            <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Human Expertise</p>
            <div className="mt-4 grid gap-3">
              <CheckItem title="Visa specialists" desc="Route selection, checklists, and risk reduction." />
              <CheckItem title="Immigration lawyers" desc="High-level legal guidance and compliance interpretation." />
              <CheckItem title="Mobility consultants" desc="Strategy sessions and milestone ownership." />
            </div>
          </div>

          <div className="atlys-card atlys-sheen p-6 shadow-soft">
            <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Digital Support</p>
            <div className="mt-4 grid gap-3">
              <CheckItem title="Document vault" desc="Centralized, secure storage and sharing." />
              <CheckItem title="Profile evaluation engine" desc="Eligibility-first screening and gap detection." />
              <CheckItem title="Job-apply automation" desc="Execution workflows for applications at scale." />
              <CheckItem title="Mobility status tracking" desc="Milestones and next steps visibility." />
            </div>
          </div>

          <div className="atlys-card atlys-sheen p-6 shadow-soft">
            <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Turnkey Execution</p>
            <div className="mt-4 grid gap-3">
              <CheckItem title="End-to-end coverage" desc="From evaluation to submission and follow-ups." />
              <CheckItem title="Legal translation" desc="Translation and notarization guidance." />
              <CheckItem title="HR + compliance" desc="Corporate mobility with audit-ready workflows." />
              <CheckItem title="Financial tie-ups" desc="Loans, forex, insurance, remittance support." />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { k: "97%", v: "Customer Satisfaction" },
            { k: "15,000+", v: "Profiles Evaluated" },
            { k: "12", v: "Countries Presence" },
            { k: "4", v: "Continents Reach" },
          ].map((m) => (
            <div key={m.v} className="atlys-card atlys-sheen p-6 shadow-soft text-center">
              <p className="text-3xl font-semibold text-[var(--mitto-gray-900)]">{m.k}</p>
              <p className="mt-1 text-sm text-[var(--mitto-gray-600)]">{m.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS + CASE STUDY */}
      <Section
        id="trusted"
        eyebrow="Trusted by Thousands"
        title="Real stories from people who moved with confidence."
        subtitle="Individuals and businesses across visas, PR, and corporate mobility."
      >
        <TestimonialsSlider testimonials={testimonials} />

        <div className="mt-8 atlys-card atlys-sheen p-6 md:p-8 shadow-soft">
          <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Case Study</p>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--mitto-gray-900)]">
            How we enabled a smooth Australia PR for an IT professional
          </h3>
          <p className="mt-2 text-sm text-[var(--mitto-gray-600)] max-w-3xl">
            From initial assessment to landing in Melbourne — a complete success story in 8 months.
          </p>
          <div className="mt-5">
            <Link href="/pr-immigration" className="inline-flex items-center rounded-xl px-5 py-3 brand-btn">
              Read Case Study
            </Link>
          </div>
        </div>
      </Section>

      {/* ENTERPRISE SOLUTIONS */}
      <Section
        id="enterprise"
        eyebrow="Enterprise Solutions"
        title="Global Mobility for Agile Teams"
        subtitle="For companies deploying talent across borders. Scale your workforce with confidence—our solutions handle compliance, documentation, and logistics."
        tone="violet"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Complete visa & work permit processing",
            "Local compliance in 12+ countries",
            "Real-time mobility tracking dashboard",
          ].map((x) => (
            <div
              key={x}
              className="rounded-2xl border border-[var(--mitto-gray-200)] bg-white/70 px-5 py-4 text-sm font-semibold text-[var(--mitto-gray-800)]"
            >
              {x}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/for-business" className="inline-flex items-center rounded-xl px-5 py-3 brand-btn">
            Request Corporate Proposal
          </Link>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section
        id="resources"
        eyebrow="Resources & Tools"
        title="Guides, calculators, and insights to plan better."
        subtitle="Free resources to help you make the right mobility decisions."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "PR Points Calculator", d: "Check your eligibility score for Canada, Australia & more", href: "/pr-immigration" },
            { t: "Job-Ready Resume Templates", d: "ATS-optimized templates for international job markets", href: "/job-assistance" },
            { t: "Visa Country Comparison", d: "Compare work visa requirements across top destinations", href: "/countries" },
            { t: "Study Abroad Cost Calculator", d: "Estimate your total expenses for studying abroad", href: "/for-individuals" },
          ].map((x) => (
            <Link key={x.t} href={x.href}>
              <div className="atlys-card atlys-sheen p-6 shadow-soft group">
                <p className="font-semibold text-[var(--mitto-gray-900)]">{x.t}</p>
                <p className="mt-2 text-sm text-[var(--mitto-gray-600)]">{x.d}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--mitto-primary-700)] group-hover:underline">Open →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section
        id="pricing"
        eyebrow="Transparent Pricing"
        title="Clear, upfront pricing with no hidden fees."
        subtitle="Start with a free consultation — upgrade only when you're ready."
      >
        <div className="atlys-card atlys-sheen p-6 md:p-8 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-[var(--mitto-gray-900)]">Want exact pricing for your case?</p>
              <p className="mt-1 text-sm text-[var(--mitto-gray-600)]">Open the roadmap form and we'll share a transparent quote.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsRoadmapOpen(true)}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 brand-btn"
            >
              Get My Free Roadmap
            </button>
          </div>
        </div>
      </Section>

      {/* LEAD CAPTURE (before footer) */}
      <Section
        id="roadmap"
        eyebrow="Get Your Personalized Mobility Roadmap"
        title="Share your details — our experts will create a customized plan."
        subtitle="Prefer not to use the popup? Fill it here."
        tone="violet"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="atlys-card atlys-sheen p-6 md:p-8 shadow-soft">
              <LeadCaptureForm ctaLabel="Get My Free Roadmap" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="atlys-card atlys-sheen p-6 md:p-8 shadow-soft">
              <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">What happens next</p>
              <div className="mt-4 grid gap-4">
                <CheckItem title="We review your profile" desc="Basic eligibility + route selection." />
                <CheckItem title="We share a checklist" desc="Clear document list and timeline." />
                <CheckItem title="We propose next steps" desc="Execution plan + quote (if needed)." />
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsRoadmapOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 brand-outline"
                >
                  Open popup form
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
