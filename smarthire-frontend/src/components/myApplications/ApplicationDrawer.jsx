import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Building2,
  MapPin,
  Calendar,
  Link2,
  FileText,
} from "lucide-react";

export default function ApplicationDrawer({
  open,
  onClose,
  application,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-[1000] h-full w-full max-w-xl border-l border-white/10 bg-[#0C1425] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Application Details
                </h2>
                <p className="text-sm text-gray-400">
                  Full overview of your application
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 transition rounded-xl hover:bg-white/10"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              {/* Company */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20">
                    <Building2 className="text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {application?.company}
                    </h3>
                    <p className="text-gray-400">
                      {application?.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <InfoCard
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={application?.location || "Remote"}
                />

                <InfoCard
                  icon={<Calendar size={16} />}
                  label="Applied On"
                  value={application?.date || "Recently"}
                />
              </div>

              {/* Status */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="mb-2 text-sm text-gray-400">
                  Status
                </h4>

                <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400">
                  {application?.status}
                </span>
              </div>

              {/* Job Link */}
              {application?.jobLink && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="mb-2 text-sm text-gray-400">
                    Job Link
                  </h4>

                  <a
                    href={application.jobLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:underline"
                  >
                    <Link2 size={14} />
                    Open Job Posting
                  </a>
                </div>
              )}

              {/* Notes */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 mb-3 text-gray-400">
                  <FileText size={16} />
                  Notes
                </div>

                <p className="text-gray-300 whitespace-pre-wrap">
                  {application?.notes || "No notes added"}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2 text-gray-400">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      <p className="mt-2 font-medium text-white">
        {value}
      </p>
    </div>
  );
}