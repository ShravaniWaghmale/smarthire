import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="flex h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#0F172A]"
    >
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20">

        <BriefcaseBusiness
          size={36}
          className="text-cyan-400"
        />

      </div>

      <h2 className="text-2xl font-bold text-white">

        No Applications Yet

      </h2>

      <p className="max-w-md mt-3 leading-7 text-center text-gray-400">

        Start tracking your job applications.
        Add your first application and SmartHire
        will help you organize everything in one place.

      </p>
    </motion.div>
  );
}