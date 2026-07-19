import { City } from "../../types/travel";

export const seoulData: City = {
  slug: "seoul",
  name: "Seoul",
  country: "South Korea",
  region: "Asia",
  tagline: "The high-tech soul of Asia with ancient palaces, K-culture, and night markets",
  heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Seoul like a local. Guide to Gyeongbokgung, street food in Myeongdong, K-beauty, subways, and safety.",
  seoTitle: "Seoul Travel Guide: Palaces, K-Culture, & Street Food | LocTravel",
  seoDescription: "An expert content guide to Seoul. Explore royal palaces, street food stalls, Hanok villages, subways, and budget tips.",
  lat: 37.5665,
  lon: 126.9780,
  currency: "South Korean Won (KRW / ₩)",
  language: "Korean",
  timezone: "KST (UTC+9)",

  overview: [
    "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",
    "Rent a traditional Hanbok to enter Gyeongbokgung Palace for free, feast on sizzling Korean BBQ in Hongdae, and take in sunset views from N Seoul Tower."
  ],

  bestTimeToVisit: {
    season: "Spring (April to May) & Autumn (September to November)",
    description: "Crisp sunny weather with blooming cherry blossoms in spring and vivid red ginkgo leaves in autumn.",
    weatherDetails: "Temperatures range from 12°C to 22°C."
  },

  attractions: [
    {
      name: "Gyeongbokgung Palace",
      image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80",
      description: "Main royal palace of the Joseon dynasty, originally built in 1395.",
      duration: "2.5 hours",
      cost: "₩3,000 (Free if wearing Hanbok)",
      type: "History & Architecture"
    }
  ],

  thingsToDo: [
    {
      title: "Wander Bukchon Hanok Village",
      description: "Explore hundreds of traditional Korean courtyard houses dating back to the Joseon Dynasty.",
      duration: "2 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Korean BBQ (Samgyeopsal)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Grilled pork belly wrapped in sesame leaves with garlic, ssamjang sauce, and kimchi.",
      recommendation: "Dine at Maple Tree House in Itaewon for premium cut meats."
    }
  ],

  whereToStay: [
    {
      area: "Hongdae & Sinchon",
      description: "Youthful university district filled with indie shops, street busking, cafes, and nightlife.",
      priceRange: "$ - $$ (Budget & Mid-Range)",
      recommendation: "Ideal for younger travelers and solo explorers."
    }
  ],

  bestRestaurants: [
    {
      name: "Gwangjang Market Food Stalls",
      cuisine: "Korean Street Food",
      description: "Historic market famous for bindaetteok (mung bean pancakes) and tteokbokki.",
      location: "Jongno-gu",
      priceRange: "₩5,000 - ₩15,000 per person"
    }
  ],

  transportation: [
    {
      type: "Seoul Subway & T-Money Card",
      description: "Extensive, clean, and cheap subway system. Tap in and out using a rechargeable T-Money card.",
      cost: "₩1,400 base fare"
    }
  ],

  budgetTips: [
    {
      title: "Wear Hanbok for Free Palace Entry",
      description: "Renting a Hanbok costume from nearby rental shops gives free admission to all major Seoul palaces."
    }
  ],

  safetyTips: [
    {
      title: "Extremely Safe",
      description: "Seoul is among the safest mega-cities globally. Standard luggage awareness applies."
    }
  ],

  localEtiquette: [
    {
      title: "Two Hands for Respect",
      description: "Pass money, cards, or drinks using both hands to show courtesy."
    }
  ],

  hiddenGems: [
    {
      name: "Ikseon-dong Hanok Village",
      image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80",
      description: "A trendy maze of narrow hanok alleys packed with hipster cafes, craft beer bars, and bakeries.",
      tip: "Visit on a weekday morning to enjoy quiet coffee before crowds arrive."
    }
  ],

  faq: [
    {
      question: "Do I need KakaoMap in Seoul?",
      answer: "Yes! Google Maps walking directions do not work well in South Korea. Download Naver Map or KakaoMap."
    }
  ]
};

export const bangkokData: City = {
  slug: "bangkok",
  name: "Bangkok",
  country: "Thailand",
  region: "Asia",
  tagline: "The vibrant capital of ornate shrines, street food feasts, and bustling waterways",
  heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Bangkok like a local. Guide to Grand Palace, street markets, tuk-tuks, BTS Skytrain, and safety.",
  seoTitle: "Bangkok Travel Guide: Golden Temples & Street Eats | LocTravel",
  seoDescription: "An expert content guide to Bangkok. Discover Grand Palace, Wat Arun, night markets, boat transit, and budget tips.",
  lat: 13.7563,
  lon: 100.5018,
  currency: "Thai Baht (THB / ฿)",
  language: "Thai (English widely used in tourism)",
  timezone: "ICT (UTC+7)",

  overview: [
    "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and sacred Wat Phra Kaew Temple.",
    "FEast on spicy Pad Thai at street stalls, cruise on Chao Phraya Express boats, and explore the bustling weekend Chatuchak Market."
  ],

  bestTimeToVisit: {
    season: "November to February (Cool & Dry)",
    description: "The most comfortable time with lower humidity and warm sunny days.",
    weatherDetails: "Temperatures average around 26°C to 32°C."
  },

  attractions: [
    {
      name: "Grand Palace & Wat Phra Kaew",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
      description: "Official residence of the Kings of Siam, housing the revered Emerald Buddha.",
      duration: "2.5 hours",
      cost: "500 THB",
      type: "History & Religion"
    }
  ],

  thingsToDo: [
    {
      title: "Cross the River to Wat Arun (Temple of Dawn)",
      description: "Climb the porcelain-decorated spire for stunning river views.",
      duration: "1 hour",
      cost: "100 THB + 5 THB ferry"
    }
  ],

  food: [
    {
      name: "Pad Thai & Tom Yum Goong",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
      description: "Stir-fried rice noodles and fiery hot & sour shrimp soup with lemongrass and lime.",
      recommendation: "Try Thip Samai for legendary Pad Thai."
    }
  ],

  whereToStay: [
    {
      area: "Sukhumvit & Siam",
      description: "Modern shopping malls, luxury hotels, and direct access to BTS Skytrain.",
      priceRange: "$$ - $$$ (Mid-Range & Luxury)",
      recommendation: "Best for shopping and easy transit."
    }
  ],

  bestRestaurants: [
    {
      name: "Jay Fai",
      cuisine: "Michelin Street Food",
      description: "Famous street food stall known for its legendary crab omelet cooked over open wok flames.",
      location: "Old Town",
      priceRange: "1,000 THB per dish"
    }
  ],

  transportation: [
    {
      type: "BTS Skytrain & Chao Phraya Express Boat",
      description: "Beat Bangkok traffic using elevated trains and public river boats.",
      cost: "16 - 59 THB per ride"
    }
  ],

  budgetTips: [
    {
      title: "Use River Ferries",
      description: "Public orange flag boats cost only 16 THB and connect major temples faster than road taxis."
    }
  ],

  safetyTips: [
    {
      title: "Tuk-Tuk Gems Scam",
      description: "If a driver says a temple is 'closed' and offers a 20 THB tour to suit shops, decline politely."
    }
  ],

  localEtiquette: [
    {
      title: "Dress Modestly at Temples",
      description: "Cover shoulders and knees when visiting temples. Remove shoes before entering indoor shrines."
    }
  ],

  hiddenGems: [
    {
      name: "Talad Noi Alleyways",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
      description: "Historic Chinese neighborhood along the river filled with street art, vintage spare parts, and indie cafes.",
      tip: "Stop by Mother Roaster for drip coffee inside a reclaimed warehouse."
    }
  ],

  faq: [
    {
      question: "Is street food safe in Bangkok?",
      answer: "Yes! Choose busy stalls with high customer turnover where food is cooked hot to order."
    }
  ]
};

export const cairoData: City = {
  slug: "cairo",
  name: "Cairo",
  country: "Egypt",
  region: "Africa",
  tagline: "The cradle of civilization, majestic pyramids, and vibrant Nile bazaars",
  heroImage: "https://images.unsplash.com/photo-1572252821143-035b80459527?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Cairo like a local. Guide to Giza Pyramids, Khan el-Khalili, Egyptian Museum, and safety tips.",
  seoTitle: "Cairo Travel Guide: Pyramids, Nile, & Ancient Wonders | LocTravel",
  seoDescription: "An expert content guide to Cairo. Discover Giza Pyramids, Sphinx, Islamic Cairo bazaars, budget advice, and safety.",
  lat: 30.0444,
  lon: 31.2357,
  currency: "Egyptian Pound (EGP / LE)",
  language: "Arabic",
  timezone: "EET (UTC+2 / UTC+3 in summer)",

  overview: [
    "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts.",
    "Nearby, Giza is the site of the iconic Pyramids and Great Sphinx, dating to the 26th century BC. Explore medieval Khan el-Khalili bazaar for spices, lamps, and mint tea."
  ],

  bestTimeToVisit: {
    season: "October to April (Cool Winter)",
    description: "Mild daytime temperatures perfect for exploring outdoor pyramid complexes and desert sights.",
    weatherDetails: "Temperatures range from 15°C to 24°C."
  },

  attractions: [
    {
      name: "Giza Pyramid Complex & Sphinx",
      image: "https://images.unsplash.com/photo-1572252821143-035b80459527?auto=format&fit=crop&w=600&q=80",
      description: "The Great Pyramid of Khufu, Khafre, Menkaure, and the enigmatic Great Sphinx.",
      duration: "4 hours",
      cost: "540 EGP (Site entry)",
      type: "World Wonder"
    }
  ],

  thingsToDo: [
    {
      title: "Sunset Felucca Ride on the Nile",
      description: "Sail a traditional wooden sailboat along the Nile at golden hour.",
      duration: "1 hour",
      cost: "300 - 500 EGP per boat"
    }
  ],

  food: [
    {
      name: "Koshary",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      description: "Egypt's national dish: rice, macaroni, lentils, and chickpeas topped with spiced tomato sauce and fried onions.",
      recommendation: "Eat at Koshary Abou Tarek in downtown Cairo."
    }
  ],

  whereToStay: [
    {
      area: "Zamalek (Gezira Island)",
      description: "Upscale, leafy island district on the Nile filled with art galleries, embassies, and fine dining.",
      priceRange: "$$ - $$$ (Mid-Range & Boutique)",
      recommendation: "Best for a quiet, safe, and walkable stay."
    }
  ],

  bestRestaurants: [
    {
      name: "Abou El Sid",
      cuisine: "Authentic Egyptian",
      description: "Traditional Egyptian dining serving stuffed pigeon, molokhia, and mezze in 1940s decor.",
      location: "Zamalek",
      priceRange: "300 - 600 EGP per person"
    }
  ],

  transportation: [
    {
      type: "Uber & Cairo Metro",
      description: "Uber is very cheap and avoids taxi fare haggling. Metro line 1 & 2 connect central districts.",
      cost: "50 - 150 EGP per Uber ride"
    }
  ],

  budgetTips: [
    {
      title: "Use Uber for Transparent Prices",
      description: "Avoid street taxi price disputes by booking Uber or Careem for fixed upfront fares."
    }
  ],

  safetyTips: [
    {
      title: "Polite Firm Refusal for Touts",
      description: "Camel drivers and unofficial guides at Pyramids can be persistent. A polite 'La, Shukran' (No thanks) works best."
    }
  ],

  localEtiquette: [
    {
      title: "Tipping (Baksheesh)",
      description: "Tipping small amounts (10-20 EGP) to bathroom attendants, porters, and drivers is standard social custom."
    }
  ],

  hiddenGems: [
    {
      name: "Al-Azhar Park",
      image: "https://images.unsplash.com/photo-1572252821143-035b80459527?auto=format&fit=crop&w=600&q=80",
      description: "A lush 74-acre hilltop park providing panoramic views over historic Islamic Cairo and the Citadel.",
      tip: "Arrive before sunset to hear the call to prayer echo across thousands of minarets."
    }
  ],

  faq: [
    {
      question: "Is Cairo safe for international tourists?",
      answer: "Yes, tourism areas are well-policed. Follow standard guidelines, dress respectfully, and use rideshare apps."
    }
  ]
};

export const sydneyData: City = {
  slug: "sydney",
  name: "Sydney",
  country: "Australia",
  region: "Oceania",
  tagline: "The harbor paradise of golden beaches, iconic sails, and coastal walks",
  heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Sydney like a local. Guide to Sydney Opera House, Bondi Beach, Manly ferry, and coastal walks.",
  seoTitle: "Sydney Travel Guide: Harbor Sails & Coastal Beaches | LocTravel",
  seoDescription: "An expert content guide to Sydney. Discover Sydney Opera House, Harbour Bridge, Bondi to Coogee coastal walk, and budget tips.",
  lat: -33.8688,
  lon: 151.2093,
  currency: "Australian Dollar (AUD / A$)",
  language: "English",
  timezone: "AEST (UTC+10 / UTC+11 in summer)",

  overview: [
    "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Sydney Opera House, with a distinctive sail-like design.",
    "Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and nearby Royal Botanic Garden."
  ],

  bestTimeToVisit: {
    season: "September to November & February to May",
    description: "Sunny spring and warm autumn months ideal for beach days and coastal hikes.",
    weatherDetails: "Temperatures range from 18°C to 26°C."
  },

  attractions: [
    {
      name: "Sydney Opera House",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
      description: "UNESCO World Heritage performing arts center situated on Bennelong Point.",
      duration: "1.5 hours",
      cost: "Free to view exterior; tours A$43",
      type: "Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Bondi to Coogee Coastal Walk",
      description: "6km cliffside trail connecting beaches, ocean pools, and dramatic Pacific views.",
      duration: "2.5 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Fresh Sydney Rock Oysters & Fish & Chips",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      description: "Freshly shucked sweet ocean oysters eaten waterfront at Sydney Fish Market.",
      recommendation: "Visit Sydney Fish Market in Pyrmont for lunch."
    }
  ],

  whereToStay: [
    {
      area: "Circular Quay & The Rocks",
      description: "Historic cobblestone precinct right on the harbor with iconic landmark views.",
      priceRange: "$$$ (Luxury)",
      recommendation: "Best for prime views and central transit ferries."
    }
  ],

  bestRestaurants: [
    {
      name: "Icebergs Dining Room & Bar",
      cuisine: "Modern Australian / Italian",
      description: "Perched right over the iconic ocean pool at Bondi Beach.",
      location: "Bondi Beach",
      priceRange: "A$80 - A$140 per person"
    }
  ],

  transportation: [
    {
      type: "Opal Card & Contactless (Ferries, Trains, Light Rail)",
      description: "Tap any credit card or Opal card. Sunday travel is capped at a discounted rate!",
      cost: "A$3.80 - A$8.00 per ride"
    }
  ],

  budgetTips: [
    {
      title: "Take the Public Ferry to Manly",
      description: "Skip expensive private harbor cruises; the public Manly Ferry from Circular Quay offers the best harbor views for under A$10."
    }
  ],

  safetyTips: [
    {
      title: "Swim Between the Flags",
      description: "Ocean currents can be strong. Always swim on lifeguarded beaches between red and yellow flags."
    }
  ],

  localEtiquette: [
    {
      title: "Coffee Culture is Sacred",
      description: "Australians take coffee seriously. Try a 'Flat White' at local specialty cafes rather than chain stores."
    }
  ],

  hiddenGems: [
    {
      name: "Wendy Whiteley's Secret Garden",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
      description: "A magical public garden built on reclaimed railway land overlooking Lavender Bay.",
      tip: "Bring a picnic lunch to enjoy under the giant fig trees."
    }
  ],

  faq: [
    {
      question: "Can I use my regular credit card on Sydney transport?",
      answer: "Yes! Simply tap on and tap off using any contactless Visa, Mastercard, or Apple Pay."
    }
  ]
};

export const capeTownData: City = {
  slug: "cape-town",
  name: "Cape Town",
  country: "South Africa",
  region: "Africa",
  tagline: "The Mother City of Table Mountain, winelands, and dramatic Atlantic coastlines",
  heroImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Cape Town like a local. Guide to Table Mountain cableway, Boulders Beach penguins, V&A Waterfront, and safety.",
  seoTitle: "Cape Town Travel Guide: Table Mountain & Coastal Beauty | LocTravel",
  seoDescription: "An expert content guide to Cape Town. Discover Table Mountain, Cape Point, penguin colony, wine estates, and budget advice.",
  lat: -33.9249,
  lon: 18.4241,
  currency: "South African Rand (ZAR / R)",
  language: "English, Afrikaans, Xhosa",
  timezone: "SAST (UTC+2)",

  overview: [
    "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, offering sweeping views of the city, the Atlantic Ocean, and Robben Island.",
    "Explore the colorful Bo-Kaap neighborhood, visit penguins at Boulders Beach, and tour world-class Stellenbosch wine estates nearby."
  ],

  bestTimeToVisit: {
    season: "November to March (Summer)",
    description: "Warm, dry, sunny summer months perfect for beaches, outdoor hiking, and wine tasting.",
    weatherDetails: "Temperatures range from 19°C to 28°C."
  },

  attractions: [
    {
      name: "Table Mountain Aerial Cableway",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
      description: "Rotating cable car ride to the summit of New7Wonders of Nature landmark.",
      duration: "3 hours",
      cost: "R380 - R420 return",
      type: "Nature Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Visit Boulders Beach Penguins",
      description: "See a wild colony of African penguins nesting along granite boulders in Simon's Town.",
      duration: "2 hours",
      cost: "R190",
    }
  ],

  food: [
    {
      name: "Cape Malay Bobotie",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Spiced minced meat baked with an egg custard topping, served with yellow rice and chutney.",
      recommendation: "Dine at Biesmiellah Restaurant in Bo-Kaap."
    }
  ],

  whereToStay: [
    {
      area: "V&A Waterfront & Camps Bay",
      description: "Secure, scenic waterfront district with easy access to tours, dining, and ocean beaches.",
      priceRange: "$$ - $$$ (Mid-Range & Luxury)",
      recommendation: "Best for international first-time visitors."
    }
  ],

  bestRestaurants: [
    {
      name: "Kloof Street House",
      cuisine: "Modern South African Bistro",
      description: "Victorian manor house serving steaks and seafood in fairy-lit garden courtyards.",
      location: "Gardens",
      priceRange: "R250 - R450 per person"
    }
  ],

  transportation: [
    {
      type: "Uber & MyCiTi Bus",
      description: "Uber is safe, cheap, and widely available. MyCiTi buses connect airport and waterfront routes.",
      cost: "R50 - R150 per Uber ride"
    }
  ],

  budgetTips: [
    {
      title: "Hike Lion's Head for Sunrise",
      description: "Skip cable car fees and hike up Lion's Head for free 360-degree views of Table Mountain and the ocean."
    }
  ],

  safetyTips: [
    {
      title: "Use Rideshare at Night",
      description: "Avoid walking alone on quiet streets after dark. Use Uber for door-to-door night transit."
    }
  ],

  localEtiquette: [
    {
      title: "Tip Car Guard Attendants",
      description: "Official/informal car guards watch street parked cars. Tipping R5 - R10 when leaving is standard practice."
    }
  ],

  hiddenGems: [
    {
      name: "Kirstenbosch Botanical Gardens Canopy Walk",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
      description: "The 'Boomslang' curved timber walkway raised above the treetops behind Table Mountain.",
      tip: "Pack a picnic to enjoy on the sloping lawns during outdoor summer concerts."
    }
  ],

  faq: [
    {
      question: "Is Cape Town safe for tourists?",
      answer: "Yes, in tourist zones like V&A Waterfront, Camps Bay, and Sea Point. Exercise standard night awareness and use Uber."
    }
  ]
};
