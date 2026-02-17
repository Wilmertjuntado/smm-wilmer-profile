"use client";

import { frameworkContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Framework() {
  return (
    <section className="py-24">
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
            {frameworkContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-neutral-600"
          >
            {frameworkContent.description}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {frameworkContent.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
