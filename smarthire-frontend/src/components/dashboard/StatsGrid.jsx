import {
  BriefcaseBusiness,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { motion } from "framer-motion";

import DashboardCard from "./DashboardCard";

export default function StatsGrid({ jobs }) {
  const stats = {
    total: jobs.length,
    interview: jobs.filter((j) => j.status === "Interview").length,
    offer: jobs.filter((j) => j.status === "Offer").length,
    rejected: jobs.filter((j) => j.status === "Rejected").length,
  };

  const cards = [
    {
      title: "Applications",
      value: stats.total,
      subtitle: "Total jobs tracked",
      icon: BriefcaseBusiness,
      gradient: "from-cyan-500 via-sky-500 to-blue-500",
      glow: "shadow-cyan-500/20",
    },
    {
      title: "Interviews",
      value: stats.interview,
      subtitle: "Interview rounds",
      icon: Clock3,
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      glow: "shadow-blue-500/20",
    },
    {
      title: "Offers",
      value: stats.offer,
      subtitle: "Offers received",
      icon: CheckCircle2,
      gradient: "from-emerald-500 via-green-500 to-lime-500",
      glow: "shadow-emerald-500/20",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      subtitle: "Applications closed",
      icon: XCircle,
      gradient: "from-rose-500 via-red-500 to-orange-500",
      glow: "shadow-red-500/20",
    },
  ];

  return (
    <motion.section
      className="mt-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      <div className="mb-8">

        <p className="font-medium tracking-wide text-cyan-400">
          OVERVIEW
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          Your Progress
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                },
              },
            }}
            whileHover={{
              y: -10,
            }}
          >
            <DashboardCard {...card} />
          </motion.div>
        ))}

      </div>

    </motion.section>
  );
}