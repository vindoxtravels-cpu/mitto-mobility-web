"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  inclusions: string[];
  popular?: boolean;
  category: string;
}

interface Destination {
  code: string;
  name: string;
  flag: string;
  popular: boolean;
  services: string[];
  avgPrice: string;
  highlights: string[];
}

export default function SportsMedicalTourismPage(): JSX.Element {
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    travelDate: "",
    medicalCondition: "",
    destination: "",
    budget: "",
  });

  const destinations: Destination[] = [
    { 
      code: "IN", 
      name: "India", 
      flag: "🇮🇳", 
      popular: true, 
      services: ["Cardiac Surgery", "Orthopedics", "IVF Treatment", "Cancer Treatment", "Yoga & Wellness"],
      avgPrice: "₹3,00,000-₹15,00,000",
      highlights: ["World-class hospitals", "Affordable treatment", "English speaking", "Medical tourism hub"]
    },
    { 
      code: "TH", 
      name: "Thailand", 
      flag: "🇹🇭", 
      popular: true, 
      services: ["Cosmetic Surgery", "Dental Care", "Fertility Treatment", "Sports Medicine", "Wellness Retreats"],
      avgPrice: "₹2,50,000-₹12,00,000",
      highlights: ["Medical spas", "Recovery resorts", "Tourism friendly", "Experienced doctors"]
    },
    { 
      code: "SG", 
      name: "Singapore", 
      flag: "🇸🇬", 
      popular: true, 
      services: ["Cancer Treatment", "Neurosurgery", "Organ Transplant", "Sports Rehabilitation", "Health Screening"],
      avgPrice: "₹8,00,000-₹25,00,000",
      highlights: ["Advanced technology", "Multilingual staff", "Clean environment", "Quick appointments"]
    },
    { 
      code: "MY", 
      name: "Malaysia", 
      flag: "🇲🇾", 
      popular: true, 
      services: ["Cardiac Care", "Dental Treatment", "IVF", "Sports Medicine", "Traditional Medicine"],
      avgPrice: "₹2,00,000-₹10,00,000",
      highlights: ["Halal healthcare", "Affordable quality", "English speaking", "Tourism attractions"]
    },
    { 
      code: "TR", 
      name: "Turkey", 
      flag: "🇹🇷", 
      popular: false, 
      services: ["Hair Transplant", "Cosmetic Surgery", "Dental Care", "Eye Surgery", "Sports Medicine"],
      avgPrice: "₹1,50,000-₹8,00,000",
      highlights: ["Cosmetic procedures", "Experienced surgeons", "Historic sites", "Affordable prices"]
    },
    { 
      code: "AE", 
      name: "UAE", 
      flag: "🇦🇪", 
      popular: false, 
      services: ["Fertility Treatment", "Cardiac Surgery", "Sports Medicine", "Wellness Programs", "Dental Care"],
      avgPrice: "₹5,00,000-₹20,00,000",
      highlights: ["Luxury facilities", "Multilingual staff", "Quick procedures", "Recovery resorts"]
    },
    { 
      code: "DE", 
      name: "Germany", 
      flag: "🇩🇪", 
      popular: false, 
      services: ["Orthopedic Surgery", "Cancer Treatment", "Sports Medicine", "Rehabilitation", "Cardiac Care"],
      avgPrice: "₹10,00,000-₹30,00,000",
      highlights: ["Advanced technology", "Specialized care", "Research hospitals", "Quality standards"]
    },
    { 
      code: "KR", 
      name: "South Korea", 
      flag: "🇰🇷", 
      popular: false, 
      services: ["Cosmetic Surgery", "Cancer Treatment", "Dental Care", "Eye Surgery", "Sports Medicine"],
      avgPrice: "₹4,00,000-₹15,00,000",
      highlights: ["Cosmetic excellence", "Advanced tech", "Skincare treatments", "Medical innovation"]
    },
  ];

  const services: Service[] = [
    {
      id: "cardiac-surgery",
      title: "Cardiac Surgery Package",
      description: "Advanced heart surgeries with top cardiologists and modern facilities",
      duration: "7-14 days",
      price: "₹5,00,000",
      inclusions: ["Surgery & hospital stay", "Pre-op tests", "Medications", "Follow-up consultations", "Airport transfers"],
      popular: true,
      category: "medical",
    },
    {
      id: "orthopedic-surgery",
      title: "Orthopedic Surgery Package",
      description: "Joint replacements and orthopedic procedures with expert surgeons",
      duration: "10-21 days",
      price: "₹4,50,000",
      inclusions: ["Surgery & hospital stay", "Physiotherapy", "Implants", "Medications", "Rehabilitation support"],
      popular: true,
      category: "medical",
    },
    {
      id: "ivf-treatment",
      title: "IVF & Fertility Package",
      description: "Complete fertility treatment with advanced reproductive technology",
      duration: "21-28 days",
      price: "₹2,50,000",
      inclusions: ["IVF procedure", "Medications", "Ultrasound monitoring", "Lab tests", "Counseling"],
      popular: false,
      category: "medical",
    },
    {
      id: "cancer-treatment",
      title: "Cancer Treatment Package",
      description: "Comprehensive oncology care with advanced treatment options",
      duration: "14-30 days",
      price: "₹8,00,000",
      inclusions: ["Chemotherapy/Radiation", "Hospital stay", "Medications", "Lab tests", "Nutrition support"],
      popular: false,
      category: "medical",
    },
    {
      id: "cosmetic-surgery",
      title: "Cosmetic Surgery Package",
      description: "Enhance your appearance with expert cosmetic procedures",
      duration: "7-14 days",
      price: "₹1,50,000",
      inclusions: ["Surgery", "Recovery stay", "Medications", "Post-op care", "Follow-up consultations"],
      popular: true,
      category: "cosmetic",
    },
    {
      id: "dental-care",
      title: "Dental Care Package",
      description: "Complete dental treatments including implants and cosmetic dentistry",
      duration: "5-10 days",
      price: "₹80,000",
      inclusions: ["Dental procedures", "Materials", "X-rays", "Consultations", "Temporary restorations"],
      popular: false,
      category: "cosmetic",
    },
    {
      id: "sports-medicine",
      title: "Sports Medicine Package",
      description: "Specialized sports injury treatment and performance enhancement",
      duration: "7-21 days",
      price: "₹3,00,000",
      inclusions: ["Medical assessment", "Treatment procedures", "Physiotherapy", "Training programs", "Nutrition plan"],
      popular: true,
      category: "sports",
    },
    {
      id: "sports-training",
      title: "Sports Training Camp",
      description: "Professional sports training with expert coaches and facilities",
      duration: "14-30 days",
      price: "₹1,50,000",
      inclusions: ["Training sessions", "Accommodation", "Meals", "Fitness assessment", "Equipment access"],
      popular: false,
      category: "sports",
    },
    {
      id: "wellness-retreat",
      title: "Wellness & Yoga Retreat",
      description: "Rejuvenate your mind and body with traditional wellness programs",
      duration: "7-14 days",
      price: "₹75,000",
      inclusions: ["Yoga sessions", "Accommodation", "Meals", "Spa treatments", "Meditation classes"],
      popular: false,
      category: "wellness",
    },
  ];

  const categories = [
    { id: "all", label: "All Services", icon: "🏥" },
    { id: "medical", label: "Medical Treatment", icon: "⚕️" },
    { id: "cosmetic", label: "Cosmetic Procedures", icon: "✨" },
    { id: "sports", label: "Sports Medicine", icon: "⚽" },
    { id: "wellness", label: "Wellness & Yoga", icon: "🧘" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert("Thank you! Our medical tourism consultant will contact you within 24 hours with personalized treatment options.");
  };

  const filteredServices = selectedCategory && selectedCategory !== "all" 
    ? services.filter(service => service.category === selectedCategory)
    : services;

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
              Sports & Medical Tourism
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Sports & Medical Tourism &
              <span className="block text-[var(--mitto-primary-600)]">Wellness Travel</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              World-class medical treatments, sports medicine, and wellness programs with accredited hospitals and expert doctors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Free Medical Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                View Treatment Options
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
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">100+</div>
              <div className="text-[var(--mitto-gray-600)]">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">50+</div>
              <div className="text-[var(--mitto-gray-600)]">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">5,000+</div>
              <div className="text-[var(--mitto-gray-600)]">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Medical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Medical Tourism Destinations
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Top destinations for world-class medical treatments and wellness programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {destinations.map((destination) => (
              <button
                key={destination.code}
                onClick={() => setSelectedDestination(destination.code)}
                className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  selectedDestination === destination.code
                    ? "border-[var(--mitto-primary-500)] bg-[var(--mitto-primary-50)]"
                    : "border-[var(--mitto-gray-200)] bg-white hover:border-[var(--mitto-primary-300)]"
                }`}
              >
                <div className="text-3xl mb-2">{destination.flag}</div>
                <div className="font-semibold text-[var(--mitto-gray-900)] mb-1">{destination.name}</div>
                <div className="text-xs text-[var(--mitto-primary-600)] font-medium mb-2">{destination.avgPrice}</div>
                <ul className="space-y-1">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="text-xs text-[var(--mitto-gray-500)]">• {highlight}</li>
                  ))}
                </ul>
                {destination.popular && (
                  <span className="inline-block mt-2 px-2 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-xs rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>

          {selectedDestination && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--mitto-gray-200)]">
              {destinations
                .filter((d) => d.code === selectedDestination)
                .map((d) => (
                  <div key={d.code}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{d.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Medical Tourism in {d.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Top medical facilities and treatments</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {d.services.map((service) => (
                        <div key={service} className="bg-[var(--mitto-gray-50)] rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-[var(--mitto-gray-900)]">{service}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="#consultation"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Get Treatment Quote
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {selectedDestination && (
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedDestination("");
                  setSelectedCategory("");
                }}
                className="text-[var(--mitto-primary-600)] hover:text-[var(--mitto-primary-700)] font-medium"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Medical & Sports Services
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Comprehensive healthcare and wellness solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border-2 transition-all ${
                  selectedCategory === category.id
                    ? "border-[var(--mitto-primary-500)] bg-[var(--mitto-primary-50)] text-[var(--mitto-primary-700)]"
                    : "border-[var(--mitto-gray-200)] bg-white text-[var(--mitto-gray-700)] hover:border-[var(--mitto-primary-300)]"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
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
                    <span className="text-[var(--mitto-gray-500)]">Duration</span>
                    <span className="font-medium text-[var(--mitto-gray-900)]">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Starting from</span>
                    <span className="font-bold text-lg text-[var(--mitto-primary-600)]">{service.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {service.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex items-start gap-2 text-sm text-[var(--mitto-gray-600)]">
                        <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#consultation"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Get Quote
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
              Why Choose Mitto for Medical Tourism?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Trusted healthcare partnerships and comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏥",
                title: "Accredited Hospitals",
                description: "JCI and internationally accredited medical facilities",
              },
              {
                icon: "👨‍⚕️",
                title: "Expert Doctors",
                description: "Board-certified specialists with international experience",
              },
              {
                icon: "💰",
                title: "Cost Effective",
                description: "Save up to 70% on treatment costs compared to Western countries",
              },
              {
                icon: "🛂",
                title: "Visa Assistance",
                description: "Complete support for medical visa processing",
              },
              {
                icon: "🏨",
                title: "Recovery Accommodation",
                description: "Comfortable stays near hospitals for recovery period",
              },
              {
                icon: "🚑",
                title: "Emergency Support",
                description: "24/7 medical emergency assistance during your stay",
              },
              {
                icon: "🌐",
                title: "Second Opinions",
                description: "Free second opinions from top medical experts",
              },
              {
                icon: "📋",
                title: "Complete Coordination",
                description: "End-to-end coordination from consultation to recovery",
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
              Your Medical Journey
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Simple 5-step process for your medical treatment abroad
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free medical consultation" },
              { step: "02", title: "Quote & Planning", description: "Treatment plan and cost estimate" },
              { step: "03", title: "Travel Arrangement", description: "Visa, flights, and accommodation" },
              { step: "04", title: "Treatment", description: "Medical procedure and hospital stay" },
              { step: "05", title: "Recovery", description: "Post-treatment care and follow-up" },
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

      {/* Consultation Form */}
      <section id="consultation" className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Free Medical Consultation</h2>
              <p className="text-lg opacity-90">Get expert medical advice and treatment options</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Patient Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Enter patient name"
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
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select service</option>
                    <option value="cardiac" className="text-gray-900">Cardiac Surgery</option>
                    <option value="orthopedic" className="text-gray-900">Orthopedic Surgery</option>
                    <option value="ivf" className="text-gray-900">IVF & Fertility</option>
                    <option value="cancer" className="text-gray-900">Cancer Treatment</option>
                    <option value="cosmetic" className="text-gray-900">Cosmetic Surgery</option>
                    <option value="dental" className="text-gray-900">Dental Care</option>
                    <option value="sports" className="text-gray-900">Sports Medicine</option>
                    <option value="wellness" className="text-gray-900">Wellness Program</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Travel Date</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select destination</option>
                    {destinations.map((d) => (
                      <option key={d.code} value={d.code} className="text-gray-900">
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select budget</option>
                    <option value="budget" className="text-gray-900">Budget (₹1-3 Lakhs)</option>
                    <option value="mid" className="text-gray-900">Mid-range (₹3-8 Lakhs)</option>
                    <option value="premium" className="text-gray-900">Premium (₹8-15 Lakhs)</option>
                    <option value="luxury" className="text-gray-900">Luxury (₹15+ Lakhs)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Medical Condition / Requirements</label>
                  <textarea
                    name="medicalCondition"
                    value={formData.medicalCondition}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Please describe your medical condition or treatment requirements..."
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Free Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Medical experts</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Free Medical Opinion</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Visa Assistance</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Hospital Booking</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Travel Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready for Your Medical Journey?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">Access world-class healthcare with our trusted medical tourism services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              View All Treatments
            </a>
            <a href="/for-individuals#sports-form" className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              See Individual Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
