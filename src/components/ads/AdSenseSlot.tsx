"use client";

import React, { useEffect, useState } from "react";

interface AdSenseSlotProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: AdSenseSlotProps) {
  const [isClient, setIsClient] = useState(false);
  const [isDev, setIsDev] = useState(true);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

  useEffect(() => {
    setIsClient(true);
    // Check if running on localhost or in development
    const host = window.location.hostname;
    setIsDev(host === "localhost" || host === "127.0.0.1" || !clientId);

    if (host !== "localhost" && host !== "127.0.0.1" && clientId) {
      try {
        // Push ad if AdsbyGoogle is loaded
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [clientId]);

  if (!isClient) return null;

  if (isDev) {
    // Beautiful placeholder for development environment
    return (
      <div
        className={`my-8 flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 rounded-xl transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-900 select-none ${className}`}
        style={{ minHeight: "120px", ...style }}
      >
        <span className="text-[10px] font-semibold tracking-wider text-slate-400 dark:text-slate-600 uppercase mb-2">
          Advertisement Placeholder
        </span>
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center font-mono">
          <p>AdSense Client: {clientId || "ca-pub-XXXXXXXXXXXXX"}</p>
          <p>Ad Slot: {slot}</p>
          <p>Format: {format}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-8 overflow-hidden text-center ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
