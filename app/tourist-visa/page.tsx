"use client";

import { useState, useMemo, useEffect, useRef } from "react";

type VisaType =
  | "standard"
  | "express"
  | "premium"
  | "super-express"
  | "regular"
  | "priority"
  | "urgent";

// Add fee model to include "Atlys-like" service fee in totals
type KnownVisaType = "standard" | "express" | "premium" | "super-express";
const DEFAULT_SERVICE_FEE_INR = 1499;

const SERVICE_FEE_INR: Partial<Record<KnownVisaType, number>> = {
  standard: 999,
  express: 1999,
  premium: 3499,
  "super-express": 4999,
};

const getServiceFee = (visaType: string): number => {
  const key = visaType as KnownVisaType;
  return SERVICE_FEE_INR[key] ?? DEFAULT_SERVICE_FEE_INR;
};

interface Country {
  code: string;
  name: string;
  flag: string;
  visaTypes: {
    type: VisaType;
    label: string;
    tat: string; // Turnaround Time
    price: number;
    description: string;
    popular?: boolean;
  }[];
  requirements: string[];
  documents: string[];
  visaFree?: boolean;
  etaAvailable?: boolean;
}

const COUNTRIES: Country[] = [
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    visaTypes: [
      { type: "standard", label: "Standard Processing", tat: "15-20 business days", price: 14999, description: "Regular visa processing", popular: true },
      { type: "express", label: "Express Processing", tat: "7-10 business days", price: 22999, description: "Fast-track processing" },
    ],
    requirements: ["Valid passport (6 months validity)", "Recent passport-size photograph", "Bank statements (last 6 months)", "Employment proof", "Travel itinerary"],
    documents: ["Passport copy", "Digital photograph", "Bank statement", "Salary slips/employment letter", "Hotel bookings", "Flight tickets"],
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    visaTypes: [
      { type: "standard", label: "Standard Visitor Visa", tat: "15-25 business days", price: 11999, description: "Standard visitor visa", popular: true },
      { type: "priority", label: "Priority Service", tat: "5-7 business days", price: 24999, description: "Priority processing" },
    ],
    requirements: ["Valid passport", "Travel itinerary", "Financial proof", "Accommodation details", "Employment proof"],
    documents: ["Passport", "Detailed itinerary", "Bank statements (6 months)", "Hotel confirmation", "Employment letter"],
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    visaTypes: [
      { type: "standard", label: "Regular Processing", tat: "20-30 business days", price: 8999, description: "Standard visitor visa", popular: true },
      { type: "express", label: "Express Processing", tat: "10-15 business days", price: 16999, description: "Fast-track service" },
    ],
    requirements: ["Valid passport", "Purpose of visit", "Financial support proof", "Ties to home country", "Travel history"],
    documents: ["Passport copy", "Invitation letter (if applicable)", "Bank statements", "Property documents", "Previous visas"],
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    visaTypes: [
      { type: "standard", label: "Standard Visitor Visa", tat: "20-35 business days", price: 10999, description: "Standard processing", popular: true },
      { type: "priority", label: "Priority Processing", tat: "10-15 business days", price: 19999, description: "Priority service" },
    ],
    requirements: ["Valid passport", "Health insurance", "Financial proof", "Character certificate", "Genuine visitor intention"],
    documents: ["Passport", "Overseas health insurance", "Bank statements", "Police clearance", "Employment letter"],
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    visaTypes: [
      { type: "standard", label: "Standard Processing", tat: "3-5 business days", price: 4999, description: "Standard visitor visa", popular: true },
      { type: "express", label: "Express Processing", tat: "1-2 business days", price: 8999, description: "Fast processing" },
    ],
    requirements: ["Valid passport", "Hotel booking", "Return tickets", "Financial proof", "Disembarkation card"],
    documents: ["Passport copy", "Hotel confirmation", "Flight tickets", "Bank statement", "Completed visa form"],
  },
  {
    code: "AE",
    name: "UAE",
    flag: "🇦🇪",
    visaTypes: [
      { type: "standard", label: "Standard Visa", tat: "4-6 business days", price: 6999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Visa", tat: "2-3 business days", price: 10999, description: "Express processing" },
      { type: "urgent", label: "Urgent Visa", tat: "24-48 hours", price: 15999, description: "Urgent processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo (white background)", "Hotel voucher", "Flight tickets"],
  },
  {
    code: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    visaTypes: [
      { type: "standard", label: "Standard Tourist Visa", tat: "5-7 business days", price: 3999, description: "Standard processing", popular: true },
      { type: "express", label: "Express Visa", tat: "2-3 business days", price: 6999, description: "Fast processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Financial proof", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Bank statement", "Flight tickets"],
  },
  {
    code: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    visaTypes: [
      { type: "standard", label: "Standard eVisa", tat: "3-5 business days", price: 2999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express eVisa", tat: "1-2 business days", price: 5999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Flight tickets", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Flight confirmation", "Hotel booking"],
  },
  {
    code: "JP",
    name: "Japan",
    flag: "🇯🇵",
    visaTypes: [
      { type: "standard", label: "Standard Processing", tat: "5-7 business days", price: 7999, description: "Standard visitor visa", popular: true },
      { type: "express", label: "Express Processing", tat: "3-4 business days", price: 12999, description: "Fast processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Detailed itinerary", "Financial proof", "Employment proof"],
    documents: ["Passport copy", "Photo", "Daily itinerary", "Bank statements", "Employment letter"],
  },
  {
    code: "KR",
    name: "South Korea",
    flag: "🇰🇷",
    visaTypes: [
      { type: "standard", label: "Standard Visa", tat: "7-10 business days", price: 6999, description: "Standard processing", popular: true },
      { type: "express", label: "Express Visa", tat: "3-5 business days", price: 10999, description: "Fast processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Itinerary", "Financial proof", "Employment proof"],
    documents: ["Passport copy", "Photo", "Travel plan", "Bank statement", "Employment certificate"],
  },
  {
    code: "FR",
    name: "France (Schengen)",
    flag: "🇫🇷",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Accommodation proof"],
    documents: ["Passport copy", "Travel insurance", "Detailed itinerary", "Bank statements", "Hotel bookings"],
  },
  {
    code: "DE",
    name: "Germany (Schengen)",
    flag: "🇩🇪",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Travel medical insurance"],
    documents: ["Passport copy", "Insurance", "Travel plan", "Bank statements", "Medical insurance"],
  },
  {
    code: "IT",
    name: "Italy (Schengen)",
    flag: "🇮🇹",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Accommodation details"],
    documents: ["Passport copy", "Insurance", "Travel plan", "Bank statements", "Hotel confirmation"],
  },
  {
    code: "ES",
    name: "Spain (Schengen)",
    flag: "🇪🇸",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Hotel reservations"],
    documents: ["Passport copy", "Insurance", "Travel plan", "Bank statements", "Hotel bookings"],
  },
  {
    code: "NL",
    name: "Netherlands (Schengen)",
    flag: "🇳🇱",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Accommodation proof"],
    documents: ["Passport copy", "Insurance", "Travel plan", "Bank statements", "Hotel bookings"],
  },
  {
    code: "CH",
    name: "Switzerland (Schengen)",
    flag: "🇨🇭",
    visaTypes: [
      { type: "standard", label: "Standard Schengen", tat: "15-20 business days", price: 8999, description: "Standard Schengen visa", popular: true },
      { type: "express", label: "Express Schengen", tat: "7-10 business days", price: 15999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Travel insurance", "Itinerary", "Financial proof", "Medical insurance"],
    documents: ["Passport copy", "Insurance", "Travel plan", "Bank statements", "Medical insurance"],
  },
  {
    code: "TR",
    name: "Turkey",
    flag: "🇹🇷",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "24-48 hours", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "2-4 hours", price: 7999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Return tickets"],
    documents: ["Passport copy", "Photo", "Travel plan", "Flight tickets"],
  },
  {
    code: "EG",
    name: "Egypt",
    flag: "🇪🇬",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 5999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "1-2 business days", price: 9999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Travel itinerary"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Travel plan"],
  },
  {
    code: "ID",
    name: "Indonesia",
    flag: "🇮🇩",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "4-6 business days", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "2-3 business days", price: 8999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "VN",
    name: "Vietnam",
    flag: "🇻🇳",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 3999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "1-2 business days", price: 6999, description: "Express e-visa" },
      { type: "urgent", label: "Urgent e-Visa", tat: "4-8 hours", price: 10999, description: "Urgent processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Entry/exit points"],
    documents: ["Passport copy", "Photo", "Travel plan", "Airport details"],
  },
  {
    code: "LK",
    name: "Sri Lanka",
    flag: "🇱🇰",
    visaTypes: [
      { type: "standard", label: "Standard ETA", tat: "24-48 hours", price: 2999, description: "Standard electronic travel authorization", popular: true },
      { type: "express", label: "Express ETA", tat: "2-4 hours", price: 4999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Return tickets"],
    documents: ["Passport copy", "Photo", "Travel plan", "Flight tickets"],
    etaAvailable: true,
  },
  {
    code: "MM",
    name: "Myanmar",
    flag: "🇲🇲",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "1-2 business days", price: 7999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Hotel confirmation"],
  },
  {
    code: "KH",
    name: "Cambodia",
    flag: "🇰🇭",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-4 business days", price: 3999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "24 hours", price: 6999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Entry point"],
    documents: ["Passport copy", "Photo", "Travel plan", "Port of entry"],
  },
  {
    code: "LA",
    name: "Laos",
    flag: "🇱🇦",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "1-2 business days", price: 7999, description: "Express e-visa" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Entry point"],
    documents: ["Passport copy", "Photo", "Travel plan", "Port of entry"],
  },
  {
    code: "NP",
    name: "Nepal",
    flag: "🇳🇵",
    visaTypes: [
      { type: "standard", label: "Standard Tourist Visa", tat: "24-48 hours", price: 2999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Processing", tat: "Same day", price: 4999, description: "Same day processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Entry point"],
    documents: ["Passport copy", "Photo", "Travel plan", "Airport details"],
  },
  {
    code: "BT",
    name: "Bhutan",
    flag: "🇧🇹",
    visaTypes: [
      { type: "standard", label: "Standard Visa", tat: "5-7 business days", price: 8999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Visa", tat: "2-3 business days", price: 12999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel dates", "Tour booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Tour confirmation"],
  },
  {
    code: "MV",
    name: "Maldives",
    flag: "🇲🇻",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 30-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Hotel booking", "Return tickets", "Sufficient funds"],
    documents: ["Passport", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "SC",
    name: "Seychelles",
    flag: "🇸🇨",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visitor's Permit", tat: "Immediate", price: 0, description: "Free visitor permit on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Accommodation proof", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel booking"],
  },
  {
    code: "MU",
    name: "Mauritius",
    flag: "🇲🇺",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 90-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Accommodation proof", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel booking"],
  },
  {
    code: "FJ",
    name: "Fiji",
    flag: "🇫🇯",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visitor Visa", tat: "Immediate", price: 0, description: "Free 4-month visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Accommodation proof", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel booking"],
  },
  {
    code: "QA",
    name: "Qatar",
    flag: "🇶🇦",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 30-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "OM",
    name: "Oman",
    flag: "🇴🇲",
    visaTypes: [
      { type: "standard", label: "Standard Visa", tat: "3-5 business days", price: 5999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Visa", tat: "24-48 hours", price: 9999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "BH",
    name: "Bahrain",
    flag: "🇧🇭",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "24-48 hours", price: 7999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "KW",
    name: "Kuwait",
    flag: "🇰🇼",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "5-7 business days", price: 6999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "2-3 business days", price: 10999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    visaTypes: [
      { type: "standard", label: "Standard Tourist Visa", tat: "5-7 business days", price: 7999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Tourist Visa", tat: "24-48 hours", price: 12999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Hotel booking", "Return tickets"],
    documents: ["Passport copy", "Photo", "Hotel confirmation", "Flight tickets"],
  },
  {
    code: "JO",
    name: "Jordan",
    flag: "🇯🇴",
    visaTypes: [
      { type: "standard", label: "Standard Visa", tat: "3-5 business days", price: 5999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Visa", tat: "24-48 hours", price: 9999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Hotel confirmation"],
  },
  {
    code: "IL",
    name: "Israel",
    flag: "🇮🇱",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 3-month visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "KE",
    name: "Kenya",
    flag: "🇰🇪",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "2-3 business days", price: 4999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "24 hours", price: 7999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Hotel confirmation"],
  },
  {
    code: "TZ",
    name: "Tanzania",
    flag: "🇹🇿",
    visaTypes: [
      { type: "standard", label: "Standard e-Visa", tat: "3-5 business days", price: 5999, description: "Standard e-visa", popular: true },
      { type: "express", label: "Express e-Visa", tat: "1-2 business days", price: 9999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Hotel confirmation"],
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: "🇿🇦",
    visaTypes: [
      { type: "standard", label: "Standard Visitor Visa", tat: "10-15 business days", price: 8999, description: "Standard visitor visa", popular: true },
      { type: "express", label: "Express Visitor Visa", tat: "5-7 business days", price: 14999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Financial proof", "Yellow fever certificate"],
    documents: ["Passport copy", "Photo", "Travel plan", "Bank statements", "Vaccination certificate"],
  },
  {
    code: "MA",
    name: "Morocco",
    flag: "🇲🇦",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 90-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "TN",
    name: "Tunisia",
    flag: "🇹🇳",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 90-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "RU",
    name: "Russia",
    flag: "🇷🇺",
    visaTypes: [
      { type: "standard", label: "Standard Tourist Visa", tat: "15-20 business days", price: 9999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Tourist Visa", tat: "7-10 business days", price: 16999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Invitation letter", "Travel itinerary", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Invitation letter", "Travel plan", "Hotel confirmation"],
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "🇧🇷",
    visaTypes: [
      { type: "standard", label: "Standard Tourist Visa", tat: "15-20 business days", price: 10999, description: "Standard tourist visa", popular: true },
      { type: "express", label: "Express Tourist Visa", tat: "7-10 business days", price: 18999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Financial proof", "Hotel booking"],
    documents: ["Passport copy", "Photo", "Travel plan", "Bank statements", "Hotel confirmation"],
  },
  {
    code: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 90-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "MX",
    name: "Mexico",
    flag: "🇲🇽",
    visaFree: true,
    visaTypes: [
      { type: "standard", label: "Visa on Arrival", tat: "Immediate", price: 0, description: "Free 180-day visa on arrival", popular: true },
    ],
    requirements: ["Valid passport", "Return tickets", "Hotel booking", "Sufficient funds"],
    documents: ["Passport", "Flight tickets", "Hotel confirmation"],
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    visaTypes: [
      { type: "standard", label: "Standard Visitor Visa", tat: "20-30 business days", price: 9999, description: "Standard visitor visa", popular: true },
      { type: "express", label: "Express Visitor Visa", tat: "10-15 business days", price: 17999, description: "Express processing" },
    ],
    requirements: ["Valid passport", "Photograph", "Travel itinerary", "Financial proof", "Return tickets"],
    documents: ["Passport copy", "Photo", "Travel plan", "Bank statements", "Flight tickets"],
  },
];

export default function TouristVisaPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | null>(null);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [isGroupApplication, setIsGroupApplication] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(30);
  const [isCountryListOpen, setIsCountryListOpen] = useState<boolean>(true);

  const countryListRef = useRef<HTMLDivElement | null>(null);
  const visaTypeRef = useRef<HTMLDivElement | null>(null);

  type Step = 1 | 2 | 3 | 4 | 5;
  const [step, setStep] = useState<Step>(1);

  useEffect(() => {
    if (selectedCountry) {
      setSearchQuery(`${selectedCountry.flag} ${selectedCountry.name}`);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("touristFlow") : null;
    if (saved) {
      try {
        const data = JSON.parse(saved) as {
          selectedCountryCode?: string | null;
          selectedVisaType?: VisaType | null;
          isGroupApplication?: boolean;
        };
        if (data.selectedCountryCode) {
          const found = COUNTRIES.find((c) => c.code === data.selectedCountryCode) || null;
          if (found) {
            setSelectedCountry(found);
            setStep(2);
          }
        }
        if (data.selectedVisaType) {
          setSelectedVisaType(data.selectedVisaType);
          setStep(3);
        }
        if (typeof data.isGroupApplication === "boolean") {
          setIsGroupApplication(data.isGroupApplication);
        }
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "touristFlow",
        JSON.stringify({
          selectedCountryCode: selectedCountry?.code ?? null,
          selectedVisaType,
          isGroupApplication,
        })
      );
    }
  }, [selectedCountry, selectedVisaType, isGroupApplication]);

  useEffect(() => {
    if (!isCountryListOpen && step === 2 && visaTypeRef.current) {
      visaTypeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isCountryListOpen, step]);

  const goToNextStep = (): void => {
    if (step === 1 && selectedCountry) setStep(2);
    else if (step === 2 && selectedVisaType) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep(5);
  };

  const goToPrevStep = (): void => {
    setStep((prev) => {
      const next = prev - 1;
      return (next < 1 ? 1 : next) as Step;
    });
  };

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return COUNTRIES;
    const query = searchQuery.toLowerCase();
    return COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const selectedVisa = useMemo(() => {
    if (!selectedCountry || !selectedVisaType) return null;
    return selectedCountry.visaTypes.find((v) => v.type === selectedVisaType) || null;
  }, [selectedCountry, selectedVisaType]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const calculateGroupPrice = () => {
    if (!selectedVisa) return 0;
    const basePrice = selectedVisa.price;
    const serviceFee = getServiceFee(selectedVisa.type);
    const groupSize = isGroupApplication ? 5 : 1; // Default group size of 5 for demo
    const discount = isGroupApplication ? 0.1 : 0; // 10% discount for groups
    return (basePrice + serviceFee) * groupSize * (1 - discount);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Travel Visas from India</h1>
            <p className="text-xl text-blue-100">Fast, easy, and secure visa applications for 100+ destinations</p>
          </div>
        </div>
      </section>

      {/* Stepper - Clean workflow inspired by Visa2Fly */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <ol className="grid grid-cols-5 gap-2 text-sm">
            {[
              { n: 1, label: "Country" },
              { n: 2, label: "Visa Type" },
              { n: 3, label: "Application" },
              { n: 4, label: "Details" },
              { n: 5, label: "Review" },
            ].map((s) => (
              <li
                key={s.n}
                className={`flex items-center justify-center rounded-lg px-3 py-2 ${
                  step >= (s.n as Step)
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "bg-gray-50 text-gray-600 border border-gray-200"
                }`}
              >
                <span className="font-medium">{s.n}.</span>
                <span className="ml-2">{s.label}</span>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={goToPrevStep}
              disabled={step === 1}
              className="text-sm font-medium text-blue-600 disabled:text-gray-400"
            >
              Back
            </button>
            <button
              onClick={goToNextStep}
              className="text-sm font-medium text-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your destination country..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(30);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const first = filteredCountries[0];
                  if (first) {
                    setSelectedCountry(first);
                    setSelectedVisaType(null);
                    setIsGroupApplication(false);
                    setUploadedFiles([]);
                    setIsCountryListOpen(false);
                    setStep(2);
                    (e.currentTarget as HTMLInputElement).blur();
                  }
                }
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-3.5 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Efficient scrollable list of all countries (replaces Popular Destinations section) */}
          {isCountryListOpen && (
            <div
              ref={countryListRef}
              className="mt-6 max-h-[480px] overflow-y-auto rounded-lg border border-gray-200"
              onScroll={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 50;
                if (nearBottom) {
                  setVisibleCount((prev) => Math.min(prev + 30, filteredCountries.length));
                }
              }}
            >
              <ul className="divide-y divide-gray-100">
                {filteredCountries.slice(0, visibleCount).map((country) => (
                  <li
                    key={country.code}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedCountry?.code === country.code ? "bg-blue-50" : ""
                    }`}
                    onClick={() => {
                      setSelectedCountry(country);
                      setSelectedVisaType(null);
                      setIsGroupApplication(false);
                      setUploadedFiles([]);
                      setIsCountryListOpen(false);
                      setStep(2);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{country.name}</div>
                        <div className="text-xs text-gray-500">
                          {country.visaFree ? "Visa-free" : `${country.visaTypes.length} visa options`}
                        </div>
                      </div>
                      {country.visaFree && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Visa Free
                        </span>
                      )}
                      {country.etaAvailable && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          ETA
                        </span>
                      )}
                    </div>
                  </li>
                ))}
                {filteredCountries.length === 0 && (
                  <li className="p-4 text-sm text-gray-600">No countries found</li>
                )}
              </ul>
            </div>
          )}

          {!isCountryListOpen && selectedCountry && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsCountryListOpen(true);
                  setStep(1);
                  setSelectedVisaType(null);
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Change country
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Visa Type Selection */}
      {selectedCountry && !selectedCountry.visaFree && (
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div ref={visaTypeRef} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Select Visa Type for {selectedCountry.name}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {selectedCountry.visaTypes.map((visa) => (
                <div
                  key={visa.type}
                  onClick={() => {
                    setSelectedVisaType(visa.type);
                    setStep(3);
                  }}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedVisaType === visa.type
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{visa.label}</h3>
                      <p className="text-sm text-gray-600 mt-1">{visa.description}</p>
                    </div>
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      {selectedVisaType === visa.type && (
                        <div className="h-3 w-3 rounded-full bg-blue-600" />
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Processing time</span>
                      <span className="font-medium text-gray-900">{visa.tat}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      <span className="font-bold text-lg text-blue-600">
                        {visa.price === 0 ? "Free" : `₹${visa.price.toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                  {visa.popular && (
                    <div className="mt-3">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visa Details */}
      {selectedVisa && selectedCountry && (
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-3">
                {selectedCountry.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-3">
                {selectedCountry.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Application Type Selection */}
      {selectedVisa && selectedCountry && (
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Type</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div
                onClick={() => {
                  setIsGroupApplication(false);
                  setStep(4);
                }}
                className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                  !isGroupApplication
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5">
                    {!isGroupApplication && (
                      <div className="h-3 w-3 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Individual Application</h4>
                    <p className="text-sm text-gray-600 mt-1">Apply for a single applicant</p>
                    <div className="mt-2">
                      <span className="font-bold text-lg text-blue-600">
                        {selectedVisa.price === 0 ? "Free" : `₹${(selectedVisa.price + getServiceFee(selectedVisa.type)).toLocaleString()}`}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  setIsGroupApplication(true);
                  setStep(4);
                }}
                className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                  isGroupApplication
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5">
                    {isGroupApplication && (
                      <div className="h-3 w-3 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Group Application</h4>
                    <p className="text-sm text-gray-600 mt-1">Apply for 5+ applicants and save 10%</p>
                    <div className="mt-2">
                      <span className="font-bold text-lg text-blue-600">
                        {selectedVisa.price === 0 ? "Free" : `₹${Math.round((selectedVisa.price + getServiceFee(selectedVisa.type)) * 5 * 0.9).toLocaleString()}`}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">for 5 applicants</span>
                      <div className="text-xs text-green-600 mt-1">Save 10% with group discount</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Application Form */}
      {selectedVisa && selectedCountry && (
        <section className="mx-auto max-w-7xl px-6 pb-12">
          {/* Sticky summary bar for clarity */}
          <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
            <div className="text-sm text-blue-800">
              <span className="font-semibold">{selectedCountry.name}</span> • {selectedVisa.label} • {selectedVisa.tat}
            </div>
            <div className="text-blue-700 font-bold">
              {selectedVisa.price === 0 ? "Free" : `₹${calculateGroupPrice().toLocaleString()}`}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Apply for {selectedCountry.name} Tourist Visa - {isGroupApplication ? "Group" : "Individual"} Application
            </h3>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{selectedVisa.label}</div>
                  <div className="text-sm text-gray-600">Processing time: {selectedVisa.tat}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {isGroupApplication ? "Group application (5+ applicants)" : "Individual application"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {selectedVisa.price === 0 ? "Free" : `₹${calculateGroupPrice().toLocaleString()}`}
                  </div>
                  <div className="text-sm text-gray-500">
                    {isGroupApplication ? "for 5 applicants (10% off)" : "per applicant"}
                  </div>
                </div>
              </div>
            </div>

            <form
              className="grid gap-4 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(5);
              }}
            >
              <div className="grid gap-1">
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full name {isGroupApplication && "(Primary applicant)"}
                </label>
                <input id="fullName" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                <input id="phone" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="passport" className="text-sm font-medium text-gray-700">
                  Passport number {isGroupApplication && "(Primary applicant)"}
                </label>
                <input id="passport" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="travelDate" className="text-sm font-medium text-gray-700">Planned travel date</label>
                <input id="travelDate" type="date" required className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="duration" className="text-sm font-medium text-gray-700">Duration of stay</label>
                <select id="duration" className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Less than 1 week</option>
                  <option>1-2 weeks</option>
                  <option>2-4 weeks</option>
                  <option>1-3 months</option>
                  <option>More than 3 months</option>
                </select>
              </div>

              {isGroupApplication && (
                <>
                  <div className="grid gap-1">
                    <label htmlFor="groupSize" className="text-sm font-medium text-gray-700">Number of applicants</label>
                    <input id="groupSize" type="number" min="5" defaultValue="5" className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div className="grid gap-1">
                    <label htmlFor="groupType" className="text-sm font-medium text-gray-700">Group type</label>
                    <select id="groupType" className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Family</option>
                      <option>Friends</option>
                      <option>Corporate group</option>
                      <option>Tour group</option>
                      <option>Student group</option>
                      <option>Other</option>
                    </select>
                  </div>
                </>
              )}

              {/* Document Upload Section */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Upload Required Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                  </svg>
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900">
                        Click to upload or drag and drop
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB each
                      </span>
                    </label>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileUpload} />
                  </div>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Uploaded Documents:</h4>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded border">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-2 grid gap-1">
                <label htmlFor="notes" className="text-sm font-medium text-gray-700">Additional notes</label>
                <textarea id="notes" rows={4} className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                  Continue to Review
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Review Section */}
      {step === 5 && selectedVisa && selectedCountry && (
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Review & Confirm</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <span className="font-medium">Country:</span> {selectedCountry.name} {selectedCountry.flag}
              </div>
              <div>
                <span className="font-medium">Visa Type:</span> {selectedVisa.label} ({selectedVisa.tat})
              </div>
              <div>
                <span className="font-medium">Application:</span> {isGroupApplication ? "Group (5+)" : "Individual"}
              </div>
              <div className="font-bold text-blue-700">
                Total: {selectedVisa.price === 0 ? "Free" : `₹${calculateGroupPrice().toLocaleString()}`}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setStep(4)}
                className="rounded-md border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Edit details
              </button>
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Confirm & Continue
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              This is a demo flow. Confirmation will take you to login to proceed.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
