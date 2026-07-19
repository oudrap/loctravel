import { City } from "../../types/travel";

export const parisData: City = {
  slug: "paris",
  name: "Paris",
  country: "France",
  region: "Europe",
  tagline: "The City of Light, romance, and timeless art",
  heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  description: "Discover Paris like a local. Guide to the best cafes, museums, hidden lanes, and safety tips for the French capital.",
  seoTitle: "Paris Travel Guide: Discover the City of Light Like a Local | LocTravel",
  seoDescription: "An expert, content-first travel guide to Paris. Get insider tips on top attractions, local French food, budget travel, safety, and hidden gems.",
  lat: 48.8566,
  lon: 2.3522,
  
  overview: [
    "Paris, the capital of France, is a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond landmarks like the Eiffel Tower and the Gothic 12th-century Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    "But to truly experience Paris, you must step off the beaten tourist path. Spend a morning sitting at a corner bistro in the Canal Saint-Martin, walk through the historic covered passages, and watch the sun set from the steps of Belleville. This guide will show you how to experience Paris with the intimacy of a local."
  ],
  
  bestTimeToVisit: {
    season: "Spring (April to May) & Autumn (September to October)",
    description: "During these shoulder seasons, the weather is pleasant, tourists are fewer, and the city's parks are in full bloom or painted in golden autumn colors.",
    weatherDetails: "Temperatures range from 10°C to 20°C. Spring brings blooming chestnut trees, while autumn brings crisp air and wine harvest festivals."
  },
  
  attractions: [
    {
      name: "The Louvre Museum",
      image: "https://images.unsplash.com/photo-1597910037310-7cca8d3c747f?auto=format&fit=crop&w=600&q=80",
      description: "The world's largest art museum, home to the Mona Lisa and the Venus de Milo.",
      duration: "3-4 hours",
      cost: "€22",
      type: "Art & History"
    },
    {
      name: "Eiffel Tower & Champ de Mars",
      image: "https://images.unsplash.com/photo-1543349689-9a4d4db7bdb3?auto=format&fit=crop&w=600&q=80",
      description: "The iconic iron lattice tower, perfect for views of the city. Walk the Champ de Mars gardens below.",
      duration: "2 hours",
      cost: "€11 - €29 (Free for gardens)",
      type: "Landmark"
    },
    {
      name: "Sainte-Chapelle",
      image: "https://images.unsplash.com/photo-1548678957-f6c61f4ad675?auto=format&fit=crop&w=600&q=80",
      description: "A 13th-century royal chapel with breath-taking Gothic stained glass windows that depict over 1,113 biblical scenes.",
      duration: "1 hour",
      cost: "€13",
      type: "Architecture"
    }
  ],
  
  food: [
    {
      name: "Pain au Chocolat & Croissants",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      description: "Flaky, buttery pastries baked fresh every morning in neighborhood boulangeries.",
      recommendation: "Try Boulangerie Utopie in the 11th arrondissement for award-winning pastries."
    },
    {
      name: "Confit de Canard (Duck Confit)",
      image: "https://images.unsplash.com/photo-1514944224746-6bba5b09e5c2?auto=format&fit=crop&w=600&q=80",
      description: "Slow-cooked duck leg with crispy skin and tender, flavorful meat, served with garlic potatoes.",
      recommendation: "Order it at Chez Gladines in Butte-aux-Cailles for an authentic, hearty Basque-Parisian meal."
    },
    {
      name: "Artisanal French Cheese",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&q=80",
      description: "From creamy Brie and Camembert to sharp Roquefort and aged Comté.",
      recommendation: "Visit Laurent Dubois cheesemonger in Saint-Germain-des-Prés for an expert selection."
    }
  ],
  
  hiddenGems: [
    {
      name: "The Covered Passages (Passages Couverts)",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80",
      description: "19th-century glass-roofed shopping arcades tucked away behind busy streets, featuring old bookshops, cafes, and boutiques.",
      tip: "Walk through Galerie Vivienne and Passage des Panoramas on a rainy afternoon."
    },
    {
      name: "La Petite Ceinture",
      image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=600&q=80",
      description: "An abandoned 19th-century railway line that encircles Paris, now reclaimed by nature and open as a scenic green walkway.",
      tip: "Access the path in the 15th or 20th arrondissements for a quiet, leafy escape from the city noise."
    }
  ],
  
  budgetTips: [
    {
      title: "Get a Navigo Easy Card",
      description: "Buy a Navigo Easy card and load a 'carnet' of 10 digital tickets to save over 20% compared to buying single paper tickets."
    },
    {
      title: "Free Museum Days",
      description: "Many national museums (including the Louvre and Orsay) offer free entry on the first Sunday of every month. Book slots in advance!"
    },
    {
      title: "Picnic by the Seine",
      description: "Instead of expensive dinners, grab a fresh baguette, cheese, and a bottle of wine from a supermarket and dine like locals along the Seine or Canal Saint-Martin."
    }
  ],
  
  transportation: [
    {
      type: "Metro & RER",
      description: "Fast, comprehensive underground train system connecting all corners of the city and suburbs.",
      cost: "€2.15 per ticket (or card discount)"
    },
    {
      type: "Vélib' Métropole",
      description: "City-wide bike-sharing system with mechanical and electric bikes. Excellent network of bike lanes.",
      cost: "€3 for a 24-hour pass + usage fees"
    },
    {
      type: "Walking",
      description: "Paris is highly walkable. Walking between arrondissements is the best way to discover small shops and beautiful architecture.",
      cost: "Free"
    }
  ],
  
  safetyTips: [
    {
      title: "Beware of Pickpockets",
      description: "Keep your bag zipped and in front of you, especially on Metro Line 1, around the Eiffel Tower, and in Sacré-Cœur."
    },
    {
      title: "Avoid the Ring Scam",
      description: "If someone 'finds' a gold ring on the ground in front of you and offers it to you, keep walking. It's a scam to demand money."
    },
    {
      title: "Know the Emergency Number",
      description: "Call 112 for general emergencies. For medical emergencies specifically, dial 15 (SAMU)."
    }
  ],
  
  faq: [
    {
      question: "Do I need to speak French to visit Paris?",
      answer: "While many Parisians speak English, especially in tourism, learning a few basic phrases like 'Bonjour' (Hello), 'S'il vous plaît' (Please), and 'Merci' (Thank you) will go a long way in ensuring friendly service."
    },
    {
      question: "Is water free in Parisian restaurants?",
      answer: "Yes. By law, restaurants must provide a free carafe of tap water ('une carafe d'eau') if you request it. Avoid paying for bottled water unless you prefer sparkling."
    },
    {
      question: "How do I avoid long lines at attractions?",
      answer: "Always book time-slot tickets online weeks in advance for the Louvre, Eiffel Tower, and Catacombs. Alternatively, purchase the Paris Museum Pass if visiting multiple monuments."
    }
  ]
};
