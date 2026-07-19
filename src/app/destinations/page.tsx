"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cities } from "@/data/cities";
import AdSenseSlot from "@/components/ads/AdSenseSlot";

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const regions = ["All", "Europe", "Asia", "Africa", "North America", "Middle East"];

  const filteredCities = cities.filter((city) => {
    const matchesRegion = selectedRegion === "All" || city.region === selectedRegion;
    const matchesSearch =
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
          Directory
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          All Destinations
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-light text-base md:text-lg leading-relaxed">
          Discover handpicked local guides to major cities worldwide. Browse by region or search below.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-sm">
        {/* Region Pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedRegion === region
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                  : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Local Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city or country..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/destinations/${city.slug}`}
              className="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={city.heroImage}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/70 backdrop-blur-md text-white border border-white/5">
                  {city.region}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono">
                    {city.country}
                  </div>
                  <h2 className="font-extrabold text-xl text-slate-800 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                    {city.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed line-clamp-3">
                    {city.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  <span>Explore guide like a local</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
          <span className="text-4xl">🔍</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mt-4">
            No Destinations Found
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-sm mx-auto">
            We couldn&apos;t find any cities matching your search. Try adjusting your region filter or search terms.
          </p>
        </div>
      )}

      {/* Ad slot bottom of destinations */}
      <AdSenseSlot slot="destinations-bottom" />
    </div>
  );
}
