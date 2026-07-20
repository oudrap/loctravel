import { City } from "../../types/travel";

export const meccaData: City = {
  slug: "mecca",
  name: "Mecca",
  country: "Saudi Arabia",
  region: "Middle East",
  tagline: "The holiest city in Islam, home to the sacred Kaaba and Al-Masjid al-Haram",
  heroImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
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
    "Mecca (Makkah al-Mukarramah), situated in the Sirat Mountains of western Saudi Arabia, is the spiritual center of the Islamic world and the birthplace of the Prophet Muhammad. At its heart lies Al-Masjid al-Haram (The Sacred Mosque), enclosing the holy Kaaba—the cubic structure toward which over 1.8 billion Muslims face daily in prayer.",
    "Rooted in Ibrahimic tradition, Mecca hosts millions of pilgrims annually for the Hajj pilgrimage and year-round Umrah. Modern Mecca seamlessly connects ancient heritage with world-class infrastructure, featuring high-speed bullet trains, soaring clock towers, and spacious pedestrian marble plazas designed for safety and spiritual comfort."
  ],

  bestTimeToVisit: {
    season: "November to February (Cooler Months)",
    description: "Winter months provide pleasant daytime temperatures (20°C–28°C) ideal for performing Umrah rituals and visiting historical mountains.",
    weatherDetails: "Summer (June–August) brings high heat exceeding 42°C; during summer, perform Tawaf and rituals in early morning or night."
  },

  attractions: [
    {
      name: "Masjid al-Haram (The Sacred Mosque)",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
      description: "The largest mosque in the world, capable of accommodating millions of worshippers. It encompasses the Kaaba, Maqam Ibrahim, Safa and Marwa hills, and Zamzam wells.",
      duration: "4 to 6 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    },
    {
      name: "The Sacred Kaaba",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80",
      description: "The black silk kiswa-draped cubic sanctuary built by Prophet Ibrahim and Ismail. Pilgrims perform Tawaf by circumambulating seven times anti-clockwise around it.",
      duration: "1 to 2 hours",
      cost: "Free",
      type: "Islam's Holiest Site"
    },
    {
      name: "Abraj Al Bait (Makkah Clock Royal Tower)",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
      description: "A 601-meter landmark complex featuring the world's largest clock face, a multi-story shopping mall, astronomy museum, and panoramic viewing decks overlooking the Haram.",
      duration: "2 to 3 hours",
      cost: "Free (Museum fee applies)",
      type: "Modern Landmark"
    },
    {
      name: "Jabal Al Noor (Mountain of Light)",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5edd0cd9?auto=format&fit=crop&w=800&q=80",
      description: "Historic 642-meter mountain located 5km northeast of Mecca, famous for housing the Cave of Hira near its peak.",
      duration: "3 hours",
      cost: "Free",
      type: "Historic Mountain"
    },
    {
      name: "Cave of Hira",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      description: "The small cave near the summit of Jabal Al Noor where the Prophet Muhammad spent periods in solitary meditation and received the first Quranic revelation from Archangel Gabriel.",
      duration: "2 hours",
      cost: "Free",
      type: "Quranic Heritage"
    },
    {
      name: "Jabal Thawr (Thawr Mountain & Cave)",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      description: "The mountain south of Mecca containing the cave where the Prophet Muhammad and Abu Bakr sheltered for three days during their migration (Hijrah) to Medina.",
      duration: "3 hours",
      cost: "Free",
      type: "Islamic History"
    },
    {
      name: "Mina Valley",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "The 'City of Tents' located 8km east of Mecca, housing over 100,000 air-conditioned fireproof tents for Hajj pilgrims and the Jamarat pillars.",
      duration: "2 hours",
      cost: "Free",
      type: "Hajj Landmark"
    },
    {
      name: "Muzdalifah",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      description: "An open level area between Mina and Arafat where Hajj pilgrims spend the night under the open sky and gather pebbles for Jamarat.",
      duration: "1 to 2 hours",
      cost: "Free",
      type: "Sacred Plain"
    },
    {
      name: "Mount Arafat (Jabal al-Rahmah)",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "The granite hill of mercy 20km east of Mecca where the Prophet Muhammad delivered his Farewell Sermon. Standing at Arafat is the central pillar of Hajj.",
      duration: "2 hours",
      cost: "Free",
      type: "Pillar of Hajj"
    },
    {
      name: "Makkah Museum (Architecture of Two Holy Mosques)",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      description: "Museum located in the Al-Zahir district housing rare historical manuscripts, ancient Kaaba doors, marble pillars, and wooden relics from past restorations.",
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
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "Saudi Arabia's national dish consisting of fragrant spiced long-grain rice topped with tender slow-roasted lamb and toasted almonds.",
      recommendation: "Try Al-Romansiah or Feldsaish near Ibrahim Al Khalil Street."
    },
    {
      name: "Albaik Broasted Chicken",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      description: "Legendary Saudi fried chicken marinated in garlic spices, served piping hot with signature garlic dipping sauce and fresh buns.",
      recommendation: "Order at Albaik inside Abraj Al Bait Clock Tower Mall."
    },
    {
      name: "Authentic Lamb Mandi",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      description: "Succulent pit-roasted lamb cooked in an underground clay oven until meat falls off the bone, served over basmati rice.",
      recommendation: "Dine at Raydan or Al-Seddah."
    },
    {
      name: "Mutabbaq Pastry",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
      description: "Crispy pan-fried folded pastry stuffed with spiced minced beef, beaten eggs, chopped green onions, and lemon.",
      recommendation: "Available fresh at local evening street bakeries near Aziziya."
    }
  ],

  whereToStay: [
    {
      area: "Abraj Al Bait & King Abdulaziz Gate Zone",
      description: "Luxury skyscraper hotels connected directly to Al-Masjid al-Haram with direct floor access into prayer halls.",
      priceRange: "$$$$ (5-Star Luxury)",
      recommendation: "Pullman ZamZam Makkah, Swissôtel Makkah, and Raffles Makkah Palace."
    },
    {
      area: "Ibrahim Al Khalil Street",
      description: "Lively boulevard within 5–10 minutes walking distance of the Haram, lined with dining and shopping.",
      priceRange: "$$$ (Mid-Range & Premier)",
      recommendation: "Hilton Suites Makkah and Dar Al Taqwa."
    },
    {
      area: "Aziziya District",
      description: "Modern district located 10 minutes east of the Haram, featuring affordable hotels connected by frequent shuttle buses.",
      priceRange: "$$ (Budget-Friendly)",
      recommendation: "Ideal for longer stays and budget-conscious Umrah travelers."
    }
  ],

  bestRestaurants: [
    {
      name: "Albaik (Abraj Al Bait Branch)",
      cuisine: "Saudi Broasted Fast Casual",
      description: "Iconic Saudi restaurant chain famous for legendary garlic chicken and shrimp meals.",
      location: "Abraj Al Bait Mall, 4th Floor",
      priceRange: "15 - 35 SAR per person ($)"
    },
    {
      name: "Al-Tazaj",
      cuisine: "Saudi BBQ Chicken",
      description: "Popular restaurant specializing in wood-charcoal grilled tender chicken served with garlic bread and tahini.",
      location: "Ibrahim Al Khalil Street",
      priceRange: "20 - 40 SAR per person ($)"
    },
    {
      name: "Feldsaish Restaurant",
      cuisine: "Traditional Arabian & Mandi",
      description: "Spacious family dining room serving classic Saudi Kabsa, lamb Mandi, and grilled kebabs.",
      location: "Near King Abdul Aziz Road",
      priceRange: "45 - 90 SAR per person ($$)"
    },
    {
      name: "Al-Romansiah",
      cuisine: "Authentic Saudi Cuisine",
      description: "Renowned restaurant for traditional Saudi seating floor rooms serving Madghout, Saleeg, and lamb dishes.",
      location: "Al Aziziya",
      priceRange: "50 - 110 SAR per person ($$)"
    }
  ],

  transportation: [
    {
      type: "King Abdulaziz International Airport (Jeddah - JED)",
      description: "Main international gateway 80km west of Mecca. Terminal 1 features a direct high-speed railway station.",
      cost: "Airport train: 70 SAR / Taxi: 200 - 250 SAR"
    },
    {
      type: "Haramain High-Speed Railway",
      description: "State-of-the-art 300 km/h electric bullet train connecting Mecca Station to Jeddah Airport (43 min) and Medina (2h 15m).",
      cost: "70 - 150 SAR per ticket"
    },
    {
      type: "Uber & Careem Ride-Hailing Apps",
      description: "Uber and Careem operate extensively across Mecca with fixed digital pricing and card payments.",
      cost: "20 - 60 SAR per local city trip"
    },
    {
      type: "Public SAPTCO Buses & Shuttle Buses",
      description: "Free hotel shuttle buses run 24/7 along dedicated lanes connecting Aziziya hotels to Haram bus terminals.",
      cost: "Free hotel shuttles / 5 - 10 SAR SAPTCO"
    }
  ],

  budgetTips: [
    {
      title: "Book Haramain Train Tickets Early",
      description: "Book bullet train tickets on the official Haramain Railway app 2–4 weeks in advance to secure standard class seats before peak fares."
    },
    {
      title: "Use Mada & Contactless Card Payments",
      description: "Saudi Arabia is virtually cashless; Apple Pay and contactless cards are accepted at all restaurants, taxis, and stores with zero fees."
    }
  ],

  safetyTips: [
    {
      title: "Follow Crowd Control Lanes at the Haram",
      description: "Al-Masjid al-Haram uses designated one-way pedestrian lanes during prayer times. Follow security staff directions and signs."
    },
    {
      title: "Drink Free Zamzam Water Frequently",
      description: "Free refrigerated Zamzam water containers and dispensers are located every few meters inside prayer halls and courtyard plazas."
    }
  ],

  localEtiquette: [
    {
      title: "Non-Muslim City Boundary Restrictions",
      description: "By Saudi law and religious tradition, entry into the city boundary of Mecca is strictly reserved for Muslim travelers."
    },
    {
      title: "Modest Ihram & Clothing Guidelines",
      description: "Men performing Umrah wear two unstitched white Ihram sheets; women wear modest loose-fitting clothing and headscarf."
    }
  ],

  hiddenGems: [
    {
      name: "Kiswah Factory (King Abdulaziz Complex for Holy Kaaba Kiswah)",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
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
  heroImage: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80",
      description: "The sprawling sanctuary featuring 250 retractable giant umbrella canopies, marble courtyards, and the sacred Green Dome.",
      duration: "4 to 6 hours",
      cost: "Free",
      type: "Sacred Sanctuary"
    },
    {
      name: "Quba Mosque (First Mosque in Islam)",
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
      description: "The historic mosque whose foundation stone was laid by Prophet Muhammad upon arriving in Medina. Praying two units of prayer here carries the reward of an Umrah.",
      duration: "2 hours",
      cost: "Free",
      type: "Islamic History"
    },
    {
      name: "Mount Uhud & Archers' Hill (Jabal Rumaat)",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      description: "The famous granite mountain north of Medina, site of the historic Battle of Uhud (625 AD) and burial place of the Martyrs of Uhud including Hamza ibn Abdul-Muttalib.",
      duration: "2 hours",
      cost: "Free",
      type: "Battleground & Memorial"
    },
    {
      name: "Al Qiblatain Mosque (Mosque of the Two Qiblas)",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
      description: "The historic mosque where the qibla (direction of prayer) was divine revealed to change from Jerusalem toward the Kaaba in Mecca.",
      duration: "1.5 hours",
      cost: "Free",
      type: "Quranic Site"
    },
    {
      name: "Seven Mosques (Al-Masajid As-Sab'ah)",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      description: "A complex of small historic mosques situated on the western slope of Mount Sela, site of the famous Battle of the Trench (Khandaq).",
      duration: "2 hours",
      cost: "Free",
      type: "Historic Complex"
    },
    {
      name: "Dar Al Madinah Museum",
      image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=800&q=80",
      description: "A specialized museum displaying interactive 3D scale models of Medina’s urban development and Islamic history from the prophetic era to present day.",
      duration: "2 hours",
      cost: "25 SAR",
      type: "History Museum"
    },
    {
      name: "Jannat al-Baqi (Baqi Cemetery)",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5edd0cd9?auto=format&fit=crop&w=800&q=80",
      description: "The main historic cemetery adjacent to Al-Masjid an-Nabawi where many members of the Prophet's family, wives, and thousands of Companions are buried.",
      duration: "1 hour",
      cost: "Free",
      type: "Sacred Cemetery"
    },
    {
      name: "Medina Central Date Market",
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
      description: "Soft, dark Ajwa dates grown in Medina palm groves, paired with golden cardamom-scented Saudi Arabic coffee.",
      recommendation: "Purchase fresh dates at the Central Date Market near Quba."
    },
    {
      name: "Madinah Mint Tea & Fresh Bread",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      description: "Fragrant organic mint tea brewed with famous Madinah Hasawi mint, served alongside warm sesame flatbread.",
      recommendation: "Enjoy at cafes along Quba Avenue."
    },
    {
      name: "Saudi Saleeg Rice",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
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
