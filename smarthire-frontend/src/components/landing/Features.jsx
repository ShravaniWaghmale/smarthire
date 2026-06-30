import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

import {
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  ChartColumn,
  BellRing,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Resume Analysis",
    description:
      "Receive intelligent suggestions to improve ATS compatibility, keyword optimization and recruiter visibility.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: BriefcaseBusiness,
    title: "Job Tracker",
    description:
      "Track every application from Applied to Offer using a clean Kanban-inspired workflow.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Resume Manager",
    description:
      "Store multiple resumes, upload new versions and manage them in one secure place.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: ChartColumn,
    title: "Analytics Dashboard",
    description:
      "Understand your interview rate, application success and monthly progress through beautiful charts.",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    icon: BellRing,
    title: "Interview Reminders",
    description:
      "Never miss an interview with smart reminders and upcoming schedule notifications.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Industry-standard JWT authentication keeps your account and job data completely protected.",
    gradient: "from-blue-600 to-violet-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 py-16"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          badge="Everything You Need"
          title="Powerful Features Designed for Your Career"
          description="SmartHire combines AI, analytics and productivity tools into one modern platform that helps students and professionals organize their job search efficiently."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="relative overflow-hidden transition-all duration-500 border rounded-3xl border-white/10 bg-white/5 p-7 backdrop-blur-xl hover:border-cyan-500/40 hover:-translate-y-2 group"
              >
                {/* Glow */}

                <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="relative mt-6 text-xl font-semibold text-white">

                  {feature.title}

                </h3>

                {/* Description */}

                <p className="relative mt-3 leading-7 text-gray-400">

                  {feature.description}

                </p>

                {/* Bottom Line */}

                <div className="relative w-16 h-1 mt-6 transition-all duration-500 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-24" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}