import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2, X } from "lucide-react";

export default function DeleteModal({
  open,
  onClose,
  onConfirm,
  application,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-5"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0C1425] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          >
            {/* Header */}

            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-500/15">
                  <AlertTriangle
                    size={24}
                    className="text-red-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    Delete Application
                  </h2>

                  <p className="text-sm text-gray-400">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 transition rounded-xl hover:bg-white/10"
              >
                <X
                  size={20}
                  className="text-gray-300"
                />
              </button>
            </div>

            {/* Body */}

            <div className="px-6 py-6">
              <p className="mb-5 text-gray-300">
                Are you sure you want to permanently delete this application?
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-white">
                  {application?.company || "Company"}
                </h3>

                <p className="mt-1 text-gray-400">
                  {application?.role || "Role"}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {application?.status && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400">
                      {application.status}
                    </span>
                  )}

                  {application?.location && (
                    <span className="px-3 py-1 text-xs text-gray-300 rounded-full bg-white/5">
                      {application.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}

            <div className="flex justify-end gap-3 px-6 py-5 border-t border-white/10">
              <button
                onClick={onClose}
                className="px-5 py-3 text-white transition border rounded-xl border-white/10 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition bg-red-500 rounded-xl hover:bg-red-600"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}