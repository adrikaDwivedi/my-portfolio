import { motion } from "framer-motion";
import { Folder, ArrowUpRight, Star, GitFork, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "gulpy",
    description: "A smart water intake tracking mobile app with goal tracking, streak systems, and intelligent daily reminders using Expo Notifications.",
    tags: ["React Native", "Expo", "Push Notifications", "AsyncStorage", "JavaScript"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 12,
    forks: 3,
    github: "https://github.com/adrikaDwivedi/Gulpy",
    featured: true,
  },
  {
    name: "cap782",
    description: "Student information portal with form handling, Firebase authentication, and real-time database operations for academic data management.",
    tags: ["React.js", "Firebase", "REST API", "HTML/CSS", "JavaScript"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 8,
    forks: 2,
    github: "https://github.com/adrikaDwivedi/cap782",
    featured: false,
  },
  {
    name: "trackemApp",
    description: "Real-time location tracking mobile application with map integration, live position updates, and cross-platform Android/iOS deployment.",
    tags: ["React Native", "Expo", "Maps API", "REST API", "Cross-platform"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 15,
    forks: 5,
    github: "https://github.com/adrikaDwivedi/trackemApp",
    featured: false,
  },
  {
    name: "taskease",
    description: "Productivity app with full CRUD task management, priority filtering, persistent storage via AsyncStorage, and clean component-based architecture.",
    tags: ["React Native", "AsyncStorage", "Redux", "JavaScript", "Responsive UI"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 6,
    forks: 1,
    github: "https://github.com/adrikaDwivedi/taskease",
    featured: false,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase font-mono mb-3">
              Engineering
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white leading-tight">
              Pinned Projects
            </h2>
          </div>
          <a
            href="https://github.com/adrikaDwivedi"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group"
            data-testid="link-view-all-repos"
          >
            View All Repositories
            <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group flex flex-col bg-white dark:bg-gray-900 border transition-all duration-200 hover:shadow-md dark:hover:shadow-gray-900 ${
                project.featured
                  ? "border-red-300 dark:border-red-900 hover:border-red-400 dark:hover:border-red-700"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600"
              }`}
              data-testid={`card-project-${idx}`}
            >
              <div className="flex-grow p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Folder
                      size={16}
                      className={project.featured ? "text-red-500" : "text-orange-400"}
                      fill={project.featured ? "currentColor" : "none"}
                    />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                      data-testid={`link-project-${project.name}`}
                    >
                      {project.name}
                    </a>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.langColor }} />
                  <span className="font-mono text-[10px] tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                    {project.language}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-mono text-[10px] text-gray-400 dark:text-gray-500">
                    <Star size={11} /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-gray-400 dark:text-gray-500">
                    <GitFork size={11} /> {project.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
