import { FileText, Eye, Download, CheckCircle2 } from "lucide-react";

export default function ResumeAnalysis({ analysis }) {
  if (!analysis?.resumeUrl) return null;

  const fileName = decodeURIComponent(
    analysis.resumeUrl.split("/").pop()
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-cyan-400" size={28} />

        <h2 className="text-2xl font-bold text-white">
          Resume Uploaded
        </h2>
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex items-center justify-between flex-wrap gap-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
              <FileText size={30} className="text-cyan-400" />
            </div>

            <div>

              <h3 className="font-semibold text-white break-all">
                {fileName}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 size={16} />
                Uploaded Successfully
              </div>

            </div>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                window.open(analysis.resumeUrl, "_blank")
              }
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              <Eye size={18} />
              View Resume
            </button>

            <a
              href={analysis.resumeUrl}
              download
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              <Download size={18} />
              Download
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}