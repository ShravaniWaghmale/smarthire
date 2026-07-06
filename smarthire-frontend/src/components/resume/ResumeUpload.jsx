import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { UploadCloud } from "lucide-react";

import { analyzeResume } from "../../api/resume";

export default function ResumeUpload({ onAnalysis }) {
  const inputRef = useRef();

  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    if (!file) return;

    try {
      setUploading(true);

      const result = await analyzeResume(file);

      toast.success("Resume analyzed successfully 🎉");

      // Pass only the analysis object
      onAnalysis(result.analysis);

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Resume analysis failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-dashed border-cyan-500/30 bg-white/[0.03] p-10">

      <div className="flex flex-col items-center">

        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">

          <UploadCloud
            size={36}
            className="text-white"
          />

        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          Upload Resume
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Upload a PDF or DOCX resume (Maximum 5 MB)
        </p>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => handleUpload(e.target.files[0])}
        />

        <button
          disabled={uploading}
          onClick={() => inputRef.current.click()}
          className="px-8 py-4 mt-8 font-semibold text-white transition rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 disabled:opacity-60"
        >
          {uploading ? "Analyzing Resume..." : "Choose Resume"}
        </button>

      </div>

    </div>
  );
}