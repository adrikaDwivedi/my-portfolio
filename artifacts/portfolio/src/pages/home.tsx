import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { OpenSource } from "@/components/sections/OpenSource";
import { Contact } from "@/components/sections/Contact";

const NAV_ITEMS = [
  { label: "PROFILE",     id: "hero" },
  { label: "PROJECTS",    id: "projects" },
  { label: "TOOLKIT",     id: "techstack" },
  { label: "OPEN SOURCE", id: "opensource" },
  { label: "CONTACT",     id: "contact" },
];

const SECTIONS = ["hero", "projects", "techstack", "opensource", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      for (const section of SECTIONS) {
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
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const isDark  = theme === "dark";
  const onHero  = !isScrolled && !isDark;

  const navBg  = onHero  ? "bg-white/95 backdrop-blur-sm border-b border-gray-100"
                         : isDark ? "bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50"
                         : "bg-white/90 backdrop-blur-md border-b border-gray-200/70";

  const logoClass  = onHero  ? "text-gray-950 hover:text-red-700"
                              : isDark ? "text-white hover:text-red-400"
                              : "text-gray-950 hover:text-red-700";

  const moonClass  = onHero  ? "text-gray-400 hover:text-gray-900"
                              : isDark ? "text-gray-400 hover:text-white"
                              : "text-gray-500 hover:text-gray-900";

  const navItemClass = (id: string) => {
    const isActive = activeSection === id;
    if (onHero)  return isActive ? "text-gray-950 border-b-2 border-gray-950" : "text-gray-400 hover:text-gray-700";
    if (isDark)  return isActive ? "text-white border-b-2 border-white"       : "text-gray-500 hover:text-gray-200";
    return              isActive ? "text-gray-950 border-b-2 border-gray-950" : "text-gray-400 hover:text-gray-700";
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="pl-14 md:pl-20 pr-6">
          <div className="flex items-center justify-between h-14 px-8">
            <button
              onClick={() => scrollTo("hero")}
              className={`font-black text-base tracking-tight transition-colors ${logoClass}`}
              data-testid="button-nav-logo"
            >
              ADRIKA.
            </button>

            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  data-testid={`button-nav-${id}`}
                  className={`text-[11px] tracking-[0.22em] font-semibold uppercase transition-colors pb-0.5 ${navItemClass(id)}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
                className={`transition-colors ${moonClass}`}
                data-testid="button-theme-toggle"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <button
                className={`md:hidden transition-colors ${isDark ? "text-white" : "text-gray-700"}`}
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
            className={`fixed inset-0 z-40 pt-14 px-8 md:hidden flex flex-col items-center justify-center gap-8 ${isDark ? "bg-gray-950" : "bg-white"}`}
          >
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-2xl font-black tracking-tight transition-colors ${isDark ? "text-white hover:text-red-400" : "text-gray-950 hover:text-red-700"}`}
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
        <Projects />
        <TechStack scrollTo={scrollTo} />
        <OpenSource />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-5 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-600 uppercase">
            ADRIKA. &copy; {new Date().getFullYear()} Adrika Dwivedi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub",   href: "https://github.com/adrikaDwivedi" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/adrika-dwiv/" },
              { label: "X",        href: "https://x.com/akdrinni" },
              { label: "Email",    href: "mailto:adrikad97@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-600 uppercase hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid={`link-footer-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
