export interface WeatherData {
  temp: number;
  feelsLike: number;
  condition: string;
  description: string;
  icon: string;
  humidity: number;
  windSpeedKmH: number;
  sunrise: string;
  sunset: string;
  cityName: string;
  updatedAt: string;
  timezoneOffset: number; // in seconds from UTC
  timezoneFormatted: string; // e.g. UTC+9
  localDateStr: string; // e.g. Monday, Jul 20, 2026
  localTimeStr: string; // e.g. 14:30
}

export async function getCityWeather(
  lat?: number,
  lon?: number,
  cityName?: string
): Promise<WeatherData | null> {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey || !lat || !lon) {
    return null;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    // Server-side fetch cached for 30 minutes (1800s)
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      console.warn(`[OpenWeather API] Failed for ${cityName}: Status ${res.status}`);
      return null;
    }

    const data = await res.json();

    // Timezone offset in seconds from UTC
    const timezoneOffset = data.timezone || 0; 
    const offsetHours = timezoneOffset / 3600;
    const timezoneFormatted = `UTC${offsetHours >= 0 ? "+" : ""}${offsetHours}`;

    const now = new Date();
    // Calculate city local time using UTC + timezoneOffset
    const cityLocalDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + timezoneOffset * 1000);

    const localDateStr = cityLocalDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const localTimeStr = cityLocalDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formatTimeFromTimestamp = (timestamp: number) => {
      const d = new Date((timestamp + timezoneOffset) * 1000);
      const hours = d.getUTCHours().toString().padStart(2, "0");
      const minutes = d.getUTCMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    return {
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0]?.main || "Clear",
      description: data.weather[0]?.description || "",
      icon: data.weather[0]?.icon
        ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        : "",
      humidity: data.main.humidity,
      windSpeedKmH: Math.round(data.wind.speed * 3.6), // convert m/s to km/h
      sunrise: formatTimeFromTimestamp(data.sys.sunrise),
      sunset: formatTimeFromTimestamp(data.sys.sunset),
      cityName: data.name || cityName || "",
      updatedAt: localTimeStr,
      timezoneOffset,
      timezoneFormatted,
      localDateStr,
      localTimeStr,
    };
  } catch (error) {
    console.error(`[OpenWeather API Error]`, error);
    return null;
  }
}
