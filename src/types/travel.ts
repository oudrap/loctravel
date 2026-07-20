export interface FAQItem {
  question: string;
  answer: string;
}

export interface Attraction {
  name: string;
  image: string;
  description: string;
  whyFamous?: string;
  visitorTips?: string;
  duration: string;
  cost: string;
  type: string;
}

export interface ThingToDo {
  title: string;
  description: string;
  duration: string;
  cost: string;
}

export interface FoodItem {
  name: string;
  image: string;
  description: string;
  recommendation: string;
}

export interface Accommodation {
  area: string;
  name?: string;
  image?: string;
  starRating?: string;
  description: string;
  priceRange: string; // e.g. "$$$$ (5-Star Luxury)"
  recommendation: string;
  bestFor?: string; // e.g. "Best for Families & Direct Haram Access"
}

export interface Restaurant {
  name: string;
  image?: string;
  cuisine: string;
  description: string;
  location: string;
  priceRange: string; // e.g. "$" or "$$"
}

export interface HiddenGem {
  name: string;
  image: string;
  description: string;
  tip: string;
}

export interface BudgetTip {
  title: string;
  description: string;
}

export interface TransportationOption {
  type: string;
  image?: string;
  description: string;
  cost: string;
}

export interface SafetyTip {
  title: string;
  description: string;
}

export interface EtiquetteTip {
  title: string;
  description: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
}

export interface City {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  lat?: number;
  lon?: number;
  
  // Quick Facts
  currency?: string;
  language?: string;
  timezone?: string;
  population?: string;
  elevation?: string;
  bestVisitDuration?: string;
  voltage?: string;
  plugType?: string;
  googleMapEmbedUrl?: string;
  emergencyContacts?: EmergencyContact[];

  // Sections
  overview: string[];
  bestTimeToVisit: {
    season: string;
    description: string;
    weatherDetails: string;
  };
  attractions: Attraction[];
  thingsToDo?: ThingToDo[];
  food: FoodItem[];
  whereToStay?: Accommodation[];
  bestRestaurants?: Restaurant[];
  transportation: TransportationOption[];
  budgetTips: BudgetTip[];
  safetyTips: SafetyTip[];
  localEtiquette?: EtiquetteTip[];
  hiddenGems: HiddenGem[];
  faq: FAQItem[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
}
