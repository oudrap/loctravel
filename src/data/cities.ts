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
import {
  singaporeData,
  amsterdamData,
  lisbonData,
  pragueData,
  viennaData,
} from "./cities/newCitiesBatch1";
import {
  seoulData,
  bangkokData,
  cairoData,
  sydneyData,
  capeTownData,
} from "./cities/newCitiesBatch2";
import {
  milanData,
  munichData,
  edinburghData,
  budapestData,
  santoriniData,
} from "./cities/newCitiesBatch3";
import {
  kyotoData,
  torontoData,
  sanFranciscoData,
  losAngelesData,
  kualaLumpurData,
} from "./cities/newCitiesBatch4";

export const cities: City[] = [
  // Original 10 Cities
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

  // 20 New Cities
  singaporeData,
  amsterdamData,
  lisbonData,
  pragueData,
  viennaData,
  seoulData,
  bangkokData,
  cairoData,
  sydneyData,
  capeTownData,
  milanData,
  munichData,
  edinburghData,
  budapestData,
  santoriniData,
  kyotoData,
  torontoData,
  sanFranciscoData,
  losAngelesData,
  kualaLumpurData,
];

export function getAllCities(): City[] {
  return cities;
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
