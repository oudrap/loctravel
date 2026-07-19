"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 text-white p-8 md:p-12 shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-emerald-200">
          <span>📬</span>
          <span>LocTravel Insider</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
          Discover Places Like a Local
        </h2>

        <p className="text-emerald-100 font-light text-base sm:text-lg leading-relaxed">
          Subscribe to our weekly travel briefing for secret neighborhood spots, budget hacks, and authentic local guides delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 font-medium text-sm animate-fade-in">
            🎉 Thank you! You&apos;ve successfully joined the LocTravel Insider newsletter.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-1 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3.5 rounded-2xl bg-white text-emerald-900 font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl text-sm whitespace-nowrap cursor-pointer"
            >
              {status === "loading" ? "Subscribing..." : "Get Free Guide"}
            </button>
          </form>
        )}

        <p className="text-[11px] text-emerald-200/60 font-mono">
          No spam, ever. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}
