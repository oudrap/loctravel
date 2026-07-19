import { City } from "../../types/travel";

export const tokyoData: City = {
  slug: "tokyo",
  name: "Tokyo",
  country: "Japan",
  region: "Asia",
  tagline: "The neon-lit metropolis where ancient tradition meets future tech",
  heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Tokyo like a local. Guide to the best ramen shops, historic shrines, quiet neighborhoods, subways, and budget tips.",
  seoTitle: "Tokyo Travel Guide: Navigating Japan's Neon Metropolis | LocTravel",
  seoDescription: "An expert, content-first travel guide to Tokyo. Discover top attractions, sushi hotspots, hidden alleyways, budget advice, safety, and local culture.",
  lat: 35.6762,
  lon: 139.6503,
  
  currency: "Japanese Yen (¥)",
  language: "Japanese",
  timezone: "JST (UTC+9)",
  
  overview: [
    "Tokyo, Japan's bustling capital, mixes ultra-modern neon skyscrapers with historic Shinto shrines. The city is famous for its incredible food scene, efficient public transit, quirky pop culture, and unmatched safety. From the busy crossings of Shibuya to the quiet lanes of Yanaka, Tokyo offers endless layers to explore.",
    "To see the real Tokyo, you need to slow down. Visit a neighborhood bathhouse (sento), squeeze into a tiny bar in Golden Gai, and pick up a morning bento from a convenience store to eat in Shinjuku Gyoen. Let this guide lead you through the absolute best local experiences."
  ],
  
  bestTimeToVisit: {
    season: "Spring (March to May) & Autumn (September to November)",
    description: "Spring brings the world-famous cherry blossom (sakura) season, while autumn offers cool, dry weather with stunning red maples (koyo).",
    weatherDetails: "Temperatures range from 12°C to 22°C. Both seasons are comfortable for walking around the city and participating in outdoor matsuri (festivals)."
  },
  
  attractions: [
    {
      name: "Senso-ji Temple",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      description: "Tokyo's oldest and most iconic Buddhist temple, located in the historic Asakusa district.",
      duration: "1.5 hours",
      cost: "Free",
      type: "History & Religion"
    },
    {
      name: "Shibuya Crossing",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
      description: "The world's busiest pedestrian intersection, surrounded by bright neon signs and giant screens.",
      duration: "1 hour",
      cost: "Free",
      type: "Landmark"
    },
    {
      name: "Meiji Jingu Shrine",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80",
      description: "A serene Shinto shrine dedicated to Emperor Meiji, located inside a dense, 170-acre forest in the heart of Tokyo.",
      duration: "1.5 hours",
      cost: "Free",
      type: "Nature & Religion"
    }
  ],

  thingsToDo: [
    {
      title: "Explore Akihabara Electric Town",
      description: "Dive into multi-floor arcades, retro gaming stores, anime shops, and maid cafes in Tokyo's otaku capital.",
      duration: "2-3 hours",
      cost: "Free to explore"
    },
    {
      title: "Morning Walk in Shinjuku Gyoen National Garden",
      description: "Stroll through traditional Japanese, French, and English landscape gardens in the center of Shinjuku.",
      duration: "2 hours",
      cost: "¥500 (approx. $3.50)"
    },
    {
      title: "Experience TeamLab Planets",
      description: "Walk barefoot through immersive digital art installations where light and water interact with your body.",
      duration: "2 hours",
      cost: "¥3,800 (approx. $25)"
    }
  ],
  
  food: [
    {
      name: "Tonkotsu Ramen",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
      description: "Rich, creamy pork bone broth served with thin wheat noodles, sliced chashu pork, and a soft-boiled egg.",
      recommendation: "Visit Tokyo Station Ramen Street or an authentic neighborhood ramen shop in Takadanobaba."
    },
    {
      name: "Nigiri Sushi",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
      description: "Bite-sized slices of raw fresh fish served over seasoned vinegared rice.",
      recommendation: "Try a conveyor-belt (kaitenzushi) spot like Katsumidori in Shibuya for great quality at budget prices."
    },
    {
      name: "Yakitori (Skewered Chicken)",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      description: "Skewers of chicken parts grilled over charcoal, seasoned with salt or sweet tare sauce.",
      recommendation: "Grab a stool in Omoide Yokocho (Memory Lane) in Shinjuku for an authentic, smoky dining experience."
    }
  ],

  whereToStay: [
    {
      area: "Shinjuku & Shibuya",
      description: "Bustling transportation hubs with endless shopping, nightlife, neon lights, and central subway access.",
      priceRange: "$$ - $$$ (Mid-Range & Luxury)",
      recommendation: "Best for first-time visitors who want action, night markets, and seamless train lines."
    },
    {
      area: "Asakusa & Ueno",
      description: "Traditional, historic neighborhoods on the east side of Tokyo with budget homestays, temples, and quiet streets.",
      priceRange: "$ - $$ (Budget-Friendly)",
      recommendation: "Ideal for travelers seeking quiet evenings, authentic heritage, and budget accommodation."
    },
    {
      area: "Ginza & Marunouchi",
      description: "High-end shopping avenues, grand department stores, luxury boutique hotels, and fine dining.",
      priceRange: "$$$ (Upscale Luxury)",
      recommendation: "Best for luxury travelers and gourmet food lovers."
    }
  ],

  bestRestaurants: [
    {
      name: "Fuunji Ramen",
      cuisine: "Tsukemen (Dipping Ramen)",
      description: "Legendary counter-service shop famous for rich seafood and chicken broth dipping noodles.",
      location: "Shinjuku",
      priceRange: "¥1,000 - ¥1,500 ($7 - $10)"
    },
    {
      name: "Sushizanmai",
      cuisine: "Nigiri Sushi",
      description: "Popular 24-hour fresh sushi chain originating from Tsukiji Outer Market.",
      location: "Tsukiji / Ginza",
      priceRange: "¥2,000 - ¥4,000 ($15 - $28)"
    },
    {
      name: "Gyukatsu Motomura",
      cuisine: "Deep-Fried Beef Cutlet",
      description: "Crispy panko-crusted beef cutlets served rare, which you sizzle to perfection on a personal stone grill.",
      location: "Shibuya / Harajuku",
      priceRange: "¥1,500 - ¥2,500 ($10 - $18)"
    }
  ],
  
  hiddenGems: [
    {
      name: "Yanaka District",
      image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=600&q=80",
      description: "One of Tokyo's few remaining neighborhoods that survived WWII, retaining a charming pre-war 'Shitamachi' atmosphere.",
      tip: "Visit late afternoon to see the sunset at Yuyake Dandan stairs and shop for snacks along Yanaka Ginza street."
    },
    {
      name: "Todoroki Valley",
      image: "https://images.unsplash.com/photo-1504109586057-7a2ae86d1218?auto=format&fit=crop&w=600&q=80",
      description: "A lush, forested ravine hidden right within Tokyo's Setagaya ward, featuring a small stream, bridges, and a temple.",
      tip: "Walk the wooden boardwalk on a hot summer day; it's several degrees cooler than the rest of the city."
    }
  ],
  
  budgetTips: [
    {
      title: "Buy a Tokyo Subway Ticket",
      description: "Available for tourists, a 24, 48, or 72-hour subway pass offers unlimited rides on Tokyo Metro and Toei Subway lines."
    },
    {
      title: "Dine at Convenience Stores (Konbini)",
      description: "Japanese 7-Eleven, Lawson, and FamilyMart offer high-quality, cheap meals like onigiri (rice balls), bento boxes, and fried chicken."
    },
    {
      title: "Explore Free Observation Decks",
      description: "Skip expensive towers and visit the Tokyo Metropolitan Government Building in Shinjuku for free panoramic views from 202 meters up."
    }
  ],
  
  transportation: [
    {
      type: "Trains & Subways",
      description: "The most punctual and extensive railway network in the world. Get a Suica or Pasmo card for easy tapping.",
      cost: "¥140 - ¥350 per ride"
    },
    {
      type: "Walking",
      description: "Great for exploring individual neighborhoods like Harajuku, Omotesando, and Shibuya which are close together.",
      cost: "Free"
    },
    {
      type: "Taxis",
      description: "Very clean and safe, but quite expensive. Only recommended late at night when trains stop running.",
      cost: "¥500 base fare + mileage"
    }
  ],
  
  safetyTips: [
    {
      title: "Low Crime Rate",
      description: "Tokyo is incredibly safe, even for solo female travelers at night. Practice normal common sense."
    },
    {
      title: "Avoid Roppongi Touts",
      description: "Avoid street promoters in Roppongi or Kabukicho offering cheap drinks. They target foreigners with credit card scams."
    },
    {
      title: "Earthquake Preparedness",
      description: "Earthquakes are common. Familiarize yourself with emergency exits and download safety apps like 'Safety Tips'."
    }
  ],

  localEtiquette: [
    {
      title: "No Tipping Allowed",
      description: "Tipping does not exist in Japan and can cause confusion or awkwardness. Exceptional service is built into the pride of hospitality."
    },
    {
      title: "Quiet on Public Transit",
      description: "Refrain from talking on mobile phones or talking loudly on trains and subways."
    },
    {
      title: "Take Your Trash Home",
      description: "Public trash cans are rare in Tokyo. Carry a small plastic bag in your daypack to hold trash until you return to your hotel or konbini."
    }
  ],
  
  faq: [
    {
      question: "Should I carry cash in Tokyo?",
      answer: "Yes. While credit cards and IC cards (Suica) are widely accepted, many small noodle shops, temples, and local bars only accept cash."
    },
    {
      question: "Are there trash cans in Tokyo?",
      answer: "Hardly any. Keep a small bag in your pack to carry your trash back to your hotel or dispose of it at convenience store bins."
    },
    {
      question: "Is tipping expected in restaurants?",
      answer: "No. Tipping is not part of Japanese culture and is considered unnecessary or inappropriate."
    }
  ]
};
