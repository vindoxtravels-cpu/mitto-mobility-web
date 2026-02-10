"use client";

import React, { useMemo, useState } from "react"; // Added React import

export type LeadCaptureFormValues = {
  fullName: string;
  phone: string;
  email: string;
  targetCountry: string;
  requirement: string;
  whatsappOptIn: boolean;
  resumeFile: File | null;
};

type LeadCaptureFormProps = {
  ctaLabel?: string;
};

const TARGET_COUNTRIES = [
  "Canada",
  "Australia",
  "United Kingdom",
  "United States",
  "Germany",
  "New Zealand",
  "Singapore",
  "UAE",
  "Other",
] as const;

const REQUIREMENTS = [
  "Tourist Visa",
  "Study Visa",
  "Work Visa",
  "PR & Immigration",
  "Job Assistance",
  "Corporate Mobility",
  "Financial Products",
  "Other",
] as const;

export default function LeadCaptureForm({ ctaLabel = "Get My Free Roadmap" }: LeadCaptureFormProps): JSX.Element {
  const defaultTargetCountry = "Canada";
  const defaultRequirement = "PR & Immigration";

  const [values, setValues] = useState<LeadCaptureFormValues>({
    fullName: "",
    phone: "",
    email: "",
    targetCountry: defaultTargetCountry,
    requirement: defaultRequirement,
    whatsappOptIn: false,
    resumeFile: null,
  });

  const isValid = useMemo(() => {
    return (
      values.fullName.trim().length > 0 &&
      values.phone.trim().length > 0 &&
      values.email.trim().length > 0 &&
      values.targetCountry.trim().length > 0 &&
      values.requirement.trim().length > 0
    );
  }, [values]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Demo-only UI
    alert("Thanks! This is a demo UI. No data collected.");
    setValues({
      fullName: "",
      phone: "",
      email: "",
      targetCountry: defaultTargetCountry,
      requirement: defaultRequirement,
      whatsappOptIn: false,
      resumeFile: null,
    });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">Full Name</label>
        <input
          value={values.fullName}
          onChange={(e) => setValues((p) => ({ ...p, fullName: e.target.value }))}
          placeholder="Your full name"
          className="w-full rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mitto-primary-300)] focus:ring-2 focus:ring-[color:var(--mitto-primary-200)]"
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">Phone Number</label>
        <input
          value={values.phone}
          onChange={(e) => setValues((p) => ({ ...p, phone: e.target.value }))}
          placeholder="+91 98765 43210"
          className="w-full rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mitto-primary-300)] focus:ring-2 focus:ring-[color:var(--mitto-primary-200)]"
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">Email Address</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mitto-primary-300)] focus:ring-2 focus:ring-[color:var(--mitto-primary-200)]"
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">Target Country</label>
        <select
          value={values.targetCountry}
          onChange={(e) => setValues((p) => ({ ...p, targetCountry: e.target.value }))}
          className="w-full rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mitto-primary-300)] focus:ring-2 focus:ring-[color:var(--mitto-primary-200)]"
          required
        >
          {TARGET_COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">What do you need help with?</label>
        <select
          value={values.requirement}
          onChange={(e) => setValues((p) => ({ ...p, requirement: e.target.value }))}
          className="w-full rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mitto-primary-300)] focus:ring-2 focus:ring-[color:var(--mitto-primary-200)]"
          required
        >
          {REQUIREMENTS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-semibold text-[var(--mitto-gray-800)]">Upload Resume (Optional)</label>
        <div className="rounded-xl border border-dashed border-[var(--mitto-gray-300)] bg-white px-4 py-3">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setValues((p) => ({ ...p, resumeFile: e.target.files?.[0] ?? null }))}
            className="block w-full text-sm text-[var(--mitto-gray-700)] file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--mitto-gray-100)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--mitto-gray-800)] hover:file:bg-[var(--mitto-gray-200)]"
          />
          <p className="mt-2 text-xs text-[var(--mitto-gray-500)]">Drag and drop or click to upload</p>
        </div>
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-[var(--mitto-gray-200)] bg-white px-4 py-3">
        <input
          type="checkbox"
          checked={values.whatsappOptIn}
          onChange={(e) => setValues((p) => ({ ...p, whatsappOptIn: e.target.checked }))}
          className="mt-1 h-4 w-4 rounded border-[var(--mitto-gray-300)] text-[var(--mitto-primary-600)] focus:ring-[color:var(--mitto-primary-200)]"
        />
        <span className="text-sm text-[var(--mitto-gray-700)]">I prefer to receive updates on WhatsApp</span>
      </label>

      <button
        type="submit"
        disabled={!isValid}
        className="btn-fluid inline-flex items-center justify-center rounded-xl px-5 py-3 brand-btn disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {ctaLabel}
      </button>

      <p className="text-xs text-[var(--mitto-gray-500)]">
        By submitting, you agree to receive communications from <span className="font-semibold">Mitto Mobility</span>. No spam, ever.
      </p>
    </form>
  );
}
