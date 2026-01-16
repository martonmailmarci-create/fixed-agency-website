"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$4,900",
    desc: "Essential website for early-stage validation.",
    features: [
      "Up to 5 pages",
      "Tailored brand styling",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "2 weeks timeline",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$12,900",
    desc: "Conversion-focused site built to scale.",
    features: [
      "Up to 12 pages",
      "High-end UI/UX",
      "CMS & blog",
      "Performance optimization",
      "Advanced SEO",
      "3rd‑party integrations",
      "4–6 weeks timeline",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Enterprise-grade experience with bespoke systems.",
    features: [
      "Unlimited pages",
      "Design system",
      "Complex integrations",
      "Security hardening",
      "Accessibility AA",
      "Analytics & A/B testing",
      "Ongoing support",
    ],
    highlight: false,
  },
];

const included = [
  "Discovery & strategy workshop",
  "Competitor analysis",
  "Wireframes and prototypes",
  "Design iterations and approvals",
  "QA across devices and browsers",
  "Deployment and handover",
];

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="container mx-auto px-6 py-20 pt-32 text-center relative">
        <motion.h1
          initial={false}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Simple, <span className="relative inline-block">Transparent
            <span className="absolute left-0 top-full h-[2px] w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 mt-2" />
          </span> Pricing
        </motion.h1>
        <motion.p
          initial={false}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto mt-4"
        >
          Flexible packages designed to scale with your business.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={false}
              transition={{ duration: 0.5, ease: easeOut, delay: idx * 0.08 }}
              className={`relative rounded-2xl border p-8 bg-white/7 backdrop-blur-xl ${
                plan.highlight
                  ? "border-white/30 shadow-[0_40px_120px_-40px_rgba(0,255,163,0.35)]"
                  : "border-white/15"
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    plan.highlight ? "border-emerald-400/50 text-emerald-300" : "border-white/20 text-white/70"
                  }`}>
                    {plan.highlight ? "Recommended" : "Flexible"}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.desc}</p>

                <div className="mt-6">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight">{plan.price}</div>
                  <p className="text-white/60 text-sm mt-1">Fixed project rate</p>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                        <Check size={14} />
                      </span>
                      <span className="text-white/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] ${
                      plan.highlight ? "" : "opacity-90"
                    }`}
                  >
                    Start Project
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold border border-white/30 text-white/90 bg-white/7 transition-all duration-200 hover:bg-white/12 hover:border-white/40"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 relative">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="text-3xl md:text-4xl font-bold"
          >
            What’s Included
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
            className="text-muted-foreground mt-3"
          >
            Every engagement follows a proven process and delivers production‑ready outcomes.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {included.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: easeOut, delay: i * 0.05 }}
              className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-card"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                <Check size={16} />
              </span>
              <span className="text-white/90">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
