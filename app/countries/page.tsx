"use client";

import { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type Country =
  | "Canada"
  | "Australia"
  | "UAE"
  | "UK"
  | "Germany"
  | "France"
  | "Netherlands"
  | "Singapore"
  | "New Zealand"
  | "Turkey"
  | "Portugal"
  | "USA"
  | "India"
  | "Brazil"
  | "Japan"
  | "South Korea"
  | "China"
  | "South Africa"
  | "Mexico"
  | "Argentina"
  | "Egypt"
  | "Kenya"
  | "Nigeria"
  | "Russia"
  | "Spain"
  | "Italy"
  | "Poland"
  | "Sweden"
  | "Norway"
  | "Finland";

type CountryInfo = {
  visaRoutes: string[];
  jobsInDemand: string[];
  requirements: string[];
  timelines: string[];
  localPartner: string;
  flag: string;
  coordinates: { x: number; y: number };
};

const COUNTRY_DATA: Record<string, CountryInfo> = {
  Canada: {
    visaRoutes: ["Express Entry", "PGWP", "Work Permit (LMIA)", "Visitor Visa"],
    jobsInDemand: ["Software Engineer", "Nurse", "Construction Worker", "Truck Driver"],
    requirements: ["Language test (IELTS/CELPIP)", "ECA (for PR)", "Proof of funds (PR)", "Job offer (work visas)"],
    timelines: ["PR: 6–12 months", "Study Visa: 4–10 weeks", "Work Permit: 8–16 weeks"],
    localPartner: "Toronto, Vancouver",
    flag: "🇨🇦",
    coordinates: { x: 25, y: 30 },
  },
  "United States": {
    visaRoutes: ["H-1B", "L-1", "F-1 (Student)", "B-2 (Visitor)"],
    jobsInDemand: ["IT", "Healthcare", "Engineering", "Finance"],
    requirements: ["Employer sponsorship", "Cap lottery (H-1B)", "I-20 & funds (F-1)"],
    timelines: ["H-1B: annual cycle", "L-1: 2–8 weeks (varies)", "F-1: 4–8 weeks"],
    localPartner: "Bay Area, NYC, Austin",
    flag: "🇺🇸",
    coordinates: { x: 20, y: 35 },
  },
  Mexico: {
    visaRoutes: ["Visitor Visa", "Work Permit", "Student Visa"],
    jobsInDemand: ["Manufacturing", "Tourism", "IT", "Healthcare"],
    requirements: ["Valid passport", "Financial proof", "Job offer (work)"],
    timelines: ["Visitor: 1-2 weeks", "Work: 4-8 weeks", "Student: 3-6 weeks"],
    localPartner: "Mexico City, Guadalajara",
    flag: "🇲🇽",
    coordinates: { x: 18, y: 45 },
  },
  Brazil: {
    visaRoutes: ["Work Visa", "Student Visa", "Digital Nomad", "Tourist Visa"],
    jobsInDemand: ["IT", "Engineering", "Agriculture", "Healthcare"],
    requirements: ["Work permit", "Portuguese proficiency", "Background check"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks", "Digital Nomad: 2-4 weeks"],
    localPartner: "São Paulo, Rio de Janeiro",
    flag: "🇧🇷",
    coordinates: { x: 30, y: 65 },
  },
  Argentina: {
    visaRoutes: ["Work Visa", "Student Visa", "Retirement Visa"],
    jobsInDemand: ["Agriculture", "IT", "Tourism", "Energy"],
    requirements: ["Valid passport", "Financial proof", "Health insurance"],
    timelines: ["Work: 6-12 weeks", "Student: 4-8 weeks"],
    localPartner: "Buenos Aires, Córdoba",
    flag: "🇦🇷",
    coordinates: { x: 28, y: 75 },
  },
  UK: {
    visaRoutes: ["Skilled Worker", "Student Visa", "Global Talent", "Health and Care Worker"],
    jobsInDemand: ["Healthcare", "IT", "Engineering", "Finance"],
    requirements: ["Sponsorship (Skilled Worker)", "English test", "Funds (student)", "TB test (some countries)"],
    timelines: ["Skilled Worker: 3–8 weeks", "Student Visa: 3–6 weeks", "Global Talent: 4–12 weeks"],
    localPartner: "London, Manchester",
    flag: "🇬🇧",
    coordinates: { x: 48, y: 25 },
  },
  Germany: {
    visaRoutes: ["Job Seeker", "EU Blue Card", "Student Visa"],
    jobsInDemand: ["Engineering", "IT", "Healthcare", "Skilled Trades"],
    requirements: ["Qualifications recognition", "German/English proficiency", "Proof of funds"],
    timelines: ["Blue Card: 6–12 weeks", "Job Seeker: 4–10 weeks", "Student: 6–10 weeks"],
    localPartner: "Berlin, Munich",
    flag: "🇩🇪",
    coordinates: { x: 52, y: 27 },
  },
  France: {
    visaRoutes: ["Talent Passport", "Student Visa", "Work Permit"],
    jobsInDemand: ["Research", "IT", "Luxury/Retail", "Hospitality"],
    requirements: ["Employer sponsorship (work)", "Proof of funds (student)", "Insurance"],
    timelines: ["Talent Passport: 6–12 weeks", "Student: 4–8 weeks"],
    localPartner: "Paris, Lyon",
    flag: "🇫🇷",
    coordinates: { x: 49, y: 30 },
  },
  Spain: {
    visaRoutes: ["Work Visa", "Student Visa", "Digital Nomad", "Golden Visa"],
    jobsInDemand: ["Tourism", "IT", "Healthcare", "Construction"],
    requirements: ["Work permit", "Spanish proficiency", "Financial proof"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks", "Digital Nomad: 2-4 weeks"],
    localPartner: "Madrid, Barcelona",
    flag: "🇪🇸",
    coordinates: { x: 46, y: 32 },
  },
  Italy: {
    visaRoutes: ["Work Visa", "Student Visa", "Elective Residence Visa"],
    jobsInDemand: ["Fashion", "Manufacturing", "Tourism", "IT"],
    requirements: ["Work permit", "Italian proficiency", "Financial proof"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Rome, Milan",
    flag: "🇮🇹",
    coordinates: { x: 52, y: 32 },
  },
  Netherlands: {
    visaRoutes: ["Highly Skilled Migrant", "Orientation Year", "Student Visa"],
    jobsInDemand: ["IT", "Logistics", "Finance", "Engineering"],
    requirements: ["IND sponsor employer", "Degree requirements (orientation year)", "Funds"],
    timelines: ["HSM: 4–8 weeks", "Orientation Year: 4–8 weeks"],
    localPartner: "Amsterdam, Rotterdam",
    flag: "🇳🇱",
    coordinates: { x: 51, y: 24 },
  },
  Poland: {
    visaRoutes: ["Work Visa", "Student Visa", "EU Blue Card"],
    jobsInDemand: ["IT", "Manufacturing", "Logistics", "Healthcare"],
    requirements: ["Work permit", "Polish/English proficiency", "Job offer"],
    timelines: ["Work: 4-8 weeks", "Student: 4-6 weeks"],
    localPartner: "Warsaw, Kraków",
    flag: "🇵🇱",
    coordinates: { x: 54, y: 24 },
  },
  Sweden: {
    visaRoutes: ["Work Visa", "Student Visa", "EU Blue Card"],
    jobsInDemand: ["IT", "Engineering", "Healthcare", "Research"],
    requirements: ["Work permit", "English/Swedish proficiency", "Job offer"],
    timelines: ["Work: 4-8 weeks", "Student: 4-6 weeks"],
    localPartner: "Stockholm, Gothenburg",
    flag: "🇸🇪",
    coordinates: { x: 53, y: 18 },
  },
  Norway: {
    visaRoutes: ["Work Visa", "Student Visa", "Skilled Worker"],
    jobsInDemand: ["Energy", "Engineering", "Healthcare", "IT"],
    requirements: ["Work permit", "English/Norwegian proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-6 weeks"],
    localPartner: "Oslo, Bergen",
    flag: "🇳🇴",
    coordinates: { x: 52, y: 16 },
  },
  Finland: {
    visaRoutes: ["Work Visa", "Student Visa", "EU Blue Card"],
    jobsInDemand: ["IT", "Engineering", "Healthcare", "Gaming"],
    requirements: ["Work permit", "English/Finnish proficiency", "Job offer"],
    timelines: ["Work: 4-8 weeks", "Student: 4-6 weeks"],
    localPartner: "Helsinki, Espoo",
    flag: "🇫🇮",
    coordinates: { x: 55, y: 16 },
  },
  Russia: {
    visaRoutes: ["Work Visa", "Student Visa", "Business Visa"],
    jobsInDemand: ["Energy", "Engineering", "IT", "Manufacturing"],
    requirements: ["Work permit", "Russian proficiency", "Invitation letter"],
    timelines: ["Work: 8-12 weeks", "Student: 6-10 weeks"],
    localPartner: "Moscow, St. Petersburg",
    flag: "🇷🇺",
    coordinates: { x: 60, y: 20 },
  },
  China: {
    visaRoutes: ["Work Visa (Z)", "Student Visa (X)", "Business Visa (M)"],
    jobsInDemand: ["IT", "Engineering", "Finance", "Education"],
    requirements: ["Work permit", "Chinese proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Beijing, Shanghai",
    flag: "🇨🇳",
    coordinates: { x: 75, y: 35 },
  },
  Japan: {
    visaRoutes: ["Work Visa", "Student Visa", "Highly Skilled Professional"],
    jobsInDemand: ["IT", "Engineering", "Healthcare", "Finance"],
    requirements: ["Work permit", "Japanese/English proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Tokyo, Osaka",
    flag: "🇯🇵",
    coordinates: { x: 82, y: 32 },
  },
  "South Korea": {
    visaRoutes: ["Work Visa", "Student Visa", "Professional Visa"],
    jobsInDemand: ["IT", "Manufacturing", "Healthcare", "Education"],
    requirements: ["Work permit", "Korean/English proficiency", "Job offer"],
    timelines: ["Work: 4-8 weeks", "Student: 4-6 weeks"],
    localPartner: "Seoul, Busan",
    flag: "🇰🇷",
    coordinates: { x: 80, y: 34 },
  },
  India: {
    visaRoutes: ["Employment Visa", "Student Visa", "Business Visa"],
    jobsInDemand: ["IT", "Healthcare", "Engineering", "Finance"],
    requirements: ["Work permit", "English proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Mumbai, Delhi, Bangalore",
    flag: "🇮🇳",
    coordinates: { x: 68, y: 42 },
  },
  UAE: {
    visaRoutes: ["Employment Visa", "Golden Visa", "Tourist Visa"],
    jobsInDemand: ["Hospitality", "Sales", "Construction", "IT"],
    requirements: ["Employer sponsorship", "Medical test", "Background check"],
    timelines: ["Employment: 2–6 weeks", "Golden Visa: 4–8 weeks", "Tourist: 3–10 days"],
    localPartner: "Dubai, Abu Dhabi",
    flag: "🇦🇪",
    coordinates: { x: 58, y: 38 },
  },
  Turkey: {
    visaRoutes: ["Tourist Visa", "Work Permit", "Residence Permit"],
    jobsInDemand: ["Tourism", "Construction", "Education", "IT"],
    requirements: ["Employer sponsorship (work)", "Insurance", "Funds"],
    timelines: ["Tourist: 1–3 weeks", "Work Permit: 6–10 weeks"],
    localPartner: "Istanbul, Ankara",
    flag: "🇹🇷",
    coordinates: { x: 56, y: 32 },
  },
  Egypt: {
    visaRoutes: ["Work Visa", "Student Visa", "Tourist Visa"],
    jobsInDemand: ["Tourism", "IT", "Engineering", "Healthcare"],
    requirements: ["Work permit", "Arabic/English proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Cairo, Alexandria",
    flag: "🇪🇬",
    coordinates: { x: 54, y: 40 },
  },
  "South Africa": {
    visaRoutes: ["Work Visa", "Student Visa", "Critical Skills Visa"],
    jobsInDemand: ["IT", "Engineering", "Healthcare", "Finance"],
    requirements: ["Work permit", "English proficiency", "Job offer"],
    timelines: ["Work: 8-12 weeks", "Student: 6-10 weeks"],
    localPartner: "Johannesburg, Cape Town",
    flag: "🇿🇦",
    coordinates: { x: 52, y: 68 },
  },
  Kenya: {
    visaRoutes: ["Work Visa", "Student Visa", "Business Visa"],
    jobsInDemand: ["IT", "Agriculture", "Tourism", "Healthcare"],
    requirements: ["Work permit", "English proficiency", "Job offer"],
    timelines: ["Work: 6-10 weeks", "Student: 4-8 weeks"],
    localPartner: "Nairobi, Mombasa",
    flag: "🇰🇪",
    coordinates: { x: 54, y: 55 },
  },
  Nigeria: {
    visaRoutes: ["Work Visa", "Student Visa", "Business Visa"],
    jobsInDemand: ["IT", "Oil & Gas", "Finance", "Healthcare"],
    requirements: ["Work permit", "English proficiency", "Job offer"],
    timelines: ["Work: 8-12 weeks", "Student: 6-10 weeks"],
    localPartner: "Lagos, Abuja",
    flag: "🇳🇬",
    coordinates: { x: 48, y: 52 },
  },
  Singapore: {
    visaRoutes: ["Employment Pass", "S Pass", "Student Visa"],
    jobsInDemand: ["IT", "Finance", "Biotech", "Operations"],
    requirements: ["Employer application (EP/S Pass)", "Salary threshold", "Qualifications"],
    timelines: ["EP: 3–8 weeks", "S Pass: 3–8 weeks", "Student: 3–6 weeks"],
    localPartner: "Singapore",
    flag: "🇸🇬",
    coordinates: { x: 72, y: 50 },
  },
  Australia: {
    visaRoutes: ["Skilled Independent (189)", "Skilled Nominated (190)", "Student Visa", "TSS (482)"],
    jobsInDemand: ["Engineer", "Healthcare", "Trades", "IT"],
    requirements: ["Skills assessment", "English test (IELTS/PTE)", "Points test", "Health & character"],
    timelines: ["PR: 8–14 months", "Student Visa: 4–8 weeks", "TSS: 6–12 weeks"],
    localPartner: "Sydney, Melbourne",
    flag: "🇦🇺",
    coordinates: { x: 80, y: 70 },
  },
  "New Zealand": {
    visaRoutes: ["Skilled Migrant", "Accredited Employer Work Visa", "Student Visa"],
    jobsInDemand: ["Healthcare", "Trades", "IT", "Agriculture"],
    requirements: ["Points (SMC)", "Accredited employer offer", "English test"],
    timelines: ["AEWV: 4–8 weeks", "Student: 4–8 weeks", "SMC: 6–12+ months"],
    localPartner: "Auckland, Wellington",
    flag: "🇳🇿",
    coordinates: { x: 85, y: 75 },
  },
  Portugal: {
    visaRoutes: ["D7", "Digital Nomad", "Work Visa", "Student Visa"],
    jobsInDemand: ["Tourism", "IT", "Construction", "Shared Services"],
    requirements: ["Income/funds (D7/Nomad)", "Job offer (work)", "Insurance"],
    timelines: ["D7/Nomad: 6–12 weeks", "Work: 6–12 weeks", "Student: 4–8 weeks"],
    localPartner: "Lisbon, Porto",
    flag: "🇵🇹",
    coordinates: { x: 47, y: 34 },
  },
};

export default function CountriesPage(): JSX.Element {
  const countries = Object.keys(COUNTRY_DATA) as Country[];
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale(prev => Math.min(Math.max(prev + delta, 0.5), 3));
      }
    };

    const svg = svgRef.current;
    if (svg) {
      svg.addEventListener('wheel', handleWheel, { passive: false });
      return () => svg.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Operating Countries</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Explore visa routes, in-demand jobs, requirements, timelines, and our local partner presence across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive World Map Section */}
      <section className="relative bg-gradient-to-b from-amber-50 via-blue-50 to-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-slate-900">
              Global Presence. Local Expertise.
            </h2>
            <p className="text-sm text-slate-700 mb-2">
              Operating across 12+ countries and 4 continents.
            </p>
            <p className="text-sm text-slate-600">
              Use mouse wheel + Ctrl to zoom, or touch gestures on mobile
            </p>
          </div>
          
          {/* Zoom Controls */}
          <div className="flex justify-center mb-4 gap-2">
            <button
              onClick={handleZoomIn}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
              <span className="text-sm">Zoom In</span>
            </button>
            <button
              onClick={handleZoomOut}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
              <span className="text-sm">Zoom Out</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm">Reset</span>
            </button>
          </div>
          
          <div className="relative bg-gradient-to-br from-amber-100/20 via-blue-100/10 to-slate-100/20 rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-200/50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
            
            <div 
              className="relative overflow-hidden cursor-move"
              style={{ height: '600px' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <svg
                ref={svgRef}
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: 'center',
                  transition: isDragging ? 'none' : 'transform 0.3s ease',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
              >
                <defs>
                  {/* Ocean gradient */}
                  <radialGradient id="oceanGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.2"/>
                  </radialGradient>
                  
                  {/* Land gradient */}
                  <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0fdf4" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="#dcfce7" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.7"/>
                  </linearGradient>
                  
                  {/* Shadow filter */}
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.2"/>
                  </filter>
                </defs>
                
                {/* Ocean background */}
                <rect width="100" height="100" fill="url(#oceanGrad)"/>
                
                {/* Traditional world map continents */}
                <g fill="url(#landGrad)" stroke="#86efac" strokeWidth="0.3" filter="url(#shadow)">
                  {/* North America */}
                  <path d="M 8 15 Q 12 12, 18 13 L 25 15 L 30 18 L 32 22 L 30 28 L 28 32 L 25 35 L 20 37 L 15 36 L 12 33 L 10 28 L 8 22 Z" />
                  
                  {/* South America */}
                  <path d="M 22 40 L 25 42 L 26 48 L 25 55 L 23 62 L 20 65 L 18 60 L 19 52 L 20 45 Z" />
                  
                  {/* Europe */}
                  <path d="M 44 18 L 48 17 L 52 18 L 55 20 L 56 23 L 55 26 L 52 28 L 48 27 L 45 25 L 44 22 Z" />
                  
                  {/* Africa */}
                  <path d="M 45 30 L 48 31 L 51 33 L 52 37 L 51 42 L 49 47 L 46 50 L 43 48 L 42 43 L 43 38 L 44 34 Z" />
                  
                  {/* Asia */}
                  <path d="M 56 15 L 65 14 L 75 15 L 82 18 L 88 22 L 90 28 L 88 35 L 85 40 L 80 42 L 75 43 L 70 42 L 65 40 L 60 35 L 58 28 L 56 22 Z" />
                  
                  {/* Australia */}
                  <path d="M 72 58 L 78 57 L 84 58 L 88 61 L 89 65 L 87 69 L 83 71 L 78 70 L 74 68 L 72 64 Z" />
                  
                  {/* Additional land masses */}
                  <path d="M 35 25 L 38 24 L 40 26 L 39 28 L 36 29 L 34 27 Z" /> {/* Greenland */}
                  <path d="M 90 35 L 92 34 L 94 36 L 93 38 L 91 37 Z" /> {/* Japan */}
                  <path d="M 88 42 L 90 41 L 92 43 L 91 45 L 89 44 Z" /> {/* More Japan */}
                  <path d="M 68 48 L 70 47 L 72 49 L 71 51 L 69 50 Z" /> {/* Southeast Asia islands */}
                  <path d="M 66 52 L 68 51 L 70 53 L 69 55 L 67 54 Z" /> {/* More islands */}
                </g>
                
                {/* Geographic details - rivers, mountains etc */}
                <g stroke="#94a3b8" strokeWidth="0.1" fill="none" opacity="0.4">
                  {/* Major rivers */}
                  <path d="M 25 20 Q 28 25, 30 30" />
                  <path d="M 48 35 Q 50 40, 52 45" />
                  <path d="M 70 25 Q 72 30, 75 35" />
                </g>
                
                {/* Country Pins */}
                {countries.map((country) => {
                  const data = COUNTRY_DATA[country];
                  const countryId = country.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <g key={country}>
                      <a href={`#${countryId}`}>
                        {/* Pin shadow */}
                        <circle
                          cx={data.coordinates.x}
                          cy={data.coordinates.y}
                          r="2.5"
                          fill="rgba(0,0,0,0.15)"
                        />
                        
                        {/* Outer glow when hovered */}
                        {hoveredCountry === countryId && (
                          <circle
                            cx={data.coordinates.x}
                            cy={data.coordinates.y}
                            r="4"
                            fill="#ef4444"
                            opacity="0.3"
                          >
                            <animate
                              attributeName="r"
                              values="4;6;4"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.3;0.1;0.3"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                        
                        {/* Main pin */}
                        <circle
                          cx={data.coordinates.x}
                          cy={data.coordinates.y}
                          r="2"
                          fill="#ffffff"
                          stroke="#dc2626"
                          strokeWidth="0.5"
                          className="hover:fill-red-50 transition-colors cursor-pointer"
                        />
                        
                        {/* Country flag */}
                        <text
                          x={data.coordinates.x}
                          y={data.coordinates.y + 0.5}
                          textAnchor="middle"
                          fontSize="3"
                          className="pointer-events-none select-none"
                          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
                        >
                          {data.flag}
                        </text>
                        
                        {/* Pulse animation */}
                        <circle
                          cx={data.coordinates.x}
                          cy={data.coordinates.y}
                          r="2"
                          fill="none"
                          stroke="#dc2626"
                          strokeWidth="0.3"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            values="2;4;2"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.5;0.1;0.5"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Country name tooltip on hover */}
                        {hoveredCountry === countryId && (
                          <g>
                            <rect
                              x={data.coordinates.x - 15}
                              y={data.coordinates.y - 10}
                              width="30"
                              height="8"
                              rx="4"
                              fill="#1e293b"
                              opacity="0.95"
                            />
                            <text
                              x={data.coordinates.x}
                              y={data.coordinates.y - 4}
                              textAnchor="middle"
                              fontSize="3"
                              fill="white"
                              fontWeight="600"
                            >
                              {country.length > 10 ? country.substring(0, 10) + '...' : country}
                            </text>
                          </g>
                        )}
                      </a>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-200">
              <div className="text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-white border-2 border-red-600"></div>
                  <span className="text-slate-700">Operating Country</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-200 border border-green-400"></div>
                  <span className="text-slate-700">Land Mass</span>
                </div>
                <div className="text-slate-500">🖱️ Click to explore • 🎮 Ctrl+Scroll to zoom</div>
              </div>
            </div>
            
            {/* Scale indicator */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-slate-200">
              <div className="text-xs text-slate-600">
                Scale: {Math.round(scale * 100)}%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Details Sections */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-16">
          {countries.map((name) => {
            const info = COUNTRY_DATA[name];
            const sectionId = name.toLowerCase().replace(/\s+/g, '-');
            return (
              <article
                key={name}
                id={sectionId}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{info.flag}</span>
                    <h2 className="text-2xl font-semibold text-slate-900">{name}</h2>
                  </div>
                  <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center text-xs">↗</span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 grid place-items-center text-xs">✈️</span>
                        Visa Routes
                      </h3>
                      <ul className="space-y-2">
                        {info.visaRoutes.map((v) => (
                          <li key={`${name}-visa-${v}`} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-[10px]">✓</span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center text-xs">💼</span>
                        Jobs in Demand
                      </h3>
                      <ul className="space-y-2">
                        {info.jobsInDemand.map((j) => (
                          <li key={`${name}-job-${j}`} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="h-5 w-5 rounded-full bg-emerald-600 text-white grid place-items-center text-[10px]">✓</span>
                            {j}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center text-xs">📋</span>
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {info.requirements.map((r) => (
                          <li key={`${name}-req-${r}`} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="h-5 w-5 rounded-full bg-indigo-600 text-white grid place-items-center text-[10px]">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 grid place-items-center text-xs">⏱️</span>
                        Typical Timelines
                      </h3>
                      <ul className="space-y-2">
                        {info.timelines.map((t) => (
                          <li key={`${name}-time-${t}`} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="h-5 w-5 rounded-full bg-amber-600 text-white grid place-items-center text-[10px]">✓</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs">📍</span>
                    <span className="font-medium text-slate-900">Local partner presence:</span>
                    <span className="text-slate-700">{info.localPartner}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="/login" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                    Get Started with {name}
                  </a>
                  <a href="#consult" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                    Free Consultation
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
