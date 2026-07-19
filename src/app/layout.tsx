import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocTravel - Discover Cities Like a Local | Expert Travel Guides",
  description:
    "LocTravel is a content-focused travel platform providing expert-curated city guides. Discover top attractions, local food, budget tips, safety, and hidden gems.",
  keywords: "travel guide, travel tips, local travel, city guides, attractions, local food, hidden gems, budget travel",
  authors: [{ name: "LocTravel Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loctravel.com",
    title: "LocTravel - Discover Cities Like a Local | Expert Travel Guides",
    description:
      "LocTravel is a content-focused travel platform providing expert-curated city guides. Discover top attractions, local food, budget tips, safety, and hidden gems.",
    siteName: "LocTravel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
