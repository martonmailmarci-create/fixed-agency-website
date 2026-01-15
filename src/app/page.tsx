import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      <Services />

      <Process />

      <Portfolio />

      <ContactSection />

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Let&apos;s collaborate to build something extraordinary.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-primary text-black font-semibold py-3 px-8 rounded-full hover:bg-primary/90 transition-all hover:scale-105 inline-flex items-center gap-2 glow"
                >
                  Get in Touch <ArrowRight size={18} />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
