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

    // Format timestamps considering city timezone offset (in seconds)
    const timezoneOffset = data.timezone || 0; // offset in seconds from UTC

    const formatLocalTime = (timestamp: number) => {
      const date = new Date((timestamp + timezoneOffset) * 1000);
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    const nowUtcSeconds = Math.floor(Date.now() / 1000);
    
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
      sunrise: formatLocalTime(data.sys.sunrise),
      sunset: formatLocalTime(data.sys.sunset),
      cityName: data.name || cityName || "",
      updatedAt: formatLocalTime(nowUtcSeconds),
    };
  } catch (error) {
    console.error(`[OpenWeather API Error]`, error);
    return null;
  }
}
