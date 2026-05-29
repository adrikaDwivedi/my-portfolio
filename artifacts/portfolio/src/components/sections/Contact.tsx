import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});
type FormData = z.infer<typeof schema>;

const ELSEWHERE = [
  { label: "GitHub",   value: "@adrikaDwivedi",    href: "https://github.com/adrikaDwivedi" },
  { label: "LinkedIn", value: "adrika-dwiv",        href: "https://www.linkedin.com/in/adrika-dwiv/" },
  { label: "X",        value: "@akdrinni",           href: "https://x.com/akdrinni" },
  { label: "Email",    value: "adrikad97@gmail.com", href: "mailto:adrikad97@gmail.com" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register, handleSubmit, watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const messageLen = (watch("message") || "").length;

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
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

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 relative"
          >
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-950 dark:border-white" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center justify-center gap-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <ArrowRight size={20} className="text-green-600" />
                </div>
                <p className="font-black text-xl text-gray-950 dark:text-white">Message sent!</p>
                <p className="font-mono text-xs text-gray-400 dark:text-gray-500">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase block mb-2">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-950 dark:focus:border-white outline-none font-mono text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 pb-2 transition-colors"
                    data-testid="input-name"
                  />
                  {errors.name && <p className="font-mono text-[10px] text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    placeholder="jane@example.com"
                    type="email"
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-950 dark:focus:border-white outline-none font-mono text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 pb-2 transition-colors"
                    data-testid="input-email"
                  />
                  {errors.email && <p className="font-mono text-[10px] text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="How can I help?"
                    rows={5}
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-950 dark:focus:border-white outline-none font-mono text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-300 dark:placeholder:text-gray-600 pb-2 resize-none transition-colors"
                    data-testid="input-message"
                  />
                  <div className="flex items-center justify-between mt-1">
                    {errors.message
                      ? <p className="font-mono text-[10px] text-red-500">{errors.message.message}</p>
                      : <span />}
                    <span className="font-mono text-[10px] text-gray-300 dark:text-gray-600">{messageLen}/2000</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-start flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-7 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={13} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <p className="font-mono text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase mb-3">
                Schedule a Meeting
              </p>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
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
            </div>

            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
