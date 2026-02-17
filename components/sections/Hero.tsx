"use client";

import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* LEFT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
              {heroContent.eyebrow}
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              {heroContent.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={heroContent.primaryCta.href}
                className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {heroContent.primaryCta.label}
              </Link>

              <Link
                href={heroContent.secondaryCta.href}
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-xl">
              <Image
                src="/images/profile/headshot.png"
                alt="Wilmer - Ecommerce Growth Partner"
                width={900}
                height={1100}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Subtle Background Accent */}
            <div className="absolute -z-10 -bottom-6 -right-6 h-full w-full rounded-3xl bg-neutral-100" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
