import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await API.get("/jobs");
      setJobs(res.data);
    };

    fetchJobs();
  }, []);

  const applyJob = async (jobId) => {
    await API.post("/applications", { jobId });
    alert("Applied successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Available Jobs 💼
      </h1>

      {jobs.length === 0 ? (
        <p className="text-white/60">
          No jobs posted yet by admin.
        </p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="flex justify-between p-4 border rounded-lg border-white/10 bg-white/5"
            >
              <div>
                <h2 className="font-semibold">{job.title}</h2>
                <p className="text-sm text-white/60">
                  {job.company} • {job.location}
                </p>
              </div>

              <button
                onClick={() => applyJob(job._id)}
                className="px-4 py-2 text-black rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}