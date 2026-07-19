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

  // Related Destinations (same region first, or other cities)
  const relatedCities = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => (a.region === city.region ? -1 : 1))
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
      {/* Dynamic JSON-LD Schemas for SEO */}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={travelGuideSchema} />

      {/* 1. Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] bg-slate-950 flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={city.heroImage}
            alt={city.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 z-10 space-y-4">
          <nav className="text-xs font-semibold text-slate-300 flex items-center gap-2">
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span>/</span>
            <span className="hover:text-white transition-colors">{city.region}</span>
            <span>/</span>
            <span className="text-emerald-400">{city.name}</span>
          </nav>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {city.country}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              {city.name} <span className="text-emerald-500 font-normal">Local Guide</span>
            </h1>
          </div>
          <p className="text-lg text-slate-200 font-light max-w-2xl">
            {city.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <section id="overview" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Overview
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base md:text-lg">
                {city.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <AdSenseSlot slot="city-below-overview" />

            {/* Weather & Climate */}
            <section id="weather">
              <WeatherCard
                weather={weather}
                cityName={city.name}
              />
            </section>

            {/* Top Attractions */}
            <section id="attractions" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Top Attractions
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {city.attractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="md:w-2/5 relative h-56 md:h-auto min-h-[220px] bg-slate-100 dark:bg-slate-950">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={att.image}
                        alt={att.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          {att.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                          {att.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                          {att.description}
                        </p>
                      </div>
                      <div className="flex gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <div>⏱️ {att.duration}</div>
                        <div>🎟️ {att.cost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AdSenseSlot slot="city-middle" />

            {/* Local Food */}
            <section id="food" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Local Food & Flavors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {city.food.map((dish, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      {dish.image && (
                        <div className="h-40 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                        {dish.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl text-xs text-emerald-800 dark:text-emerald-400 leading-normal font-light">
                      💡 <strong>Where to try:</strong> {dish.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Gems */}
            <section id="gems" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Hidden Gems & Local Secrets
              </h2>
              <div className="space-y-6">
                {city.hiddenGems.map((gem, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-900 text-white rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-6 items-center shadow-xl"
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px]" />
                    
                    {gem.image && (
                      <div className="w-full md:w-1/3 h-44 rounded-2xl overflow-hidden bg-slate-950 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={gem.image}
                          alt={gem.name}
                          className="w-full h-full object-cover opacity-85"
                        />
                      </div>
                    )}
                    <div className="space-y-2 relative z-10 w-full md:w-2/3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Insiders Secret
                      </span>
                      <h3 className="font-extrabold text-xl text-white">
                        {gem.name}
                      </h3>
                      <p className="text-slate-300 text-sm font-light leading-relaxed">
                        {gem.description}
                      </p>
                      <div className="pt-2 text-xs text-emerald-300 italic font-light">
                        ✨ <strong>Local Tip:</strong> {gem.tip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Advice */}
            <section id="practical" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Practical Survival Guide
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Transportation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    🚇 Transportation & Transit
                  </h3>
                  <div className="space-y-3">
                    {city.transportation.map((opt, idx) => (
                      <div key={idx} className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl space-y-1">
                        <div className="font-semibold text-sm flex justify-between">
                          <span>{opt.type}</span>
                          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-mono">{opt.cost}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light">{opt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget Tips */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    💵 Budget Hacks
                  </h3>
                  <div className="space-y-3">
                    {city.budgetTips.map((tip, idx) => (
                      <div key={idx} className="p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl space-y-1">
                        <div className="font-semibold text-sm text-slate-800 dark:text-slate-100">{tip.title}</div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl space-y-4 mt-6">
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                  🛡️ Safety & Local Scams
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.safetyTips.map((tip, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">{tip.title}</div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <AdSenseSlot slot="city-above-faq" />

            {/* FAQ */}
            <section id="faq" className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-4">
                Frequently Asked Questions
              </h2>
              <Accordion items={city.faq} />
            </section>

            {/* Related Destinations */}
            <section id="related" className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Related Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedCities.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/destinations/${rel.slug}`}
                    className="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative h-36 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.heroImage}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{rel.country}</span>
                      <h3 className="font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-emerald-500 transition-colors">
                        {rel.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-sm space-y-6">
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                Quick Facts
              </h3>
              
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Country</span>
                  <span className="font-semibold">{city.country}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Region</span>
                  <span className="font-semibold">{city.region}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Best Season</span>
                  <span className="font-semibold text-right max-w-[180px]">{city.bestTimeToVisit.season.split('(')[0]}</span>
                </li>
              </ul>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl text-center space-y-2">
                <div className="text-[10px] text-slate-400 font-mono">ADVERTISEMENT SLOT</div>
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-placeholder"}
                  data-ad-slot="city-sidebar"
                  data-ad-format="rectangle"
                />
              </div>

              <div className="pt-2 text-xs text-center text-slate-400 dark:text-slate-600 leading-relaxed">
                All guides on LocTravel are updated monthly by local experts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
