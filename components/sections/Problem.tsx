"use client";

import { problemContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Problem() {
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
            {problemContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-neutral-600"
          >
            {problemContent.description}
          </motion.p>
        </div>

        {/* Pain Points Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemContent.painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <CheckCircle className="mt-1 h-5 w-5 text-black" />
              <p className="text-sm text-neutral-700">{point}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
