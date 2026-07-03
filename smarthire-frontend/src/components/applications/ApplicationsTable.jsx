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
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
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
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="grid grid-cols-[2.4fr_1.8fr_1.2fr_1.2fr_1.2fr_120px] border-b border-white/10 px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">

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