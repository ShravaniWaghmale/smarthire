import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

export default function UploadAnimation() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.1, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="absolute w-40 h-40 rounded-full bg-cyan-500 blur-3xl"
      />

      {/* Middle Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute flex items-center justify-center w-32 h-32 border border-dashed rounded-full border-cyan-500/30"
      />

      {/* Inner Ring */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="flex items-center justify-center w-24 h-24 rounded-full shadow-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/40"
      >
        <UploadCloud
          size={40}
          className="text-white"
        />
      </motion.div>

    </div>
  );
}