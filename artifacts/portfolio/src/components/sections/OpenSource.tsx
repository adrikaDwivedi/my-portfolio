import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "40+", label: "Repositories" },
  { value: "3+", label: "Active Projects" },
  { value: "5+", label: "Languages Used" },
  { value: "2021", label: "Member Since" },
  { value: "India", label: "Location" },
];

type ActivityStatus = "OPEN" | "MERGED" | "PUSHED" | "CREATED";

interface Activity {
  status: ActivityStatus;
  repo: string;
  title: string;
  date: string;
}

const ACTIVITIES: Activity[] = [
  {
    status: "CREATED",
    repo: "adrikaDwivedi/Gulpy",
    title: "new branch: feat/streak-system — water intake tracker",
    date: "May 25, 2026",
  },
  {
    status: "PUSHED",
    repo: "adrikaDwivedi/tasker-web-app",
    title: "feat: add task filtering and priority sorting",
    date: "May 19, 2026",
  },
  {
    status: "CREATED",
    repo: "adrikaDwivedi/trackemApp",
    title: "new branch: ui/dashboard-redesign",
    date: "May 12, 2026",
  },
  {
    status: "PUSHED",
    repo: "adrikaDwivedi/AiChatBot",
    title: "fix: handle empty API response gracefully",
    date: "Apr 30, 2026",
  },
  {
    status: "PUSHED",
    repo: "adrikaDwivedi/Coursified",
    title: "feat: add course progress tracking and completion badges",
    date: "Apr 18, 2026",
  },
  {
    status: "PUSHED",
    repo: "adrikaDwivedi/si-backend-server",
    title: "chore: refactor auth middleware and add rate limiting",
    date: "Mar 22, 2026",
  },
];

const STATUS_STYLES: Record<ActivityStatus, { dot: string; badge: string }> = {
  OPEN:    { dot: "bg-green-500",  badge: "text-green-600 border-green-200" },
  MERGED:  { dot: "bg-purple-500", badge: "text-purple-600 border-purple-200" },
  PUSHED:  { dot: "bg-blue-500",   badge: "text-blue-600 border-blue-200" },
  CREATED: { dot: "bg-orange-400", badge: "text-orange-500 border-orange-200" },
};

export function OpenSource() {
  return (
    <section
      id="opensource"
      className="bg-white border-t border-gray-100"
      style={{
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-mono mb-3">
              Open Source
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
              GitHub Activity
            </h2>
          </div>
          <a
            href="https://github.com/adrikaDwivedi"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-400 hover:text-gray-900 transition-colors group"
            data-testid="link-github-profile"
          >
            View Profile <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 border border-gray-200 mb-12"
        >
          {STATS.map(({ value, label }, idx) => (
            <div
              key={label}
              className={`px-6 py-6 ${idx < STATS.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}
              data-testid={`stat-${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <p className="text-3xl font-black text-gray-950 leading-none mb-1">{value}</p>
              <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Activity feed */}
        <div className="divide-y divide-gray-100">
          {ACTIVITIES.map((item, idx) => {
            const style = STATUS_STYLES[item.status];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="flex items-start gap-4 py-4 group"
                data-testid={`activity-row-${idx}`}
              >
                {/* Status dot */}
                <div className={`w-3 h-3 rounded-sm flex-shrink-0 mt-1 ${style.dot}`} />

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`font-mono text-[9px] tracking-widest uppercase border px-1.5 py-0.5 ${style.badge}`}>
                      {item.status}
                    </span>
                    <a
                      href={`https://github.com/${item.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] tracking-wider text-gray-400 hover:text-gray-700 transition-colors uppercase"
                    >
                      {item.repo}
                    </a>
                  </div>
                  <p className="font-mono text-sm text-gray-700 truncate group-hover:text-gray-950 transition-colors">
                    {item.title}
                  </p>
                </div>

                {/* Date */}
                <span className="font-mono text-[10px] tracking-wider text-gray-400 uppercase flex-shrink-0 mt-1 hidden sm:block">
                  {item.date}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile view profile */}
        <div className="mt-8 md:hidden">
          <a
            href="https://github.com/adrikaDwivedi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-500 hover:text-gray-900 transition-colors"
          >
            View GitHub Profile <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
