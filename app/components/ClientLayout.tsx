"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirement: "",
    message: ""
  });
  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard") ?? false;

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM"
  ];

  const requirements = [
    "Tourist Visa",
    "Study Visa", 
    "Work Visa",
    "PR & Immigration",
    "Job Assistance",
    "Tour Packages",
    "Financial Products",
    "Corporate Mobility",
    "Inter-company Transfer",
    "Digital Nomad Visa",
    "Business Visa",
    "Family Sponsorship",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation booked:", { ...formData, date: selectedDate, time: selectedTime });
    setIsConsultationOpen(false);
    // Reset form
    setFormData({ name: "", email: "", phone: "", company: "", requirement: "", message: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/95 border-b border-dark-200 shadow-sm a-fade-up">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 sm:gap-3 pulse-ring">
              <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center font-bold text-sm sm:text-base float-soft shadow-lg">M</div>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tight text-dark-primary text-sm sm:text-base">Mitto</span>
                <span className="text-xs text-dark-muted hidden sm:inline-block">Mobility Powerhouse</span>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-6 text-sm">
              {!isDashboard ? (
                <>
                  <li><a href="/countries" className="hover:text-ocean-700 text-dark-muted link-underline">Countries</a></li>
                  <li><a href="/for-individuals" className="hover:text-ocean-700 text-dark-muted link-underline">For Individuals</a></li>
                  <li><a href="/for-business" className="hover:text-ocean-700 text-dark-muted link-underline">For Business</a></li>
                  <li><a href="/about" className="hover:text-ocean-700 text-dark-muted link-underline">About</a></li>
                  <li className="relative">
                    <button
                      type="button"
                      onClick={() => setIsMoreOpen((v) => !v)}
                      className="text-dark-muted hover:text-ocean-700 transition-colors"
                    >
                      More ▾
                    </button>
                    {isMoreOpen && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-[var(--mitto-gray-200)] p-2">
                        <a href="/job-assistance" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Job Assistance</a>
                        <a href="/tour-packages" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Tour Packages</a>
                        <a href="/inter-company-transfer" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Inter-company Transfer</a>
                        <a href="#resources" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Resources</a>
                        <a href="#pricing" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Pricing</a>
                        <a href="#faq" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">FAQ</a>
                        <a href="/login" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-[var(--mitto-primary-700)] hover:bg-[var(--mitto-primary-50)]">Login</a>
                      </div>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li><a href="/dashboard" className="hover:text-ocean-700 text-dark-muted link-underline">Overview</a></li>
                  <li><a href="/dashboard#cases" className="hover:text-ocean-700 text-dark-muted link-underline">Cases</a></li>
                  <li><a href="/dashboard#documents" className="hover:text-ocean-700 text-dark-muted link-underline">Documents</a></li>
                  <li><a href="/dashboard#chat" className="hover:text-ocean-700 text-dark-muted link-underline">Chat</a></li>
                  <li><a href="/dashboard#reports" className="hover:text-ocean-700 text-dark-muted link-underline">Reports</a></li>
                  <li><a href="/dashboard#settings" className="hover:text-ocean-700 text-dark-muted link-underline">Settings</a></li>
                  <li className="relative">
                    <button
                      type="button"
                      onClick={() => setIsMoreOpen((v) => !v)}
                      className="text-dark-muted hover:text-ocean-700 transition-colors"
                    >
                      More ▾
                    </button>
                    {isMoreOpen && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-[var(--mitto-gray-200)] p-2">
                        <a href="/countries" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Countries</a>
                        <a href="/job-assistance" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Job Assistance</a>
                        <a href="/tour-packages" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Tour Packages</a>
                        <a href="/inter-company-transfer" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">Inter-company Transfer</a>
                        <a href="/for-business" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">For Business</a>
                        <a href="/for-individuals" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">For Individuals</a>
                        <a href="/about" onClick={() => setIsMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-dark-secondary hover:bg-[var(--mitto-gray-50)]">About</a>
                      </div>
                    )}
                  </li>
                </>
              )}
            </ul>
            
            <div className="hidden md:flex items-center gap-3">
              <a href="/dashboard" className="hot-pink-btn">
                <span className="text-white">Track Application</span>
              </a>
              <a
                href="/login"
                className="rounded-full border-2 border-[var(--mitto-primary-600)] px-4 py-2 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                Login
              </a>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors relative z-50"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-40">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center font-bold text-sm">M</div>
                    <span className="font-semibold tracking-tight text-dark-primary text-sm">Mitto</span>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col gap-3 text-sm">
                  <li><a href="/for-individuals" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">For Individuals</a></li>
                  <li><a href="/job-assistance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Job Assistance</a></li>
                  <li><a href="/tour-packages" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Tour Packages</a></li>
                  <li><a href="/for-business" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">For Business</a></li>
                  <li><a href="/inter-company-transfer" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Inter-company Transfer</a></li>
                  <li><a href="/countries" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Countries</a></li>
                  <li><a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">About</a></li>
                  <li><a href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Resources</a></li>
                  <li><a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Pricing</a></li>
                  <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">FAQ</a></li>
                  <li><a href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Login</a></li>
                  <li><a href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-ocean-700 text-dark-muted transition-colors">Track Application</a></li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => setIsConsultationOpen(false)}
            />
            
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-gradient-to-r from-hot-pink-500 to-hot-pink-600 px-6 py-6 rounded-t-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">Talk to an Advisor</h3>
                  <p className="text-white text-sm font-medium drop-shadow">Book Your Free Consultation</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                          selectedTime === time
                            ? 'bg-hot-pink-500 text-white border-hot-pink-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-hot-pink-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Requirement *</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hot-pink-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select your requirement</option>
                    {requirements.map((req) => (
                      <option key={req} value={req}>
                        {req}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full hot-pink-btn py-3 text-base font-semibold"
                >
                  <span className="text-white">Book Free Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {children}

      <footer className="mt-20 border-t border-dark-200 bg-gradient-to-b from-white to-dark-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center font-bold">M</div>
                <div className="flex flex-col">
                  <span className="font-semibold tracking-tight text-dark-primary">Mitto</span>
                  <span className="text-xs text-dark-muted">Mobility Powerhouse</span>
                </div>
              </a>
              <p className="mt-4 text-sm text-dark-secondary">
                Human expertise + digital workflows across 12 countries and 4 continents.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-dark-secondary">
                <a href="#services" className="hover:text-ocean-700 transition-colors">Services</a>
                <a href="/for-individuals" className="hover:text-ocean-700 transition-colors">For Individuals</a>
                <a href="/for-business" className="hover:text-ocean-700 transition-colors">For Business</a>
                <a href="/countries" className="hover:text-ocean-700 transition-colors">Countries</a>
                <a href="/about" className="hover:text-ocean-700 transition-colors">About</a>
                <a href="#resources" className="hover:text-ocean-700 transition-colors">Resources</a>
                <a href="#pricing" className="hover:text-ocean-700 transition-colors">Pricing</a>
                <a href="#faq" className="hover:text-ocean-700 transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-dark-primary mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-dark-secondary">
                <li><a href="/for-individuals" className="hover:text-ocean-700 transition-colors">Tourist Visa</a></li>
                <li><a href="/for-individuals" className="hover:text-ocean-700 transition-colors">Study Visa</a></li>
                <li><a href="/for-individuals" className="hover:text-ocean-700 transition-colors">Work Visa</a></li>
                <li><a href="/for-individuals" className="hover:text-ocean-700 transition-colors">PR & Immigration</a></li>
                <li><a href="/for-individuals" className="hover:text-ocean-700 transition-colors">Job Assistance</a></li>
                <li><a href="/for-business" className="hover:text-ocean-700 transition-colors">Corporate Mobility</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-dark-primary mb-4">Countries</h4>
              <ul className="space-y-3 text-sm text-dark-secondary">
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">Canada</a></li>
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">Australia</a></li>
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">UK</a></li>
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">UAE</a></li>
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">Germany</a></li>
                <li><a href="/countries" className="hover:text-ocean-700 transition-colors">Singapore</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-dark-primary mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-dark-secondary">
                <li><a href="/about" className="hover:text-ocean-700 transition-colors">About Us</a></li>
                <li><a href="/blog" className="hover:text-ocean-700 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-ocean-700 transition-colors">Contact Us</a></li>
                <li><button onClick={() => setIsConsultationOpen(true)} className="hover:text-ocean-700 transition-colors text-left">Free Consultation</button></li>
                <li><a href="#faq" className="hover:text-ocean-700 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-200 text-center text-xs text-dark-muted">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>© {new Date().getFullYear()} Mitto. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>Powered by GoAnywr Mobility Powerhouse</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
