import { Target } from "lucide-react";

export default function JobMatchCard({ analysis }) {
  const score = analysis?.matchScore || 0;

  let color = "text-red-400";
  let bg = "from-red-500 to-orange-500";
  let status = "Low Match";

  if (score >= 80) {
    color = "text-emerald-400";
    bg = "from-emerald-500 to-green-500";
    status = "Excellent Match";
  } else if (score >= 60) {
    color = "text-cyan-400";
    bg = "from-cyan-500 to-blue-500";
    status = "Good Match";
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <div className="flex items-center gap-3 mb-6">

        <Target className={color} size={28} />

        <h2 className="text-2xl font-bold text-white">
            Job Match Score
        </h2>

        </div>

        <div className="flex items-end gap-3">

        <span className="text-6xl font-black text-white">
            {score}
        </span>

        <span className="mb-2 text-2xl text-gray-400">
            %
        </span>

        </div>

        <div
        className={`mt-5 inline-flex rounded-full bg-gradient-to-r ${bg} px-5 py-2 font-semibold text-white`}
        >
        {status}
        </div>

        <div className="h-3 mt-8 overflow-hidden rounded-full bg-white/10">

        <div
            className={`h-full bg-gradient-to-r ${bg}`}
            style={{
            width: `${score}%`,
            }}
        />

        </div>

        <p className="mt-6 leading-7 text-gray-400">

        {score >= 80 &&
            "Your resume is highly aligned with this job description."}

        {score >= 60 &&
            score < 80 &&
            "Your resume matches many requirements but can be improved by adding a few missing skills."}

        {score < 60 &&
            "Your resume is missing several important requirements mentioned in the job description."}

        </p>

    </div>
    );
}