import { City } from "../../types/travel";

export const meccaData: City = {
  slug: "mecca",
  name: "Mecca",
  country: "Saudi Arabia",
  region: "Middle East",
  tagline: "The holiest city in Islam, home to the sacred Kaaba and Al-Masjid al-Haram",
  heroImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Mecca like a local. Guide to Al-Masjid al-Haram, Kaaba, Hira Cave, Haramain train, and visitor tips.",
  seoTitle: "Mecca Travel Guide: The Sacred Sanctuary & Umrah Guide | LocTravel",
  seoDescription: "An expert content guide to Mecca. Discover Al-Masjid al-Haram, the Kaaba, Hira Cave, Abraj Al Bait, Haramain Rail, and travel tips.",
  lat: 21.3891,
  lon: 39.8579,
  currency: "Saudi Riyal (SAR / ﷼)",
  language: "Arabic",
  timezone: "AST (UTC+3)",

  overview: [
    "Mecca, located in a desert valley in western Saudi Arabia, is Islam’s holiest city, as it’s the birthplace of the Prophet Muhammad and the faith itself. Only Muslims are permitted into the city.",
    "Millions arrive annually for the Hajj and Umrah pilgrimages. At the heart of Mecca is Al-Masjid al-Haram (The Sacred Mosque), enclosing the Kaaba, the cloth-draped cubical structure that is Islam’s most sacred shrine."
  ],

  bestTimeToVisit: {
    season: "November to February (Cooler Months)",
    description: "Winter months offer mild daytime temperatures ideal for performing Umrah rituals and visiting historical mountains.",
    weatherDetails: "Temperatures range from 18°C to 28°C."
  },

  attractions: [
    {
      name: "Al-Masjid al-Haram & The Kaaba",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80",
      description: "The world's largest mosque enclosing the Kaaba, Maqam Ibrahim, and Safa and Marwa hills.",
      duration: "4 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    }
  ],

  thingsToDo: [
    {
      title: "Hike to Cave of Hira on Jabal al-Nour",
      description: "Climb the mountain where the Prophet Muhammad received the first divine revelation.",
      duration: "3 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Albaik Chicken & Saudi Kabsa",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Famous crisp broasted chicken with garlic sauce, alongside spiced chicken and rice Kabsa.",
      recommendation: "Eat at Albaik inside Abraj Al Bait complex."
    }
  ],

  whereToStay: [
    {
      area: "Abraj Al Bait & Central Haram Zone",
      description: "High-rise hotels directly overlooking Al-Masjid al-Haram with private courtyard access.",
      priceRange: "$$ - $$$ (Luxury)",
      recommendation: "Best for immediate walking access to prayer halls."
    }
  ],

  bestRestaurants: [
    {
      name: "Albaik Abraj Al Bait",
      cuisine: "Fast Casual Saudi Chicken",
      description: "Saudi Arabia's most famous home-grown broasted chicken establishment.",
      location: "Clock Tower Mall",
      priceRange: "15 - 30 SAR per person"
    }
  ],

  transportation: [
    {
      type: "Haramain High-Speed Railway & Bus Network",
      description: "Ultra-modern electric bullet train connects Mecca directly to Medina in just 2 hours 15 minutes!",
      cost: "150 - 250 SAR train fare"
    }
  ],

  budgetTips: [
    {
      title: "Book Haramain Train Tickets Early",
      description: "Reserve your Haramain High-Speed train tickets online weeks ahead for discounted rates between Mecca and Medina."
    }
  ],

  safetyTips: [
    {
      title: "Stay Hydrated with Zamzam Water",
      description: "Free Zamzam water dispensers are available throughout Al-Masjid al-Haram. Drink frequently."
    }
  ],

  localEtiquette: [
    {
      title: "Non-Muslim Access Restrictions",
      description: "By Saudi law and religious custom, entry into the city limits of Mecca is restricted exclusively to Muslims."
    }
  ],

  hiddenGems: [
    {
      name: "Jabal al-Thawr Cave",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80",
      description: "The historic cave where the Prophet Muhammad and Abu Bakr sheltered during their migration to Medina.",
      tip: "Climb early in the morning to avoid midday sun."
    }
  ],

  faq: [
    {
      question: "Can non-Muslims visit Mecca?",
      answer: "No. Entry into the sacred city boundary of Mecca is strictly restricted to Muslim travelers."
    }
  ]
};

export const medinaData: City = {
  slug: "medina",
  name: "Medina",
  country: "Saudi Arabia",
  region: "Middle East",
  tagline: "The City of the Prophet, peaceful sanctuaries, and Al-Masjid an-Nabawi",
  heroImage: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Medina like a local. Guide to Al-Masjid an-Nabawi, Rawdah, Quba Mosque, Mount Uhud, date markets, and transit.",
  seoTitle: "Medina Travel Guide: The Prophet's Mosque & Sacred Heritage | LocTravel",
  seoDescription: "An expert content guide to Medina. Discover Al-Masjid an-Nabawi, Rawdah, Quba Mosque, Mount Uhud, Ajwa dates, and travel tips.",
  lat: 24.5247,
  lon: 39.5692,
  currency: "Saudi Riyal (SAR / ﷼)",
  language: "Arabic",
  timezone: "AST (UTC+3)",

  overview: [
    "Medina is a major Islamic pilgrimage site in western Saudi Arabia. At its center is Al-Masjid an-Nabawi (The Prophet’s Mosque), built by the Prophet Muhammad himself and serving as his burial site under the iconic Green Dome.",
    "Known for its serene, peaceful atmosphere, Medina welcomes millions of visitors each year who pray in the Rawdah and visit historical sites such as Quba Mosque and Mount Uhud."
  ],

  bestTimeToVisit: {
    season: "November to February (Cool Season)",
    description: "Pleasant mild weather ideal for walking between central sanctuaries and date palm groves.",
    weatherDetails: "Temperatures range from 16°C to 26°C."
  },

  attractions: [
    {
      name: "Al-Masjid an-Nabawi (The Prophet's Mosque)",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=600&q=80",
      description: "The vast, beautiful mosque featuring giant shaded umbrellas and the sacred Green Dome.",
      duration: "4 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    }
  ],

  thingsToDo: [
    {
      title: "Pray in the Rawdah ash-Sharifah",
      description: "Experience prayer in the area between the Prophet's house and minbar (Nusuk app permit required).",
      duration: "1 hour",
      cost: "Free (Nusuk app registration)"
    }
  ],

  food: [
    {
      name: "Medina Ajwa Dates & Saudi Arabic Coffee (Gahwa)",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      description: "Premium dark Ajwa dates paired with cardamom-infused light roast Saudi Arabic coffee.",
      recommendation: "Visit the Central Date Market near Quba."
    }
  ],

  whereToStay: [
    {
      area: "Central Northern Markaziyah",
      description: "Pedestrian plaza hotels surrounding Al-Masjid an-Nabawi courtyard.",
      priceRange: "$$ - $$$ (Mid-Range & Luxury)",
      recommendation: "Best for immediate walking access to the Prophet's Mosque."
    }
  ],

  bestRestaurants: [
    {
      name: "Arabesque Restaurant",
      cuisine: "Middle Eastern & International",
      description: "Upscale buffet dining overlooking the courtyards of the Prophet's Mosque.",
      location: "Northern Markaziyah",
      priceRange: "80 - 180 SAR per person"
    }
  ],

  transportation: [
    {
      type: "Haramain Bullet Train & Shuttle Buses",
      description: "Haramain High-Speed train connects Medina Airport/Station to Mecca in 2 hours 15 mins.",
      cost: "150 SAR train / 10 SAR city shuttle"
    }
  ],

  budgetTips: [
    {
      title: "Visit Quba Mosque on Foot",
      description: "Walk the newly built pedestrianized Quba Avenue connecting the Prophet's Mosque directly to Quba Mosque."
    }
  ],

  safetyTips: [
    {
      title: "Book Rawdah Permit via Nusuk App",
      description: "Access to pray inside the Rawdah requires a free timed permit via the official Nusuk smartphone app."
    }
  ],

  localEtiquette: [
    {
      title: "Quiet Reverence",
      description: "Medina is revered for its peaceful and calm atmosphere. Maintain quiet speech in prayer halls."
    }
  ],

  hiddenGems: [
    {
      name: "Quba Mosque (First Mosque in Islam)",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=600&q=80",
      description: "The very first mosque built by the Prophet Muhammad upon his arrival in Medina.",
      tip: "Walk along Quba Walkway at sunset when palm trees light up."
    }
  ],

  faq: [
    {
      question: "Can non-Muslims visit Medina?",
      answer: "Non-Muslims can visit Medina city and central areas, though the interior courtyard of Al-Masjid an-Nabawi remains reserved for Muslims."
    }
  ]
};
