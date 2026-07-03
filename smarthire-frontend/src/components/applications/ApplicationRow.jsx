import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: index * 0.05,
      }}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.05]"
    >
      {/* LEFT SECTION */}

      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
          <Building2 size={24} className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {application.company}
          </h3>

          <p className="mt-1 text-gray-400">
            {application.role}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {application.location || "Remote"}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {application.date || "Recently"}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center gap-5">
        <StatusBadge status={application.status} />

        <div className="flex items-center gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onView?.(application)}
            className="p-2 text-gray-400 transition rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400"
            title="View"
          >
            <Eye size={18} />
          </button>

          <button
            onClick={() => onEdit?.(application)}
            className="p-2 text-gray-400 transition rounded-xl hover:bg-yellow-500/10 hover:text-yellow-400"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete?.(application)}
            className="p-2 text-gray-400 transition rounded-xl hover:bg-red-500/10 hover:text-red-400"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}