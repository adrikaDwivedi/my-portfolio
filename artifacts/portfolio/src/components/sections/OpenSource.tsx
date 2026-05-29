import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GITHUB_USER = "adrikaDwivedi";

interface GitHubUser {
  public_repos: number;
  followers: number;
  location: string;
  created_at: string;
}

type ActivityStatus = "PUSHED" | "CREATED" | "MERGED" | "OPEN" | "FORKED";

interface Activity {
  status: ActivityStatus;
  repo: string;
  repoUrl: string;
  title: string;
  date: string;
}

const STATUS_STYLES: Record<ActivityStatus, { dot: string; badge: string }> = {
  PUSHED:  { dot: "bg-blue-500",   badge: "text-blue-600   dark:text-blue-400   border-blue-200   dark:border-blue-800" },
  CREATED: { dot: "bg-orange-400", badge: "text-orange-500 dark:text-orange-400 border-orange-200 dark:border-orange-800" },
  MERGED:  { dot: "bg-purple-500", badge: "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800" },
  OPEN:    { dot: "bg-green-500",  badge: "text-green-600  dark:text-green-400  border-green-200  dark:border-green-800" },
  FORKED:  { dot: "bg-gray-400",   badge: "text-gray-500   dark:text-gray-400   border-gray-200   dark:border-gray-700" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseEvent(event: any): Activity | null {
  const repo: string = event.repo?.name ?? "";
  const repoUrl = `https://github.com/${repo}`;
  const date: string = formatDate(event.created_at);

  switch (event.type) {
    case "PushEvent": {
      const commits: { message: string }[] = event.payload?.commits ?? [];
      const msg = commits[0]?.message?.split("\n")[0] ?? "Pushed commits";
      return { status: "PUSHED", repo, repoUrl, title: msg, date };
    }
    case "CreateEvent": {
      const ref: string = event.payload?.ref ?? "";
      const refType: string = event.payload?.ref_type ?? "branch";
      return {
        status: "CREATED",
        repo,
        repoUrl,
        title: ref ? `new ${refType}: ${ref}` : `created repository`,
        date,
      };
    }
    case "PullRequestEvent": {
      const action: string = event.payload?.action ?? "";
      const merged: boolean = event.payload?.pull_request?.merged ?? false;
      const prTitle: string = event.payload?.pull_request?.title ?? "Pull request";
      return {
        status: merged ? "MERGED" : action === "opened" ? "OPEN" : "MERGED",
        repo,
        repoUrl,
        title: prTitle,
        date,
      };
    }
    case "ForkEvent": {
      const forkee: string = event.payload?.forkee?.full_name ?? repo;
      return { status: "FORKED", repo, repoUrl, title: `forked → ${forkee}`, date };
    }
    default:
      return null;
  }
}

export function OpenSource() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const [userRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`),
        ]);

        if (!userRes.ok || !eventsRes.ok) throw new Error("GitHub API error");

        const userData: GitHubUser = await userRes.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const eventsData: any[] = await eventsRes.json();

        if (cancelled) return;

        const parsed = eventsData
          .map(parseEvent)
          .filter((e): e is Activity => e !== null)
          .slice(0, 8);

        setUser(userData);
        setActivities(parsed);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  const memberSince = user?.created_at ? new Date(user.created_at).getFullYear() : "2021";
  const location    = user?.location ?? "India";
  const repoCount   = user ? `${user.public_repos}` : "—";

  const STATS = [
    { value: repoCount, label: "Repositories" },
    { value: "3+",      label: "Active Projects" },
    { value: "5+",      label: "Languages Used" },
    { value: `${memberSince}`, label: "Member Since" },
    { value: location,  label: "Location" },
  ];

  return (
    <section
      id="opensource"
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300"
      style={{ backgroundImage: "radial-gradient(circle, var(--dot) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
    >
      <div className="max-w-6xl mx-auto pl-8 md:pl-16 pr-8 md:pr-16 py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase font-mono mb-3">
              Open Source
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white leading-tight">
              GitHub Activity
            </h2>
          </div>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group"
            data-testid="link-github-profile"
          >
            View Profile <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 border border-gray-200 dark:border-gray-800 mb-12"
        >
          {STATS.map(({ value, label }, idx) => (
            <div
              key={label}
              className={`px-6 py-6 ${idx < STATS.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800" : ""}`}
              data-testid={`stat-${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <p className={`text-3xl font-black leading-none mb-1 ${loading ? "text-gray-200 dark:text-gray-800 animate-pulse" : "text-gray-950 dark:text-white"}`}>
                {value}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Activity feed */}
        {loading && (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-gray-100 dark:border-gray-800 animate-pulse">
                <div className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-gray-800 mt-1 flex-shrink-0" />
                <div className="flex-grow space-y-2">
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-40" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-72" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="border border-gray-200 dark:border-gray-800 px-6 py-8 text-center">
            <p className="font-mono text-sm text-gray-400 dark:text-gray-500">
              Could not load activity — GitHub API rate limit may have been reached.
            </p>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wider uppercase text-gray-500 hover:text-gray-900 dark:hover:text-white mt-3 transition-colors"
            >
              View on GitHub <ArrowUpRight size={11} />
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {activities.map((item, idx) => {
              const style = STATUS_STYLES[item.status];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-start gap-4 py-4 group"
                  data-testid={`activity-row-${idx}`}
                >
                  <div className={`w-3 h-3 rounded-sm flex-shrink-0 mt-1 ${style.dot}`} />
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`font-mono text-[9px] tracking-widest uppercase border px-1.5 py-0.5 ${style.badge}`}>
                        {item.status}
                      </span>
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] tracking-wider text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors uppercase"
                      >
                        {item.repo}
                      </a>
                    </div>
                    <p className="font-mono text-sm text-gray-700 dark:text-gray-300 truncate group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                      {item.title}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-gray-400 dark:text-gray-600 uppercase flex-shrink-0 mt-1 hidden sm:block">
                    {item.date}
                  </span>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-8 md:hidden">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View GitHub Profile <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
