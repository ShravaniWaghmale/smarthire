import { Briefcase } from "lucide-react";
import toast from "react-hot-toast";

import { analyzeJobMatch } from "../../api/jobMatch";

export default function JobDescriptionInput({
  jobDescription,
  setJobDescription,
  loading,
  setLoading,
  resumeAnalysis,
  onAnalysis,
}) {
  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      return toast.error("Paste a Job Description first.");
    }

    try {
      setLoading(true);

      const result = await analyzeJobMatch(
        resumeAnalysis.professionalSummary,
        jobDescription
      );

      onAnalysis(result.analysis);

      toast.success("Job Match Analysis Complete 🎉");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Job Match Analysis Failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-cyan-400" size={24} />

        <h2 className="text-2xl font-bold text-white">
          Analyze Resume For A Job
        </h2>
      </div>

      <textarea
        rows={7}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the complete Job Description here..."
        className="w-full p-5 text-white border outline-none resize-none rounded-2xl border-white/10 bg-black/20 placeholder:text-gray-500 focus:border-cyan-500"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="px-8 py-4 mt-6 font-semibold text-white rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 disabled:opacity-50"
      >
        {loading
          ? "Analyzing Job Match..."
          : "Analyze Job Match"}
      </button>

    </div>
  );
}