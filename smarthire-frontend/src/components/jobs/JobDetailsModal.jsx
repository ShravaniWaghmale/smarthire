import { useState } from "react";
import {
  X,
  Building2,
  MapPin,
  Briefcase,
  IndianRupee,
  Clock,
} from "lucide-react";

import { applyJob } from "../../api/applications";

export default function JobDetailsModal({
  job,
  applications = [],
  onClose,
  onApplied,
}) {
  const [loading, setLoading] = useState(false);

  if (!job) return null;

  const applied = applications.some((app) => {
    const appliedJobId =
      typeof app.job === "object"
        ? app.job?._id
        : app.job;

    return String(appliedJobId) === String(job._id);
  });

  const handleApply = async () => {
    try {
      setLoading(true);

      await applyJob(job._id);

      if (onApplied) {
        await onApplied();
      }

      setTimeout(() => {
        onClose();
      }, 500);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Unable to apply."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0F172A] p-8">

        <button
          onClick={onClose}
          className="absolute text-gray-400 right-6 top-6 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-5 mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500">
            <Building2 size={30} className="text-white" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              {job.title}
            </h2>

            <p className="mt-1 text-lg text-cyan-400">
              {job.company}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">
            <MapPin className="text-cyan-400" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white">{job.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">
            <IndianRupee className="text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Salary</p>
              <p className="text-white">{job.salary}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">
            <Briefcase className="text-violet-400" />
            <div>
              <p className="text-sm text-gray-400">Experience</p>
              <p className="text-white">{job.experience}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">
            <Clock className="text-yellow-400" />
            <div>
              <p className="text-sm text-gray-400">Job Type</p>
              <p className="text-white">{job.type}</p>
            </div>
          </div>

        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Skills Required
          </h3>

          <div className="flex flex-wrap gap-3">
            {job.skills?.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-cyan-500/10 text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Job Description
          </h3>

          <p className="leading-8 text-gray-300">
            {job.description}
          </p>
        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="px-6 py-3 text-white border rounded-2xl border-white/10 hover:bg-white/5"
          >
            Close
          </button>

          <button
            disabled={loading || applied}
            onClick={handleApply}
            className={`rounded-2xl px-8 py-3 font-semibold text-white transition-all ${
              applied
                ? "cursor-not-allowed bg-emerald-600"
                : "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:scale-105"
            }`}
          >
            {loading
              ? "Applying..."
              : applied
              ? "✓ Applied"
              : "Apply Now"}
          </button>

        </div>

      </div>
    </div>
  );
}