"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { submitBooking } from "@/app/actions/booking";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function handleAction(formData: FormData) {
    setIsPending(true);
    const result = await submitBooking(formData);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
    setIsPending(false);
  }

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

          <div className="relative min-h-112.5">
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
                  {/* Note: We use the client wrapper here */}
                  <form action={handleAction} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Full Name</label>
                      <input 
                        name="name" 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none transition" 
                        placeholder="Wilmer Juntado" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Email Address</label>
                      <input 
                        name="email" 
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none transition" 
                        placeholder="you@example.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Growth Goals</label>
                      <textarea 
                        name="goals" 
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none transition resize-none" 
                        placeholder="Tell me about your brand goals..." 
                        required 
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold hover:bg-neutral-800 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isPending ? <Loader2 className="animate-spin" size={20} /> : "Confirm Booking"}
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
                  <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                  <p className="mt-2 text-neutral-600">
                    Your growth strategy inquiry has been saved to our database. I&#39;ll reach out via email shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold underline decoration-2 underline-offset-4 hover:text-blue-600 transition"
                  >
                    Submit another inquiry
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