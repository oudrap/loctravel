import React from "react";
import { notFound } from "next/navigation";
import { getArticleBySlug, blogArticles } from "@/data/blog";
import AdSenseSlot from "@/components/ads/AdSenseSlot";
import JsonLd, {
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
} from "@/components/layout/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | LocTravel",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      images: [{ url: article.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Schema data
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://loctravel.com";
  const blogPostingSchema = generateBlogPostingSchema({
    title: article.title,
    excerpt: article.excerpt,
    image: article.image,
    date: article.date,
    author: article.author,
    slug: article.slug,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${siteUrl}/` },
    { name: "Blog", item: `${siteUrl}/blog` },
    { name: article.title, item: `${siteUrl}/blog/${article.slug}` },
  ]);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Dynamic JSON-LD Schemas for SEO */}
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Article Header */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-mono">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[450px] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <AdSenseSlot slot="blog-article-top" />

      {/* Article Body */}
      <div className="max-w-2xl mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-light text-base md:text-lg space-y-6 
            prose-headings:font-bold prose-headings:text-slate-950 dark:prose-headings:text-white prose-headings:font-display
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:mb-6"
        />
      </div>

      <AdSenseSlot slot="blog-article-bottom" />

      {/* Back button */}
      <div className="max-w-2xl mx-auto pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to all articles
        </a>
      </div>
    </article>
  );
}
