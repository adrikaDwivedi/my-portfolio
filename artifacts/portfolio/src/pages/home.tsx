import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Menu, X } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Dashboard } from "@/components/sections/Dashboard";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

const NAV_ITEMS = [
  { label: "PROFILE", id: "hero" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = ["hero", "about", "skills", "projects", "experience", "dashboard", "achievements", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  const onHero = !isScrolled;

  return (
    <div className="relative w-full overflow-x-hidden">

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          onHero
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
            : "bg-background/90 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="pl-14 md:pl-20 pr-6">
          <div className="flex items-center justify-between h-14 px-8">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className={`font-black text-base tracking-tight transition-colors ${onHero ? "text-gray-950 hover:text-red-700" : "text-foreground hover:text-primary"}`}
              data-testid="button-nav-logo"
            >
              ADRIKA.
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(({ label, id }) => {
                const isActive = activeSection === id || (id === "hero" && activeSection === "hero");
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    data-testid={`button-nav-${id}`}
                    className={`text-[11px] tracking-[0.22em] font-semibold uppercase transition-colors relative pb-0.5 ${
                      onHero
                        ? isActive
                          ? "text-gray-950 border-b-2 border-gray-950"
                          : "text-gray-400 hover:text-gray-700"
                        : isActive
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Right: Dark mode icon + mobile menu */}
            <div className="flex items-center gap-4">
              <button
                className={`transition-colors ${onHero ? "text-gray-400 hover:text-gray-900" : "text-muted-foreground hover:text-foreground"}`}
                data-testid="button-theme-toggle"
                aria-label="Toggle theme"
              >
                <Moon size={17} />
              </button>
              <button
                className={`md:hidden transition-colors ${onHero ? "text-gray-700" : "text-foreground"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed inset-0 z-40 pt-14 px-8 md:hidden flex flex-col items-center justify-center gap-8 ${
              onHero ? "bg-white" : "bg-background"
            }`}
          >
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-2xl font-black tracking-tight transition-colors ${
                  onHero ? "text-gray-950 hover:text-red-700" : "text-foreground hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sections */}
      <main>
        <Hero scrollTo={scrollTo} />

        {/* Dark sections below */}
        <div className="dark bg-background text-foreground">
          <div className="fixed inset-0 z-0 pointer-events-none top-[100vh]">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen" />
          </div>
          <div className="relative z-10">
            <Projects />
            <Experience />
            <Dashboard />
            <Achievements />
            <Contact />
          </div>
          <footer className="relative z-10 py-8 text-center border-t border-white/5">
            <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Adrika Dwivedi. Designed & Built with intent.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
