"use client";

import { useEffect, useRef, useState } from "react";

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

export default function StudyVisaPage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    preferredCountry: "",
    intake: "",
    englishLevel: "",
  });

  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedCountry && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCountry]);

  const countries: Country[] = [
    {
      code: "CA",
      name: "Canada",
      flag: "🇨🇦",
      popular: true,
      avgProcessing: "4-12 weeks",
      highlights: ["Study Permit", "Co-op options", "Post-study work permit"],
      routes: ["Study Permit (SDS/Non-SDS)", "Co-op Work Permit (if applicable)", "PGWP (Post Graduation Work Permit)"],
    },
    {
      code: "AU",
      name: "Australia",
      flag: "🇦🇺",
      popular: true,
      avgProcessing: "4-10 weeks",
      highlights: ["Subclass 500", "GTE/GS support", "Work while studying"],
      routes: ["Student Visa (Subclass 500)", "Guardian Visa (Subclass 590)", "Temporary Graduate (485)"],
    },
    {
      code: "UK",
      name: "United Kingdom",
      flag: "🇬🇧",
      popular: true,
      avgProcessing: "3-6 weeks",
      highlights: ["Student Route", "CAS support", "Graduate route"],
      routes: ["Student Visa (Student Route)", "Child Student Visa", "Graduate Route (Post-study)"],
    },
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      popular: true,
      avgProcessing: "2-8 weeks",
      highlights: ["F-1 Visa", "I-20 & SEVIS", "OPT/STEM OPT"],
      routes: ["F-1 Student Visa", "J-1 Exchange Visitor (if applicable)", "OPT / STEM OPT (post-study)"],
    },
    {
      code: "DE",
      name: "Germany",
      flag: "🇩🇪",
      popular: true,
      avgProcessing: "6-12 weeks",
      highlights: ["Student Visa", "Blocked account", "18-month job search"],
      routes: ["Student Visa (National D Visa)", "Residence Permit for Study", "Job-Seeker after studies (18 months)"],
    },
    {
      code: "NL",
      name: "Netherlands",
      flag: "🇳🇱",
      popular: false,
      avgProcessing: "4-8 weeks",
      highlights: ["MVV/Residence", "English programs", "Orientation year"],
      routes: ["MVV + Residence Permit (via university)", "Orientation Year (Search year)"],
    },
    {
      code: "IE",
      name: "Ireland",
      flag: "🇮🇪",
      popular: false,
      avgProcessing: "4-8 weeks",
      highlights: ["Irish Study Visa", "Stamp 2", "Graduate permission"],
      routes: ["Long Stay D Study Visa", "Stamp 2 (permission to study)", "Third Level Graduate Programme"],
    },
  ];

  const programs: Program[] = [
    {
      id: "bachelors",
      title: "Bachelor’s Programs",
      description: "Undergraduate degrees with strong career outcomes and internship options.",
      duration: "3–4 years",
      requirements: "High school completion, English test scores, academics as per university",
      popular: true,
      tracks: ["Computer Science", "Business", "Engineering", "Healthcare", "Design"],
      avgSalary: "$40,000–$70,000/year",
    },
    {
      id: "masters",
      title: "Master’s Programs",
      description: "Specialize, upskill, and align your profile for global jobs and PR pathways.",
      duration: "1–2 years",
      requirements: "Bachelor’s degree, SOP/LOR, English test scores, optional GRE/GMAT",
      popular: true,
      tracks: ["Data/AI", "Management", "Cybersecurity", "Finance", "Public Health"],
      avgSalary: "$60,000–$110,000/year",
    },
    {
      id: "diploma",
      title: "Diploma / Certificate",
      description: "Job-focused programs that can be faster to complete and more budget-friendly.",
      duration: "6 months–2 years",
      requirements: "Minimum education, English proficiency, course prerequisites",
      popular: true,
      tracks: ["Hospitality", "Trades", "Business Analytics", "Caregiving", "IT Support"],
      avgSalary: "$30,000–$55,000/year",
    },
    {
      id: "phd",
      title: "PhD / Research",
      description: "Research-track programs for academic and R&D-focused careers.",
      duration: "3–5 years",
      requirements: "Strong academics, research proposal, publications (preferred), funding fit",
      popular: false,
      tracks: ["STEM Research", "Economics", "Biotech", "AI Research", "Engineering"],
      avgSalary: "$70,000–$140,000/year",
    },
    {
      id: "mba",
      title: "MBA",
      description: "Leadership and management pathways with strong network and placement support.",
      duration: "1–2 years",
      requirements: "Bachelor’s + work experience, GMAT (often), SOP/LOR",
      popular: false,
      tracks: ["Consulting", "Product", "Finance", "Strategy", "Operations"],
      avgSalary: "$85,000–$160,000/year",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert("Thank you! Our education advisor will contact you within 24 hours with your study-visa roadmap.");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--mitto-primary-50)] via-white to-[var(--mitto-gray-50)] py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mitto-primary-200)] bg-[var(--mitto-primary-50)] px-4 py-2 text-sm text-[var(--mitto-primary-700)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--mitto-primary-400)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--mitto-primary-500)]" />
              </span>
              Study Visa & Global Education
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Study Abroad &
              <span className="block text-[var(--mitto-primary-600)]">Student Visa Support</span>
            </h1>

            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              University shortlisting, SOP/LOR, visa filing, finances, and post‑study planning — across top destinations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free Study‑Visa Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                Download University Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-[var(--mitto-gray-200)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { k: "98%", v: "Visa Success Rate" },
              { k: "500+", v: "University Partners" },
              { k: "10,000+", v: "Students Supported" },
              { k: "24/7", v: "Student Helpdesk" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">{s.k}</div>
                <div className="text-[var(--mitto-gray-600)]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Choose Your Destination</h2>
            <p className="text-[var(--mitto-gray-600)]">Explore student visa routes, timelines, and key requirements.</p>
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
                    <li key={h} className="text-xs text-[var(--mitto-gray-500)]">
                      • {h}
                    </li>
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
            <div ref={detailsRef} className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--mitto-gray-200)]">
              {countries
                .filter((c) => c.code === selectedCountry)
                .map((c) => (
                  <div key={c.code}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{c.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Study in {c.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Routes, timelines, and requirements</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
                        href="#assessment"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Get a Study‑Visa Roadmap
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

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Program Types</h2>
            <p className="text-[var(--mitto-gray-600)]">Pick the right academic route aligned to your visa and career goals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-8 hover:shadow-xl transition-shadow"
              >
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
                    <span className="text-[var(--mitto-gray-500)]">Duration</span>
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
                  href="#assessment"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Check Eligibility
                </a>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-2">Popular Tracks:</h4>
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

      {/* Benefits */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Why Choose Mitto for Study Visa?</h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">Structured documentation, compliant filing, and advisor-led execution.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "University Shortlisting", description: "Course-country fit based on profile, budget, and outcomes." },
              { icon: "✍️", title: "SOP/LOR Support", description: "Clear story, strong positioning, and multiple edits." },
              { icon: "🛂", title: "Visa Filing", description: "Checklists, risk reduction, and complete submission support." },
              { icon: "💳", title: "Finance & GIC", description: "Loan guidance, proof-of-funds, and fee workflows." },
              { icon: "📅", title: "Intake Planning", description: "Deadlines, back-up options, and timeline ownership." },
              { icon: "🏠", title: "Pre‑Departure", description: "Flights, insurance, housing guidance, and onboarding." },
              { icon: "🧭", title: "Post‑Study Path", description: "Work permits and PR strategy planning where applicable." },
              { icon: "📞", title: "Advisor Support", description: "Dedicated assistance across the application lifecycle." },
            ].map((b) => (
              <div key={b.title} className="text-center">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{b.title}</h3>
                <p className="text-[var(--mitto-gray-600)]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Your Study‑Visa Journey</h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">A simple 6-step process from profile to visa grant.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {[
              { step: "01", title: "Profile Review", description: "Assess eligibility, budget, and timeline." },
              { step: "02", title: "Shortlisting", description: "Universities and program mapping." },
              { step: "03", title: "Documents", description: "SOP/LOR + financial and academic checklist." },
              { step: "04", title: "Applications", description: "Submit and track offers." },
              { step: "05", title: "Visa Filing", description: "Complete submission + biometrics." },
              { step: "06", title: "Departure", description: "Pre-departure + settlement guidance." },
            ].map((s, idx) => (
              <div key={s.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--mitto-primary-600)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{s.title}</h3>
                  <p className="text-[var(--mitto-gray-600)] text-sm">{s.description}</p>
                </div>

                {idx < 5 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--mitto-primary-300)] to-[var(--mitto-primary-100)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment" className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Free Study‑Visa Assessment</h2>
              <p className="text-lg opacity-90">Get a personalized roadmap for intake, universities, and visa filing.</p>
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
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min={16}
                    max={55}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Your age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Highest Education</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">
                      Select education
                    </option>
                    <option value="high-school" className="text-gray-900">
                      High School
                    </option>
                    <option value="diploma" className="text-gray-900">
                      Diploma / Certificate
                    </option>
                    <option value="bachelors" className="text-gray-900">
                      Bachelor’s Degree
                    </option>
                    <option value="masters" className="text-gray-900">
                      Master’s Degree
                    </option>
                    <option value="phd" className="text-gray-900">
                      PhD / Research
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Country</label>
                  <select
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">
                      Select country
                    </option>
                    {countries.map((c) => (
                      <option key={c.code} value={c.code} className="text-gray-900">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Intake</label>
                  <select
                    name="intake"
                    value={formData.intake}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">
                      Select intake
                    </option>
                    <option value="jan" className="text-gray-900">
                      Jan / Winter
                    </option>
                    <option value="may" className="text-gray-900">
                      May / Summer
                    </option>
                    <option value="sep" className="text-gray-900">
                      Sep / Fall
                    </option>
                    <option value="not-sure" className="text-gray-900">
                      Not sure yet
                    </option>
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
                    <option value="" className="text-gray-900">
                      Select proficiency
                    </option>
                    <option value="beginner" className="text-gray-900">
                      Beginner
                    </option>
                    <option value="intermediate" className="text-gray-900">
                      Intermediate
                    </option>
                    <option value="advanced" className="text-gray-900">
                      Advanced
                    </option>
                    <option value="have-ielts" className="text-gray-900">
                      Have IELTS/TOEFL/PTE
                    </option>
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
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Advisor-led guidance</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">University Shortlisting</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">SOP/LOR Review</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Visa Checklist</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Finance Guidance</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready to start your study abroad journey?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">We align universities, finances, and visa filing into one structured plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
            >
              Get My Study Roadmap
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
