import {
  X,
  Building2,
  MapPin,
  Briefcase,
  IndianRupee,
  Calendar,
  FileText,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function ApplicationDetailsModal({
  application,
  onClose,
}) {
  if (!application) return null;

  const appliedDate = application.createdAt
    ? new Date(application.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "--";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">

        <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0F172A] p-8">

        <button
            onClick={onClose}
            className="sticky top-0 z-10 float-right text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Header */}

        <div className="flex items-center gap-5 mb-8">

          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">

            <Building2
              size={30}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              {application.company}
            </h2>

            <p className="mt-1 text-lg text-cyan-400">
              {application.role}
            </p>

          </div>

        </div>

        {/* Grid */}

        <div className="grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">

            <MapPin className="text-cyan-400" />

            <div>

              <p className="text-sm text-gray-400">
                Location
              </p>

              <p className="text-white">
                {application.location}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">

            <IndianRupee className="text-green-400" />

            <div>

              <p className="text-sm text-gray-400">
                Salary
              </p>

              <p className="text-white">
                {application.salary}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">

            <Calendar className="text-violet-400" />

            <div>

              <p className="text-sm text-gray-400">
                Applied On
              </p>

              <p className="text-white">
                {appliedDate}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5">

            <Briefcase className="text-yellow-400" />

            <div>

              <p className="text-sm text-gray-400">
                Status
              </p>

              <StatusBadge status={application.status} />

            </div>

          </div>

        </div>

        {/* Resume */}

        <div className="mt-8">

          <h3 className="mb-3 text-xl font-semibold text-white">
            Resume
          </h3>

          {application.resumeUrl ? (
            <a
              href={application.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="underline text-cyan-400"
            >
              View Resume
            </a>
          ) : (
            <p className="text-gray-400">
              No resume attached.
            </p>
          )}

        </div>

        {/* Cover Letter */}

        <div className="mt-8">

          <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-white">

            <FileText size={20} />

            Cover Letter

          </h3>

          <div className="p-5 text-gray-300 rounded-2xl bg-white/5">

            {application.coverLetter || "No cover letter added."}

          </div>

        </div>

        {/* Notes */}

        <div className="mt-8">

          <h3 className="mb-3 text-xl font-semibold text-white">
            Notes
          </h3>

          <div className="p-5 text-gray-300 rounded-2xl bg-white/5">

            {application.notes || "No notes available."}

          </div>

        </div>

        <div className="flex justify-end mt-10">

          <button
            onClick={onClose}
            className="px-8 py-3 text-white border rounded-2xl border-white/10 hover:bg-white/5"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}