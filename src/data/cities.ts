import { City } from "../types/travel";
import { parisData } from "./cities/paris";
import { tokyoData } from "./cities/tokyo";
import {
  marrakechData,
  dubaiData,
  newyorkData,
  barcelonaData,
  romeData,
  londonData,
  istanbulData,
  baliData,
} from "./cities/others";

export const cities: City[] = [
  marrakechData,
  parisData,
  tokyoData,
  dubaiData,
  newyorkData,
  barcelonaData,
  romeData,
  londonData,
  istanbulData,
  baliData,
];

export function getAllCities(): City[] {
  return cities;
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
