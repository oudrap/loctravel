"use client";

import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  onCloseEdit: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, onCloseEdit }: SidebarProps) {
  const menuItems = [
    { tab: "dashboard", icon: "📊", label: "Dashboard" },
    { tab: "cities", icon: "🌍", label: "Cities" },
    { tab: "media", icon: "🖼️", label: "Media Library" },
    { tab: "blog", icon: "✍️", label: "Blog Articles" },
    { tab: "users", icon: "👥", label: "Users & Roles" },
    { tab: "ads", icon: "💰", label: "Ads (Placeholder)" },
    { tab: "affiliate", icon: "🔗", label: "Affiliate (Placeholder)" },
    { tab: "seo", icon: "📈", label: "SEO Config" },
    { tab: "settings", icon: "⚙️", label: "Settings" }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 space-y-6 hidden md:block shrink-0 overflow-y-auto">
      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 pl-3">Navigation</span>
        <nav className="space-y-1 mt-2">
          {menuItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                onCloseEdit();
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left cursor-pointer ${
                activeTab === item.tab
                  ? "bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-500"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
