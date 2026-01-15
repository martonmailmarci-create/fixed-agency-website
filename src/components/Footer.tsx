import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14 mt-auto">
      <div className="container mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">AGENCY</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Building the digital future.
            </p>
          </div>
          <nav className="flex flex-wrap md:justify-center gap-x-6 gap-y-3 text-sm">
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/process" className="text-muted-foreground hover:text-primary transition-colors">Process</Link>
            <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/enterprise" className="text-muted-foreground hover:text-primary transition-colors">Enterprise</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex md:justify-end gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Agency Inc. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Crafted with precision for enterprises and AI startups.
          </p>
        </div>
      </div>
    </footer>
  );
}
