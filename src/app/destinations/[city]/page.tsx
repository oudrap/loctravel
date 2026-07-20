import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, cities } from "@/data/cities";
import Accordion from "@/components/ui/Accordion";
import AdSenseSlot from "@/components/ads/AdSenseSlot";
import JsonLd, {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateTravelGuideSchema,
} from "@/components/layout/JsonLd";
import WeatherCard from "@/components/ui/WeatherCard";
import NewsletterSection from "@/components/ui/NewsletterSection";
import HeroCityCards from "@/components/ui/HeroCityCards";
import { getCityWeather } from "@/lib/weather";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: "City Not Found | LocTravel",
      description: "The requested travel guide could not be found.",
    };
  }

  return {
    title: city.seoTitle,
    description: city.seoDescription,
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      images: [{ url: city.heroImage, width: 1200, height: 630, alt: city.name }],
    },
  };
}

export default async function CityGuidePage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  // Fetch Live Weather from OpenWeatherMap API (cached 30m server-side)
  const weather = await getCityWeather(city.lat, city.lon, city.name);

  // Related Destinations (Prioritize direct religious/regional connections, e.g. Mecca <-> Medina)
  const relatedCities = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => {
      if (city.slug === "mecca" && b.slug === "medina") return 1;
      if (city.slug === "medina" && b.slug === "mecca") return 1;
      return a.region === city.region ? -1 : 1;
    })
    .slice(0, 3);

  // Schema data
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loctravel.com";
  const faqSchema = generateFAQSchema(city.faq);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${siteUrl}/` },
    { name: "Destinations", item: `${siteUrl}/destinations` },
    { name: city.name, item: `${siteUrl}/destinations/${city.slug}` },
  ]);
  const travelGuideSchema = generateTravelGuideSchema({
    name: city.name,
    country: city.country,
    tagline: city.tagline,
    heroImage: city.heroImage,
    description: city.description,
    slug: city.slug,
  });

  return (
    <article className="pb-24">
      {/* 17. SEO-optimized FAQ & Travel Schemas (Injected in HTML head/body) */}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={travelGuideSchema} />

      {/* 1. Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] bg-slate-950 flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={city.heroImage}
            alt={city.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 z-10 space-y-6">
          <nav className="text-xs font-semibold text-slate-300 flex items-center gap-2">
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors">{city.region}</span>
            <span>/</span>
            <span className="text-emerald-400">{city.name}</span>
          </nav>

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {city.country} • Local Travel Guide
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
              {city.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light">
              {city.tagline}
            </p>
          </div>

          {/* Quick City Info Cards */}
          <HeroCityCards
            currency={city.currency || ""}
            language={city.language || ""}
            country={city.country}
            timezone={weather?.timezoneFormatted || city.timezone || "UTC"}
            timezoneOffsetSeconds={weather?.timezoneOffset || 0}
            initialTimeStr={weather?.localTimeStr || ""}
            temp={weather?.temp ?? null}
            condition={weather?.condition ?? null}
            weatherIcon={weather?.icon ?? null}
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <section id="overview" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Overview & History
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base md:text-lg">
                {city.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Interactive Map Section */}
            {city.googleMapEmbedUrl && (
              <section id="city-map" className="space-y-4">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                  Interactive Location Map
                </h2>
                <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                  <iframe
                    src={city.googleMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map of ${city.name}`}
                  />
                </div>
              </section>
            )}

            <AdSenseSlot slot="city-below-overview" />

            {/* 2. Live Weather Section */}
            <section id="live-weather">
              <WeatherCard
                weather={weather}
                cityName={city.name}
                cityTimezone={city.timezone}
              />
            </section>

            {/* 3. Best Time to Visit */}
            <section id="best-time" className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                  Best Time to Visit & Climate
                </h2>
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-semibold text-lg">
                {city.bestTimeToVisit.season}
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
                {city.bestTimeToVisit.description}
              </p>
              <div className="pt-3 border-t border-emerald-500/10 text-xs text-emerald-700 dark:text-emerald-400 font-mono">
                Weather & Season Details: {city.bestTimeToVisit.weatherDetails}
              </div>
            </section>

            {/* 4. Top Attractions */}
            <section id="attractions" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Top Attractions & Sacred Sites
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {city.attractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="sm:w-1/3 h-52 sm:h-auto relative rounded-2xl overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase">
                        {attraction.type}
                      </span>
                    </div>

                    <div className="sm:w-2/3 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {attraction.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {attraction.description}
                        </p>
                        {attraction.whyFamous && (
                          <div className="text-xs text-slate-700 dark:text-slate-300">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">Why It's Famous:</span> {attraction.whyFamous}
                          </div>
                        )}
                        {attraction.visitorTips && (
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-400 font-mono">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">💡 Visitor Tip:</span> {attraction.visitorTips}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                        <span>⏱️ Visit Duration: {attraction.duration}</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{attraction.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Things to Do */}
            <section id="things-to-do" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Things to Do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(city.thingsToDo || [
                  {
                    title: "Explore Sacred Sites & Old Quarter",
                    description: "Walk historic alleyways, ancient shrines, and local markets.",
                    duration: "2-3 hours",
                    cost: "Free"
                  },
                  {
                    title: "Haramain High-Speed Rail Journey",
                    description: "Experience world-class 300 km/h train service connecting coastal hubs.",
                    duration: "43 mins to 2 hours",
                    cost: "70 - 150 SAR"
                  }
                ]).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="text-emerald-500 font-bold text-lg">0{index + 1}.</div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.duration}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AdSenseSlot slot="city-middle-content" />

            {/* 6. Local Food */}
            <section id="food" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Local Food & Popular Dishes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {city.food.map((dish, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col"
                  >
                    <div className="h-48 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs text-emerald-800 dark:text-emerald-300">
                        <span className="font-bold">Local Tip:</span> {dish.recommendation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Where to Stay (Hotels & Areas) */}
            <section id="where-to-stay" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Best Hotels & Where to Stay in {city.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {(city.whereToStay || []).map((stay, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    {stay.image && (
                      <div className="h-44 relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={stay.image}
                          alt={stay.name || stay.area}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {stay.priceRange}
                          </span>
                          {stay.starRating && (
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {stay.starRating}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-1">{stay.name || stay.area}</h3>
                        <p className="text-[11px] font-mono text-slate-400">Location: {stay.area}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {stay.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                        {stay.bestFor && <p className="font-bold text-emerald-600 dark:text-emerald-400">Target: {stay.bestFor}</p>}
                        <p className="italic">{stay.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Best Restaurants */}
            <section id="best-restaurants" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Best Restaurants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(city.bestRestaurants || []).map((restaurant, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-800 space-y-3 flex flex-col justify-between"
                  >
                    {restaurant.image && (
                      <div className="h-44 relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {restaurant.cuisine}
                          </span>
                          <span className="text-xs font-bold text-slate-300 font-mono">{restaurant.priceRange}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white pt-1">{restaurant.name}</h3>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                          {restaurant.description}
                        </p>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                        📍 {restaurant.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Airport & Transportation Guide */}
            <section id="transportation" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Airport & Transportation Guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {city.transportation.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
                  >
                    {option.image && (
                      <div className="h-44 relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={option.image}
                          alt={option.type}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
                          {option.type}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-900 dark:text-white">
                        Cost: {option.cost}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Budget & Daily Costs */}
            <section id="budget" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Budget & Useful Travel Tips
              </h2>
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {city.budgetTips.map((tip, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="text-emerald-500">💡</span> {tip.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 11. Safety & Useful Tips */}
            <section id="safety" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Safety & Useful Travel Advice
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {city.safetyTips.map((tip, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-3"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>🛡️</span> {tip.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Contacts Section */}
            {city.emergencyContacts && city.emergencyContacts.length > 0 && (
              <section id="emergency-contacts" className="p-6 rounded-3xl bg-red-500/5 border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2.5 text-red-500">
                  <span className="text-xl">🚨</span>
                  <h3 className="text-lg font-bold font-display">Emergency Numbers in {city.name}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  {city.emergencyContacts.map((contact, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-red-500/20 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">{contact.name}</span>
                      <span className="text-base font-extrabold text-red-600 dark:text-red-400 font-mono">{contact.number}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 12. Local Etiquette & Culture */}
            <section id="local-etiquette" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Local Customs & Etiquette
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(city.localEtiquette || []).map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-2"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>🤝</span> {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. Hidden Gems */}
            <section id="hidden-gems" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Hidden Gems & Special Sites
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {city.hiddenGems.map((gem, index) => (
                  <div
                    key={index}
                    className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col"
                  >
                    <div className="h-48 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={gem.image}
                        alt={gem.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        Hidden Gem
                      </span>
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {gem.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {gem.description}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300 font-mono">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">Insider Tip:</span> {gem.tip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 14. Frequently Asked Questions */}
            <section id="faq" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4 font-display">
                Frequently Asked Questions
              </h2>
              <Accordion items={city.faq} />
            </section>

            {/* 16. Newsletter CTA */}
            <section id="newsletter-cta">
              <NewsletterSection />
            </section>

          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Key Specs Card */}
              {(city.population || city.elevation || city.voltage) && (
                <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
                    Essential Key Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    {city.population && (
                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700">
                        <span className="text-slate-400 text-[10px] block">Population</span>
                        <span className="font-bold text-white text-xs">{city.population}</span>
                      </div>
                    )}
                    {city.elevation && (
                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700">
                        <span className="text-slate-400 text-[10px] block">Elevation</span>
                        <span className="font-bold text-white text-xs">{city.elevation}</span>
                      </div>
                    )}
                    {city.bestVisitDuration && (
                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 col-span-2">
                        <span className="text-slate-400 text-[10px] block">Recommended Visit</span>
                        <span className="font-bold text-white text-xs">{city.bestVisitDuration}</span>
                      </div>
                    )}
                    {city.voltage && (
                      <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 col-span-2">
                        <span className="text-slate-400 text-[10px] block">Electricity</span>
                        <span className="font-bold text-white text-xs">{city.voltage} ({city.plugType})</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Quick Navigation Box */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Quick Navigation
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 font-medium">
                  <li><a href="#overview" className="hover:text-emerald-400 transition-colors">• Overview & History</a></li>
                  {city.googleMapEmbedUrl && <li><a href="#city-map" className="hover:text-emerald-400 transition-colors">• Interactive Map</a></li>}
                  <li><a href="#live-weather" className="hover:text-emerald-400 transition-colors">• Live Weather</a></li>
                  <li><a href="#best-time" className="hover:text-emerald-400 transition-colors">• Best Time to Visit</a></li>
                  <li><a href="#attractions" className="hover:text-emerald-400 transition-colors">• Top Attractions</a></li>
                  <li><a href="#things-to-do" className="hover:text-emerald-400 transition-colors">• Things to Do</a></li>
                  <li><a href="#food" className="hover:text-emerald-400 transition-colors">• Local Food</a></li>
                  <li><a href="#where-to-stay" className="hover:text-emerald-400 transition-colors">• Where to Stay</a></li>
                  <li><a href="#best-restaurants" className="hover:text-emerald-400 transition-colors">• Best Restaurants</a></li>
                  <li><a href="#transportation" className="hover:text-emerald-400 transition-colors">• Transportation Guide</a></li>
                  <li><a href="#budget" className="hover:text-emerald-400 transition-colors">• Budget & Daily Costs</a></li>
                  <li><a href="#safety" className="hover:text-emerald-400 transition-colors">• Safety & Travel Advice</a></li>
                  {city.emergencyContacts && <li><a href="#emergency-contacts" className="hover:text-emerald-400 transition-colors">• Emergency Numbers</a></li>}
                  <li><a href="#local-etiquette" className="hover:text-emerald-400 transition-colors">• Local Customs</a></li>
                  <li><a href="#hidden-gems" className="hover:text-emerald-400 transition-colors">• Hidden Gems</a></li>
                  <li><a href="#faq" className="hover:text-emerald-400 transition-colors">• FAQ</a></li>
                </ul>
              </div>

              {/* Sidebar AdSense Placement */}
              <AdSenseSlot slot="city-sidebar" />

              {/* 15. Related Destinations */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Related Destinations
                </h3>
                <div className="space-y-4">
                  {relatedCities.map((relCity) => (
                    <Link
                      key={relCity.slug}
                      href={`/destinations/${relCity.slug}`}
                      className="group flex items-center gap-4 p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={relCity.heroImage}
                          alt={relCity.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                          {relCity.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400">
                          {relCity.country}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
