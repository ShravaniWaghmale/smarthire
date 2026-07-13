import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  bg,
}) {
  return (
    <motion.div
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
        duration: 0.4,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="relative p-6 overflow-hidden transition-all duration-300 border group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/30"
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-400">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">

            {value}

          </h2>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${bg}`}
        >

          <Icon
            size={30}
            className={color}
          />

        </div>

      </div>

    </motion.div>
  );
}