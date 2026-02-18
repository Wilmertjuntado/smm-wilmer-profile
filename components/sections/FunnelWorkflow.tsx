"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
 
  Target,
  BarChart,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// Import the full array of strategies and the Type definition
import { funnelStrategies, FunnelStrategy } from "@/lib/content";

/* ---------------------- ANIMATION CONFIG ---------------------- */

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.35 },
  }),
};

/* ---------------------- COMPONENT ---------------------- */

export default function FunnelPortfolio() {
  const [activeFunnel, setActiveFunnel] = useState(0);
  const [direction, setDirection] = useState(0);

  // Use the full array from your content library
  const funnels: FunnelStrategy[] = funnelStrategies;
  const current = funnels[activeFunnel];

  // Safety check to prevent crashes if data is missing
  if (!current) return null;

  const next = () => {
    setDirection(1);
    setActiveFunnel((prev) => (prev + 1) % funnels.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveFunnel((prev) =>
      prev === 0 ? funnels.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-white p-4 md:p-10 text-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* HEADER & DOT NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-100 pb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">
              Strategic Funnel Portfolio
            </h1>
            <p className="text-slate-500 text-lg">
              Social Media Management & Conversion Frameworks
            </p>
          </div>

          {/* This loop ensures all your options show up as navigation dots */}
          <div className="flex gap-2">
            {funnels.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeFunnel ? 1 : -1);
                  setActiveFunnel(i);
                }}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  activeFunnel === i
                    ? "bg-slate-900 w-16"
                    : "bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* LEFT SIDE: THE ANIMATED FUNNEL */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden h-full">

              {/* Dynamic Glow - Changes color based on the current strategy */}
              <motion.div
                key={activeFunnel + "-glow"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ duration: 0.6 }}
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl ${current.accentClass}`}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeFunnel}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative z-10 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-2xl ${current.accentClass} text-white shadow-lg`}>
                      <Target size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{current.name}</h2>
                      <p className="text-sm text-slate-500 font-medium">
                        {current.useCase}
                      </p>
                    </div>
                  </div>

                  {/* Funnel Stages - Automatically adjusts to the length of 'stages' in your data */}
                  <div className="space-y-4 grow">
                    {current.stages.map((stage, i) => (
                      <motion.div
                        key={stage.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <div
                          className={`
                          flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl border bg-white
                          transition-all duration-300 hover:shadow-md ${current.borderClass}
                          ${i === 0 ? "mx-0" : i === 1 ? "md:mx-6" : "md:mx-12"}
                        `}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${current.lightBg} ${current.textClass}`}
                          >
                            0{i + 1}
                          </div>

                          <div className="flex-1 text-center md:text-left">
                            <h4 className="font-bold text-slate-900">
                              {stage.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-snug">
                              {stage.smm}
                            </p>
                          </div>

                          <div className="text-right hidden md:block">
                            <span className="text-[10px] font-black uppercase text-slate-400 block mb-1 tracking-widest">
                              KPI
                            </span>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-700">
                              {stage.kpi}
                            </span>
                          </div>
                        </div>

                        {i < current.stages.length - 1 && (
                          <div className="flex justify-center my-2">
                            <div className="w-0.5 h-6 bg-slate-200"></div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: STRATEGY DETAILS */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            <motion.div
              key={activeFunnel + "-strategy"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Lightbulb size={16} className="text-yellow-500" />
                Strategy Overview
              </h3>

              <p className="text-slate-700 font-medium mb-6 leading-relaxed">
                {current.objective}
              </p>

              <h4 className="text-xs font-bold text-slate-900 mb-3 italic">
                Example SMM Tactics:
              </h4>

              <ul className="space-y-4">
                {current.stages.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle
                      size={18}
                      className={`${current.textClass} mt-0.5 shrink-0`}
                    />
                    {s.content}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              key={activeFunnel + "-metrics"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={80} />
              </div>

              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <BarChart size={16} className="text-blue-400" />
                Success Metrics
              </h3>

              <div className="grid grid-cols-1 gap-3 relative z-10">
                {current.metrics.map((metric) => (
                  <motion.div
                    key={metric}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    <span className="text-sm font-medium">
                      {metric}
                    </span>
                    <TrendingUp size={14} className="text-emerald-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* NEXT/PREV CONTROLS */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={prev}
                className="flex items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <button
                onClick={next}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-lg transition-all"
              >
                Next Strategy <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}