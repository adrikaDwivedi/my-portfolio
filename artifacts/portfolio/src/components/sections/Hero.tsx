import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "https://github.com/adrikaDwivedi",        icon: <Github size={16} />,   testId: "github" },
  { href: "https://www.linkedin.com/in/adrika-dwiv/", icon: <Linkedin size={16} />, testId: "linkedin" },
  { href: "https://x.com/akdrinni",                   icon: <Twitter size={16} />,  testId: "x" },
  { href: "mailto:adrikad97@gmail.com",               icon: <Mail size={16} />,     testId: "email" },
];

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white dark:bg-gray-950 flex items-center overflow-hidden transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      {/* Left sidebar — hidden on mobile */}
      <div className="fixed left-0 top-0 bottom-0 z-40 w-12 md:w-14 hidden md:flex flex-col items-center justify-between py-10 border-r border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm transition-colors duration-300">
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {SOCIAL_LINKS.map(({ href, icon, testId }) => (
            <a
              key={testId}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              data-testid={`link-sidebar-${testId}`}
            >
              {icon}
            </a>
          ))}
        </div>
        <div
          className="text-[9px] tracking-[0.25em] text-gray-300 dark:text-gray-700 uppercase font-mono select-none flex-shrink-0"
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
            className="order-2 md:order-1 pt-4 md:pt-0"
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

            <div className="space-y-3 font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-[440px]">
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

            {/* Gap year note — subtle editorial aside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 max-w-[440px]"
            >
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 group">
                <p className="font-mono text-[9px] tracking-[0.3em] text-gray-300 dark:text-gray-600 uppercase mb-1.5">
                  2025 · Gap Year
                </p>
                <p className="font-mono text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed italic">
                  Stepped away briefly for bilateral MPFL reconstruction surgery —
                  two legs, two recoveries, one mindset. Used the time to learn,
                  reflect, and come back with sharper focus.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                data-testid="button-request-resume"
              >
                View Resume <ArrowRight size={12} />
              </motion.a>
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
              {SOCIAL_LINKS.map(({ href, icon, testId }) => (
                <a
                  key={testId}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
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
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 border border-gray-200 dark:border-gray-800" />
              <div className="relative border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 w-56 sm:w-64 md:w-60 lg:w-72 overflow-hidden">
                <img
                  src="/attached_assets/adrika-image.jpeg"
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
