"use client";

import { ctaContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 bg-black text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold md:text-4xl"
          >
            {ctaContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-neutral-300"
          >
            {ctaContent.description}
          </motion.p>

          {/* Primary Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href={ctaContent.primaryCta.href}
              className="inline-block rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition hover:opacity-90"
            >
              {ctaContent.primaryCta.label}
            </Link>
          </motion.div>

          {/* Secondary Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-neutral-400"
          >
            {ctaContent.secondaryText}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
