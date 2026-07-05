import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AppShell from "../../layouts/AppShell";
import { getDashboardStats } from "../../api/dashboard";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Plus,
} from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <AppShell>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="w-12 h-12 border-4 rounded-full animate-spin border-cyan-500 border-t-transparent" />
        </div>
      </AppShell>
    );
  }

  const statCards = [
    {
      title: "Applications",
      value: stats.total,
      icon: BriefcaseBusiness,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Interviews",
      value: stats.interview,
      icon: CalendarDays,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Offers",
      value: stats.offer,
      icon: CheckCircle2,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: XCircle,
      color: "from-rose-500 to-red-500",
    },
    {
      title: "Response Rate",
      value: `${stats.responseRate}%`,
      icon: TrendingUp,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        {/* Hero */}

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Dashboard
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Welcome back 👋
          </h1>

          <p className="max-w-2xl mt-4 text-lg leading-8 text-gray-400">
            Here's an overview of your current job search journey.
          </p>
        </section>

        {/* Stats */}

        <section className="grid gap-6 lg:grid-cols-5">
          {statCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                <h2 className="mt-8 text-4xl font-black text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-gray-400">{item.title}</p>
              </div>
            );
          })}
        </section>

        {/* Bottom */}

        <section className="grid gap-6 mt-10 lg:grid-cols-2">
          {/* Recent Applications */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Recent Applications
                </h2>

                <p className="mt-2 text-gray-400">
                  Latest jobs you've applied for.
                </p>
              </div>

              <Link
                to="/my-applications"
                className="transition text-cyan-400 hover:text-cyan-300"
              >
                <ArrowUpRight />
              </Link>
            </div>

            <div className="space-y-5">
              {stats.recentApplications.length === 0 ? (
                <div className="py-16 text-center text-gray-500 border border-dashed rounded-2xl border-white/10">
                  No applications yet.
                </div>
              ) : (
                stats.recentApplications
                  .slice(0, 3)
                  .map((job) => (
                    <div
                      key={job._id}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827]/60 p-5 transition hover:border-cyan-500/20"
                    >
                      <div>
                        <h3 className="font-semibold text-white">
                          {job.company}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          {job.role}
                        </p>

                        <p className="mt-2 text-xs text-gray-500">
                          {job.location}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-medium ${
                          job.status === "Applied"
                            ? "bg-cyan-500/15 text-cyan-400"
                            : job.status === "Interview"
                            ? "bg-violet-500/15 text-violet-400"
                            : job.status === "Offer"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                  ))
              )}
            </div>

            <div className="pt-6 mt-8 border-t border-white/10">
              <Link
                to="/my-applications"
                className="flex items-center justify-center gap-2 font-semibold transition text-cyan-400 hover:text-cyan-300"
              >
                View All Applications
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Weekly Goal */}

          <div className="p-8 border rounded-3xl border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10">
            <h2 className="text-2xl font-bold text-white">
              Weekly Goal
            </h2>

            <p className="mt-3 text-gray-400">
              Apply to 10 companies this week.
            </p>

            <div className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300">
                  Progress
                </span>

                <span className="font-semibold text-white">
                  {stats.total} / 10
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full transition-all duration-700 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  style={{
                    width: `${Math.min((stats.total / 10) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>

            <p className="mt-10 text-sm leading-7 text-gray-400">
              {stats.total >= 10
                ? "🎉 Amazing! You've completed your weekly goal."
                : `${10 - stats.total} more application${
                    10 - stats.total === 1 ? "" : "s"
                  } to reach this week's target.`}
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}