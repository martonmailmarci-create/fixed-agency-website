"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We dive deep into your business goals and audience needs.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Crafting intuitive interfaces and stunning visual systems.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Building robust, scalable solutions with clean code.",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Rocket,
    title: "Scale",
    desc: "Optimizing for growth and ensuring long-term success.",
    color: "from-orange-400 to-red-400",
  },
];

export default function Process() {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          How We Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          A streamlined process tailored for efficiency and excellence.
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Desktop Connector Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Mobile Connector Line (Vertical) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden absolute top-24 bottom-[-48px] left-1/2 -translate-x-1/2 w-0.5 bg-white/10" />
              )}

              {/* Step Number Badge */}
              <div className="absolute -top-12 opacity-20 text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent select-none">
                0{index + 1}
              </div>

              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-white/30 transition-colors shadow-lg">
                <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <step.icon size={32} className="text-white relative z-10" />
                
                {/* Active Ring Animation */}
                <motion.div 
                    className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100`}
                    style={{ maskImage: "linear-gradient(white, white)", WebkitMaskComposite: "destination-out", maskComposite: "exclude" }}
                    layoutId={`ring-${index}`}
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
