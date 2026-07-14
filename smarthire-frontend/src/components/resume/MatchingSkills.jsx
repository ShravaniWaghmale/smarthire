import { CheckCircle2 } from "lucide-react";

export default function MatchingSkills({ skills = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

      <div className="flex items-center gap-3 mb-6">
        <CheckCircle2
          className="text-emerald-400"
          size={24}
        />

        <h2 className="text-2xl font-bold text-white">
          Matching Skills
        </h2>
      </div>

      {skills.length === 0 ? (
        <div className="p-5 text-center text-red-400 border rounded-2xl border-red-500/20 bg-red-500/10">
          No matching skills found.
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/15 text-emerald-400"
            >
              ✓ {skill}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}