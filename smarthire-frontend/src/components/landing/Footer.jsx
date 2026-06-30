import {
  BriefcaseBusiness,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="grid gap-12 px-8 py-16 mx-auto max-w-7xl lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20">
              <BriefcaseBusiness size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                SmartHire
              </h2>

              <p className="text-sm text-gray-400">
                AI Career Platform
              </p>
            </div>
          </Link>

          <p className="max-w-sm mt-6 leading-8 text-gray-400">
            Helping students and professionals organize job applications,
            prepare for interviews, improve resumes with AI and land their
            dream careers faster.
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 font-bold transition-all duration-300 border rounded-xl border-white/10 bg-white/5 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              GH
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 font-bold transition-all duration-300 border rounded-xl border-white/10 bg-white/5 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              IN
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-xl border-white/10 bg-white/5 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              <Mail size={20} />
            </a>

          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Product
          </h3>

          <ul className="space-y-4">
            {[
              "Dashboard",
              "Resume AI",
              "Job Tracker",
              "Analytics",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                >
                  {item}
                  <ArrowUpRight size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-4">
            {[
              "About",
              "Careers",
              "Privacy",
              "Support",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                >
                  {item}
                  <ArrowUpRight size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Get Started
          </h3>

          <div className="space-y-4">
            <Link
              to="/register"
              className="block px-6 py-3 font-semibold text-center transition-all duration-300 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Create Account
            </Link>

            <Link
              to="/login"
              className="block px-6 py-3 text-center transition-all duration-300 border rounded-xl border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10"
            >
              Login
            </Link>
          </div>

          <div className="p-5 mt-8 border rounded-2xl border-cyan-500/20 bg-cyan-500/10">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-cyan-400">
                8,000+
              </span>{" "}
              professionals are already using SmartHire to organize their
              job search.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-4 px-8 py-6 mx-auto text-sm text-gray-500 max-w-7xl md:flex-row">

          <p>
            © 2026 <span className="text-white">SmartHire</span>. All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️ using React, Node.js & MongoDB
          </p>

        </div>
      </div>

    </footer>
  );
}