import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {

  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch jobs
  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Delete job
  const deleteJob = async (id) => {
    await API.delete(`/jobs/${id}`);
    fetchJobs();
  };

  // Update status
  const updateStatus = async (id, status) => {
    await API.put(`/jobs/${id}`, { status });
    fetchJobs();
  };

  // Filter
  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  // Stats
  const stats = {
    total: jobs.length,
    applied: jobs.filter((j) => j.status === "Applied").length,
    interview: jobs.filter((j) => j.status === "Interview").length,
    offer: jobs.filter((j) => j.status === "Offer").length,
  };

  return (
    <div className="min-h-screen bg-[#0b1220] p-8 text-white">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Job Tracker Dashboard 🚀
        </h1>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="p-4 border rounded bg-white/5 border-white/10">
          Total: {stats.total}
        </div>
        <div className="p-4 border rounded bg-white/5 border-white/10">
          Applied: {stats.applied}
        </div>
        <div className="p-4 border rounded bg-white/5 border-white/10">
          Interview: {stats.interview}
        </div>
        <div className="p-4 border rounded bg-white/5 border-white/10">
          Offer: {stats.offer}
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 mb-6">
        {["All", "Applied", "Interview", "Offer", "Rejected"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded border border-white/10 ${
              filter === f ? "bg-purple-500 text-black" : "bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PREMIUM ADD BUTTON (STEP 5) */}
      <div className="flex justify-end mb-8">
        <button
          className="px-6 py-3 font-semibold text-black rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400"
        >
          + Add Application
        </button>
      </div>

      {/* JOB LIST + EMPTY STATE */}
      {filteredJobs.length === 0 ? (
        <div className="p-10 mt-10 text-center border border-dashed border-white/10 rounded-2xl">

          <h2 className="mb-3 text-2xl font-semibold">
            No applications yet 🚀
          </h2>

          <p className="text-white/60">
            Start tracking your first job application.
          </p>

        </div>
      ) : (
        <div className="space-y-3">

          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="flex items-center justify-between p-4 border rounded-lg bg-white/5 border-white/10"
            >
              <div>
                <h2 className="font-semibold">{job.title}</h2>
                <p className="text-sm text-white/60">
                  {job.company} • {job.location}
                </p>

                <span className="inline-block px-2 py-1 mt-1 text-xs rounded bg-white/10">
                  {job.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={job.status}
                  onChange={(e) => updateStatus(job._id, e.target.value)}
                  className="p-2 text-sm border rounded bg-white/5 border-white/10"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

                <button
                  onClick={() => deleteJob(job._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}