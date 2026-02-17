"use client";

import Image from "next/image";
import { aboutContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg">
              <Image
                src={aboutContent.image}
                alt="Wilmer working"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold md:text-4xl">
              {aboutContent.headline}
            </h2>

            <p className="mt-6 text-lg text-neutral-600">
              {aboutContent.description}
            </p>

            <p className="mt-6 text-neutral-700 leading-relaxed">
              {aboutContent.story}
            </p>

            <ul className="mt-8 space-y-4">
              {aboutContent.bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-black" />
                  <span className="text-sm text-neutral-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
