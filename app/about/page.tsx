"use client";

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About GoAnywr</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Human expertise meets digital innovation to transform global mobility.
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            To democratize global mobility by combining cutting-edge AI technology with human expertise, 
            making international relocation transparent, accessible, and stress-free for individuals and businesses worldwide.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">15,000+</div>
              <div className="text-sm text-slate-700 mt-1">Profiles Evaluated</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600">97%</div>
              <div className="text-sm text-slate-700 mt-1">Customer Satisfaction</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-3xl font-bold text-purple-600">12</div>
              <div className="text-sm text-slate-700 mt-1">Countries • 4 Continents</div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            To become the world's most trusted mobility platform, where borders become opportunities 
            and every global journey is powered by seamless technology and genuine human support.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
              <div>
                <h3 className="font-medium text-slate-900">Borderless Talent Movement</h3>
                <p className="text-sm text-slate-600 mt-1">Enabling seamless global workforce deployment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
              <div>
                <h3 className="font-medium text-slate-900">Complete Transparency</h3>
                <p className="text-sm text-slate-600 mt-1">Real-time tracking and clear communication at every step</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
              <div>
                <h3 className="font-medium text-slate-900">AI-Powered Efficiency</h3>
                <p className="text-sm text-slate-600 mt-1">Smart automation that enhances human expertise</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center text-xs mt-0.5">✓</span>
              <div>
                <h3 className="font-medium text-slate-900">Global Community</h3>
                <p className="text-sm text-slate-600 mt-1">Building a network of successful global citizens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="network" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our Network Strength</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Local Immigration Experts",
              desc: "Verified visa specialists and immigration lawyers in each country",
              icon: "👥",
            },
            {
              title: "Corporate Partners",
              desc: "500+ employer partners across tech, healthcare, and engineering",
              icon: "🏢",
            },
            {
              title: "Educational Institutions",
              desc: "200+ universities and colleges for study abroad programs",
              icon: "🎓",
            },
            {
              title: "Financial Partners",
              desc: "Leading banks and fintech for education loans and forex",
              icon: "💳",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Global Presence Map</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { country: "Canada", cities: "Toronto, Vancouver" },
              { country: "Australia", cities: "Sydney, Melbourne" },
              { country: "UAE", cities: "Dubai, Abu Dhabi" },
              { country: "UK", cities: "London, Manchester" },
              { country: "Germany", cities: "Berlin, Munich" },
              { country: "France", cities: "Paris, Lyon" },
              { country: "Netherlands", cities: "Amsterdam, Rotterdam" },
              { country: "Singapore", cities: "Singapore" },
              { country: "New Zealand", cities: "Auckland, Wellington" },
              { country: "Turkey", cities: "Istanbul, Ankara" },
              { country: "Portugal", cities: "Lisbon, Porto" },
              { country: "USA", cities: "Bay Area, NYC, Austin" },
            ].map((location) => (
              <div key={location.country} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="font-medium text-slate-900">{location.country}</div>
                <div className="text-sm text-slate-600 mt-1">{location.cities}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Human × Digital Mobility Philosophy</h2>
          <p className="mt-4 text-slate-600 text-lg">
            We believe technology should enhance human expertise, not replace it. Our hybrid approach ensures 
            you get the best of both worlds.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Digital Excellence
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>AI-powered profile evaluation and visa compatibility engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Real-time application tracking dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Secure document vault with automated reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Automated job matching and application assistance</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-semibold text-emerald-900 flex items-center gap-2">
                <span className="text-2xl">👨‍💼</span>
                Human Expertise
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Dedicated mobility consultants for each case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Local immigration lawyers and visa specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>Personalized strategy sessions and career guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                  <span>24/7 support with local language assistance</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <h3 className="text-xl font-semibold">The Perfect Balance</h3>
            <p className="mt-3 text-slate-300">
              Our digital platform handles the repetitive tasks, document management, and tracking, 
              while our human experts focus on strategy, problem-solving, and personalized guidance. 
              This ensures efficiency without compromising on the quality of service.
            </p>
          </div>
        </div>
      </section>

      <section id="leadership" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Leadership Team</h2>
          <p className="mt-2 text-slate-600">
            Meet the visionaries behind GoAnywr's mission to transform global mobility.
          </p>
          <div className="mt-6 p-8 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-slate-900">Coming Soon</h3>
            <p className="mt-2 text-slate-600">
              Our leadership team profiles will be available shortly. 
              We're a diverse group of immigration experts, technologists, and global citizens 
              passionate about making international mobility accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Join Our Global Mission</h3>
            <p className="mt-2 text-slate-600">
              Whether you're looking to move abroad or expand your business globally, 
              we're here to make your journey seamless.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#consult" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                Start Your Journey
              </a>
              <a href="/for-business" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
