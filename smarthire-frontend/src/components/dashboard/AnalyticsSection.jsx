import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  TrendingUp,
  BriefcaseBusiness,
  Target,
} from "lucide-react";

const data = [
  { month: "Jan", applications: 8, interviews: 2 },
  { month: "Feb", applications: 14, interviews: 4 },
  { month: "Mar", applications: 11, interviews: 3 },
  { month: "Apr", applications: 22, interviews: 8 },
  { month: "May", applications: 18, interviews: 7 },
  { month: "Jun", applications: 28, interviews: 11 },
];

export default function AnalyticsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
    >
      {/* Header */}

      <div className="px-8 py-6 border-b border-white/10">

        <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400">
          Analytics
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Performance Overview
        </h2>

      </div>

      {/* Chart */}

      <div className="px-6 pt-6">

        <div className="h-[260px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={data}>

              <defs>

                <linearGradient
                  id="applications"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#22d3ee"
                    stopOpacity={0.45}
                  />

                  <stop
                    offset="100%"
                    stopColor="#22d3ee"
                    stopOpacity={0}
                  />

                </linearGradient>

                <linearGradient
                  id="interviews"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#8b5cf6"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#8b5cf6"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                stroke="#ffffff10"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                tick={{ fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                tick={{ fill: "#94A3B8" }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="applications"
                stroke="#22d3ee"
                strokeWidth={3}
                fill="url(#applications)"
              />

              <Area
                type="monotone"
                dataKey="interviews"
                stroke="#8b5cf6"
                strokeWidth={3}
                fill="url(#interviews)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="grid gap-4 p-6 md:grid-cols-3">

        <div className="p-5 border rounded-2xl border-white/10 bg-white/5">

          <BriefcaseBusiness
            className="mb-4 text-cyan-400"
            size={24}
          />

          <h3 className="text-3xl font-bold text-white">
            101
          </h3>

          <p className="mt-2 text-gray-400">
            Applications Sent
          </p>

        </div>

        <div className="p-5 border rounded-2xl border-white/10 bg-white/5">

          <Target
            className="mb-4 text-violet-400"
            size={24}
          />

          <h3 className="text-3xl font-bold text-white">
            35
          </h3>

          <p className="mt-2 text-gray-400">
            Interviews
          </p>

        </div>

        <div className="p-5 border rounded-2xl border-white/10 bg-white/5">

          <TrendingUp
            className="mb-4 text-emerald-400"
            size={24}
          />

          <h3 className="text-3xl font-bold text-white">
            41%
          </h3>

          <p className="mt-2 text-gray-400">
            Success Rate
          </p>

        </div>

      </div>

    </motion.section>
  );
}