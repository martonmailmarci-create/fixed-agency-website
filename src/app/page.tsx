import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      <Services />

      <Process />

      <Portfolio />

      <Testimonials />

      <ContactSection />
    </div>
  );
}
