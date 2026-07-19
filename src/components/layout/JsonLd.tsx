import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helpers to generate Schema.org objects
export function generateFAQSchema(faqItems: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item,
    })),
  };
}

export function generateTravelGuideSchema(city: {
  name: string;
  country: string;
  tagline: string;
  heroImage: string;
  description: string;
  slug: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loctravel.com";
  return {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": `${city.name} Travel Guide`,
    "description": city.description,
    "url": `${siteUrl}/destinations/${city.slug}`,
    "image": city.heroImage,
    "about": {
      "@type": "Place",
      "name": city.name,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": city.country,
      },
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Travelers",
    },
  };
}

export function generateBlogPostingSchema(article: {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loctravel.com";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": new Date(article.date).toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": article.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "LocTravel",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`,
    },
  };
}
