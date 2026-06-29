import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#020b1f] text-white">
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Track Your Jobs.
          <br />
          <span className="text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text">
            Land Your Dream Career.
          </span>
        </h1>

        <p className="max-w-2xl mt-6 text-xl text-gray-400">
          SmartHire helps you track applications, manage interviews,
          and improve your resume like a real SaaS product.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            to="/register"
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 text-lg font-semibold border border-gray-600 rounded-xl"
          >
            Login
          </Link>
        </div>
      </section>

      <section className="grid gap-6 px-10 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">
          <h3 className="text-2xl font-semibold">Track Applications</h3>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">
          <h3 className="text-2xl font-semibold">Manage Interviews</h3>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111827] p-8">
          <h3 className="text-2xl font-semibold">Improve Resume</h3>
        </div>
      </section>
    </div>
  );
}