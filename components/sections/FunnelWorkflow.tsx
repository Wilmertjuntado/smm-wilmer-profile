"use client";

import React, { useState } from "react";
import {
  Target,
  BarChart,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight, 
} from "lucide-react";

export default function FunnelWorkflow() {
  const [activeFunnel, setActiveFunnel] = useState(0);

  const funnels = [
    {
      name: "The Lead Magnet Funnel",
      useCase: "Ideal for B2B Services, Coaches, and Digital Products.",
      objective: "Build a database of warm leads via email opt-ins.",
      accentClass: "bg-blue-500",
      lightBg: "bg-blue-100",
      textClass: "text-blue-600",
      borderClass: "hover:border-blue-200",
      metrics: ["Cost Per Lead (CPL)", "Email Open Rate", "Opt-in %"],
      stages: [
        {
          title: "Awareness",
          smm: "Educational short-form content addressing core pain points.",
          content: "Hook-driven content leading to free value asset.",
          kpi: "Reach & Shares",
        },
        {
          title: "Interest",
          smm: "Carousel deep-dives explaining the solution.",
          content: "CTA directing traffic to landing page.",
          kpi: "Link Clicks",
        },
        {
          title: "Decision",
          smm: "Retargeting with testimonials and proof.",
          content: "Soft pitch toward paid offer.",
          kpi: "Conversions",
        },
      ],
    },
    {
      name: "The Invisible DM Funnel",
      useCase: "Best for Personal Brands & Consultants.",
      objective: "Turn engagement into high-ticket conversations.",
      accentClass: "bg-purple-500",
      lightBg: "bg-purple-100",
      textClass: "text-purple-600",
      borderClass: "hover:border-purple-200",
      metrics: ["Inbound DMs", "Inquiry to Call %", "Lead Quality"],
      stages: [
        {
          title: "Authority",
          smm: "High-value thought leadership posts.",
          content: "Positioning content that challenges norms.",
          kpi: "Saves & Profile Visits",
        },
        {
          title: "Engagement",
          smm: "Story polls & interactive engagement.",
          content: "Direct outreach to engaged users.",
          kpi: "Story Interaction",
        },
        {
          title: "Conversion",
          smm: "Hand-raiser posts with limited availability.",
          content: "Comment-triggered DM flow.",
          kpi: "DM Conversations",
        },
      ],
    },
  ];

  const current = funnels[activeFunnel];

  return (
    <section className="py-32 bg-linear-to-b from-white via-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Strategic Funnel Workflows
            </h2>
            <p className="text-neutral-500 mt-2">
              Structured conversion systems aligned with content and data.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Funnel Visual */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 relative overflow-hidden">
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-3xl ${current.accentClass}`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`p-3 rounded-2xl ${current.accentClass} text-white shadow-lg`}
                  >
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{current.name}</h3>
                    <p className="text-sm text-neutral-500">
                      {current.useCase}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {current.stages.map((stage, i) => (
                    <div key={i}>
                      <div
                        className={`flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl border bg-white transition-all duration-300 ${current.borderClass}
                        ${i === 0 ? "mx-0" : i === 1 ? "md:mx-6" : "md:mx-12"}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${current.lightBg} ${current.textClass}`}
                        >
                          0{i + 1}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <h4 className="font-bold">{stage.title}</h4>
                          <p className="text-sm text-neutral-600">
                            {stage.smm}
                          </p>
                        </div>

                        <div className="hidden md:block text-right">
                          <span className="text-xs font-bold text-neutral-400">
                            KPI
                          </span>
                          <div className="text-xs font-bold px-2 py-1 mt-1 rounded bg-neutral-100">
                            {stage.kpi}
                          </div>
                        </div>
                      </div>

                      {i < current.stages.length - 1 && (
                        <div className="flex justify-center my-2">
                          <div className="w-0.5 h-6 bg-neutral-200"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200">
              <h4 className="text-sm font-bold uppercase text-neutral-400 mb-4 flex items-center gap-2">
                <Lightbulb size={16} /> Strategy Overview
              </h4>
              <p className="text-neutral-700 mb-6">
                {current.objective}
              </p>

              <ul className="space-y-3">
                {current.stages.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle
                      size={16}
                      className={`${current.textClass} mt-1`}
                    />
                    {s.content}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 text-white p-6 rounded-2xl">
              <h4 className="text-sm font-bold uppercase text-neutral-400 mb-4 flex items-center gap-2">
                <BarChart size={16} /> Success Metrics
              </h4>
              <div className="space-y-3">
                {current.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5"
                  >
                    <span className="text-sm">{metric}</span>
                    <TrendingUp size={14} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  setActiveFunnel(
                    activeFunnel === 0
                      ? funnels.length - 1
                      : activeFunnel - 1
                  )
                }
                className="p-4 rounded-xl border border-neutral-200 text-sm font-bold hover:bg-neutral-50"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={() =>
                  setActiveFunnel((activeFunnel + 1) % funnels.length)
                }
                className="p-4 rounded-xl bg-neutral-900 text-white text-sm font-bold hover:bg-neutral-800"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
