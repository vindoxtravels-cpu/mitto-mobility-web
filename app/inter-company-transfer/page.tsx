"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  keyFeatures: string[];
  popular?: boolean;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  popular: boolean;
  avgProcessing: string;
  visaTypes: string[];
  requirements: string[];
}

export default function InterCompanyTransferPage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    employeeCount: "",
    transferType: "",
    targetCountry: "",
    timeline: "",
  });

  const countries: Country[] = [
    { 
      code: "US", 
      name: "United States", 
      flag: "🇺🇸", 
      popular: true, 
      avgProcessing: "2-6 months", 
      visaTypes: ["L-1A (Manager/Executive)", "L-1B (Specialized Knowledge)", "H-1B (Specialty Occupation)"],
      requirements: ["1 year employment with company", "Managerial position or specialized skills", "US entity relationship"]
    },
    { 
      code: "UK", 
      name: "United Kingdom", 
      flag: "🇬🇧", 
      popular: true, 
      avgProcessing: "3-8 weeks", 
      visaTypes: ["Senior or Specialist Worker Visa", "Global Business Mobility Visa", "Intra-company Transfer Visa"],
      requirements: ["Valid job offer", "Salary threshold (£42,400+)", "English proficiency"]
    },
    { 
      code: "CA", 
      name: "Canada", 
      flag: "🇨🇦", 
      popular: true, 
      avgProcessing: "4-12 weeks", 
      visaTypes: ["Intra-company Transfer Work Permit", "LMIA-exempt transfers", "Global Talent Stream"],
      requirements: ["Continuous employment", "Executive, senior manager, or specialist", "Canadian entity"]
    },
    { 
      code: "AU", 
      name: "Australia", 
      flag: "🇦🇺", 
      popular: true, 
      avgProcessing: "4-16 weeks", 
      visaTypes: ["TSS Visa (Subclass 482)", "Temporary Skill Shortage Visa", "Executive Stream"],
      requirements: ["2 years employment", "Skilled position", "Australian sponsor"]
    },
    { 
      code: "SG", 
      name: "Singapore", 
      flag: "🇸🇬", 
      popular: false, 
      avgProcessing: "3-6 weeks", 
      visaTypes: ["Employment Pass (P1/Q1)", "S Pass", "Personalised Employment Pass"],
      requirements: ["Job offer", "Minimum salary", "Qualifications and experience"]
    },
    { 
      code: "AE", 
      name: "UAE", 
      flag: "🇦🇪", 
      popular: true, 
      avgProcessing: "2-4 weeks", 
      visaTypes: ["Golden Visa", "Green Visa", "Work Permit (Free Zone)"],
      requirements: ["Company sponsorship", "Valid contract", "Educational qualifications"]
    },
    { 
      code: "DE", 
      name: "Germany", 
      flag: "🇩🇪", 
      popular: false, 
      avgProcessing: "8-12 weeks", 
      visaTypes: ["EU Blue Card", "ICT Card", "Work Permit for Specialists"],
      requirements: ["Job offer", "German entity", "Professional qualifications"]
    },
    { 
      code: "NL", 
      name: "Netherlands", 
      flag: "🇳🇱", 
      popular: false, 
      avgProcessing: "6-10 weeks", 
      visaTypes: ["Highly Skilled Migrant", "ICT Permit", "Startup Visa"],
      requirements: ["Employer recognition", "Salary threshold", "Dutch entity"]
    },
  ];

  const services: Service[] = [
    {
      id: "executive-transfer",
      title: "Executive & Manager Transfer",
      description: "Transfer senior executives and managers to international offices",
      duration: "2-6 months",
      keyFeatures: ["L-1A/Executive visa support", "Fast-track processing", "Family inclusion", "Multiple country expertise"],
      popular: true,
    },
    {
      id: "specialist-transfer",
      title: "Specialized Knowledge Transfer",
      description: "Move employees with unique skills and expertise to global locations",
      duration: "3-8 weeks",
      keyFeatures: ["L-1B/Specialist visa", "Skills assessment", "Technical role validation", "Knowledge transfer documentation"],
      popular: true,
    },
    {
      id: "global-talent",
      title: "Global Talent Stream",
      description: "Priority processing for high-demand talent and critical roles",
      duration: "2-4 weeks",
      keyFeatures: ["Priority processing", "LMIA-exempt pathways", "Dedicated case manager", "Expedited work permits"],
      popular: false,
    },
    {
      id: "project-based",
      title: "Project-Based Assignment",
      description: "Temporary transfers for specific projects and initiatives",
      duration: "1-3 months",
      keyFeatures: ["Short-term assignments", "Project-specific visas", "Cost-effective solutions", "Quick deployment"],
      popular: false,
    },
    {
      id: "graduate-transfer",
      title: "International Graduate Transfer",
      description: "Transfer recent graduates and trainees across global offices",
      duration: "4-8 weeks",
      keyFeatures: ["Trainee visa programs", "Career development", "Global mobility programs", "Talent pipeline building"],
      popular: false,
    },
    {
      id: "family-accompanied",
      title: "Family-Accompanied Transfer",
      description: "Complete support for employees relocating with families",
      duration: "6-12 weeks",
      keyFeatures: ["Dependent visas", "School admission support", "Spouse work permits", "Settlement assistance"],
      popular: false,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert("Thank you! Our B2B mobility consultant will contact you within 24 hours to discuss your inter-company transfer needs.");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--mitto-primary-50)] via-white to-[var(--mitto-gray-50)] py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mitto-primary-200)] bg-[var(--mitto-primary-50)] px-4 py-2 text-sm text-[var(--mitto-primary-700)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--mitto-primary-400)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--mitto-primary-500)]"></span>
              </span>
              B2B Corporate Mobility
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Inter-Company Transfer &
              <span className="block text-[var(--mitto-primary-600)]">Global Mobility</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              Seamless employee transfers across borders with expert visa processing, compliance management, and end-to-end support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule B2B Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/for-business"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                View All B2B Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-[var(--mitto-gray-200)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">500+</div>
              <div className="text-[var(--mitto-gray-600)]">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">10,000+</div>
              <div className="text-[var(--mitto-gray-600)]">Employee Transfers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">98%</div>
              <div className="text-[var(--mitto-gray-600)]">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Corporate Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Transfer Destinations
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Expert support for inter-company transfers to major business hubs worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country.code)}
                className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  selectedCountry === country.code
                    ? "border-[var(--mitto-primary-500)] bg-[var(--mitto-primary-50)]"
                    : "border-[var(--mitto-gray-200)] bg-white hover:border-[var(--mitto-primary-300)]"
                }`}
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="font-semibold text-[var(--mitto-gray-900)] mb-1">{country.name}</div>
                <div className="text-xs text-[var(--mitto-gray-600)] mb-3">Avg. processing: {country.avgProcessing}</div>
                <ul className="space-y-1">
                  {country.visaTypes.slice(0, 2).map((visa) => (
                    <li key={visa} className="text-xs text-[var(--mitto-gray-500)]">• {visa}</li>
                  ))}
                </ul>
                {country.popular && (
                  <span className="inline-block mt-2 px-2 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-xs rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>

          {selectedCountry && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--mitto-gray-200)]">
              {countries
                .filter((c) => c.code === selectedCountry)
                .map((c) => (
                  <div key={c.code}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{c.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Transfer to {c.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Visa types and requirements</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Available Visa Types</h4>
                        <ul className="space-y-2">
                          {c.visaTypes.map((visa) => (
                            <li key={visa} className="flex items-center gap-2 text-sm text-[var(--mitto-gray-600)]">
                              <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px]">✓</span>
                              {visa}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Key Requirements</h4>
                        <ul className="space-y-2">
                          {c.requirements.map((req) => (
                            <li key={req} className="flex items-center gap-2 text-sm text-[var(--mitto-gray-600)]">
                              <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px]">✓</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#consultation"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Get Transfer Consultation
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {selectedCountry && (
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedCountry("");
                  setSelectedService("");
                }}
                className="text-[var(--mitto-primary-600)] hover:text-[var(--mitto-primary-700)] font-medium"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Transfer Services
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Comprehensive solutions for all your inter-company transfer needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[var(--mitto-gray-900)]">{service.title}</h3>
                  {service.popular && (
                    <span className="px-3 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-sm rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[var(--mitto-gray-600)] mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Processing Time</span>
                    <span className="font-medium text-[var(--mitto-gray-900)]">{service.duration}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--mitto-gray-600)]">
                        <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#consultation"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Why Choose Mitto for Inter-Company Transfers?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              End-to-end corporate mobility solutions with compliance assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Processing",
                description: "Expedited visa processing with dedicated case managers",
              },
              {
                icon: "🛡️",
                title: "Compliance Assurance",
                description: "Full compliance with local immigration and labor laws",
              },
              {
                icon: "🌍",
                title: "Global Coverage",
                description: "Support for transfers to 50+ countries worldwide",
              },
              {
                icon: "👥",
                title: "Dedicated Support",
                description: "Single point of contact for all transfer needs",
              },
              {
                icon: "📊",
                title: "Mobility Dashboard",
                description: "Real-time tracking of all employee transfers",
              },
              {
                icon: "🏢",
                title: "Corporate Focus",
                description: "Tailored solutions for enterprise mobility needs",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Support",
                description: "Complete assistance for employee families",
              },
              {
                icon: "💼",
                title: "Business Continuity",
                description: "Minimal disruption to business operations",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--mitto-gray-600)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before → After: Inter-Company Transfer (Work Visa) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-6">
            Before → After: Inter-Company Transfer (Work Visa)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* US L-1A Executive Transfer */}
            <div className="rounded-2xl bg-white p-6 border border-[var(--mitto-gray-200)] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-[var(--mitto-gray-900)]">US L‑1A Executive Transfer</h4>
                <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center text-xs">↗</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 border border-red-100 p-4">
                  <div className="text-xs font-semibold text-red-700 mb-2">Before</div>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start gap-2"><span>•</span><span>Complex entity relationship documentation</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Long processing timelines with unclear milestones</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Dependent visas handled separately</span></li>
                  </ul>
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                  <div className="text-xs font-semibold text-emerald-700 mb-2">After</div>
                  <ul className="space-y-2 text-sm text-emerald-900">
                    <li className="flex items-start gap-2"><span>✓</span><span>Streamlined corporate documentation with templates</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Priority filing roadmap and milestone tracker</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Dependent processing bundled and sequenced</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["Time to file: −30%", "Approval confidence: +20%"].map((m) => (
                  <div key={m} className="text-xs px-3 py-2 rounded-lg bg-[var(--mitto-primary-50)] border border-[var(--mitto-primary-200)] text-[var(--mitto-primary-800)]">
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* UK Senior/Specialist Worker */}
            <div className="rounded-2xl bg-white p-6 border border-[var(--mitto-gray-200)] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-[var(--mitto-gray-900)]">UK Senior/Specialist Worker</h4>
                <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center text-xs">↗</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 border border-red-100 p-4">
                  <div className="text-xs font-semibold text-red-700 mb-2">Before</div>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start gap-2"><span>•</span><span>Salary threshold confusion (bands/allowances)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Sponsor license delays and documentation errors</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Manual case tracking and missed updates</span></li>
                  </ul>
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                  <div className="text-xs font-semibold text-emerald-700 mb-2">After</div>
                  <ul className="space-y-2 text-sm text-emerald-900">
                    <li className="flex items-start gap-2"><span>✓</span><span>Clear salary band validation and total comp mapping</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Sponsor license guidance with document checklists</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Mobility dashboard with live status and alerts</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["Compliance risk: −40%", "Processing speed: +35%"].map((m) => (
                  <div key={m} className="text-xs px-3 py-2 rounded-lg bg-[var(--mitto-primary-50)] border border-[var(--mitto-primary-200)] text-[var(--mitto-primary-800)]">
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Canada ICT Work Permit */}
            <div className="rounded-2xl bg-white p-6 border border-[var(--mitto-gray-200)] hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold text-[var(--mitto-gray-900)]">Canada ICT Work Permit</h4>
                <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center text-xs">↗</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-red-50 border border-red-100 p-4">
                  <div className="text-xs font-semibold text-red-700 mb-2">Before</div>
                  <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start gap-2"><span>•</span><span>LMIA requirements misunderstood for ICT (LMIA-exempt)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>Slow processing due to incomplete job descriptions</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span>No escalation or priority options considered</span></li>
                  </ul>
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                  <div className="text-xs font-semibold text-emerald-700 mb-2">After</div>
                  <ul className="space-y-2 text-sm text-emerald-900">
                    <li className="flex items-start gap-2"><span>✓</span><span>LMIA‑exempt ICT pathway with compliant evidence</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Role descriptions aligned to executive/specialist criteria</span></li>
                    <li className="flex items-start gap-2"><span>✓</span><span>Global Talent Stream/priority routing assessed where applicable</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["Docs turn-around: −50%", "Approval odds: +25%"].map((m) => (
                  <div key={m} className="text-xs px-3 py-2 rounded-lg bg-[var(--mitto-primary-50)] border border-[var(--mitto-primary-200)] text-[var(--mitto-primary-800)]">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Our Transfer Process
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Streamlined 6-step process for seamless employee transfers
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {[
              { step: "01", title: "Needs Assessment", description: "Evaluate transfer requirements" },
              { step: "02", title: "Strategy Planning", description: "Develop transfer strategy" },
              { step: "03", title: "Documentation", description: "Prepare all required documents" },
              { step: "04", title: "Visa Application", description: "Submit visa applications" },
              { step: "05", title: "Pre-Departure", description: "Prepare employee for relocation" },
              { step: "06", title: "Post-Arrival", description: "Support after arrival" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--mitto-primary-600)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{step.title}</h3>
                  <p className="text-[var(--mitto-gray-600)] text-sm">{step.description}</p>
                </div>
                {index < 5 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--mitto-primary-300)] to-[var(--mitto-primary-100)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Schedule B2B Consultation</h2>
              <p className="text-lg opacity-90">Get expert guidance for your inter-company transfer needs</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select industry</option>
                    <option value="technology" className="text-gray-900">Technology</option>
                    <option value="finance" className="text-gray-900">Finance & Banking</option>
                    <option value="healthcare" className="text-gray-900">Healthcare</option>
                    <option value="manufacturing" className="text-gray-900">Manufacturing</option>
                    <option value="consulting" className="text-gray-900">Consulting</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Employee Count</label>
                  <select
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select size</option>
                    <option value="1-50" className="text-gray-900">1-50 employees</option>
                    <option value="51-200" className="text-gray-900">51-200 employees</option>
                    <option value="201-1000" className="text-gray-900">201-1000 employees</option>
                    <option value="1000+" className="text-gray-900">1000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Transfer Type</label>
                  <select
                    name="transferType"
                    value={formData.transferType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select type</option>
                    <option value="executive" className="text-gray-900">Executive/Manager</option>
                    <option value="specialist" className="text-gray-900">Specialized Knowledge</option>
                    <option value="project" className="text-gray-900">Project-based</option>
                    <option value="trainee" className="text-gray-900">Trainee/Graduate</option>
                    <option value="multiple" className="text-gray-900">Multiple transfers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Target Country</label>
                  <select
                    name="targetCountry"
                    value={formData.targetCountry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select country</option>
                    {countries.map((c) => (
                      <option key={c.code} value={c.code} className="text-gray-900">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Expected Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select timeline</option>
                    <option value="urgent" className="text-gray-900">Urgent (within 1 month)</option>
                    <option value="soon" className="text-gray-900">Soon (1-3 months)</option>
                    <option value="planned" className="text-gray-900">Planned (3-6 months)</option>
                    <option value="exploring" className="text-gray-900">Just exploring options</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Corporate mobility experts</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Compliance Management</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Document Processing</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Mobility Dashboard</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Dedicated Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready to Transfer Your Talent Globally?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">Partner with Mitto for seamless inter-company transfers and global mobility solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/for-business" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              View All B2B Services
            </a>
            <a href="/login" className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              Access Corporate Portal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
