import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function AddApplicationModal({
  open,
  onClose,
  onSave,
  initialData = null,
}) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    status: "Applied",
    jobLink: "",
    notes: "",
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (initialData) {
      setForm({
        company: initialData.company || "",
        role: initialData.role || "",
        location: initialData.location || "",
        salary: initialData.salary || "",
        status: initialData.status || "Applied",
        jobLink: initialData.jobLink || "",
        notes: initialData.notes || "",
      });
    } else {
      setForm({
        company: "",
        role: "",
        location: "",
        salary: "",
        status: "Applied",
        jobLink: "",
        notes: "",
      });
    }
  }, [initialData, open]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.company.trim() || !form.role.trim()) return;

    onSave(form);
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-lg"
        >

          <div className="flex items-center justify-center min-h-screen p-8">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              transition={{
                duration: 0.25,
              }}
              className="my-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0C1425] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
            >

              {/* Header */}

              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">

                <div>

                  <h2 className="text-3xl font-bold text-white">

                    {initialData
                      ? "Edit Application"
                      : "Add Application"}

                  </h2>

                  <p className="mt-2 text-gray-400">

                    Track every opportunity in one place.

                  </p>

                </div>

                <button
                  onClick={onClose}
                  className="p-2 transition rounded-xl hover:bg-white/10"
                >

                  <X
                    size={22}
                    className="text-white"
                  />

                </button>

              </div>

              {/* Body */}

              <form
                onSubmit={handleSubmit}
                className="max-h-[75vh] overflow-y-auto p-8"
              >

                <div className="grid gap-7 md:grid-cols-2">

                  <Input
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />

                  <Input
                    label="Role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                  />

                  <Input
                    label="Location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                  />

                  <Input
                    label="Salary"
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                  />

                  <div>

                    <label className="block mb-2 text-sm font-medium text-gray-300">

                      Status

                    </label>

                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#101B31] px-4 text-white outline-none transition focus:border-cyan-500"
                    >

                      <option>Applied</option>
                      <option>Interview</option>
                      <option>Offer</option>
                      <option>Rejected</option>

                    </select>

                  </div>

                  <Input
                    label="Job Link"
                    name="jobLink"
                    value={form.jobLink}
                    onChange={handleChange}
                  />

                </div>

                <div className="mt-8">

                  <label className="block mb-2 text-sm font-medium text-gray-300">

                    Notes

                  </label>

                  <textarea
                    rows={7}
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Interview rounds, recruiter details, preparation notes..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#101B31] p-4 text-white outline-none transition focus:border-cyan-500"
                  />

                </div>

                <div className="flex justify-end gap-4 mt-10">

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 text-white transition border rounded-xl border-white/10 hover:bg-white/10"
                  >

                    Cancel

                  </button>

                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-8 py-3 font-semibold text-white transition hover:scale-[1.03]"
                  >

                    {initialData
                      ? "Update Application"
                      : "Save Application"}

                  </button>

                </div>

              </form>

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block mb-2 text-sm font-medium text-gray-300">

        {label}

      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="h-12 w-full rounded-xl border border-white/10 bg-[#101B31] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      />

    </div>
  );
}