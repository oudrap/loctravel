import React from "react";
import Link from "next/link";
import { blogArticles } from "@/data/blog";
import AdSenseSlot from "@/components/ads/AdSenseSlot";

export const metadata = {
  title: "Travel Blog: Local Travel Secrets & Packing Tips | LocTravel",
  description:
    "Expert travel advice, solo travel guides, packing lists, and travel photography tips from our globetrotting team at LocTravel.",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
          Journal
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Travel Blog
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-light text-base md:text-lg leading-relaxed">
          Expert guides, advice on travel gear, photography tips, and solo travel stories written to inspire.
        </p>
      </div>

      <AdSenseSlot slot="blog-top" />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-white/5">
                {article.category}
              </span>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                  {article.date} • {article.readTime}
                </div>
                <h2 className="font-extrabold text-xl text-slate-800 dark:text-slate-100 group-hover:text-amber-500 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                    {article.author.charAt(0)}
                  </span>
                  <span>By {article.author}</span>
                </div>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold group-hover:text-rose-500 transition-colors flex items-center gap-1">
                  Read article
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
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdSenseSlot slot="blog-bottom" />
    </div>
  );
}
