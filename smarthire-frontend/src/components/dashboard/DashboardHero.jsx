import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function DashboardHero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.035] px-10 py-14 backdrop-blur-2xl lg:px-16 lg:py-20"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[160px]" />

      {/* Decorative Blur */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl">

        <motion.div
          variants={item}
          className="inline-flex items-center px-5 py-2 border rounded-full border-cyan-500/20 bg-cyan-500/10"
        >
          <span className="text-sm font-semibold tracking-wide text-cyan-400">
            ✦ AI Powered Career Dashboard
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-5xl font-black leading-[1.05] text-white lg:text-7xl"
        >
          Track Every

          <br />

          <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text">
            Opportunity
          </span>

          {" "}Like a Pro.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl mt-8 text-lg leading-9 text-gray-400"
        >
          Organize job applications, monitor interviews,
          analyze your progress, improve your resume with AI
          and keep your career journey beautifully organized
          in one powerful dashboard.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-5 mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex items-center gap-3 px-8 py-4 font-semibold text-white shadow-2xl rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20"
          >
            <Plus size={20} />

            Add Application
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition border rounded-2xl border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10"
          >
            View Analytics

            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Bottom Divider */}

        <motion.div
          variants={item}
          className="w-full h-px mt-14 bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent"
        />

        {/* Footer */}

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-10 mt-8 text-sm"
        >
          <div>
            <p className="text-gray-500">
              Resume Score
            </p>

            <h3 className="mt-1 text-2xl font-bold text-emerald-400">
              Excellent
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Interview Readiness
            </p>

            <h3 className="mt-1 text-2xl font-bold text-cyan-400">
              High
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Productivity
            </p>

            <h3 className="mt-1 text-2xl font-bold text-violet-400">
              Growing
            </h3>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}