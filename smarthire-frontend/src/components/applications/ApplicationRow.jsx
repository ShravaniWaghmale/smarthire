import { motion } from "framer-motion";
import {
  Building2,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";

export default function ApplicationRow({
  job,
  onEdit,
  onDelete,
}) {
  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatSalary = (salary) => {
    if (!salary) return "-";

    return `₹${Number(salary).toLocaleString("en-IN")}`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
      className="grid grid-cols-[2.3fr_1.6fr_1.2fr_1fr_1.2fr_150px] items-center border-b border-white/5 px-8 py-5 transition-colors"
    >
      {/* Company */}

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <Building2
            size={22}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            {job.company}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {job.location || "Remote"}
          </p>
        </div>
      </div>

      {/* Role */}

      <div>
        <h4 className="font-medium text-white">
          {job.role}
        </h4>
      </div>

      {/* Status */}

      <div>
        <StatusBadge status={job.status} />
      </div>

      {/* Salary */}

      <div className="font-medium text-white">
        {formatSalary(job.salary)}
      </div>

      {/* Applied Date */}

      <div className="text-gray-300">
        {formatDate(job.createdAt)}
      </div>

      {/* Actions */}

      <div className="flex items-center justify-center gap-2">
        {/* View */}

        <Link
          to={`/applications/${job._id}`}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <Eye size={17} />
        </Link>

        {/* Edit */}

        <button
          onClick={() => onEdit(job)}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition-all hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          <Pencil size={17} />
        </button>

        {/* Delete */}

        <button
          onClick={() => onDelete(job._id)}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition-all hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </motion.div>
  );
}