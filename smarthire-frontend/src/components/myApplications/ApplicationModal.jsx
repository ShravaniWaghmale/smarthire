import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const STATUS = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

export default function ApplicationModal({
  open,
  application,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    status: "Applied",
    coverLetter: "",
    notes: "",
    resumeUrl: "",
  });

  useEffect(() => {
    if (application) {
      setForm({
        company: application.company || "",
        role: application.role || "",
        location: application.location || "",
        salary: application.salary || "",
        status: application.status || "Applied",
        coverLetter: application.coverLetter || "",
        notes: application.notes || "",
        resumeUrl: application.resumeUrl || "",
      });
    } else {
      setForm({
        company: "",
        role: "",
        location: "",
        salary: "",
        status: "Applied",
        coverLetter: "",
        notes: "",
        resumeUrl: "",
      });
    }
  }, [application, open]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0F172A] shadow-2xl"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {application ? "Edit Application" : "Add Application"}
                </h2>

                <p className="mt-1 text-gray-400">
                  Fill in your application details.
                </p>
              </div>

              <button
                onClick={onClose}
                className="sticky top-0 z-20 float-right rounded-xl bg-[#0F172A] p-2 hover:bg-white/10"
                >
                    
                <X className="text-gray-300" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Company
                  </label>

                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Role
                  </label>

                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Location
                  </label>

                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Salary
                  </label>

                  <input
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  >
                    {STATUS.map((item) => (
                      <option key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Resume URL
                  </label>

                  <input
                    name="resumeUrl"
                    value={form.resumeUrl}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Cover Letter
                </label>

                <textarea
                  rows={4}
                  name="coverLetter"
                  value={form.coverLetter}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Notes
                </label>

                <textarea
                  rows={3}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 text-white border rounded-xl border-white/10 hover:bg-white/10"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                >
                  {application ? "Update Application" : "Add Application"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}