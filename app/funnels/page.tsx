import type { Metadata } from "next";
import FunnelWorkflow from "@/components/sections/FunnelWorkflow";

export const metadata: Metadata = {
  title: "Strategic Funnel Systems | Wilmer Juntado",
  description:
    "Explore structured social media and conversion funnel systems designed to turn traffic into measurable revenue.",
};

export default function FunnelsPage() {
  return (
    <main className="bg-white text-neutral-900">

      {/* Hero */}
      <section className="py-32 bg-linear-to-b from-neutral-950 via-black to-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Conversion Funnel Architectures
          </h1>
          <p className="mt-6 text-neutral-400 text-lg">
            Strategic workflows designed to transform traffic into
            leads, conversations, and revenue.
          </p>
        </div>
      </section>

      {/* Funnel Workflow Component */}
      <FunnelWorkflow />

      {/* Strategic Positioning Block */}
      <section className="py-24 bg-linear-to-b from-white via-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Funnels Are Not Just Marketing Tactics
          </h2>
          <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
            Each funnel is engineered around behavioral psychology,
            attention flow, and conversion optimization principles.
            Social media becomes the entry point — not the end goal.
          </p>
        </div>
      </section>

    </main>
  );
}
