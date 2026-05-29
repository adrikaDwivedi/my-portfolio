import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone, Cpu, MapPin, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Gulpy",
    description: "A smart water intake tracking mobile app. Features goal tracking, streak systems, and intelligent reminders utilizing Expo Notifications with deeply satisfying animated interactions.",
    icon: <Smartphone size={24} />,
    color: "primary",
    tech: ["React Native", "Expo", "Reanimated"],
    demo: "#",
    github: "#"
  },
  {
    title: "Student Information Portal",
    description: "Comprehensive portal for student data with form management, authentication, and real-time updates using Firebase integration.",
    icon: <Cpu size={24} />,
    color: "secondary",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    demo: "#",
    github: "#"
  },
  {
    title: "Location Sharing App",
    description: "Real-time location sharing platform with a robust Firebase backend and interactive Maps integration. Built for scale and low-latency updates.",
    icon: <MapPin size={24} />,
    color: "primary",
    tech: ["React Native", "Firebase", "Maps API"],
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity application with full CRUD operations, advanced filtering, and efficient state management.",
    icon: <CheckSquare size={24} />,
    color: "secondary",
    tech: ["React Native", "Redux", "AsyncStorage"],
    demo: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient-amber">Work</span></h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.github} className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Github size={20} /></a>
                    <a href={project.demo} className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs text-white/70 font-mono">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
