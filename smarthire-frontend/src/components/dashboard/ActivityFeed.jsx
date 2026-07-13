import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Clock3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    icon: BriefcaseBusiness,
    title: "Application Added",
    description: "Frontend Developer • Microsoft",
    time: "2 hours ago",
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
  },
  {
    icon: Clock3,
    title: "Interview Scheduled",
    description: "Google • Tomorrow 11:00 AM",
    time: "Yesterday",
    color: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Application Accepted",
    description: "Amazon Internship",
    time: "3 days ago",
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
  },
];

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-8">

        <Sparkles className="text-cyan-400" />

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

      </div>

      <div className="space-y-6">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-4"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon
                  size={20}
                  className={item.color}
                />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {item.description}
                </p>

                <span className="inline-block mt-2 text-xs text-gray-500">
                  {item.time}
                </span>

              </div>

            </div>
          );
        })}

      </div>
    </motion.div>
  );
}