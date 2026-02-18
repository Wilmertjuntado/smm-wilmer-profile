"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { funnelDesignSamples } from "@/lib/content";

export default function FunnelDesignGallery() {
  const [activeTab, setActiveTab] = useState("Landing Pages");

  const filteredSamples = funnelDesignSamples.samples.filter(
    (sample) => sample.category === activeTab
  );

  return (
    <section id="design-samples" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Visual Design Samples</h2>
          <p className="text-slate-500">The creative assets that power my strategic frameworks.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {funnelDesignSamples.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === cat 
                ? "bg-slate-900 text-white shadow-lg" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSamples.map((sample) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <div className="aspect-video relative">
                  <Image 
                    src={sample.image} 
                    alt={sample.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-slate-900">{sample.title}</h3>
                  <p className="text-sm text-slate-500">{sample.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}