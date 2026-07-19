"use client";

import React from "react";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import AdSenseSlot from "@/components/ads/AdSenseSlot";
import { cities } from "@/data/cities";
import { blogArticles } from "@/data/blog";

export default function HomePage() {
  // Select 3 featured cities (Paris, Tokyo, Marrakech)
  const featuredCities = cities.filter((c) =>
    ["paris", "tokyo", "marrakech"].includes(c.slug)
  );

  // Select 4 popular travel guides (Dubai, Barcelona, Rome, Bali)
  const popularCities = cities.filter((c) =>
    ["dubai", "barcelona", "rome", "bali"].includes(c.slug)
  );

  const categories = [
    { name: "Cultural Guides", count: 8, icon: "🏛️" },
    { name: "Culinary Hotspots", count: 5, icon: "🍜" },
    { name: "Hidden Gems", count: 10, icon: "💎" },
    { name: "Budget Travel", count: 6, icon: "🎒" },
  ];

  const whyChoose = [
    {
      title: "100% Content Focused",
      description: "No intrusive popups or deceptive booking forms. Pure, high-quality travel guides written for explorers.",
      icon: "📚",
    },
    {
      title: "Real Local Secrets",
      description: "Discover neighborhood lanes, authentic local food stalls, and quiet spots far from commercial tourist traps.",
      icon: "🗺️",
    },
    {
      title: "Zero Fake Bookings",
      description: "We don't take referral commissions or push hotels. Our recommendations are honest and completely unbiased.",
      icon: "🚫",
    },
    {
      title: "SEO & Speed Optimized",
      description: "Pre-rendered static HTML ensures near-instant page load times on mobile devices and desktop computers.",
      icon: "⚡",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 px-4">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10 py-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            ✨ Discover Places Like a Local
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Explore Cities Beyond the{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              Tourist Traps
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            LocTravel gives you detailed, content-rich city guides written for explorers who want authentic local food, safety, and hidden gems.
          </p>

          <div className="max-w-2xl mx-auto pt-4">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Ad slot below Hero */}
      <div className="max-w-7xl mx-auto px-4">
        <AdSenseSlot slot="home-hero-bottom" />
      </div>

      {/* 2. Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Handpicked
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-teal-500 flex items-center gap-1 transition-colors"
          >
            View all destinations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/destinations/${city.slug}`}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 bg-slate-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={city.heroImage}
                alt={city.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent z-0" />
              
              <div className="relative z-10 space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/10">
                  {city.country}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-slate-200 line-clamp-2 font-light">
                  {city.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Popular Travel Guides */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-20 border-y border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              City Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Popular Local Guides
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 font-light text-base">
              Skip commercial booking pitches. Get raw, content-rich guides detailing where locals eat, how to move safely, and budget tips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/destinations/${city.slug}`}
                className="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={city.heroImage}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {city.region} • {city.country}
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 font-light">
                      {city.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Read local guide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Travel Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Browse By Interest
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-mono">
                {cat.count} articles & guides
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose LocTravel */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              LocTravel Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Why Travelers Choose LocTravel
            </h2>
            <p className="text-slate-400 font-light text-base">
              Built for real discovery, zero commercial bloat, and ultra-fast mobile reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot middle of page */}
      <div className="max-w-7xl mx-auto px-4">
        <AdSenseSlot slot="home-middle" />
      </div>

      {/* 6. Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Journal
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-teal-500 flex items-center gap-1 transition-colors"
          >
            Visit travel blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    {article.date} • {article.readTime}
                  </span>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    {article.author.charAt(0)}
                  </span>
                  <span>By {article.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <span className="text-2xl">✉️</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Get Local Secrets in Your Inbox
            </h2>
            <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
              Subscribe to the LocTravel newsletter. Receive weekly local secrets, safety reports, and newly added city guides.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center gap-3 pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all active:scale-98"
              >
                Join LocTravel
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
