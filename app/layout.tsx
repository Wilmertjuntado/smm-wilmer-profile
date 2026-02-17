import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description:  "Ecommerce growth strategist building structured content funnels, SEO foundations, and data-driven social systems for startups and growth-focused brands.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
