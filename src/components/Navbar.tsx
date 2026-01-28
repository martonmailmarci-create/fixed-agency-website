"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-background/5 backdrop-blur-md",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors z-50">
            AGENCY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 mr-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-primary mt-1"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <Link
                href="/contact"
                className="text-sm font-bold bg-gradient-to-r from-primary to-secondary text-black px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity glow"
              >
                Start Project
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "text-2xl font-bold tracking-tight",
                    pathname === link.href ? "text-primary" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold bg-gradient-to-r from-primary to-secondary text-black px-6 py-4 rounded-xl text-center"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
