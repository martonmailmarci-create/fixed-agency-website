"use client";

import Link from "next/link";
import { motion, easeOut } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-32 pb-16 mt-auto relative">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative -mt-28 mb-20 rounded-3xl overflow-hidden border border-white/20 bg-white/7 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(0,255,163,0.4)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/12 via-cyan-400/12 to-transparent opacity-70" />
          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to scale?</h3>
              <p className="text-white/80 mt-2">
                Let&apos;s build something extraordinary together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 glow"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold border border-white/30 text-white/90 bg-white/7 transition-all duration-200 hover:bg-white/12 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">Nebula.ai</h2>
            <p className="text-white/75 text-sm mt-3">
              Pioneering the future of web development with AI-driven design and enterprise-grade performance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Company Link 1</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Company Link 2</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Company Link 3</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Services Link 1</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Services Link 2</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Services Link 3</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Resources Link 1</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Resources Link 2</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Resources Link 3</Link></li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
            <p className="text-white/70 text-xs">© 2024 Nebula Digital. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs">
              <Link href="#" className="text-white/70 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-white/70 hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
