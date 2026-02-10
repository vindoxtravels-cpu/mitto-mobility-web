"use client";

import { useState, useRef, useEffect } from "react";

export default function StudyAbroadPage(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    preferredCountry: "",
    budget: "",
    englishLevel: ""
  });
  const highlightsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedCountry && highlightsRef.current) {
      highlightsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCountry]);

  const countries = [
    { code: "CA", name: "Canada", flag: "🇨🇦", popular: true, avgCost: "$20,000-$40,000/year", highlights: ["Post-study work permit", "PR pathways", "High quality of life"] },
    { code: "AU", name: "Australia", flag: "🇦🇺", popular: true, avgCost: "$25,000-$45,000/year", highlights: ["Skilled migration", "Research opportunities", "Work while studying"] },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", popular: true, avgCost: "$18,000-$35,000/year", highlights: ["2-year post-study visa", "World-class universities", "Shorter programs"] },
    { code: "US", name: "United States", flag: "🇺🇸", popular: true, avgCost: "$30,000-$60,000/year", highlights: ["STEM OPT extension", "Research funding", "Global recognition"] },
    { code: "DE", name: "Germany", flag: "🇩🇪", popular: true, avgCost: "$0-$1,500/year (Public)", highlights: ["No tuition fees", "18-month job search", "Engineering excellence"] },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", popular: false, avgCost: "$22,000-$40,000/year", highlights: ["Green list occupations", "Safe environment", "Work-life balance"] },
    { code: "SG", name: "Singapore", flag: "🇸🇬", popular: false, avgCost: "$15,000-$30,000/year", highlights: ["Asian hub", "Tax benefits", "Multicultural"] },
    { code: "FR", name: "France", flag: "🇫🇷", popular: false, avgCost: "$10,000-$25,000/year", highlights: ["Low tuition", "Rich culture", "EU mobility"] },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", popular: false, avgCost: "$12,000-$25,000/year", highlights: ["English programs", "Innovation hub", "Post-study work"] },
    { code: "SE", name: "Sweden", flag: "🇸🇪", popular: false, avgCost: "$15,000-$30,000/year", highlights: ["Free tuition for EU", "Sustainable focus", "High quality"] },
    { code: "DK", name: "Denmark", flag: "🇩🇰", popular: false, avgCost: "$15,000-$28,000/year", highlights: ["English-friendly", "Happy country", "Work opportunities"] },
    { code: "NO", name: "Norway", flag: "🇳🇴", popular: false, avgCost: "$0-$25,000/year", highlights: ["No tuition fees", "Nature & quality", "High salaries"] },
  ];

  const programs = [
    {
      id: "bachelors",
      title: "Bachelor's Degree",
      description: "Undergraduate programs for high school graduates",
      duration: "3-4 years",
      requirements: "High school diploma + English proficiency",
      popular: true,
      careerPaths: ["Entry-level positions", "Graduate studies", "Professional certifications"],
      avgSalary: "$40,000-$70,000/year"
    },
    {
      id: "masters",
      title: "Master's Degree",
      description: "Graduate programs for bachelor's degree holders",
      duration: "1-2 years",
      requirements: "Bachelor's degree + English proficiency",
      popular: true,
      careerPaths: ["Mid-level management", "Specialist roles", "Research positions"],
      avgSalary: "$60,000-$100,000/year"
    },
    {
      id: "phd",
      title: "PhD/Doctorate",
      description: "Research-based doctoral programs",
      duration: "3-5 years",
      requirements: "Master's degree + Research proposal",
      popular: false,
      careerPaths: ["Academic careers", "R&D leadership", "Industry consulting"],
      avgSalary: "$80,000-$150,000/year"
    },
    {
      id: "diploma",
      title: "Diploma/Certificate",
      description: "Short-term skill-based programs",
      duration: "6 months-2 years",
      requirements: "High school diploma + Basic English",
      popular: true,
      careerPaths: ["Technical roles", "Trade careers", "Quick employment"],
      avgSalary: "$30,000-$50,000/year"
    },
    {
      id: "mba",
      title: "MBA",
      description: "Business administration and management",
      duration: "1-2 years",
      requirements: "Bachelor's degree + Work experience",
      popular: false,
      careerPaths: ["Senior management", "Entrepreneurship", "Consulting"],
      avgSalary: "$90,000-$150,000/year"
    },
    {
      id: "vocational",
      title: "Vocational Training",
      description: "Practical skills and trade programs",
      duration: "1-3 years",
      requirements: "Basic education + Language proficiency",
      popular: false,
      careerPaths: ["Skilled trades", "Technical specialists", "Business ownership"],
      avgSalary: "$35,000-$60,000/year"
    }
  ];

  // Add comprehensive country highlights section
  const countryHighlights = [
    {
      country: "Canada",
      flag: "🇨🇦",
      title: "Study in Canada",
      description: "World-class education with clear pathways to permanent residency",
      benefits: [
        "3-year post-study work permit",
        "Express Entry points for Canadian education",
        "Multicultural society",
        "High quality of life",
        "Affordable healthcare",
        "Safe and welcoming communities"
      ],
      topUniversities: ["University of Toronto", "UBC", "McGill", "McMaster", "University of Alberta"],
      popularCourses: ["Computer Science", "Engineering", "Business", "Healthcare", "Data Science"],
      avgCosts: {
        tuition: "$18,000-$35,000/year",
        living: "$12,000-$18,000/year",
        total: "$30,000-$53,000/year"
      },
      requirements: {
        ielts: "6.5 overall (no band below 6.0)",
        toefl: "90+",
        academics: "60%+ in bachelor's for masters"
      }
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      title: "Study in Australia",
      description: "Excellent education system with strong post-study work opportunities",
      benefits: [
        "2-4 year post-study work visa",
        "Skilled migration pathways",
        "Work while studying (20 hrs/week)",
        "High standard of living",
        "Beautiful landscapes",
        "Research opportunities"
      ],
      topUniversities: ["University of Melbourne", "ANU", "UNSW", "University of Sydney", "Monash"],
      popularCourses: ["Engineering", "IT", "Business", "Healthcare", "Hospitality"],
      avgCosts: {
        tuition: "$22,000-$45,000/year",
        living: "$15,000-$22,000/year",
        total: "$37,000-$67,000/year"
      },
      requirements: {
        ielts: "6.5 overall (no band below 6.0)",
        toefl: "79+",
        academics: "55%+ in bachelor's for masters"
      }
    },
    {
      country: "UK",
      flag: "🇬🇧",
      title: "Study in United Kingdom",
      description: "Prestigious universities with rich academic heritage",
      benefits: [
        "2-year post-study work visa",
        "1-year master's programs",
        "World-renowned universities",
        "Rich cultural experience",
        "European travel access",
        "Strong research focus"
      ],
      topUniversities: ["Oxford", "Cambridge", "Imperial College", "LSE", "UCL"],
      popularCourses: ["Business", "Law", "Medicine", "Engineering", "Arts & Humanities"],
      avgCosts: {
        tuition: "$15,000-$38,000/year",
        living: "$12,000-$18,000/year",
        total: "$27,000-$56,000/year"
      },
      requirements: {
        ielts: "6.5 overall (no band below 6.0)",
        toefl: "88+",
        academics: "55%+ in bachelor's for masters"
      }
    },
    {
      country: "USA",
      flag: "🇺🇸",
      title: "Study in United States",
      description: "World's leading destination for international students",
      benefits: [
        "STEM OPT extension (3 years)",
        "Research funding opportunities",
        "Global career network",
        "Diverse academic options",
        "Innovation hubs",
        "Scholarship opportunities"
      ],
      topUniversities: ["MIT", "Stanford", "Harvard", "Berkeley", "Yale"],
      popularCourses: ["Computer Science", "Engineering", "Business", "Medicine", "Data Analytics"],
      avgCosts: {
        tuition: "$25,000-$60,000/year",
        living: "$15,000-$25,000/year",
        total: "$40,000-$85,000/year"
      },
      requirements: {
        ielts: "7.0 overall (no band below 6.5)",
        toefl: "90+",
        academics: "65%+ in bachelor's for masters",
        gre: "Required for many programs"
      }
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      title: "Study in Germany",
      description: "Engineering excellence with no tuition fees at public universities",
      benefits: [
        "No tuition fees at public universities",
        "18-month job search visa",
        "Engineering powerhouse",
        "Strong economy",
        "English-taught programs",
        "Central European location"
      ],
      topUniversities: ["Technical University Munich", "LMU Munich", "Heidelberg University", "RWTH Aachen", "Freie Universität Berlin"],
      popularCourses: ["Engineering", "Computer Science", "Natural Sciences", "Business", "Medicine"],
      avgCosts: {
        tuition: "$0-$1,500/year (semester contribution)",
        living: "$10,000-$15,000/year",
        total: "$10,000-$16,500/year"
      },
      requirements: {
        ielts: "6.5 overall",
        toefl: "80+",
        academics: "60%+ in bachelor's for masters",
        german: "Basic German recommended"
      }
    }
  ];

  // Add comprehensive application checklist
  const applicationChecklist = [
    {
      category: "Academic Documents",
      items: [
        "Transcripts (original + attested copies)",
        "Degree certificates",
        "Grade conversion charts",
        "Syllabus copies (for some universities)",
        "Academic reference letters"
      ]
    },
    {
      category: "English Proficiency",
      items: [
        "IELTS/TOEFL score reports",
        "PTE/Duolingo scores (if applicable)",
        "English medium instruction certificate"
      ]
    },
    {
      category: "Financial Documents",
      items: [
        "Bank statements (6 months)",
        "Sponsorship letter",
        "Income tax returns",
        "Scholarship letters (if any)",
        "Education loan approval letter"
      ]
    },
    {
      category: "Personal Documents",
      items: [
        "Valid passport",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (LORs)",
        "Resume/CV",
        "Portfolio (for design/creative programs)",
        "Birth certificate"
      ]
    },
    {
      category: "Additional Requirements",
      items: [
        "GRE/GMAT scores (for US/Canada)",
        "Work experience certificates",
        "Research papers (for PhD)",
        "Medical fitness certificate",
        "Police clearance certificate"
      ]
    }
  ];

  // Add scholarship information
  const scholarshipInfo = [
    {
      type: "Merit-Based Scholarships",
      description: "Awarded based on academic excellence and achievements",
      examples: [
        "University-specific merit awards",
        "Dean's excellence scholarships",
        "International student merit grants"
      ],
      coverage: "10-50% tuition fee"
    },
    {
      type: "Need-Based Financial Aid",
      description: "Based on family income and financial circumstances",
      examples: [
        "Bursaries and grants",
        "Work-study programs",
        "Emergency financial assistance"
      ],
      coverage: "Up to 100% demonstrated need"
    },
    {
      type: "Country-Specific Scholarships",
      description: "Offered by governments and organizations",
      examples: [
        "Canada: Vanier Canada Graduate Scholarships",
        "Australia: Australia Awards",
        "UK: Chevening Scholarships",
        "USA: Fulbright Program"
      ],
      coverage: "Full tuition + living expenses"
    },
    {
      type: "Subject-Specific Awards",
      description: "For students in specific fields of study",
      examples: [
        "STEM scholarships",
        "Business school fellowships",
        "Healthcare grants",
        "Arts and culture awards"
      ],
      coverage: "20-75% tuition fee"
    }
  ];

  // Add services we offer section
  const servicesWeOffer = [
    {
      icon: "🎯",
      title: "Profile Evaluation",
      points: [
        "Free assessment of academic profile",
        "Country and university matching",
        "Success probability analysis",
        "Gap identification and recommendations"
      ]
    },
    {
      icon: "📚",
      title: "University Application",
      points: [
        "Shortlisting 8-10 universities",
        "Application form filling",
        "Document preparation and review",
        "Application tracking and follow-up"
      ]
    },
    {
      icon: "✍️",
      title: "Document Preparation",
      points: [
        "SOP writing and editing",
        "LOR guidance and templates",
        "Resume/CV optimization",
        "Portfolio development"
      ]
    },
    {
      icon: "💳",
      title: "Financial Assistance",
      points: [
        "Education loan guidance",
        "Scholarship application support",
        "GIC/blocked account setup",
        "Fee payment assistance"
      ]
    },
    {
      icon: "🛂",
      title: "Visa Processing",
      points: [
        "Document checklist preparation",
        "Visa application filing",
        "Mock visa interviews",
        "Biometric appointment booking"
      ]
    },
    {
      icon: "✈️",
      title: "Pre-Departure Support",
      points: [
        "Flight booking assistance",
        "Accommodation arrangement",
        "Airport pickup coordination",
        "Orientation sessions"
      ]
    },
    {
      icon: "🏦",
      title: "Post-Landing Services",
      points: [
        "Bank account opening",
        "SIM card setup",
        "Local registration",
        "Part-time job guidance"
      ]
    },
    {
      icon: "📞",
      title: "Ongoing Support",
      points: [
        "24/7 emergency helpline",
        "Academic progress monitoring",
        "Career counseling",
        "Alumni network access"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🎓",
      title: "University Selection",
      description: "Expert guidance to choose the right university and program based on your profile"
    },
    {
      icon: "📝",
      title: "Application Assistance",
      description: "Complete support with applications, essays, and documentation"
    },
    {
      icon: "🌍",
      title: "Visa Processing",
      description: "End-to-end student visa application support with 98% success rate"
    },
    {
      icon: "💰",
      title: "Scholarship Help",
      description: "Assistance with scholarships, financial aid, and education loans"
    },
    {
      icon: "🏠",
      title: "Accommodation",
      description: "Help with finding safe and affordable housing near your university"
    },
    {
      icon: "✈️",
      title: "Pre-Departure Support",
      description: "Complete travel planning and orientation before you fly"
    },
    // Added inspired content: exam prep, loan assistance, post-landing support
    {
      icon: "🗣️",
      title: "IELTS/PTE Coaching",
      description: "Structured coaching, mock tests, and strategy sessions to maximize your scores"
    },
    {
      icon: "🏦",
      title: "Education Loan Assistance",
      description: "Tie‑ups with leading financial institutions for swift approvals and best rates"
    },
    {
      icon: "🧭",
      title: "Post‑Landing Support",
      description: "Airport pickup, temporary stay guidance, and local onboarding support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Profile Assessment",
      description: "Evaluate your academic background and career goals"
    },
    {
      step: "02", 
      title: "University Shortlisting",
      description: "Select universities that match your profile and budget"
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Prepare and submit applications with expert guidance"
    },
    {
      step: "04",
      title: "Offer & Visa",
      description: "Receive admission offers and apply for student visa"
    },
    {
      step: "05",
      title: "Pre-Departure",
      description: "Travel arrangements and accommodation setup"
    },
    // Added inspired step: Arrival & settlement
    {
      step: "06",
      title: "Arrival & Settlement",
      description: "Orientation, local SIM, banking, transport and student community integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      country: "Canada",
      university: "University of Toronto",
      content: "Mitto helped me get into my dream university! The application process was so smooth with their guidance.",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Michael Chen",
      role: "MBA Student", 
      country: "Australia",
      university: "University of Melbourne",
      content: "From university selection to visa approval, everything was handled professionally. Highly recommend!",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Student",
      country: "Germany",
      university: "Technical University of Munich",
      content: "I got a scholarship with Mitto's help! Their team made studying in Germany so accessible.",
      rating: 5,
      image: "👩‍🔬"
    },
    // Added inspired testimonial style: loan + coaching + settlement
    {
      name: "Arjun Patel",
      role: "Mechanical Engineering Student",
      country: "UK",
      university: "University of Manchester",
      content: "Got my education loan approved in 5 days, improved my IELTS band, and arrived to seamless housing support.",
      rating: 5,
      image: "🧑‍🎓"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! Our education consultant will contact you within 24 hours.");
  };

  const filteredPrograms = programs.filter(program => 
    selectedProgram === "" || program.id === selectedProgram
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--mitto-primary-50)] via-white to-[var(--mitto-gray-50)] py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mitto-primary-200)] bg-[var(--mitto-primary-50)] px-4 py-2 text-sm text-[var(--mitto-primary-700)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--mitto-primary-400)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--mitto-primary-500)]"></span>
              </span>
              10,000+ students placed in top universities worldwide
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Study Abroad &
              <span className="block text-[var(--mitto-primary-600)]">Global Education</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              Transform your future with international education. Expert guidance for Canada, Australia, UK, USA, and more. 
              98% visa success rate with comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free Counseling Session
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
                Download University Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-[var(--mitto-gray-200)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">98%</div>
              <div className="text-[var(--mitto-gray-600)]">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">500+</div>
              <div className="text-[var(--mitto-gray-600)]">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">10,000+</div>
              <div className="text-[var(--mitto-gray-600)]">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Student Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selection with Enhanced Details */}
      <section className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Choose Your Study Destination
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Select your preferred country to explore top universities and programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country.code)}
                className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  selectedCountry === country.code
                    ? 'border-[var(--mitto-primary-500)] bg-[var(--mitto-primary-50)]'
                    : 'border-[var(--mitto-gray-200)] bg-white hover:border-[var(--mitto-primary-300)]'
                }`}
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <div className="font-semibold text-[var(--mitto-gray-900)] mb-2">{country.name}</div>
                <div className="text-sm text-[var(--mitto-gray-600)] mb-3">{country.avgCost}</div>
                {country.highlights && (
                  <div className="space-y-1">
                    {country.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="text-xs text-[var(--mitto-gray-500)]">• {highlight}</div>
                    ))}
                  </div>
                )}
                {country.popular && (
                  <span className="inline-block mt-2 px-2 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-xs rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Country Highlights Section */}
          {selectedCountry && (
            <div ref={highlightsRef} className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--mitto-gray-200)]">
              {countryHighlights
                .filter(country => country.country === countries.find(c => c.code === selectedCountry)?.name)
                .map((country) => (
                  <div key={country.country}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">{country.title}</h3>
                        <p className="text-[var(--mitto-gray-600)]">{country.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {country.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-[var(--mitto-gray-600)]">
                              <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px]">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Top Universities</h4>
                        <ul className="space-y-2">
                          {country.topUniversities.map((uni, idx) => (
                            <li key={idx} className="text-sm text-[var(--mitto-gray-600)]">• {uni}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Popular Courses</h4>
                        <ul className="space-y-2">
                          {country.popularCourses.map((course, idx) => (
                            <li key={idx} className="text-sm text-[var(--mitto-gray-600)]">• {course}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[var(--mitto-gray-50)] rounded-xl p-4">
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Cost Breakdown</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Tuition Fee:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{country.avgCosts.tuition}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Living Expenses:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{country.avgCosts.living}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-[var(--mitto-gray-200)]">
                            <span className="text-[var(--mitto-gray-600)]">Total Annual Cost:</span>
                            <span className="font-bold text-[var(--mitto-primary-600)]">{country.avgCosts.total}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[var(--mitto-gray-50)] rounded-xl p-4">
                        <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">Entry Requirements</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">IELTS:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{country.requirements.ielts}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">TOEFL:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{country.requirements.toefl}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[var(--mitto-gray-600)]">Academics:</span>
                            <span className="font-medium text-[var(--mitto-gray-900)]">{country.requirements.academics}</span>
                          </div>
                          {country.requirements.gre && (
                            <div className="flex justify-between">
                              <span className="text-[var(--mitto-gray-600)]">GRE:</span>
                              <span className="font-medium text-[var(--mitto-gray-900)]">{country.requirements.gre}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {selectedCountry && (
            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedCountry("")}
                className="text-[var(--mitto-primary-600)] hover:text-[var(--mitto-primary-700)] font-medium"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Program Types */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Find the perfect program for your academic goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
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
                <button 
                  onClick={() => setSelectedProgram(program.id)}
                  className="w-full py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Learn More
                </button>
                {/* Added inspired micro-features under each program */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="text-xs text-[var(--mitto-gray-600)]">Intakes: Jan/May/Sep</div>
                  <div className="text-xs text-[var(--mitto-gray-600)]">Scholarships Available</div>
                  <div className="text-xs text-[var(--mitto-gray-600)]">Application Fee Waivers</div>
                  <div className="text-xs text-[var(--mitto-gray-600)]">Co‑op/Internship Options</div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-2">Career Paths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.careerPaths.map((path, idx) => (
                      <span key={idx} className="text-xs bg-[var(--mitto-gray-100)] text-[var(--mitto-gray-600)] px-2 py-1 rounded">
                        {path}
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
      <section className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Why Choose Mitto for Study Abroad?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Comprehensive support for your international education journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[var(--mitto-gray-900)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--mitto-gray-600)]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Added inspired detailed services grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)] mb-6">End‑to‑End Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Course & Country Guidance",
                  points: [
                    "Personalized counseling",
                    "Budget‑aligned planning",
                    "Career‑oriented roadmap",
                  ],
                },
                {
                  title: "Application & Admissions",
                  points: [
                    "SOP/LOR drafting support",
                    "Document verification",
                    "Fast‑track submissions",
                  ],
                },
                {
                  title: "Financial & Visa",
                  points: [
                    "Education loans, GIC, blocked accounts",
                    "Tuition fee payment guidance",
                    "Student visa filing and mock interviews",
                  ],
                },
                {
                  title: "Travel & Accommodation",
                  points: [
                    "Flight planning and forex",
                    "Temporary and long‑term housing",
                    "Insurance and local SIM",
                  ],
                },
                {
                  title: "Exam Readiness",
                  points: [
                    "IELTS/PTE coaching",
                    "Practice tests & feedback",
                    "Score improvement strategies",
                  ],
                },
                {
                  title: "Post‑Landing Support",
                  points: [
                    "Bank account setup",
                    "Campus onboarding",
                    "Part‑time job guidance",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-[var(--mitto-gray-900)] mb-3">{item.title}</h4>
                  <ul className="space-y-2 text-sm text-[var(--mitto-gray-600)]">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px]">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Your Study Abroad Journey
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Simple 5-step process to your international education
            </p>
          </div>

          <div className="grid md:grid-cols-5 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--mitto-primary-600)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--mitto-gray-900)] mb-3">{step.title}</h3>
                  <p className="text-[var(--mitto-gray-600)] text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[var(--mitto-primary-300)] to-[var(--mitto-primary-100)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Hear from our students studying abroad
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-[var(--mitto-gray-900)]">{testimonial.name}</div>
                    <div className="text-[var(--mitto-gray-600)] text-sm">{testimonial.role}</div>
                    <div className="text-[var(--mitto-primary-600)] text-sm">{testimonial.university}</div>
                    <div className="text-[var(--mitto-gray-500)] text-xs">{testimonial.country}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--mitto-gray-600)] italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Checklist Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Complete Application Checklist
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Everything you need for a successful study abroad application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationChecklist.map((category) => (
              <div key={category.category} className="bg-[var(--mitto-gray-50)] rounded-2xl p-6 border border-[var(--mitto-gray-200)]">
                <h3 className="font-semibold text-[var(--mitto-gray-900)] mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--mitto-gray-600)]">
                      <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Information Section */}
      <section className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Scholarship & Financial Aid
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Multiple funding options to make your education affordable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipInfo.map((scholarship) => (
              <div key={scholarship.type} className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--mitto-gray-200)]">
                <h3 className="font-semibold text-[var(--mitto-gray-900)] mb-3">{scholarship.type}</h3>
                <p className="text-[var(--mitto-gray-600)] mb-4">{scholarship.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {scholarship.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-[var(--mitto-gray-600)]">• {example}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[var(--mitto-primary-50)] rounded-lg p-3">
                  <span className="text-sm font-medium text-[var(--mitto-primary-700)]">Coverage: {scholarship.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Comprehensive Services We Offer
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              End-to-end support from application to settlement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesWeOffer.map((service) => (
              <div key={service.title} className="bg-[var(--mitto-gray-50)] rounded-2xl p-6 border border-[var(--mitto-gray-200)] hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-[var(--mitto-gray-900)] mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--mitto-gray-600)]">
                      <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Counseling Form */}
      <section id="assessment" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Free Counseling Session</h2>
              <p className="text-xl opacity-90">
                Get personalized guidance for your study abroad journey
              </p>
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
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
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
                    min="16"
                    max="35"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Education</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select education level</option>
                    <option value="high-school" className="text-gray-900">High School</option>
                    <option value="bachelors" className="text-gray-900">Bachelor's Degree</option>
                    <option value="masters" className="text-gray-900">Master's Degree</option>
                    <option value="phd" className="text-gray-900">PhD</option>
                    <option value="diploma" className="text-gray-900">Diploma/Certificate</option>
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
                    <option value="" className="text-gray-900">Select country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code} className="text-gray-900">
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Annual Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select budget range</option>
                    <option value="under-15k" className="text-gray-900">Under $15,000</option>
                    <option value="15k-25k" className="text-gray-900">$15,000 - $25,000</option>
                    <option value="25k-40k" className="text-gray-900">$25,000 - $40,000</option>
                    <option value="40k-60k" className="text-gray-900">$40,000 - $60,000</option>
                    <option value="above-60k" className="text-gray-900">Above $60,000</option>
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
                    <option value="" className="text-gray-900">Select proficiency level</option>
                    <option value="beginner" className="text-gray-900">Beginner</option>
                    <option value="intermediate" className="text-gray-900">Intermediate</option>
                    <option value="advanced" className="text-gray-900">Advanced</option>
                    <option value="native" className="text-gray-900">Native/Fluent</option>
                    <option value="ielts-toefl" className="text-gray-900">Have IELTS/TOEFL score</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Free Counseling
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">
                  No spam • 100% confidential • Free counseling session
                </p>
                {/* Added inspired trust badges */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-white/90">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">Partnered Universities</div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">Loan Assistance Desk</div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">IELTS/PTE Coaching</div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">Post‑Landing Support</div>
                </div>
              </div>
            </form>
          </div>

          {/* Added inspired FAQ section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)] mb-4">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "What are the typical intakes?",
                  a: "Most universities have intakes in January, May, and September. Some countries offer rolling admissions for diplomas and certificates.",
                },
                {
                  q: "Can you help with scholarships?",
                  a: "Yes. We help shortlist scholarships, prepare strong applications, and guide you with university‑specific and country‑specific funding options.",
                },
                {
                  q: "Do you assist with education loans?",
                  a: "We coordinate with leading banks and NBFCs, advise on documentation, and help speed up approvals with minimal hassle.",
                },
                {
                  q: "What support do I get after landing?",
                  a: "Orientation, housing options, local SIM, bank account setup, and part‑time job guidance to help you settle quickly.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-6">
                  <div className="font-semibold text-[var(--mitto-gray-900)]">{faq.q}</div>
                  <p className="mt-2 text-[var(--mitto-gray-600)] text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-[var(--mitto-gray-900)] mb-4">
            Ready to Study Abroad?
          </h2>
          <p className="text-xl text-[var(--mitto-gray-600)] mb-8">
            Join thousands of students who have transformed their careers with international education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              Schedule Free Counseling
            </button>
            <button className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              Download University Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
