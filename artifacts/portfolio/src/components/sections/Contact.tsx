import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ELSEWHERE = [
  { label: "GitHub",   value: "@adrikaDwivedi",    href: "https://github.com/adrikaDwivedi" },
  { label: "LinkedIn", value: "adrika-dwiv",        href: "https://www.linkedin.com/in/adrika-dwiv/" },
  { label: "X",        value: "@akdrinni",           href: "https://x.com/akdrinni" },
  { label: "Email",    value: "adrikad97@gmail.com", href: "mailto:adrikad97@gmail.com" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-0.5 bg-red-700" />
            <span className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase font-mono">
              Get in touch
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-950 dark:text-white leading-none mb-6">
            CONTACT!
          </h2>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mb-5">
            Feel free to reach out if you want to build something together, have a question, or just want to connect.
          </p>
          <a
            href="mailto:adrikad97@gmail.com"
            className="font-black text-xl md:text-2xl text-gray-950 dark:text-white hover:text-red-700 dark:hover:text-red-400 transition-colors tracking-tight"
            data-testid="link-email-header"
          >
            adrikad97@gmail.com
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">

          {/* Schedule a Meeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase mb-3">
              Schedule a Meeting
            </p>
            <p className="font-mono text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Happy to chat about opportunities or collaborations. Send a quick{" "}
              <strong className="text-gray-900 dark:text-white">email</strong>{" "}
              first so we can align on the topic — then connect on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/adrika-dwiv/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors border-t border-gray-100 dark:border-gray-800 pt-4 group"
              data-testid="link-book-slot"
            >
              Connect on LinkedIn
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Elsewhere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase mb-4">
              Elsewhere
            </p>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {ELSEWHERE.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-between py-3 group"
                  data-testid={`link-elsewhere-${label.toLowerCase()}`}
                >
                  <span className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                    {label}
                  </span>
                  <span className="font-mono text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
