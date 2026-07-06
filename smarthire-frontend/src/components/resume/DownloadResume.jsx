import {
  Download,
  FileDown,
  Sparkles,
} from "lucide-react";

export default function DownloadResume({
  onDownload,
}) {
  return (
    <div className="p-8 overflow-hidden border rounded-3xl border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10">

      <div className="flex items-center gap-4">

        <div className="p-4 rounded-2xl bg-cyan-500/15">
          <FileDown
            className="text-cyan-400"
            size={30}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Improved Resume
          </h2>

          <p className="mt-1 text-gray-300">
            Download the optimized version of your
            resume.
          </p>
        </div>

      </div>

      <button
        onClick={onDownload}
        className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white transition hover:scale-[1.03]"
      >
        <Download size={20} />

        Download Resume

        <Sparkles size={18} />
      </button>
    </div>
  );
}