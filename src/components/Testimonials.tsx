"use client";

import { motion, easeOut } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text:
      "Nebula transformed our outdated site into a lead-generating machine. The AI integrations saved us 20 hours a week.",
    name: "Elena R.",
    title: "CMO, Vortex Tech",
  },
  {
    text:
      "The design team is world-class. They captured our brand voice perfectly and delivered a stunning, fast website.",
    name: "Marcus J.",
    title: "Founder, Aura Systems",
  },
  {
    text:
      "Professional, timely, and innovative. They didn’t just build a website; they built a digital asset for our future.",
    name: "Sarah L.",
    title: "Director, Echo Ventures",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Trusted <span className="underline decoration-emerald-400/60 underline-offset-[10px]">by</span> Visionaries
        </h2>
      </div>
      <SectionReveal className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl p-10 bg-[rgba(255,255,255,0.06)] border border-white/20 backdrop-blur-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.55)] transition-all duration-500 will-change-transform"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <Quote className="absolute top-6 left-6 text-emerald-400/80" size={28} />
            <p className="italic text-lg text-white mt-12 leading-relaxed">
              {t.text}
            </p>
            <div className="mt-8">
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-muted-foreground pl-3 border-l-2 border-emerald-400/50">
                {t.title}
              </div>
            </div>
          </motion.div>
        ))}
      </SectionReveal>
    </section>
  );
}
