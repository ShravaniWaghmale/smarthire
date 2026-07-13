import { motion } from "framer-motion";
import {
  Plus,
  BrainCircuit,
  Upload,
  ChartColumn,
} from "lucide-react";

const actions = [
  {
    title: "Add Application",
    subtitle: "Track a new job",
    icon: Plus,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI Resume Review",
    subtitle: "Improve ATS score",
    icon: BrainCircuit,
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Upload Resume",
    subtitle: "Manage versions",
    icon: Upload,
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Analytics",
    subtitle: "View insights",
    icon: ChartColumn,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function QuickActions() {
  return (
    <div className="mt-10">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action, index) => {

          const Icon = action.icon;

          return (

            <motion.button
              key={action.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="relative p-6 overflow-hidden text-left transition-all duration-300 border group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40"
            >

              <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${action.gradient}`}
              >

                <Icon size={28} />

              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">

                {action.title}

              </h3>

              <p className="relative mt-2 text-gray-400">

                {action.subtitle}

              </p>

            </motion.button>

          );

        })}

      </div>

    </div>
  );
}