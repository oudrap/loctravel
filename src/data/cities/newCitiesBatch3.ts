import { City } from "../../types/travel";

export const milanData: City = {
  slug: "milan",
  name: "Milan",
  country: "Italy",
  region: "Europe",
  tagline: "The global fashion capital of Gothic cathedrals, aperitivo, and Italian design",
  heroImage: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Milan like a local. Guide to Duomo rooftop, Last Supper, Navigli aperitivo, metro, and fashion tips.",
  seoTitle: "Milan Travel Guide: Fashion, Duomo, & Aperitivo Culture | LocTravel",
  seoDescription: "An expert content guide to Milan. Explore Duomo di Milano, Galleria Vittorio Emanuele II, Navigli canals, and budget hacks.",
  lat: 45.4642,
  lon: 9.1900,
  currency: "Euro (€)",
  language: "Italian",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Milan, a metropolis in Italy’s northern Lombardy region, is a global capital of fashion and design. Home to the national stock exchange, it’s a financial hub known also for its high-end restaurants and shops.",
    "The Gothic Duomo di Milano cathedral and Santa Maria delle Grazie convent, housing Leonardo da Vinci’s mural 'The Last Supper,' testify to centuries of art and culture."
  ],

  bestTimeToVisit: {
    season: "April to May & September to October",
    description: "Spring brings pleasant temperatures and Milan Design Week, while autumn hosts Milan Fashion Week.",
    weatherDetails: "Temperatures range from 14°C to 24°C."
  },

  attractions: [
    {
      name: "Duomo di Milano & Rooftop Terraces",
      image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
      description: "Iconic Gothic cathedral with intricate marble spires. Walk the rooftop terraces for Alpine views.",
      duration: "2 hours",
      cost: "€15 - €25",
      type: "Architecture & Religion"
    }
  ],

  thingsToDo: [
    {
      title: "Evening Aperitivo along Navigli Canals",
      description: "Enjoy a Spritz or Negroni accompanied by a lavish complimentary food buffet.",
      duration: "2 hours",
      cost: "€10 - €15"
    }
  ],

  food: [
    {
      name: "Risotto alla Milanese & Ossobuco",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Golden saffron-infused creamy risotto served alongside braised veal shanks.",
      recommendation: "Dine at Trattoria Milanese in the historic center."
    }
  ],

  whereToStay: [
    {
      area: "Brera & Duomo",
      description: "Picturesque cobblestone streets, art galleries, high-end boutiques, and main sights.",
      priceRange: "$$$ (Luxury & Boutique)",
      recommendation: "Best for central luxury and atmosphere."
    }
  ],

  bestRestaurants: [
    {
      name: "Luini Panzerotti",
      cuisine: "Milanese Street Food Bakery",
      description: "Historic bakery famous for fried panzerotti dough stuffed with warm mozzarella and tomato.",
      location: "Near Duomo",
      priceRange: "€3 - €6 per panzerotto"
    }
  ],

  transportation: [
    {
      type: "ATM Metro & Tram",
      description: "Fast subway lines and classic yellow vintage trams. Tap contactless card directly at turnstiles.",
      cost: "€2.20 per ticket (90 mins)"
    }
  ],

  budgetTips: [
    {
      title: "Take Advantage of Aperitivo Hour",
      description: "Order a drink between 6 PM and 9 PM along Navigli to access generous food spreads for free."
    }
  ],

  safetyTips: [
    {
      title: "Watch Pickpockets on Metro M1 & M3",
      description: "Keep bags zipped on busy metro trains between Duomo and Milano Centrale."
    }
  ],

  localEtiquette: [
    {
      title: "No Cappuccino After 11 AM",
      description: "Italians drink espresso (caffè) after morning hours. Ordering a milky cappuccino after lunch is considered unusual!"
    }
  ],

  hiddenGems: [
    {
      name: "San Bernardino alle Ossa",
      image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=600&q=80",
      description: "A fascinating 13th-century church chapel whose walls are artistically decorated with human bones and skulls.",
      tip: "Located just a 5-minute walk from the Duomo behind Piazza Santo Stefano."
    }
  ],

  faq: [
    {
      question: "Do I need to book Last Supper tickets in advance?",
      answer: "Yes! Tickets for Leonardo da Vinci's 'The Last Supper' sell out months in advance online."
    }
  ]
};

export const munichData: City = {
  slug: "munich",
  name: "Munich",
  country: "Germany",
  region: "Europe",
  tagline: "The Bavarian capital of beer gardens, royal palaces, and Alpine gates",
  heroImage: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1200&q=80",
  description: "Explore Munich like a local. Guide to Marienplatz Glockenspiel, Englischer Garten surfing, beer halls, and transit.",
  seoTitle: "Munich Travel Guide: Beer Gardens, Palaces, & Bavarian Soul | LocTravel",
  seoDescription: "An expert content guide to Munich. Discover Marienplatz, Hofbräuhaus, English Garden river surfing, and budget tips.",
  lat: 48.1351,
  lon: 11.5820,
  currency: "Euro (€)",
  language: "German (English widely spoken)",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums. The city is known for its annual Oktoberfest celebration and its beer halls, including the famed 16th-century Hofbräuhaus.",
    "In the Altstadt (Old Town), central Marienplatz square contains landmarks such as Neo-Gothic Neues Rathaus (Town Hall), with a popular glockenspiel show."
  ],

  bestTimeToVisit: {
    season: "May to September & December (Oktoberfest & Christmas Markets)",
    description: "Warm summer beer garden weather, vibrant autumn Oktoberfest (late Sept), and festive winter markets.",
    weatherDetails: "Temperatures range from 15°C to 25°C in summer."
  },

  attractions: [
    {
      name: "Marienplatz & Neues Rathaus Glockenspiel",
      image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=600&q=80",
      description: "Central square featuring the famous clock tower show depicting 16th-century Bavarian stories.",
      duration: "1 hour",
      cost: "Free",
      type: "Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Watch River Surfers at Eisbachwelle",
      description: "Watch skilled surfers ride a permanent standing wave in the Englischer Garten stream.",
      duration: "45 mins",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Weisswurst & Pretzel",
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&w=600&q=80",
      description: "Traditional Bavarian white veal sausage served with sweet mustard and fresh warm Brezen.",
      recommendation: "Eat breakfast at Schneider Bräuhaus."
    }
  ],

  whereToStay: [
    {
      area: "Maxvorstadt & Schwabing",
      description: "Museum quarter and academic district with tree-lined avenues, cafes, and peaceful park access.",
      priceRange: "$$ - $$$ (Mid-Range & Boutique)",
      recommendation: "Great for culture, art lovers, and quiet nights."
    }
  ],

  bestRestaurants: [
    {
      name: "Hofbräuhaus München",
      cuisine: "Traditional Bavarian Beer Hall",
      description: "World's most famous 16th-century beer hall featuring brass oompah bands and Augustiner tank beer.",
      location: "Altstadt",
      priceRange: "€15 - €30 per person"
    }
  ],

  transportation: [
    {
      type: "MVV S-Bahn, U-Bahn & Trams",
      description: "Punctual German public transit system. Get a Group Day Ticket (Gruppen-Tageskarte) to save big.",
      cost: "€8.80 single day pass"
    }
  ],

  budgetTips: [
    {
      title: "Bring Your Own Picnic to Beer Gardens",
      description: "By Bavarian law, you can bring your own food to self-service beer gardens as long as you buy your drinks there!"
    }
  ],

  safetyTips: [
    {
      title: "Watch for Bicycles",
      description: "Stay out of marked bike lanes on sidewalks to avoid collisions with fast cyclists."
    }
  ],

  localEtiquette: [
    {
      title: "Toast with Eyes Locked",
      description: "When clinking beer glasses ('Prost!'), look the other person directly in the eye."
    }
  ],

  hiddenGems: [
    {
      name: "Asamkirche (St. Johann Nepomuk)",
      image: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=600&q=80",
      description: "A hidden Late Baroque masterpiece crammed into a narrow street facade, filled with gilding and frescoes.",
      tip: "Located on Sendlinger Straße, open daily for quiet reflection."
    }
  ],

  faq: [
    {
      question: "Do I need reservations for Oktoberfest?",
      answer: "Tents require early reservations for weekend evenings, but unreserved seating is available during weekdays."
    }
  ]
};

export const edinburghData: City = {
  slug: "edinburgh",
  name: "Edinburgh",
  country: "Scotland",
  region: "Europe",
  tagline: "The historic Scottish capital of volcanic crags, cobblestones, and ancient castles",
  heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
  description: "Navigate Edinburgh like a local. Guide to Royal Mile, Edinburgh Castle, Arthur's Seat, pubs, and safety.",
  seoTitle: "Edinburgh Travel Guide: Castles, Cobblestones, & Scottish Soul | LocTravel",
  seoDescription: "An expert content guide to Edinburgh. Explore Edinburgh Castle, Royal Mile, Arthur's Seat hike, Scotch whisky, and budget tips.",
  lat: 55.9533,
  lon: -3.1883,
  currency: "British Pound (£)",
  language: "English",
  timezone: "GMT (UTC+0 / UTC+1 in summer)",

  overview: [
    "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings.",
    "Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny. Arthur’s Seat is an extinct volcano peak in Holyrood Park with sweeping views."
  ],

  bestTimeToVisit: {
    season: "May to September (Fringe Festival in August)",
    description: "Long summer daylight hours and pleasant walking temperatures. August brings the world-famous Edinburgh Fringe Festival.",
    weatherDetails: "Temperatures range from 12°C to 19°C."
  },

  attractions: [
    {
      name: "Edinburgh Castle",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
      description: "Historic fortress dominating the skyline from its volcanic Castle Rock perch.",
      duration: "3 hours",
      cost: "£19.50",
      type: "History Fortress"
    }
  ],

  thingsToDo: [
    {
      title: "Hike Arthur's Seat",
      description: "Climb the ancient extinct volcano peak for panoramic views across the Firth of Forth.",
      duration: "2 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Haggis, Neeps & Tatties",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Traditional savory Scottish dish served with mashed turnips (neeps) and potatoes (tatties).",
      recommendation: "Try it at The Royal McGregor on the Royal Mile."
    }
  ],

  whereToStay: [
    {
      area: "Old Town & Grassmarket",
      description: "Historic heart steps from Royal Mile, ancient pubs, and cobblestone lanes.",
      priceRange: "$$ - $$$ (Mid-Range & Historic)",
      recommendation: "Best for atmosphere and walking."
    }
  ],

  bestRestaurants: [
    {
      name: "The Dome",
      cuisine: "Scottish European Dining",
      description: "Opulent former bank building with grand Corinthian columns and famous seasonal dining.",
      location: "New Town",
      priceRange: "£25 - £45 per person"
    }
  ],

  transportation: [
    {
      type: "Lothian Buses & Trams",
      description: "Award-winning bus network. Tap your contactless card for automatic daily fare capping.",
      cost: "£2.00 single / £4.80 daily cap"
    }
  ],

  budgetTips: [
    {
      title: "Free National Museums",
      description: "The National Museum of Scotland and Scottish National Gallery are 100% free to enter!"
    }
  ],

  safetyTips: [
    {
      title: "Cobblestone Footwear Alert",
      description: "Old Town streets are steep and slippery when wet. Wear sturdy flat shoes."
    }
  ],

  localEtiquette: [
    {
      title: "Buying Pub Rounds",
      description: "If drinking in a group at a Scottish pub, taking turns buying a 'round' of drinks for everyone is standard etiquette."
    }
  ],

  hiddenGems: [
    {
      name: "Dean Village",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
      description: "A tranquil former grain milling village hidden along the Water of Leith stream, just 10 minutes from Princes Street.",
      tip: "Follow the riverside path from Dean Village to Stockbridge for cozy cafes."
    }
  ],

  faq: [
    {
      question: "Is Edinburgh walkable?",
      answer: "Extremely walkable, though very hilly with lots of staircases ('closes') connecting upper and lower streets."
    }
  ]
};

export const budapestData: City = {
  slug: "budapest",
  name: "Budapest",
  country: "Hungary",
  region: "Europe",
  tagline: "The Pearl of the Danube, thermal baths, and legendary ruin bars",
  heroImage: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Budapest like a local. Guide to Széchenyi Thermal Baths, Parliament, Ruin Bars, and Danube cruises.",
  seoTitle: "Budapest Travel Guide: Thermal Baths, Ruin Bars, & Danube Views | LocTravel",
  seoDescription: "An expert content guide to Budapest. Discover Széchenyi Baths, Hungarian Parliament, Fisherman's Bastion, and budget tips.",
  lat: 47.4979,
  lon: 19.0402,
  currency: "Hungarian Forint (HUF / Ft)",
  language: "Hungarian (English widely spoken)",
  timezone: "CET (UTC+1 / UTC+2 in summer)",

  overview: [
    "Budapest, Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest.",
    "Soak in historic thermal baths, admire the grand Hungarian Parliament Building, and enjoy nightlife inside converted pre-war courtyard Ruin Bars."
  ],

  bestTimeToVisit: {
    season: "March to May & September to November",
    description: "Pleasant temperatures, fewer tourist crowds, and comfortable outdoor thermal bathing weather.",
    weatherDetails: "Temperatures range from 12°C to 22°C."
  },

  attractions: [
    {
      name: "Hungarian Parliament Building",
      image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=600&q=80",
      description: "Iconic Neo-Gothic landmark standing along the Pest bank of the Danube River.",
      duration: "1.5 hours",
      cost: "6,000 HUF",
      type: "Architecture Landmark"
    }
  ],

  thingsToDo: [
    {
      title: "Relax at Széchenyi Thermal Baths",
      description: "Soak in hot medicinal thermal pools surrounded by Neo-Baroque outdoor palaces.",
      duration: "3 hours",
      cost: "10,500 HUF"
    }
  ],

  food: [
    {
      name: "Gulyás (Traditional Goulash)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      description: "Rich beef, potato, and root vegetable soup seasoned generously with sweet Hungarian paprika.",
      recommendation: "Try Gettó Gulyás in the Jewish Quarter."
    }
  ],

  whereToStay: [
    {
      area: "Jewish Quarter (District VII)",
      description: "Vibrant nightlife hub filled with ruin bars, street food courts, and boutique hotels.",
      priceRange: "$ - $$ (Budget & Mid-Range)",
      recommendation: "Best for nightlife and central walking."
    }
  ],

  bestRestaurants: [
    {
      name: "Szimpla Kert",
      cuisine: "Ruin Bar & Street Bites",
      description: "The original legendary ruin bar decorated with eclectic vintage furniture and courtyard art.",
      location: "District VII",
      priceRange: "1,500 - 3,500 HUF per drink/snack"
    }
  ],

  transportation: [
    {
      type: "BKK Trams, Metro & Buses",
      description: "Line 2 Tram runs along the scenic Danube. Buy a 24h pass for unlimited transit.",
      cost: "2,500 HUF per 24 hours"
    }
  ],

  budgetTips: [
    {
      title: "Catch Tram 2 for Scenic River Tour",
      description: "Instead of paying for expensive tourist sightseeing buses, take public Tram 2 along the Danube for standard ticket price!"
    }
  ],

  safetyTips: [
    {
      title: "Taxi Meter Awareness",
      description: "Always use official yellow Bolt app taxis or taxi stands rather than unmetered street hailing."
    }
  ],

  localEtiquette: [
    {
      title: "Tipping Custom",
      description: "A 10-12% tip is standard in restaurants. Hand cash directly to the server rather than leaving it on the table."
    }
  ],

  hiddenGems: [
    {
      name: "Fisherman's Bastion at Sunrise",
      image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=600&q=80",
      description: "Fairytale Neo-Romanesque lookout towers offering sunrise views over Parliament across the Danube.",
      tip: "Visit before 9 AM for free access to upper balcony levels!"
    }
  ],

  faq: [
    {
      question: "Are thermal baths mixed gender?",
      answer: "Yes, Széchenyi and Gellért thermal baths are co-ed every day. Bring your swimsuit and flip-flops."
    }
  ]
};

export const santoriniData: City = {
  slug: "santorini",
  name: "Santorini",
  country: "Greece",
  region: "Europe",
  tagline: "The Aegean island jewel of whitewashed cliffs, blue domes, and volcanic sunsets",
  heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Santorini like a local. Guide to Oia sunsets, Fira caldera hike, volcanic beaches, and budget tips.",
  seoTitle: "Santorini Travel Guide: Blue Domes, Caldera Views, & Sunsets | LocTravel",
  seoDescription: "An expert content guide to Santorini. Explore Oia, Fira, Red Beach, volcanic wine tasting, and budget advice.",
  lat: 36.3932,
  lon: 25.4615,
  currency: "Euro (€)",
  language: "Greek (English widely spoken)",
  timezone: "EET (UTC+2 / UTC+3 in summer)",

  overview: [
    "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
    "The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made of black, red and white lava pebbles."
  ],

  bestTimeToVisit: {
    season: "May to June & September to October",
    description: "Warm swimming weather without the overwhelming July/August cruise crowds.",
    weatherDetails: "Temperatures range from 20°C to 28°C."
  },

  attractions: [
    {
      name: "Oia Blue Dome Churches",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      description: "World-famous whitewashed clifftop village famous for Aegean sunsets.",
      duration: "3 hours",
      cost: "Free",
      type: "Scenic Island"
    }
  ],

  thingsToDo: [
    {
      title: "Hike the Caldera Trail from Fira to Oia",
      description: "10km scenic cliffside trek offering breathtaking ocean panoramas.",
      duration: "3 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Fresh Grilled Octopus & Fava",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      description: "Tender grilled octopus seasoned with olive oil and oregano, served over local yellow split pea dip.",
      recommendation: "Dine at Ammoudi Fish Tavern in Ammoudi Bay."
    }
  ],

  whereToStay: [
    {
      area: "Fira or Firostefani",
      description: "Central caldera villages with great bus access, restaurants, and sunset views.",
      priceRange: "$$ - $$$ (Mid-Range & Boutique)",
      recommendation: "Best balance of location, transport, and price."
    }
  ],

  bestRestaurants: [
    {
      name: "Metaxi Mas",
      cuisine: "Authentic Cretan & Santorinian",
      description: "Tucked away in Exo Gonia village, serving incredible local meats and seasonal Greek mezze.",
      location: "Exo Gonia",
      priceRange: "€25 - €45 per person"
    }
  ],

  transportation: [
    {
      type: "KTEL Local Buses & ATV Rentals",
      description: "Public KTEL buses connect Fira to all villages and beaches cheaply.",
      cost: "€1.80 - €2.50 per bus ride"
    }
  ],

  budgetTips: [
    {
      title: "Stay in Fira or Kamari Instead of Oia",
      description: "Hotel rates in Oia are marked up massively. Stay in Fira or Kamari black sand beach for 50% lower accommodation costs."
    }
  ],

  safetyTips: [
    {
      title: "Steep Stairs & Slippery Tiles",
      description: "Cliffside paths in Oia have polished stone steps. Wear non-slip sandals or sneakers."
    }
  ],

  localEtiquette: [
    {
      title: "Respect Private Church Roofs",
      description: "Do not climb onto private church domes or residential roofs for photos; respect local signs."
    }
  ],

  hiddenGems: [
    {
      name: "Pyrgos Village",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      description: "A quiet inland medieval village built around a hill castle, free from heavy tour groups.",
      tip: "Visit Franco's Bar at the top for sunset drinks overlooking the entire island."
    }
  ],

  faq: [
    {
      question: "Is Santorini suitable for a budget trip?",
      answer: "Yes, if you use public KTEL buses, eat gyros pita (€4), and stay outside Oia."
    }
  ]
};
