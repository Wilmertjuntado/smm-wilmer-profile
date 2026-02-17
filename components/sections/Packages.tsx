"use client";

import { packagesContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Packages() {
  return (
    <section className="py-24 bg-neutral-50">
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
            {packagesContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-neutral-600"
          >
            {packagesContent.description}
          </motion.p>
        </div>

        {/* Package Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packagesContent.packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border p-8 shadow-sm transition hover:shadow-lg ${
                pkg.highlight
                  ? "border-black bg-white scale-105"
                  : "border-neutral-200 bg-white"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold">{pkg.name}</h3>

              <p className="mt-2 text-sm text-neutral-500">{pkg.price}</p>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-1 h-4 w-4 text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`mt-8 block rounded-2xl px-6 py-3 text-center text-sm font-medium transition ${
                  pkg.highlight
                    ? "bg-black text-white hover:opacity-90"
                    : "border border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
