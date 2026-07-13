import {
  CheckCircle2,
  FileText,
  Sparkles,
  Award,
} from "lucide-react";

export default function ResumeStrength({ analysis }) {
  const strengths = (analysis?.strengths || []).slice(0, 3);

  const icons = [
    CheckCircle2,
    FileText,
    Sparkles,
    Award,
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

      <div className="flex items-center justify-between mb-7">
        <h2 className="text-2xl font-bold text-white">
          Resume Strengths
        </h2>

        <span className="text-sm text-emerald-400 font-medium">
          Top 3 Strengths
        </span>
      </div>

      <div className="space-y-4">
        {strengths.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition hover:border-emerald-400/40"
            >
              <div className="rounded-xl bg-emerald-500/20 p-3">
                <Icon
                  size={22}
                  className="text-emerald-400"
                />
              </div>

              <p className="leading-7 text-gray-200">
                {item}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}