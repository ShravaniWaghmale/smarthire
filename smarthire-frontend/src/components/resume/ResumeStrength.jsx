import {
  CheckCircle2,
  FileText,
  Sparkles,
  Award,
} from "lucide-react";

export default function ResumeStrength({
  strengths = [],
}) {
  const icons = [
    CheckCircle2,
    FileText,
    Sparkles,
    Award,
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h2 className="text-2xl font-bold text-white mb-7">
        Resume Strengths
      </h2>

      <div className="space-y-4">
        {strengths.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-2xl border-emerald-500/20 bg-emerald-500/10"
            >
              <div className="p-3 rounded-xl bg-emerald-500/20">
                <Icon
                  size={22}
                  className="text-emerald-400"
                />
              </div>

              <p className="text-gray-200">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}