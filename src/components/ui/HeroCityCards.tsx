"use client";

import React, { useState, useEffect } from "react";

interface HeroCityCardsProps {
  currency: string;
  language: string;
  country: string;
  timezone: string;
  timezoneOffsetSeconds?: number;
  initialTimeStr?: string;
  temp?: number | null;
  condition?: string | null;
  weatherIcon?: string | null;
}

export default function HeroCityCards({
  currency,
  language,
  country,
  timezone,
  timezoneOffsetSeconds = 0,
  initialTimeStr = "",
  temp = null,
  condition = null,
  weatherIcon = null,
}: HeroCityCardsProps) {
  const [liveTime, setLiveTime] = useState(initialTimeStr);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const cityLocalDate = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 + timezoneOffsetSeconds * 1000
      );

      const formattedTime = cityLocalDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setLiveTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, [timezoneOffsetSeconds]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-4 border-t border-white/10 w-full text-xs">
      {/* 1. Currency */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>💰</span> Currency
        </span>
        <span className="font-semibold text-white truncate pt-1">{currency || "Local Currency"}</span>
      </div>

      {/* 2. Language */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>🗣️</span> Language
        </span>
        <span className="font-semibold text-white truncate pt-1">{language || "Local Language"}</span>
      </div>

      {/* 3. Country */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>🌍</span> Country
        </span>
        <span className="font-semibold text-white truncate pt-1">{country}</span>
      </div>

      {/* 4. Live Local Time */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Time
        </span>
        <span className="font-mono font-bold text-white pt-1">{liveTime || "--:--"}</span>
      </div>

      {/* 5. Temperature */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>🌡️</span> Temp
        </span>
        <span className="font-bold text-white pt-1">{temp !== null && temp !== undefined ? `${temp}°C` : "--°C"}</span>
      </div>

      {/* 6. Weather Condition */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>☁️</span> Weather
        </span>
        <span className="font-semibold text-white truncate pt-1 flex items-center gap-1">
          {weatherIcon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={weatherIcon} alt="" className="w-4 h-4 object-contain inline shrink-0" />
          )}
          <span className="capitalize truncate">{condition || "Clear"}</span>
        </span>
      </div>

      {/* 7. Timezone */}
      <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
          <span>📍</span> Timezone
        </span>
        <span className="font-mono font-semibold text-white truncate pt-1">{timezone || "UTC"}</span>
      </div>
    </div>
  );
}
