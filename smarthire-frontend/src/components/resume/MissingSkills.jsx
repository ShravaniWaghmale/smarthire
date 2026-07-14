import { XCircle } from "lucide-react";

export default function MissingSkills({ skills = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <div className="flex items-center gap-3 mb-6">
        <XCircle className="text-red-400" size={24} />
        <h2 className="text-2xl font-bold text-white">
          Missing Skills
        </h2>
      </div>

      {skills.length === 0 ? (
        <div className="p-5 text-center border rounded-2xl border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
          Excellent! Your resume already contains all important skills from this job description.
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium text-red-400 rounded-full bg-red-500/15"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}