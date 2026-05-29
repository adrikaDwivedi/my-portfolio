import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Dashboard } from "@/components/sections/Dashboard";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "skills", "projects", "experience", "dashboard", "achievements", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter text-foreground cursor-pointer" onClick={() => scrollTo("hero")}>
            <span className="text-primary">&lt;</span>AD<span className="text-primary">/&gt;</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Experience", "Dashboard", "Achievements"].map((item) => {
              const id = item.toLowerCase();
              return (
                <button 
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === id ? "text-primary" : "text-muted-foreground"}`}
                >
                  {item}
                </button>
              );
            })}
            <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6">
              Hire Me
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {["About", "Skills", "Projects", "Experience", "Dashboard", "Achievements", "Contact"].map((item) => {
                const id = item.toLowerCase();
                return (
                  <button 
                    key={item}
                    onClick={() => scrollTo(id)}
                    className="text-2xl font-bold text-foreground hover:text-primary"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Dashboard />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="relative z-10 py-8 text-center border-t border-white/5 bg-background">
        <p className="text-muted-foreground text-sm font-mono">
          &copy; {new Date().getFullYear()} Adrika Dwivedi. Designed & Built with intent.
        </p>
      </footer>
    </div>
  );
}
