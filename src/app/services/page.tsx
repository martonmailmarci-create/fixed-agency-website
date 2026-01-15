import { Code, Palette, Smartphone, Globe, BarChart, Cloud } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Crafting intuitive and visually stunning interfaces that drive engagement." },
  { icon: Code, title: "Web Development", desc: "Building scalable, high-performance web applications using modern tech stacks." },
  { icon: Smartphone, title: "Mobile App Dev", desc: "Native and cross-platform mobile solutions for iOS and Android." },
  { icon: Globe, title: "SEO Optimization", desc: "Improving visibility and ranking to drive organic traffic." },
  { icon: BarChart, title: "Digital Marketing", desc: "Data-driven campaigns to grow your brand and reach your audience." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure management." },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Our Services</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Comprehensive digital solutions designed to propel your business forward.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <service.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
