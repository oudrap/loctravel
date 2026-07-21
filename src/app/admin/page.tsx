"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cities as initialCities } from "@/data/cities";
import { blogArticles as initialBlogArticles } from "@/data/blog";
import { City, BlogArticle, Attraction, Accommodation, Restaurant, FAQItem, TransportationOption } from "@/types/travel";

export default function AdminDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // CMS State (Initialized from static files, ready to hook into DB later)
  const [cities, setCities] = useState<City[]>(initialCities);
  const [blogs, setBlogs] = useState<BlogArticle[]>(initialBlogArticles);
  const [settings, setSettings] = useState({
    logo: "LocTravel",
    siteName: "LocTravel",
    primaryColor: "#10b981", // Emerald
    googleAnalytics: "G-XXXXXXXXXX",
    searchConsole: "sc-verification-key",
  });
  
  // Media Library State (Extract initial photos from cities & blogs)
  const [mediaItems, setMediaItems] = useState<{ id: string; url: string; citySlug: string; type: string }[]>([]);

  useEffect(() => {
    // Extract unique images to populate Media Library
    const items: { id: string; url: string; citySlug: string; type: string }[] = [];
    initialCities.forEach((city) => {
      if (city.heroImage) {
        items.push({ id: `hero-${city.slug}`, url: city.heroImage, citySlug: city.slug, type: "Hero" });
      }
      city.attractions.forEach((attr, idx) => {
        if (attr.image) {
          items.push({ id: `attr-${city.slug}-${idx}`, url: attr.image, citySlug: city.slug, type: "Attraction" });
        }
      });
      city.food.forEach((f, idx) => {
        if (f.image) {
          items.push({ id: `food-${city.slug}-${idx}`, url: f.image, citySlug: city.slug, type: "Food" });
        }
      });
    });
    initialBlogArticles.forEach((article) => {
      if (article.image) {
        items.push({ id: `blog-${article.slug}`, url: article.image, citySlug: "blog", type: "Blog" });
      }
    });
    setMediaItems(items);
  }, []);

  // Navigation / Tabs State
  const [activeTab, setActiveTab] = useState<"dashboard" | "cities" | "media" | "blog" | "users" | "ads" | "affiliate" | "seo" | "settings">("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCityFilter, setSelectedCityFilter] = useState("All");

  // Editor States
  const [editingCity, setEditingCity] = useState<City | null>(null);
  const [editingBlog, setEditingBlog] = useState<BlogArticle | null>(null);
  const [editorTab, setEditorTab] = useState<string>("hero");

  // Media Library Search/Filter
  const [mediaSearch, setMediaSearch] = useState("");
  const [mediaCityFilter, setMediaCityFilter] = useState("All");
  const [uploadUrl, setUploadUrl] = useState("");

  // Last Updated timestamp mockup
  const [lastUpdated, setLastUpdated] = useState("2026-07-21 23:25");

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid username or password. (Hint: admin / admin123)");
    }
  };

  // Quick Action Triggers
  const triggerCreateCity = () => {
    const newCity: City = {
      slug: "new-city-" + Date.now(),
      name: "New Destination",
      country: "Country Name",
      region: "Asia",
      tagline: "Unforgettable sights and hidden gems await you.",
      heroImage: "",
      description: "Brief descriptive overview for card listing.",
      seoTitle: "New Destination Travel Guide | LocTravel",
      seoDescription: "Explore things to do, restaurants, hotels, and custom travel tips.",
      lat: 0,
      lon: 0,
      overview: ["Welcome to this beautiful destination."],
      bestTimeToVisit: {
        season: "Spring & Autumn",
        description: "Optimal mild temperatures and fewer crowds.",
        weatherDetails: "Average highs range between 18°C and 25°C."
      },
      attractions: [],
      food: [],
      whereToStay: [],
      bestRestaurants: [],
      transportation: [],
      budgetTips: [],
      safetyTips: [],
      hiddenGems: [],
      faq: []
    };
    setCities([newCity, ...cities]);
    setEditingCity(newCity);
    setEditorTab("hero");
    setActiveTab("cities");
  };

  const triggerCreateBlog = () => {
    const newBlog: BlogArticle = {
      slug: "new-blog-" + Date.now(),
      title: "New Blog Post",
      excerpt: "Short summary about this interesting travel topic.",
      content: "<p>Write your detailed body paragraph here.</p>",
      image: "",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      author: "Admin Editor",
      category: "Tips",
      readTime: "3 min read",
      seoTitle: "New Blog Post | LocTravel Blog",
      seoDescription: "Read the latest tips and tricks for world travelers."
    };
    setBlogs([newBlog, ...blogs]);
    setEditingBlog(newBlog);
    setActiveTab("blog");
  };

  // Update last modified timestamp helper
  const touchTimestamp = () => {
    const now = new Date();
    setLastUpdated(now.toISOString().replace("T", " ").substring(0, 16));
  };

  // Save City Editor changes
  const saveCityEdit = () => {
    if (!editingCity) return;
    setCities(cities.map(c => c.slug === editingCity.slug ? editingCity : c));
    setEditingCity(null);
    touchTimestamp();
  };

  // Delete City
  const deleteCity = (slug: string) => {
    if (confirm("Are you sure you want to delete this city?")) {
      setCities(cities.filter(c => c.slug !== slug));
      touchTimestamp();
    }
  };

  // Save Blog Editor changes
  const saveBlogEdit = () => {
    if (!editingBlog) return;
    setBlogs(blogs.map(b => b.slug === editingBlog.slug ? editingBlog : b));
    setEditingBlog(null);
    touchTimestamp();
  };

  // Delete Blog
  const deleteBlog = (slug: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter(b => b.slug !== slug));
      touchTimestamp();
    }
  };

  // Media Library uploads simulation
  const addMediaUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadUrl.trim()) return;
    setMediaItems([
      { id: `custom-${Date.now()}`, url: uploadUrl, citySlug: mediaCityFilter, type: "Upload" },
      ...mediaItems
    ]);
    setUploadUrl("");
  };

  const deleteMediaItem = (id: string) => {
    if (confirm("Are you sure you want to delete this image from your Media Library?")) {
      setMediaItems(mediaItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Auth Screen Overlay if not authenticated */}
      {!isAuthenticated ? (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 w-full">
          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-3xl">🛡️</span>
              <h1 className="text-2xl font-extrabold text-white tracking-tight font-display">
                LocTravel CMS Portal
              </h1>
              <p className="text-xs text-slate-400">
                Please enter credentials to access your protected dashboard.
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 text-center font-mono">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all active:scale-98"
              >
                Sign In
              </button>
            </form>
            
            <div className="text-center">
              <Link href="/" className="text-xs text-slate-500 hover:text-emerald-400 transition-colors">
                ← Return to public website
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Admin Topbar */}
          <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <span className="font-extrabold text-white font-display tracking-tight text-lg">
                {settings.siteName} <span className="text-emerald-400 text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 ml-2">ADMIN</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Last change: <span className="font-mono text-white font-semibold">{lastUpdated}</span></span>
              </div>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-400 transition-colors border border-slate-700 font-bold"
              >
                Logout
              </button>
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 space-y-6 hidden md:block shrink-0 overflow-y-auto">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 pl-3">Navigation</span>
                <nav className="space-y-1">
                  {[
                    { tab: "dashboard", icon: "📊", label: "Dashboard" },
                    { tab: "cities", icon: "🌍", label: "Cities" },
                    { tab: "media", icon: "🖼️", label: "Media Library" },
                    { tab: "blog", icon: "✍️", label: "Blog articles" },
                    { tab: "users", icon: "👥", label: "Writers / Users" },
                    { tab: "ads", icon: "💰", label: "Ads Placements" },
                    { tab: "affiliate", icon: "🔗", label: "Affiliate Codes" },
                    { tab: "seo", icon: "📈", label: "Global SEO" },
                    { tab: "settings", icon: "⚙️", label: "Settings" }
                  ].map((item) => (
                    <button
                      key={item.tab}
                      onClick={() => {
                        setActiveTab(item.tab as any);
                        setEditingCity(null);
                        setEditingBlog(null);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-colors text-left ${
                        activeTab === item.tab && !editingCity && !editingBlog
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

            {/* Main Dashboard Area */}
            <main className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
              {/* TAB 1: DASHBOARD OVERVIEW */}
              {activeTab === "dashboard" && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Console Overview</h1>
                    <p className="text-sm text-slate-400 font-light">Real-time repository statistics & rapid shortcuts.</p>
                  </div>

                  {/* Status Metric Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Total Cities</span>
                      <div className="text-4xl font-extrabold text-white font-display">{cities.length}</div>
                      <span className="text-[10px] text-emerald-400">All SSG Pre-rendered</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Blog Posts</span>
                      <div className="text-4xl font-extrabold text-white font-display">{blogs.length}</div>
                      <span className="text-[10px] text-emerald-400">Live on /blog</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Total Assets</span>
                      <div className="text-4xl font-extrabold text-white font-display">{mediaItems.length}</div>
                      <span className="text-[10px] text-emerald-400">Unique verified links</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">SEO Status</span>
                      <div className="text-4xl font-extrabold text-white font-display">100%</div>
                      <span className="text-[10px] text-emerald-400 font-mono">JSON-LD schemas OK</span>
                    </div>
                  </div>

                  {/* Quick Actions Card */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-6">
                    <h2 className="text-lg font-bold text-white">Quick CMS Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <button 
                        onClick={triggerCreateCity}
                        className="p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>➕</span> Create New City Guide
                      </button>
                      <button 
                        onClick={triggerCreateBlog}
                        className="p-4 rounded-2xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>✍️</span> Create New Blog Post
                      </button>
                      <a 
                        href="/" 
                        target="_blank"
                        className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>🌐</span> View Public Web App
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CITIES TABLE & FULL SECTION EDITOR */}
              {activeTab === "cities" && (
                <div className="space-y-8">
                  {!editingCity ? (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h1 className="text-3xl font-extrabold text-white tracking-tight">Destination Guides</h1>
                          <p className="text-sm text-slate-400 font-light">Audit and modify all 50 pre-rendered travel guides.</p>
                        </div>
                        <button
                          onClick={triggerCreateCity}
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/15 cursor-pointer"
                        >
                          <span>➕</span> Add New City
                        </button>
                      </div>

                      {/* Filter & Search Bar */}
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                        <div className="relative w-full sm:w-80">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search city, region, or country..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <span className="text-xs text-slate-400 shrink-0">Region:</span>
                          <select
                            value={selectedCityFilter}
                            onChange={(e) => setSelectedCityFilter(e.target.value)}
                            className="w-full sm:w-44 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          >
                            <option value="All">All Regions</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="North America">North America</option>
                            <option value="Middle East">Middle East</option>
                          </select>
                        </div>
                      </div>

                      {/* Cities List Table */}
                      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60 font-mono">
                                <th className="p-4">Hero Image</th>
                                <th className="p-4">City Name</th>
                                <th className="p-4">Country</th>
                                <th className="p-4">Region</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                              {cities
                                .filter(c => {
                                  const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.country.toLowerCase().includes(searchQuery.toLowerCase());
                                  const matchRegion = selectedCityFilter === "All" || c.region === selectedCityFilter;
                                  return matchSearch && matchRegion;
                                })
                                .map((city) => (
                                  <tr key={city.slug} className="hover:bg-slate-800/40 transition-colors">
                                    <td className="p-4">
                                      <div className="w-16 h-10 rounded-lg overflow-hidden bg-slate-950 relative border border-slate-800 shrink-0">
                                        {city.heroImage && city.heroImage.trim() !== "" ? (
                                          /* eslint-disable-next-line @next/next/no-img-element */
                                          <img src={city.heroImage} alt={city.name} className="w-full h-full object-cover" />
                                        ) : (
                                          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-500 font-mono">NO IMAGE</div>
                                        )}
                                      </div>
                                    </td>
                                    <td className="p-4 font-bold text-white text-sm">{city.name}</td>
                                    <td className="p-4 text-slate-300">{city.country}</td>
                                    <td className="p-4"><span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">{city.region}</span></td>
                                    <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[10px] border border-emerald-500/20">PRE-RENDERED</span></td>
                                    <td className="p-4 text-center">
                                      <div className="flex items-center justify-center gap-2">
                                        <button
                                          onClick={() => {
                                            setEditingCity({ ...city });
                                            setEditorTab("hero");
                                          }}
                                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                                        >
                                          Edit
                                        </button>
                                        <button
                                          onClick={() => deleteCity(city.slug)}
                                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/10 hover:text-red-400 border border-slate-700 hover:border-red-500/20 transition-colors cursor-pointer"
                                        >
                                          Delete
                                        </button>
                                        <a
                                          href={`/destinations/${city.slug}`}
                                          target="_blank"
                                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-emerald-400 border border-slate-700 transition-colors"
                                        >
                                          Preview
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* FULL SECTION EDITOR (Tabbed for 15 sections requested!) */
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">Editing Travel Guide</div>
                          <h2 className="text-2xl font-extrabold text-white">{editingCity.name} ({editingCity.country})</h2>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setEditingCity(null)}
                            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-bold cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={saveCityEdit}
                            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-lg shadow-emerald-500/15 cursor-pointer"
                          >
                            Save Guide Changes
                          </button>
                        </div>
                      </div>

                      {/* Tab list of 15 Sections + Gallery */}
                      <div className="flex flex-wrap gap-1.5 border-b border-slate-800 pb-2">
                        {[
                          { tab: "hero", label: "1. Hero" },
                          { tab: "gallery", label: "2. Gallery" },
                          { tab: "overview", label: "3. Overview" },
                          { tab: "bestTime", label: "4. Climate" },
                          { tab: "attractions", label: "5. Attractions" },
                          { tab: "restaurants", label: "6. Restaurants" },
                          { tab: "hotels", label: "7. Hotels" },
                          { tab: "airport", label: "8. Airport" },
                          { tab: "transportation", label: "9. Transit" },
                          { tab: "food", label: "10. Food" },
                          { tab: "budget", label: "11. Budget" },
                          { tab: "safety", label: "12. Safety" },
                          { tab: "gems", label: "13. Gems" },
                          { tab: "faq", label: "14. FAQ" },
                          { tab: "seo", label: "15. SEO Config" }
                        ].map(tabItem => (
                          <button
                            key={tabItem.tab}
                            onClick={() => setEditorTab(tabItem.tab)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                              editorTab === tabItem.tab
                                ? "bg-slate-100 text-slate-950 border-white shadow-sm"
                                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
                            }`}
                          >
                            {tabItem.label}
                          </button>
                        ))}
                      </div>

                      {/* Section Editor Forms */}
                      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-6">
                        {/* SECTION 1: HERO */}
                        {editorTab === "hero" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white">Hero Settings</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">City Name</label>
                                <input
                                  type="text"
                                  value={editingCity.name}
                                  onChange={(e) => setEditingCity({ ...editingCity, name: e.target.value })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Country</label>
                                <input
                                  type="text"
                                  value={editingCity.country}
                                  onChange={(e) => setEditingCity({ ...editingCity, country: e.target.value })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                              <div className="space-y-1 sm:col-span-2">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Subtitle / Tagline</label>
                                <input
                                  type="text"
                                  value={editingCity.tagline}
                                  onChange={(e) => setEditingCity({ ...editingCity, tagline: e.target.value })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                              <div className="space-y-1 sm:col-span-2">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Hero Image URL</label>
                                <input
                                  type="text"
                                  value={editingCity.heroImage}
                                  onChange={(e) => setEditingCity({ ...editingCity, heroImage: e.target.value })}
                                  placeholder="https://..."
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* SECTION 2: GALLERY */}
                        {editorTab === "gallery" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white font-display">Gallery Image Management</h3>
                            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                              📌 Simulate reordering & deletion of images attached to this travel guide page repository.
                            </div>

                            {/* Simulate upload */}
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Add new photo URL to gallery..."
                                id="new-gallery-url"
                                className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const input = document.getElementById("new-gallery-url") as HTMLInputElement;
                                  if (input && input.value.trim() !== "") {
                                    const newAttr = {
                                      name: "Gallery Photo",
                                      image: input.value,
                                      description: "Custom uploaded gallery photo.",
                                      duration: "N/A",
                                      cost: "Free",
                                      type: "Gallery"
                                    };
                                    setEditingCity({
                                      ...editingCity,
                                      attractions: [...editingCity.attractions, newAttr]
                                    });
                                    input.value = "";
                                  }
                                }}
                                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer"
                              >
                                Add Photo
                              </button>
                            </div>

                            {/* List gallery items */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                              {editingCity.attractions.map((attr, idx) => (
                                attr.image ? (
                                  <div key={idx} className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={attr.image} alt="" className="w-full h-32 object-cover" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (idx > 0) {
                                            const newAttrs = [...editingCity.attractions];
                                            const temp = newAttrs[idx];
                                            newAttrs[idx] = newAttrs[idx - 1];
                                            newAttrs[idx - 1] = temp;
                                            setEditingCity({ ...editingCity, attractions: newAttrs });
                                          }
                                        }}
                                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs cursor-pointer"
                                      >
                                        ◀
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (confirm("Delete this image?")) {
                                            setEditingCity({
                                              ...editingCity,
                                              attractions: editingCity.attractions.filter((_, i) => i !== idx)
                                            });
                                          }
                                        }}
                                        className="p-1.5 rounded bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold cursor-pointer"
                                      >
                                        Delete
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          if (idx < editingCity.attractions.length - 1) {
                                            const newAttrs = [...editingCity.attractions];
                                            const temp = newAttrs[idx];
                                            newAttrs[idx] = newAttrs[idx + 1];
                                            newAttrs[idx + 1] = temp;
                                            setEditingCity({ ...editingCity, attractions: newAttrs });
                                          }
                                        }}
                                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs cursor-pointer"
                                      >
                                        ▶
                                      </button>
                                    </div>
                                  </div>
                                ) : null
                              ))}
                            </div>
                          </div>
                        )}

                        {/* SECTION 3: OVERVIEW */}
                        {editorTab === "overview" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white">Overview Paragraphs</h3>
                            {editingCity.overview.map((para, idx) => (
                              <div key={idx} className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Paragraph {idx + 1}</label>
                                <textarea
                                  rows={4}
                                  value={para}
                                  onChange={(e) => {
                                    const newOverviews = [...editingCity.overview];
                                    newOverviews[idx] = e.target.value;
                                    setEditingCity({ ...editingCity, overview: newOverviews });
                                  }}
                                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 4: BEST TIME */}
                        {editorTab === "bestTime" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white font-display">Best Visit Season & Weather details</h3>
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Season Heading</label>
                                <input
                                  type="text"
                                  value={editingCity.bestTimeToVisit.season}
                                  onChange={(e) => setEditingCity({
                                    ...editingCity,
                                    bestTimeToVisit: { ...editingCity.bestTimeToVisit, season: e.target.value }
                                  })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">General Description</label>
                                <textarea
                                  rows={3}
                                  value={editingCity.bestTimeToVisit.description}
                                  onChange={(e) => setEditingCity({
                                    ...editingCity,
                                    bestTimeToVisit: { ...editingCity.bestTimeToVisit, description: e.target.value }
                                  })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Seasonal Climate Stats</label>
                                <textarea
                                  rows={3}
                                  value={editingCity.bestTimeToVisit.weatherDetails}
                                  onChange={(e) => setEditingCity({
                                    ...editingCity,
                                    bestTimeToVisit: { ...editingCity.bestTimeToVisit, weatherDetails: e.target.value }
                                  })}
                                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* SECTION 5: ATTRACTIONS */}
                        {editorTab === "attractions" && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Attractions List</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newAttr: Attraction = {
                                    name: "New Attraction Site",
                                    image: "",
                                    description: "Description details...",
                                    duration: "2 hours",
                                    cost: "Free",
                                    type: "Sightseeing"
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    attractions: [...editingCity.attractions, newAttr]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add Attraction
                              </button>
                            </div>

                            {editingCity.attractions.map((attr, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-400 font-mono">Attraction #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        attractions: editingCity.attractions.filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete Attraction
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Name</label>
                                    <input
                                      type="text"
                                      value={attr.name}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, name: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Type / Category</label>
                                    <input
                                      type="text"
                                      value={attr.type}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, type: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Image URL</label>
                                    <input
                                      type="text"
                                      value={attr.image}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, image: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                    <textarea
                                      rows={2}
                                      value={attr.description}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, description: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Why It's Famous (Optional)</label>
                                    <input
                                      type="text"
                                      value={attr.whyFamous || ""}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, whyFamous: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Visitor Tip (Optional)</label>
                                    <input
                                      type="text"
                                      value={attr.visitorTips || ""}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, visitorTips: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Approx Duration</label>
                                    <input
                                      type="text"
                                      value={attr.duration}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, duration: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Cost</label>
                                    <input
                                      type="text"
                                      value={attr.cost}
                                      onChange={(e) => {
                                        const newAttrs = [...editingCity.attractions];
                                        newAttrs[idx] = { ...attr, cost: e.target.value };
                                        setEditingCity({ ...editingCity, attractions: newAttrs });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 6: RESTAURANTS */}
                        {editorTab === "restaurants" && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Best Restaurants</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newRest: Restaurant = {
                                    name: "New Dining Spot",
                                    cuisine: "Local Cuisine",
                                    description: "Gourmet dining experience...",
                                    location: "Central Avenue",
                                    priceRange: "$$"
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    bestRestaurants: [...(editingCity.bestRestaurants || []), newRest]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add Restaurant
                              </button>
                            </div>

                            {(editingCity.bestRestaurants || []).map((rest, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-400 font-mono">Restaurant #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        bestRestaurants: (editingCity.bestRestaurants || []).filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Name</label>
                                    <input
                                      type="text"
                                      value={rest.name}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, name: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Cuisine</label>
                                    <input
                                      type="text"
                                      value={rest.cuisine}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, cuisine: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Image URL (Optional)</label>
                                    <input
                                      type="text"
                                      value={rest.image || ""}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, image: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Price range ($-$$$$)</label>
                                    <input
                                      type="text"
                                      value={rest.priceRange}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, priceRange: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Location / Address</label>
                                    <input
                                      type="text"
                                      value={rest.location}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, location: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                    <textarea
                                      rows={2}
                                      value={rest.description}
                                      onChange={(e) => {
                                        const newRests = [...(editingCity.bestRestaurants || [])];
                                        newRests[idx] = { ...rest, description: e.target.value };
                                        setEditingCity({ ...editingCity, bestRestaurants: newRests });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 7: HOTELS */}
                        {editorTab === "hotels" && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Recommended Accommodation</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newStay: Accommodation = {
                                    area: "City Center",
                                    name: "New Premium Hotel",
                                    starRating: "5-Star",
                                    description: "Premium boutique rooms...",
                                    priceRange: "$$$ (Mid-Range)",
                                    recommendation: "Convenient access to main sites",
                                    bestFor: "Families & Couples"
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    whereToStay: [...(editingCity.whereToStay || []), newStay]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add Hotel
                              </button>
                            </div>

                            {(editingCity.whereToStay || []).map((stay, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-400 font-mono">Hotel Card #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        whereToStay: (editingCity.whereToStay || []).filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="space-y-1 col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Hotel Name</label>
                                    <input
                                      type="text"
                                      value={stay.name || ""}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, name: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Area / Location Zone</label>
                                    <input
                                      type="text"
                                      value={stay.area}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, area: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Star Rating Badge</label>
                                    <input
                                      type="text"
                                      value={stay.starRating || ""}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, starRating: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Image URL</label>
                                    <input
                                      type="text"
                                      value={stay.image || ""}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, image: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Price Category ($-$$$$)</label>
                                    <input
                                      type="text"
                                      value={stay.priceRange}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, priceRange: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Best For Badge</label>
                                    <input
                                      type="text"
                                      value={stay.bestFor || ""}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, bestFor: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                    <textarea
                                      rows={2}
                                      value={stay.description}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, description: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Local Recommendation Tip</label>
                                    <input
                                      type="text"
                                      value={stay.recommendation}
                                      onChange={(e) => {
                                        const newStays = [...(editingCity.whereToStay || [])];
                                        newStays[idx] = { ...stay, recommendation: e.target.value };
                                        setEditingCity({ ...editingCity, whereToStay: newStays });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 8 & 9: AIRPORT & TRANSPORTATION */}
                        {(editorTab === "airport" || editorTab === "transportation") && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Airport & Transportation Options</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newTransit: TransportationOption = {
                                    type: "New Transit Option",
                                    description: "Describe how to use this service...",
                                    cost: "10 SAR / 3 USD"
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    transportation: [...editingCity.transportation, newTransit]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add Transit Option
                              </button>
                            </div>

                            {editingCity.transportation.map((option, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-400 font-mono">Transit #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        transportation: editingCity.transportation.filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Transit Type / Title</label>
                                    <input
                                      type="text"
                                      value={option.type}
                                      onChange={(e) => {
                                        const newTransits = [...editingCity.transportation];
                                        newTransits[idx] = { ...option, type: e.target.value };
                                        setEditingCity({ ...editingCity, transportation: newTransits });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Image URL (Optional)</label>
                                    <input
                                      type="text"
                                      value={option.image || ""}
                                      onChange={(e) => {
                                        const newTransits = [...editingCity.transportation];
                                        newTransits[idx] = { ...option, image: e.target.value };
                                        setEditingCity({ ...editingCity, transportation: newTransits });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                    <textarea
                                      rows={2}
                                      value={option.description}
                                      onChange={(e) => {
                                        const newTransits = [...editingCity.transportation];
                                        newTransits[idx] = { ...option, description: e.target.value };
                                        setEditingCity({ ...editingCity, transportation: newTransits });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Cost Details</label>
                                    <input
                                      type="text"
                                      value={option.cost}
                                      onChange={(e) => {
                                        const newTransits = [...editingCity.transportation];
                                        newTransits[idx] = { ...option, cost: e.target.value };
                                        setEditingCity({ ...editingCity, transportation: newTransits });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 10: LOCAL FOOD */}
                        {editorTab === "food" && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Local Food & Dishes</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newFood: any = {
                                    name: "New Dish",
                                    image: "",
                                    description: "A popular traditional dish...",
                                    recommendation: "Try it at traditional restaurants."
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    food: [...editingCity.food, newFood]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add Dish
                              </button>
                            </div>

                            {editingCity.food.map((dish, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-slate-400 font-mono">Dish #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        food: editingCity.food.filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Dish Name</label>
                                    <input
                                      type="text"
                                      value={dish.name}
                                      onChange={(e) => {
                                        const newFoods = [...editingCity.food];
                                        newFoods[idx] = { ...dish, name: e.target.value };
                                        setEditingCity({ ...editingCity, food: newFoods });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Image URL</label>
                                    <input
                                      type="text"
                                      value={dish.image}
                                      onChange={(e) => {
                                        const newFoods = [...editingCity.food];
                                        newFoods[idx] = { ...dish, image: e.target.value };
                                        setEditingCity({ ...editingCity, food: newFoods });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                    <textarea
                                      rows={2}
                                      value={dish.description}
                                      onChange={(e) => {
                                        const newFoods = [...editingCity.food];
                                        newFoods[idx] = { ...dish, description: e.target.value };
                                        setEditingCity({ ...editingCity, food: newFoods });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                  <div className="space-y-1 sm:col-span-2">
                                    <label className="text-[9px] uppercase font-bold text-slate-500">Local Tip / Recommendation</label>
                                    <input
                                      type="text"
                                      value={dish.recommendation}
                                      onChange={(e) => {
                                        const newFoods = [...editingCity.food];
                                        newFoods[idx] = { ...dish, recommendation: e.target.value };
                                        setEditingCity({ ...editingCity, food: newFoods });
                                      }}
                                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 11 & 12: BUDGET & SAFETY */}
                        {(editorTab === "budget" || editorTab === "safety") && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white uppercase tracking-widest font-mono text-xs text-slate-400">
                              {editorTab === "budget" ? "Budget Advice List" : "Safety Advice List"}
                            </h3>
                            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                              📌 Use the default budget/safety arrays configured in the city database.
                            </div>
                            {editorTab === "budget" ? (
                              <div className="space-y-3">
                                {editingCity.budgetTips.map((tip, idx) => (
                                  <div key={idx} className="space-y-2 p-3 bg-slate-950/40 rounded-xl border border-slate-800">
                                    <input
                                      type="text"
                                      value={tip.title}
                                      onChange={(e) => {
                                        const newTips = [...editingCity.budgetTips];
                                        newTips[idx] = { ...tip, title: e.target.value };
                                        setEditingCity({ ...editingCity, budgetTips: newTips });
                                      }}
                                      className="w-full bg-transparent font-bold border-b border-slate-800 text-xs text-white pb-1"
                                    />
                                    <textarea
                                      rows={2}
                                      value={tip.description}
                                      onChange={(e) => {
                                        const newTips = [...editingCity.budgetTips];
                                        newTips[idx] = { ...tip, description: e.target.value };
                                        setEditingCity({ ...editingCity, budgetTips: newTips });
                                      }}
                                      className="w-full bg-transparent text-xs text-slate-400"
                                    />
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {editingCity.safetyTips.map((tip, idx) => (
                                  <div key={idx} className="space-y-2 p-3 bg-slate-950/40 rounded-xl border border-slate-800">
                                    <input
                                      type="text"
                                      value={tip.title}
                                      onChange={(e) => {
                                        const newTips = [...editingCity.safetyTips];
                                        newTips[idx] = { ...tip, title: e.target.value };
                                        setEditingCity({ ...editingCity, safetyTips: newTips });
                                      }}
                                      className="w-full bg-transparent font-bold border-b border-slate-800 text-xs text-white pb-1"
                                    />
                                    <textarea
                                      rows={2}
                                      value={tip.description}
                                      onChange={(e) => {
                                        const newTips = [...editingCity.safetyTips];
                                        newTips[idx] = { ...tip, description: e.target.value };
                                        setEditingCity({ ...editingCity, safetyTips: newTips });
                                      }}
                                      className="w-full bg-transparent text-xs text-slate-400"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* SECTION 13: HIDDEN GEMS */}
                        {editorTab === "gems" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white font-display">Hidden Gems</h3>
                            {editingCity.hiddenGems.map((gem, idx) => (
                              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                                <div className="space-y-1">
                                  <label className="text-[9px] uppercase font-bold text-slate-500">Gem Name</label>
                                  <input
                                    type="text"
                                    value={gem.name}
                                    onChange={(e) => {
                                      const newGems = [...editingCity.hiddenGems];
                                      newGems[idx] = { ...gem, name: e.target.value };
                                      setEditingCity({ ...editingCity, hiddenGems: newGems });
                                    }}
                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[9px] uppercase font-bold text-slate-500">Image URL</label>
                                  <input
                                    type="text"
                                    value={gem.image}
                                    onChange={(e) => {
                                      const newGems = [...editingCity.hiddenGems];
                                      newGems[idx] = { ...gem, image: e.target.value };
                                      setEditingCity({ ...editingCity, hiddenGems: newGems });
                                    }}
                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[9px] uppercase font-bold text-slate-500">Description</label>
                                  <textarea
                                    rows={2}
                                    value={gem.description}
                                    onChange={(e) => {
                                      const newGems = [...editingCity.hiddenGems];
                                      newGems[idx] = { ...gem, description: e.target.value };
                                      setEditingCity({ ...editingCity, hiddenGems: newGems });
                                    }}
                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[9px] uppercase font-bold text-slate-500">Insider Tip</label>
                                  <input
                                    type="text"
                                    value={gem.tip}
                                    onChange={(e) => {
                                      const newGems = [...editingCity.hiddenGems];
                                      newGems[idx] = { ...gem, tip: e.target.value };
                                      setEditingCity({ ...editingCity, hiddenGems: newGems });
                                    }}
                                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 14: FAQ */}
                        {editorTab === "faq" && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-base font-bold text-white">Frequently Asked Questions</h3>
                              <button
                                type="button"
                                onClick={() => {
                                  const newFaq: FAQItem = {
                                    question: "New Question?",
                                    answer: "Detail answer goes here..."
                                  };
                                  setEditingCity({
                                    ...editingCity,
                                    faq: [...editingCity.faq, newFaq]
                                  });
                                }}
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                              >
                                + Add FAQ Item
                              </button>
                            </div>

                            {editingCity.faq.map((item, idx) => (
                              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px] font-bold text-slate-500 font-mono">FAQ #{idx + 1}</span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setEditingCity({
                                        ...editingCity,
                                        faq: editingCity.faq.filter((_, i) => i !== idx)
                                      });
                                    }}
                                    className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="space-y-2">
                                  <input
                                    type="text"
                                    value={item.question}
                                    onChange={(e) => {
                                      const newFaqs = [...editingCity.faq];
                                      newFaqs[idx] = { ...item, question: e.target.value };
                                      setEditingCity({ ...editingCity, faq: newFaqs });
                                    }}
                                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-bold"
                                    placeholder="Question"
                                  />
                                  <textarea
                                    rows={3}
                                    value={item.answer}
                                    onChange={(e) => {
                                      const newFaqs = [...editingCity.faq];
                                      newFaqs[idx] = { ...item, answer: e.target.value };
                                      setEditingCity({ ...editingCity, faq: newFaqs });
                                    }}
                                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white"
                                    placeholder="Answer"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* SECTION 15: SEO */}
                        {editorTab === "seo" && (
                          <div className="space-y-4">
                            <h3 className="text-base font-bold text-white font-display">SEO Metadata Configuration</h3>
                            <div className="grid grid-cols-1 gap-4">
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">SEO Title Tag</label>
                                <input
                                  type="text"
                                  value={editingCity.seoTitle}
                                  onChange={(e) => setEditingCity({ ...editingCity, seoTitle: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Meta Description</label>
                                <textarea
                                  rows={3}
                                  value={editingCity.seoDescription}
                                  onChange={(e) => setEditingCity({ ...editingCity, seoDescription: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Keywords (Comma separated)</label>
                                <input
                                  type="text"
                                  placeholder="travel, tourism, guide, local tips"
                                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Slug Path (e.g. /destinations/city-slug)</label>
                                <input
                                  type="text"
                                  value={editingCity.slug}
                                  onChange={(e) => setEditingCity({ ...editingCity, slug: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono text-emerald-400"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                        <button
                          onClick={() => setEditingCity(null)}
                          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-bold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={saveCityEdit}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
                        >
                          Save Guide Changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: MEDIA LIBRARY */}
              {activeTab === "media" && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Media Library</h1>
                    <p className="text-sm text-slate-400 font-light font-sans">Upload assets and audit live travel photography links.</p>
                  </div>

                  {/* Upload Simulated Input */}
                  <form onSubmit={addMediaUrl} className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                    <h3 className="text-sm font-bold text-white">Upload / Add Image Asset</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="url"
                        required
                        value={uploadUrl}
                        onChange={(e) => setUploadUrl(e.target.value)}
                        placeholder="Enter direct image URL (e.g. https://images.pexels.com/photos/...) or DataURI..."
                        className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <select
                        value={mediaCityFilter}
                        onChange={(e) => setMediaCityFilter(e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="All">Global Asset</option>
                        {cities.map(c => (
                          <option key={c.slug} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 cursor-pointer"
                      >
                        Register Asset
                      </button>
                    </div>
                  </form>

                  {/* Media Search and Filter Toolbar */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                    <input
                      type="text"
                      value={mediaSearch}
                      onChange={(e) => setMediaSearch(e.target.value)}
                      placeholder="Search image urls..."
                      className="w-full sm:w-80 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <span className="text-xs text-slate-400 shrink-0">Filter by City:</span>
                      <select
                        value={mediaCityFilter}
                        onChange={(e) => setMediaCityFilter(e.target.value)}
                        className="w-full sm:w-44 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="All">All Sites</option>
                        <option value="blog">Blog Posts</option>
                        {cities.map(c => (
                          <option key={c.slug} value={c.slug}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Media Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                    {mediaItems
                      .filter((item) => {
                        const matchSearch = item.url.toLowerCase().includes(mediaSearch.toLowerCase());
                        const matchCity = mediaCityFilter === "All" || item.citySlug === mediaCityFilter;
                        return matchSearch && matchCity;
                      })
                      .map((item) => (
                        <div
                          key={item.id}
                          className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm relative hover:border-emerald-500/50 transition-colors flex flex-col h-44"
                        >
                          <div className="h-28 relative bg-slate-950 flex items-center justify-center overflow-hidden">
                            {item.url && item.url.trim() !== "" ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img src={item.url} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <span className="text-[10px] text-slate-600 font-mono">BROKEN LINK</span>
                            )}
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-slate-950/80 text-[8px] font-bold text-emerald-400 tracking-wider uppercase border border-white/5">
                              {item.type}
                            </span>
                          </div>
                          <div className="p-2 flex-1 flex flex-col justify-between bg-slate-900">
                            <div className="text-[8px] font-mono text-slate-500 truncate">{item.url}</div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-[8px] font-bold text-slate-400 capitalize truncate max-w-[80px]">
                                {item.citySlug}
                              </span>
                              <button
                                onClick={() => deleteMediaItem(item.id)}
                                className="text-[9px] font-bold text-red-500 hover:text-red-400 cursor-pointer"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* TAB 4: BLOG POSTS */}
              {activeTab === "blog" && (
                <div className="space-y-8">
                  {!editingBlog ? (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">Blog Manager</h1>
                          <p className="text-sm text-slate-400 font-light font-sans">Draft and manage public travel advice journal entries.</p>
                        </div>
                        <button
                          onClick={triggerCreateBlog}
                          className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-teal-500/15 cursor-pointer"
                        >
                          <span>➕</span> Write Blog Post
                        </button>
                      </div>

                      {/* Blog Articles list */}
                      <div className="grid grid-cols-1 gap-6">
                        {blogs.map((blog) => (
                          <div
                            key={blog.slug}
                            className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-6 hover:border-slate-700 transition-colors"
                          >
                            <div className="sm:w-1/4 h-32 rounded-2xl overflow-hidden bg-slate-950 relative border border-slate-800">
                              {blog.image && blog.image.trim() !== "" ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={blog.image} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-slate-500 font-mono">NO THUMBNAIL</div>
                              )}
                            </div>
                            <div className="sm:w-3/4 flex flex-col justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs">
                                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">{blog.category}</span>
                                  <span className="text-slate-500 font-mono">{blog.date} • {blog.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white">{blog.title}</h3>
                                <p className="text-xs text-slate-400 line-clamp-2">{blog.excerpt}</p>
                              </div>
                              
                              <div className="flex justify-between items-center pt-4 border-t border-slate-800/80 mt-4">
                                <span className="text-xs text-slate-500">Author: <span className="text-white font-semibold">{blog.author}</span></span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => setEditingBlog({ ...blog })}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold cursor-pointer"
                                  >
                                    Edit Post
                                  </button>
                                  <button
                                    onClick={() => deleteBlog(blog.slug)}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/10 hover:text-red-400 border border-slate-700 text-xs font-bold cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                  <Link
                                    href={`/blog/${blog.slug}`}
                                    target="_blank"
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 text-xs font-bold"
                                  >
                                    Preview
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Edit Blog Post form */
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-teal-400 uppercase tracking-widest font-mono">Editing Journal Article</div>
                          <h2 className="text-2xl font-extrabold text-white">{editingBlog.title}</h2>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setEditingBlog(null)}
                            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={saveBlogEdit}
                            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs cursor-pointer"
                          >
                            Save Post Changes
                          </button>
                        </div>
                      </div>

                      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Post Title</label>
                            <input
                              type="text"
                              value={editingBlog.title}
                              onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Category Tag</label>
                            <input
                              type="text"
                              value={editingBlog.category}
                              onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Author Name</label>
                            <input
                              type="text"
                              value={editingBlog.author}
                              onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Read Time (e.g. 5 min read)</label>
                            <input
                              type="text"
                              value={editingBlog.readTime}
                              onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Cover Image URL</label>
                            <input
                              type="text"
                              value={editingBlog.image}
                              onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Short Summary Excerpt</label>
                            <input
                              type="text"
                              value={editingBlog.excerpt}
                              onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400">Body Content (HTML Allowed)</label>
                            <textarea
                              rows={10}
                              value={editingBlog.content}
                              onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono leading-relaxed"
                            />
                          </div>
                          
                          <div className="space-y-1 sm:col-span-2 border-t border-slate-800 pt-4 mt-2">
                            <h4 className="text-xs font-bold text-slate-300 font-display">Blog SEO Configuration</h4>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">SEO Title</label>
                            <input
                              type="text"
                              value={editingBlog.seoTitle}
                              onChange={(e) => setEditingBlog({ ...editingBlog, seoTitle: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400">SEO Meta Description</label>
                            <textarea
                              rows={2}
                              value={editingBlog.seoDescription}
                              onChange={(e) => setEditingBlog({ ...editingBlog, seoDescription: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div className="space-y-1 sm:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-slate-400 font-mono">Slug URL Path</label>
                            <input
                              type="text"
                              value={editingBlog.slug}
                              onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono text-teal-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                        <button
                          onClick={() => setEditingBlog(null)}
                          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={saveBlogEdit}
                          className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs cursor-pointer"
                        >
                          Save Post Changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: USERS MANAGER (PREPARATORY MOCK) */}
              {activeTab === "users" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">User Roles & Writers</h1>
                    <p className="text-sm text-slate-400 font-light">Provision accounts for authors and editors.</p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60 font-mono">
                          <th className="p-4">User Avatar</th>
                          <th className="p-4">Full Name</th>
                          <th className="p-4">Email</th>
                          <th className="p-4">Role Assigned</th>
                          <th className="p-4">Permitted Zones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {[
                          { name: "Admin Manager", email: "admin@loctravel.com", role: "Super Administrator", zones: "All Global Domains" },
                          { name: "Elena Rostova", email: "elena@loctravel.com", role: "Journalist Contributor", zones: "Solo Travel / Europe Guides" },
                          { name: "Marcus Chen", email: "marcus@loctravel.com", role: "Media Photographer", zones: "Attraction Gallery Assets" }
                        ].map((user, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                            <td className="p-4">
                              <span className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px]">
                                {user.name.charAt(0)}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-white">{user.name}</td>
                            <td className="p-4 text-slate-300 font-mono">{user.email}</td>
                            <td className="p-4">
                              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20 uppercase font-bold">
                                {user.role}
                              </span>
                            </td>
                            <td className="p-4 text-slate-400 font-light">{user.zones}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 6: ADS PLACEHOLDERS */}
              {activeTab === "ads" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Ad Slots Configuration</h1>
                    <p className="text-sm text-slate-400 font-light">Set up Google AdSense or Custom Ads placeholders.</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                    <h3 className="text-base font-bold text-white">Simulation Setup</h3>
                    <p className="text-xs text-slate-400">Configure AdSense keys and tags below. Placeholders are already active in production templates.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">AdSense Publisher ID</label>
                        <input type="text" placeholder="pub-xxxxxxxxxxxxxxxx" disabled className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-600 font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Default Slot Code</label>
                        <input type="text" placeholder="1234567890" disabled className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-600 font-mono" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: AFFILIATE PLACEHOLDERS */}
              {activeTab === "affiliate" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Affiliate Integrations</h1>
                    <p className="text-sm text-slate-400 font-light">Configure booking API codes and marketing identifiers.</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                    <h3 className="text-base font-bold text-white">Simulation Setup</h3>
                    <p className="text-xs text-slate-400">No booking forms or commercial links are deployed yet. Prepare tokens below.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Booking.com Partner Tag</label>
                        <input type="text" placeholder="partner-12345" disabled className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-600 font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">GetYourGuide Campaign Code</label>
                        <input type="text" placeholder="camp-67890" disabled className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-600 font-mono" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 8: SEO METRICS */}
              {activeTab === "seo" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">SEO Auditing Dashboard</h1>
                    <p className="text-sm text-slate-400 font-light font-sans">Manage robots, sitemaps, and search engines schemas.</p>
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                    <h3 className="text-base font-bold text-white">Sitemap Metrics</h3>
                    <p className="text-xs text-slate-400">Automatic sitemap configurations are compiled on build.</p>
                    <ul className="space-y-2 text-xs font-mono text-slate-300">
                      <li>🌐 Sitemap URL: <a href="/sitemap.xml" className="text-emerald-400 hover:underline">/sitemap.xml</a></li>
                      <li>✅ Pre-rendered Routes: <span className="text-white font-bold">62 static resources</span></li>
                      <li>✅ Meta Titles Audit: <span className="text-white font-bold">100% Filled</span></li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 9: SETTINGS FORM */}
              {activeTab === "settings" && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">Global Configurations</h1>
                    <p className="text-sm text-slate-400 font-light">Adjust site identities, styling colors, and verification meta codes.</p>
                  </div>

                  {/* Configurations Form */}
                  <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Site Logo Text</label>
                        <input
                          type="text"
                          value={settings.logo}
                          onChange={(e) => setSettings({ ...settings, logo: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Site Display Name</label>
                        <input
                          type="text"
                          value={settings.siteName}
                          onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Primary Color Theme</label>
                        <div className="flex gap-3">
                          <input
                            type="color"
                            value={settings.primaryColor}
                            onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                            className="w-10 h-10 rounded bg-transparent border-0 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={settings.primaryColor}
                            onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                            className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Google Analytics (UA / G-Tag)</label>
                        <input
                          type="text"
                          value={settings.googleAnalytics}
                          onChange={(e) => setSettings({ ...settings, googleAnalytics: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[10px] uppercase font-bold text-slate-400">Google Search Console verification key</label>
                        <input
                          type="text"
                          value={settings.searchConsole}
                          onChange={(e) => setSettings({ ...settings, searchConsole: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-slate-800">
                      <button
                        onClick={() => {
                          touchTimestamp();
                          alert("Global settings configured successfully! (Stored in local React state)");
                        }}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/15 cursor-pointer"
                      >
                        Save Settings Configuration
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </main>
          </div>
        </>
      )}
    </div>
  );
}
