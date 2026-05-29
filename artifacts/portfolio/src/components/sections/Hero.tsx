import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white dark:bg-gray-950 flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      {/* Left sidebar — hidden on mobile */}
      <div className="fixed left-0 top-0 bottom-0 z-40 w-12 md:w-14 hidden md:flex flex-col items-center justify-between py-10 border-r border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm transition-colors duration-300">
        <div className="flex flex-col items-center gap-5 mt-20">
          <a href="https://github.com/adrikaDwivedi" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" data-testid="link-sidebar-github">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/adrika-dwiv/" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" data-testid="link-sidebar-linkedin">
            <Linkedin size={16} />
          </a>
          <a href="https://x.com/akdrinni" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" data-testid="link-sidebar-x">
            <Twitter size={16} />
          </a>
          <a href="mailto:adrikad97@gmail.com"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" data-testid="link-sidebar-email">
            <Mail size={16} />
          </a>
        </div>
        <div
          className="text-[9px] tracking-[0.25em] text-gray-300 dark:text-gray-700 uppercase font-mono select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          adrika.dev
        </div>
      </div>

      {/* Main content */}
      <div className="w-full md:pl-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 grid md:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1 pt-16 md:pt-0"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-5 h-0.5 bg-red-700" />
              <span className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase font-mono">
                Introduction
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[68px] font-black leading-[1.05] tracking-tight text-gray-950 dark:text-white mb-6 md:mb-8">
              Hello, my name is{" "}
              <span className="text-red-700 dark:text-red-500">Adrika.</span>
            </h1>

            <div className="space-y-3 font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-[440px]">
              <p>
                My areas of interest include{" "}
                <strong className="text-gray-900 dark:text-gray-100">mobile development</strong>, building
                polished UI/UX, and contributing to{" "}
                <strong className="text-gray-900 dark:text-gray-100">open source</strong>.
              </p>
              <p>
                With a{" "}
                <strong className="text-gray-900 dark:text-gray-100">user-first focus</strong>, I enjoy
                creating clean and scalable solutions that improve application performance, ease of
                maintenance, and user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("/resume.pdf")}
                className="inline-flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                data-testid="button-request-resume"
              >
                Request Resume <ArrowRight size={12} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 border border-gray-900 dark:border-gray-400 text-gray-900 dark:text-gray-300 px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                data-testid="button-contact-me"
              >
                Contact Me
              </motion.button>
            </div>

            {/* Mobile social links */}
            <div className="flex items-center gap-5 mt-8 md:hidden">
              {[
                { href: "https://github.com/adrikaDwivedi", icon: <Github size={17} /> },
                { href: "https://www.linkedin.com/in/adrika-dwiv/", icon: <Linkedin size={17} /> },
                { href: "https://x.com/akdrinni", icon: <Twitter size={17} /> },
                { href: "mailto:adrikad97@gmail.com", icon: <Mail size={17} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column — photo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center items-center pt-20 md:pt-0"
          >
            <div className="relative">
              {/* Shadow offset frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-gray-200 dark:border-gray-800" />
              {/* Main card */}
              <div className="relative border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 w-56 sm:w-64 md:w-60 lg:w-72 overflow-hidden">
                <img
                  src="/adrika.jpeg"
                  alt="Adrika Dwivedi"
                  className="w-full object-cover object-top"
                  style={{ height: "340px" }}
                />
                <div className="bg-gray-950 dark:bg-gray-800 text-white px-3 py-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">S.E. @ India</span>
                  <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase">React Native</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
