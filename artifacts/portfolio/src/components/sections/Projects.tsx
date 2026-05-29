import { motion } from "framer-motion";
import { Folder, ArrowUpRight, Star, GitFork, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "gulpy",
    description:
      "A smart water intake tracking mobile app with goal tracking, streak systems, and intelligent daily reminders using Expo Notifications.",
    tags: ["GOAL-TRACKING", "STREAKS", "NOTIFICATIONS"],
    tech: ["React Native", "Expo", "Reanimated"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 12,
    forks: 3,
    github: "https://github.com/adrika-dwivedi/gulpy",
    featured: true,
  },
  {
    name: "student-info-portal",
    description:
      "Comprehensive portal for student data management with form handling, Firebase authentication, and real-time updates.",
    tags: ["FIREBASE", "AUTH", "FORMS"],
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 8,
    forks: 2,
    github: "https://github.com/adrika-dwivedi/student-info-portal",
    featured: false,
  },
  {
    name: "location-share",
    description:
      "Real-time location sharing platform with Firebase backend and Google Maps integration. Built for scale and low-latency updates.",
    tags: ["MAPS", "REAL-TIME", "FIREBASE"],
    tech: ["React Native", "Firebase", "Maps API"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 15,
    forks: 5,
    github: "https://github.com/adrika-dwivedi/location-share",
    featured: false,
  },
  {
    name: "task-manager-app",
    description:
      "Productivity app with full CRUD operations, advanced filtering, and efficient state management. Clean and minimal interface.",
    tags: ["CRUD", "REDUX", "ASYNC-STORAGE"],
    tech: ["React Native", "Redux", "AsyncStorage"],
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 6,
    forks: 1,
    github: "https://github.com/adrika-dwivedi/task-manager-app",
    featured: false,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-mono mb-3">
              Engineering
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
              Pinned Projects
            </h2>
          </div>
          <a
            href="https://github.com/adrika-dwivedi"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-500 hover:text-gray-900 transition-colors group"
            data-testid="link-view-all-repos"
          >
            View All Repositories
            <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group flex flex-col bg-white border transition-all duration-200 hover:shadow-md ${
                project.featured
                  ? "border-red-300 hover:border-red-400"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              data-testid={`card-project-${idx}`}
            >
              <div className="flex-grow p-5">
                {/* Card header */}
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
                      className="font-mono text-sm font-semibold text-gray-800 hover:text-red-700 transition-colors"
                      data-testid={`link-project-${project.name}`}
                    >
                      {project.name}
                    </a>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-gray-600 transition-colors"
                    data-testid={`link-project-external-${project.name}`}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Description */}
                <p className="font-mono text-xs text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider text-gray-400 border border-gray-200 px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.langColor }}
                  />
                  <span className="font-mono text-[10px] tracking-wider text-gray-400 uppercase">
                    {project.language}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-mono text-[10px] text-gray-400">
                    <Star size={11} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-gray-400">
                    <GitFork size={11} />
                    {project.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="mt-8 md:hidden">
          <a
            href="https://github.com/adrika-dwivedi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            View All Repositories <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
