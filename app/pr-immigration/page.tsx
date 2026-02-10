"use client";

import { useState, useRef, useEffect } from "react";

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
  pointsSystem?: string;
}

export default function PRImmigrationPage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    experienceYears: "",
    maritalStatus: "",
    targetCountry: "",
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
      avgProcessing: "6-12 months", 
      highlights: ["Express Entry", "Provincial Nominee", "Family Sponsorship"], 
      routes: ["Express Entry (FSW/CEC/FST)", "Provincial Nominee Programs", "Family Class Sponsorship", "Quebec Skilled Worker"],
      pointsSystem: "Comprehensive Ranking System (CRS) - max 1200 points"
    },
    { 
      code: "AU", 
      name: "Australia", 
      flag: "🇦🇺", 
      popular: true, 
      avgProcessing: "6-18 months", 
      highlights: ["Skilled Migration", "State Nomination", "Family Stream"], 
      routes: ["Skilled Independent (189)", "Skilled Nominated (190)", "Skilled Work Regional (491)", "Partner Visa"],
      pointsSystem: "Points Test - max 100 points"
    },
    { 
      code: "NZ", 
      name: "New Zealand", 
      flag: "🇳🇿", 
      popular: true, 
      avgProcessing: "8-24 months", 
      highlights: ["Skilled Migrant", "Green List", "Family Category"], 
      routes: ["Skilled Migrant Category", "Green List Straight to Residence", "Family Category", "Investor Visa"],
      pointsSystem: "Points System - min 100 points required"
    },
    { 
      code: "UK", 
      name: "United Kingdom", 
      flag: "🇬🇧", 
      popular: false, 
      avgProcessing: "3-6 months", 
      highlights: ["Skilled Worker Route", "Global Talent", "Family Visa"], 
      routes: ["Skilled Worker (ILR after 5 years)", "Global Talent Visa", "Family Visa", "Innovator Founder"],
      pointsSystem: "No points system - job offer/salary based"
    },
    { 
      code: "DE", 
      name: "Germany", 
      flag: "🇩🇪", 
      popular: false, 
      avgProcessing: "4-12 months", 
      highlights: ["EU Blue Card", "Skilled Immigration", "Family Reunion"], 
      routes: ["EU Blue Card (PR after 21-33 months)", "Skilled Immigration Act", "Family Reunion Visa", "Permanent Residence"],
      pointsSystem: "No points system - qualification/experience based"
    },
    { 
      code: "SG", 
      name: "Singapore", 
      flag: "🇸🇬", 
      popular: false, 
      avgProcessing: "6-12 months", 
      highlights: ["PTS Scheme", "Global Investor", "Family Scheme"], 
      routes: ["Professional/Technical/Skilled (PTS)", "Global Investor Programme", "Family Scheme", "Permanent Residence"],
      pointsSystem: "Points-based evaluation system"
    },
    { 
      code: "AE", 
      name: "UAE", 
      flag: "🇦🇪", 
      popular: true, 
      avgProcessing: "2-8 weeks", 
      highlights: ["Golden Visa", "Green Visa", "Family Sponsorship"], 
      routes: ["Golden Visa (10-year residency)", "Green Visa (5-year residency)", "Family Sponsorship", "Investor Visa"],
      pointsSystem: "Investment/property/talent based - no points"
    },
  ];

  const programs: Program[] = [
    {
      id: "express-entry",
      title: "Express Entry System",
      description: "Points-based immigration for skilled workers to Canada",
      duration: "6 months processing",
      requirements: "Age, education, experience, language skills, adaptability",
      popular: true,
      tracks: ["Federal Skilled Worker", "Canadian Experience Class", "Federal Skilled Trades"],
      avgSalary: "$55,000-$95,000/year",
    },
    {
      id: "skilled-migration",
      title: "Skilled Migration",
      description: "Points-based skilled worker programs for Australia and NZ",
      duration: "6-18 months",
      requirements: "Skills assessment, points test, English proficiency",
      popular: true,
      tracks: ["Australia Subclass 189/190/491", "NZ Skilled Migrant", "State Nomination"],
      avgSalary: "$60,000-$100,000/year",
    },
    {
      id: "provincial-nominee",
      title: "Provincial Nominee",
      description: "Province-specific immigration with additional points",
      duration: "8-20 months",
      requirements: "Job offer or in-demand skills for specific province",
      popular: true,
      tracks: ["Ontario PNP", "BC PNP", "Alberta PNP", "Saskatchewan PNP"],
      avgSalary: "$50,000-$90,000/year",
    },
    {
      id: "family-sponsorship",
      title: "Family Sponsorship",
      description: "Sponsor your spouse, parents, or dependent children",
      duration: "12-24 months",
      requirements: "Canadian citizen/PR sponsor, relationship proof",
      popular: false,
      tracks: ["Spousal Sponsorship", "Parent Sponsorship", "Dependent Children"],
      avgSalary: "N/A - Family reunification",
    },
    {
      id: "investor-immigration",
      title: "Investor Immigration",
      description: "Residency through investment in business or property",
      duration: "3-12 months",
      requirements: "Minimum investment, business experience, net worth",
      popular: false,
      tracks: ["Start-up Visa", "Investor Program", "Golden Visa"],
      avgSalary: "Business income varies",
    },
    {
      id: "eu-blue-card",
      title: "EU Blue Card",
      description: "High-skilled work permit leading to EU permanent residency",
      duration: "6-12 weeks",
      requirements: "Degree, job offer, salary threshold",
      popular: false,
      tracks: ["Germany", "France", "Netherlands", "Other EU countries"],
      avgSalary: "€45,000-€85,000/year",
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
    alert("Thanks! We will reach out with a personalized PR roadmap within 24 hours.");
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
              Permanent Residency & Immigration
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Permanent Residency &
              <span className="block text-[var(--mitto-primary-600)]">Global Immigration</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              Expert guidance for Canada Express Entry, Australia Skilled Migration, New Zealand SMC, and global PR pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free PR Eligibility Check
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                Calculate PR Points
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
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">95%</div>
              <div className="text-[var(--mitto-gray-600)]">PR Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">7+</div>
              <div className="text-[var(--mitto-gray-600)]">PR Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">5,000+</div>
              <div className="text-[var(--mitto-gray-600)]">PR Applications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Immigration Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Choose Your PR Destination
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Explore permanent residency pathways, points systems, and requirements
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
            <div ref={detailsRef} className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--mitto-gray-200)]">
              {countries
                .filter((c) => c.code === selectedCountry)
                .map((c) => (
                  <div key={c.code}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{c.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">PR in {c.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Pathways, timelines, and points system</p>
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

                    {c.pointsSystem && (
                      <div className="bg-[var(--mitto-primary-50)] rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-[var(--mitto-primary-900)] mb-2">Points System</h4>
                        <p className="text-sm text-[var(--mitto-primary-700)]">{c.pointsSystem}</p>
                      </div>
                    )}

                    <div className="mt-6">
                      <a
                        href="/login"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Calculate Your PR Points
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
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">PR Immigration Programs</h2>
            <p className="text-[var(--mitto-gray-600)]">Find the right pathway based on your profile</p>
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
                    <span className="text-[var(--mitto-gray-500)]">Processing Time</span>
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

      {/* Benefits Section */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Why Choose Mitto for PR & Immigration?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Comprehensive support for your permanent residency journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📊",
                title: "Points Optimization",
                description: "Maximize your CRS/points score with strategic guidance",
              },
              {
                icon: "📋",
                title: "Documentation Support",
                description: "Complete document preparation and verification",
              },
              {
                icon: "🎯",
                title: "Profile Enhancement",
                description: "Improve language scores, education, and experience",
              },
              {
                icon: "⚡",
                title: "Fast Processing",
                description: "Priority submission and application tracking",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Sponsorship",
                description: "Bring your family with expert sponsorship guidance",
              },
              {
                icon: "💼",
                title: "Job Search Support",
                description: "Employer connections and job search assistance",
              },
              {
                icon: "🏛️",
                title: "Legal Compliance",
                description: "Ensure all requirements are met for success",
              },
              {
                icon: "🌍",
                title: "Multiple Countries",
                description: "Expertise in Canada, Australia, NZ, UK, and more",
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

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Your PR Journey
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Simple 5-step process to permanent residency
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Profile Assessment", description: "Evaluate your eligibility and points" },
              { step: "02", title: "Points Optimization", description: "Improve your score with our guidance" },
              { step: "03", title: "Document Preparation", description: "Complete all required documentation" },
              { step: "04", title: "Application Submission", description: "Submit with expert review" },
              { step: "05", title: "PR Approval", description: "Receive your permanent residency" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--mitto-primary-600)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{step.title}</h3>
                  <p className="text-[var(--mitto-gray-600)] text-sm">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--mitto-primary-300)] to-[var(--mitto-primary-100)]"></div>
                )}
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
              <h2 className="text-4xl font-bold mb-4">Free PR Eligibility Assessment</h2>
              <p className="text-lg opacity-90">Get your personalized PR roadmap and points analysis</p>
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
                    min={18}
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
                    <option value="" className="text-gray-900">Select education</option>
                    <option value="high-school" className="text-gray-900">High School</option>
                    <option value="diploma" className="text-gray-900">Diploma</option>
                    <option value="bachelors" className="text-gray-900">Bachelor's Degree</option>
                    <option value="masters" className="text-gray-900">Master's Degree</option>
                    <option value="phd" className="text-gray-900">PhD or higher</option>
                  </select>
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
                    placeholder="Years of work experience"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Marital Status</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select status</option>
                    <option value="single" className="text-gray-900">Single</option>
                    <option value="married" className="text-gray-900">Married</option>
                    <option value="common-law" className="text-gray-900">Common-law</option>
                    <option value="divorced" className="text-gray-900">Divorced</option>
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
                  <label className="block text-sm font-medium mb-2">English Proficiency</label>
                  <select
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select proficiency</option>
                    <option value="beginner" className="text-gray-900">Beginner (IELTS 4-5)</option>
                    <option value="intermediate" className="text-gray-900">Intermediate (IELTS 5-6)</option>
                    <option value="competent" className="text-gray-900">Competent (IELTS 6-7)</option>
                    <option value="proficient" className="text-gray-900">Proficient (IELTS 7-8)</option>
                    <option value="expert" className="text-gray-900">Expert (IELTS 8-9)</option>
                    <option value="have-scores" className="text-gray-900">Have recent IELTS/CELPIP scores</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Free PR Assessment
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Expert immigration guidance</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">CRS Points Calculator</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Document Checklist</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Profile Enhancement</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Application Tracking</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready for Permanent Residency?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">Start your journey to a new country with expert guidance and support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              Start PR Application
            </a>
            <a href="/for-individuals#pr-form" className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              See Individual Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
