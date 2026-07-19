import React from "react";
import { WeatherData } from "@/lib/weather";
import LiveClock from "@/components/ui/LiveClock";

interface WeatherCardProps {
  weather: WeatherData | null;
  cityName: string;
  cityTimezone?: string;
  className?: string;
}

export default function WeatherCard({
  weather,
  cityName,
  cityTimezone = "",
  className = "",
}: WeatherCardProps) {
  if (weather) {
    return (
      <div
        className={`relative overflow-hidden p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl space-y-6 ${className}`}
      >
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
              Live Weather & Time • {weather.cityName || cityName}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700">
            OpenWeather™ Cached 30m
          </span>
        </div>

        {/* Live Clock Component */}
        <LiveClock
          initialTimeStr={weather.localTimeStr}
          initialDateStr={weather.localDateStr}
          timezoneOffsetSeconds={weather.timezoneOffset}
          timezoneName={cityTimezone || weather.timezoneFormatted}
        />

        {/* Main Weather Display */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-4">
            {weather.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={weather.icon}
                alt={weather.condition}
                className="w-16 h-16 object-contain -my-2 drop-shadow"
              />
            ) : (
              <span className="text-5xl" role="img" aria-label={weather.condition}>
                🌤️
              </span>
            )}
            <div>
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight font-display">
                {weather.temp}°C
              </div>
              <div className="text-sm font-medium text-slate-300 capitalize">
                {weather.condition} {weather.description ? `• ${weather.description}` : ""}
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-300 bg-slate-800/60 px-3.5 py-2.5 rounded-xl border border-slate-800">
            Feels like <span className="font-bold text-white">{weather.feelsLike}°C</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-800/80">
          <div className="p-3.5 rounded-2xl bg-slate-800/30 border border-slate-800/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Temperature
            </div>
            <div className="text-sm font-bold text-white">{weather.temp}°C</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/30 border border-slate-800/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Feels Like
            </div>
            <div className="text-sm font-bold text-white">{weather.feelsLike}°C</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/30 border border-slate-800/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Humidity
            </div>
            <div className="text-sm font-bold text-white">{weather.humidity}%</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/30 border border-slate-800/60 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Wind Speed
            </div>
            <div className="text-sm font-bold text-white">{weather.windSpeedKmH} km/h</div>
          </div>
        </div>
      </div>
    );
  }

  // Friendly Fallback UI when API key is missing or request fails
  return (
    <div
      className={`p-6 md:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🌤️</span>
          <h3 className="text-lg font-bold text-white font-display">
            Live Weather & Time • {cityName}
          </h3>
        </div>
        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Climate & Time Guide
        </span>
      </div>

      {cityTimezone && (
        <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800 flex justify-between items-center text-xs">
          <span className="text-slate-300">City Timezone:</span>
          <span className="font-mono font-bold text-emerald-400">{cityTimezone}</span>
        </div>
      )}

      <p className="text-xs text-slate-400 font-light leading-relaxed">
        Live OpenWeatherMap updates for {cityName} are offline. Add your free <code className="text-xs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">OPENWEATHER_API_KEY</code> in <code className="text-xs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">.env.local</code> for real-time temperature, wind, humidity, and ticking clock updates.
      </p>
    </div>
  );
}
