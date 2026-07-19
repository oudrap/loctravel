export interface MockWeatherData {
  temp: number;
  feelsLike: number;
  condition: string;
  icon: string; // Emoji or SVG icon
  humidity: number;
  windSpeed: number; // km/h
}

export const mockCityWeather: Record<string, MockWeatherData> = {
  paris: {
    temp: 22,
    feelsLike: 23,
    condition: "Partly Cloudy",
    icon: "⛅",
    humidity: 52,
    windSpeed: 14,
  },
  tokyo: {
    temp: 26,
    feelsLike: 27,
    condition: "Sunny & Pleasant",
    icon: "☀️",
    humidity: 60,
    windSpeed: 10,
  },
  marrakech: {
    temp: 31,
    feelsLike: 33,
    condition: "Clear Blue Sky",
    icon: "☀️",
    humidity: 28,
    windSpeed: 16,
  },
  dubai: {
    temp: 36,
    feelsLike: 41,
    condition: "Sunny & Warm",
    icon: "☀️",
    humidity: 45,
    windSpeed: 18,
  },
  "new-york": {
    temp: 24,
    feelsLike: 25,
    condition: "Mostly Sunny",
    icon: "🌤️",
    humidity: 48,
    windSpeed: 15,
  },
  barcelona: {
    temp: 27,
    feelsLike: 28,
    condition: "Coastal Breeze",
    icon: "🌤️",
    humidity: 55,
    windSpeed: 12,
  },
  rome: {
    temp: 29,
    feelsLike: 30,
    condition: "Clear Sun",
    icon: "☀️",
    humidity: 42,
    windSpeed: 9,
  },
  london: {
    temp: 19,
    feelsLike: 19,
    condition: "Mild & Scattered Clouds",
    icon: "⛅",
    humidity: 65,
    windSpeed: 20,
  },
  istanbul: {
    temp: 25,
    feelsLike: 26,
    condition: "Sunny Bosphorus",
    icon: "☀️",
    humidity: 50,
    windSpeed: 17,
  },
  bali: {
    temp: 30,
    feelsLike: 34,
    condition: "Tropical Sun",
    icon: "🌤️",
    humidity: 75,
    windSpeed: 11,
  },
};

export function getMockWeather(slug: string): MockWeatherData {
  return (
    mockCityWeather[slug] || {
      temp: 25,
      feelsLike: 26,
      condition: "Clear Sky",
      icon: "☀️",
      humidity: 50,
      windSpeed: 12,
    }
  );
}
