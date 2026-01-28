"use client";

import { motion } from "framer-motion";
import { Palette, Code, Bot, Layers } from "lucide-react";
import SectionReveal from "./SectionReveal";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Crafting intuitive and visually stunning interfaces that engage and delight users.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Building scalable, high-performance web applications using modern tech stacks.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    desc: "Leveraging artificial intelligence to automate workflows and enhance user experiences.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Layers,
    title: "Brand Systems",
    desc: "Developing cohesive design systems that ensure consistency across all touchpoints.",
    gradient: "from-orange-400 to-red-500",
  },
];

export default function Services() {
  return (
    <section className="container mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Our Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          We deliver cutting-edge solutions tailored to your business needs.
        </motion.p>
      </div>

      <SectionReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, rotateX: -2, rotateY: 2 }}
            style={{ perspective: 1000 }}
            className="bg-card border border-white/5 p-8 rounded-2xl relative group overflow-hidden will-change-transform"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            <div className={`absolute -inset-px bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10`} />
            
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/10 group-hover:border-white/20">
              <service.icon size={28} className="group-hover:text-primary transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed relative z-10 group-hover:text-white/80 transition-colors">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </SectionReveal>
    </section>
  );
}
