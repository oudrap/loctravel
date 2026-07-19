"use client";

import React, { useState } from "react";
import AdSenseSlot from "@/components/ads/AdSenseSlot";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <section className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
          Support & Feedback
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Have feedback on one of our guides, or want to contribute a local secret for your own city? We&apos;d love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Form Column */}
        <div className="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-6 md:p-8 rounded-3xl shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <span className="text-4xl">🎉</span>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Message Sent Successfully!
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal max-w-xs mx-auto">
                Thank you for contacting LocTravel. Our editors will review your feedback and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Feedback on Paris Guide"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your feedback or city recommendations here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold text-sm shadow-md transition-all active:scale-98"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Details Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl space-y-4">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
              LocTravel Editorial
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Are you a local resident or professional traveler interested in writing or updating a city guide on LocTravel? Use the form to reach our editorial desk.
            </p>
            <div className="pt-2 text-xs space-y-2 font-mono">
              <p>📍 Paris / New York / Tokyo</p>
              <p>✉️ editors@loctravel.com</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl">
            <AdSenseSlot slot="contact-sidebar" />
          </div>
        </div>
      </div>
    </div>
  );
}
