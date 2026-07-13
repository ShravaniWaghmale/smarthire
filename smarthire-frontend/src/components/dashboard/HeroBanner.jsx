import { ArrowRight, Plus, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0b1220] to-[#030712] p-10 shadow-2xl backdrop-blur-xl lg:p-14">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

      </div>

      <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold border rounded-full border-cyan-500/20 bg-cyan-500/10 text-cyan-300">

            <Sparkles size={16} />

            AI Powered Career Platform

          </span>

          <h1 className="text-5xl font-bold leading-tight mt-7 lg:text-6xl">

            Build your

            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text">

              Dream Career

            </span>

          </h1>

          <p className="max-w-2xl mt-6 text-lg leading-8 text-gray-300">

            Manage applications, prepare for interviews, improve your
            resume using AI and keep every opportunity organized from
            one beautiful dashboard.

          </p>

        </div>

        <div className="flex flex-col gap-5">

          <button className="flex items-center justify-center gap-3 px-8 py-4 font-semibold transition duration-300 shadow-xl rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/30 hover:scale-105">

            <Plus size={20} />

            Add Application

          </button>

          <button className="flex items-center justify-center gap-3 px-8 py-4 font-medium transition border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-white/10">

            View Analytics

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}