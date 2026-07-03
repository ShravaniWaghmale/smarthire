import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplicationsHeader({ onAdd }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="flex items-center justify-between mb-10"
    >
      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold tracking-tight text-white">

          Applications

        </h1>

        <p className="mt-2 text-gray-400">

          Track and manage every job application from one workspace.

        </p>

      </div>

      {/* Right */}

      <motion.button
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={onAdd}
        className="flex items-center gap-3 px-6 py-3 font-semibold text-white transition shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20"
      >

        <Plus size={20} />

        Add Application

      </motion.button>
    </motion.div>
  );
}