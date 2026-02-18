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