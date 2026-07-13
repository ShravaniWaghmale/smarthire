import {
  FileText,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function ResumeAnalysis({
  analysis,
  onReset,
}) {
  if (!analysis) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-cyan-400" size={28} />

        <h2 className="text-2xl font-bold text-white">
          Resume Uploaded
        </h2>
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="flex flex-wrap items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
              <FileText
                size={30}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h3 className="font-semibold text-white break-all">
                {analysis.originalName}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} />
                Uploaded Successfully
              </div>
            </div>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                window.open(
                  analysis.resumeUrl,
                  "_blank"
                )
              }
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600"
            >
              <div className="flex items-center gap-2">
                <Eye size={18} />
                View Resume
              </div>
            </button>

            <button
              onClick={onReset}
              className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/5"
            >
              Analyze Another
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}