import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#030712]/60"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="flex items-center justify-center transition-all duration-300 shadow-lg w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/30 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-cyan-500/50">

            <BriefcaseBusiness size={22} />

          </div>

          <div>

            <h1 className="text-2xl font-bold transition duration-300 group-hover:text-cyan-300">
              SmartHire
            </h1>

            <p className="text-xs text-gray-400">
              AI Career Platform
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div className="items-center hidden gap-10 text-gray-300 md:flex">

          <a
            href="#features"
            className="relative transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
          </a>

          <a
            href="#how"
            className="relative transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            How it Works
          </a>

          <a
            href="#testimonials"
            className="relative transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Reviews
          </a>

        </div>

        {/* Right Buttons */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="font-medium text-gray-300 transition duration-300 hover:text-cyan-400"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 font-semibold transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/40"
          >
            Get Started
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}