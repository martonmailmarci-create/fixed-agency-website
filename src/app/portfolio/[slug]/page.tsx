import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyClient from "@/components/CaseStudyClient";

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
  return <CaseStudyClient cs={cs} />;
}
