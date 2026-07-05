import { motion } from "framer-motion";

import JobCard from "./JobCard";
import JobSkeleton from "./JobSkeleton";

export default function JobList({
  jobs = [],
  loading = false,
  onView,
}) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <JobSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0F172A]/95 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">
          No Jobs Found
        </h2>

        <p className="mt-3 text-gray-400">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onView={onView}
        />
      ))}
    </motion.div>
  );
}