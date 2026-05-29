import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Terminal } from "lucide-react";

const STACK = [
  { category: "Languages", items: "Java, JavaScript, TypeScript" },
  { category: "Frontend", items: "React, Next.js, Redux" },
  { category: "Mobile", items: "React Native, Expo" },
  { category: "Backend", items: "Node.js, Express.js" },
  { category: "Databases", items: "Firebase, MongoDB" },
  { category: "Tools & DevOps", items: "Git, GitHub, Vercel" },
];

export function TechStack({ scrollTo }: { scrollTo?: (id: string) => void }) {
  return (
    <section
      id="techstack"
      className="bg-white border-t border-gray-100"
      style={{
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Tech Stack table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-mono mb-3">
              Toolkit
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-4 leading-tight">
              Tech Stack
            </h2>
            <p className="font-mono text-sm text-gray-500 leading-relaxed mb-10 max-w-sm">
              A snapshot of what I work with. Plenty more I'd love to learn.
            </p>

            <div className="divide-y divide-gray-100">
              {STACK.map(({ category, items }, idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="flex items-baseline justify-between py-4"
                  data-testid={`row-stack-${idx}`}
                >
                  <span className="text-sm font-semibold text-gray-800 tracking-tight">
                    {category}
                  </span>
                  <span className="font-mono text-[11px] tracking-widest text-gray-400 uppercase text-right">
                    {items}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dark contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gray-950 text-white p-8 flex flex-col gap-6"
          >
            {/* Card header */}
            <div className="flex items-start justify-between">
              <Terminal size={20} className="text-gray-400 mt-0.5" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                get_in_touch
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-black mb-3">Let's Connect</h3>
              <p className="font-mono text-sm text-gray-400 leading-relaxed">
                Open to new opportunities, collaborations, or just a good conversation.
                Reach out — I'd love to hear from you.
              </p>
            </div>

            {/* Terminal block */}
            <div className="bg-black border border-gray-800 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                  — Shell
                </span>
                <button
                  className="font-mono text-[10px] tracking-widest text-gray-500 uppercase hover:text-white transition-colors"
                  onClick={() => navigator.clipboard.writeText("mailto:adrika@example.com")}
                  data-testid="button-copy-email"
                >
                  Copy
                </button>
              </div>
              <p className="font-mono text-sm text-gray-300">
                <span className="text-gray-500">$</span> adrika.dwivedi@gmail.com
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/adrika-dwivedi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 border border-gray-700 text-white px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase hover:border-white transition-colors"
                data-testid="link-github-card"
              >
                GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href="https://linkedin.com/in/adrika-dwivedi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 border border-gray-700 text-white px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase hover:border-white transition-colors"
                data-testid="link-linkedin-card"
              >
                LinkedIn <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-5 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
            ADRIKA. &copy; {new Date().getFullYear()} Adrika Dwivedi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/adrika-dwivedi" },
              { label: "LinkedIn", href: "https://linkedin.com/in/adrika-dwivedi" },
              { label: "Email", href: "mailto:adrika@example.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] tracking-widest text-gray-400 uppercase hover:text-gray-900 transition-colors"
                data-testid={`link-footer-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
