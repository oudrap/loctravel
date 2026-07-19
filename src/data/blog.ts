import { BlogArticle } from "../types/travel";

export const blogArticles: BlogArticle[] = [
  {
    slug: "how-to-travel-solo-and-love-it",
    title: "How to Travel Solo and Absolutely Love Every Minute of It",
    excerpt: "Solo travel can be daunting, but with the right mindset and preparation, it can become the most empowering experience of your life.",
    content: `
      <p>Traveling alone is one of the most liberating experiences you can have. Without the need to compromise on itineraries, wake-up times, or restaurant choices, you are free to explore the world entirely on your own terms. But it can also feel intimidating if you've never done it before.</p>
      
      <h2>1. Start Small</h2>
      <p>You don't need to jump on a 15-hour flight to a continent where you don't speak the language for your first solo trip. Start with a weekend getaway to a city just a few hours away. This helps you get comfortable with dining alone, navigating new streets, and managing your own schedule.</p>
      
      <h2>2. Stay in Social Accommodation</h2>
      <p>Hostels are not just for backpackers in their early 20s anymore. Many boutique hostels offer private rooms with the comfort of hotels, alongside beautiful shared lounges, cafes, and organized walking tours that make it incredibly easy to meet fellow travelers.</p>
      
      <h2>3. Learn to Love Your Own Company</h2>
      <p>The hardest part of solo travel for many is the quiet moments—like sitting down for dinner alone. Bring a book, write in a journal, or simply enjoy people-watching. You'll soon realize that dining alone is not lonely, but rather peaceful and reflective.</p>
      
      <h2>4. Keep Safety a Priority</h2>
      <p>Always let someone at home know where you are going each day. Arrive in new destinations during daylight hours, keep your valuables secure, and trust your instincts. If a situation feels uncomfortable, walk away.</p>
    `,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80",
    date: "July 10, 2026",
    author: "Elena Rostova",
    category: "Solo Travel",
    readTime: "5 min read",
    seoTitle: "How to Travel Solo: The Ultimate Guide for Solo Travelers | LocTravel",
    seoDescription: "An expert guide on how to travel solo. Get tips on safety, meeting people, solo dining, and choosing the right destinations."
  },
  {
    slug: "travel-photography-tips-for-beginners",
    title: "10 Travel Photography Tips for Beginners (No Fancy Gear Needed)",
    excerpt: "Want to capture stunning travel memories? Learn how to take professional-looking photos using just your smartphone or entry-level camera.",
    content: `
      <p>You don't need a $3,000 camera setup to take breathtaking travel photos. In fact, most modern smartphones are capable of producing professional-grade images when you understand the fundamentals of composition and lighting.</p>
      
      <h2>1. Shoot During the Golden Hours</h2>
      <p>The hour just after sunrise and the hour right before sunset offer the softest, warmest light of the day. Avoid shooting at midday, when the sun is directly overhead, creating harsh shadows and washed-out highlights.</p>
      
      <h2>2. Use the Rule of Thirds</h2>
      <p>Turn on the grid lines on your camera or phone screen. Instead of placing your subject right in the center, align them with the vertical or horizontal grid lines, or at the intersections. This creates a much more balanced and interesting photo.</p>
      
      <h2>3. Add Depth with Foregrounds</h2>
      <p>Instead of just shooting a flat landscape, include something in the foreground—like overhanging tree branches, flowers, or a winding path. This guides the viewer's eye into the picture and creates a sense of scale and depth.</p>
      
      <h2>4. Capture Local Details</h2>
      <p>Wide shots of landmarks are great, but don't forget the details that give a place its character. Zoom in on traditional doors, street food being prepared, textures of old stone walls, or local markets.</p>
    `,
    image: "https://images.unsplash.com/photo-1452784444945-3f4227bc8af2?auto=format&fit=crop&w=600&q=80",
    date: "July 5, 2026",
    author: "Marcus Chen",
    category: "Photography",
    readTime: "4 min read",
    seoTitle: "Travel Photography Tips for Beginners: Better Photos | LocTravel",
    seoDescription: "Improve your travel photos with these simple photography tips for beginners. Learn about lighting, composition, and smartphone tricks."
  },
  {
    slug: "ultimate-packing-list-lightweight-travel",
    title: "The Ultimate Carry-On Only Packing List for Any Trip",
    excerpt: "Tired of paying baggage fees and waiting at bag carousel? Learn how to pack light and travel with just a carry-on for two weeks or more.",
    content: `
      <p>Traveling with only a carry-on bag is a total game-changer. You save money on airline fees, bypass long check-in lines, and navigate subways and cobblestone streets with ease. Here is how to fit everything you need into one small bag.</p>
      
      <h2>1. The 5-4-3-2-1 Rule</h2>
      <p>For a week-long trip, use this classic packing guide: limit yourself to 5 pairs of socks and underwear, 4 tops, 3 bottoms, 2 pairs of shoes, and 1 hat/swimwear. You can mix and match these to create dozen of outfits.</p>
      
      <h2>2. Roll, Don't Fold</h2>
      <p>Rolling your clothes tightly instead of folding them saves a massive amount of space and reduces wrinkles. For even better organization, invest in a set of compression packing cubes.</p>
      
      <h2>3. Wash as You Go</h2>
      <p>Pack a small travel sink detergent sheet. You can quickly wash underwear and shirts in your hotel sink, dry them overnight, and wear them again. This cuts your packing list in half!</p>
      
      <h2>4. Wear Your Bulkiest Items on the Plane</h2>
      <p>Never pack your heavy boots, thick winter coat, or chunky sweaters in your bag. Wear them during transit to save precious volume and weight inside your suitcase.</p>
    `,
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    date: "June 28, 2026",
    author: "Elena Rostova",
    category: "Packing Guide",
    readTime: "6 min read",
    seoTitle: "Carry-On Only Packing List: How to Travel Light | LocTravel",
    seoDescription: "Master the art of packing light. Complete guide to the 5-4-3-2-1 rule, rolling clothes, and travel essentials for carry-on only."
  }
];

export function getAllArticles(): BlogArticle[] {
  return blogArticles;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
