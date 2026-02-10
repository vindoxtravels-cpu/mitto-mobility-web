"use client";

import { useState } from "react";

interface Package {
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
  packages: string[];
  avgPrice: string;
  highlights: string[];
}

export default function TourPackagesPage(): JSX.Element {
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    groupSize: "",
    budget: "",
    destination: "",
    packageType: "",
  });

  const destinations: Destination[] = [
    { 
      code: "TH", 
      name: "Thailand", 
      flag: "🇹🇭", 
      popular: true, 
      packages: ["Bangkok & Pattaya", "Phuket Beach", "Chiang Mai Cultural", "Krabi Islands"],
      avgPrice: "₹25,000-₹45,000",
      highlights: ["Beaches", "Temples", "Street Food", "Nightlife"]
    },
    { 
      code: "SG", 
      name: "Singapore", 
      flag: "🇸🇬", 
      popular: true, 
      packages: ["City Explorer", "Universal Studios", "Sentosa Island", "Gardens by the Bay"],
      avgPrice: "₹35,000-₹65,000",
      highlights: ["Modern City", "Theme Parks", "Shopping", "Fine Dining"]
    },
    { 
      code: "AE", 
      name: "UAE", 
      flag: "🇦🇪", 
      popular: true, 
      packages: ["Dubai Luxury", "Abu Dhabi Cultural", "Sharjah Heritage", "Desert Safari"],
      avgPrice: "₹40,000-₹80,000",
      highlights: ["Luxury Shopping", "Burj Khalifa", "Desert Safari", "Gold Souk"]
    },
    { 
      code: "MY", 
      name: "Malaysia", 
      flag: "🇲🇾", 
      popular: true, 
      packages: ["Kuala Lumpur City", "Langkawi Beach", "Penang Heritage", "Genting Highlands"],
      avgPrice: "₹30,000-₹55,000",
      highlights: ["Twin Towers", "Beaches", "Street Food", "Casinos"]
    },
    { 
      code: "ID", 
      name: "Indonesia", 
      flag: "🇮🇩", 
      popular: false, 
      packages: ["Bali Beach", "Jakarta City", "Yogyakarta Temples", "Lombok Islands"],
      avgPrice: "₹35,000-₹60,000",
      highlights: ["Beaches", "Temples", "Volcanoes", "Cultural Sites"]
    },
    { 
      code: "MV", 
      name: "Maldives", 
      flag: "🇲🇻", 
      popular: true, 
      packages: ["Resort Luxury", "Water Villa", "Island Hopping", "Diving Adventure"],
      avgPrice: "₹50,000-₹1,50,000",
      highlights: ["Crystal Waters", "Overwater Villas", "Diving", "Romantic Getaways"]
    },
    { 
      code: "LK", 
      name: "Sri Lanka", 
      flag: "🇱🇰", 
      popular: false, 
      packages: ["Colombo City", "Kandy Cultural", "Galle Beach", "Nuwara Eliya Hills"],
      avgPrice: "₹28,000-₹50,000",
      highlights: ["Beaches", "Tea Plantations", "Ancient Cities", "Wildlife"]
    },
    { 
      code: "NP", 
      name: "Nepal", 
      flag: "🇳🇵", 
      popular: false, 
      packages: ["Kathmandu Valley", "Pokhara Lakes", "Everest Base Camp", "Chitwan Safari"],
      avgPrice: "₹25,000-₹75,000",
      highlights: ["Mountains", "Temples", "Adventure", "Wildlife Safari"]
    },
  ];

  const packages: Package[] = [
    {
      id: "beach-paradise",
      title: "Beach Paradise Package",
      description: "Relax on pristine beaches with crystal clear waters and luxury resorts",
      duration: "5N/6D",
      price: "₹35,999",
      inclusions: ["Return flights", "4-star beach resort", "Daily breakfast", "Airport transfers", "City tour"],
      popular: true,
      category: "beach",
    },
    {
      id: "city-explorer",
      title: "City Explorer Package",
      description: "Discover vibrant cities with modern attractions and cultural experiences",
      duration: "4N/5D",
      price: "₹29,999",
      inclusions: ["Return flights", "3-star hotel", "Daily breakfast", "City tours", "Entry tickets"],
      popular: true,
      category: "city",
    },
    {
      id: "adventure-thrill",
      title: "Adventure Thrill Package",
      description: "Exciting adventures including trekking, water sports, and wildlife",
      duration: "6N/7D",
      price: "₹45,999",
      inclusions: ["Return flights", "Adventure camps", "All meals", "Equipment rental", "Guide services"],
      popular: false,
      category: "adventure",
    },
    {
      id: "cultural-heritage",
      title: "Cultural Heritage Package",
      description: "Immerse yourself in rich cultural traditions and historical sites",
      duration: "5N/6D",
      price: "₹32,999",
      inclusions: ["Return flights", "Heritage hotels", "Daily breakfast", "Temple tours", "Cultural shows"],
      popular: false,
      category: "cultural",
    },
    {
      id: "luxury-escape",
      title: "Luxury Escape Package",
      description: "Premium experience with 5-star hotels and exclusive services",
      duration: "5N/6D",
      price: "₹75,999",
      inclusions: ["Business class flights", "5-star luxury resort", "All meals", "Spa treatments", "Private tours"],
      popular: true,
      category: "luxury",
    },
    {
      id: "family-fun",
      title: "Family Fun Package",
      description: "Perfect for families with theme parks and kid-friendly activities",
      duration: "4N/5D",
      price: "₹39,999",
      inclusions: ["Return flights", "Family hotel", "Daily breakfast", "Theme park tickets", "Kids activities"],
      popular: false,
      category: "family",
    },
    {
      id: "honeymoon-romance",
      title: "Honeymoon Romance Package",
      description: "Romantic getaways with special arrangements for couples",
      duration: "6N/7D",
      price: "₹55,999",
      inclusions: ["Return flights", "Honeymoon suite", "Candlelight dinners", "Spa for couples", "Romantic tours"],
      popular: true,
      category: "honeymoon",
    },
    {
      id: "budget-backpacker",
      title: "Budget Backpacker Package",
      description: "Affordable travel with hostels and shared experiences",
      duration: "7N/8D",
      price: "₹22,999",
      inclusions: ["Return flights", "Hostel accommodation", "Daily breakfast", "Group tours", "Local transport"],
      popular: false,
      category: "budget",
    },
  ];

  const categories = [
    { id: "all", label: "All Packages", icon: "🌍" },
    { id: "beach", label: "Beach", icon: "🏖️" },
    { id: "city", label: "City", icon: "🏙️" },
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "cultural", label: "Cultural", icon: "🏛️" },
    { id: "luxury", label: "Luxury", icon: "💎" },
    { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
    { id: "honeymoon", label: "Honeymoon", icon: "💕" },
    { id: "budget", label: "Budget", icon: "💰" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    alert("Thank you! Our travel consultant will contact you within 24 hours with customized tour packages.");
  };

  const filteredPackages = selectedCategory && selectedCategory !== "all" 
    ? packages.filter(pkg => pkg.category === selectedCategory)
    : packages;

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
              International Tour Packages
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--mitto-gray-900)] mb-6">
              Tour Packages &
              <span className="block text-[var(--mitto-primary-600)]">Holiday Destinations</span>
            </h1>
            <p className="text-xl text-[var(--mitto-gray-600)] max-w-3xl mx-auto mb-8">
              Handpicked tour packages to exotic destinations with flights, hotels, sightseeing, and memorable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg hover:shadow-xl"
              >
                Book Your Dream Vacation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors"
              >
                View All Packages
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
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">50+</div>
              <div className="text-[var(--mitto-gray-600)]">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">15+</div>
              <div className="text-[var(--mitto-gray-600)]">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">10,000+</div>
              <div className="text-[var(--mitto-gray-600)]">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--mitto-primary-600)] mb-2">24/7</div>
              <div className="text-[var(--mitto-gray-600)]">Travel Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Popular Destinations
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Explore our most sought-after holiday destinations
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
                        <h3 className="text-2xl font-bold text-[var(--mitto-gray-900)]">Tour Packages in {d.name}</h3>
                        <p className="text-[var(--mitto-gray-600)]">Handpicked experiences for your perfect vacation</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {d.packages.map((pkg) => (
                        <div key={pkg} className="bg-[var(--mitto-gray-50)] rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-[var(--mitto-gray-900)]">{pkg}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href="#booking"
                        className="inline-flex items-center rounded-full bg-[var(--mitto-primary-600)] px-6 py-3 text-white font-medium hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg"
                      >
                        Explore {d.name} Packages
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

      {/* Package Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">
              Browse by Category
            </h2>
            <p className="text-[var(--mitto-gray-600)]">
              Find the perfect package based on your travel style
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
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-[var(--mitto-gray-200)] p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[var(--mitto-gray-900)]">{pkg.title}</h3>
                  {pkg.popular && (
                    <span className="px-3 py-1 bg-[var(--mitto-accent-100)] text-[var(--mitto-accent-700)] text-sm rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[var(--mitto-gray-600)] mb-6">{pkg.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Duration</span>
                    <span className="font-medium text-[var(--mitto-gray-900)]">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--mitto-gray-500)]">Starting from</span>
                    <span className="font-bold text-lg text-[var(--mitto-primary-600)]">{pkg.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-[var(--mitto-gray-700)] mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex items-start gap-2 text-sm text-[var(--mitto-gray-600)]">
                        <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[var(--mitto-primary-400)] to-[var(--mitto-primary-500)] text-white grid place-items-center text-[10px] mt-0.5">✓</span>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center py-3 bg-[var(--mitto-primary-600)] text-white rounded-lg font-medium hover:bg-[var(--mitto-primary-700)] transition-colors"
                >
                  Book Now
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
              Why Choose Mitto for Tour Packages?
            </h2>
            <p className="text-xl text-[var(--mitto-gray-600)]">
              Hassle-free travel with expert planning and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✈️",
                title: "All-Inclusive Packages",
                description: "Flights, hotels, meals, and sightseeing included",
              },
              {
                icon: "🏨",
                title: "Best Hotels",
                description: "Handpicked 3-5 star hotels with great reviews",
              },
              {
                icon: "👨‍💼",
                title: "Expert Guides",
                description: "Local guides for authentic experiences",
              },
              {
                icon: "🛡️",
                title: "Travel Insurance",
                description: "Comprehensive coverage for peace of mind",
              },
              {
                icon: "💰",
                title: "Best Price Guarantee",
                description: "Competitive pricing with no hidden costs",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "Round-the-clock assistance during travel",
              },
              {
                icon: "🎯",
                title: "Customizable Itineraries",
                description: "Flexible packages tailored to your preferences",
              },
              {
                icon: "⭐",
                title: "Verified Partners",
                description: "Only trusted airlines and hotels",
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

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-[var(--mitto-gray-50)]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-[var(--mitto-primary-600)] to-[var(--mitto-primary-700)] rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Book Your Dream Vacation</h2>
              <p className="text-lg opacity-90">Get personalized tour packages within your budget</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    placeholder="Enter your full name"
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
                  <label className="block text-sm font-medium mb-2">Travel Date</label>
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
                  <label className="block text-sm font-medium mb-2">Group Size</label>
                  <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select group size</option>
                    <option value="solo" className="text-gray-900">Solo Traveler</option>
                    <option value="couple" className="text-gray-900">Couple</option>
                    <option value="family" className="text-gray-900">Family (3-4)</option>
                    <option value="group" className="text-gray-900">Group (5+)</option>
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
                    <option value="budget" className="text-gray-900">Budget (₹20,000-₹35,000)</option>
                    <option value="standard" className="text-gray-900">Standard (₹35,000-₹60,000)</option>
                    <option value="premium" className="text-gray-900">Premium (₹60,000-₹1,00,000)</option>
                    <option value="luxury" className="text-gray-900">Luxury (₹1,00,000+)</option>
                  </select>
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
                  <label className="block text-sm font-medium mb-2">Package Type</label>
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="" className="text-gray-900">Select package type</option>
                    <option value="beach" className="text-gray-900">Beach & Relaxation</option>
                    <option value="city" className="text-gray-900">City Explorer</option>
                    <option value="adventure" className="text-gray-900">Adventure & Thrill</option>
                    <option value="cultural" className="text-gray-900">Cultural & Heritage</option>
                    <option value="luxury" className="text-gray-900">Luxury & Premium</option>
                    <option value="family" className="text-gray-900">Family Fun</option>
                    <option value="honeymoon" className="text-gray-900">Honeymoon & Romance</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--mitto-primary-600)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Customized Packages
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-sm opacity-80">No spam • 100% confidential • Travel experts</p>
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--mitto-gray-700)]">
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Best Price Guarantee</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Flexible Payments</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">Travel Insurance</div>
            <div className="bg-white rounded-lg p-3 border border-[var(--mitto-gray-200)]">24/7 Support</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--mitto-gray-900)] mb-4">Ready for Your Dream Vacation?</h2>
          <p className="text-[var(--mitto-gray-600)] mb-8">Let us plan the perfect holiday with our expert tour packages and unbeatable prices.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="inline-flex items-center justify-center rounded-full bg-[var(--mitto-primary-600)] px-8 py-4 text-white font-semibold hover:bg-[var(--mitto-primary-700)] transition-colors shadow-lg">
              View All Packages
            </a>
            <a href="/for-individuals#tourist-form" className="inline-flex items-center justify-center rounded-full border-2 border-[var(--mitto-primary-600)] px-8 py-4 text-[var(--mitto-primary-600)] font-semibold hover:bg-[var(--mitto-primary-50)] transition-colors">
              See Individual Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
