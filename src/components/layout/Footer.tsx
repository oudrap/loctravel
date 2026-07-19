import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-emerald-500/10">
                L
              </span>
              <span className="font-extrabold text-xl tracking-tight text-white">
                LocTravel<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              Discover Places Like a Local. Expertly curated travel guides, hidden gems, and authentic secrets for travelers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-emerald-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Support */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & AdSense notice */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-500 leading-normal font-light">
              LocTravel is a participant in the Google AdSense program. Ads support our 100% free local travel content.
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>
            © {currentYear} LocTravel. All rights reserved. Discover Places Like a Local.
          </div>
          <div className="flex gap-4 text-slate-500">
            <span>Clean Content • AdSense Ready • Fast Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
