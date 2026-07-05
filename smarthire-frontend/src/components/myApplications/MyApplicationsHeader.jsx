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
      className="flex items-center justify-between mb-5"
    >
      {/* Left */}

      {/* Hero */}

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Applications
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Your Applications
          </h1>

          <p className="max-w-2xl mt-4 text-lg leading-8 text-gray-400">
            Track and Manage every job allpication here
          </p>
        </section>
    </motion.div>
  );
}