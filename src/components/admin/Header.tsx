"use client";

import React from "react";

interface HeaderProps {
  siteName: string;
  lastUpdated: string;
  onLogout: () => void;
}

export default function Header({ siteName, lastUpdated, onLogout }: HeaderProps) {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-xl">🛡️</span>
        <span className="font-extrabold text-white font-display tracking-tight text-lg">
          {siteName} <span className="text-emerald-400 text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 ml-2">ADMIN</span>
        </span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Last change: <span className="font-mono text-white font-semibold">{lastUpdated}</span></span>
        </div>
        <button 
          onClick={onLogout}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-400 transition-colors border border-slate-700 font-bold cursor-pointer"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
