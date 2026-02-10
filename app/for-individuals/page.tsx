"use client";

import { useState } from "react";
import StickyNav from "../components/StickyNav";

export default function ForIndividuals() {
  const [activeTab, setActiveTab] = useState<"tourist" | "study" | "work" | "pr" | "sports">("tourist");

  return (
    <main className="min-h-screen theme-nuvie">
      <StickyNav />
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--mitto-primary-50)] to-[var(--mitto-primary-100)]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--mitto-primary-200)] blur-3xl opacity-70" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[color:var(--mitto-accent-200)] blur-3xl opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--mitto-gray-900)]">
              Your Global Journey Starts Here.
            </h1>
            <p className="mt-4 text-lg text-[var(--mitto-gray-700)] max-w-3xl mx-auto">
              AI-powered profile evaluation, visa compatibility engine, and personalized roadmaps for your international mobility goals.
            </p>
            {/* Sub-Headline */}
            <p className="mt-3 text-base font-semibold text-[var(--mitto-gray-800)]">
              Visa, Work Permits, PR, Mobility & Cross-Border Hiring—Handled End-to-End.
            </p>
            {/* Trust Elements */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
              {[
                "Zero Cost",
                "Zero Spam",
                "Get Expert Guidance",
                "End-to-End Assistance",
                "Digital + Human Support",
              ].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 text-[var(--mitto-gray-800)]">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "End-to-End Assistance",
                "Global Network",
                "12 Countries",
                "Worktech + Human Experts",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-[var(--mitto-primary-200)] bg-[var(--mitto-primary-50)] px-3 py-1 text-xs font-medium text-[var(--mitto-primary-700)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profile-evaluation" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--mitto-gray-900)]">Profile Evaluation</h2>
          <p className="mt-2 text-slate-600">
            Get a comprehensive assessment of your profile and discover your global mobility options.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[var(--mitto-gray-200)] bg-[var(--mitto-gray-50)] p-4">
              <h3 className="font-medium text-slate-900">Free Profile Check</h3>
              <p className="mt-1 text-sm text-slate-600">Comprehensive analysis of your qualifications and experience</p>
            </div>
            <div className="rounded-xl border border-[var(--mitto-gray-200)] bg-[var(--mitto-gray-50)] p-4">
              <h3 className="font-medium text-slate-900">Job Readiness Score</h3>
              <p className="mt-1 text-sm text-slate-600">AI-powered assessment of your employability abroad</p>
            </div>
            <div className="rounded-xl border border-[var(--mitto-gray-200)] bg-[var(--mitto-gray-50)] p-4">
              <h3 className="font-medium text-slate-900">Visa Compatibility Engine</h3>
              <p className="mt-1 text-sm text-slate-600">Match your profile with the right visa options</p>
            </div>
          </div>
          <div className="mt-6">
            <a href="#evaluation-form" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
              Start Your Evaluation
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">B2C Services</h2>
        
        <div className="mt-8 border-b border-slate-200">
          <nav className="flex gap-8 overflow-x-auto">
            {[
              { id: "tourist", label: "Tourist Visa" },
              { id: "study", label: "Study Abroad" },
              { id: "work", label: "Work Visa" },
              { id: "pr", label: "PR" },
              { id: "sports", label: "Sports & Medical" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-[var(--mitto-primary-600)] text-[var(--mitto-primary-700)]"
                    : "border-transparent text-[var(--mitto-gray-500)] hover:text-[var(--mitto-gray-700)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === "tourist" && (
            <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Tourist Visa</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Fast Processing</h4>
                      <p className="text-sm text-slate-600">Quick visa application processing with expert guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Documentation</h4>
                      <p className="text-sm text-slate-600">Complete document preparation and verification</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Embassy Appointments</h4>
                      <p className="text-sm text-slate-600">Priority appointment scheduling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Insurance + Forex</h4>
                      <p className="text-sm text-slate-600">Travel insurance and currency exchange services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong className="text-[var(--mitto-primary-700)]">Need financing?</strong> <span className="text-[var(--mitto-primary-600)]">Check zero-cost EMI options</span> for your visa application.
                </p>
              </div>
              <div className="mt-6">
                <a href="/tourist-visa" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
                  Apply for Tourist Visa
                </a>
              </div>
            </div>
          )}

          {activeTab === "study" && (
            <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Study Abroad</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Country Counseling</h4>
                      <p className="text-sm text-slate-600">Canada, Australia, UK, EU - expert guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">SOP Assistance</h4>
                      <p className="text-sm text-slate-600">Professional statement of purpose writing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Visa Filing</h4>
                      <p className="text-sm text-slate-600">Complete visa application support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Study-to-Work Transition</h4>
                      <p className="text-sm text-slate-600">Post-graduation work permit roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong className="text-[var(--mitto-primary-700)]">Education loans available!</strong> <span className="text-[var(--mitto-primary-600)]">Get financing for tuition, GIC, and living expenses.</span>
                </p>
              </div>
              <div className="mt-6">
                <a href="#study-form" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
                  Start Study Abroad Journey
                </a>
              </div>
            </div>
          )}

          {activeTab === "work" && (
            <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Work Visa</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Job-Targeted Resume</h4>
                      <p className="text-sm text-slate-600">AI-optimized resume for international jobs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Portal Application Support</h4>
                      <p className="text-sm text-slate-600">Expert help with job portal applications</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">LinkedIn Optimization</h4>
                      <p className="text-sm text-slate-600">Profile enhancement for global recruiters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Employer Connections</h4>
                      <p className="text-sm text-slate-600">Partner network for job opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong className="text-[var(--mitto-primary-700)]">Financing available!</strong> <span className="text-[var(--mitto-primary-600)]">Zero-cost EMIs</span> for work visa processing.
                </p>
              </div>
              <div className="mt-6">
                <a href="#work-form" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
                  Get Work Visa Support
                </a>
              </div>
            </div>
          )}

          {activeTab === "pr" && (
            <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">PR (Canada, Australia)</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">CRS Evaluation</h4>
                      <p className="text-sm text-slate-600">Comprehensive points calculation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Province Selection</h4>
                      <p className="text-sm text-slate-600">Strategic provincial nomination guidance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Documentation & Translations</h4>
                      <p className="text-sm text-slate-600">Professional document preparation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">End-to-End Application</h4>
                      <p className="text-sm text-slate-600">Complete PR process management</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong className="text-[var(--mitto-primary-700)]">PR financing available!</strong> Spread your PR application costs with <span className="text-[var(--mitto-primary-600)]">EMIs</span>.
                </p>
              </div>
              <div className="mt-6">
                <a href="/pr-immigration" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
                  Start PR Application
                </a>
              </div>
            </div>
          )}

          {activeTab === "sports" && (
            <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Sports Tourism & Medical Tourism</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Hospital Tie-ups</h4>
                      <p className="text-sm text-slate-600">Partner network of accredited hospitals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Sports Club Connections</h4>
                      <p className="text-sm text-slate-600">Federations and club partnerships</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">End-to-End Itinerary</h4>
                      <p className="text-sm text-slate-600">Complete travel and treatment planning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
                    <div>
                      <h4 className="font-medium text-slate-900">Visa Support</h4>
                      <p className="text-sm text-slate-600">Medical and sports visa assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong className="text-[var(--mitto-primary-700)]">Medical financing available!</strong> Coverage for <span className="text-[var(--mitto-primary-600)]">treatment and travel costs</span>.
                </p>
              </div>
              <div className="mt-6">
                <a href="/sports-medical-tourism" className="inline-flex items-center rounded-md px-5 py-3 brand-btn">
                  Explore Sports & Medical Tourism
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="evaluation-form" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl gradient-card p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Start Your Free Profile Evaluation</h3>
          <p className="mt-2 text-slate-600 text-readable">
            Get personalized recommendations for your global mobility journey.
          </p>
          <form
            className="mt-6 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This is a demo UI. No data collected.");
            }}
          >
            {/* ... existing inputs ... */}
            <div className="md:col-span-2">
              <button type="submit" className="btn-fluid inline-flex rounded-md px-5 py-3 brand-btn sm:w-auto">
                <span className="text-[var(--mitto-accent-200)]">Start Free Evaluation</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
