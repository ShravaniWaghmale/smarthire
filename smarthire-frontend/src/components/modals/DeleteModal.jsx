import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2, X } from "lucide-react";

export default function DeleteModal({
  open,
  onClose,
  onConfirm,
  company = "",
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6 backdrop-blur-md"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1527] shadow-2xl"
          >

            {/* Header */}

            <div className="flex items-center justify-between py-5 border-b border-white/10 px-7">

              <div className="flex items-center gap-3">

                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-500/15">

                  <AlertTriangle
                    size={22}
                    className="text-red-400"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-bold text-white">

                    Delete Application

                  </h2>

                  <p className="mt-1 text-sm text-gray-400">

                    This action cannot be undone.

                  </p>

                </div>

              </div>

              <button
                onClick={onClose}
                className="p-2 transition rounded-xl hover:bg-white/10"
              >

                <X
                  size={18}
                  className="text-white"
                />

              </button>

            </div>

            {/* Body */}

            <div className="py-8 px-7">

              <p className="leading-7 text-gray-300">

                Are you sure you want to permanently delete

                <span className="font-semibold text-white">

                  {" "}
                  {company || "this application"}

                </span>

                ?

              </p>

            </div>

            {/* Footer */}

            <div className="flex justify-end gap-4 py-5 border-t border-white/10 px-7">

              <button
                onClick={onClose}
                className="px-6 py-3 text-white transition border rounded-xl border-white/10 hover:bg-white/10"
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