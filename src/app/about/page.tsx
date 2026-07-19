import React from "react";
import AdSenseSlot from "@/components/ads/AdSenseSlot";

export const metadata = {
  title: "About Us: Our Local Travel Mission | LocTravel",
  description:
    "Learn about LocTravel's mission. We are a content-focused travel platform helping explorers discover cities like a local, completely free of sponsored bias.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Content Quality First",
      description:
        "We don't do short-form clickbait. Our guides are detailed, structured, and deep-dive into each city's actual neighborhood realities.",
      icon: "✍️",
    },
    {
      title: "Written by Locals",
      description:
        "We collaborate directly with local residents and frequent travelers to verify details, safety warnings, and dining hotspots.",
      icon: "🤝",
    },
    {
      title: "100% Independent",
      description:
        "We are not a booking engine. We don't take commissions to recommend specific hotels or restaurants. Our advice is honest and unbiased.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
          Our Story
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          About LocTravel
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We built LocTravel because we were tired of travel sites that are just fronts for booking engines. We believe travelers deserve high-quality, local content.
        </p>
      </section>

      {/* Mission Image */}
      <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
          alt="Travel Planning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mission Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display">
            The Booking Engine Problem
          </h2>
          <p>
            Most modern travel websites exist solely to get you to click &quot;Book Now&quot; buttons. As a result, their guides are thin, automated, and biased toward hotels, tours, and restaurants that pay them referral commissions.
          </p>
          <p>
            This model leaves actual travelers in the dark about how to navigate public subways, which areas are safe at night, what dishes are actually local favorites, and what tourist traps to avoid.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display">
            Our Content-First Philosophy
          </h2>
          <p>
            LocTravel does not have booking functionality. We are entirely supported by Google AdSense ads and voluntary readers. This independence allows us to tell the truth.
          </p>
          <p>
            If a popular museum has ticket lines that take 4 hours, we warn you and tell you how to bypass them. If a popular dining strip is a tourist trap, we point you to the quiet lane two blocks away where locals actually eat.
          </p>
        </div>
      </section>

      <AdSenseSlot slot="about-middle" />

      {/* Core Values */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center font-display">
          Our Core Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl space-y-3"
            >
              <div className="text-3xl">{val.icon}</div>
              <h3 className="font-bold text-base text-slate-800 dark:text-slate-100">
                {val.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
