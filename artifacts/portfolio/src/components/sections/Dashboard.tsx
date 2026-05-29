import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 px-6 border-y border-white/5 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Years Coding", value: 3, suffix: "+" },
            { label: "Apps Built", value: 10, suffix: "+" },
            { label: "GitHub Commits", value: 500, suffix: "+" },
            { label: "Focus", value: 0, override: "Mobile" },
          ].map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Currently Learning
            </h4>
            <div className="flex flex-wrap gap-2">
              {["SwiftUI", "GraphQL", "Web3"].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/5"
          >
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Current Focus
            </h4>
            <p className="text-xl font-medium text-muted-foreground">
              Cross-platform mobile applications with native feel and performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any, index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && stat.value > 0) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = stat.value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-6 rounded-2xl text-center group border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
      <motion.h4 
        className="text-4xl font-bold text-gradient-amber mb-2 group-hover:scale-110 transition-transform"
      >
        {stat.override ? stat.override : `${count}${stat.suffix}`}
      </motion.h4>
      <p className="text-sm text-muted-foreground uppercase tracking-widest font-mono">{stat.label}</p>
    </motion.div>
  );
}
