import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function GrammarCard({ score }) {
  const mistakes =
    score >= 95
      ? 0
      : score >= 85
      ? 2
      : 5;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            GRAMMAR CHECK
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            {score}%
          </h2>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
            mistakes === 0
              ? "bg-emerald-500/20"
              : "bg-yellow-500/20"
          }`}
        >
          {mistakes === 0 ? (
            <CheckCircle2
              className="text-emerald-400"
              size={34}
            />
          ) : (
            <AlertTriangle
              className="text-yellow-400"
              size={34}
            />
          )}
        </div>

      </div>

      {/* Score Bar */}

      <div className="mt-8">

        <div className="flex justify-between mb-2 text-sm">

          <span className="text-gray-400">
            Writing Quality
          </span>

          <span className="font-semibold text-white">
            {score}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${score}%`,
            }}
            transition={{
              duration: 1.3,
            }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
          />

        </div>

      </div>

      {/* Result */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/60 p-5">

        <div className="flex items-start gap-4">

          <BookOpen
            className="mt-1 text-cyan-400"
            size={22}
          />

          <div>

            {mistakes === 0 ? (
              <>
                <h3 className="font-semibold text-white">
                  Excellent Writing
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  No grammar or spelling mistakes detected.
                  Your resume is well written and professional.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-semibold text-white">
                  Minor Improvements Needed
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  We detected approximately{" "}
                  <span className="font-semibold text-white">
                    {mistakes}
                  </span>{" "}
                  grammar or wording improvements that could
                  make your resume stronger.
                </p>
              </>
            )}

          </div>

        </div>

      </div>

    </motion.div>
  );
}