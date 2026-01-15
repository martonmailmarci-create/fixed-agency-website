export default function ProcessPage() {
  const steps = [
    { number: "01", title: "Discovery", desc: "We analyze your goals, audience, and competitors to build a solid foundation." },
    { number: "02", title: "Strategy", desc: "We create a roadmap and define the technical stack and design direction." },
    { number: "03", title: "Design", desc: "We craft high-fidelity mockups and interactive prototypes for your review." },
    { number: "04", title: "Development", desc: "We bring designs to life with clean, efficient, and scalable code." },
    { number: "05", title: "Launch", desc: "We deploy your project and ensure everything runs smoothly." },
    { number: "06", title: "Growth", desc: "We provide ongoing support and optimization to help you scale." },
  ];

  return (
    <div className="container mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Our Process</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        A streamlined approach to delivering exceptional results.
      </p>

      <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
            
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-primary bg-background shadow shrink-0 z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full glow" />
            </div>
            
            <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors ml-auto md:ml-0">
              <span className="text-5xl font-bold text-white/5 absolute top-4 right-4">{step.number}</span>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground relative z-10">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
