// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoAnywr — Mobility Powerhouse | Move Abroad with Confidence",
  description:
    "End-to-end global mobility solutions: visas, work permits, PR, job assistance, travel, and financial products. 30‑min free consultation. Zero cost. Zero spam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800`}
      >
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">G</div>
              <span className="font-semibold tracking-tight text-slate-900">GoAnywr</span>
              <span className="hidden md:inline-block text-xs text-slate-500 ml-1">Mobility Powerhouse</span>
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li><a href="#services" className="hover:text-slate-900 text-slate-600">Services</a></li>
              <li><a href="/for-individuals" className="hover:text-slate-900 text-slate-600">For Individuals</a></li>
              <li><a href="/for-business" className="hover:text-slate-900 text-slate-600">For Business</a></li>
              <li><a href="/countries" className="hover:text-slate-900 text-slate-600">Countries</a></li>
              <li><a href="#resources" className="hover:text-slate-900 text-slate-600">Resources</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a></li>
            </ul>
            <div className="flex items-center gap-3">
              <a href="#consult" className="hidden md:inline-flex text-sm px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-100">30‑min Free Call</a>
              <a href="#contact" className="inline-flex text-sm px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Get Started</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-slate-200/60">
          <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">G</div>
                <span className="font-semibold tracking-tight">GoAnywr</span>
                <span className="text-xs text-slate-500 ml-1">Mobility Powerhouse</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Human expertise + digital workflows across 12 countries and 4 continents.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-slate-600">
                <a href="#services" className="hover:text-slate-900">Services</a>
                <a href="/for-individuals" className="hover:text-slate-900">For Individuals</a>
                <a href="/for-business" className="hover:text-slate-900">For Business</a>
                <a href="/countries" className="hover:text-slate-900">Countries</a>
                <a href="#resources" className="hover:text-slate-900">Resources</a>
                <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="#about" className="hover:text-slate-900">About Us</a></li>
                <li><a href="#model" className="hover:text-slate-900">The GoAnywr Model</a></li>
                <li><a href="#offices" className="hover:text-slate-900">Global Offices</a></li>
                <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Support</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Zero Cost • Zero Spam</li>
                <li>End-to-End Assistance</li>
                <li>Digital support for smooth and secure management</li>
                <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="px-6 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} GoAnywr. All rights reserved. Powered by GoAnywr Mobility Powerhouse.
          </div>
        </footer>
      </body>
    </html>
  );
}
