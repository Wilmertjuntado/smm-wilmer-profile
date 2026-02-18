import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Global UI Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilmer Juntado | Ecommerce Growth Systems & SEO Strategy",
  description: "Ecommerce growth strategist building structured content funnels, SEO foundations, and data-driven social systems for startups and growth-focused brands.",
  keywords: [
    "ecommerce growth strategist",
    "social media funnel expert",
    "SEO for ecommerce",
    "content marketing strategist",
    "conversion-focused social media",
  ],
  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Wilmer Juntado | Ecommerce Growth Systems",
    description: "Turning social media into a predictable growth engine for brands.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Wilmer Juntado Portfolio",
    images: [
      {
        url: "/og-image.jpg", // This points to public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Wilmer Juntado - Ecommerce Growth Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Wilmer Juntado | Ecommerce Growth Systems",
    description: "Building structured content funnels and SEO foundations for growth-focused brands.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* Navbar stays fixed at the top of every page */}
        <Navbar />
        
        {/* This renders the specific content of whatever page you are on */}
        {children}

        {/* Back to Top button appears automatically on scroll */}
        <BackToTop />

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}