import { useEffect, useState } from "react";
import AppShell from "../../layouts/AppShell";
import { getAnalytics } from "../../api/analytics";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#22c55e",
  "#ef4444",
];

export default function Analytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await getAnalytics();
      setAnalytics(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!analytics) {
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
      value: analytics.stats.total,
      icon: BriefcaseBusiness,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Interviews",
      value: analytics.stats.interview,
      icon: CalendarDays,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Offers",
      value: analytics.stats.offer,
      icon: CheckCircle2,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Rejected",
      value: analytics.stats.rejected,
      icon: XCircle,
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Analytics
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Job Search Analytics
          </h1>

          <p className="max-w-2xl mt-4 text-lg leading-8 text-gray-400">
            Track your applications, interviews, offers and progress with real insights.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-4">
          {statCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                <h2 className="mt-8 text-4xl font-black text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-gray-400">
                  {item.title}
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-8 mt-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h2 className="mb-8 text-2xl font-bold text-white">
              Monthly Applications
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={analytics.monthlyChart}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />

                <Bar
                  dataKey="applications"
                  fill="#06b6d4"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h2 className="mb-8 text-2xl font-bold text-white">
              Status Distribution
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={analytics.statusChart}
                  dataKey="value"
                  outerRadius={110}
                  label
                >
                  {analytics.statusChart.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>

        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <h2 className="mb-8 text-2xl font-bold text-white">
            Top Companies
          </h2>

          <div className="space-y-4">

            {analytics.companies.map((company) => (
              <div
                key={company.company}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827]/60 p-5"
              >
                <span className="font-semibold text-white">
                  {company.company}
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-400">
                  {company.count}
                </span>
              </div>
            ))}

          </div>

        </section>

      </div>
    </AppShell>
  );
}