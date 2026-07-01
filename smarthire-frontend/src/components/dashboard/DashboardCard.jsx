import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient,
  glow,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-xl ${glow}`}
    >
      {/* Background Glow */}

      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
      />

      {/* Light Reflection */}

      <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition duration-1000 group-hover:translate-x-[120%]" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
              {title}
            </p>

          </div>

          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
          >

            <Icon
              size={28}
              className="text-white"
            />

          </motion.div>

        </div>

        {/* Number */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="mt-8 text-5xl font-black tracking-tight text-white"
        >
          {value}
        </motion.h2>

        {/* Footer */}

        <div className="flex items-center justify-between mt-7">

          <p className="text-sm leading-6 text-gray-400">
            {subtitle}
          </p>

          <div className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">

            <TrendingUp size={14} />

            +12%

          </div>

        </div>

      </div>
    </motion.div>
  );
}