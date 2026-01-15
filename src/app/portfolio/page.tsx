export default function PortfolioPage() {
  const projects = [
    { title: "FinTech Dashboard", category: "Web App", gradient: "from-blue-500 to-cyan-500" },
    { title: "AI Analytics", category: "Data Visualization", gradient: "from-purple-500 to-pink-500" },
    { title: "E-Commerce", category: "Online Store", gradient: "from-green-500 to-emerald-500" },
    { title: "Social Network", category: "Mobile App", gradient: "from-orange-500 to-red-500" },
    { title: "Crypto Exchange", category: "Web Platform", gradient: "from-indigo-500 to-violet-500" },
    { title: "Health Tracker", category: "IoT Interface", gradient: "from-teal-500 to-lime-500" },
  ];

  return (
    <div className="container mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Our Work</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        A showcase of our most ambitious and successful projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border cursor-pointer">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                 <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                 <span className="text-sm font-medium bg-white/10 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
            </div>
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
