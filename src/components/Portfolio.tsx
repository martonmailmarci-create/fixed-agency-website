"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    desc: "A comprehensive financial analytics platform for enterprise clients.",
    gradient: "from-blue-600 to-cyan-500",
    slug: "fintech-dashboard",
  },
  {
    title: "Neon Commerce",
    category: "E-Commerce",
    desc: "High-performance headless Shopify storefront with 3D product previews.",
    gradient: "from-purple-600 to-pink-500",
    slug: "neon-commerce",
  },
  {
    title: "AI Chat Interface",
    category: "SaaS Product",
    desc: "Conversational AI interface design with real-time data visualization.",
    gradient: "from-green-600 to-emerald-500",
    slug: "ai-chat-interface",
  },
  {
    title: "Crypto Exchange",
    category: "Web3 Platform",
    desc: "Secure and intuitive trading platform for next-gen digital assets.",
    gradient: "from-orange-600 to-red-500",
    slug: "crypto-exchange",
  },
];

export default function Portfolio() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-xl"
            >
              Explore our latest projects where design meets technology.
            </motion.p>
        </div>
        
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <Link 
                href="/portfolio" 
                className="group flex items-center gap-2 text-white font-medium hover:text-primary transition-colors"
            >
                View All Projects <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
      </div>

      <SectionReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
            style={{ perspective: 1000 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-muted will-change-transform"
          >
            {/* Background Gradient / Image Placeholder */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />
            
            {/* Hover Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

            <Link href={`/portfolio/${project.slug}`} className="absolute inset-0" aria-label={`${project.title} case study`} />
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <span className="text-primary font-medium mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 max-w-md">
                        {project.desc}
                    </p>
                    <Link href={`/portfolio/${project.slug}`} className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        View Case Study <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
          </motion.div>
        ))}
      </SectionReveal>
    </section>
  );
}
