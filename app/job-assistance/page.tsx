"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  keyFeatures: string[];
  popular?: boolean;
  price?: string;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  popular: boolean;
  avgJobSearch: string;
  inDemandJobs: string[];
  avgSalary: string;
}

export default function JobAssistancePage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    experienceYears: "",
    targetRole: "",
    targetCountry: "",
    education: "",
    englishLevel: "",
  });

  const countries: Country[] = [
    { 
      code: "CA", 
      name: "Canada", 
      flag: "🇨🇦", 
      popular: true, 
      avgJobSearch: "2-4 months", 
      inDemandJobs: ["Software Developer", "Nurse", "Accountant", "Engineer", "Data Analyst"],
      avgSalary: "$55,000-$85,000/year"
    },
    { 
      code: "AU", 
      name: "Australia", 
      flag: "🇦🇺", 
      popular: true, 
      avgJobSearch: "3-6 months", 
      inDemandJobs: ["IT Professional", "Healthcare", "Engineer", "Teacher", "Trades"],
      avgSalary: "$60,000-$90,000/year"
    },
    { 
      code: "UK", 
      name: "United Kingdom", 
      flag: "🇬🇧", 
      popular: true, 
      avgJobSearch: "1-3 months", 
      inDemandJobs: ["Software Engineer", "Healthcare", "Finance", "Digital Marketing", "Data Science"],
      avgSalary: "£35,000-£65,000/year"
    },
    { 
      code: "US", 
      name: "United States", 
      flag: "🇺🇸", 
      popular: true, 
      avgJobSearch: "3-6 months", 
      inDemandJobs: ["Software Developer", "Healthcare", "Finance", "Engineering", "Sales"],
      avgSalary: "$65,000-$120,000/year"
    },
    { 
      code: "DE", 
      name: "Germany", 
      flag: "🇩🇪", 
      popular: false, 
      avgJobSearch: "3-5 months", 
      inDemandJobs: ["IT Specialist", "Engineer", "Healthcare", "Scientist", "Skilled Trades"],
      avgSalary: "€45,000-€75,000/year"
    },
    { 
      code: "SG", 
      name: "Singapore", 
      flag: "🇸🇬", 
      popular: false, 
      avgJobSearch: "2-4 months", 
      inDemandJobs: ["Tech Professional", "Finance", "Healthcare", "Engineering", "Sales"],
      avgSalary: "SGD 50,000-90,000/year"
    },
    { 
      code: "AE", 
      name: "UAE", 
      flag: "🇦🇪", 
      popular: true, 
      avgJobSearch: "1-3 months", 
      inDemandJobs: ["IT Professional", "Finance", "Healthcare", "Engineering", "Hospitality"],
      avgSalary: "AED 120,000-240,000/year"
    },
    { 
      code: "NZ", 
      name: "New Zealand", 
      flag: "🇳🇿", 
      popular: false, 
      avgJobSearch: "3-6 months", 
      inDemandJobs: ["IT Professional", "Healthcare", "Engineer", "Trades", "Agriculture"],
      avgSalary: "NZD 55,000-85,000/year"
    },
  ];

  const services: Service[] = [
    {
      id: "resume-optimization",
      title: "AI-Powered Resume Optimization",
      description: "Get your resume optimized for international job markets and ATS systems",
      duration: "3-5 days",
      keyFeatures: ["ATS-friendly formatting", "Keyword optimization", "Industry-specific templates", "Multiple format versions"],
      popular: true,
      price: "Starting at ₹4,999",
    },
    {
      id: "linkedin-enhancement",
      title: "LinkedIn Profile Enhancement",
      description: "Transform your LinkedIn profile to attract global recruiters",
      duration: "2-3 days",
      keyFeatures: ["Profile optimization", "Content strategy", "Network building", "Recruiter visibility"],
      popular: true,
      price: "Starting at ₹3,999",
    },
    {
      id: "active-job-search",
      title: "Active Job Application Service",
      description: "We apply to jobs on your behalf across multiple platforms",
      duration: "Ongoing",
      keyFeatures: ["Daily applications", "Customized cover letters", "Application tracking", "Interview preparation"],
      popular: true,
      price: "Starting at ₹9,999/month",
    },
    {
      id: "interview-coaching",
      title: "Interview Coaching & Preparation",
      description: "Comprehensive interview preparation for international companies",
      duration: "1-2 weeks",
      keyFeatures: ["Mock interviews", "Technical preparation", "Behavioral coaching", "Cultural training"],
      popular: false,
      price: "Starting at ₹7,999",
    },
    {
      id: "visa-job-matching",
      title: "Visa-Aligned Job Matching",
      description: "Find jobs that match your visa requirements and eligibility",
      duration: "4-8 weeks",
      keyFeatures: ["Visa requirement matching", "Sponsor employer network", "LMIA support", "Work visa guidance"],
      popular: true,
      price: "Starting at ₹14,999",
    },
    {
      id: "career-counseling",
      title: "Global Career Counseling",
      description: "Personalized career guidance for international job markets",
      duration: "2-4 weeks",
      keyFeatures: ["Career path planning", "Skill gap analysis", "Market insights", "Salary negotiation"],
      popular: false,
      price: "Starting at ₹5,999",
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
    alert("Thank you! Our career consultant will contact you within 24 hours to discuss your job assistance needs.");
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
              International Job Search & Career Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Job Assistance &
              <span className="block text-[var(--mitto-primary-600)]">Global Career Services</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              AI-powered resume optimization, LinkedIn enhancement, and active job search support to land your dream international job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free Career Assessment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                View Job Packages
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
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">15,000+</div>
              <div className="text-[var(--mitto-gray-600)]">Jobs Applied</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">85%</div>
              <div className="text-[var(--mitto-gray-600)]">Interview Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">500+</div>
              <div className="text-[var(--mitto-gray-600)]">Partner Employers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Job Search Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Target Job Markets
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Explore in-demand jobs and salary ranges across popular destinations
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
                <div className="text-xs text-[var(--mitto-gray-600)] mb-3">Avg. job search: {country.avgJobSearch}</div>
                <div className="text-xs text-[var(--mitto-primary-600)] font-medium mb-2">{country.avgSalary}</div>
                <ul className="space-y-1">
                  {country.inDemandJobs.slice(0, 2).map((job) => (
                    <li key={job} className="text-xs text-[var(--mitto-gray-500)]">• {job}</li>
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
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Jobs in {c.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">In-demand roles and salary insights</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Top In-Demand Jobs</h4>
                        <ul className="space-y-2">
                          {c.inDemandJobs.map((job) => (
                            <li key={job} className="flex items-center gap-2 text-sm text-[var(--mitto-gray-600)]">
                              <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px]">✓</span>
                              {job}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Job Market Insights</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Average Job Search Time:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{c.avgJobSearch}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Average Salary Range:</span>
                            <span className="font-medium text-[var(--mitto-primary-600)]">{c.avgSalary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Visa Sponsorship:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">Available</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#assessment"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Get Job Search Strategy
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
              Job Assistance Services
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Comprehensive support for your international job search
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
                    <span className="text-[var(--mitto-gray-500)]">Turnaround Time</span>
                    <span className="font-medium text-[var(--mitto-gray-900)]">{service.duration}</span>
                  </div>
                  {service.price && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--mitto-gray-500)]">Starting Price</span>
                      <span className="font-medium text-[var(--mitto-primary-600)]">{service.price}</span>
                    </div>
                  )}
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
                  href="#assessment"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Get Started
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
              Why Choose Mitto for Job Assistance?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              AI-powered tools combined with human expertise for job search success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Tools",
                description: "Advanced AI for resume optimization and job matching",
              },
              {
                icon: "🎯",
                title: "Targeted Applications",
                description: "Apply to jobs that match your profile and visa requirements",
              },
              {
                icon: "📊",
                title: "Application Tracking",
                description: "Real-time dashboard to track all your job applications",
              },
              {
                icon: "👥",
                title: "Employer Network",
                description: "Access to 500+ partner employers offering visa sponsorship",
              },
              {
                icon: "📝",
                title: "Custom Documents",
                description: "Tailored resumes and cover letters for each application",
              },
              {
                icon: "🎓",
                title: "Interview Prep",
                description: "Comprehensive interview coaching and mock sessions",
              },
              {
                icon: "🌍",
                title: "Global Expertise",
                description: "Knowledge of job markets across 8+ countries",
              },
              {
                icon: "⚡",
                title: "Fast Results",
                description: "Start applying to jobs within 48 hours of signup",
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Our Job Search Process
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Systematic 5-step approach to land your international job
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Profile Analysis", description: "Analyze your skills and experience" },
              { step: "02", title: "Resume Optimization", description: "Create ATS-friendly resumes" },
              { step: "03", title: "Active Applications", description: "Apply to targeted jobs daily" },
              { step: "04", title: "Interview Preparation", description: "Coach for technical and behavioral rounds" },
              { step: "05", title: "Offer & Visa", description: "Negotiate offers and assist with work visa" },
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

      {/* Success Stories */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Real candidates who landed international jobs with our help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Software Developer",
                company: "Tech Corp Canada",
                country: "🇨🇦 Canada",
                story: "Landed a $75,000 job in Toronto within 3 months. Resume optimization and active applications made all the difference.",
                time: "3 months",
              },
              {
                name: "Priya Nair",
                role: "Data Analyst",
                company: "Finance Ltd UK",
                country: "🇬🇧 United Kingdom",
                story: "Got multiple offers in London. LinkedIn enhancement and interview coaching were game-changers.",
                time: "2 months",
              },
              {
                name: "Michael Chen",
                role: "IT Consultant",
                company: "Global Tech Australia",
                country: "🇦🇺 Australia",
                story: "Secured a sponsored role in Melbourne. Visa-aligned job matching saved months of searching.",
                time: "4 months",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--mitto-gray-200)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--mitto-primary-100)] rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[var(--mitto-primary-600)]">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-[var(--mitto-gray-900)]">{story.name}</div>
                    <div className="text-sm text-[var(--mitto-gray-600)]">{story.role}</div>
                    <div className="text-sm text-[var(--mitto-primary-600)]">{story.company}</div>
                  </div>
                </div>
                <p className="text-[var(--mitto-gray-600)] text-sm mb-4">"{story.story}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--mitto-gray-500)]">Time to job:</span>
                  <span className="font-medium text-[var(--mitto-primary-600)]">{story.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-[var(--mitto-gray-500)]">Location:</span>
                  <span className="font-medium text-[var(--mitto-gray-900)]">{story.country}</span>
                </div>
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
              <h2 className="text-4xl font-bold mb-4">Free Career Assessment</h2>
              <p className="text-lg opacity-90">Get personalized job search strategy and market insights</p>
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
                  <label className="block text-sm font-medium mb-2">Current Role</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="e.g., Software Engineer"
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
                  <label className="block text-sm font-medium mb-2">Target Role</label>
                  <input
                    type="text"
                    name="targetRole"
                    value={formData.targetRole}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="e.g., Senior Developer"
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
                    <option value="beginner" className="text-gray-900">Beginner</option>
                    <option value="intermediate" className="text-gray-900">Intermediate</option>
                    <option value="advanced" className="text-gray-900">Advanced</option>
                    <option value="native" className="text-gray-900">Native/Fluent</option>
                    <option value="ielts-toefl" className="text-gray-900">Have IELTS/TOEFL scores</option>
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
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Career experts</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Resume Optimization</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">LinkedIn Enhancement</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Job Application Support</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Interview Coaching</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready to Land Your International Job?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">Join thousands who have secured their dream jobs abroad with our expert assistance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              Start Job Search
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
