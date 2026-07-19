import { City } from "../../types/travel";

export const singaporeData: City = {
  slug: "singapore",
  name: "Singapore",
  country: "Singapore",
  region: "Asia",
  tagline: "The modern Garden City of futuristic supertrees, hawker stalls, and pristine streets",
  heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Singapore like a local. Guide to Marina Bay, hawker centers, Chinatown, transit hacks, and safety tips.",
  seoTitle: "Singapore Travel Guide: Garden City & Hawker Delights | LocTravel",
  seoDescription: "An expert local guide to Singapore. Discover Gardens by the Bay, Michelin hawker stalls, walkable neighborhoods, and budget tips.",
  lat: 1.3521,
  lon: 103.8198,
  currency: "Singapore Dollar (SGD / S$)",
  language: "English, Mandarin, Malay, Tamil",
  timezone: "SGT (UTC+8)",

  overview: [
    "Singapore is a vibrant island city-state off southern Malaysia, known as a global financial hub with a tropical climate and multicultural population. Its iconic skyline is defined by Marina Bay Sands, Gardens by the Bay, and sleek high-rises blended with lush green parks.",
    "Beyond futuristic architecture lies a rich mosaic of cultures. Dine at UNESCO-recognized hawker centers, wander through colorful shop-houses in Kampong Glam, and take evening walks along the Singapore River to experience local life."
  ],

  bestTimeToVisit: {
    season: "November to January (Cooler & Festive)",
    description: "Singapore is warm year-round, but late year brings pleasant tropical breezes and festive lights along Orchard Road.",
    weatherDetails: "Average temperatures hover around 26°C to 31°C with short tropical showers."
  },

  attractions: [
    {
      name: "Gardens by the Bay",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
      description: "Futuristic park featuring 50-meter Supertree structures and massive climate-controlled glass conservatories.",
      duration: "3 hours",
      cost: "Free for outdoor gardens; S$28 for domes",
      type: "Nature & Design"
    },
    {
      name: "Marina Bay Sands SkyPark",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80",
      description: "Observation deck offering 360-degree views across the Singapore Strait and city skyline.",
      duration: "1.5 hours",
      cost: "S$30",
      type: "Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Watch the Garden Rhapsody Light Show",
      description: "Free nightly music and light spectacle underneath the glowing Supertree Grove.",
      duration: "45 mins",
      cost: "Free"
    },
    {
      title: "Explore Chinatown & Buddha Tooth Relic Temple",
      description: "Wander historic streets, visit sacred temples, and shop for souvenirs.",
      duration: "2 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Hainanese Chicken Rice",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
      description: "Poached tender chicken served over fragrant rice cooked in chicken broth and ginger.",
      recommendation: "Try Tian Tian Chicken Rice at Maxwell Food Centre."
    },
    {
      name: "Chilli Crab",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
      description: "Mud crab stir-fried in a sweet, savory, and spicy tomato-chilli sauce, eaten with fried mantou buns.",
      recommendation: "Enjoy it at Jumbo Seafood along East Coast Parkway."
    }
  ],

  whereToStay: [
    {
      area: "Marina Bay & Civic District",
      description: "Iconic luxury hotels and world-class attractions within walking distance.",
      priceRange: "$$$ (Luxury)",
      recommendation: "Best for luxury travelers and high-end stays."
    },
    {
      area: "Chinatown & Tanjong Pagar",
      description: "Boutique hotels in heritage shophouses surrounded by trendy cocktail bars.",
      priceRange: "$$ (Mid-Range & Boutique)",
      recommendation: "Great for food lovers and central access."
    }
  ],

  bestRestaurants: [
    {
      name: "Lau Pa Sat Hawker Centre",
      cuisine: "Multicultural Street Food",
      description: "Historic Victorian iron structure famous for outdoor satay street stalls at night.",
      location: "Financial District",
      priceRange: "S$5 - S$15 per person"
    }
  ],

  transportation: [
    {
      type: "MRT (Mass Rapid Transit)",
      description: "Ultra-clean, safe, and air-conditioned train network covering the entire island.",
      cost: "S$1.50 - S$2.50 per trip (Tap EZ-Link or Visa)"
    }
  ],

  budgetTips: [
    {
      title: "Eat at Hawker Centers",
      description: "Skip expensive restaurants and enjoy Michelin-recommended meals for under S$6 at local hawker stalls."
    }
  ],

  safetyTips: [
    {
      title: "Strict Local Laws",
      description: "Chewing gum import, littering, and jaywalking carry heavy fines. Follow sign rules strictly."
    }
  ],

  localEtiquette: [
    {
      title: "Table Chope Culture",
      description: "Locals reserve hawker tables using tissue packets. If you see a tissue pack on a seat, it is occupied!"
    }
  ],

  hiddenGems: [
    {
      name: "Tiong Bahru Neighborhood",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80",
      description: "Singapore's oldest housing estate transformed into a trendy hub of indie bookstores and cafes.",
      tip: "Visit Forty Hands cafe for specialty coffee and local pastries."
    }
  ],

  faq: [
    {
      question: "Is tap water safe to drink in Singapore?",
      answer: "Yes, tap water in Singapore passes strict WHO standards and is 100% safe to drink directly from the tap."
    }
  ]
};

export const amsterdamData: City = {
  slug: "amsterdam",
  name: "Amsterdam",
  country: "Netherlands",
  region: "Europe",
  tagline: "The capital of picturesque canals, golden age art, and cycle freedom",
  heroImage: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Amsterdam like a local. Guide to canal cruises, Jordaan cafes, bike rentals, and museum tips.",
  seoTitle: "Amsterdam Travel Guide: Canals, Culture, & Bicycles | LocTravel",
  seoDescription: "An expert content guide to Amsterdam. Explore canal belts, Rijksmuseum, local street markets, bike rules, and safety advice.",
  lat: 52.3676,
  lon: 4.9041,
  currency: "Euro (€)",
  language: "Dutch (English widely spoken)",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Amsterdam, capital of the Netherlands, is known for its artistic heritage, elaborate canal system, and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk.",
    "Bicycles are key to the city’s character, with dedicated bike paths stretching throughout. Explore quiet canalside cafes in the Jordaan, sample fresh stroopwafels at Albert Cuyp Market, and experience Dutch 'gezelligheid' (coziness)."
  ],

  bestTimeToVisit: {
    season: "April to May & September to October",
    description: "Spring offers millions of blooming tulips at nearby Keukenhof, while autumn brings fewer crowds and golden foliage along the canals.",
    weatherDetails: "Temperatures range from 10°C to 18°C. Pack a rain jacket for light coastal drizzles."
  },

  attractions: [
    {
      name: "Rijksmuseum",
      image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
      description: "National museum dedicated to Dutch arts and history, featuring Rembrandt's masterpiece The Night Watch.",
      duration: "3 hours",
      cost: "€22.50",
      type: "Art & History"
    },
    {
      name: "Anne Frank House",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=600&q=80",
      description: "Biographical museum in the secret annex where Anne Frank wrote her diary during WWII.",
      duration: "1.5 hours",
      cost: "€16 (Book weeks ahead)",
      type: "History"
    }
  ],

  thingsToDo: [
    {
      title: "Rent a Bicycle & Ride Vondelpark",
      description: "Cycle like a true local through Amsterdam's central green oasis.",
      duration: "2 hours",
      cost: "€10 per day bike rental"
    }
  ],

  food: [
    {
      name: "Fresh Hot Stroopwafel",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
      description: "Two thin waffle layers glued together with warm gooey caramel syrup.",
      recommendation: "Get it freshly baked at Rudi's Stroopwafels in Albert Cuyp Market."
    }
  ],

  whereToStay: [
    {
      area: "Jordaan District",
      description: "Charming, historic, and quiet canalside quarter filled with art studios and cafes.",
      priceRange: "$$ - $$$ (Boutique)",
      recommendation: "Ideal for scenic walks and authentic vibes."
    }
  ],

  bestRestaurants: [
    {
      name: "Moeders",
      cuisine: "Traditional Dutch Comfort Food",
      description: "Homestyle Dutch dining serving stamppot and meat stews in a cozy, photo-filled bistro.",
      location: "Rozengracht",
      priceRange: "€20 - €35 per person"
    }
  ],

  transportation: [
    {
      type: "GVB Tram & Metro",
      description: "Fast, reliable public transport network. Buy a 24h to 72h GVB pass for unlimited travel.",
      cost: "€9 per 24 hours"
    }
  ],

  budgetTips: [
    {
      title: "Get an I amsterdam City Card",
      description: "Includes free access to major museums, public transport, and a canal cruise."
    }
  ],

  safetyTips: [
    {
      title: "Watch Out for Bike Lanes",
      description: "Never walk in red asphalt bike paths! Cyclists ride fast and have the right of way."
    }
  ],

  localEtiquette: [
    {
      title: "Card Only City",
      description: "Many cafes, trams, and shops in Amsterdam are completely cashless. Keep a debit or credit card handy."
    }
  ],

  hiddenGems: [
    {
      name: "Begijnhof",
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
      description: "A peaceful, hidden 14th-century courtyard in the heart of the city surrounded by historic houses.",
      tip: "Maintain silence as it is still a quiet residential sanctuary."
    }
  ],

  faq: [
    {
      question: "Do I need to book Anne Frank House tickets early?",
      answer: "Yes! 100% of tickets are sold online only, released exactly 6 weeks in advance."
    }
  ]
};

export const lisbonData: City = {
  slug: "lisbon",
  name: "Lisbon",
  country: "Portugal",
  region: "Europe",
  tagline: "The sunny city of seven hills, pastel tiles, and soulful Fado music",
  heroImage: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=1200&q=80",
  description: "Experience Lisbon like a local. Guide to yellow trams, Pastéis de Belém, Alfama miradouros, and budget tips.",
  seoTitle: "Lisbon Travel Guide: Hills, Trams, & Coastal Soul | LocTravel",
  seoDescription: "An expert travel guide to Lisbon. Discover historic Alfama, pastel de nata spots, tram 28 hacks, budget advice, and safety.",
  lat: 38.7223,
  lon: -9.1393,
  currency: "Euro (€)",
  language: "Portuguese",
  timezone: "WET (UTC+0 / UTC+1 in summer)",

  overview: [
    "Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the pastel-colored buildings of the Old City, Tagus Estuary and Ponte 25 de Abril suspension bridge.",
    "Listen to melancholic Fado echo through the cobblestone alleyways of Alfama, sip bica espresso at sidewalk cafes, and feast on warm pastel de nata tarts right out of the oven."
  ],

  bestTimeToVisit: {
    season: "Spring (March to May) & Autumn (September to October)",
    description: "Warm, sunny days without extreme summer heat, ideal for walking up and down Lisbon's famous steep hills.",
    weatherDetails: "Temperatures range from 15°C to 25°C with clear blue Atlantic skies."
  },

  attractions: [
    {
      name: "Belém Tower (Torre de Belém)",
      image: "https://images.unsplash.com/photo-1548707309-dcebeab9ec98?auto=format&fit=crop&w=600&q=80",
      description: "16th-century Manueline fortification standing on the banks of the Tagus River.",
      duration: "1 hour",
      cost: "€9",
      type: "Architecture & History"
    }
  ],

  thingsToDo: [
    {
      title: "Catch Sunset at Miradouro da Senhora do Monte",
      description: "Enjoy the highest viewpoint in Lisbon offering panoramic city and castle views.",
      duration: "1 hour",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Pastel de Nata",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
      description: "Crispy puff pastry tart filled with creamy egg custard and dusted with cinnamon.",
      recommendation: "Visit Pastéis de Belém where the original 1837 secret recipe is still baked."
    }
  ],

  whereToStay: [
    {
      area: "Baixa & Chiado",
      description: "Central, flat district with magnificent plazas and easy access to shopping and Metro.",
      priceRange: "$$ - $$$ (Mid-Range & Boutique)",
      recommendation: "Best for first-timers who prefer flat walking ground."
    }
  ],

  bestRestaurants: [
    {
      name: "Time Out Market (Mercado da Ribeira)",
      cuisine: "Portuguese Food Hall",
      description: "Famous food market hall curated by local editors featuring top Portuguese chefs under one roof.",
      location: "Cais do Sodré",
      priceRange: "€10 - €25 per person"
    }
  ],

  transportation: [
    {
      type: "Viva Viagem Card (Metro, Bus & Tram)",
      description: "Rechargeable travel card. Use Zapping mode to save over 50% per ride.",
      cost: "€1.80 per trip with Zapping"
    }
  ],

  budgetTips: [
    {
      title: "Use Zapping on Viva Viagem",
      description: "Pre-load cash onto your Viva Viagem transit card for huge discounts on trams, metro, and suburban trains to Sintra."
    }
  ],

  safetyTips: [
    {
      title: "Watch Tram 28 Pickpockets",
      description: "The famous historic Tram 28 gets packed with tourists and pickpockets. Secure your wallet and camera."
    }
  ],

  localEtiquette: [
    {
      title: "Couvert Is Not Free",
      description: "Bread, olives, and cheese brought to your table before a meal are charged if eaten. Polite refusal is totally fine."
    }
  ],

  hiddenGems: [
    {
      name: "LX Factory",
      image: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=600&q=80",
      description: "A repurposed 19th-century industrial complex turned into a vibrant hub of street art, design shops, and rooftop bars.",
      tip: "Visit Ler Devagar, one of the world's most unique bookstores built inside a former printing press."
    }
  ],

  faq: [
    {
      question: "Are Lisbon's hills difficult to walk?",
      answer: "Yes, Lisbon is very steep! Wear comfortable sneakers with good grip for the polished limestone cobblestones."
    }
  ]
};

export const pragueData: City = {
  slug: "prague",
  name: "Prague",
  country: "Czech Republic",
  region: "Europe",
  tagline: "The City of a Hundred Spires, fairytale castles, and historic cobblestones",
  heroImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Prague like a local. Guide to Charles Bridge, Prague Castle, Bohemian beer culture, and budget hacks.",
  seoTitle: "Prague Travel Guide: Fairytale Spires & Bohemian Culture | LocTravel",
  seoDescription: "An expert content guide to Prague. Explore Old Town Square, Charles Bridge, local Czech breweries, budget tips, and safety.",
  lat: 50.0755,
  lon: 14.4378,
  currency: "Czech Koruna (CZK / Kč)",
  language: "Czech (English widely spoken in tourism)",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Prague, capital city of the Czech Republic, is bisected by the Vltava River. Nicknamed 'the City of a Hundred Spires,' it's known for its Old Town Square, the heart of its historic core, with colorful baroque buildings, Gothic churches, and the medieval Astronomical Clock.",
    "Pedestrian Charles Bridge is lined with statues of Catholic saints. Walk up to 9th-century Prague Castle for sweeping red-roofed vistas, and discover world-famous Czech Pilsner served fresh in underground cellar taverns."
  ],

  bestTimeToVisit: {
    season: "May to June & September to October",
    description: "Pleasant weather with mild temperatures and blooming gardens, avoiding peak July summer crowds.",
    weatherDetails: "Temperatures range from 12°C to 22°C."
  },

  attractions: [
    {
      name: "Charles Bridge (Karlův Most)",
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=600&q=80",
      description: "Historic 14th-century stone arc bridge connecting Old Town with Lesser Town.",
      duration: "1 hour",
      cost: "Free",
      type: "Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Watch the Astronomical Clock Chime",
      description: "Gather in Old Town Square to watch the 600-year-old clock perform its hourly show.",
      duration: "30 mins",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Svíčková (Beef in Cream Sauce)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Tender beef sirloin served with a creamy root vegetable sauce, bread dumplings, and cranberries.",
      recommendation: "Enjoy it at Lokal Dlouha for fresh Czech classic cooking."
    }
  ],

  whereToStay: [
    {
      area: "Old Town (Staré Město)",
      description: "Historic center within walking distance of major squares and historic landmarks.",
      priceRange: "$$ - $$$ (Mid-Range & Luxury)",
      recommendation: "Best for first-time visitors."
    }
  ],

  bestRestaurants: [
    {
      name: "Lokál Dlouhááá",
      cuisine: "Traditional Czech & Fresh Pilsner",
      description: "Lively hall serving tank-fresh Pilsner Urquell alongside authentic Czech classics.",
      location: "Old Town",
      priceRange: "150 Kč - 350 Kč per dish"
    }
  ],

  transportation: [
    {
      type: "Prague Metro & Trams",
      description: "Comprehensive public transit system. Remember to validate paper tickets before boarding!",
      cost: "30 Kč (30 mins) / 40 Kč (90 mins)"
    }
  ],

  budgetTips: [
    {
      title: "Avoid Currency Exchange Scams",
      description: "Never exchange money on the street or at kiosks offering '0% commission'. Use official bank ATMs."
    }
  ],

  safetyTips: [
    {
      title: "Validate Transit Tickets",
      description: "Plainclothes inspectors regularly check tickets on trams and metro. Unvalidated tickets incur steep instant fines."
    }
  ],

  localEtiquette: [
    {
      title: "Beer Table Seating",
      description: "In busy traditional beer halls, it is common to share large wooden tables with strangers."
    }
  ],

  hiddenGems: [
    {
      name: "Vyšehrad Fortress",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      description: "A quiet 10th-century hilltop fort offering peaceful park walks and incredible Vltava river panoramas.",
      tip: "Visit the Vyšehrad Cemetery, final resting place of famous Czech composers Dvořák and Smetana."
    }
  ],

  faq: [
    {
      question: "Is Prague expensive?",
      answer: "Prague remains one of Western/Central Europe's most affordable capitals for food, beer, and public transport."
    }
  ]
};

export const viennaData: City = {
  slug: "vienna",
  name: "Vienna",
  country: "Austria",
  region: "Europe",
  tagline: "The imperial capital of classical music, grand palaces, and coffeehouse culture",
  heroImage: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Vienna like a local. Guide to Schönbrunn Palace, Sachertorte cafes, opera tickets, and transit tips.",
  seoTitle: "Vienna Travel Guide: Palaces, Opera, & Coffeehouses | LocTravel",
  seoDescription: "An expert content guide to Vienna. Explore Schönbrunn Palace, traditional Viennese coffeehouses, classical concerts, and safety.",
  lat: 48.2082,
  lon: 16.3738,
  currency: "Euro (€)",
  language: "German (English widely spoken)",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence.",
    "Experience the iconic Viennese coffeehouse culture, where guests sit for hours over a Melange coffee and Sachertorte chocolate cake, surrounded by opulent 19th-century decor."
  ],

  bestTimeToVisit: {
    season: "April to May & November to December (Christmas Markets)",
    description: "Spring brings mild weather and garden blooms, while December features world-renowned festive Christmas markets.",
    weatherDetails: "Temperatures range from 10°C to 20°C in spring and around 0°C to 5°C in December."
  },

  attractions: [
    {
      name: "Schönbrunn Palace",
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80",
      description: "1,441-room Baroque summer residence of the Habsburg monarchs with sprawling manicured gardens.",
      duration: "3 hours",
      cost: "€24",
      type: "History & Architecture"
    }
  ],

  thingsToDo: [
    {
      title: "Relax in a Traditional Viennese Coffeehouse",
      description: "Spend a slow afternoon reading at Cafe Central or Cafe Sperl.",
      duration: "1.5 hours",
      cost: "€6 - €12"
    }
  ],

  food: [
    {
      name: "Wiener Schnitzel",
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=600&q=80",
      description: "Thin, tender veal cutlet breaded and pan-fried to golden perfection, served with Austrian potato salad.",
      recommendation: "Dine at Figlmüller, famous home of the giant Schnitzel since 1905."
    }
  ],

  whereToStay: [
    {
      area: "Innere Stadt (1st District)",
      description: "The historical city center enclosed by the Ringstraße, steps from Saint Stephen's Cathedral.",
      priceRange: "$$$ (Luxury)",
      recommendation: "Best for high-end travel and central walking."
    }
  ],

  bestRestaurants: [
    {
      name: "Plachutta Wollzeile",
      cuisine: "Traditional Austrian Imperial Cuisine",
      description: "World famous for Tafelspitz (boiled beef sirloin served in copper pots with horseradish).",
      location: "1st District",
      priceRange: "€30 - €50 per person"
    }
  ],

  transportation: [
    {
      type: "Wiener Linien U-Bahn & Trams",
      description: "Punctual, clean public transit. A 24h or 48h pass offers unlimited travel across buses, trams, and U-Bahn.",
      cost: "€8 per 24 hours"
    }
  ],

  budgetTips: [
    {
      title: "Standing Tickets at Vienna State Opera",
      description: "Get standing room (Stehplatz) tickets for world-class opera performances for just €10 - €15 on the day of the show."
    }
  ],

  safetyTips: [
    {
      title: "Quiet & Safe City",
      description: "Vienna consistently ranks as one of the safest cities in the world. Standard common sense applies."
    }
  ],

  localEtiquette: [
    {
      title: "Sonntagsruhe (Sunday Rest)",
      description: "Most retail shops, supermarkets, and pharmacies are strictly closed on Sundays. Plan groceries ahead!"
    }
  ],

  hiddenGems: [
    {
      name: "Central Cemetery (Zentralfriedhof)",
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80",
      description: "One of Europe's largest cemeteries, surrounded by parkland and holding the graves of Beethoven, Schubert, and Strauss.",
      tip: "Take Tram 71 directly from the city center to the main entrance."
    }
  ],

  faq: [
    {
      question: "Are museums open on Mondays in Vienna?",
      answer: "Many major museums are open daily, but check individual schedules as smaller galleries close on Mondays."
    }
  ]
};
