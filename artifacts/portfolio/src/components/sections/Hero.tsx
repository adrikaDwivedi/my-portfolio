import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white dark:bg-gray-950 flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      {/* Left sidebar */}
      <div className="fixed left-0 top-0 bottom-0 z-40 w-14 hidden md:flex flex-col items-center justify-between py-10 border-r border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm transition-colors duration-300">
        <div className="flex flex-col items-center gap-5 mt-20">
          <a
            href="https://github.com/adrikaDwivedi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            data-testid="link-sidebar-github"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrika-dwiv/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            data-testid="link-sidebar-linkedin"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://x.com/akdrinni"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            data-testid="link-sidebar-x"
          >
            <Twitter size={17} />
          </a>
          <a
            href="mailto:adrikad97@gmail.com"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            data-testid="link-sidebar-email"
          >
            <Mail size={17} />
          </a>
        </div>
        <div
          className="text-[10px] tracking-[0.25em] text-gray-300 dark:text-gray-700 uppercase font-mono"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          adrika.dev
        </div>
      </div>

      {/* Main content */}
      <div className="w-full pl-14 md:pl-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-0.5 bg-red-700" />
              <span className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase font-mono">
                Introduction
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.05] tracking-tight text-gray-950 dark:text-white mb-8">
              Hello, my name is{" "}
              <span className="text-red-700 dark:text-red-500">Adrika.</span>
            </h1>

            <div className="space-y-4 font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-[440px]">
              <p>
                My areas of interest include{" "}
                <strong className="text-gray-900 dark:text-gray-100">mobile development</strong>, building
                polished UI/UX, and contributing to{" "}
                <strong className="text-gray-900 dark:text-gray-100">open source</strong>.
              </p>
              <p>
                With a{" "}
                <strong className="text-gray-900 dark:text-gray-100">user-first focus</strong>, I enjoy
                creating clean and scalable solutions that improve application
                performance, ease of maintenance, and user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("/resume.pdf")}
                className="inline-flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-7 py-3.5 text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                data-testid="button-request-resume"
              >
                Request Resume <ArrowRight size={13} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 border border-gray-900 dark:border-gray-400 text-gray-900 dark:text-gray-300 px-7 py-3.5 text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                data-testid="button-contact-me"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Right column — framed visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gray-200 dark:border-gray-800" />
              <div className="relative border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 w-64 h-80 lg:w-72 lg:h-96 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 dark:from-gray-800 via-gray-100 dark:via-gray-850 to-gray-200 dark:to-gray-900 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-white tracking-tighter">AD</span>
                  </div>
                  <div className="text-center px-6">
                    <p className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">Software Engineer</p>
                    <p className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">React Native Dev</p>
                  </div>
                  <div className="absolute bottom-16 left-0 right-0 flex flex-col gap-1.5 px-6">
                    <div className="h-px bg-gray-200 dark:bg-gray-700" />
                    <div className="h-px bg-gray-200 dark:bg-gray-700 opacity-60" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-950 dark:bg-gray-800 text-white px-3 py-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">S.E. @ India</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
