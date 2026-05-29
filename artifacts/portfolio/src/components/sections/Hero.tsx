import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Code2, Smartphone, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const TITLES = [
  "Mobile App Developer",
  "Frontend Engineer",
  "React Native Developer",
  "Problem Solver"
];

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 px-6 relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 py-1.5 px-4 font-mono">
            Available for opportunities
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            Hi, I'm <span className="text-gradient-amber">Adrika</span><br />
            Dwivedi.
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 h-8 flex items-center">
            <span className="text-primary mr-2">&gt;</span> 
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {TITLES[titleIndex]}
            </motion.span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-6 bg-primary ml-1 align-middle"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            I build polished, high-performance mobile and web products that feel alive. 
            Obsessed with fluid interfaces and flawless user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollTo("projects")} size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] font-semibold px-8 h-12">
              View Projects
            </Button>
            <Button onClick={() => window.open('/resume.pdf')} variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all font-semibold px-8 h-12">
              Download Resume
            </Button>
            <Button onClick={() => scrollTo("contact")} variant="ghost" size="lg" className="rounded-full hover:bg-white/5 hover:text-primary transition-all font-semibold px-8 h-12">
              Contact Me
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-12">
            <a href="https://github.com/adrika-dwivedi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/adrika-dwivedi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:example@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center relative"
        >
          {/* Abstract Centerpiece */}
          <div className="relative w-full max-w-md aspect-square">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-secondary/20 border-dashed"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                <Code2 size={64} className="text-primary/80" />
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-card border border-white/10 flex items-center justify-center shadow-lg"
            >
              <Smartphone size={24} className="text-secondary" />
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-4 w-16 h-16 rounded-xl bg-card border border-white/10 flex items-center justify-center shadow-lg"
            >
              <Terminal size={24} className="text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
