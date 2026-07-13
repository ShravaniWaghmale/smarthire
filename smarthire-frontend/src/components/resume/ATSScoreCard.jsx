import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";

export default function ATSScoreCard({ analysis }) {
  const score = analysis?.atsScore || 0;
  const percentage = Math.min(score, 100);

  let status = "Needs Improvement";
  let color = "from-red-500 to-orange-500";

  if (score >= 80) {
    status = "Excellent";
    color = "from-emerald-500 to-green-500";
  } else if (score >= 60) {
    status = "Good";
    color = "from-cyan-500 to-blue-500";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            ATS SCORE
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            {score}/100
          </h2>

          <div
            className={`mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${color} px-4 py-2 text-sm font-semibold text-white`}
          >
            <TrendingUp size={16} />
            {status}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <svg width="140" height="140" className="-rotate-90">
            <circle
              cx="70"
              cy="70"
              r="58"
              stroke="#1f2937"
              strokeWidth="12"
              fill="none"
            />

            <motion.circle
              cx="70"
              cy="70"
              r="58"
              fill="none"
              strokeLinecap="round"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeDasharray={364}
              initial={{ strokeDashoffset: 364 }}
              animate={{
                strokeDashoffset: 364 - (364 * percentage) / 100,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />

            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute flex flex-col items-center">
            <Trophy className="mb-1 text-yellow-400" size={22} />
            <span className="text-2xl font-black text-white">
              {score}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-gray-400">
            ATS Compatibility
          </span>

          <span className="font-semibold text-white">
            {percentage}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.4 }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
      </div>

      <p className="mt-6 leading-7 text-gray-400">
        Your resume has a{" "}
        <span className="font-semibold text-white">
          {status.toLowerCase()}
        </span>{" "}
        ATS compatibility score. Optimizing missing keywords and improving
        project descriptions can significantly increase interview chances.
      </p>
    </motion.div>
  );
}