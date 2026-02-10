"use client";

import { useState } from "react";

export default function DashboardPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"user" | "corporate">("user");
  const [subTab, setSubTab] = useState<"overview" | "cases" | "documents" | "chat" | "reports" | "settings">("overview");
  const [isSubMoreOpen, setIsSubMoreOpen] = useState<boolean>(false);

  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-900">GoAnywr</span>
          <span className="text-sm text-slate-500">Dashboard</span>
        </div>
        <button 
          onClick={() => window.location.href = '/'}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          ← Back to Home
        </button>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-900 to-blue-900 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl animate-[pulse_8s_ease-in-out_infinite]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mobility Dashboard
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-3xl mx-auto">
              Real-time tracking, document management, and compliance tools for your global mobility journey.
            </p>
          </div>

          {/* Inspired compact dashboard nav + quick actions */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Sub Nav */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {(["overview","cases","documents","chat","reports","settings"] as const).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setSubTab(tabKey)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    subTab === tabKey ? "bg-white text-indigo-700 font-semibold" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                </button>
              ))}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSubMoreOpen((v) => !v)}
                  className="px-4 py-2 rounded-full text-sm bg-white/10 text-white hover:bg-white/20"
                >
                  More ▾
                </button>
                {isSubMoreOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white text-slate-900 shadow-lg border border-slate-200 p-2">
                    <a href="/countries" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">Countries</a>
                    <a href="/job-assistance" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">Job Assistance</a>
                    <a href="/tour-packages" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">Tour Packages</a>
                    <a href="/inter-company-transfer" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">Inter-company Transfer</a>
                    <a href="/for-business" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">For Business</a>
                    <a href="/for-individuals" onClick={() => setIsSubMoreOpen(false)} className="block px-3 py-2 rounded-lg text-sm hover:bg-slate-50">For Individuals</a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a href="#documents" className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-2xl mb-2">📤</div>
                <div className="text-sm font-semibold">Upload Documents</div>
                <div className="text-xs opacity-80">Passport, IELTS, Work letters</div>
              </a>
              <a href="#cases" className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-semibold">Track Case</div>
                <div className="text-xs opacity-80">Real-time status & next steps</div>
              </a>
              <button onClick={() => window.location.hash = "chat"} className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20 hover:bg-white/20 transition-colors text-left">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-sm font-semibold">Chat with Consultant</div>
                <div className="text-xs opacity-80">Get instant help</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="border-b border-slate-200">
          <nav className="flex gap-8 overflow-x-auto">
            {[
              { id: "user", label: "For Users" },
              { id: "corporate", label: "For Corporates" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "user" | "corporate")}
                className={`relative pb-4 px-3 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "text-indigo-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`absolute left-0 -bottom-[1px] h-0.5 w-full transition-all ${
                    activeTab === tab.id ? "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 scale-x-100" : "bg-transparent scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                />
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === "user" && (
            <div className="space-y-6">
              {/* Case Tracking */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl animate-[float_4s_ease-in-out_infinite]">📊</span>
                  Track Your Case
                </h2>
                <p className="mt-2 text-slate-600">
                  Real-time updates on your visa application status and next steps.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900">Canada PR</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">In Progress</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Application Submitted</span>
                        <span>75%</span>
                      </div>
                      <div className="mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-[width] duration-700 ease-out" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Next: Medical exam reminder in 5 days
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900">Work Visa - UK</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Under Review</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Document Verification</span>
                        <span>45%</span>
                      </div>
                      <div className="mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-[width] duration-700 ease-out" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Next: Additional documents requested
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-900">Student Visa - AU</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">Pending</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>Initial Review</span>
                        <span>20%</span>
                      </div>
                      <div className="mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-[width] duration-700 ease-out" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-slate-500">
                      Next: Awaiting biometric appointment
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl animate-[float_4s_ease-in-out_infinite]">📁</span>
                  Upload Documents
                </h2>
                <p className="mt-2 text-slate-600">
                  Secure document vault with automated reminders and validation.
                </p>
                <div className="mt-6">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-300 transition-colors">
                    <div className="text-4xl mb-3 animate-[float_5s_ease-in-out_infinite]">📤</div>
                    <h3 className="font-medium text-slate-900">Drop files here or click to upload</h3>
                    <p className="mt-1 text-sm text-slate-600">PDF, JPG, PNG up to 10MB</p>
                    <button className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 py-2 text-white hover:opacity-90 transition-opacity">
                      Choose Files
                    </button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                          <div className="text-sm font-medium text-slate-900">passport.pdf</div>
                          <div className="text-xs text-slate-500">2.4 MB • Uploaded 2 days ago</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                          <div className="text-sm font-medium text-slate-900">ielts_results.pdf</div>
                          <div className="text-xs text-slate-500">1.8 MB • Uploaded 1 week ago</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat with Consultant */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl animate-[float_4s_ease-in-out_infinite]">💬</span>
                  Chat with Consultant
                </h2>
                <p className="mt-2 text-slate-600">
                  Get instant help from your dedicated mobility consultant.
                </p>
                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-medium">C</div>
                      <div className="flex-1">
                        <div className="rounded-lg bg-white p-3 text-sm text-slate-700">
                          Hi! I've reviewed your Canada PR application. Everything looks good. We just need your updated work experience letter.
                        </div>
                        <div className="mt-1 text-xs text-slate-500">Consultant • 2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-600 text-white grid place-items-center text-xs font-medium">Y</div>
                      <div className="flex-1">
                        <div className="rounded-lg bg-white p-3 text-sm text-slate-700">
                          Thanks! I'll upload it today. When can I expect the medical exam reminder?
                        </div>
                        <div className="mt-1 text-xs text-slate-500">You • 1 hour ago</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-medium">C</div>
                      <div className="flex-1">
                        <div className="rounded-lg bg-white p-3 text-sm text-slate-700">
                          You'll receive the reminder in 5 days. The medical exam needs to be completed within 30 days of the request.
                        </div>
                        <div className="mt-1 text-xs text-slate-500">Consultant • 30 minutes ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
                    />
                    <button className="rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 py-2 text-white hover:opacity-90 transition-opacity">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl animate-[float_4s_ease-in-out_infinite]">🔔</span>
                  Alerts & Notifications
                </h2>
                <p className="mt-2 text-slate-600">
                  Stay informed with important updates and deadline reminders.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors">
                    <span className="text-xl">✅</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Document Verified</div>
                      <div className="text-xs text-slate-600 mt-1">Your passport has been successfully verified</div>
                      <div className="text-xs text-slate-500 mt-1">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors">
                    <span className="text-xl">⏰</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Upcoming Deadline</div>
                      <div className="text-xs text-slate-600 mt-1">Medical exam reminder in 5 days</div>
                      <div className="text-xs text-slate-500 mt-1">1 day ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors">
                    <span className="text-xl">📋</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">Action Required</div>
                      <div className="text-xs text-slate-600 mt-1">Please upload updated work experience letter</div>
                      <div className="text-xs text-slate-500 mt-1">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "corporate" && (
            <div className="space-y-6">
              {/* Case Allocation */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl animate-[float_4s_ease-in-out_infinite]">👥</span>
                  Allocate Cases
                </h2>
                <p className="mt-2 text-slate-600">
                  Manage and assign mobility cases to your team members.
                </p>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-slate-900">Active Cases</h3>
                    <button className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 py-2 text-white hover:opacity-90 transition-opacity">
                      <span className="mr-2">+</span>
                      New Case
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Employee</th>
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Destination</th>
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Visa Type</th>
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Assigned To</th>
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Status</th>
                          <th className="text-left py-3 px-2 font-medium text-slate-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-2">John Smith</td>
                          <td className="py-3 px-2">Canada</td>
                          <td className="py-3 px-2">Work Permit</td>
                          <td className="py-3 px-2">Sarah Chen</td>
                          <td className="py-3 px-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">In Progress</span>
                          </td>
                          <td className="py-3 px-2">
                            <button className="text-blue-600 hover:text-blue-700">View</button>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-2">Maria Garcia</td>
                          <td className="py-3 px-2">UK</td>
                          <td className="py-3 px-2">Skilled Worker</td>
                          <td className="py-3 px-2">Unassigned</td>
                          <td className="py-3 px-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">Pending</span>
                          </td>
                          <td className="py-3 px-2">
                            <button className="text-blue-600 hover:text-blue-700">Assign</button>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-2">Ahmed Hassan</td>
                          <td className="py-3 px-2">UAE</td>
                          <td className="py-3 px-2">Employment Visa</td>
                          <td className="py-3 px-2">David Kim</td>
                          <td className="py-3 px-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Under Review</span>
                          </td>
                          <td className="py-3 px-2">
                            <button className="text-blue-600 hover:text-blue-700">View</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bulk Upload */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl">📤</span>
                  Bulk Upload Employees
                </h2>
                <p className="mt-2 text-slate-600">
                  Upload multiple employee records at once with our CSV template.
                </p>
                <div className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center">
                      <div className="text-3xl mb-3">📊</div>
                      <h3 className="font-medium text-slate-900">Upload CSV File</h3>
                      <p className="mt-1 text-sm text-slate-600">Use our template for best results</p>
                      <button className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 py-2 text-white hover:opacity-90 transition-opacity">
                        Choose CSV File
                      </button>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                      <h3 className="font-medium text-slate-900 mb-3">Template Fields</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full bg-slate-400 text-white grid place-items-center text-[8px]">✓</span>
                          Employee Name, Email, Phone
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full bg-slate-400 text-white grid place-items-center text-[8px]">✓</span>
                          Destination Country, Visa Type
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full bg-slate-400 text-white grid place-items-center text-[8px]">✓</span>
                          Department, Start Date
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-4 w-4 rounded-full bg-slate-400 text-white grid place-items-center text-[8px]">✓</span>
                          Passport Number, Expiry
                        </li>
                      </ul>
                      <button className="mt-4 text-sm text-indigo-700 hover:text-indigo-800">
                        Download Template →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Reports */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Generate Compliance Reports
                </h2>
                <p className="mt-2 text-slate-600">
                  Comprehensive reporting for audit and management purposes.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <h3 className="font-medium text-slate-900">Visa Status Report</h3>
                    <p className="mt-1 text-sm text-slate-600">Current visa statuses and expiry dates</p>
                    <button className="mt-3 text-sm text-indigo-700 hover:text-indigo-800">
                      Generate Report →
                    </button>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <h3 className="font-medium text-slate-900">Compliance Audit</h3>
                    <p className="mt-1 text-sm text-slate-600">Labor law compliance check</p>
                    <button className="mt-3 text-sm text-indigo-700 hover:text-indigo-800">
                      Generate Report →
                    </button>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
                    <h3 className="font-medium text-slate-900">Cost Analysis</h3>
                    <p className="mt-1 text-sm text-slate-600">Mobility costs and ROI metrics</p>
                    <button className="mt-3 text-sm text-indigo-700 hover:text-indigo-800">
                      Generate Report →
                    </button>
                  </div>
                </div>
              </div>

              {/* Visa Timeline Predictions */}
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  AI-Powered Visa Timeline Predictions
                </h2>
                <p className="mt-2 text-slate-600">
                  Get accurate timeline predictions based on historical data and current processing times.
                </p>
                <div className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-medium text-slate-900">Canada Work Permit</h3>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Predicted Timeline</span>
                          <span className="font-medium text-slate-900">8-12 weeks</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Confidence Level</span>
                          <span className="font-medium text-emerald-600">85%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Current Volume</span>
                          <span className="font-medium text-amber-600">High</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-xs text-blue-700 border border-blue-200">
                        Based on 1,247 similar applications in the last 3 months
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-medium text-slate-900">UK Skilled Worker</h3>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Predicted Timeline</span>
                          <span className="font-medium text-slate-900">3-6 weeks</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Confidence Level</span>
                          <span className="font-medium text-emerald-600">92%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Current Volume</span>
                          <span className="font-medium text-emerald-600">Normal</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 text-xs text-blue-700 border border-blue-200">
                        Based on 892 similar applications in the last 3 months
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200">
                    <h4 className="font-medium text-indigo-900">How It Works</h4>
                    <p className="mt-2 text-sm text-indigo-800">
                      Our AI analyzes historical processing times, current visa office workloads, 
                      seasonal patterns, and policy changes to provide accurate timeline predictions 
                      with confidence scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
