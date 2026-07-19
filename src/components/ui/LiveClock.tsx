"use client";

import React, { useState, useEffect } from "react";

interface LiveClockProps {
  initialTimeStr: string;
  initialDateStr: string;
  timezoneOffsetSeconds?: number;
  timezoneName?: string;
  className?: string;
}

export default function LiveClock({
  initialTimeStr,
  initialDateStr,
  timezoneOffsetSeconds = 0,
  timezoneName = "",
  className = "",
}: LiveClockProps) {
  const [timeStr, setTimeStr] = useState(initialTimeStr);
  const [dateStr, setDateStr] = useState(initialDateStr);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cityLocalDate = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 + timezoneOffsetSeconds * 1000
      );

      const formattedDate = cityLocalDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const formattedTime = cityLocalDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTimeStr(formattedTime);
      setDateStr(formattedDate);
    };

    // Update immediately on mount and then every 30 seconds
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [timezoneOffsetSeconds]);

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-800 ${className}`}>
      <div className="space-y-0.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Local Time</span>
        </div>
        <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
          {timeStr}
        </div>
      </div>

      <div className="text-left sm:text-right space-y-0.5">
        <div className="text-[11px] font-medium text-slate-300">
          {dateStr}
        </div>
        {timezoneName && (
          <div className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 inline-block">
            {timezoneName}
          </div>
        )}
      </div>
    </div>
  );
}
