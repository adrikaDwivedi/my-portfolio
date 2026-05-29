import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance React Native Developer",
    company: "Self-Employed",
    date: "2023 - Present",
    description: "Building cross-platform mobile applications for various clients. Architecting solutions from ground up using React Native and Expo.",
  },
  {
    role: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    date: "Summer 2022",
    description: "Developed and maintained responsive web interfaces using Next.js and TypeScript. Integrated RESTful APIs and improved performance by 30%.",
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    date: "2021 - Present",
    description: "Contributing to React and React Native ecosystems. Focusing on UI component libraries and state management tools.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">The <span className="text-gradient-violet">Journey</span></h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-8"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-secondary" />
              <div className="glass-panel p-6 rounded-2xl hover:border-secondary/50 transition-colors">
                <span className="text-sm font-mono text-secondary mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-muted-foreground mb-4 font-medium">{exp.company}</h4>
                <p className="text-muted-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
