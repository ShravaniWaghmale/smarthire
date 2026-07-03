import { motion } from "framer-motion";

import ApplicationRow from "./ApplicationRow";
import EmptyState from "./EmptyState";

export default function ApplicationsTable({
  jobs,
  loading,
  search,
  statusFilter,
  sortBy,
  onEdit,
  onDelete,
}) {
  let filteredJobs = [...jobs];

  // Search
  if (search.trim()) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company?.toLowerCase().includes(search.toLowerCase()) ||
        job.role?.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Status
  if (statusFilter !== "All") {
    filteredJobs = filteredJobs.filter(
      (job) => job.status === statusFilter
    );
  }

  // Sorting
  switch (sortBy) {
    case "Oldest":
      filteredJobs.sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      );
      break;

    case "Company (A-Z)":
      filteredJobs.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
      break;

    case "Company (Z-A)":
      filteredJobs.sort((a, b) =>
        b.company.localeCompare(a.company)
      );
      break;

    default:
      filteredJobs.sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="grid grid-cols-[2.3fr_1.6fr_1.2fr_1fr_1.2fr_150px] border-b border-white/10 bg-white/[0.02] px-8 py-5 text-sm font-semibold uppercase tracking-wide text-gray-400">

        <div>Company</div>

        <div>Role</div>

        <div>Status</div>

        <div>Salary</div>

        <div>Applied</div>

        <div className="text-center">Actions</div>

      </div>

      {/* Loading */}

      {loading && (
        <div className="py-20 text-center text-gray-400">
          Loading applications...
        </div>
      )}

      {/* Empty */}

      {!loading && filteredJobs.length === 0 && (
        <EmptyState />
      )}

      {/* Rows */}

      {!loading &&
        filteredJobs.map((job) => (
          <ApplicationRow
            key={job._id}
            job={job}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
    </motion.div>
  );
}