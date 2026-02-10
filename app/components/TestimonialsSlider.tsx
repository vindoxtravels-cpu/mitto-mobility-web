"use client";

import React, { useEffect, useMemo, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location?: string;
};

export default function TestimonialsSlider({
  testimonials,
  autoPlayMs = 7000,
}: {
  testimonials: Testimonial[];
  autoPlayMs?: number;
}): JSX.Element {
  const safe = useMemo<Testimonial[]>(
    () =>
      testimonials.length
        ? testimonials
        : [
            {
              quote:
                "Mitto’s process was structured and transparent. The advisor explained each step clearly and helped us avoid documentation errors.",
              name: "Customer",
              role: "B2C Applicant",
            },
          ],
    [testimonials],
  );

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (safe.length <= 1) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % safe.length);
    }, autoPlayMs);
    return () => window.clearInterval(t);
  }, [safe.length, autoPlayMs]);

  const current = safe[index] ?? safe[0];

  return (
    <div className="rounded-[24px] border border-[var(--mitto-gray-200)] bg-white shadow-soft p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--mitto-primary-700)]">Testimonials</p>
          <p className="mt-3 text-lg md:text-xl leading-relaxed text-[var(--mitto-gray-900)]">
            “{current.quote}”
          </p>
          <div className="mt-5">
            <p className="font-semibold text-[var(--mitto-gray-900)]">{current.name}</p>
            <p className="text-sm text-[var(--mitto-gray-600)]">
              {current.role}
              {current.location ? ` • ${current.location}` : ""}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + safe.length) % safe.length)}
            className="h-10 w-10 rounded-full border border-[var(--mitto-gray-200)] bg-white hover:bg-[var(--mitto-gray-50)] transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % safe.length)}
            className="h-10 w-10 rounded-full border border-[var(--mitto-gray-200)] bg-white hover:bg-[var(--mitto-gray-50)] transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {safe.length > 1 && (
        <div className="mt-6 flex items-center gap-2">
          {safe.map((_, i) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[var(--mitto-primary-600)]" : "w-2.5 bg-[var(--mitto-gray-200)] hover:bg-[var(--mitto-gray-300)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
