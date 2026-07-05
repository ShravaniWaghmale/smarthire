import { motion } from "framer-motion";

import ApplicationRow from "./ApplicationRow";
import EmptyState from "./EmptyState";

export default function ApplicationsTable({
  applications = [],
  loading = false,
  onDelete,
  onEdit,
  onView,
}) {
  if (loading) {
    return (
      <div className="flex h-72 items-center justify-center rounded-3xl border border-white/10 bg-[#0F172A]/95">
        <div className="w-10 h-10 border-4 rounded-full animate-spin border-cyan-500 border-t-transparent" />
      </div>
    );
  }

  if (!applications.length) {
    return <EmptyState />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="grid grid-cols-[2.5fr_2fr_1.3fr_1.2fr_1.3fr_140px] border-b border-white/10 bg-white/[0.02] px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">

        <div>Company</div>
        <div>Role</div>
        <div>Status</div>
        <div>Salary</div>
        <div>Applied</div>
        <div className="text-center">Actions</div>

      </div>

      {/* Rows */}

      <div>
        {applications.map((app, index) => (
          <ApplicationRow
            key={app._id || app.id}
            application={app}
            index={index}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
          />
        ))}
      </div>
    </motion.div>
  );
}