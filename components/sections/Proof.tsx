"use client";

import Image from "next/image";
import { proofContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function Proof() {
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
            {proofContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-neutral-600"
          >
            {proofContent.description}
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proofContent.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 text-center shadow-sm"
            >
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm text-neutral-600">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Screenshot Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg"
          >
            <Image
              src="/images/profile/analytics1.png"
              alt="Analytics dashboard result example"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg"
          >
            <Image
              src="/images/profile/analytics2.png"
              alt="Campaign performance example"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
