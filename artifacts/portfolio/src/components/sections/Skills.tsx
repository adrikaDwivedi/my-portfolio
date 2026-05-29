import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiGithub, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Expo", icon: <SiReact className="text-white" /> } // Placeholder for Expo
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
    ]
  },
  {
    title: "Tools & Languages",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient-amber">Arsenal</span></h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-white/90">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-colors"
                  >
                    <div className="text-xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-white/80">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
