"use client";

import { funnelContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Funnel() {
  const { scrollYProgress } = useScroll();
  const xParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="relative py-32 bg-neutral-950 text-white overflow-hidden">
      <Container>
        {/* Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            {funnelContent.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-neutral-400 text-lg"
          >
            {funnelContent.description}
          </motion.p>
        </div>

        {/* Horizontal Funnel Diagram */}
        <div className="mt-20 relative flex justify-center items-center gap-4 flex-wrap">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-800 -z-10"></div>

          {funnelContent.stages.map((stage, index) => (
            <div key={stage.title} className="flex items-center gap-4">
              {/* Card */}
              <motion.div
                style={{ x: xParallax }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group flex-1 min-w-[200px] max-w-[220px]"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition-transform duration-300 group-hover:scale-[1.03] text-center">
                  <h3 className="text-lg font-semibold">{stage.title}</h3>
                  <p className="mt-2 text-neutral-400 text-sm">{stage.description}</p>
                  <p className="mt-3 text-sm font-medium text-indigo-400">{stage.metric}</p>
                </div>
              </motion.div>

              {/* Arrow Between Cards */}
              {index !== funnelContent.stages.length - 1 && (
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-neutral-400"
                >
                  <ArrowRight size={24} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
