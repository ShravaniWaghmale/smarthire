import { AnimatePresence, motion } from "framer-motion";
import { LogOut, X } from "lucide-react";

export default function LogoutModal({
  open,
  onClose,
  onConfirm,
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
            transition={{
              duration: 0.2,
            }}
            className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0E1628]"
          >
            {/* Header */}

            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

              <div className="flex items-center gap-3">

                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-500/15">

                  <LogOut
                    size={22}
                    className="text-red-400"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-bold text-white">
                    Logout
                  </h2>

                  <p className="text-sm text-gray-400">
                    End your current session
                  </p>

                </div>

              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10"
              >
                <X
                  size={20}
                  className="text-gray-400"
                />
              </button>

            </div>

            {/* Body */}

            <div className="px-6 py-7">

              <p className="text-gray-300">
                Are you sure you want to logout from SmartHire?
              </p>

            </div>

            {/* Footer */}

            <div className="flex justify-end gap-3 px-6 py-5 border-t border-white/10">

              <button
                onClick={onClose}
                className="px-5 py-3 text-white border rounded-xl border-white/10 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="px-6 py-3 font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600"
              >
                Logout
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}