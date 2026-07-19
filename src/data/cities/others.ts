import { City } from "../../types/travel";

export const marrakechData: City = {
  slug: "marrakech",
  name: "Marrakech",
  country: "Morocco",
  region: "Africa",
  tagline: "The Red City of sensory overload, palaces, and vibrant souks",
  heroImage: "https://images.unsplash.com/photo-1597212618440-8062a50406b9?auto=format&fit=crop&w=1200&q=80",
  description: "Experience Marrakech like a local. Tips on navigating Jemaa el-Fnaa, visiting historic palaces, haggling in souks, and staying in riads.",
  seoTitle: "Marrakech Travel Guide: Insider Guide to the Red City | LocTravel",
  seoDescription: "Explore Marrakech with our local travel guide. Get tips on souks, Moroccan cuisine, budget stays, safety, and cultural etiquette.",
  lat: 31.6295,
  lon: -7.9811,
  overview: [
    "Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces, and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks (marketplaces) sell traditional textiles, pottery, and jewelry.",
    "To see the authentic side of Marrakech, escape the heavy tourist hubs. Spend time sipping mint tea on a terrace overlooking the medina at dusk, stay in a family-run riad, and explore the ancient Mellah (Jewish Quarter) where history breathes through every wall."
  ],
  bestTimeToVisit: {
    season: "Spring (March to May) & Autumn (September to November)",
    description: "The weather is pleasantly warm, avoiding the extreme heat of the summer months.",
    weatherDetails: "Daytime temperatures hover around 20°C to 28°C. Evenings can be cool, so packing a light jacket is advised."
  },
  attractions: [
    {
      name: "Jemaa el-Fnaa",
      image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      description: "The main square and marketplace in Marrakech's medina, filled with snake charmers, street food stalls, and musicians.",
      duration: "2-3 hours",
      cost: "Free (Tipping expected for performances)",
      type: "Cultural Hub"
    },
    {
      name: "Bahia Palace",
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80",
      description: "A 19th-century palace showcasing stunning Moroccan design, complex tiles (zellij), and peaceful courtyards.",
      duration: "1.5 hours",
      cost: "70 MAD (approx. €7)",
      type: "History & Architecture"
    },
    {
      name: "Jardin Majorelle",
      image: "https://images.unsplash.com/photo-1596120233075-812999987a67?auto=format&fit=crop&w=600&q=80",
      description: "A beautiful botanical garden created by French artist Jacques Majorelle and later restored by Yves Saint Laurent.",
      duration: "1.5 hours",
      cost: "150 MAD (approx. €14)",
      type: "Nature & Design"
    }
  ],
  food: [
    {
      name: "Tagine",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
      description: "Slow-cooked savory stew made with meat, poultry, or fish, plus vegetables, fruit, and spices.",
      recommendation: "Try chicken tagine with preserved lemons and olives at Cafe Clock."
    },
    {
      name: "Couscous",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      description: "Steamed semolina served with a rich vegetable stew and tender meat, traditionally eaten on Fridays.",
      recommendation: "Enjoy it at Al Fassia, a restaurant run entirely by women serving top-tier Moroccan food."
    }
  ],
  hiddenGems: [
    {
      name: "Le Jardin Secret",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
      description: "An elegant, restored 19th-century palace complex in the medina with traditional Islamic gardens.",
      tip: "Climb the tower for a beautiful panorama over the medina rooftops."
    }
  ],
  budgetTips: [
    {
      title: "Haggle in the Souks",
      description: "Never accept the first price in the souks. Counter with 30-50% of their starting price and negotiate from there."
    },
    {
      title: "Drink Tap Water with Caution",
      description: "Stick to bottled water to avoid upset stomachs. Ensure the bottle seal is intact."
    }
  ],
  transportation: [
    {
      type: "Petit Taxi",
      description: "Small cars for transit within city limits. Ensure they turn on the meter ('compteur') before starting.",
      cost: "10 - 30 MAD per ride"
    },
    {
      type: "Walking",
      description: "The medina is entirely pedestrian. Walking is the only way to get through the narrow, maze-like alleyways.",
      cost: "Free"
    }
  ],
  safetyTips: [
    {
      title: "Beware of Fake Guides",
      description: "People will offer directions or say a road is closed. Polite but firm refusal ('Non, merci') is the best way to handle them."
    },
    {
      title: "Dress Modestly",
      description: "Morocco is a Muslim country. Cover shoulders and knees to show respect and avoid unwanted attention."
    }
  ],
  faq: [
    {
      question: "Is alcohol widely available in Marrakech?",
      answer: "Only in licensed hotels, riads, bars, and supermarkets. It is not sold in regular cafes and drinking in public is strictly forbidden."
    }
  ]
};

export const dubaiData: City = {
  slug: "dubai",
  name: "Dubai",
  country: "United Arab Emirates",
  region: "Middle East",
  tagline: "The golden oasis of modern architecture, luxury, and desert dunes",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Dubai like a local. Guide to historic Al Fahidi, desert safaris, modern souks, high-tech subways, and budget tips.",
  seoTitle: "Dubai Travel Guide: Ultra-Modern Luxury & Desert Heritage | LocTravel",
  seoDescription: "An expert, content-first guide to Dubai. Explore the Burj Khalifa, traditional souks, food hotspots, local transportation, and safety tips.",
  lat: 25.2048,
  lon: 55.2708,
  overview: [
    "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture, and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with music-choreographed water shows.",
    "Yet, beneath the glittering skyscrapers lies a rich cultural heritage. Cross the Creek on a traditional abra boat, bargain for spices in Deira, and taste authentic Emirati cuisine in historical courtyards to discover the true soul of Dubai."
  ],
  bestTimeToVisit: {
    season: "Winter (November to March)",
    description: "The weather is warm and dry, ideal for outdoor activities, beach days, and exploring the city comfortably.",
    weatherDetails: "Average temperatures range from 17°C to 26°C. Avoid summer (June to August) when heat can exceed 45°C."
  },
  attractions: [
    {
      name: "Burj Khalifa",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      description: "The tallest building in the world, offering unparalleled views from its high observation decks.",
      duration: "2 hours",
      cost: "AED 179 - AED 553",
      type: "Landmark & Architecture"
    },
    {
      name: "Dubai Creek & Souks",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=80",
      description: "The historic saltwater creek where you can explore the traditional Gold and Spice Souks on foot.",
      duration: "3 hours",
      cost: "Free (Abra crossing is AED 1)",
      type: "History & Shopping"
    }
  ],
  food: [
    {
      name: "Shawarma",
      image: "https://images.unsplash.com/photo-1561651823-34fed022540e?auto=format&fit=crop&w=600&q=80",
      description: "Spiced meat shaved from a vertical spit, wrapped in flatbread with garlic sauce, fries, and pickles.",
      recommendation: "Try Al Mallah on Second of December Street for legendary, cheap shawarma."
    }
  ],
  hiddenGems: [
    {
      name: "Al Qudra Lakes",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5edd0cd9?auto=format&fit=crop&w=600&q=80",
      description: "A series of man-made lakes in the middle of the Saih Al Salam desert, home to over 170 species of birds.",
      tip: "Rent a bike and ride the Al Qudra cycling track at sunrise for beautiful views of desert gazelles."
    }
  ],
  budgetTips: [
    {
      title: "Use the Dubai Metro",
      description: "The driverless metro system is clean, extremely efficient, and far cheaper than taking taxis across the long city."
    }
  ],
  transportation: [
    {
      type: "Dubai Metro",
      description: "High-speed rail connecting the airport, downtown, and main coastal areas.",
      cost: "AED 3 - AED 8.50 per ride"
    }
  ],
  safetyTips: [
    {
      title: "Respect Local Laws",
      description: "Dubai has strict rules. Public displays of affection (PDA) and drinking outside licensed venues are prohibited."
    }
  ],
  faq: [
    {
      question: "Can I wear swimwear in Dubai?",
      answer: "Yes, swimwear is perfectly fine at public beaches and pools. However, cover up with regular clothing when leaving the beach area."
    }
  ]
};

export const newyorkData: City = {
  slug: "new-york",
  name: "New York",
  country: "United States",
  region: "North America",
  tagline: "The cultural capital of skyscrapers, museums, and endless energy",
  heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate New York City like a local. Expert guide on subways, Broadway, street food, parks, and avoiding tourist traps.",
  seoTitle: "New York City Travel Guide: The Ultimate Local Guide | LocTravel",
  seoDescription: "An expert, content-rich travel guide to New York City. Learn about best eats, Central Park, dynamic boroughs, subways, and budget tips.",
  lat: 40.7128,
  lon: -74.0060,
  overview: [
    "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial, and cultural centers. Its iconic sites include skyscrapers like the Empire State Building and sprawling Central Park.",
    "To see the authentic NYC, cross the East River. Explore the diverse food joints in Queens, walk the brownstone-lined streets of Brooklyn, and catch a local jazz set in Harlem. This guide brings you the local's perspective on the Big Apple."
  ],
  bestTimeToVisit: {
    season: "Autumn (September to November) & Spring (April to June)",
    description: "These seasons offer crisp, comfortable weather with gorgeous foliage or blooming flowers, avoiding summer humidity and freezing winter winds.",
    weatherDetails: "Temperatures range from 12°C to 22°C. Perfect for walking the long city blocks."
  },
  attractions: [
    {
      name: "Central Park",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      description: "An 843-acre green oasis in Manhattan featuring lakes, woodlands, walkways, and historic architecture.",
      duration: "Half a day",
      cost: "Free",
      type: "Park & Recreation"
    },
    {
      name: "The Metropolitan Museum of Art (The Met)",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      description: "One of the world's greatest art museums, displaying over 5,000 years of art from around the globe.",
      duration: "3-4 hours",
      cost: "$30 for non-NY residents",
      type: "Museum"
    }
  ],
  food: [
    {
      name: "New York Style Pizza Slice",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      description: "Large, thin-crust pizza slices that are folded in half to eat on the go.",
      recommendation: "Get a plain cheese slice at Joe's Pizza on Carmine Street."
    }
  ],
  hiddenGems: [
    {
      name: "The Elevated Acre",
      image: "https://images.unsplash.com/photo-1522083165195-3427ec029794?auto=format&fit=crop&w=600&q=80",
      description: "A hidden, landscaped park floating above the busy Financial District streets, offering views of the East River.",
      tip: "Enter via the escalator at 55 Water Street for a quiet spot to read or eat lunch."
    }
  ],
  budgetTips: [
    {
      title: "Take the Staten Island Ferry",
      description: "Skip expensive Statue of Liberty boat tours. The Staten Island Ferry is 100% free and passes right by the statue for great photos."
    }
  ],
  transportation: [
    {
      type: "NYC Subway",
      description: "Runs 24/7 and reaches almost everywhere. Pay instantly using OMNY tap-to-pay with your phone or contactless card.",
      cost: "$2.90 per ride"
    }
  ],
  safetyTips: [
    {
      title: "Ignore Street Touts",
      description: "Avoid people selling CD mixes, comedy show tickets, or costumed characters in Times Square who demand high tips for pictures."
    }
  ],
  faq: [
    {
      question: "Is it easy to navigate Manhattan?",
      answer: "Very. Manhattan is laid out on a grid system. Avenues run north-south (numbers increase east to west), and streets run east-west (numbers increase northwards)."
    }
  ]
};

export const barcelonaData: City = {
  slug: "barcelona",
  name: "Barcelona",
  country: "Spain",
  region: "Europe",
  tagline: "The sun-drenched capital of Catalan culture, beaches, and Gaudí",
  heroImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Barcelona like a local. Guide to Gaudí monuments, Gothic Quarter taverns, sandy beaches, metro guide, and pickpocket safety.",
  seoTitle: "Barcelona Travel Guide: Tapas, Gaudí, & Catalan Soul | LocTravel",
  seoDescription: "An expert local guide to Barcelona. Get tips on Sagrada Família, local tapas, Gothic Quarter gems, public transit, and budget hacks.",
  lat: 41.3851,
  lon: 2.1734,
  overview: [
    "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
    "To see the authentic Barcelona, avoid the crowded tourist strip of La Rambla. Wander into the narrow streets of El Born, sit in quiet squares in Gràcia, and eat tapas at neighborhood bodegas where Catalans gather."
  ],
  bestTimeToVisit: {
    season: "May to June & September to October",
    description: "These months offer warm, sunny weather that is comfortable for sightseeing and beach trips without the intense summer crowds.",
    weatherDetails: "Temperatures range from 18°C to 26°C with minimal rainfall."
  },
  attractions: [
    {
      name: "La Sagrada Família",
      image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
      description: "Antoni Gaudí's unfinished masterpiece basilica, featuring forest-like columns and stained glass.",
      duration: "2 hours",
      cost: "€26 - €40",
      type: "Art & Architecture"
    }
  ],
  food: [
    {
      name: "Tapas & Pintxos",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      description: "Small plates of local delicacies, from patatas bravas to fresh seafood on bread.",
      recommendation: "Visit El Xampanyet in El Born for fresh tapas and local sparkling cava."
    }
  ],
  hiddenGems: [
    {
      name: "Bunkers del Carmel",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
      description: "Former Spanish Civil War bunkers offering the best 360-degree panoramic view of the entire city.",
      tip: "Go at sunset with some snacks; access is free, but please respect local neighborhood quiet hours."
    }
  ],
  budgetTips: [
    {
      title: "Buy a T-Casual Ticket",
      description: "Avoid single tickets. The T-Casual card gives you 10 rides on the metro, buses, and trams for a heavily discounted rate."
    }
  ],
  transportation: [
    {
      type: "Barcelona Metro",
      description: "Air-conditioned, fast, and covers all major attractions including the airport.",
      cost: "€2.40 per ticket (T-Casual lowers cost)"
    }
  ],
  safetyTips: [
    {
      title: "Stay Alert for Pickpockets",
      description: "Barcelona is infamous for petty theft. Keep your bags closed, don't leave phones on restaurant tables, and watch out on Metro Line 3."
    }
  ],
  faq: [
    {
      question: "Is Catalan widely spoken?",
      answer: "Yes, Catalan is the official language alongside Spanish. Locals appreciate when you learn simple words like 'Bon dia' (Good morning) and 'Gràcies' (Thank you)."
    }
  ]
};

export const romeData: City = {
  slug: "rome",
  name: "Rome",
  country: "Italy",
  region: "Europe",
  tagline: "The Eternal City of empires, baroque squares, and heavenly pasta",
  heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Rome like a local. Guide to the Colosseum, Vatican, Roman street food, gelato, and avoiding tourist restaurant traps.",
  seoTitle: "Rome Travel Guide: Navigating the Eternal City | LocTravel",
  seoDescription: "An expert guide to Rome. Discover the Colosseum, historic piazzas, pasta hotspots, budget tips, safety advice, and local history.",
  lat: 41.9028,
  lon: 12.4964,
  overview: [
    "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture, and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire.",
    "But Rome is also a city of quiet moments. Sit on a stone step in Trastevere as street musicians play, drink cold water from a public nasone fountain, and wander through Testaccio market to experience the Rome that locals love."
  ],
  bestTimeToVisit: {
    season: "April to May & October to November",
    description: "Mild temperatures and thinner crowds make these months the most pleasant for walking around outdoor ruins.",
    weatherDetails: "Temperatures range from 14°C to 22°C. Perfect for walking along ancient stone lanes."
  },
  attractions: [
    {
      name: "The Colosseum & Roman Forum",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      description: "The giant amphitheater of gladiators, situated adjacent to the ruins of the ancient Roman empire's center.",
      duration: "3 hours",
      cost: "€18 (Combined ticket)",
      type: "History & Ruins"
    }
  ],
  food: [
    {
      name: "Pasta Carbonara",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
      description: "Classic Roman pasta made with egg yolks, pecorino romano, guanciale (pork cheek), and lots of black pepper.",
      recommendation: "Try it at Da Enzo al 29 in Trastevere for a rich, traditional version."
    }
  ],
  hiddenGems: [
    {
      name: "Aventine Keyhole",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
      description: "A small brass keyhole in a gate on the Aventine Hill that perfectly frames the dome of St. Peter's Basilica through a hedge tunnel.",
      tip: "Go early in the morning to avoid lines, and walk down to the nearby Orange Garden afterward."
    }
  ],
  budgetTips: [
    {
      title: "Use Public Nasoni Fountains",
      description: "Never buy bottled water. Rome has over 2,500 cold, fresh, free-flowing public drinking fountains ('nasoni'). The water is clean and safe."
    }
  ],
  transportation: [
    {
      type: "Bus & Tram",
      description: "Rome's bus network is vast but can run late. Buy tickets at tabacchi (tobacco shops) before boarding.",
      cost: "€1.50 per 100-minute ticket"
    }
  ],
  safetyTips: [
    {
      title: "Watch Out for Taxi Scams",
      description: "Only use official white taxis from designated ranks. Ensure they start the meter and do not charge flat tourist rates."
    }
  ],
  faq: [
    {
      question: "Is there a dress code for churches in Rome?",
      answer: "Yes. Major churches (especially St. Peter's Basilica) strictly enforce dress codes: shoulders and knees must be covered for both men and women."
    }
  ]
};

export const londonData: City = {
  slug: "london",
  name: "London",
  country: "United Kingdom",
  region: "Europe",
  tagline: "The historic city of royal palaces, global theaters, and leafy parks",
  heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate London like a local. Guide to free museums, the Underground, West End shows, historic pubs, and budget tips.",
  seoTitle: "London Travel Guide: Capital of History, Pubs, & Parks | LocTravel",
  seoDescription: "An expert local guide to London. Discover top attractions, royal sights, free national museums, public transit hacks, and safety advice.",
  lat: 51.5074,
  lon: -0.1278,
  overview: [
    "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its center stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower, and Westminster Abbey.",
    "To see the real London, step outside Zone 1. Grab food at Borough Market, walk the peaceful canals of Little Venice, and sit by a fire in a centuries-old pub in Hampstead to experience the city like a Londoner."
  ],
  bestTimeToVisit: {
    season: "Late Spring (May to June) & Early Autumn (September to October)",
    description: "These months offer comfortable temperatures, longer daylight hours, and the best chance of dry days to walk the parks.",
    weatherDetails: "Temperatures range from 12°C to 20°C. Keep an umbrella handy, as rain is always possible."
  },
  attractions: [
    {
      name: "The British Museum",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
      description: "A museum dedicated to human history, art, and culture, housing treasures like the Rosetta Stone.",
      duration: "3 hours",
      cost: "Free (Donation suggested)",
      type: "Museum"
    }
  ],
  food: [
    {
      name: "Fish and Chips",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
      description: "Crispy battered cod or haddock served with chunky triple-cooked chips, mushy peas, and tartar sauce.",
      recommendation: "Try Poppies in Spitalfields or Camden for excellent, retro-style fish and chips."
    }
  ],
  hiddenGems: [
    {
      name: "Leadenhall Market",
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=600&q=80",
      description: "A stunning covered Victorian market with ornate painted roofs, featured as Diagon Alley in the Harry Potter films.",
      tip: "Visit on a weekday evening when the city workers pack the alleyways for drinks."
    }
  ],
  budgetTips: [
    {
      title: "Take Advantage of Free Museums",
      description: "Almost all major museums (British Museum, Natural History, Science Museum, Tate Modern) are 100% free to enter. Book free tickets online."
    }
  ],
  transportation: [
    {
      type: "London Underground (The Tube)",
      description: "Highly efficient subway network. Pay instantly using contactless bank cards or mobile devices on the yellow reader.",
      cost: "£2.80 - £6.00 depending on zones"
    }
  ],
  safetyTips: [
    {
      title: "Watch Out for Phone Snatchers",
      description: "Thieves on electric bikes and scooters frequently target pedestrians holding phones near busy stations. Keep your phone secure."
    }
  ],
  faq: [
    {
      question: "Do I need an Oyster Card?",
      answer: "No. You can tap in and out at stations using any contactless bank card or mobile payment (Apple/Google Pay) for the exact same rates."
    }
  ]
};

export const istanbulData: City = {
  slug: "istanbul",
  name: "Istanbul",
  country: "Turkey",
  region: "Europe & Asia",
  tagline: "The historic bridge between East and West, Minarets, and the Bosphorus",
  heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Istanbul like a local. Guide to Hagia Sophia, dynamic ferries, local kebabs, Grand Bazaar haggling, and safety tips.",
  seoTitle: "Istanbul Travel Guide: Where Continents Meet | LocTravel",
  seoDescription: "An expert local guide to Istanbul. Get tips on mosques, Bosphorus ferries, Turkish coffee, budget tricks, safety, and cultural manners.",
  lat: 41.0082,
  lon: 28.9784,
  overview: [
    "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In Sultanahmet, the open-air Roman-era Hippodrome was for centuries the site of chariot races.",
    "But to see the pulse of modern Istanbul, leave Sultanahmet. Cross the Galata Bridge, explore the hipster cafes of Kadikoy on the Asian side, and take a public ferry at sunset to see why this city has captivated travelers for thousands of years."
  ],
  bestTimeToVisit: {
    season: "Spring (April to May) & Autumn (September to October)",
    description: "The weather is temperate and comfortable for walking around monuments, avoiding the hot humid summer and cold winter rain.",
    weatherDetails: "Temperatures range from 15°C to 24°C. Tulip festivals paint the parks in April."
  },
  attractions: [
    {
      name: "Hagia Sophia (Ayasofya)",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
      description: "A monumental site of Byzantine architecture, originally built as a basilica in 537 AD and later converted to a mosque.",
      duration: "1.5 hours",
      cost: "€25 (Visitor entry fee)",
      type: "History & Religion"
    }
  ],
  food: [
    {
      name: "Doner Kebab",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80",
      description: "Seasoned meat turned slowly on a vertical rotisserie, shaved thin, and served with vegetables and sauce in warm bread.",
      recommendation: "Try it at Karadeniz Doner Asim Usta in Besiktas for the best local beef doner."
    }
  ],
  hiddenGems: [
    {
      name: "Kuzguncuk Neighborhood",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
      description: "A historic neighborhood on the Asian side known for colorful wooden houses, leafy plane trees, and a peaceful community vibe.",
      tip: "Take a ferry to Uskudar and walk along the coast to Kuzguncuk for a quiet cup of Turkish tea in a local cafe."
    }
  ],
  budgetTips: [
    {
      title: "Get an Istanbulkart",
      description: "Buy an Istanbulkart transit card and load cash. It offers cheap fares on all buses, metro lines, trams, and public Bosphorus ferries."
    }
  ],
  transportation: [
    {
      type: "Public Ferry (Vapur)",
      description: "The best way to travel between the European and Asian sides, offering beautiful views of the city skyline.",
      cost: "approx. 15 - 25 TRY per ride"
    }
  ],
  safetyTips: [
    {
      title: "Avoid Taxi Overcharging",
      description: "Always use BiTaksi or Uber apps to book rides to avoid common meter scams by street taxis, or use the metro."
    }
  ],
  faq: [
    {
      question: "Are cats really everywhere in Istanbul?",
      answer: "Yes, Istanbul is famous for its stray cats. They are well-loved, fed, and housed by the local community. Treat them with respect!"
    }
  ]
};

export const baliData: City = {
  slug: "bali",
  name: "Bali",
  country: "Indonesia",
  region: "Asia",
  tagline: "The Island of the Gods, emerald rice terraces, and volcanic beaches",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Bali like a local. Guide to Ubud, surf breaks in Uluwatu, ancient Hindu temples, local warungs, and scooter safety.",
  seoTitle: "Bali Travel Guide: Sacred Temples & Tropical Escapes | LocTravel",
  seoDescription: "An expert content guide to Bali. Explore Ubud terraces, beach sunsets, local food, scooter rentals, budget tips, and safety guidelines.",
  lat: -8.4095,
  lon: 115.1889,
  currency: "Indonesian Rupiah (IDR / Rp)",
  language: "Balinese, Indonesian, English",
  timezone: "WITA (UTC+8)",
  overview: [
    "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur, and Nusa Dua are popular resort towns.",
    "To see the authentic Bali, head away from the southern resort strips. Visit the misty mountain temples in Bedugul, learn about traditional subak irrigation in Jatiluwih, and eat at local warungs where fiery sambal is made fresh daily."
  ],
  bestTimeToVisit: {
    season: "Dry Season (April to October)",
    description: "Sunny days, cool breezes, and low humidity make these months perfect for exploring temples, surfing, and hiking mountains.",
    weatherDetails: "Temperatures range from 24°C to 30°C. Wet season (November to March) brings daily heavy monsoon downpours."
  },
  attractions: [
    {
      name: "Uluwatu Temple (Pura Luhur Uluwatu)",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      description: "A sea temple perched majestically on a 70-meter-high cliff overlooking the roaring Indian Ocean.",
      duration: "2 hours",
      cost: "50,000 IDR (approx. €3)",
      type: "Temple & Culture"
    }
  ],
  thingsToDo: [
    {
      title: "Walk Tegalalang Rice Terraces",
      description: "Stroll scenic green terraced hills featuring traditional Balinese Subak irrigation systems.",
      duration: "2 hours",
      cost: "50,000 IDR"
    },
    {
      title: "Watch Kecak Fire Dance at Sunset",
      description: "Experience dramatic traditional chant performance on the cliffside of Uluwatu Temple.",
      duration: "1 hour",
      cost: "150,000 IDR"
    }
  ],
  food: [
    {
      name: "Nasi Campur & Babi Guling",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      description: "Steamed rice with pork, chicken, spiced satay, peanuts, fried shallots, and spicy sambal.",
      recommendation: "Try Warung Makan Teges in Ubud or Warung Ibu Oka for Babi Guling."
    }
  ],
  whereToStay: [
    {
      area: "Ubud Arts Center",
      description: "Lush jungle, wellness retreats, rice paddy views, and artistic artisan markets.",
      priceRange: "$$ - $$$ (Retreats & Villas)",
      recommendation: "Best for culture, wellness, and scenic tranquility."
    },
    {
      area: "Canggu & Uluwatu",
      description: "Vibrant coastal surf hubs filled with trendy beach clubs, sunset bars, and cafes.",
      priceRange: "$$ - $$$ (Surf & Luxury)",
      recommendation: "Best for surfing, nightlife, and young travelers."
    }
  ],
  bestRestaurants: [
    {
      name: "Warung Local Canggu",
      cuisine: "Authentic Indonesian Buffet",
      description: "Popular local warung serving freshly prepared Nasi Campur dishes at budget prices.",
      location: "Canggu",
      priceRange: "30,000 - 70,000 IDR per person"
    }
  ],
  hiddenGems: [
    {
      name: "Sidemen Valley",
      image: "https://images.unsplash.com/photo-1537953773315-2213cdc4829c?auto=format&fit=crop&w=600&q=80",
      description: "A quiet, rural valley in East Bali surrounded by emerald rice fields and dominated by the peak of Mt. Agung.",
      tip: "Stay at a local homestay and walk through the villages; it feels like Ubud did 30 years ago."
    }
  ],
  budgetTips: [
    {
      title: "Eat at Local Warungs",
      description: "Skip Western-style cafes and eat at local warungs (family-run restaurants) where a filling meal of Nasi Goreng costs under €2."
    }
  ],
  transportation: [
    {
      type: "Scooter (Motorbike) & Gojek App",
      description: "Motorbikes navigate traffic fast. Use Gojek or Grab ride hailing apps for cheap motor taxi rides.",
      cost: "approx. 70,000 - 100,000 IDR per day rental"
    }
  ],
  safetyTips: [
    {
      title: "Practice Scooter Safety",
      description: "Always wear a helmet, do not drive in swimwear, and watch out for potholes and erratic traffic."
    }
  ],
  localEtiquette: [
    {
      title: "Temple Sarong Etiquette",
      description: "Always wear a waist sarong and sash when entering sacred Hindu temple grounds."
    }
  ],
  faq: [
    {
      question: "Is there a cash culture in Bali?",
      answer: "Yes. While larger hotels and restaurants in Canggu accept credit cards, cash (Indonesian Rupiah) is essential for local warungs, markets, and parking fees."
    }
  ]
};
