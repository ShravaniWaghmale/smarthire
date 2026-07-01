import {
  Search,
  Trash2,
  ExternalLink,
  Building2,
  MapPin,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const badgeStyles = {
  Applied:
    "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",

  Interview:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",

  Offer:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  Rejected:
    "bg-red-500/10 text-red-400 border border-red-500/20",
};

export default function ApplicationsTable({
  jobs,
  onDelete,
}) {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

      {/* Header */}

      <div className="flex flex-col gap-6 p-8 border-b border-white/10 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm font-medium text-cyan-400">
            Applications
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Job Tracker
          </h2>

          <p className="mt-2 text-gray-400">
            Keep track of every opportunity in one place.
          </p>

        </div>

        <div className="relative w-full lg:w-80">

          <Search
            size={18}
            className="absolute text-gray-500 -translate-y-1/2 left-5 top-1/2"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company..."
            className="w-full py-4 pr-5 transition border outline-none rounded-2xl border-white/10 bg-white/5 pl-14 focus:border-cyan-500/40"
          />

        </div>

      </div>

      {/* Empty */}

      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-80">

          <Building2
            size={42}
            className="text-gray-500"
          />

          <h3 className="mt-6 text-2xl font-semibold">
            No Applications Found
          </h3>

          <p className="mt-2 text-gray-400">
            Start adding your first application.
          </p>

        </div>
      ) : (
        <div>

          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="flex flex-col gap-6 border-b border-white/10 p-8 transition hover:bg-white/[0.025] lg:flex-row lg:items-center lg:justify-between"
            >
              {/* Left */}

              <div className="flex items-start gap-5">

                <div className="flex items-center justify-center w-16 h-16 text-xl font-bold shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20">

                  {job.company?.charAt(0)}

                </div>

                <div>

                  <h3 className="text-2xl font-semibold">

                    {job.title}

                  </h3>

                  <div className="flex flex-wrap items-center gap-5 mt-3 text-gray-400">

                    <span className="flex items-center gap-2">

                      <Building2 size={16} />

                      {job.company}

                    </span>

                    <span className="flex items-center gap-2">

                      <MapPin size={16} />

                      {job.location || "Remote"}

                    </span>

                    <span className="flex items-center gap-2">

                      <Calendar size={16} />

                      Recently Added

                    </span>

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-wrap items-center gap-4">

                <span
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    badgeStyles[job.status]
                  }`}
                >
                  {job.status}
                </span>

                <button className="flex items-center justify-center w-12 h-12 transition border rounded-xl border-white/10 bg-white/5 hover:bg-white/10">

                  <ExternalLink size={18} />

                </button>

                <button
                  onClick={() => onDelete(job._id)}
                  className="flex items-center justify-center w-12 h-12 text-red-400 transition border rounded-xl border-red-500/20 bg-red-500/10 hover:bg-red-500/20"
                >

                  <Trash2 size={18} />

                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}