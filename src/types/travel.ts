export interface FAQItem {
  question: string;
  answer: string;
}

export interface Attraction {
  name: string;
  image: string;
  description: string;
  duration: string;
  cost: string;
  type: string;
}

export interface FoodItem {
  name: string;
  image: string;
  description: string;
  recommendation: string;
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
  description: string;
  cost: string;
}

export interface SafetyTip {
  title: string;
  description: string;
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
  
  // Sections
  overview: string[];
  bestTimeToVisit: {
    season: string;
    description: string;
    weatherDetails: string;
  };
  attractions: Attraction[];
  food: FoodItem[];
  hiddenGems: HiddenGem[];
  budgetTips: BudgetTip[];
  transportation: TransportationOption[];
  safetyTips: SafetyTip[];
  faq: FAQItem[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML format preferred for content rendering
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
}
