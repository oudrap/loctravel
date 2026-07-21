import { City } from "../../types/travel";

export const meccaData: City = {
  slug: "mecca",
  name: "Mecca",
  country: "Saudi Arabia",
  region: "Middle East",
  tagline: "The holiest city in Islam, home to the sacred Kaaba and Al-Masjid al-Haram",
  heroImage: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Great_Mosque_of_Mecca.jpg",
  description: "Navigate Mecca like a local. Guide to Al-Masjid al-Haram, Kaaba, Hira Cave, Abraj Al Bait, Haramain train, hotels, and visitor tips.",
  seoTitle: "Mecca Travel Guide: The Ultimate Guide to Al-Masjid al-Haram & Umrah | LocTravel",
  seoDescription: "An expert content guide to Mecca, Saudi Arabia. Discover Al-Masjid al-Haram, the Kaaba, Abraj Al Bait, Cave of Hira, hotels, transportation, and travel tips.",
  lat: 21.3891,
  lon: 39.8579,
  
  // Quick Facts
  currency: "Saudi Riyal (SAR / ﷼)",
  language: "Arabic",
  timezone: "AST (UTC+3)",
  population: "Approx. 2.4 Million",
  elevation: "277 meters (909 ft) above sea level",
  bestVisitDuration: "3 to 7 Days (for Umrah and spiritual reflection)",
  voltage: "220V / 60Hz",
  plugType: "Type G (3-pin British standard)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24976773347!2d39.77123985!3d21.3890824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469e546963b!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",

  emergencyContacts: [
    { name: "Unified Emergency (All Services)", number: "911" },
    { name: "Police", number: "999" },
    { name: "Ambulance (Red Crescent)", number: "997" },
    { name: "Civil Defense (Fire)", number: "998" },
    { name: "Tourist & Visitor Support", number: "930" }
  ],

  overview: [
    "Mecca (Makkah al-Mukarramah), nestled in the rocky Sirat Mountains of western Saudi Arabia, is the spiritual epicenter of Islam and the birthplace of the Prophet Muhammad. Home to Al-Masjid al-Haram (The Sacred Mosque), Mecca surrounds the holy Kaaba—the sacred cubic sanctuary toward which more than 1.8 billion Muslims worldwide orient themselves in daily prayer.",
    "Steeped in rich Ibrahimic heritage, Mecca welcomes millions of pilgrims annually for the sacred Hajj pilgrimage and year-round Umrah journeys. Today, Mecca seamlessly blends centuries of Islamic heritage with state-of-the-art infrastructure, boasting 300 km/h electric bullet trains, world-renowned skyscraper hotels, and expansive air-conditioned marble courtyards designed for visitor safety and spiritual tranquility."
  ],

  bestTimeToVisit: {
    season: "November to February (Cool Season)",
    description: "Winter offers mild daytime temperatures (20°C–28°C) that make performing outdoor Tawaf and climbing historical mountain sites comfortable.",
    weatherDetails: "Spring (March–May) has moderate weather (28°C–35°C). Summer (June–August) experiences extreme desert heat over 42°C; during summer, perform rituals late at night or early morning. Peak spiritual seasons during Ramadan and Hajj require booking accommodations 3–6 months in advance."
  },

  attractions: [
    {
      name: "Masjid al-Haram (The Sacred Mosque)",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Great_Mosque_of_Mecca.jpg",
      description: "The largest and holiest mosque in the world, capable of accommodating over 2.5 million worshippers across multi-tiered marble floors, vast courtyards, and air-conditioned prayer halls.",
      whyFamous: "It encloses the Kaaba, Maqam Ibrahim, Safa and Marwa hills, and the blessed Zamzam wells.",
      visitorTips: "Visit late at night (1:00 AM – 4:00 AM) or after Fajr for smoother pedestrian movement.",
      duration: "4 to 6 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    },
    {
      name: "The Sacred Kaaba",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kaaba_Masjid_Haraam_Makkah.jpg",
      description: "The black silk kiswa-draped cubic structure located at the center of Al-Masjid al-Haram, built originally by Prophet Ibrahim and his son Ismail.",
      whyFamous: "The qibla (direction of prayer) for all Muslims around the world and the focal point of Tawaf circumambulation.",
      visitorTips: "Perform Tawaf on the upper floor decks when the ground Mataf plaza is crowded.",
      duration: "1 to 2 hours",
      cost: "Free",
      type: "Islam's Holiest Site"
    },
    {
      name: "Abraj Al Bait (Makkah Clock Royal Tower)",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Abraj-al-Bait-towers.jpg",
      description: "A 601-meter iconic skyscraper complex facing the Haram, featuring the world's largest clock face, an astronomy museum, and multi-level shopping centers.",
      whyFamous: "One of the tallest buildings in the world, providing unmatched panoramic views over the holy sanctuary.",
      visitorTips: "Visit the Clock Tower Museum on the top floors for astronomical exhibits and sky deck views.",
      duration: "2 to 3 hours",
      cost: "Free (Museum fee applies)",
      type: "Modern Landmark"
    },
    {
      name: "Jabal Al Noor (Mountain of Light)",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jabal_al-Nour.jpg",
      description: "A prominent 642-meter mountain located 5 km northeast of central Mecca, containing stone stairs leading to its historic summit.",
      whyFamous: "Houses the Cave of Hira near its peak where the Prophet Muhammad spent solitary retreats.",
      visitorTips: "Start climbing before dawn to beat the mid-day heat and wear sturdy hiking shoes.",
      duration: "3 hours",
      cost: "Free",
      type: "Historic Mountain"
    },
    {
      name: "Cave of Hira",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Hira_cave.jpg",
      description: "The small natural cave entrance near the summit of Jabal Al Noor overlooking the Mecca valley below.",
      whyFamous: "The sacred site where Archangel Gabriel revealed the very first Quranic verses to Prophet Muhammad.",
      visitorTips: "Exercise care on the steep upper stone steps near the summit.",
      duration: "2 hours",
      cost: "Free",
      type: "Quranic Heritage"
    },
    {
      name: "Jabal Thawr (Thawr Mountain & Cave)",
      image: "",
      description: "A steep mountain located 4 km south of Mecca containing the famous cave near its summit.",
      whyFamous: "The cave where Prophet Muhammad and Abu Bakr sheltered for three days during the Hijrah migration to Medina.",
      visitorTips: "Requires a 2-hour steep mountain hike; bring plenty of water.",
      duration: "3 to 4 hours",
      cost: "Free",
      type: "Islamic History"
    },
    {
      name: "Mina Valley (City of Tents)",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Mina_tents.jpg",
      description: "A spacious valley located 8 km east of Mecca filled with over 100,000 air-conditioned, fireproof tent structures.",
      whyFamous: "Houses millions of pilgrims during the days of Hajj and contains the Jamarat stoning ritual bridge.",
      visitorTips: "Accessible by bus or metro train during the Hajj season.",
      duration: "2 hours",
      cost: "Free",
      type: "Hajj Landmark"
    },
    {
      name: "Muzdalifah",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Muzdalifah_pilgrims.jpg",
      description: "An open, level desert plain situated between Mina and Mount Arafat.",
      whyFamous: "Pilgrims spend the night under the open sky here during Hajj and gather pebbles for the Jamarat.",
      visitorTips: "Visited primarily during the 9th night of Dhul Hijjah as part of Hajj rites.",
      duration: "1 to 2 hours",
      cost: "Free",
      type: "Sacred Plain"
    },
    {
      name: "Mount Arafat (Jabal al-Rahmah)",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mount_Arafat.jpg",
      description: "A granite hill of mercy rising 70 meters high, located on the plain of Arafat 20 km east of Mecca.",
      whyFamous: "Site where Prophet Muhammad delivered his Farewell Sermon; standing at Arafat is the core pillar of Hajj.",
      visitorTips: "Visit the pillar marker at the top of the granite hill for panoramic valley views.",
      duration: "2 hours",
      cost: "Free",
      type: "Pillar of Hajj"
    },
    {
      name: "Makkah Museum (Architecture of Two Holy Mosques)",
      image: "",
      description: "A cultural museum in the Al-Zahir district housing rare historical artifacts, manuscripts, and architectural relics.",
      whyFamous: "Features ancient marble pillars, wooden doors, and historical brass locks from past restorations of the Kaaba.",
      visitorTips: "Open during daytime hours; great educational stop for families.",
      duration: "2 hours",
      cost: "Free",
      type: "Cultural Museum"
    }
  ],

  thingsToDo: [
    {
      title: "Perform Umrah Rituals (Tawaf & Sa'i)",
      description: "Walk seven times around the Kaaba (Tawaf) and walk seven times between Safa and Marwa hills (Sa'i) in total spiritual devotion.",
      duration: "2 to 3 hours",
      cost: "Free"
    },
    {
      title: "Ride the Haramain High-Speed Bullet Train",
      description: "Travel in comfort at 300 km/h between Mecca, Jeddah Airport, and Medina.",
      duration: "43 mins to Jeddah / 2h 15m to Medina",
      cost: "70 - 150 SAR"
    }
  ],

  food: [
    {
      name: "Saudi Lamb Kabsa",
      image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Saudi Arabia's national dish consisting of fragrant spiced long-grain basmati rice topped with tender slow-roasted lamb and toasted almonds.",
      recommendation: "Try Al-Romansiah or Feldsaish near Ibrahim Al Khalil Street."
    },
    {
      name: "Albaik Broasted Chicken",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Legendary Saudi fried chicken marinated in garlic spices, served piping hot with signature garlic dipping sauce and fresh buns.",
      recommendation: "Order at Albaik inside Abraj Al Bait Clock Tower Mall."
    },
    {
      name: "Authentic Lamb Mandi",
      image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Succulent pit-roasted lamb cooked in an underground clay oven until meat falls off the bone, served over basmati rice.",
      recommendation: "Dine at Raydan or Al-Seddah."
    },
    {
      name: "Mutabbaq Pastry",
      image: "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Crispy pan-fried folded pastry stuffed with spiced minced beef, beaten eggs, chopped green onions, and lemon.",
      recommendation: "Available fresh at local evening street bakeries near Aziziya."
    }
  ],

  whereToStay: [
    {
      name: "Raffles Makkah Palace",
      area: "Abraj Al Bait Complex",
      starRating: "5-Star Ultra Luxury",
      description: "Exclusive suite-only hotel directly overlooking the Kaaba with 24/7 personal butler service and private dining.",
      priceRange: "$$$$ (Ultra Luxury)",
      recommendation: "Direct Kaaba View Suites",
      bestFor: "Luxury Travelers & Couples"
    },
    {
      name: "Pullman ZamZam Makkah",
      area: "Abraj Al Bait Complex",
      starRating: "5-Star Premier",
      description: "Massive skyscraper hotel featuring 1,300+ rooms connected directly to King Abdulaziz Gate prayer halls.",
      priceRange: "$$$$ (5-Star)",
      recommendation: "Haram View Family Suites",
      bestFor: "Families & Group Pilgrims"
    },
    {
      name: "Swissôtel Makkah",
      area: "King Abdul Aziz Gate Zone",
      starRating: "5-Star Luxury",
      description: "Modern luxury hotel with private direct entrance into the main courtyard plaza of Al-Masjid al-Haram.",
      priceRange: "$$$$ (Luxury)",
      recommendation: "Direct Plaza Level Entrance",
      bestFor: "Worshippers Seeking Convenience"
    },
    {
      name: "Hilton Suites Makkah",
      area: "Ibrahim Al Khalil Street",
      starRating: "5-Star Premier",
      description: "Spacious suite-style hotel situated right on Ibrahim Al Khalil boulevard within 5 minutes walking distance of the Haram.",
      priceRange: "$$$ (Premier)",
      recommendation: "Spacious Multi-Room Suites",
      bestFor: "Families & Long Stays"
    },
    {
      name: "Makkah Hotel & Towers",
      area: "Haram Plaza Zone",
      starRating: "5-Star Classic",
      description: "Popular landmark hotel with multiple dining halls, direct shopping arcade, and floor audio feeds from Haram prayers.",
      priceRange: "$$$ (Mid-Range to Luxury)",
      recommendation: "Classic Haram View Rooms",
      bestFor: "Group Travel & Elderly Worshippers"
    },
    {
      name: "DoubleTree by Hilton Makkah Jabal Omar",
      area: "Jabal Omar District",
      starRating: "4-Star Comfort",
      description: "Contemporary hotel located in Jabal Omar development offering shuttle service and spacious family rooms.",
      priceRange: "$$ (Mid-Range)",
      recommendation: "Family Quad Rooms",
      bestFor: "Mid-Range Comfort & Families"
    },
    {
      name: "Le Méridien Makkah",
      area: "Ajyad Street",
      starRating: "5-Star Elegant",
      description: "Quiet luxury hotel located 200 meters from Ajyad Gate, featuring refined restaurants and peaceful atmosphere.",
      priceRange: "$$$ (Premier)",
      recommendation: "Ajyad View Executive Rooms",
      bestFor: "Peaceful Luxury & Business"
    },
    {
      name: "Anjum Hotel Makkah",
      area: "Shubaikah District",
      starRating: "5-Star Great Value",
      description: "Massive 1,700-room hotel facing the northern expansions of Al-Masjid al-Haram with spacious outdoor plazas.",
      priceRange: "$$ (Great Value)",
      recommendation: "Northern Plaza View Rooms",
      bestFor: "Value-Conscious Pilgrims"
    }
  ],

  bestRestaurants: [
    {
      name: "Albaik (Abraj Al Bait Clock Tower Branch)",
      cuisine: "Saudi Broasted Fast Casual",
      description: "Iconic Saudi restaurant chain world-famous for crisp garlic broasted chicken, fried jumbo shrimp, and signature dipping sauces.",
      location: "Abraj Al Bait Mall, 4th Floor",
      priceRange: "$ (15 - 35 SAR per person)"
    },
    {
      name: "Al-Tazaj",
      cuisine: "Saudi BBQ Chicken",
      description: "Popular casual dining venue specializing in wood-charcoal grilled chicken marinated in fresh garlic, lemon, and spices.",
      location: "Ibrahim Al Khalil Street",
      priceRange: "$ (20 - 40 SAR per person)"
    },
    {
      name: "Feldsaish Restaurant",
      cuisine: "Traditional Arabian & Mandi",
      description: "Spacious family restaurant serving authentic Saudi Lamb Kabsa, tender pit-roasted Mandi, and charcoal kebabs.",
      location: "King Abdul Aziz Road",
      priceRange: "$$ (45 - 90 SAR per person)"
    },
    {
      name: "Al-Romansiah",
      cuisine: "Authentic Saudi Floor Dining",
      description: "Renowned restaurant featuring traditional Saudi floor-seated dining rooms serving Madghout, Saleeg, and slow-roasted lamb.",
      location: "Al Aziziya District",
      priceRange: "$$ (50 - 110 SAR per person)"
    },
    {
      name: "Raydan Restaurant",
      cuisine: "Traditional Hejazi & Mandi",
      description: "Popular local dining spot specializing in slow-cooked seasoned lamb, chicken Zurbian, and aromatic basmati rice.",
      location: "Kudai District",
      priceRange: "$$ (40 - 85 SAR per person)"
    },
    {
      name: "Retaj Makkah Restaurant",
      cuisine: "Middle Eastern & Mixed Grill",
      description: "Family-friendly venue serving freshly grilled shish tawook, lamb kebabs, hummus, mutabbal, and fresh flatbreads.",
      location: "Jabal Omar Complex",
      priceRange: "$$ (50 - 100 SAR per person)"
    },
    {
      name: "Smokey Beards BBQ Makkah",
      cuisine: "Arabian Smoked Meats",
      description: "Modern specialty BBQ joint serving slow-smoked beef brisket, smoked lamb ribs, and house-made sauces.",
      location: "Al Shouqiyya District",
      priceRange: "$$$ (70 - 140 SAR per person)"
    }
  ],

  transportation: [
    {
      type: "King Abdulaziz International Airport (Jeddah - JED)",
      description: "The primary international arrival gateway located 80 km west of Mecca. Terminal 1 features a direct high-speed railway station, luxury airport lounges, and official taxi ranks.",
      cost: "Bullet Train: 70 SAR / Airport Taxi: 200 - 250 SAR"
    },
    {
      type: "Haramain High-Speed Railway",
      description: "Ultra-modern 300 km/h electric bullet train connecting Makkah Railway Station to Jeddah Airport (43 mins), Jeddah City (34 mins), and Medina (2h 15m).",
      cost: "70 - 150 SAR per ticket"
    },
    {
      type: "Official Mecca Taxis (Green & White)",
      description: "Licensed municipal taxis operate 24/7 across Mecca. Always request the taximeter or agree on fixed fare before departure.",
      cost: "20 - 50 SAR per inner city trip"
    },
    {
      type: "Uber & Careem Ride-Hailing Apps",
      description: "Uber and Careem operate extensively across Mecca with fixed upfront digital fares, GPS tracking, and card/Apple Pay integration.",
      cost: "20 - 60 SAR per trip"
    },
    {
      type: "Public SAPTCO Buses & Hotel Shuttles",
      description: "Free 24/7 hotel shuttle buses run along dedicated bus transit lanes connecting Aziziya and Kudai hotel districts directly to Haram bus terminals.",
      cost: "Free hotel shuttles / 5 - 10 SAR SAPTCO"
    },
    {
      type: "Walking around Central Mecca Courtyards",
      description: "Central Mecca around Al-Masjid al-Haram features vast car-free pedestrian marble plazas designed for safe walking directly to mosque gates.",
      cost: "Free"
    }
  ],

  budgetTips: [
    {
      title: "Book Haramain Railway Tickets 2-4 Weeks Early",
      description: "Reserve high-speed bullet train tickets on the official Haramain Railway app standard class in advance before peak tickets sell out."
    },
    {
      title: "Use Saudi Mada & Contactless Card Payments",
      description: "Saudi Arabia is virtually cashless; Apple Pay, Visa, and Mastercard are accepted at all restaurants, taxis, and retail stores with zero fees."
    }
  ],

  safetyTips: [
    {
      title: "Follow Pedestrian Crowd Management Lanes",
      description: "Al-Masjid al-Haram enforces designated one-way pedestrian walking lanes during peak prayer hours. Follow security directions for safety."
    },
    {
      title: "Stay Hydrated with Free Zamzam Dispensers",
      description: "Free chilled and room-temperature Zamzam mineral water dispensers are available every few meters inside prayer halls and courtyard plazas."
    }
  ],

  localEtiquette: [
    {
      title: "Non-Muslim City Boundary Restrictions",
      description: "By Saudi law and religious tradition, entry into the city boundary of Mecca is strictly reserved for Muslim travelers."
    },
    {
      title: "Modest Clothing & Ihram Guidelines",
      description: "Men performing Umrah wear two unstitched white Ihram sheets; women wear modest loose-fitting clothing and a headscarf (Hijab)."
    }
  ],

  hiddenGems: [
    {
      name: "Kiswah Factory (King Abdulaziz Complex for Holy Kaaba Kiswah)",
      image: "",
      description: "The official state workshop in Umm al-Jood where master artisans weave gold and silver Quranic calligraphy into the black silk Kiswa that covers the Kaaba.",
      tip: "Visits can be arranged through registered tour groups."
    }
  ],

  faq: [
    {
      question: "Can non-Muslims visit Mecca?",
      answer: "No. By Saudi law and religious tradition, entry into the sacred city boundary of Mecca is strictly restricted to Muslim travelers."
    },
    {
      question: "What is the fastest way to travel from Jeddah Airport to Mecca?",
      answer: "The Haramain High-Speed Railway is the fastest and most comfortable method, taking just 43 minutes directly from Jeddah Airport (JED) Terminal 1 to Makkah Railway Station."
    },
    {
      question: "Do I need a permit to perform Umrah?",
      answer: "Yes. Visitors can obtain a free Umrah permit via the official Saudi 'Nusuk' mobile app prior to performing Tawaf."
    },
    {
      question: "Is photography allowed inside Al-Masjid al-Haram?",
      answer: "Personal smartphone photography is generally permitted inside prayer halls and courtyards. Professional camera gear and tripods require prior official permits."
    },
    {
      question: "How do I access Zamzam water in Mecca?",
      answer: "Chilled and room-temperature Zamzam water is available for free from thousands of stainless steel dispensers throughout Al-Masjid al-Haram."
    },
    {
      question: "What currency is used in Mecca and are credit cards accepted?",
      answer: "The currency is the Saudi Riyal (SAR / ﷼). Contactless credit cards, Visa, Mastercard, and Apple Pay are universally accepted across shops, taxis, and restaurants."
    },
    {
      question: "What is the travel distance between Mecca and Medina?",
      answer: "Mecca and Medina are approximately 450 km apart. The Haramain High-Speed Railway connects the two holy cities in just 2 hours and 15 minutes."
    },
    {
      question: "What is the required dress code for women in Mecca?",
      answer: "Women wear modest, loose-fitting attire (such as an Abaya) and a headscarf (Hijab) when visiting the city and sacred sanctuaries."
    },
    {
      question: "What is the best time of day to perform Tawaf to avoid large crowds?",
      answer: "Late evening (after midnight until 4:00 AM) or early morning right after Fajr prayer generally offer the smoothest Tawaf experience on the Mataf."
    },
    {
      question: "How do I get to Jabal al-Noor (Cave of Hira)?",
      answer: "Jabal al-Noor is a 15-minute taxi or ride-hailing trip from the Haram. Visitors can climb the stone steps up the mountain; early morning before sunrise is recommended to avoid heat."
    }
  ]
};

export const medinaData: City = {
  slug: "medina",
  name: "Medina",
  country: "Saudi Arabia",
  region: "Middle East",
  tagline: "The City of the Prophet, peaceful sanctuaries, and Al-Masjid an-Nabawi",
  heroImage: "https://images.pexels.com/photos/12313656/pexels-photo-12313656.jpeg?auto=compress&cs=tinysrgb&w=1200",
  description: "Navigate Medina like a local. Guide to Al-Masjid an-Nabawi, Rawdah, Quba Mosque, Mount Uhud, date markets, and transit.",
  seoTitle: "Medina Travel Guide: The Prophet's Mosque & Sacred Heritage | LocTravel",
  seoDescription: "An expert content guide to Medina. Discover Al-Masjid an-Nabawi, Rawdah, Quba Mosque, Mount Uhud, Ajwa dates, and travel tips.",
  lat: 24.5247,
  lon: 39.5692,

  // Quick Facts
  currency: "Saudi Riyal (SAR / ﷼)",
  language: "Arabic",
  timezone: "AST (UTC+3)",
  population: "Approx. 1.5 Million",
  elevation: "608 meters (1,995 ft) above sea level",
  bestVisitDuration: "2 to 4 Days",
  voltage: "220V / 60Hz",
  plugType: "Type G (3-pin British standard)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116120.21987512415!2d39.54924!3d24.5247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197d220d5%3A0x2e5453523030f287!2sMedina%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",

  emergencyContacts: [
    { name: "Unified Emergency (All Services)", number: "911" },
    { name: "Police", number: "999" },
    { name: "Ambulance (Red Crescent)", number: "997" },
    { name: "Civil Defense (Fire)", number: "998" },
    { name: "Tourist Support", number: "930" }
  ],

  overview: [
    "Medina (Madinah al-Munawwarah), located in the Hejaz region of western Saudi Arabia, is Islam’s second holiest city. It served as the capital of the early Muslim community after the Prophet Muhammad's migration (Hijrah) from Mecca in 622 AD.",
    "At its core stands Al-Masjid an-Nabawi (The Prophet’s Mosque), featuring iconic green and white umbrella canopies and the sacred Green Dome enclosing the Prophet's resting place. Known globally for its peaceful atmosphere, Medina offers visitors deep spiritual reflection, palm oases, and ancient battleground heritage."
  ],

  bestTimeToVisit: {
    season: "November to February (Cool Season)",
    description: "Mild winter temperatures (16°C–26°C) make walking along the pedestrianized Quba Walkway and visiting outdoor oases delightful.",
    weatherDetails: "Summer months (June to August) reach 40°C–44°C; courtyard umbrella shade structures keep outdoor plazas comfortable during daytime prayers."
  },

  attractions: [
    {
      name: "Al-Masjid an-Nabawi (The Prophet's Mosque)",
      image: "https://images.pexels.com/photos/12313656/pexels-photo-12313656.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The sprawling sanctuary featuring 250 retractable giant umbrella canopies, marble courtyards, and the sacred Green Dome.",
      duration: "4 to 6 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    },
    {
      name: "Quba Mosque (First Mosque in Islam)",
      image: "",
      description: "The historic mosque whose foundation stone was laid by Prophet Muhammad upon arriving in Medina. Praying two units of prayer here carries the reward of an Umrah.",
      duration: "2 hours",
      cost: "Free",
      type: "Islamic History"
    },
    {
      name: "Mount Uhud & Archers' Hill (Jabal Rumaat)",
      image: "",
      description: "The famous granite mountain north of Medina, site of the historic Battle of Uhud (625 AD) and burial place of the Martyrs of Uhud including Hamza ibn Abdul-Muttalib.",
      duration: "2 hours",
      cost: "Free",
      type: "Battleground & Memorial"
    },
    {
      name: "Al Qiblatain Mosque (Mosque of the Two Qiblas)",
      image: "",
      description: "The historic mosque where the qibla (direction of prayer) was divine revealed to change from Jerusalem toward the Kaaba in Mecca.",
      duration: "1.5 hours",
      cost: "Free",
      type: "Quranic Site"
    },
    {
      name: "Seven Mosques (Al-Masajid As-Sab'ah)",
      image: "",
      description: "A complex of small historic mosques situated on the western slope of Mount Sela, site of the famous Battle of the Trench (Khandaq).",
      duration: "2 hours",
      cost: "Free",
      type: "Historic Complex"
    },
    {
      name: "Dar Al Madinah Museum",
      image: "",
      description: "A specialized museum displaying interactive 3D scale models of Medina’s urban development and Islamic history from the prophetic era to present day.",
      duration: "2 hours",
      cost: "25 SAR",
      type: "History Museum"
    },
    {
      name: "Jannat al-Baqi (Baqi Cemetery)",
      image: "",
      description: "The main historic cemetery adjacent to Al-Masjid an-Nabawi where many members of the Prophet's family, wives, and thousands of Companions are buried.",
      duration: "1 hour",
      cost: "Free",
      type: "Sacred Cemetery"
    },
    {
      name: "Medina Central Date Market",
      image: "",
      description: "Bustling traditional market featuring over 150 date varieties, including Medina's world-famous dark Ajwa dates, Safawi, and Anbara dates.",
      duration: "1.5 hours",
      cost: "Free to browse",
      type: "Local Market"
    }
  ],

  thingsToDo: [
    {
      title: "Pray inside Rawdah ash-Sharifah",
      description: "Reserve a free Nusuk app permit to pray inside the sacred area between the Prophet's house and minbar, described as a garden of Paradise.",
      duration: "1 hour",
      cost: "Free (Nusuk App Permit)"
    },
    {
      title: "Stroll the Pedestrian Quba Walkway",
      description: "Walk the beautiful 3km palm-lined pedestrian avenue connecting Al-Masjid an-Nabawi to Quba Mosque at sunset.",
      duration: "1 to 2 hours",
      cost: "Free"
    }
  ],

  food: [
    {
      name: "Medina Ajwa Dates & Saudi Coffee (Gahwa)",
      image: "",
      description: "Soft, dark Ajwa dates grown in Medina palm groves, paired with golden cardamom-scented Saudi Arabic coffee.",
      recommendation: "Purchase fresh dates at the Central Date Market near Quba."
    },
    {
      name: "Madinah Mint Tea & Fresh Bread",
      image: "",
      description: "Fragrant organic mint tea brewed with famous Madinah Hasawi mint, served alongside warm sesame flatbread.",
      recommendation: "Enjoy at cafes along Quba Avenue."
    },
    {
      name: "Saudi Saleeg Rice",
      image: "",
      description: "Comforting creamy short-grain rice cooked in chicken broth and milk, seasoned with ghee and cardamom, served with roasted chicken.",
      recommendation: "Try at Al-Romansiah Medina."
    }
  ],

  whereToStay: [
    {
      area: "Northern Central Markaziyah",
      description: "Prime pedestrian plaza zone directly facing the main gates of Al-Masjid an-Nabawi.",
      priceRange: "$$$$ (5-Star Luxury)",
      recommendation: "Dar Al Taqwa, Oberoi Madina, and Pullman Zamzam Madina."
    },
    {
      area: "Southern Markaziyah",
      description: "Lively commercial hotel district within 3–5 minutes walking distance to the Prophet's Mosque.",
      priceRange: "$$$ (Mid-Range & Luxury)",
      recommendation: "Anwar Al Madinah Movenpick and Crown Plaza Madinah."
    },
    {
      area: "Quba Road & King Fahd District",
      description: "Peaceful residential neighborhood 10 minutes from the Haram, offering modern budget hotels and easy bus transit.",
      priceRange: "$$ (Budget-Friendly)",
      recommendation: "Ideal for longer stays and quiet family travel."
    }
  ],

  bestRestaurants: [
    {
      name: "Arabesque Restaurant",
      cuisine: "Middle Eastern & International Buffet",
      description: "Upscale dining room offering direct view over the courtyards of the Prophet's Mosque.",
      location: "Northern Markaziyah",
      priceRange: "80 - 180 SAR per person ($$$)"
    },
    {
      name: "Albaik Medina (King Faisal Branch)",
      cuisine: "Saudi Broasted Fried Chicken",
      description: "Famous local branch serving iconic crisp chicken, fries, and garlic sauce.",
      location: "King Faisal Road",
      priceRange: "15 - 35 SAR per person ($)"
    },
    {
      name: "Town Pour Specialty Coffee",
      cuisine: "Saudi Specialty Coffee & Bakery",
      description: "Modern specialty coffeehouse serving single-origin coffees and fresh pastries.",
      location: "Sultana Street",
      priceRange: "20 - 45 SAR per person ($$)"
    }
  ],

  transportation: [
    {
      type: "Madinah Prince Mohammad bin Abdulaziz Airport (MED)",
      description: "Modern international airport 15km northeast of Medina city center with quick taxi and shuttle links.",
      cost: "Airport bus: 10 SAR / Taxi: 50 - 70 SAR"
    },
    {
      type: "Haramain High-Speed Railway Station",
      description: "Ultra-fast electric train station connecting Medina to Jeddah Airport (1h 50m) and Mecca (2h 15m).",
      cost: "150 SAR per ticket"
    },
    {
      type: "Uber & Careem Apps",
      description: "Uber and Careem operate extensively with reliable, fixed digital app pricing.",
      cost: "15 - 35 SAR per city ride"
    }
  ],

  budgetTips: [
    {
      title: "Walk Quba Pedestrian Avenue",
      description: "Walk between Al-Masjid an-Nabawi and Quba Mosque along the car-free green walkway for free."
    },
    {
      title: "Buy Ajwa Dates in Bulk",
      description: "Visit the Central Date Market near Quba for direct farm dates at wholesale prices."
    }
  ],

  safetyTips: [
    {
      title: "Book Rawdah Permit on Nusuk App",
      description: "Access to enter the Rawdah ash-Sharifah requires booking a free timed permit via the Saudi Nusuk app."
    },
    {
      title: "Keep Hydrated in Courtyard Plazas",
      description: "Free chilled Zamzam water dispensers line all courtyards of Al-Masjid an-Nabawi."
    }
  ],

  localEtiquette: [
    {
      title: "Peaceful Reverence",
      description: "Medina is world-renowned for its calm and serene atmosphere. Speak softly inside prayer halls."
    }
  ],

  hiddenGems: [
    {
      name: "Quba Walkway Palm Oasis",
      image: "",
      description: "Tranquil palm date groves situated right alongside the pedestrian avenue between the two main mosques.",
      tip: "Visit at sunset for cool mountain breezes."
    }
  ],

  faq: [
    {
      question: "Can non-Muslims visit Medina?",
      answer: "Non-Muslim travelers can visit the city of Medina, modern districts, and cultural sites. Access into the inner courtyard of Al-Masjid an-Nabawi remains reserved for Muslims."
    },
    {
      question: "How do I book a time slot to pray in the Rawdah?",
      answer: "Download the official Saudi 'Nusuk' app on your smartphone, create a free account, and select an available date and time slot for your Rawdah permit."
    },
    {
      question: "How far is Medina Airport from the Prophet's Mosque?",
      answer: "Prince Mohammad bin Abdulaziz Airport (MED) is approximately 15 km northeast of the mosque, taking about 20 minutes by taxi or shuttle bus."
    },
    {
      question: "What is the best way to travel between Mecca and Medina?",
      answer: "The Haramain High-Speed Railway bullet train is the best method, covering the 450 km distance in just 2 hours and 15 minutes."
    },
    {
      question: "What makes Ajwa dates from Medina famous?",
      answer: "Ajwa dates are a soft, dark, premium date variety cultivated exclusively in the soil of Medina, praised in Islamic tradition for their health benefits."
    }
  ]
};
