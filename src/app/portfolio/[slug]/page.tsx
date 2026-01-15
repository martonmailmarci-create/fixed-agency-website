"use client";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { motion, easeOut, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} Case Study`,
    description: cs.summary,
    alternates: { canonical: `/portfolio/${cs.slug}` },
    openGraph: {
      title: `${cs.title} Case Study`,
      description: cs.summary,
      type: "article",
      url: `/portfolio/${cs.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);

  return (
    <div ref={ref} className="container mx-auto px-6 py-20">
      <section className="relative rounded-3xl overflow-hidden border border-white/10 mb-12">
        <div className={`absolute inset-0 bg-gradient-to-br ${cs.heroGradient} opacity-25`} />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 p-10 md:p-16">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">{cs.title}</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">{cs.summary}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {cs.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-3xl font-bold">{m.value}</div>
                <div className="text-muted-foreground text-sm mt-2">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.content.overview}</p>
          <h2 className="text-2xl font-bold">Challenges</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.content.challenges}</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Solution</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.content.solution}</p>
          <h2 className="text-2xl font-bold">Results</h2>
          <p className="text-muted-foreground leading-relaxed">{cs.content.results}</p>
        </div>
      </section>

      <section className="mt-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Interested in similar outcomes?</h3>
          <p className="text-muted-foreground mb-8">Let’s apply these learnings to your product.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
