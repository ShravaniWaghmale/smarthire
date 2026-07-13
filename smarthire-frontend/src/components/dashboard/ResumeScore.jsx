import { motion } from "framer-motion";

export default function ResumeScore() {
  const score = 86;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400">
            AI Resume Score
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {score}%
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Your resume is performing well.
            Add more measurable achievements to
            increase your ATS score.
          </p>

          <button className="px-6 py-3 mt-6 font-semibold transition rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:scale-105">
            Improve Resume
          </button>

        </div>

        <div className="relative flex items-center justify-center h-44 w-44">

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#06b6d4 ${score * 3.6}deg,#1f2937 0deg)`,
            }}
          />

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#020617]">

            <span className="text-4xl font-bold text-cyan-400">
              {score}
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}