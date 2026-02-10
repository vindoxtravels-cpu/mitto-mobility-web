"use client";

import React, { useEffect, useRef, useState } from "react";

type MenuKey = "ind" | "biz" | "corp" | null;

interface MenuItem {
  label: string;
  href: string;
  desc?: string;
}

const INDIVIDUALS_ITEMS: MenuItem[] = [
  { label: "For Individuals Overview", href: "/for-individuals", desc: "B2C services and financing" },
  { label: "Tourist Visa", href: "/tourist-visa", desc: "End-to-end documentation & filing" },
  { label: "Study Abroad", href: "/study-abroad", desc: "Country counseling, SOP, visa filing" },
  { label: "Work Visa", href: "/work-visa", desc: "Resume, LinkedIn, employer connections" },
  { label: "PR & Immigration", href: "/pr-immigration", desc: "CRS evaluation, province selection" },
  { label: "Sports & Medical Tourism", href: "/sports-medical-tourism", desc: "Hospitals & federation tie-ups" },
];

const BUSINESS_ITEMS: MenuItem[] = [
  { label: "Business Solutions Overview", href: "/for-business", desc: "Corporate immigration & mobility" },
  { label: "Inter‑Company Transfers", href: "/for-business#services", desc: "Visa & work permits under compliance" },
  { label: "Corporate Immigration", href: "/for-business#services", desc: "Labor law & audit support" },
  { label: "Workforce Mobility Management", href: "/for-business#services", desc: "EOR, onboarding, assignment tracking" },
  { label: "Financial Products (B2B)", href: "/for-business#services", desc: "Insurance bundles, bulk forex, remittance" },
];

const CORPORATE_TOOLS_ITEMS: MenuItem[] = [
  { label: "Mobility Dashboards", href: "/for-business#services", desc: "Real-time visibility & status tracking" },
  { label: "Document Vault", href: "/for-business#services", desc: "Secure storage & workflows" },
  { label: "Compliance Toolkit", href: "/for-business#services", desc: "Local immigration & labor law" },
  { label: "Global Onboarding", href: "/for-business#services", desc: "Templates & checklists for HR teams" },
];

export default function StickyNav(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsVisible(y > 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    // pointerdown covers mouse + touch + pen
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const triggerClasses = (key: Exclude<MenuKey, null>, colorClass: string) =>
    `dropdown-trigger ${openMenu === key ? "active" : ""} ${colorClass}`;

  return (
    <div
      ref={containerRef}
      className={`sticky-nav ${isVisible ? "show" : "hide"}`}
      aria-hidden={!isVisible}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand + tagline */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] text-white grid place-items-center text-xs shadow-md">
              ↗
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-sm font-semibold text-[var(--mitto-gray-900)] group-hover:text-[var(--mitto-primary-700)] transition-colors">
                Mitto Mobility
              </span>
              <span className="text-[11px] text-[var(--mitto-gray-600)]">
                Visa • Work Permits • PR • Mobility
              </span>
            </div>
          </a>

          {/* Middle: Distinct dropdowns */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                className={triggerClasses("ind", "ind")}
                onClick={() => setOpenMenu(openMenu === "ind" ? null : "ind")}
                aria-expanded={openMenu === "ind"}
              >
                <span className="font-medium">Individuals</span>
                <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openMenu === "ind" && (
                <div className="dropdown-panel ind">
                  <ul>
                    {INDIVIDUALS_ITEMS.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="dropdown-item">
                          <span className="item-title">{item.label}</span>
                          {item.desc && <span className="item-desc">{item.desc}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                className={triggerClasses("biz", "biz")}
                onClick={() => setOpenMenu(openMenu === "biz" ? null : "biz")}
                aria-expanded={openMenu === "biz"}
              >
                <span className="font-medium">Business Solutions</span>
                <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openMenu === "biz" && (
                <div className="dropdown-panel biz">
                  <ul>
                    {BUSINESS_ITEMS.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="dropdown-item">
                          <span className="item-title">{item.label}</span>
                          {item.desc && <span className="item-desc">{item.desc}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                className={triggerClasses("corp", "corp")}
                onClick={() => setOpenMenu(openMenu === "corp" ? null : "corp")}
                aria-expanded={openMenu === "corp"}
              >
                <span className="font-medium">Corporate Mobility Tools</span>
                <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openMenu === "corp" && (
                <div className="dropdown-panel corp">
                  <ul>
                    {CORPORATE_TOOLS_ITEMS.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="dropdown-item">
                          <span className="item-title">{item.label}</span>
                          {item.desc && <span className="item-desc">{item.desc}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-4 py-2 text-white text-sm font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-md"
            >
              Get Started
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/login"
              className="inline-flex items-center rounded-full border-2 border-[var(--mitto-primary-600)] px-4 py-2 text-[var(--mitto-primary-700)] text-sm font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
            >
              30‑min Free Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
