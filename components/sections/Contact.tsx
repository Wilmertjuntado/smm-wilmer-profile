"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Ready to build a <br /> 
              <span className="text-neutral-400 font-normal italic">predictable growth system?</span>
            </h2>
            <p className="mt-6 text-neutral-400 text-lg max-w-md">
              Stop random posting. Let&lsquo;s engineer a funnel that turns attention into measurable revenue.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-neutral-400 group-hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </div>
                <p className="font-medium text-neutral-200">wilmer@email.com</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-neutral-400 group-hover:bg-white/10 transition-colors">
                  <Calendar size={20} />
                </div>
                <p className="font-medium text-neutral-200">Mon — Fri, 9am - 5pm EST</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-8 rounded-3xl text-neutral-900 shadow-2xl"
                >
                  <h3 className="text-xl font-bold mb-6">Inquiry Form</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full p-4 bg-neutral-100 rounded-xl border-none focus:ring-2 focus:ring-black transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Email Address</label>
                      <input required type="email" placeholder="john@company.com" className="w-full p-4 bg-neutral-100 rounded-xl border-none focus:ring-2 focus:ring-black transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Message</label>
                      <textarea required placeholder="Tell me about your goals..." rows={4} className="w-full p-4 bg-neutral-100 rounded-xl border-none focus:ring-2 focus:ring-black transition"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-black text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg">
                      Send Message
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-3xl text-neutral-900 shadow-2xl flex flex-col items-center justify-center text-center h-full absolute inset-0"
                >
                  <CheckCircle2 size={64} className="text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-neutral-600">
                    Thanks for reaching out. I&#39;ll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}