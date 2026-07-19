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
import {
  casablancaData,
  rabatData,
  fesData,
  tangierData,
  agadirData,
  chefchaouenData,
} from "./cities/moroccoCities";
import {
  antalyaData,
  cappadociaData,
  bursaData,
  izmirData,
} from "./cities/turkeyCities";
import {
  penangData,
  langkawiData,
  jakartaData,
  yogyakartaData,
  beijingData,
  shanghaiData,
  guangzhouData,
  shenzhenData,
} from "./cities/asiaExpansion";
import { meccaData, medinaData } from "./cities/saudiCities";

export const cities: City[] = [
  // Initial Cities
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

  // Batch 1 & 2 & 3 & 4
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

  // Morocco Expansion
  casablancaData,
  rabatData,
  fesData,
  tangierData,
  agadirData,
  chefchaouenData,

  // Turkey Expansion
  antalyaData,
  cappadociaData,
  bursaData,
  izmirData,

  // Asia Expansion (Malaysia, Indonesia, China)
  penangData,
  langkawiData,
  jakartaData,
  yogyakartaData,
  beijingData,
  shanghaiData,
  guangzhouData,
  shenzhenData,

  // Saudi Arabia Collection
  meccaData,
  medinaData,
];

export function getAllCities(): City[] {
  return cities;
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
