"use client";

import { useState } from "react";

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  requirements: string;
  popular?: boolean;
  tracks: string[];
  avgSalary: string;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  popular: boolean;
  avgProcessing: string;
  highlights: string[];
  routes: string[];
}

export default function WorkVisaPage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    experienceYears: "",
    occupation: "",
    targetCountry: "",
    englishLevel: "",
  });

  const countries: Country[] = [
    { code: "CA", name: "Canada", flag: "🇨🇦", popular: true, avgProcessing: "2-6 months", highlights: ["Express Entry", "LMIA jobs", "PR pathways"], routes: ["Express Entry (FSW)", "Provincial Nominee Programs", "LMIA-based Job Offer"] },
    { code: "AU", name: "Australia", flag: "🇦🇺", popular: true, avgProcessing: "2-7 months", highlights: ["Skilled worker", "State nomination", "PR options"], routes: ["Skilled Independent (189)", "Skilled Nominated (190)", "Employer Sponsored (482/186)"] },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", popular: true, avgProcessing: "3-8 weeks", highlights: ["Skilled Worker Visa", "Health & Care", "Global Talent"], routes: ["Skilled Worker Visa", "Health and Care Worker", "Global Talent"] },
    { code: "DE", name: "Germany", flag: "🇩🇪", popular: true, avgProcessing: "6-12 weeks", highlights: ["EU Blue Card", "Job Seeker", "Shortage list"], routes: ["EU Blue Card", "Job Seeker Visa", "Work Permit (Employer Sponsored)"] },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", popular: false, avgProcessing: "4-10 weeks", highlights: ["Accredited employer", "Green list jobs", "PR routes"], routes: ["Accredited Employer Work Visa", "Green List Straight to Residence", "Skilled Migrant Category"] },
    { code: "SG", name: "Singapore", flag: "🇸🇬", popular: false, avgProcessing: "3-8 weeks", highlights: ["Employment Pass", "S Pass", "Tech.Pass"], routes: ["Employment Pass (EP)", "S Pass", "Tech.Pass"] },
    { code: "AE", name: "UAE", flag: "🇦🇪", popular: true, avgProcessing: "1-3 weeks", highlights: ["Work permits", "Golden Visa", "Free zones"], routes: ["Standard Work Permit", "Golden Visa (Talent/Investor)", "Free Zone Employment"] },
  ];

  const programs: Program[] = [
    {
      id: "skilled-worker",
      title: "Skilled Worker Programs",
      description: "For professionals with in-demand skills across countries",
      duration: "Work visas vary by country",
      requirements: "Bachelor's degree or equivalent, relevant experience, English proficiency",
      popular: true,
      tracks: ["IT & Software", "Engineering", "Healthcare", "Finance", "Construction"],
      avgSalary: "$50,000-$120,000/year",
    },
    {
      id: "healthcare",
      title: "Healthcare & Nursing",
      description: "Priority routes for medical professionals and nurses",
      duration: "Fast-track in UK/Canada",
      requirements: "Registered license, experience, English tests (IELTS/OET)",
      popular: true,
      tracks: ["Nursing", "Doctors", "Allied Health", "Care Workers"],
      avgSalary: "$45,000-$100,000/year",
    },
    {
      id: "blue-card",
      title: "EU Blue Card",
      description: "High-skilled work visa for EU countries with strong salary thresholds",
      duration: "6-12 weeks",
      requirements: "Degree, job offer, salary threshold",
      popular: false,
      tracks: ["Software", "Engineering", "Data", "Research"],
      avgSalary: "€45,000-€85,000/year",
    },
    {
      id: "employer-sponsored",
      title: "Employer Sponsored",
      description: "Company-backed work permits with clear compliance steps",
      duration: "2-12 weeks",
      requirements: "Job offer, employer sponsorship/LMIA/accreditation",
      popular: true,
      tracks: ["All professions", "Corporate transfers", "Free zone roles"],
      avgSalary: "$40,000-$110,000/year",
    },
    {
      id: "job-seeker",
      title: "Job Seeker Visa",
      description: "Short-term visa to enter country and find a job locally",
      duration: "Up to 6 months (varies)",
      requirements: "Degree, funds, travel insurance",
      popular: false,
      tracks: ["Germany", "Portugal (varies)", "Other EU (varies)"],
      avgSalary: "Depends on final job",
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
    alert("Thanks! We will reach out with a tailored work-visa roadmap within 24 hours.");
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
              Work Visa & Global Employment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Work Abroad &
              <span className="block text-[var(--mitto-primary-600)]">Skilled Migration</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              End-to-end support for UK Skilled Worker, Canada Express Entry/LMIA, EU Blue Card, Australia TSS, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free Work-Visa Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                See Job-Ready Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Choose Your Target Country
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Explore skilled worker routes, employer sponsorships, and PR pathways
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
                  {country.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="text-xs text-[var(--mitto-gray-500)]">• {h}</li>
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
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Work in {c.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Routes, timelines, and requirements</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {c.routes.map((route) => (
                        <button
                          key={route}
                          onClick={() => setSelectedRoute(route)}
                          className={`text-left p-4 rounded-xl border transition-all hover:shadow-md ${
                            selectedRoute === route
                              ? "border-[var(--mitto-primary-500)] bg-[var(--mitto-primary-50)]"
                              : "border-[var(--mitto-gray-200)] bg-white hover:border-[var(--mitto-primary-300)]"
                          }`}
                        >
                          <div className="font-semibold text-[var(--mitto-gray-900)]">{route}</div>
                          <div className="text-xs text-[var(--mitto-gray-600)] mt-1">Click to view details</div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="/login"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Get Employer-Sponsored Options
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
                  setSelectedRoute("");
                }}
                className="text-[var(--mitto-primary-600)] hover:text-[var(--mitto-primary-700)] font-medium"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Program Types */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Work Visa Routes</h2>
            <p className="text-[var(--mitto-gray-600)]">Find the right path based on your profile</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[var(--mitto-gray-900)]">{program.title}</h3>
                  {program.popular && (
                    <span className="px-3 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-sm rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[var(--mitto-gray-600)] mb-6">{program.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Typical Timeline</span>
                    <span className="font-medium text-[var(--mitto-gray-900)]">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Requirements</span>
                    <span className="font-medium text-[var(--mitto-gray-900)] text-xs">{program.requirements}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Avg. Salary</span>
                    <span className="font-medium text-[var(--mitto-primary-600)] text-xs">{program.avgSalary}</span>
                  </div>
                </div>
                <a
                  href="/login"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Check Eligibility
                </a>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-2">Top Tracks:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.tracks.map((t) => (
                      <span key={t} className="text-xs bg-[var(--mitto-gray-100)] text-[var(--mitto-gray-600)] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Assessment Form */}
      <section id="assessment" className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Free Work-Visa Assessment</h2>
              <p className="text-lg opacity-90">Get a personalized roadmap to land a visa-aligned job abroad</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Enter your full name"
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
                  <label className="block text-sm font-medium mb-2">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="e.g., Indian"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience</label>
                  <input
                    type="number"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    required
                    min={0}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="e.g., Software Engineer"
                  />
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
                <div>
                  <label className="block text-sm font-medium mb-2">English Proficiency</label>
                  <select
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select proficiency</option>
                    <option value="beginner" className="text-gray-900">Beginner</option>
                    <option value="intermediate" className="text-gray-900">Intermediate</option>
                    <option value="advanced" className="text-gray-900">Advanced</option>
                    <option value="native" className="text-gray-900">Native/Fluent</option>
                    <option value="ielts-toefl" className="text-gray-900">Have IELTS/TOEFL/OET</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Free Assessment
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Expert guidance</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Resume Optimization</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">LinkedIn Enhancement</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Employer Network</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Visa Filing Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready to work abroad?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">We combine employer outreach with visa-compliant documentation and filing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              Explore Job-Assistance Plans
            </a>
            <a href="/for-individuals#work-form" className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              See Individual Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
