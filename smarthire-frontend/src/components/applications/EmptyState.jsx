import { BriefcaseBusiness } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-white/5">
        <BriefcaseBusiness
          size={38}
          className="text-cyan-400"
        />
      </div>

      <h2 className="text-2xl font-bold text-white">
        No applications found
      </h2>

      <p className="max-w-md mt-3 text-gray-400">
        Start tracking your job applications by clicking
        <span className="font-semibold text-cyan-400">
          {" "}
          Add Application
        </span>
        .
      </p>
    </div>
  );
}