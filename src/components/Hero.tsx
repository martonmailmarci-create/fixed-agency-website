"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,163,0.08)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary/80 mb-8 backdrop-blur-sm">
              The Future of Digital Innovation
            </span>
          </motion.div>

          <motion.h1 style={{ y: headlineY }} variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            We Design, Build and <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 glow-text">
              Scale Digital Experiences.
            </span>
          </motion.h1>

          <motion.p style={{ y: subY }} variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We are a futuristic agency merging creativity with cutting-edge technology. 
            We transform visionary ideas into high-performance digital products that define brands.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-5 justify-center items-center w-full md:w-auto">
            <MagneticButton className="w-full md:w-auto">
              <Link 
                href="/contact" 
                className="group bg-primary text-black font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 glow shadow-[0_0_30px_-10px_rgba(0,255,163,0.6)] w-full md:w-auto justify-center"
              >
                Start Your Project 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <Link 
              href="/portfolio" 
              className="group bg-white/5 border border-white/10 text-white font-medium py-4 px-10 rounded-full hover:bg-white/10 transition-all w-full md:w-auto justify-center flex items-center hover:border-white/20"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
