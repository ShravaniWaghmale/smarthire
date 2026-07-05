import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function ApplicationRow({
  application,
  index,
  onView,
  onEdit,
  onDelete,
}) {
  const formattedDate = application.createdAt
    ? new Date(application.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "--";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
      }}
      className="grid grid-cols-[2.5fr_2fr_1.3fr_1.2fr_1.3fr_140px] items-center border-b border-white/5 px-8 py-6 transition hover:bg-white/[0.03]"
    >
      {/* Company */}

      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
          <Building2 size={24} className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {application.company}
          </h3>

          <div className="flex items-center gap-1 mt-1 text-sm text-gray-400">
            <MapPin size={13} />
            {application.location || "Remote"}
          </div>
        </div>
      </div>

      {/* Role */}

      <div className="font-medium text-gray-300">
        {application.role}
      </div>

      {/* Status */}

      <div>
        <StatusBadge status={application.status} />
      </div>

      {/* Salary */}

      <div className="font-medium text-white">
        {application.salary || "--"}
      </div>

      {/* Applied */}

      <div className="text-gray-400">
        {formattedDate}
      </div>

      {/* Actions */}

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => onView?.(application)}
          className="p-2 text-gray-400 transition rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <Eye size={18} />
        </button>

        <button
          onClick={() => onEdit?.(application)}
          className="p-2 text-gray-400 transition rounded-xl hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete?.(application)}
          className="p-2 text-gray-400 transition rounded-xl hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}