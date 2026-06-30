import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative px-6 py-20 overflow-hidden lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-100px] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-[-150px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111827]/90 to-[#030712]/95 shadow-2xl backdrop-blur-xl"
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="relative px-8 py-16 text-center lg:px-20 lg:py-20">
          {/* Badge */}
          <span className="inline-flex items-center px-5 py-2 text-sm font-semibold border rounded-full border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            🚀 Start Your Career Journey
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
            Land Your
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text">
              Dream Job Faster
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            Organize every application, prepare for interviews, improve your
            resume with AI, and never miss an opportunity again.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link
              to="/register"
              className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg group rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/30 hover:scale-105 hover:shadow-cyan-500/50"
            >
              Create Free Account
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 font-medium text-white transition-all duration-300 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 hover:border-cyan-500/40 hover:bg-white/10"
            >
              Login
            </Link>
          </div>

          {/* Bottom Trust Text */}
          <p className="mt-8 text-sm text-gray-400">
            Join{" "}
            <span className="font-semibold text-cyan-400">8,000+</span> students
            and professionals already using SmartHire.
          </p>
        </div>
      </motion.div>
    </section>
  );
}