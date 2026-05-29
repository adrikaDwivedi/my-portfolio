import { motion } from "framer-motion";
import { Trophy, Star, Lightbulb, Smartphone } from "lucide-react";

const achievements = [
  {
    title: "Open Source Contributions",
    description: "Active contributor to popular React and React Native libraries, improving documentation and adding new features.",
    icon: <Star size={24} />,
  },
  {
    title: "Technical Projects",
    description: "Built and scaled 10+ production-ready applications serving hundreds of active users with robust architectures.",
    icon: <Trophy size={24} />,
  },
  {
    title: "Problem Solving Experience",
    description: "Solved complex state management and performance bottlenecks in high-traffic mobile applications.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Mobile Development Expertise",
    description: "Deep understanding of the mobile ecosystem, from animations to native modules and app store deployments.",
    icon: <Smartphone size={24} />,
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core <span className="text-gradient-violet">Achievements</span></h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
