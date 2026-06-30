import { motion } from "framer-motion";
import { ArrowRight, Play, Briefcase, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px] top-[-150px] left-[-120px]" />

        <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[150px] bottom-[-150px] right-[-120px]" />

        <div className="absolute w-[350px] h-[350px] rounded-full bg-violet-600/20 blur-[120px] top-1/2 left-1/2 -translate-x-1/2" />

      </div>

      <div className="px-8 py-16 mx-auto max-w-7xl lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-cyan-500/30 bg-cyan-500/10 text-cyan-300">

              <Sparkles size={18} />

              AI Powered Career Platform

            </div>

            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">

              Track Every

              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text">

                Job Application

              </span>

              Effortlessly.

            </h1>

            <p className="max-w-xl mt-8 text-lg leading-8 text-gray-300">

              SmartHire helps students and professionals organize job
              applications, monitor interviews, analyze resumes and
              stay ahead with an AI-powered dashboard.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/register"
                className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 group rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              >

                Get Started

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

              <button className="flex items-center gap-3 px-8 py-4 transition-all duration-300 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-500/40 hover:scale-105">

                <Play size={18} />

                Live Demo

              </button>

            </div>

            <div className="flex gap-10 mt-10">

              <div>

                <h2 className="text-3xl font-bold text-cyan-400">

                  5K+

                </h2>

                <p className="text-gray-400">

                  Users

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-violet-400">

                  25K+

                </h2>

                <p className="text-gray-400">

                  Applications

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-blue-400">

                  95%

                </h2>

                <p className="text-gray-400">

                  Success

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="p-8 border shadow-2xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-xl font-semibold">

                    Dashboard

                  </h2>

                  <p className="text-gray-400">

                    Welcome back 👋

                  </p>

                </div>

                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">

                  <Briefcase size={22} />

                </div>

              </div>

              <div className="space-y-5">

                <div className="rounded-2xl bg-[#111827] p-5">

                  <div className="flex justify-between">

                    <div>

                      <p className="text-sm text-gray-400">

                        Applied Jobs

                      </p>

                      <h2 className="mt-2 text-3xl font-bold">

                        124

                      </h2>

                    </div>

                    <BarChart3
                      className="text-cyan-400"
                      size={40}
                    />

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-[#111827] p-5">

                    <p className="text-sm text-gray-400">

                      Interviews

                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-blue-400">

                      18

                    </h2>

                  </div>

                  <div className="rounded-2xl bg-[#111827] p-5">

                    <p className="text-sm text-gray-400">

                      Offers

                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-green-400">

                      4

                    </h2>

                  </div>

                </div>

                <div className="rounded-2xl bg-[#111827] p-5">

                  <div className="flex justify-between">

                    <span>Resume Score</span>

                    <span className="font-semibold text-cyan-400">

                      92%

                    </span>

                  </div>

                  <div className="h-3 mt-4 overflow-hidden bg-gray-700 rounded-full">

                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}