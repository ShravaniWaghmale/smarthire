import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function RightPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Resume Score
          </p>

          <h2 className="mt-2 text-6xl font-black text-white">
            92%
          </h2>

          <p className="mt-2 text-gray-400">
            Excellent Resume
          </p>

        </div>

        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">

          <Sparkles
            className="text-white"
            size={28}
          />

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
          />

        </div>

        <div className="flex justify-between mt-3 text-sm">

          <span className="text-gray-500">
            ATS Ready
          </span>

          <span className="font-semibold text-cyan-400">
            92 / 100
          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="h-px my-8 bg-white/10" />

      {/* Short Tip */}

      <div>

        <h3 className="text-lg font-semibold text-white">
          Quick Insight
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          Your resume is performing well.
          Add measurable achievements and a few more
          role-specific keywords to push your score above 95%.
        </p>

      </div>

      {/* Button */}

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

        Improve Resume

        <ArrowUpRight size={18} />

      </button>

    </motion.aside>
  );
}